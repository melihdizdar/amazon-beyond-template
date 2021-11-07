import mongoose from 'mongoose';

const homeCardSchema = new mongoose.Schema({
    homeImage: {type:String,required:true},
    homeHeader: {type:String,required:true},
    homeText: {type:String,required:true},
},{
    timestamps:true,
})

const HomeCard = mongoose.model('HomeCard', homeCardSchema);

export default HomeCard;