function Table({user}) {
    return (
            <tr>
                <th scope="row">{user.name}</th>
                <td>{user.email}</td>
                <td><a href={`http://localhost:3030/api/users/${user.id}`}><i class="fa-solid fa-circle-arrow-right" style={{fontSize:'2.5vw'}}/></a></td>
            </tr>
    )
}

export default Table;
