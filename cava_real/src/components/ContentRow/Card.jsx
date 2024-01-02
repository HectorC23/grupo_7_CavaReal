function Card({producto}) {
    console.log(producto);
    return (
        <div class={`col-lg-6 mb-4 text-center`}>
            <div class="container-product-medium-card">
                <img src={producto.img} alt={producto.name}/>
                <p class="name-product-card">{producto.name}</p>
                <p class="notation-product-card">Ultimo Producto Vendido</p>
                <p class="price-product-card">{'$' + producto.price}</p>
                <a id="link-detail" href={`http://localhost:3030/api/products/${producto.id}`}><i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    )
}

export default Card;