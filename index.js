/************************************
*    CONFIGURATION
*************************************/

// config Express
const express = require("express");
const app = express();

// config pour gestion des chemins
const path = require("path");

// config Serveur
const port = 3000; 

// configuration du dossier static qui pointe sur public
app.use('/static', express.static('public'));
/***********************************
 *  GESTION DES ROUTES
 ***********************************/

// Route pour la racine (homepage)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});


/************************************
 *  APPLICATION
 **************************************/

// Demarrage du serveur misranlabs
app.listen(port, () => {
    console.log(`Serveur misranlabs lancé sur le port ${port}`);
});