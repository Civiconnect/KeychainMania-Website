const response = await fetch("/keychains.json");
const keychains = await response.json();

const grid = document.querySelector('.grid-container');

for (let keychain of keychains) {
    grid.innerHTML += `
        <div class="card">
            <img
            src="${keychain.image}"
            alt="A ${keychain.brand} ${keychain.model} keychain"
            />
            <div class="product-info">
            <div>
                <h2>${keychain.brand}</h2>
                <p>${keychain.model}</p>
            </div>
            <div>
                <a href="/product.html" class="bold">View</a>
                <i class="fa-solid fa-angle-right"></i>
            </div>
            </div>
        </div>
    `
 }