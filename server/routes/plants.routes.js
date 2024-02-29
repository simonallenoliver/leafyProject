import { Router } from "express";
import { createPlant, getAllPlants, getOnePlant, deleteOnePlant, updateOnePlant } from "../controllers/plant.controller.js";
const router = Router();


router.route("/plants")
    .get(getAllPlants)
    .post(createPlant)

router.route("/plants/:id")
    .put(updateOnePlant)
    .get(getOnePlant)
    .delete(deleteOnePlant)

export default router;