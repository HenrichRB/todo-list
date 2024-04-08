window.addEventListener('load', () =>{

    let contador = 1;
    
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
        <div class="itemTarefa" id="tarefa-${contador}">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            </div>
            <h3>
                ${tarefaAtual}
            </h3>
            <button type="button" class="btn btn-danger" onclick="deletarTarefa('${'tarefa-'+contador}')">🗑️</button>
        </div>`;
        contador++;
    })

    // botão de cancelar
    document.getElementById('btn-cancelar').addEventListener('click', (event) => {
        event.preventDefault();
        let $modal = document.getElementById('modal');
        $modal.classList.remove('modal-active');
    })

})

function deletarTarefa(id) {
    let tarefaHtml = document.getElementById(`${id}`);
    tarefaHtml.remove();
}