const fs = require('fs')
const check = require('./utils')
const chalk = require('chalk')

const log = console.log

log(chalk.red("hello"))
log(chalk.hex('#FFFFFF').bold.inverse('Bold gray!'))

console.log(process.argv[2])     // process.argv  === additional argument after node app.js ______

if(command === "add")
{
    console.log(chalk.green.inverse("Adding note"));
}

else if(command === "remove")
{
    console.log("Removing notes");

}