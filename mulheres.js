const express = require("express") //AQUI TUDO É O SERVIDOR// aqui estou iniciando o express
const router = express.Router() //configurando a 1ª parte 
const cors =require('cors') //instalando aqui o pacote CORS que permite consumir essa api no front-and

const conectaBancoDeDados = require("./bancoDeDados") //aqui estou ligando a banco de dados
conectaBancoDeDados() //chamando a função que conecta o banco de dados


const Mulher = require("./mulherModel")
const app = express() //iniciando o app
app.use(express.json()) 
app.use(cors())

const porta = 3333 //criando a porta


//GET
async function mostraMulheres(resquest, response) {
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find()

        response.json(mulheresVindasDoBancoDeDados)
    }catch(erro) {
        console.log(erro)

    }
    
}

//POST
async function criaMulher(resquest, response) {
    const novaMulher = new Mulher( {
        nome:    resquest.body.nome,
        imagem:  resquest.body.imagem,
        minibio: resquest.body.minibio,
        citação: resquest.body.citacao
    })

       try{
        const mulherCriada = await novaMulher.save()

        response.status(201).json(mulherCriada)
       }catch (erro) {

       console.log(erro)
       }
    
}

//PATCH  ...permite fazer alterações,correção etc;
async function corrigeMulher(resquest, response) {
    try {
      const mulherEncontrada = await Mulher.findByid(resquest.params.id)
    

   if (resquest.body.nome) {
    mulherEncontrada.nome = request.body.nome
   }

   if (resquest.body.minibio) {
    mulherEncontrada.minibio = resquest.body.minibio

   }

   if(resquest.body.imagem) {
    mulherEncontrada = resquest.body.imagem
   }
  
   if (resquest.body.citacao) {
       mulherEncontrada = resquest.body.citacao
   }
    
   const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
   response.json(mulheresVindasDoBancoDeDados)

    }catch (erro) { 
        console.log (erro)
    }

}


//DELETE 
async function deletaMulher(resquest, response) {
    try {
      await Mulher.findByIdAndDelete(request.params.id)
      response.json ({ messagem: "Mulher deletada com sucesso!"})
    } catch(erro) {
        console.log(erro)
    }

    
}


app.use(router.get("/mulheres", mostraMulheres)) //configurei rota GET /mulheres
app.use(router.post("/mulheres", criaMulher)) //configurei POST /mulheres
app.use(router.patch("/mulheres/:id", corrigeMulher)) //configurei a rota PATCH /mulheres/:id
app.use(router.delete("/mulheres/:id",deletaMulher)) //configurei rota DELETE /mulheres


//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}


app.listen(porta, mostraPorta) //servidor ouvindo a porta


//OBS: CTRL + C p interromper no terminal p poder dar continuidade sem precisar excluir temrinal e abrir um novo

