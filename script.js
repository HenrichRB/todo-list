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
        $listaTarefa.innerHTML += `<h3>${tarefaAtual}</h3>`
    })

    // botão de cancelar
    document.getElementById('btn-cancelar').addEventListener('click', (event) => {
        event.preventDefault();
        let $modal = document.getElementById('modal')
        $modal.classList.remove('modal-active');
    })

})