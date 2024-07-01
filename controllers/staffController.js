const Staff = require('../models/staffModel')


exports.getStaff = async (req, res) => {
    try {
      const staff = await Staff.find();
      res.status(200).json(staff);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  // Create a new user
exports.createSatff = async (req, res) => {
    const staff = new Staff({
      name: req.body.name,
      mobileno: req.body.mobileno,
      age: req.body.age
    });
    try {
      const newStaff = await staff.save();
      res.status(201).json(newStaff);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


  exports.deleteStaff = async (req, res) => {
    try {
      const staff = await Staff.findByIdAndDelete(req.params.id);
      if (staff == null) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };