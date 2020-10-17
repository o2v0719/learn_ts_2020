// 类中的修饰符
/* class Person {
  protected name: string
  private sayABC() {
    console.log('private')
  }
  public sayHi() {
    console.log(this.name)
    console.log('Hi')
    console.log(this.sayABC())
  }
}

class Teacher extends Person {
  sayBye() {
    console.log(this.name)
    this.sayHi()
  }
}
 */

//  传统写法
/* class Person {
  public name: string
  constructor(name: string) {
    this.name = name
  }
} */
// 等同于
/* class Person {
  constructor(public name: string) {
    this.name = name
  }
}
const person = new Person('dell')
console.log(person.name)
 */

/* class Person {
  constructor(public name: string) {}
}
class Teacher extends Person {
  constructor(public age: number) {
    super('Dell')
  }
}
const teacher = new Teacher(28)
console.log(teacher.name)
console.log(teacher.age)
 */
