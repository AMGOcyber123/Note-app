const note = require('./notes.js')
const yargs = require('yargs');
const { describe } = require('yargs');
const { title } = require('process');
// yargs hepls in parsing rather than hard coding 
//customized yargs version 

//commands : list, read , add

yargs.version('1.1.0')

//create add command

yargs.command({
    command : 'add',
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type : 'string'           
        },

        body: {
            describe :"Note body",
            demandOption: true,
            type: "string"

        }

    },
    handler : (argv) =>{
        // console.log('Title : '+argv.title)
        // console.log('Body : '+argv.body);
        note.addNote(argv.title,argv.body)
    }
})


//create remove command 


yargs.command({
    command : 'remove',
    describe: "Removing the notes",
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    } , 
    handler : (argv)=>{
        note.removenote(argv.title)
    }
})

//create read command

yargs.command({
    command : "read",
    describe: "Read new note",
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    } , 
    handler : (argv) => {
        note.readnotes(argv.title)
    }
})

//create list command

yargs.command({
    command : "list",
    describe: "listing of notes",
    handler : (argv)=>{
        note.listnotes()
        
    }
})

yargs.parse()

// console.log(yargs.argv)