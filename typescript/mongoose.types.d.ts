declare global {
  namespace types {
    namespace Mongoose {
      type MongooseDataType = 'String' | 'Number' | 'Date' | 'Buffer' | 'Boolean' | 'Mixed' | 'ObjectId' | 'Array' | 'Decimal128' | 'Map' | 'Schema';
    }
  }
}
export {}