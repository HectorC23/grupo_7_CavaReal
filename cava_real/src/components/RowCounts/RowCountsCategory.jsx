import {getCategoriesCounts} from "../../services/categoriesService";
import Card from "./Card/Card";

import { useState , useEffect } from "react";

function RowMovies() {
    const [list, setList] = useState([]);

    useEffect(() => {
      async function getList(){
        const categories = await getCategoriesCounts();

        setList([
          {
            title:'Vinos',
            count: categories.data.Vinos,
            icon: 'fa-solid fa-wine-glass'
          },
          {
            title:'Licores',
            count: categories.data.Licores,
            icon: "fa-solid fa-whiskey-glass"
          },
          {
            title:'Accesorios',
            count: categories.data.Accesorios,
            icon: "fa-solid fa-martini-glass-empty"
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