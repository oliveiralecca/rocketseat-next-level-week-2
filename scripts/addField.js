// Procurar o botão
document.querySelector('#add-time')

// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos. Quais campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos. Quais campos?
    const fields = newFieldContainer.querySelectorAll('input')

        // ao pegar todos os inputs do campo .schedule-item, ele forma uma lista e joga na variável fields; por isso, fields (nome da lista) posição 0 [0] e posição [1]
        // fields[0].value = ""
        // fields[1].value = ""

    // Para cada campo, limpar (iteração, repetição)
    fields.forEach(function(field) {
        field.value = ""
    })

    // Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
