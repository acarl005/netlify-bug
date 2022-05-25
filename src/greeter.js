import { Deparser } from "pgsql-parser"

export default class StrictDeparser extends Deparser {
  static deparse(query, opts) {
    return new StrictDeparser(query, opts).deparseQuery()
  }
}
