import mongoose from 'mongoose';

const aboutPersonalContentSchema = new mongoose.Schema({
    aboutHeader: {type:String,required:false},
    aboutHeader2: {type:String,required:false},
    aboutSlogan: {type:String,required:false},
    aboutSlogan2: {type:String,required:false},
    aboutTitle: {type:String,required:false},
    aboutNameSurname: {type:String,required:false},
    aboutBioContent: {type:String,required:false},
    aboutBioContent2: {type:String,required:false},
    aboutImage: {type:String,required:false},
    aboutBioQuotation: {type:String,required:false},
},{
    timestamps:true,
})



const PersonalContent = mongoose.model('PersonalContent', aboutPersonalContentSchema);


export default PersonalContent;