const db = require('./db')



const Registro = db.sequelize.define('registro',{
  titulo: {
    type: db.Sequelize.STRING
  },
  data: {
    type: db.Sequelize.DATE
    
  },
  conteudo: {
    type: db.Sequelize.TEXT
  }
})

//Registro.sync({force:true })
   //USE APENAS UMA VEZ


module.exports = Registro