const express = require('express');
const app = express();
const port = 3000;

app.get('/data', (req, res) => {
    const { start, end, interval, range } = req.query;

    const length = (end - start) / interval;

    const data = Array.from({ length }, (v, i) => [
        start + i * interval,
        Math.floor(Math.random() * range),
    ]);

    res.send({
        data,
    });
});

app.listen(port, () => {
    console.log('Start server');
});
