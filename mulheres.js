const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "Susy Satiro", 
        imagem: "https://github.com/Susysat.png",
        minibio: "A person in a constant state of perplexity"
    },
    {
        nome: "Susy Satiro De novo", 
        imagem: "https://github.com/Susysat.png",
        minibio: "A person in a constant state of perplexity"
    },
    {
        nome: "Susy Satiro Mais de mim", 
        imagem: "https://github.com/Susysat.png",
        minibio: "A person in a constant state of perplexity"
    }
]

function mostraMulheres(resquest, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)