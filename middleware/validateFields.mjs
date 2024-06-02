const validateFields = (req,res,next) => {
    if(!req.body){
        return res.status(400).json({
            message : '400 Bad request'
        })
    }
    const {name,email,message} = req.body
    if(!name && !email && !message){
        return res.status(400).json({
            message : 'Bad request'
        })
    }    
    next()
}

export default validateFields