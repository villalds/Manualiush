const sqls=require('mssql');
const dbsinfo={
    user:'villalds',
    password:'Daniel011836',
    server:'implentserver.database.windows.net',
    database:'dbstaller',
    options:{
        encrypt:true,
        trustServerCertificate:true
    }
}
async function getConnection(){

    try{
        const pool = await sqls.connect(dbsinfo);
        return pool;
    }catch(error){
        console.error(error);
    }
}

getConnection();

module.exports=sqls;