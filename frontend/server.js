const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const jsonServer = require('json-server');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Middleware
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// JSON Server
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
app.use(middlewares);
app.use('/api', router);

// Endpoint para upload de fotos
app.post('/upload', upload.single('photo'), (req, res) => {
  const tempPath = req.file.path;
  const targetPath = path.join(__dirname, `uploads/${req.file.originalname}`);

  fs.rename(tempPath, targetPath, err => {
    if (err) return res.status(500).send(err);
    res.status(200).json({ url: `/uploads/${req.file.originalname}` });
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});