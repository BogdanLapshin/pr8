/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-46-137-100-204.eu-west-1.compute.amazonaws.com',
  database: 'd4hjl0n769k3d',
  user:'zyzsjskzimanqc',
  password: '4a0aa86c47e87eaf556c2172ea4da321de72e94b19f8a3a94a95c67ad633b0e8',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})
const getUsers = (request, response) => {
  response.header("Access-Control-Allow-Origin", "*");
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
  response.header("Access-Control-Allow-Origin", "*");
  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getUsers,
  getUserById
}