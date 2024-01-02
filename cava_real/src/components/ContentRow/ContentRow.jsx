import { getProductsLastSold } from '../../services/productsService';
import Card from './Card';
import { useState, useEffect } from 'react';

function ContentRow() {
      const [producto , setProducto] = useState('');

      useEffect(() => {
        async function getProduct(){
          const product = await getProductsLastSold();
          setProducto(product.products[0]);
        }
        getProduct();
      },[])

      return (
        <div className="row-center" style={{justifyContent:'center'}}>
              
                    <Card producto={producto}/>

        
        </div>
    )
}

export default ContentRow;