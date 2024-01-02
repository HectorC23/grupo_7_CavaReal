import {getCategories} from "../../services/categoriesService";
import {getProducts} from "../../services/productsService";
import getUsers from "../../services/usersService";
import Card from "./Card/Card";

import { useState , useEffect } from "react";

function RowMovies() {
    const [list, setList] = useState([]);

    useEffect(() => {
      async function getList(){
        const products = await getProducts();
        const users = await getUsers();
        const categories = await getCategories();

        setList([
          {
            title:'Productos',
            count: products.count,
            icon: 'fa-solid fa-martini-glass'
          },
          {
            title:'Usuarios',
            count: users.count,
            icon: 'fa-solid fa-users'
          },
          {
            title:'Categorias',
            count: categories.count,
            icon: 'fa-solid fa-tag'
          },
        ])
      }
      getList();
    },[]);

    return (
        <div class="row">

            {Array.isArray(list) && list.map((item,i) => <Card key={item.title+i} titulo={item.title} cifra={item.count} icono={item.icon} />)}

        </div>
    )
}

export default RowMovies;