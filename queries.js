const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-54-170-123-247.eu-west-1.compute.amazonaws.com',
  database: 'd9g565tsvojka8',
  user:'irxrpaekmmflxr',
  password: '628b5a6f293fee55f2cc0f7c3af959fd78b1764ade2ae378d2b05a33ac8f1734',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})
const getUsers = (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.users WHERE id = $1', [id], (error, results) => {
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