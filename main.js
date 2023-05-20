let sale = document.querySelector('.btn');
let tbody = document.querySelector('.tbody');
let selectCategory = document.querySelector('.edit__input');
let name = document.querySelector('.editor__input');
let price = document.querySelector('.editor__input');
let del = document.querySelector('.delete');
let diagram = document.querySelector('.diagram');

let cash = {}

sale.addEventListener('click', (event) => {
    event.preventDefault();
    cash.name = editor.name.value;
    cash.category = editor.selectCategory.options[editor.selectCategory.selectedIndex].innerText;
    cash.price = editor.price.value;
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

})

console.log(cash)

tbody.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        console.log('click')
        event.target.closest('tr').remove();
    }
})