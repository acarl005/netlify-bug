class Foo {
  constructor(msg) {
    this.msg = msg
  }
}

export default class Greeter extends Foo {
  static to(obj) {
    return new Greeter(`Hello, ${obj}!`)
  }

  out() {
    return this.msg
  }
}
