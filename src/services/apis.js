import axios from 'axios'

// URL BASE
const api = axios.create({
//   baseURL:'http://10.100.86.139:3333/'
  baseURL:'https://747f92c7.ngrok.io/'
})


// CABEÇALHO DA CHAMADAS
var headers = {
  "Access-Control-Allow-Origin": "*",
  "content-type": "application/json",
  "cache-control": "no-cache",
  "crossDomain": true,
}


// CABEÇALHO PARA UPLOAD DE ARQUIVOS
var headersMultipart = {
  'content-type': 'multipart/form-data'
}

const apis = {
  getAllMentors: ()=> api.get('mentors', headers),
}

export default apis

