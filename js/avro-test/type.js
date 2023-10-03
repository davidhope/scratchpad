const avro = require('avsc');

const avroSchema = {
  name: 'Person',
  type: 'record',
  fields: [
    {
      name: 'firstName',
      type: {
        type: 'string',
      }
    },
    {
      name: 'lastName',
      type: 'string'
    }
  ]
};

const type = avro.parse(avroSchema)

module.exports = type;