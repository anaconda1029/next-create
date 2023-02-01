import { dbMongo } from "./db";

const dbDriver = dbMongo;

export function getUserInfo(token,callback) {
    return dbDriver.getUserInfo(token,callback);
}

export function addUserInfo(userInfo,callback){
    return dbDriver.addUserInfo(userInfo,callback)
}

export function queryTransactionByUser(name,callback){
    return dbDriver.queryTransactionByUser(name,callback)
}

export function addTransaction(transaction,callback){
    return dbDriver.addTransaction(transaction,callback)
}