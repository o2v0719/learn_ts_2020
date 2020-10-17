// 接口: 定义通用类型,只能代表对象或函数

/* interface Person {
  name: string
  // age 后面跟问号，表示可有可无
  age?: number
  // readonly 表示属性只读，不能修改
  readonly isMale?: boolean
  // 其他
  [propName: string]: any
  say(): string
}
 */
// type 既可以代表对象
/* type Person1 = {
  name: string
} */
// type 又可以代表基础类型
// type Person2 = string

/* const getPersonName = (person: Person): void => {
  console.log(person.name)
} */

/* const setPersonName = (person: Person, name: string): void => {
  person.name = name
} */

/* const person = {
  name: 'Dell',
  // 函数引用对象时里面有多余的键值对，也不会报错，但是如果直接把对象字面量赋值给函数会进行强校验。
  country: 'China',
  say() {
    return 'sayHello'
  },
}
 */
/* getPersonName(person)
setPersonName(person, 'Ted')
 */
