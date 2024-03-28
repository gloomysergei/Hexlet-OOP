/* eslint-disable quotes */
{
  const identity = (v) => v;
  console.log(identity("sergei"));

  const sum = identity((a, b) => a + b);
  console.log(sum(10, 100));
}

{
  const generateSumFinder = () => {
    const sum = (a, b) => a + b;
    return sum;
  };
  const result = generateSumFinder()(10, 1000);
  console.log(result);
}

{
  const generate = (f) => (arg) => f(f(arg));
  const f1 = generate(Math.sqrt);
  console.log(f1(16));
  const f2 = generate((x) => x ** 2);
  console.log(f2(10));
}
