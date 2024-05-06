import mongoose from "mongoose";
import validator from "email-validator"; 
import bcrypt from 'bcrypt';

const workExperienceSchema = new mongoose.Schema({
  company_name: { type: String },
  from: { type: Number },
  to: { type: Number },
  position: { type: String },
  additional_details: { type: String }
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [3, 'Name must be at least 3 characters long'] 
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (email) => validator.validate(email), 
        message: 'Please provide a valid email'
      }
    },
    password: {
      type: String,
      required: true,
      minlength: [6, 'Password must be at least 6 characters long'] // Validate minimum length
    },
    professional_title: {
      type: String,
    },
    phone_number: {
      type: String,
    },
    professional_summary: {
      type: String,
    },
    skills: {
      type: Array,
    },
    educational_institution: {
      name: { type: String },
      from: { type: Number },
      to: { type: Number },
      major: { type: String },
      additional_details: { type: String }
    },
    work_data: [workExperienceSchema]
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
  
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
