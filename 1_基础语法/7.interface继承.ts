/* interface Person {
  name: string
  age?: number
  [propName: string]: any
  say(): string
}
 */
//  1.类如何继承接口 implements
/* class User implements Person {
  name: string
  say() {
    return 'helloUser'
  }
} */

// 2. 接口如何继承接口？
/* interface Teacher extends Person {
  // 接口里面定义一个自有的方法
  teach(): string
}

const getPersonName = (person: Person): void => {
  console.log(person.name)
}
const setPersonName = (person: Teacher, name: string): void => {
  person.name = name
}
const person = {
  name: 'Dell',
  gender: 'male',
  say() {
    return 'sayHello'
  },
  teach() {
    return 'teach'
  },
}
setPersonName(person, 'Jack') */
