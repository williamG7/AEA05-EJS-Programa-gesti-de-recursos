import express from 'express'
import fs from 'fs'

const routes = express.Router();

const readData = () => {
    try {
        const data = fs.readFileSync("./recursosDb.json");
        return JSON.parse(data);
    } catch (error) {
        console.error(error);
    }
};

const writeData = (data) => {
    try {
        fs.writeFileSync("./recursosDb.json", JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }
};

routes.get('/recursos',(req, res) =>{
    const user = {name: "william g"}
    const htmlMessage = "lista de recursos"
    const data = readData()
    res.render("recursos",{user, htmlMessage, data})
});


routes.get('/recursos/:id',(req, res) =>{
    const data = readData()
    const user = {name: "william G"}
    const id = parseInt(req.params.id);
    const recurso = data.recursos.find((recurso) => recurso.id === id)
    routes.render("recursosDetalle",{user, recurso})
});


export default routes;