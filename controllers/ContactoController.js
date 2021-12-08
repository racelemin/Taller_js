import mongoose from 'mongoose'
import PersonaSchema from '../models/ContactoModel.js'

//DAO de Contacto
const Futbolista = mongoose.model('Futbolista' , PersonaSchema)

//accion de controlador: insertar nueva Persona
export const addFutbolista = ( request , response ) => {
    //crear nueva Persona:
    let nuevoFutbolista = new Futbolista( request.body )
    //grabar la nueva persona
    nuevoFutbolista.save( (error , futbolista) => {
        if(error){
            response.send(error)
        }else{
            response.json(futbolista)
        }
    })
}

//accion para seleccionar todas las personas
export const getFutbolista = (request , response) => {
    Futbolista.find( {} ,   (error , futbolista) => {
        if(error){
            response.send(error)
        }else{
            response.json(futbolista)
        }
    }   )
}

//accion de detalle de persona
export const getFutbolistaById = (request , response ) => {
    Futbolista.findById( request.params.futbolista.id ,   (error , futbolista) => {
        if(error){
            response.send(error)
        }else{
            response.json(futbolista)
        }
    }   )
}

//accion borrar: 
export const deleteFutbolista = (request , response ) => {
    Futbolista.deleteOne( { _id: request.params.futbolistaid } , (error , futbolista ) =>{
           if(error){
               response.send(error)
           }
           else{
               response.json({ mensaje: "Futbolista borrado"})
           } 
    })
}



