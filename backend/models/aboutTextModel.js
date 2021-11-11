import mongoose from 'mongoose';

const aboutTextContentSchema = new mongoose.Schema({
    aboutContentHeader: {type:String,required:false},
    aboutContentText: {type:String,required:false},
},{
    timestamps:true,
})

const TextContent = mongoose.model('TextContent', aboutTextContentSchema);

export default TextContent;