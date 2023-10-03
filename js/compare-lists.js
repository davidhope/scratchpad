const fs = require('fs');

var replaceVals = [
  {
    searchFor: 'ivr-content-scanning-',
    replaceWith: 'ics-'
  },
  {
    searchFor: 'bc-spring-boot-starter-',
    replaceWith: 'bsbs-'
  },
  {
    searchFor: 'micro',
    replaceWith: ''
  },
  {
    searchFor: 'lib',
    replaceWith: ''
  },
  {
    searchFor: 'core-permissions-',
    replaceWith: 'cp-'
  }
];

try {
  const owned = fs.readFileSync('./owned-repos.txt', 'utf8').toString().split("\n");
  const creds = fs.readFileSync('./repos.txt', 'utf8').toString().split("\n");
  
  // var scrubbedOwned;
  // var scrubbedCreds;

  // for(rv in replaceVals){

  //   console.log(replaceVals[rv].searchFor);
    
  //   scrubbedOwned = owned.map((o) => {
  //     return o.replace(replaceVals[rv].searchFor, replaceVals[rv].replaceWith);
  //   });

  //   scrubbedCreds = creds.map((c) => {
  //       return c.replace(replaceVals[rv].searchFor, replaceVals[rv].replaceWith);
  //   });
  // }

  for(o in owned){
    // console.log(owned[o]);
    for(c in creds){
      if(creds[c].includes(owned[o].substring(0,15))){
        console.log(creds[c] + ' - (owned) ' + owned[o]);
        break;
      }
    }
  }
} catch (err) {
  console.error(err);
}


// ae-service-proxy-micro
// core-batch-jobs-micro
// core-credential-lib
// core-integration-micro
// core-permissions-processor-micro
// core-registration-micro
// core-scripting-emitter-micro
// core-sku-micro
// core-tenant-micro
// core-tracer-bullet-micro
// core-webhook-emitter-micro