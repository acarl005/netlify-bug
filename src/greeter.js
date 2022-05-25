class Foo {}

export default class Greeter extends Foo {
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
