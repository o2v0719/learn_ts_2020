// 1. type annotation 类型注解，我们来告诉ts变量是什么类型
/* let count2: number
count2 = 123 */

// 2. type inference 类型推断: 给没有类型的变量赋值后会自动推断变量的类型。如果ts能自动分析变量类型，我们就什么也不许要做了。如果ts无法分析变量类型，我们就需要使用类型注解。

/* 
const firstNumber = 123
const secondNumber = 34
const total = firstNumber + secondNumber
 */

/* function getTotal(firstNumber: number, secondNumber: number) {
  return firstNumber + secondNumber
}

const total = getTotal(1, 2)

const obj = { name: 'dell', age: 18 }
 */
