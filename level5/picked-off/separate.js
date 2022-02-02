
function middleware1(req,res,next){
    console.log("testing middleware")
    req.body = { genre: "action" }
    next()
}

module.exports = { middleware1 }