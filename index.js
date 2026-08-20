const fs = require('node:fs');
const express = require('express');
const path = require('node:path');
const { title } = require('node:process');

const app = express();
app.use(express.json());

// Move your routes onto a router instead of putting them directly on `app`
const router = express.Router();

router.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Mount at the path cPanel serves the app from.
// Locally BASE_URI is unset, so it mounts at '/' and nothing changes for you.
const BASE_URI = process.env.BASE_URI || '/';
app.use(BASE_URI, router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
