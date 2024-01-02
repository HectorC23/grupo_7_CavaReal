import { useEffect, useState } from "react";
import ContentRow from "../components/ContentRow/ContentRowSolds";
import { getSales } from "../services/productsService";


function MostSoldView(){

    const [total , setTotal] = useState(0);

      useEffect(() => {
        async function getProduct(){
          const sales = await getSales();
          setTotal(sales.data);
        }
        getProduct();
      },[])

    return(
        <div class="container-fluid">
            <h1 id='title-view'>PRODUCTOS MAS VENDIDOS</h1>
            <ContentRow titulo={'TOTAL DE VENTAS'} cifra={total} icono={"fa-solid fa-dollar-sign"}/>
        </div>
    )
}

export default MostSoldView;