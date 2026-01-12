const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  // Optional profile fields for students
  profile: {
    college: String,
    skills: [String],
    resume: String // URL to file
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);