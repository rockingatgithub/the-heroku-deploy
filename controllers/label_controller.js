const labels  = require('../models/labels'); // require model labels
module.exports.label = function(req,res){
    // fetch labels
    labels.find({},function(err,label){
        if(err){
            console.log('error in fetching contact from db');
            return ;
        }
        //render page
        res.render('../view/labels',{labels:label})
    })
}