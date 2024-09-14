const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraOla(request, response) {
    response.send("Olá, mundo!")
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/ola", mostraOla))
app.listen(porta, mostraPorta)

//Observe que agora o GET será execultado e aparecerá a mensagem "Olá, mundo!" após adicionar na barra de pesquisa "localhost:3333/ola".
