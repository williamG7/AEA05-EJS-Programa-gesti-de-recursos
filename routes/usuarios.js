import express from 'express'
import fs from 'fs'

const routes = express.Router();

const readData = () => {
    try {
        const data = fs.readFileSync("./gestionDb.json");
        return JSON.parse(data);
    } catch (error) {
        console.error(error); 
    }
};

const writeData = (data) => {
    try {
        fs.writeFileSync("./gestionDb.json", JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }
};

routes.get('/usuarios',(req, res) =>{
    const user = {name: "william g"}
    const htmlMessage = "lista de usuarios"
    const data = readData()
    res.render("usuarios",{user, htmlMessage, data})
});


routes.get('/usuarios/:id',(req, res) =>{
    const data = readData()
    const user = {name: "william G"}
    const id = parseInt(req.params.id);
    const recurso = data.recursos.find((recurso) => recurso.id === id)
    routes.render("usuariosDetalle",{user, recurso})
});


export default routes;