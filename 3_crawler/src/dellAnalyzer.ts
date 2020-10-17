//爬取特定网页的业务逻辑单独提取出来

import cheerio from 'cheerio'
import fs from 'fs'
import { Analyzer } from './crawler'
interface Course {
  title: string
  count: number
}
interface CourseResult {
  time: number
  data: Course[]
}

interface Content {
  [propName: number]: Course[]
}
export default class DellAnalyzer implements Analyzer {
  // 单例模式改写
  private static instance: DellAnalyzer
  static getInstance() {
    if (!DellAnalyzer.instance) {
      DellAnalyzer.instance = new DellAnalyzer()
    }
    return DellAnalyzer.instance
  }
  private getCourseInfo(html: string) {
    // cheerio 提供了类似于jquery的方法
    const $ = cheerio.load(html)
    const courseItems = $('.course-item')
    const courseInfos: Course[] = []
    courseItems.map((index, element) => {
      const desc = $(element).find('.course-desc')
      const title = desc.eq(0).text()
      const count = parseInt(desc.eq(1).text().split('：')[1])
      courseInfos.push({ title, count })
    })
    return {
      time: new Date().getTime(),
      data: courseInfos,
    }
  }
  private generateJsonContent(courseInfo: CourseResult, filePath: string) {
    let fileContent: Content = {}
    if (fs.existsSync(filePath)) {
      // 如果文件存在，那么把文件中的内容提取到代码中。
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }
    fileContent[courseInfo.time] = courseInfo.data
    return fileContent
  }
  public analyze(html: string, filePath: string) {
    const courseInfo = this.getCourseInfo(html)
    const fileContent = this.generateJsonContent(courseInfo, filePath)
    return JSON.stringify(fileContent)
  }
  private constructor() {}
}
