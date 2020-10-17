// 普通方法，target 对应的是类的prototype

function getNameDecorator(target:any,key:string){
  console.log(target)
}
class Test{
    name:string;
    constructor(name:string){
    this.name = name
    }
    @getNameDecorator
    getName(){
      return this.name
    }
}

// class Test{
//   name:string;
//   constructor(name:string){
//     this.name = name
//   }
// }

const test = new Test('dell');
console.log(test.getName())

