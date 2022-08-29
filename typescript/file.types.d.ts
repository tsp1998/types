declare global {
  namespace types {
    namespace File {
      type FilesUploadStatuses = {
        [fileId: string]: {
          meta: Data.KeyValue<any>,
          local: boolean;
          remote: boolean;
        }
      }
    }
  }
}
export {}