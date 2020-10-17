//  1.虽然函数类型推断，一定程度上可以简化函数返回的结果类型定义，但是某些实际项目开发中，依然习惯注解函数返回类型
/* function add(first: number, second: number): number {
  return first + second
} */

// 2.声明了void 表示没有返回值
/* function sayHello(): void {
  console.log('hello')
} */

// 3.声明了never 表示函数永远不可能执行到最后
/* function errorEmitter(): never {
  // throw new Error()
  // console.log(123)
  while (true) {}
}
 */

// 4. 函数参数为对象时，给对象属性指定类型：冒号要放在对象后。如果冒号放在前面，会和属性重命名冲突。
/* function add({ first, second }: { first: number; second: number }): number {
  return first + second
}
const total = add({ first: 1, second: 2 })
console.log(total) */
