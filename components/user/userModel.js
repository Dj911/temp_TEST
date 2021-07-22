import mongoose from 'mongoose'
import db from '../../connections/dbMaster'

const userSchema = mongoose.Schema({
    fullName: { type: String },
    businessName: { type: String },
    userProfile: { type: String },
    emailAddress: { type: String },
    mobileNumber: { type: Number },
    location: { type: String },
    qualifications: { type: String },
    userType: {
        type: String,
        Enum: ['user', 'manufacturer', 'Broker']
    },
    distributionFootprints: {           //? Will this be Array or a single string???
        type: String
    },
    awards: [
        {
            imageURL: { type: String },
            title: { type: String },
            detail: { type: String }
        }
    ],
    aboutUs: { type: String },
    aboutBusiness: { type: String }
})

const user = db.model('User', userSchema)

module.exports.User = user