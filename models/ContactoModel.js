import mongoose from 'mongoose'

//Definir un objeto Schema 
const Schema = mongoose.Schema

//Definir la estructura de las entidades 
//a registrar

const PersonaSchema = new Schema(
    {
        nombre: {
            type: String,
            required: "nombre vacio"
        },
        nacionalidad: {
            type: String,
        },Posicion: {
            type:String,
            required: "posicion vacia"
        },fecha_creacion:{
            type:Date,
            default: Date.now
        }

    }
)

export default PersonaSchema