abstract class Geom {
  getType() {
    return 'Geom'
  }
  abstract getArea(...args: [number]): number
}
class circle extends Geom {
  constructor() {
    super()
  }
  getArea(radius: number): number {
    return Math.PI * radius ** 2
  }
}
