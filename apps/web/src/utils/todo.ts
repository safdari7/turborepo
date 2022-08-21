// import * as React from 'react'
import {client as clientAPI} from '../api/client'


interface Todo {
    "userId": number
    "id":number
    "title": string
    "completed": boolean
} 

function getTodos() {
    const client =  (endpoint:string, config?: any) => clientAPI(endpoint, {...config})
    return client('todos').then(data => data)
}

export {getTodos}