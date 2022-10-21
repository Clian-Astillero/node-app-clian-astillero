const add = require('./add')
const read = require('./read')
const present = require('./present')
const write = require('./write')
const del = require('./del')
const update = require('./update')

// get user input
const data = process.argv

var note = {}

if(data[2] == 'add') {
    // Build Object
    note = { 
        id: data[3],
        title: data[4],
        body: data[5]
    }
    // Get old note value
    var oldNote = read()
    // Add note to note.txt
    add(note, oldNote)
}

if(data[2] == 'read') {
    present(read())
}

if (data [2] === "delete"){
    let id = data[3]
    let oldNote = read()
    let del = require('./del')
    del(id,oldNote);
    console.log(read());
}

if (data [2] === "update"){
    const note = {
        id: data[3],
        title: data[4],
        body: data[5]
    }
    const oldNote = read()
    update(note, oldNote)
    present(read())
}