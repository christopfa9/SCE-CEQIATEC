const mssql = require('mssql');

const dbSettings ={
    user:'sce',
    password:'sce1234',
    server:'192.168.0.17',
    database:'SCE-CEQIATEC',
    trustServerCertificate: true,
    options: {
        trustedconnection:  true,
        enableArithAbort:  true,
        encrypt: false,
      }, 
    port:1433
}

module.exports.getDBConnection = async()=>{
  try {
    const pool = await mssql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
}