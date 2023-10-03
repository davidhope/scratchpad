'use strict'

const { program } = require('commander');


// Parse CLI arguments
program
    .option("-i, --input-oas-file <inputOasFile>")
    .option("-t, --template-id <templateId>")
    .option("-o, --output-dir <outputDir>")
    .option("-l, --local", "Indicates the build should be done in local mode. Local builds skip publishing artifacts.", false);
program.parse(process.argv);
const options = program.opts();

const inputOasFile = options.inputOasFile;
const templateId = options.templateId;
const outputDir = options.outputDir;
const local = options.local;
