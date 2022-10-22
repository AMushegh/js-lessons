const foo = () => {
  console.log(this);
};

foo();

function Product(name, price, type) {
  this.name = name;
  this.price = price;
  this.type = type;
}

const lemon = new Product("lemon", 2, "fruit");
const orange = new Product("lemon", 2, "fruit");
const cola = new Product("lemon", 2, "fruit");
const fanta = new Product("lemon", 2, "fruit");

function ShoppingCart() {
  this.productList = [];
}

ShoppingCart.prototype.addProduct = function (product) {
  if (product.constructor === Product) {
    this.productList.push(product);
  }
};
