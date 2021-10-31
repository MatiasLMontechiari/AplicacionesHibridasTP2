import mongodb from 'mongodb'
import {conexion} from './database.js'
import config from '../config/config.js'

const testimonios = config.env.mongoDbTestimonios

export async function findAll() {
    return conexion(async function(db){
        return await db.collection(testimonios).find({}).toArray()
    })
}

export async function insert(doc){
    return conexion(async function(db){
        return await db.collection(testimonios).insertOne(doc)
    })
}

export async function update(filter, updateDoc, options){
    return conexion(async function(db){
        return await db.collection(testimonios).updateOne(filter, updateDoc, options)
    })
}

export async function replace(filter, updateDoc, options){
    return conexion(async function(db){
        return await db.collection(testimonios).updateOne(filter, updateDoc, options)
    })
}

export async function findOne(id){
    return conexion(async function(db){
        return await db.collection(testimonios).findOne({_id: mongodb.ObjectId(id)})
    })
}

export async function deleteOne(id){
    return conexion(async function(db){
        return await db.collection(testimonios).deleteOne({_id: mongodb.ObjectId(id)})
    })
}


export default {
    findAll,
    update,
    replace,
    insert,
    findOne,
    deleteOne
}