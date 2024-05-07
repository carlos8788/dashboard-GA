import express from "express";
import config from "./config.js";
import connectToDB from "./connect.js";
import productRoutes from "./routes/products.route.js"
import userRoutes from "./routes/users.route.js"
import viewRoutes from "./routes/views.route.js"
import { engine } from "express-handlebars";
import cors from "cors"
const app = express()
app.use(cors())
app.use(express.static('public'))
//Handlebars
app.engine('handlebars', engine({
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true
    }
  }));
app.set('view engine', 'handlebars')
app.set('views', './src/views')

// Conexión
connectToDB()

// JSON
app.use(express.json())

// Rutas
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/', viewRoutes)


app.listen(config.PORT, ()=> console.log(`Listen to port ${config.PORT}`))