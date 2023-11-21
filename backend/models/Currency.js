import mongoose from "mongoose";

const currencySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
   

    // reviews: [
    //   {
    //     type: mongoose.Types.ObjectId,
    //     ref: "Review",
    //   },
    // ],
    status:{
        type:String,
        required:true
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Currency", currencySchema);
