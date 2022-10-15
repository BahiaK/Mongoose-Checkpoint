const verifTitle = (req,res,next) => {
    if (req.body.title =="" )
    {res.status(400).send({msg:"title is required"});}
    else {
        next()
    }
}
module.exports = verifTitle;