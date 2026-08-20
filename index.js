const express = require('express');
const path = require('node:path');

const app = express();
app.use(express.json());

const router = express.Router();
router.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// cPanel/Passenger runs the app under its Application URL and passes that
// full path through. Mount at the prefix, with a "/" fallback for safety.
app.use('/CivicPlusEvolveAutomationTooling', router);
app.use('/', router);

// Diagnostic: if nothing above matched, show what actually arrived.
app.use((req, res) => {
  res.status(200).send(
    'NO ROUTE MATCHED\n' +
    `method:          ${req.method}\n` +
    `req.url:         ${req.url}\n` +
    `req.originalUrl: ${req.originalUrl}\n` +
    `BASE_URI env:    ${process.env.BASE_URI}`
  );
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));