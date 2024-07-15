let totalPrice = 0;

document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const producto = document.getElementById('producto').value;
    const precio = parseFloat(document.getElementById('precio').value);

    if (producto && !isNaN(precio)) {
        const productList = document.getElementById('productList');
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = `${producto}: Q.${precio.toFixed(2)}`;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function () {
            productList.removeChild(listItem);
            totalPrice -= precio;
            document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
        });

        listItem.appendChild(deleteButton);
        productList.appendChild(listItem);

        totalPrice += precio;
        document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);

        document.getElementById('productForm').reset();
    }
});