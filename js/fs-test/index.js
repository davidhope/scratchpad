const fs = require('fs').promises;
const { promises } = require('dns');
const each = require('lodash/fp/each');
const get = require('lodash/fp/get');
const isEmpty = require('lodash/fp/isEmpty');
const isString = require('lodash/fp/isString');
const mapValues = require('lodash/fp/mapValues');
const merge = require('lodash/fp/merge');
const reduce = require('lodash/fp/reduce');
const replace = require('lodash/fp/replace');

let arr = ['one','two','three'];

function testSplit(){
  let key = 'workflows.forms.forId.user';
  let locale = {
                  "toggle":{
                    "false":"No",
                    "true":"Yes"
                  },
                  "workflows":{
                    "forms":{
                      "forId":{
                        "user":"User"
                      }
                    }
                  }
                };
  
  let splitKey = key.split(".");
  console.log(splitKey);

  let reduced = key.split(".").reduce(function (a, b) {
    console.log('a=' + a);
    console.log('b=' + b);

    return a != undefined ? a[b] : a;

  }, locale);  

  console.log(reduced);

}

function loadLocalLocaleModules(...localeModules){
  const currentLocale = 'en-US'
  const appRoot = './shared/locales/';

  const localeRequests = reduce(
    (requests, localeModule) => [
      ...requests,
      localeModule,
      fs.readFile(`${appRoot}${localeModule}/${currentLocale}.json`, 'utf-8')
    ],
    [],
    localeModules
  )

  console.log(localeRequests);

  var output = {}; 
  var key;
  var currentLocales = {}
  return new Promise((resolve, reject) => {

    Promise.all(localeRequests)
      .then(filedata => {
        filedata.reduce(
          (acc, next) => {

            if(output[key] && isEmpty(output[key]) ){
              output[key] = JSON.parse(next)
            } else {
              output[next] = {};
              key = next;
            }

            console.log(output);
            console.log(next);
          },
          {}
        )

        resolve(output);
      })
      .catch(err => {
        reject(err);
      })
  });

}

// testSplit();
loadLocalLocaleModules('app/components/timeZoneSelect','app/providers','workflows/forms')
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});

// let ary = [{key: 'key-1', val: 1},{key: 'key-2', val: 2},{key: 'key-3', val: 3}];
// console.log(...ary);