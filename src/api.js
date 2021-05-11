import md5 from "md5"

const ts = Number(new Date()) // time stamp
const apikey = "0e2120123bf95e58fd169151bf7f7445" // key publica
const pk = "b1079906fb9f3f28cda605af587fa644c67078ec" // key privada
const hash = md5(ts+pk+apikey)// gera chave para acessar a api 

const chave = `ts=${ts}&apikey=${apikey}&hash=${hash}&limit=12`

const apiUrl = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=12`


export {apiUrl, chave}