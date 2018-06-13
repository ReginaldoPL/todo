module.exports = function(re, res, next){
    //posso espcificar o endereço no local do *
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET, POST, , PATCH, DELETE')
    res.header('Access-Control-Allow-Header','Origin, X-Request-With, Content-Type, Accept')
    next()
}