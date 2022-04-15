fetch("https://fakestoreapi.com/products")
.then(res => {
    return res.json();
})
.then(MockData => {

    var products = document.querySelector('.products');
    products.innerHTML = '';
    MockData.forEach(element => {
        var newProduct = document.createElement('div');
        newProduct.classList.add('product');
        newProduct.innerHTML = `
        <img src="${element.image}" alt="${element.title}">
        <div class="product-info">
            <h4>${element.title}</h4>
            <p>$${element.price}</p>
        </div>
        `;
        products.appendChild(newProduct);

});

})

var input = document.querySelector('.search input');
input.addEventListener('input', function(e){
    let inputSearch = e.target.value.trim().toLowerCase();
    let productDOM = document.querySelectorAll('.product');
    productDOM.forEach(item => {
        if(item.innerText.toLowerCase().includes(inputSearch)){
            item.classList.remove('hide');
        }else {
            item.classList.add('hide');
        }
    })
})






