import getUsers from "../../services/usersService";
import Row from "./Row";
import { useState, useEffect } from "react";
function TableUser(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsuarios(){
            const data = await getUsers();

            setUsers(data.data);
        }

        getUsuarios();
    },[]);
    
    return (
        <table class="table" id="table-info">        
        <thead class="thead" style={{backgroundColor:'#dd6477'}}>
            <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Detalle</th>
            </tr>
        </thead>
        <tbody>
            {
            Array.isArray(users) && users.map((user,i) => <Row key={users.name + i} user={user}/>)
            }
        </tbody>
        </table>
    )
}

export default TableUser;