import customerdetail from '../models/customerdetails.model'

export const customerDetails = async(body) =>{
    const data = await customerdetail.create(body)
    return data;
}