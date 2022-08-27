const Issue       = require('../models/issue'); // include model issue
const labels      = require('../models/labels'); // include model labels


//get all issue
module.exports.index = function(req,res){
    let id = req.params.id;
    let name        = req.body.title;
    let description = req.body.description;
    let author      = req.body.author;
    let label       = req.body.label;
    var obj         = {'project_id':id};

   // create object for filtering data
    if(name){
        obj["name"] = name.trim();
    }
    if(description){
        obj["description"] = description.trim();
    }
    if(author){
        obj["author"] = author.trim();
    }
    if(label){
        obj["label"] = label;
    } 
    // fetch record 
    Issue.find(obj,function(err,Issues){
        if(err){
            console.log('error in fetching contact from db');
            return ;
        }
        // fetch all labels to show in filter form
        labels.find(obj,function(err,label){
            console.log(Issues);
            res.render('../view/issue/index',{issues:Issues,id:id,label:label})
        })
       
    }).populate('label').sort({"updatedAt":-1})
}

// issue create 
module.exports.issueCreate = function(req,res){
    let project_id = req.params.id;[]
    labels.find({},function(err,label){
        if(err){
            console.log('error in fetching contact from db');
            return ;
        }
        res.render('../view/issue/create_issue',{labels:label,project_id:project_id})
    })
}



// module.exports.addIssue = function(req,res){
//     let issueData = req.body;
//     let name    = issueData.name;
//     let message = issueData.author;
//     labels.create({ 
//         name    : req.body.name,
//         message : req.body.author,
//     }, function(err, issue_data){
//         if(err){
//             console.log('error in creating a contact');
//             return;
//         }
//         console.log('*******', issue_data);
//         return res.redirect('back');    
//     });
//     //console.log(message);
// }

// add issue after form submit
module.exports.addIssue = function(req,res){
    let issueData = req.body;
    console.log(req.body.label);
    Issue.create({ 
        name        : req.body.name,
        author      : req.body.author,
        label       : req.body.label,
        project_id  : req.body.project_id,
        description : req.body.description
     }, function(err, issue_data){
        if(err){
            console.log('error in creating a contact');
            return;
        }
        console.log('*******', issue_data);
        console.log(issue_data.id);
        return res.redirect('/issue/'+issue_data.project_id);    
    });
    //console.log(message);
}





 