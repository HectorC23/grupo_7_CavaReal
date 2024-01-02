import { Link } from "react-router-dom";

function Table({product}) {
    return (
            <tr>
                <th scope="row">{product.name}</th>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td><a href={`http://localhost:3030/api/products/${product.id}`}><i class="fa-solid fa-circle-arrow-right" style={{fontSize:'2.5vw'}}/></a></td>
            </tr>
    )
}

export default Table;
