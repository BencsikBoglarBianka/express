const express = require('express');
const app = express();
const port = 8000;

app.get('/api/msg', (req, res) => {
    res.json({uzenet:'Helló! Sziaaaaaa!'})
});

app.listen(port, () => {
    console.log(`Listening: localhost: ${port}`);
});

// ha inditai akarom vagy át kell neveznem a package.json fájlban a "main" vagy ezkell legyne a neve 
//"index.js"

// Insomnia = tesztelem vele a rest api-t 
// Postman is 
