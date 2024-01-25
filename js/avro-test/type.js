const avro = require('avsc');

const MembersSchema = {
  name: 'MembersRequest',
  type: 'record',
  fields: [
    {
      name: 'eventType',
      type: {type: 'enum', name: 'EventType', symbols: ['MEMBER_ADDED']}
    },
    {
      name: 'Members',
      type: {
        type: 'array',
        items: {
          name: 'member',
          type: 'record',
          fields: [
            {
              name: 'firstName',
              type: 'string'
            },
            {
              name: 'lastName',
              type: 'string'
            },
            {
              name: 'email',
              type: 'string'
            }
          ]
        }
      }
    }
  ]
};


const type = avro.parse(MembersSchema)

module.exports = type;