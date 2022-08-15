declare global {
  namespace types {
    namespace Data {
      export type DataType = 'list' | 'item';
      export type Item = string | number | boolean | object;
      export type List = Array<Item>

      interface KeyValue<ValueType = any> {
        [key: string]: ValueType
      }
    }
  }
}

export { }