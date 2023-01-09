import client from "../Client/Client";

const MakeInspection = (employeeId,farmId,farmerId) => client.post(`/api/Inspections/MakeInspection?employeeId=${employeeId}&farmId=${farmId}&farmerId=${farmerId}`);


export default {
    MakeInspection,
    
};