const UserModel=require('./user.model')

exports.Resgister = async( req, res, next)=>{

    try{
        const existingUser = await UserModel.findOne({ emailId: req.body.emailId, Password:req.body.Password });
        if(existingUser){
            return res.status(400).json({
                messsage:'User already resgister'
            });
        }
        else{
            const newUser = new UserModel({emailId: req.body.emailId, Password:req.body.Password})
            const result = await newUser.save().then( (result) => {
                res.status(201).json({messsage:'User successfuly resgister'});
            }).catch( (err) => {
                console.log(err);
                res.status(400).json({ message : "Bad Request"})
            });
            
        }
    }
    catch (err) {
    res.status(500).json({
        error: error,
});
}
}

exports.login = async(req, res, next) =>{

    try{
        const authoUser = await UserModel.findOne({ emailId: req.body.emailId, Password:req.body.Password });
        const existingUser = await UserModel.findOne({ emailId: req.body.emailId });
        if(existingUser){
            return res.status(200).json({
                messsage:'valid user'
        });
        if(authoUser){
            return res.status(200).json({
                messsage:'Authorized user'
            })
    
        }
        else{
            res.status(401).json({message:"unauthorized user"});
        }
    }
    else{
            res.status(404).json({messsage:' user not found'});
    }
}
catch(err){
    res.status(500).json({
        error: error,
    }) 
}
}