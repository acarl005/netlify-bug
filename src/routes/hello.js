import Greeter from "../greeter.js"
import { parse } from "pgsql-parser"

export function get() {
  const q = parse("SELECT 2;")
  return {
    status: 200,
    body: Greeter.deparse(q)
  }
}
