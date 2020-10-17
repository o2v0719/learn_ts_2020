// /* class Person {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name + '123'
//   }
//   set name(name: string) {
//     this._name = name
//   }
// }
// const person = new Person('Dell')
// console.log(person.name)
// person.name = 'DellLee'
// console.log(person.name)
//  */

// 单例模式
/* class Demo {
  private static instance: Demo
  private constructor(public name: string) {}
  static getInstance() {
    if (!Demo.instance) {
      Demo.instance = new Demo('Dell')
    }
    return Demo.instance
  }
}
const demo1 = Demo.getInstance()
const demo2 = Demo.getInstance()
console.log(demo1.name)
console.log(demo2.name) */
