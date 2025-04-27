import express from "express";
import recursosRoutes from './routes/recursos.js'
import notificacionesRoutes from './routes/notificaciones.js'
import reservasRoutes from './routes/reservas.js'
import usuariosRoutes from './routes/usuarios.js'
import methodOverride from 'method-override'
 
const app = express();
app.use(express.json());
app.use(express.static("public")); // carpeta para el css
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.set('view engine','ejs');// motor ejs
app.set('views', './views'); // archivos ejs

// mensaje principal
app.get('/', (req, res) => {
    res.render('home');
})

app.use("/recursos", recursosRoutes);
app.use("/notificaciones", notificacionesRoutes);
app.use("/usuarios", usuariosRoutes);
app.use("/reservas", reservasRoutes);

const puerto = 3000;
app.listen(puerto, () => {
    console.log("servidor iniciado en http://localhost:" + puerto);
});