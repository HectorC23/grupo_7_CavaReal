import { getProductsMostSold } from "../../services/productsService";
import Row from "./RowMS";
import { useState, useEffect } from "react";
function TableLastSold(){

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        async function getProductos(){
            const data = await getProductsMostSold();
            setProducts(data.products);
        }

        getProductos();
    },[]);
    
    return (
        <div style={{width:'90%'}}>
        <table class="table" id="table-last-sold">        
        <thead class="thead" style={{backgroundColor:'#dd6477'}}>
            <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Total Ventas</th>
            <th scope="col">Detalle</th>
            </tr>
        </thead>
        <tbody>
            {
            Array.isArray(products) && products.map((product,i) => <Row key={product.name + i} product={product}/>)
            }
        </tbody>
        </table>
        </div>
    )
}

export default TableLastSold;