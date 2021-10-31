const fs = require('fs')
const check = require('./utils')
const chalk = require('chalk')

const log = console.log

log(chalk.red("hello"))
log(chalk.hex('#FFFFFF').bold('Bold gray!'))
log(chalk.hex('#FFFFFF').inverse.bold('Bold gray!'))
log(chalk.hex('#FFFFFF').bgRed('Bold gray!'))