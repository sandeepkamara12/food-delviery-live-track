import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  mobile: {
    type: String,
    required: function () {
      return this.provider === "local";
    },
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: function () {
      return this.provider === "local";
    },
    minlength: 6,
    trim: true
  },
  is_verified: {
    type: Boolean,
    default: false,
    required: false
  },
  image: {
    type: String,
    default: "",
    required: true
  },
  image_public_id: { type: String,  default: null },
  role: {
    type: String,
    enum: ["user", "owner", "delivery"],
    required: true
  },
  provider: {
    type: String,
    enum: ["local", "google"],
    default: "local"
  },
},
  { timestamps: true }
);

export const User = mongoose.model("Users", userSchema);