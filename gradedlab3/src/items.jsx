function Item({ product_image, title, price,category }){

    return(
        <div className="prod">
        <img src={product_image} alt="product picture"></img>
        <h2>{title}</h2>
        <h4>{price}</h4>
        <p>{category}</p>
        </div>
    )
}
export default Item
