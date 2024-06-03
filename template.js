/* eslint-disable quotes */
import make from "./make.js";
import Company from "./makeNew.js";

{
  const company = make("Hexlet", "https://hexlet.io");
  console.log(company.getName());
  console.log(company.getWebsite());
}

{
  const company = new Company("Hexlet", "https://hexlet.io");
  console.log(company.getName());
  console.log(company.getWebsite());
}

{
  const numbers = new Array(10, 23, 43, 82);
  console.log(numbers);
}
