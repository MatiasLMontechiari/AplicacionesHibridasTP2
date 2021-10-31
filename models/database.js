import mongodb from 'mongodb'
import config from '../config/config.js'

const url = `mongodb+srv://${config.env.mongoUSER}:${config.env.mongoPASS}@${config.env.mongoDbCluster}`

const client = new mongodb.MongoClient(url)

export async function conexion(callback){
    
    await client.connect()

    const result = await callback(client.db(`${config.env.mongoDbDavinci}`))

    await client.close()

    return result
}