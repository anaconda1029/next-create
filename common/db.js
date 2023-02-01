import * as mongoDB from "mongodb";

export const dbMongo = {
    init: openDB,
    getUserInfo: getUserInfo,
    addUserInfo:addUserInfo,
    addTransaction:addTransaction,
    queryTransactionByUser:queryTransactionByUser,
}

const DB_CONN_STRING="mongodb://127.0.0.1:27017"

const DB_NAME="trade3dot0"
const COLLECTION_USER="userInfoDetails"
const COLLECTION_TRANSACTION="transactions"



function openDB(callback) {
    const client = new mongoDB.MongoClient(DB_CONN_STRING);
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_USER);
    const res   = collection.find({})
                            .toArray()
                            .then(data => {
                                console.log(data);
                                if (callback) callback(data)
                            })

    console.log("res", res);
    console.log("db", db);

    return db;
}

function getUserInfo(token,callback) {
    const db = openDB();
    const collection = db.collection(COLLECTION_USER);
    const res   = collection.find({})
                            .toArray()
                            .then(data => {
                                console.log(data);
                                if (callback) callback(data)
                            })
}

function addUserInfo(userInfo,callback){
    const db = openDB();
    const collection = db.collection(COLLECTION_USER);
    collection.insertOne(userInfo).then(data=>{
        console.log(data);
        if (callback) callback(data)
    })
}

function addTransaction(transaction,callback){
    const db = openDB();
    const collection = db.collection(COLLECTION_TRANSACTION);
    collection.insertOne(transaction).then(data=>{
        console.log(data);
        if (callback) callback(data)
    })
}

function queryTransactionByUser(name,callback){
    // const client = new mongoDB.MongoClient(DB_CONN_STRING);
    // const db = client.db(DB_NAME);
    // const collection = db.collection(COLLECTION_USER);
    const db = openDB();
    const collection = db.collection(COLLECTION_TRANSACTION);
    collection.find({name:name}).toArray().then(data => {
        console.log(data);
        if (callback) callback(data)
    });
}