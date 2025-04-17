const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let staffData = [];

app.post('/staff', (req, res) => {
  const newStaff = { id: Date.now().toString(), ...req.body };
  staffData.push(newStaff);
  res.status(201).json(newStaff);
});

app.get('/staff', (req, res) => res.json(staffData));

app.get('/staff/:id', (req, res) => {
  const staff = staffData.find(s => s.id === req.params.id);
  if (!staff) return res.status(404).send('Not found');
  res.json(staff);
});

app.put('/staff/:id', (req, res) => {
  const index = staffData.findIndex(s => s.id === req.params.id);
  if (index === -1) return res.status(404).send('Not found');
  staffData[index] = { ...staffData[index], ...req.body };
  res.json(staffData[index]);
});

app.delete('/staff/:id', (req, res) => {
  staffData = staffData.filter(s => s.id !== req.params.id);
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Staff-Service running on port ${PORT}`));
