module.exports = [
    `CREATE DATABASE IF NOT exists ApiNanoSensores;`,
    `USE ApiNanoSensores;`,
    `CREATE TABLE IF NOT exists sensores (
        ID int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        SENSOR_NAME varchar(30) NOT NULL, 
        TEMPERATURE FLOAT NOT NULL,
        FECHA varchar(20)  NOT NULL,
        HORA varchar(20) NOT NULL  
    );`,
    
];




