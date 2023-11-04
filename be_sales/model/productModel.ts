import mongoose from "mongoose";

interface store {
  title: string;
  image: Array<string>;
  cost: number;
  rating: number;
  QTYinStock: number;
  toggle: boolean;
}

interface iStore extends store, mongoose.Document {}

const storeModel = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    image: {
      type: Array<String>,
    },

    cost: {
      type: Number,
    },

    rating: {
      type: Number,
    },

    toggle: {
      type: Boolean,
      default: false,
    },

    QTYinStock: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model<iStore>("stores", storeModel);
