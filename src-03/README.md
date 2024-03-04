## src-3_Задача по разделу 3. Контекст (This)

Подобное задание уже было в курсе по абстракциям с помощью данных. Теперь мы делаем то же самое, но используя объекты и методы. Нормализацию дробей делать не нужно.

## rational.js

Реализуйте и экспортируйте по умолчанию функцию, которая создает рациональное число. Рациональное число должно быть представлено объектом со следующими методами:

- Сеттер setNumer() - устанавливает числитель
- Сеттер setDenom() - устанавливает знаменатель
- Геттер getNumer() - возвращает числитель
- Геттер getDenom() - возвращает знаменатель
- Геттер toString() - возвращает строковое представление числа
- Метод add() - складывает дробь на которой он был вызван с переданной дробью и возвращает новое рациональное число (не изменяет текущее!)

```
import make from './rational.js';

const rat1 = make();
rat1.setNumer(3);
rat1.setDenom(8);
rat1.getNumer(); // 3
rat1.getDenom(); // 8

const rat2 = make(10, 3);

// Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
const rat3 = rat1.add(rat2);
rat3.toString(); // '89/24'
```

### Запуск тестов

- для запуска отдельного теста необходимо

```
npx jest Foo.test.js
```

- для отслеживания изменений в фоновом режиме

```
npx jest  --watchAll Foo.test.js
```

### Замечания

1. Обратить внимание на строку 34

```
return make(newNumer, newDenom);
```

У меня не хватило ума на эту концовку.