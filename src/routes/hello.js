import Greeter from "../greeter.js"

export function get() {
  const greeter = Greeter.to("world")
  return {
    status: 200,
    body: greeter.out()
  }
}
