import { DetailedHTMLProps, HTMLAttributes } from 'react'

declare global {
  namespace types {
    namespace JSXCustomTypes {
      interface IntrinsicElements {
        'ion-icon': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
          name: string;
        };
      }
    }

    namespace ReactCustomTypes {
      type DispatcherFnSlice<T> = (newState: T) => T
      type DispatcherFnType<T = any> = DispatcherFnSlice<T> | ((prevState: T) => DispatcherFnSlice<T>)
    }
  }
}

export {}