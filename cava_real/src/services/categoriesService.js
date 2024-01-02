export async function getCategories(){
    try{
    const response = await fetch('http://localhost:3030/api/categories');
    const data = await response.json();
    
    if(response.status !== 200) throw new Error('Error al conectarse con la DB');
    
    return data;

    }catch(error){
        console.log(error);
    }
}

export async function getCategoriesCounts(){
    try{
    const response = await fetch('http://localhost:3030/api/categories/count');
    const data = await response.json();
    
    if(response.status !== 200) throw new Error('Error al conectarse con la DB');
    
    return data;

    }catch(error){
        console.log(error);
    }
}
