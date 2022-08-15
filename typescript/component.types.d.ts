import { PropsWithChildren } from 'react'

declare global {
  namespace types {
    namespace Component {
      interface ProductContainerProps extends PropsWithChildren {
      }

      export type inputComponentType = 'input' | 'select' | 'textarea';

      export interface CommonInputProps {
        initialValue?: string | boolean;
        id: string;
        label?: string | JSX.Element;
        placeholder?: string;
        type?: string;
        inputComponentType?: inputComponentType;
      }

      export type InputChangeHandler = (value: string | boolean, id?: string) => void;

      export interface ComponentDataModel {
        name: string;
        schema: {
          [propName: string]: any
        }
      }

      export interface Link {
        children: JSX.Element | string;
        to: string
      }
    }
  }
}

export {}