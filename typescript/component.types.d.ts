import { ChangeEvent, MouseEventHandler, PropsWithChildren } from 'react'

declare global {
  namespace types {
    namespace Component {
      interface AppData {
        Routes?: JSX.Element;
        CommonContent?: React.ElementType<any>;
        CommonContentBottom?: React.ElementType<any>;
        Providers?: React.ElementType<any>[];
      }
      
      interface CommonProps {
        className?: string;
        children?: string | JSX.Element;
      }

      export type InputComponentType = 'input' | 'select' | 'input-range' | 'file';

      type InputType = 'text' | 'radio' | 'checkbox' | 'password' | 'file' | 'textarea';

      type NormalOption = string | number
      type ObjectOption = { value: string; children: string | JSX.Element }
      type InputValueType = string | boolean | number | File[];
      export interface InputProps extends CommonProps {
        id: string;
        labelClassName?: string;
        formGroupClassName?: string;
        label?: string | JSX.Element;
        placeholder?: string;
        value?: InputValueType;
        inputType?: InputType;
        inputComponentType?: InputComponentType;
        errorMessage?: string;
        options?: (ObjectOption | NormalOption)[],
        onChange?: (event: ChangeEvent<HTMLInputElement>, id?: string) => void;
      }

      export type InputChangeHandler = (value: string | boolean, id?: string) => void;

      interface FileInputProps extends InputProps {
        accept?: string;
        multiple?: boolean;
        minSizeBytes?: number;
        maxSizeBytes?: number;
        maxFiles?: number;
        dropZoneText?: string;
        canCancel?: boolean;
      }

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

      export interface ButtonProps extends CommonProps {
        loading?: boolean;
        type?: 'button' | 'submit' | 'reset',
        onClick?: MouseEventHandler
      }

      export interface FormProps extends Partial<API.RequestBody> {
        className?: string;
        inputsContainerClassName?: string;
        filesInputsContainerClassName?: string;
        buttonsContainerClassName?: string;
        heading?: string;
        inputs?: types.MVC.SchemaDefinitionWithFrontEndData,
        buttons?: ButtonProps[];
        successMessage?: string;
        inputsApi?: string,
        formSubmitApi?: string,
      }
    }
  }
}

export { }