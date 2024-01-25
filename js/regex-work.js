const haystack = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const needle = 'quickly';
const re = new RegExp(`${needle}`, 'g');
console.log(haystack.search(re));
// Expected output: 43