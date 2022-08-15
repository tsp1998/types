import * as React from 'react'

declare global {
  namespace types {
    namespace App {
      interface AppData {
        Routes?: JSX.Element;
        CommonContent?: React.ElementType<any>;
        CommonContentBottom?: React.ElementType<any>;
        Providers?: React.ElementType<any>[];
      }
    }
  }
}

export { }