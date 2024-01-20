const userModel=require('./user.model')

exports.getUsers = (req, res, next) => {

    userModel.find().then((users) => {
        res.status(200).json({
            users: users,
        });
    }).catch((err) => {
        res.status(500).json({
            error: err,
        });
    });

};
exports.createUser = (req, res, next) => {
    const newUser = new userModel({ firstName: req.body.firstName , lastName: req.body.lastName});
    // const firstName = new userModel({firstName: req.body.firstName});
    // const lastName =  new userModel({lastName: req.body.lastName});
    newUser
    .save()
    .then((result) => { 
        res.status(200).json({
            user: result
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
}
exports.getUserById = (req, res, next) => {
    userModel.findById(req.params.id).then((result) => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(404).json({
            error: err
        });
    });
};
exports.findByIdAndDelete = (req, res, next) => {
    userModel.findByIdAndDelete(req.params.id).then((result) => {
        if(result){
            res.status(200).json(result);
        }
        else{
            res.status(200).json({msg:'User Not Found'});
        }
    }).catch(err => {
        res.status(404).json({
            error: err
        });
    });
};