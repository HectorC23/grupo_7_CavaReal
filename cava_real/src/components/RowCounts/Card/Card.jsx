function Card(props) {
    const {
        //valores por defecto
        titulo='titulo por defecto',
        cifra= 0,
        icono='fa-solid fa-question',
    } = props;

    return (
        <div class="col-md-4 mb-4" >
            <div class='card border-left shadow h-100 py-2' id="card-panel">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class='text-xs font-weight-bold text-uppercase mb-1'>{titulo}</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{cifra}</div>
                        </div>
                        <div class="col-auto">
                            <i class={`${icono} `} id="icon-panel"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;