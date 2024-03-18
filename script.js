window.addEventListener('load', () =>{
    
    // botão de adicionar
    document.getElementById('btn-add').addEventListener('click', () => {
        let $modal = document.getElementById('modal');
        $modal.classList.toggle('modal-active');
    })
    
    // botão de salvar
    document.getElementById('btn-salvar').addEventListener('click', (event) => {
        event.preventDefault();
        let $listaTarefa = document.getElementById('listaTarefa');
        let $task = document.getElementById('task');
        let tarefaAtual = $task.value;
        $listaTarefa.innerHTML += `
        <div class="itemTarefa">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            </div>
            <h3>
                ${tarefaAtual}
            </h3>
            <button type="button" class="btn btn-danger">Danger</button>
        </div>`
    })

    // botão de cancelar
    document.getElementById('btn-cancelar').addEventListener('click', (event) => {
        event.preventDefault();
        let $modal = document.getElementById('modal')
        $modal.classList.remove('modal-active');
    })

})