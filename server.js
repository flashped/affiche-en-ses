const express = require('express');
const app = express();
const port = 3000;

// Configurer le répertoire public pour les fichiers statiques (comme l'image)
app.use(express.static('public'));

// Page principale
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// L'endpoint qui active l'affichage de l'image
app.get('/show-image', (req, res) => {
    res.json({ showImage: true });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
