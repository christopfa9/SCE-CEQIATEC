const { getDBConnection } = require('../db-connection');


module.exports.getEquipmentList = async(req, res) =>  {
    try {
        const { type, location, responsible } = req.body;
        const pool = await getDBConnection();
        const result = await pool
            .request()
            .input('InEquipmentTypeName', type) 
            .input('InEquipmentLocationName', location)
            .input('InEquipmentResponsibleAlias', responsible)
            .execute('dbo.GetEquipmentList');
        res.json(result.recordset);
    } catch(error) {
        res.status(500).send(error.message);
    }
}

module.exports.createEquipment = async(req, res) => {
    console.log(req.body);

    try {
        const { assetNumber, entryDate, description, correctionFactor, nextCalibrationDate
            ,workRange, minCapacity, maxCapacity, calibrationPoints, serialNumber
            ,acceptanceRequirement, model, typeId, locationId, brandId, userId } = req.body;
        const pool = await getDBConnection();
        const result = await pool
            .request()
            .input('InAssetNumber', assetNumber)
            .input('InEntryDate', entryDate)
            .input('InDescription', description)
            .input('InCorrectionFactor', correctionFactor)
            .input('InNextCalibrationDate', nextCalibrationDate)
            .input('InWorkRange', workRange)
            .input('InMinCapacity', minCapacity)
            .input('InMaxCapacity', maxCapacity)
            .input('InCalibrationPoints', calibrationPoints)
            .input('InSerialNumber', serialNumber)
            .input('InAcceptanceRequirement', acceptanceRequirement)
            .input('InModel', model)
            .input('InEquipmentTypeId', typeId)
            .input('InLocationId', locationId)
            .input('InEquipmentBrandId', brandId)
            .input('InUserId', userId)
            .execute('dbo.CreateEquipment');
        res.status(200).send("Equipo insertado correctamente")
    } catch(error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

module.exports.getEquipment = async(req, res) =>  {
    console.log(req.query);
    try {
        const pool = await getDBConnection();
        const result = await pool
            .request()
            .input('InId', req.query.id) 
            .execute('dbo.GetEquipment');
        res.json(result.recordset);
    } catch(error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}
