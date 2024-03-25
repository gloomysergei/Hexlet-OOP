/* eslint-disable no-unused-vars */
function f2() {
  console.log(this);
}

{
  const f1 = () => {
    console.log(this);
  };

  f1();
  f2();
}

{
  const f1 = () => {
    console.log(this);
  };
  const obj = {
    f1,
    f2,
  };
  obj.f1();
  obj.f2();
}
