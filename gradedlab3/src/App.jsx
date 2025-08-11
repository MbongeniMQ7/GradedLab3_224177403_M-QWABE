import Item from './items';
import {useState,useEffect} from 'react';


function App() {
  const [loading,setLoading] = useState(false)
  const [allItems,setAllProduct] = useState([])
  const [filteredProducts,Setfilteredproducts] = useState([])

    useEffect(()=>{
    const data = async ()=>{
      const product = await fetch ("https://fakestoreapi.com/products")
      if(product){
      const allData = await product.json()
      setAllProduct(allData)
      Setfilteredproducts(allData)
      setLoading(true)
      }
    }
    data()
  },[])

  const FilterProducts = (Searchvalue)=>{
    if (Searchvalue == ""){
      Setfilteredproducts(allItems)

    }
    const newCat = allItems.filter((itm)=> itm.title.toLowerCase().includes(Searchvalue.toLowerCase()) )
    Setfilteredproducts(newCat)
  }

  return(
    <>
    <div>
      <input placeholder='Enter a item name' onChange={(e)=>{FilterProducts(e.target.value)}}></input>
    </div>
      <h2>Mbongrizzy Online Store: </h2>
      <div className="profile">
        {loading?filteredProducts.length !=0?filteredProducts.map((value, index)=>(

          <Item
          
          product_image={value.image}
          title={value.title}
          price={value.price}
          category={value.category}
        />
      
    

      )):
        <p>product not found</p>

      :<p>Loading</p>}
        
      </div>
    </>
  )
}

export default App
