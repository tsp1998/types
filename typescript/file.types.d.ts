declare global {
  namespace types {
    namespace File {
      type FilesUploadStatuses = {
        meta: Data.KeyValue<any>,
        local: boolean;
        remote: boolean;  
      }[]
    }
  }
}
export {}