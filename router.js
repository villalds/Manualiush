const express=require('express');
const router=express.Router();

const conexion=require('./database/conn')

router.get('/',(req, resp)=>{
   
    conexion.query('select * from Departamento',(error,results)=>{
        if(error){
            throw error;
        }
        else{
            resp.render('index.ejs',{results:results.recordset}); 
        }
    });
})
router.get('/',(req, resp)=>{
   
    conexion.query('select * from Empleados',(error,results)=>{
        if(error){
            throw error;
        }
        else{
            resp.render('index.ejs',{results:results.recordset}); 
        }
    });
})

module.exports=router;