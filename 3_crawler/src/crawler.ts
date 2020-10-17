// ts文件中 引入js包，需要一个转换器： ts ->.d.ts 翻译文件 ->js
// npm install superagent -D
// npm install @types/superagent -D
import superagent from 'superagent'
import fs from 'fs'
import path from 'path'
import DellAnalyzer from './dellAnalyzer'

export interface Analyzer {
  // 这个接口规定了一个必须有analyze函数的类
  analyze: (html: string, filePath: string) => string
}
class Crowler {
  // 获取secret key https://git.imooc.com/coding-412/source-code/src/master/README.md

  private filePath = path.resolve(__dirname, '../data/course.json')

  private async getRawHtml() {
    const result = await superagent.get(this.url)
    return result.text
  }

  private writeFile(content: string) {
    fs.writeFileSync(this.filePath, content)
  }
  // 核心： 爬虫过程
  private async initSpiderProcess() {
    const html = await this.getRawHtml()
    const fileContent = this.analyzer.analyze(html, this.filePath)
    this.writeFile(fileContent)
  }
  constructor(private analyzer: Analyzer, private url: string) {
    this.initSpiderProcess()
  }
}

// 要爬取的网页
const secret = 'x3b174jsx'
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`

// const analyzer = new DellAnalyzer()
const analyzer = DellAnalyzer.getInstance()
new Crowler(analyzer, url)
