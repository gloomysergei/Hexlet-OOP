/* eslint-disable quotes */

const sumSalaries = (depatment) => {
  if (Array.isArray(depatment)) {
    return depatment.reduce((acc, current) => acc + current.salary, 0);
  }
  let sum = 0;
  const template = Object.values(depatment);
  console.log(template);
  sum += sumSalaries(template);
  return sum;
};

const company = {
  // тот же самый объект, сжатый для краткости
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};
console.log(sumSalaries(company));
