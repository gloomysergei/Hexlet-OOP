/* eslint-disable func-names */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable no-func-assign */
/* eslint-disable prefer-const */
/* eslint-disable no-else-return */
/* eslint-disable quotes */

//  1. Создание декоратора, т.е. обертки
{
  let slow = (x) => {
    const result = 10 * x * x - 100; // вычислительная функция, которую надо кешировать
    console.log(`Called with ${x}`);
    return result;
  };

  const cachingDecorator = (func) => {
    let cache = new Map(); // let iterator = new Map([["огурец", 500],["помидор", 350]]);

    return (x) => {
      //  возвращает true, если ключ x присутствует в коллекции, иначе false.
      if (cache.has(x)) {
        //  map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
        return cache.get(x);
      }

      let result = func(x);
      cache.set(x, result);
      console.log(cache);
      return result;
    };
  };

  slow = cachingDecorator(slow); // обертка функции
  // console.log(slow(1));
  // console.log(slow(1));
  // console.log(slow(100));
  // console.log(slow(100));
}

// 2. Применение «func.call» для передачи контекста.
{
  let worker = {
    someMethod() {
      return 2;
    },

    slow(x) {
      const result = 10 * x * x - 100;
      console.log(`Called with + ${x}`);
      return result * this.someMethod();
    },
  };

  const cachingDecorator = (func) => {
    let cache = new Map(); // let iterator = new Map([["огурец", 500],["помидор", 350]]);
    // не должно быть стрелочных функций
    return function (x) {
      //  возвращает true, если ключ x присутствует в коллекции, иначе false.
      if (cache.has(x)) {
        //  map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
        return cache.get(x);
      }

      let result = func.call(this, x);
      cache.set(x, result);
      console.log(cache);
      return result;
    };
  };
  worker.slow = cachingDecorator(worker.slow); //  оборачиваем метод
  // console.log(worker.slow(10));
  // console.log(worker.slow(9));
  // console.log(worker.slow(8));
  // console.log(worker.slow(10));
}
