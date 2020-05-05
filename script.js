fetch('data.json')
    .then(res => res.json())
    .then(data => { console.log(data) })
    .catch(err => console.error(err));

for (var key in data) {
    block_to_insert = document.createElement('div');
    block_to_insert.style = ";";
    block_to_insert.innerHTML = data
    document.body.firstChild.insertAdjacentElement('beforebegin', block_to_insert);
}