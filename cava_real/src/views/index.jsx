import RowCounts from '../components/RowCounts/RowCounts';
import ContentRow from '../components/ContentRow/ContentRow';

function Index(){
    return(
       
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
            </div>

            
            <RowCounts />
            <p id="subtitle-footer" className='text-center'>El sabor real del Vino</p>


            
           <ContentRow />
      
          </div>
    )
}

export default Index;