const printer = {
  items: [1, 10, 100],
  print() {
    this.items.forEach(() => console.log(this.items));
  },
};
printer.print();
