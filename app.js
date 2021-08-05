const express = require('express');
const mysql= require('mysql2');
const PORT = 3050;
const app = express ();
app.use(express.json())

//ROUTE


app.get('/',(req,res)=>{    
    res.send('Bienvenidos a FANIOT');
})
//lista de sensores
app.get('/sensores',(req,res)=>{
    const sql = 'SELECT * FROM sensores';
    connection.query(sql,(error,results)=>{
    if(error) throw error;
    if(results.length > 0){
        res.json(results)
    }else{
        res.send('No tenemos resultados')
    }
})
} )
//Sensor por ID
app.get('/sensores/:id',(req,res)=>{
    const {id} = req.params
    const sql = `SELECT * FROM sensores WHERE id = ${id}`
    connection.query(sql,(error,result)=>{
        if(error) throw error;
        if(result.length > 0){
            res.json(result)
        }else{
            res.send('No tenemos resultados')
        }
    })

})
//Crear nuevo sensor
app.post('/new',(req,res)=>{
    const sql = `INSERT INTO sensores SET ?`;
    const sensorObj = {
     "SENSOR_NAME": req.body.SENSOR_NAME,
     "TEMPERATURE": req.body.TEMPERATURE,
     "FECHA": req.body.FECHA,
     "HORA": req.body.HORA
    }
    connection.query(sql,sensorObj,error =>{
        if(error) throw error;
        res.send('Sensor creado')
    })    
 })
//Actualizar  sensor
app.put('/update/:id',(req,res)=>{
    const {id} = req.params; 
    const {SENSOR_NAME,TEMPERATURE,FECHA,HORA} = req.body;
    const sql = `UPDATE sensores SET SENSOR_NAME = '${SENSOR_NAME}',TEMPERATURE =' ${TEMPERATURE}',FECHA ='${FECHA}',HORA='${HORA}' WHERE id =${id} `;
    connection.query(sql,error =>{
        if(error) throw error;
        res.send('Sensor Actualizado' )
    })
    
})
//Borrar  sensor
app.delete('/delete/:id',(req,res)=>{
    const {id} = req.params
    const sql = `DELETE FROM sensores WHERE id = ${id}`
    connection.query(sql,error =>{
        if(error) throw error;
        res.send('DELETE')
    })    
})
//mySql
const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: 'root',
    database:'ApiNanoSensores'
});
//Check Connection

connection.connect(error => {
    if (error) throw error;
    console.log('Server Running !!')
});

app.listen(PORT, ()=>{console.log(`Server Running... ${PORT}`)})
