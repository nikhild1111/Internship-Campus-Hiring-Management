const Application = require('../models/Application');

// Student applies to a job
exports.applyForJob = async (req, res) => {
  try {
    const { jobId } = req.body;
    
    // Check if already applied
    const existingApp = await Application.findOne({ job: jobId, student: req.user.id });
    if (existingApp) return res.status(400).json({ message: 'You have already applied for this job' });

    const application = new Application({
      job: jobId,
      student: req.user.id,
      status: 'Applied'
    });

    await application.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all applications for a logged-in student
exports.getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({ student: req.user.id })
      .populate('job', 'title company status'); // Populates job details
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};