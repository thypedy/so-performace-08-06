const mongoose = require('mongoose')

const conn = async() => {
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://userNovo:Wi1234@fiaptecnico.5oane.mongodb.net/todo_list')
}

module.exports = conn