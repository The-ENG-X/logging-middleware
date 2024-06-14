const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/data', (req, res) => {
    res.send('GET request to /data');
});
app.post('/data', (req, res) => {
    res.send('POST request to /data');
});
app.put('/data/:id', (req, res) => {
    const id = req.params.id;
    res.send(`PUT request to /data/${id}`);
});
app.delete('/data/:id', (req, res) => {
    const id = req.params.id;
    res.send(`DELETE request to /data/${id}`);
});
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
