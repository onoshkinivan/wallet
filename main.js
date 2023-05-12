let opt = document

for (let i = 0; i < 1; i++) {
    let tr = document.querySelector('.table__row');
    for (let key in clientObj.obj) {
        let td = document.createElement('td');
        let edinp = document.querySelector('.editor__input');

        edinp.setAttribute('value', clientObj.obj[key]);

        td.appendChild(edinp);
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}