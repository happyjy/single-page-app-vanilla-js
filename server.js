const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

console.log('working? ');

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use('/staticFoler', express.static(path.resolve(__dirname, 'frontend', 'static')));
// app.use(express.static(path.resolve(__dirname, 'frontend', 'static')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

app.listen(port, () => console.log(`Server running... http://localhost:${port}`));
