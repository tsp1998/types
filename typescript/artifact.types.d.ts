declare global {
  namespace types {
    namespace Artifact {
      export type SchemaDefinitionType = { [id: string]: any };
      export type ModelOptionsType = any; // add proper types here

      export interface ArtifactData {
        name: string;
        itemRoutes: Array<API.RequestType>;
        listRoutes: Array<API.RequestType>;
        schema: SchemaDefinitionType;
        modelOptions?: ModelOptionsType;
      }
    }
  }
}

export {}