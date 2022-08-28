import { AxiosRequestConfig } from 'axios'

declare global {
  namespace types {
    namespace API {
      export type RequestType = 'get' | 'post' | 'put' | 'patch' | 'delete';
      export type RouteNameType = `${string}-${RequestType}`;
      export type ResponseDataType = string | number | object | boolean;

      interface AdditionalAxiosData {
        code?: string;
        name?: string;
        status: number;
        statusText: string;
        originalMessage?: string;
      }

      export interface RequestBody<Data = any, Config = AxiosRequestConfig> {
        api: string;
        data?: Data;
        config?: Config;
      }

      export interface ResponseModel {
        success: boolean;
        message?: string;
        data?: ResponseDataType;
        additionalAxiosData?: AdditionalAxiosData;
      }

      export interface RequestFnParams {
        requestType: RequestType,
        dataType?: Data.DataType,
        requestBody: RequestBody
      }

      export type TriggerApiCallParams = Omit<RequestFnParams, 'requestBody'> & {
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

      interface AJAXStateProps {
        data?: any;
        loading?: any;
        error?: Error | null;
      }

      interface AJAXStates {
        [key: string]: AJAXStateProps
      }

      export interface UseRequestReturnType {
        data: any,
        loading: boolean,
        errorMessage: string,
        setErrorMessage: (errorMessage: string) => void;
        state: StateType,
        setState: (state: Partial<StateData>, requestId?: string) => void,
        request: UseRequestRequestFn
      }

      export type UseRequestRequestFn = (
        params: RequestFnParams & { requestId?: string, requestIdToDelete?: string },
        stateModifyCallbacks?: StateModifyCallbacks
      ) => RequestFnReturnType

      export type StateType = Data.KeyValue<Partial<StateData>>

      export interface StateModifyCallbacks {
        stateModifyCallbackOnSuccess?: (state: StateType) => StateType,
        stateModifyCallbackOnFailure?: (state: StateType) => StateType
      }

      type RequestFnReturnType = Promise<ResponseModel>

      type RequestFn = (
        requestBody: RequestBody,
        optionalData?: RequestOptionalData,
      ) => RequestFnReturnType

      export type AbortFn = () => Promise<boolean>;

      interface Request {
        response: RequestFnReturnType;
        requestStatus: 'pending' | 'fulfilled' | 'rejected' | 'aborted';
        abort: AbortFn;
      }

      interface RequestOptionalData {
        requestType?: types.API.RequestType,
        customRequestFn?: types.API.RequestFn
        requestId?: string;
        customErrorMessage?: string;
      }
    }
  }
}

export { }