const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

const addNote = (title,body) =>
{
    const notes = loadnotes()
    // const duplicatenotes = notes.filter((note) => {
    //     return note.title === title
    // })

    const duplicatenote = notes.find((note) => note.title === title)

    debugger
    //command = node inspect app 
    // node --inspect-brk app.js readnote --title="a"

    if(!duplicatenote)
    {
        notes.push({
            title: title , 
            body: body
        })
        console.log("New note added")
    }
    else
    {
        console.log("Note title taken");
    }

    savenotes(notes)
}


const savenotes = (notes) =>
{
    const dataJSON =  JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}


const loadnotes = () =>
{
    try
    {
        const databuffer = fs.readFileSync("notes.json")
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    }

    catch(e)
    {
        return []
    }
}

const removenote =  (title) => {
    const notes = loadnotes()
    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })
    if(notes.length > notesToKeep.length)
    {
        console.log(chalk.green.inverse("Notes removed"));
        savenotes(notesToKeep);
    }
    else
    {
        console.log(chalk.red.inverse("No Note found"));
    }

}

const listnotes = () =>{
    const notes = loadnotes()
    console.log(chalk.red('Your notes : \n'));
    notes.forEach((note) => {
      console.log(chalk.white.inverse("Title : "+note.title+" \n"+"Body : "+note.body))
    })
}


const readnotes = (title) =>{
    const notes = loadnotes()
    const note = notes.find((note) => note.title === title)
        if(note)
        {
            console.log(chalk.blue.inverse("Note found !"))
        }
        else
        {   
            console.log(chalk.red.inverse("Note not found !"))
        }
}

module.exports = {
    addNote : addNote,
    removenote : removenote,
    listnotes : listnotes,
    readnotes : readnotes
}