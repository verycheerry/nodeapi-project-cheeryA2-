const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Node API</title>
                <style>
                    body {
                        margin: 0;
                        font-family: Arial, sans-serif;
                        background: linear-gradient(135deg, #5a0f1c, #800000);
                        color: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        text-align: center;
                    }
                    .container {
                        background: rgba(0, 0, 0, 0.3);
                        padding: 40px;
                        border-radius: 15px;
                        box-shadow: 0 10px 25px rgba(0,0,0,0.4);
                    }
                    .btn {
                        display: inline-block;
                        margin-top: 20px;
                        padding: 10px 20px;
                        background: white;
                        color: maroon;
                        border-radius: 8px;
                        text-decoration: none;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Node API Running</h1>
                    <p>Welcome to your DevOps Final Project</p>
                    <a class="btn" href="/api/feature">Test API</a>
                </div>
            </body>
        </html>
    `);
});

app.get('/food', (req, res) => {
    res.send('Food API working');
});

app.get('/api/feature', (req, res) => {
    res.json({
        status: "success",
        message: "Feature API update for final DevOps project"
    });
});

app.post('/order', (req, res) => {
    res.send('Order API working');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
