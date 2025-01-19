// const express = require('express');
// const router = express.Router();
// const YourModel = require('../models/YourModel');

// // Create a new resource
// router.post('/', async (req, res) => {
//   try {
//     const newResource = new YourModel(req.body);
//     const savedResource = await newResource.save();
//     res.status(201).json(savedResource);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // Get all resources
// router.get('/', async (req, res) => {
//   try {
//     const resources = await YourModel.find();
//     res.status(200).json(resources);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Get a single resource by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const resource = await YourModel.findById(req.params.id);
//     if (!resource) return res.status(404).json({ message: 'Resource not found' });
//     res.status(200).json(resource);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Update a resource by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedResource = await YourModel.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!updatedResource) return res.status(404).json({ message: 'Resource not found' });
//     res.status(200).json(updatedResource);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // Delete a resource by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedResource = await YourModel.findByIdAndDelete(req.params.id);
//     if (!deletedResource) return res.status(404).json({ message: 'Resource not found' });
//     res.status(200).json({ message: 'Resource deleted' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;
