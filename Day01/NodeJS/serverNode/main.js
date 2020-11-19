// const http = require("http"); //Import du module http

// function requestListener(req, res) { //fonction retournant une réponse
//     switch (req.url) {
//         case "/home":
//             res.write("<h1>Guillaume Rand</h1>"); //Écriture de html
//             break;

//         case "/contcat":
//             res.write("<h1>Contact</h1>");
//             break;

//         default:
//             res.write("<h1>404</h1>");;
//     }
//     //OU
//     if (req.url === "/home")
//         res.write("<h1>Guillaume Rand</h1>"); //Écriture de html
//     else if (req.url === "/contact")
//         res.write("<h1>Contact</h1>");
//     else
//         res.write("<h1>404</h1>");

//     res.end(); //Fin response
// }


//const server = http.createServer(requestListener); //On utilise la fonction createServer(), et on écoute la fucntionn

const express = require("express") //on utilise express
const app = express() //on met express() dans une variable

//ENDPOINT
app.use("/test", function (req, res, next) { //on définis l'url /test
    res.status(200).json({ //200 tout c'est bien passé
        message: "JSON" //on renvoi JSON
    })
});

app.listen(3000); //on écoute sur le port 3000