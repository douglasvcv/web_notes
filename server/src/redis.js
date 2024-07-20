import {Redis} from 'ioredis'

function getRedisInstace(){
    const instace = new Redis({
        host:"",
        port:"",
        username:"",
        password:"",
    })

    instace.on("connect", ()=>console.log("Redis connected"))
    instace.on("error", (error)=>console.log("Redis error: ", error))

    return instace
}