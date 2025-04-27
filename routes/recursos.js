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

routes.get('/recursos',(req, res) =>{
    const user = {nombre: "william g"}
    const htmlMessage = "lista de recursos"
    const data = readData()
    res.render("recursos",{user, htmlMessage, data})
});


routes.get('/recursos/:id',(req, res) =>{
    const data = readData()
    const user = {nombre: "william G"}
    const id = parseInt(req.params.id);
    const recurso = data.recursos.find((recurso) => recurso.id === id)
    res.render("recursoDetalle",{user, recurso})
});


export default routes;