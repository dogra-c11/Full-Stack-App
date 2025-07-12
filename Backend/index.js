import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/games', (req, res) => {
    const games = [
        { id: 1, name: 'Chess' },   
        { id: 2, name: 'Checkers' },
        { id: 3, name: 'Monopoly' }
    ];
    res.json(games);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});