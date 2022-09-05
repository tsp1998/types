declare global {
  namespace types {
    namespace Data {
      export type DataType = 'list' | 'item';
      export type Item = string | number | boolean | object;
      export type List = Item[]

      interface KeyValue<ValueType = any> {
        [key: string]: ValueType
      }
    }
  }
}

export { }