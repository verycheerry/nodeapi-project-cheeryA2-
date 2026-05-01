const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Home route (HTML with maroon background)
app.get('/', (req, res) => {
    res.send(`
        <html>
            <body style="background-color: maroon; color: white; text-align: center;">
                <h1>Welcome to Node API</h1>
            </body>
        </html>
    `);
});

app.get('/food', (req, res) => {
    res.send('Food API working from branch A');
});

app.get('/api/feature', (req, res) => {
  res.json({
    message: 'Feature API update for final DevOps project'
  });
});

// ✅ FIXED POST route
app.post('/order', (req, res) => {
    res.send('Order API working');
});

// IMPORTANT for EC2
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
