declare global {
  namespace types {
    namespace Redux {
      export interface ActionModel {
        type: string;
        payload?: string | object | Error | boolean | number;
      }

      export interface OptionalActionDataModel {

      }
    }
  }
}
export {}