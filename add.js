const fs = require('fs')

const add = function(note=[], oldNote) {
    let finalNote = JSON.parse(oldNote)

    finalNote.push(note)

    let objecNote = JSON.stringify(finalNote)

    fs.writeFileSync('note.txt', objecNote)

}

module.exports = add 