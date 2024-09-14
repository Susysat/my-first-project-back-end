const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(resquest, response) {
response.json({
    nome: "Susy Satiro",
    imagem: "https://github.com/Susysat.png",
    minibio: "A person in a constant state of perplexity"
})
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)