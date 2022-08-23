declare global {
  namespace types {
    namespace State {
      interface FormState { [key: string]: Component.InputValueType }
    }
  }
}
export {}