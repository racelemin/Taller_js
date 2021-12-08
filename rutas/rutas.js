//Endpoints del proyecto
//Endpoint: Ruta REST en un proyecto API Backend
// Ej: http://localhost:5000/personas/4
//          Un endpoint solo exponen info en formato JSON
import { addFutbolista,
         getFutbolista, 
         getFutbolistaById, 
         deleteFutbolista } from "../controllers/ContactoController.js"

const rutas = (  app ) => {
        app.route('/futbolista')
                  .get(getFutbolista)
                  .post(addFutbolista)
        app.route('/futbolista/:futbolistaid')   
                  .get(getFutbolistaById) 
        app.route('/futbolista/delete/:futbolistaid')
                  .get(deleteFutbolista)      
}


export default rutas

