import mongoose from 'mongoose'

const patientSchema = mongoose.Schema(
  {
    ID: {
      type: String,

    },
    name: {
      type: String,

    },
    age: {
      type: String,

    },
    address: {
      type: String,

    },
    phone: {
      type: String,

    },
    career: {
      type: String,

    },

  },
  {
    timestamps: true,
  }
)

const Patient = mongoose.model('Patient', patientSchema)

export default Patient