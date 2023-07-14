import mongoose from "mongoose";

const userRegistrationSchema = new mongoose.Schema({
  ProfileCreatedFor: {
    type: String,
    required: [true, "Please Provide profile created for "],
  },
  Gender: {
    type: String,
    required: [true, "Please Provide gender"],
  },

  Firstname: {
    type: String,
    required: [true, "Please Provide firstname"],
  },
  Lastname: {
    type: String,
    required: [true, "Please Provide lastname"],
  },
  Dateofbirth: {
    type: String,
    required: [true, "Please Provide Dob"],
  },
  Birthplace: {
    type: String,
    required: [true, "Please Provide Dob"],
  },
  Religion: {
    type: String,
    required: [true, "Please Provide Dob"],
  },
  Caste: {
    type: String,
    required: [true, "Please Provide Caste"],
  },
  Address: {
    type: String,
    required: [true, "Please Provide Address"],
  },
  Mobile_Number: {
    type: Number,
    required: [true, "Please Provide Number"],
  },
  Hobbies: {
    type: String,
    required: [true, "Please Provide Number"],
  },

  isVerfied: {
    type: Boolean,
    default: false,
  },

  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const userRegistration =
  mongoose.models.users || mongoose.model("users", userRegistrationSchema);

export default userRegistration;
