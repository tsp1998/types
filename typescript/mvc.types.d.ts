import { RequestHandler } from "express";
import { Model, SchemaDefinition as SchemaDefinitionFromMongoose, SchemaDefinitionProperty, SchemaDefinitionType, SchemaOptions } from 'mongoose';

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

      export type CreateControllerFnType<ReturnType = any> = (params: CreateControllerFunctionParams) => ReturnType

      export type MongooseDataType = 'String' | 'Number' | 'Date' | 'Buffer' | 'Boolean' | 'Mixed' | 'ObjectId' | 'Array' | 'Decimal128' | 'Map' | 'Schema';

      export interface ControllersType {
        [key: API.RouteNameType]: RequestHandler
      }

      export interface CreateControllerFnsType {
        [key: API.RouteNameType]: CreateControllerFnType<RequestHandler>
      }

      export interface ControllersEntries {
        controllers?: ControllersType,
        createControllerFns?: CreateControllerFnsType
      }

      export interface MiddlewareEntries {
        [key: `${API.RouteNameType}{middlewares}`]: Array<RequestHandler>
      }

      type SchemaDefinition = SchemaDefinitionFromMongoose<SchemaDefinitionType<any>>;

      export type RawSchemaDefinition = {
        [id: string]: SchemaDefinitionProperty
      };
      export type ModelOptions = SchemaOptions & { isRawSchema?: boolean };

      export type SchemaDefinitionWithFrontEndData = {
        [id: string]: SchemaDefinitionProperty & Partial<types.Component.InputProps> & Partial<types.Component.FileInputProps>
      };

      export interface ArtifactData {
        name: string;
        itemRoutes: Array<API.RequestType>;
        listRoutes: Array<API.RequestType>;
        middleware?: Array<RequestHandler>;
        schema: SchemaDefinitionWithFrontEndData;
        modelOptions?: ModelOptions;
      }
    }
  }
}

export { };
