const Sequelize = require('sequelize')
//conectando com o banco de dados
const sequelize = new Sequelize('app','root','99348090',{
  host:'localhost',
  dialect:'mysql'
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}