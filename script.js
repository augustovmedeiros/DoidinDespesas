$(document).ready(function() {
    // Lógica para abrir o modal de adicionar gasto
    // ...

    // Lógica para filtrar por mês
    // ...

    // Lógica para filtrar por ano
    // ...

    // Tornar a tabela de gastos arrastável
    $("#expense-list").sortable({
        handle: ".drag-handle",
        update: function(event, ui) {
            // Lógica para atualizar a ordem dos itens na tabela
            // Pode ser necessário atualizar os índices dos itens no backend
        }
    });
});
