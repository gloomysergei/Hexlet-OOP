/* eslint-disable no-inner-declarations */
/* eslint-disable quotes */
/* eslint-disable no-new-wrappers */
{
  const company = {
    name: "Hexlet",
    toString() {
      return this.name;
    },
  };
  console.log(`I love ${company}`);
}

{
  function Company(name) {
    this.name = name;
  }

  Company.prototype.toString = function toString() {
    return this.name;
  };
  const company = new Company("Hexlet");
  console.log(company.toString());
}
