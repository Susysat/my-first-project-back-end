const express = require("express")

const app = express()
const porta = 3333

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta)


 // Insira na barra de pesquisa do navegador "localhost:3333" clique em Enter; Note que a mensagem "Cannot Get "" aparecerá. 
 

