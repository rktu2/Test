const mongoose = require('mongoose');
const TestSchema = new mongoose.Schema({
    paragraph:{
        type:String,
        required:true,
    },
});
TestSchema.virtual('id').get(function(){
    return this._id.toHexString();
});
TestSchema.set('toJSON',{
    virtual:true
});

exports.Test = mongoose.model('Test' , TestSchema);
exports.TestSchema = TestSchema;