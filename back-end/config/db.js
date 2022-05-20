const mysql = require('mysql')

// créer la connexion

// je n'utilise pas .env car c'est un projet openclassroom qui ne contient pas de données sensibles

const db = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'azertyazerty',
    database    : 'groupomania'    
})

module.exports.getDB = () => {
    return db
}