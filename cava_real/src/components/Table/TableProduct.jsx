import { getProducts } from "../../services/productsService";
import Row from "./RowP";
import { useState, useEffect } from "react";
function TableUser(){

    const [products, setProducts] = useState([]);
    const [pagina, setPagina] = useState(0);
    let [cantidadPaginas, setCantidadPaginas] = useState(0);
    
    useEffect(() => {
        async function getProductos(){
            const data = await getProducts();
            setCantidadPaginas(data.pages - 1);
            setProducts(data.data);
        }

        getProductos();
    },[]);

    useEffect(() => {
        async function getProductos(){
            const data = await getProducts(pagina);
            setProducts(data.data);
        }

        getProductos();
    },[pagina]);

    function siguientePagina(){
        setPagina(
            pagina + 1
        )
    }

    function anteriorPagina(){
        setPagina(
            pagina - 1
        )
    }
    
    return (
        <div style={{width:'90%'}}>
        <table class="table" id="table-info">        
        <thead class="thead" style={{backgroundColor:'#dd6477'}}>
            <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio</th>
            <th scope="col">Categoria</th>
            <th scope="col">Detalle</th>
            </tr>
        </thead>
        <tbody>
            {
            Array.isArray(products) && products.map((product,i) => <Row key={product.name + i} product={product}/>)
            }
        </tbody>
        </table>
        { 
            pagina>0 && <button onClick={anteriorPagina} id="button-table">Anterior</button>
        }
        {
            pagina<cantidadPaginas && <button onClick={siguientePagina}id="button-table">Siguiente</button>
        }
        </div>
    )
}

export default TableUser;