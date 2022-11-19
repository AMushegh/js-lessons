class Cafeshop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
    this.massage = "";
  }
  addOrder(item) {
    const menuItemNames = this.menu.map((menuItem) => menuItem.itemName);
    if (menuItemNames.includes(item)) {
      this.orders.push(item);
    } else {
      this.massage = `message`;
    }
  }
}
class MenuItems {
  constructor(itemName, type, price) {
    this.itemName = itemName;
    this.type = type;
    this.price = price;
  }
}
const item1 = new MenuItems("tiramisou", "cake", 15);
const item2 = new MenuItems("cola", "drink", 18);
const item3 = new MenuItems("fanta", "drink", 6);
const item4 = new MenuItems("burger", "food", 25);
const item5 = new MenuItems("potatoes", "food", 15);

const shop = new Cafeshop("Lilit", [item1, item2, item3, item4, item5]);

shop.addOrder("cola");
shop.addOrder("chay");
// shop.addOrder("burger");
console.log(shop);
