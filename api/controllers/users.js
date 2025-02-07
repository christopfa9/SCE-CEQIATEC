const { getDBConnection } = require('../db-connection');

module.exports.getUserList = async(req, res) => {
    try {
        const pool = await getDBConnection();
        const result = await pool
            .request()
            .execute('dbo.GetUserList');
        res.json(result.recordset)
    } catch(error) {
        res.status(500).send(error.message);
    }
}