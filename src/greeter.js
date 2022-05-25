export default class Greeter {
  static to(obj) {
    return new Greeter(`Hello, ${obj}!`)
  }

  constructor(msg) {
    this.msg = msg
  }

  out() {
    return this.msg
  }
}
