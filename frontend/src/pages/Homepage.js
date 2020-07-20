import data from "../data.js";

const HomePage = {
  render: () => {
    const { products } = data;
    return `
     <h1>Stall eCommerce</h1>
     <p>A brand new light ecommerce in vanilla JS</p>
  <ul class="products">
  ${products
    .map(
      (product) => `
    <li>
       <div class="product">
         <a href="/#/product/${product._id}">
           <img src="${product.image}" alt="product"
         />
         </a>
         <div class="product-name">
         <a href="/#/product/${product._id}">
           ${product.name}</a>
         </div> 
         <div class="product-brand">
          ${product.brand}
         </div>
         <div class="product-price">$${product.price}</div>

       </div>
     </li>
  `
    )
    .join("")}
  </ul>
  `;
  },
};

export default HomePage;
