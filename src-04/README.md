### bind.js

Реализуйте и экспортируйте по умолчанию функцию, которая ведет себя аналогично встроенной bind(obj, fn). Аргументы функции:

- obj – объект выступающий в роли контекста
- fn() – функция привязываемая к контексту

```
const obj = { number: 5 };
const fn = function fn(number) {
 return number + this.number;
};
const fnWithContext = bind(obj, fn);

// Принимает столько же аргументов сколько и исходная функция
fnWithContext(3); // 8
```
