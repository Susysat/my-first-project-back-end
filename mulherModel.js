const mongoose = require("mongoose")

const MulhereSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    imagem: {
        type: String,
        require: true,
    },
    citação: {
        type:String,
        require: true,
    },
    minibio: {
        type:String,
        require: true
    }
})

module.exports = mongoose.model("diva", MulhereSchema)
