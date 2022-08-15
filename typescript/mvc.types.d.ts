import { RequestHandler } from "express";
import { Model, SchemaDefinitionProperty, SchemaOptions } from 'mongoose';

declare global {
  namespace types {
    namespace MVC {
      export type StorageClassType<T = any> = Model<T>;
      export type StorageClassMethodNameOrCustomMethod = string | Function;

      export interface MethodData {
        methodNameOfStorageClass?: string;
        customMethod?: (...params) => Promise<any>;
      }

      export interface CreateControllerFunctionParams {
        dataType?: Data.DataType;
        requestType?: API.RequestType,
        StorageClass: StorageClassType,
        methodData?: MethodData,
        optionalData?: Data.KeyValue
      }

      export type createControllerFunctionType<ReturnType = any> = (params: CreateControllerFunctionParams) => ReturnType

      export type MongooseDataType = 'String' | 'Number' | 'Date' | 'Buffer' | 'Boolean' | 'Mixed' | 'ObjectId' | 'Array' | 'Decimal128' | 'Map' | 'Schema';

      export interface ControllersType {
        [key: API.RouteNameType]: RequestHandler
      }

      export interface CreateControllerFnsType {
        [key: API.RouteNameType]: createControllerFunctionType<RequestHandler>
      }

      export interface ControllersEntries {
        controllers?: ControllersType,
        createControllerFns?: CreateControllerFnsType
      }

      export interface MiddlewareEntries {
        [key: API.RouteNameType]: Array<RequestHandler>
      }

      export type SchemaDefinitionType = { [id: string]: SchemaDefinitionProperty };
      export type ModelOptionsType = SchemaOptions;

      export interface ArtifactData {
        name: string;
        itemRoutes: Array<API.RequestType>;
        listRoutes: Array<API.RequestType>;
        middleware?: Array<RequestHandler>;
        schema: SchemaDefinitionType;
        modelOptions?: ModelOptionsType;
      }
    }
  }
}

export { };
