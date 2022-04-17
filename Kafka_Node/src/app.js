import request from 'request'
import http from 'http'

const hostname = 'http://pokeapi.co/api/v2'
const path = '/pokemon/'

request(`${hostname}${path}`, (err, res, body) => {
    console.log(JSON.stringify(body))
})
