import {model, Schema} from 'mongoose';

const PlantSchema = new Schema(
    {
        plantName: {
            type: String,
            required: [true, "Plant is required!"],
            minlength: [2, "Plant must be at least 3 characters long!"],
            maxlength: [255, "Plant must be less than 255 characters long"]
        },
        price: {
            type: String,
            required: [true, "Price is required!"],
            minlength: [2, "Price must be at least 3 characters long!"],
            maxlength: [255, "Price must be less than 10 characters long"]

        },

        inStock: {
            type: Boolean,
            default: true
        },
        photo: {
            type: String,
            required: [true, "Photo is required!"],

        },
        type: {
            type: String,
            required: [true, "Type is required!"],
            minlength: [2, "Plant must be at least 3 characters long!"],
            maxlength: [255, "Plant must be less than 255 characters long"]
        },
        description: {
            type: String,
            required: [true, "Description is required!"],
            minlength: [5, "Description must be at least 5 characters long!"],
            maxlength: [255, "Plant must be less than 255 characters long"]
        },
    },
    { timestamps: true }
);
const Plant = model("Plant", PlantSchema);
export default Plant;