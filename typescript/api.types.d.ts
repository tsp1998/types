import { AxiosRequestConfig } from 'axios'

declare global {
  namespace types {
    namespace API {
      export type RequestType = 'get' | 'post' | 'put' | 'patch' | 'delete';
      export type RouteNameType = `${string}-${RequestType}`;
      export type ResponseDataType = string | number | object | boolean;

      export interface RequestBody<Data = any, Config = AxiosRequestConfig> {
        api: string;
        data?: Data;
        config?: Config;
      }

      export interface ResponseModel {
        data?: ResponseDataType;
        message?: string;
        success: boolean
      }

      export interface RequestFunctionParams {
        requestType: RequestType,
        dataType?: Data.DataType,
        requestBody: RequestBody
      }

      export type TriggerApiCallParams = Omit<RequestFunctionParams, 'requestBody'> & {
        requestId?: string;
        requestIdToDelete?: string;
        get?: Partial<RequestBody>;
        post?: Partial<RequestBody>;
        delete?: Partial<RequestBody>;
        patch?: Partial<RequestBody>;
        put?: Partial<RequestBody>;
      }

      type TriggerApiCallFn = (params?: Partial<TriggerApiCallParams>, stateModifyCallbacks?: StateModifyCallbacks) => Promise<ResponseModel>

      interface ComponentPropsForWithRequest extends Partial<UseRequestReturnType> {
        triggerApiCall?: TriggerApiCallFn;
      }

      export interface StateData {
        data: any;
        loading: boolean;
        errorMessage: string;
      }

      export interface UseRequestReturnType {
        data: any,
        loading: boolean,
        errorMessage: string,
        setErrorMessage: (errorMessage: string) => void;
        state: StateType,
        setState: (state: Partial<StateData>, requestId?: string) => void,
        request: RequestFn
      }

      export type StateType = Data.KeyValue<Partial<StateData>>

      export interface StateModifyCallbacks {
        stateModifyCallbackOnSuccess?: (state: StateType) => StateType,
        stateModifyCallbackOnFailure?: (state: StateType) => StateType
      }

      export type RequestFn = (
        params: RequestFunctionParams & { requestId?: string, requestIdToDelete?: string },
        stateModifyCallbacks?: StateModifyCallbacks
      ) => Promise<ResponseModel>
    }
  }
}

export { }