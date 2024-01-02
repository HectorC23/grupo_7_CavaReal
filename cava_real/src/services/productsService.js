export async function getProducts(page){
    const pag = page? page : 0;
    console.log(page + 'PAGINAAAAAAA');
    try{
    const response = await fetch(`http://localhost:3030/api/products?page=${pag}`);
    const data = await response.json();
    
    if(response.status !== 200) throw new Error('Error al conectarse con la DB');
    
    return data;

    }catch(error){
        console.log(error);
    }
}

export async function getProductsLastSold(){
    try{
    const response = await fetch('http://localhost:3030/api/products/last-sold');
    const data = await response.json();
    
    if(response.status !== 200) throw new Error('Error al conectarse con la DB');
    
    console.log();
    return data;

    }catch(error){
        console.log(error);
    }
}

export async function getProductsMostSold(){
    try{
    const response = await fetch('http://localhost:3030/api/products/most-sold');
    const data = await response.json();
    
    if(response.status !== 200) throw new Error('Error al conectarse con la DB');
    
    console.log();
    return data;

    }catch(error){
        console.log(error);
    }
}

export async function getSales(){
    try{
    const response = await fetch('http://localhost:3030/api/products/sales');
    const data = await response.json();
    
    if(response.status !== 200) throw new Error('Error al conectarse con la DB');
    
    console.log();
    return data;

    }catch(error){
        console.log(error);
    }
}


