import Plant from '../models/plant.model.js';

// controller is for CRUD

// create new
async function createPlant(req, res) {
    try {
        const newPlant = await Plant.create(req.body);
        res.json(newPlant);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


// read all
async function getAllPlants(req, res) {
    try {
        const allPlants = await Plant.find(); 
        res.json(allPlants);
    } catch (error) {
        console.log(error);
        res.status(400).json(error); 
    }
}


// read one
async function getOnePlant(req, res) {
    try {
        const foundPlant = await Plant.findById(req.params.id);
        res.json(foundPlant);
    } catch (error) {
        console.log("WARNING ERROR",error);
        res.status(400).json(error);
    }
}


// update
async function updateOnePlant(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedPlant);
    } catch (error) {
        console.log("WARNING ERROR",error);
        res.status(400).json(error);
    }
}

// delete one
async function deleteOnePlant(req, res) {
    try {
        const deletedPlant = await Plant.findByIdAndDelete(req.params.id);
        res.json(deletedPlant);
    } catch (error) {
        console.log("WARNING ERROR",error);
        res.status(400).json(error);
    }
}

// need to export every method in our controller
export {
    createPlant,
    getAllPlants,
    getOnePlant,
    updateOnePlant,
    deleteOnePlant,
};