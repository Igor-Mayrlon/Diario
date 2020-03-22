const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Registro = require('./models/Registro')



//config
  //handlebrans
  app.engine('handlebars',handlebars({defaultLayout: "main"}))
  app.set('view engine', 'handlebars')
  app.set('views',(__dirname, 'views'));
  //body Parser
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())

//rotas
app.get('/home', (req, res) =>{
  Registro.findAll().then((registros)=>{
    res.render('layouts/verregistros',{registros: registros})
  })
  
})

app.get('/Registro/:titulo', (req, res) =>{
  Registro.findOne({titulo: req.params.titulo}).then((registros)=>{
    res.render('layouts/home',{registros: registros})
  })
  
})

app.get('/registro', (req, res) =>{
  
  res.render('layouts/formulario')
})

app.post('/add', (req,res)=>{
    Registro.create({
      titulo: req.body.titulo,
      data: req.body.data,
      conteudo: req.body.conteudo
    }).then(()=>{
      res.redirect('/')
    }).catch((error)=>{
      res.send('Erro ao criar o registro'+ error)
    })
 
})

const PORT = 3333
app.listen(PORT, () => {
    console.log(`Servidor Rodando!!!`);
});  