const { getDBConnection } = require('../db-connection');

module.exports.getEquipmentTypes = async(req, res) => {
    try {
        const pool = await getDBConnection();
        const result = await pool
            .request()
            .execute('dbo.GetEquipmentTypes');
        res.json(result.recordset)
    } catch(error) {
        res.status(500).send(error.message);
    }
}

module.exports.getEquipmentBrands = async(req, res) => {
    try {
        const pool = await getDBConnection();
        const result = await pool
            .request()
            .query('dbo.GetEquipmentBrands');
        res.json(result.recordset);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    } 
}

module.exports.getLocaations= async(req, res) => {
    try {
        const pool = await getDBConnection();
        const result = await pool
            .request()
            .query('dbo.GetLocations');
        res.json(result.recordset);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}