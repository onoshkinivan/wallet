let sale = document.querySelector('.btn');
let tbody = document.querySelector('.tbody');
let selectCategory = document.querySelector('.edit__input');
// let name = document.querySelector('.editor__input');- не нужны, так как задается как имя при cash.name
// let price = document.querySelector('.editor__input');- не нужны, так как задается как имя при cash.price
let del = document.querySelector('.delete');
let diagram = document.querySelector('.diagram');
let categories = document.querySelectorAll('.legend__desc')

//Обработка клика кнопки "Добавить"
sale.addEventListener('click', (event) => {
    event.preventDefault();
    let cash = {};
    cash.name = editor.name.value;
    let options = editor.selectCategory.options;
    cash.category = options[editor.selectCategory.selectedIndex].innerText;
    cash.price = +editor.price.value;

    for (let category of categories) {
        if (cash.category == category.innerText) {
            category.nextElementSibling.textContent = Number(category.nextElementSibling.innerText) + cash.price;
        }
    }

    tbody.insertAdjacentHTML('beforeEnd',
        `
     <tr class="cash__item cash__row">
         <td class="cash__td">${cash.name}</td>
         <td class="cash__td">${cash.category}</td>
         <td class="cash__td">${cash.price}</td>
         <td class="cash__td delete">X</td>
     </tr>
`
    )
    //Сброс полей
    editor.reset()
})



//Удаление покупки
tbody.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        console.log('click')
        event.target.closest('tr').remove();
    }
})