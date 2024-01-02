import Card from '../RowCounts/Card/Card';
import TableLastSold from '../Table/TableMostSold';

function ContentRow(props) {

      return (
        <div className="row">
              
                    <Card titulo={props.titulo} cifra={props.cifra} icono={props.icono} />

                    <div class={`col-lg-6 mb-4 text-center`}>
                    <div class="card shadow mb-4 text-center" >
                    <div class="card-header py-3">
                    <TableLastSold />
                    </div>
                    </div>
                    </div>
        </div>
    )
}

export default ContentRow;