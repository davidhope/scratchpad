const type = require('./type');

const validated = type({"firstName": "dave", "lastName": "hope"});

// console.log(validated);

// const avro = require('avsc');
// const type = avro.Type.forSchema({
//   type: 'record',
//   name: 'Pet',
//   fields: [
//     {
//       name: 'kind',
//       type: {type: 'enum', name: 'PetKind', symbols: ['CAT', 'DOG']}
//     },
//     {name: 'name', type: 'string', doc: 'cat\'s name'}
//   ]
// });

let cat = {kind: 'CAT', name: 'Albert'};
if(type.isValid(cat)){
  const buf = type.toBuffer(cat); // Encoded buffer.
  const val = type.fromBuffer(buf); // = {kind: 'CAT', name: 'Albert'}
  console.log(val);  
}else{
  console.error('invalid object');
  console.log(type.fields);
}
