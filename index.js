const fs = require('node:fs');
const XLSX = require('xlsx');
const express = require('express');
const path = require('node:path');
const { title } = require('node:process');

const app = express();
app.use(express.json());

const router = express.Router();

router.get('/style.css', (req, res) => res.sendFile(path.join(__dirname, 'style.css')));
router.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

const BASE_URI = process.env.BASE_URI || '/';
app.use(BASE_URI, router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));