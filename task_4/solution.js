// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    // Аргументом функции является JSON
 
     let data = JSON.parse(json)// Преобразуйте строку json, переданную как аргумент функции,
     let products = data.products // в объект с помощью функции JSON.parse(json)
     // и запишите в переменную data
    // Верните как результат функции свойство products объекта data
 return data.products;
 }
 
 function renderProductsCards(json){
     clearProducts(); 
 
   let products = parseProducts(json) // Напишите функцию renderProductsCards(json)
 // Аргументом функции является JSON
 // Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются
 // Выполните функцию parseProducts, передав в неё json - аргумент функции и запишите результат в переменную products
 let length = products.length// Запишите в переменную length значение свойства products.length
 for (let i = 0; i < length; i += 1) {
     addProduct(products[i]);
     }
 }// Напишите цикл, в котором перебираете все products от 0 до (length)
 // и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)
 