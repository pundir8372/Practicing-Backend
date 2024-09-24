import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
uss
const videoSchema=new mongoose.Schema({
  videoFile:{
    type:String,  //Cloudinary URL
    required:true
  },
  thumbnail:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
    },
    duration:{
      type:Number,
      required:true
    },
    views:{
      type:Number,
      required:true
    },
    isPublished:{
      type:Boolean,
      default:0
    },
    owner:{
      type:Schema.Types.ObjectId,
      ref:"User"
    },
},{timestamps:true});

videoSchema.plugin(mongooseAggregatePaginate);

export const Video=mongoose.model("Video",videoSchema);
