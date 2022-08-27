const mongoose      = require('mongoose')
const labelSchema   = new mongoose.Schema({
    // name of the label
    name: {
        type: String,
        requied: true,
      },

    // message about the label
    message: {
        type: String,
        requied: true,
    },

    // issue related to the labels
    issue:{
        type    : mongoose.Schema.Types.ObjectId,
        ref     : 'Issue' 
    },
},
{
    timestamps: true
})
const label = mongoose.model("label", labelSchema);
module.exports = label;
