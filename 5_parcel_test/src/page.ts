// 泛型中keyof 语法的使用
interface Person{
  name:string;
  age:number;
  gender:string;
}
class Teacher {
  constructor(private info:Person){}
  // keyof 对Person遍历
  getInfo<T extends keyof Person>(key:T):Person[T]{
      return this.info[key]
  }
}

const teacher = new Teacher({
  name:'dell',
  age:18,
  gender:'male',
})

// 限制了getInfo 方法中的参数 只能是 Person中的键
// const testName = teacher.getInfo('hello');
const testName = teacher.getInfo('age')
console.log(testName)