import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const AcceptSchema = new Schema({

    Order_ID: {
        type: String,
        required: true
    },
    Seller_ID: {
        type: String,
        required: true
    },
    Customer_Name: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    Phone_number: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Total_Amount: {
        type: String,
        required: true
    },
    No_Of_Persons: {
        type: String,
        required: true
    },
    Trip_Name: {
        type: String,
        required: true
    },
    Resevation_Date: {
        type: String,
        required: true
    },
}, { timestamps: true })

export default mongoose.model("Accepted", AcceptSchema)
