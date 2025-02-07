import { axiosClient } from './AxiosClient';

export const getEquipmentList = (type, location, responsible) => {
    return axiosClient.get('/equipments', {
        body: {
            "type": type,
            "location": location,
            "responsible": responsible
        },
    });
}

export const getEquipment = (id) => { 
    return  axiosClient.get('/equipment', {
        params: {
            "id":id
        }
    });
}

export const getUserList = () => {
    return axiosClient.get('/users');
}

export const getTypes = () => {
    return axiosClient.get('/types');
}

export const getLocations = () => {
    return axiosClient.get('/locations');
}

export const getBrands = () => {
    return axiosClient.get('/brands');
}

export const createEquipment = (assetNumber, entryDate, description
    , correctionFactor, nextCalibrationDate, workRange, minCapacity
    , maxCapacity, calibrationPoints, serialNumber, acceptanceRequirement
    , model, typeId, locationId, brandId, userId) => {
    return axiosClient.post('/create-equipment', {
        
            "assetNumber": assetNumber,
            "entryDate": entryDate,
            "description": description,
            "correctionFactor": correctionFactor,
            "nextCalibrationDate": nextCalibrationDate,
            "workRange": "0-100",
            "minCapacity": minCapacity,
            "maxCapacity": maxCapacity,
            "calibrationPoints": calibrationPoints,
            "serialNumber": serialNumber,
            "acceptanceRequirement": acceptanceRequirement,
            "model": model,
            "typeId": typeId,
            "locationId": locationId,
            "brandId": brandId,
            "userId": userId
        
    });
}