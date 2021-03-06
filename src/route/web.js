import express from "express"
import homeController from "../controllers/homeController"
import userController from "../controllers/userController"
import dataController from "../controllers/dataController"
import equipmentController from "../controllers/equipmentController"



const baseApi = "/api/warehouses"
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD)
    // rest api

    //user api
    router.get(baseApi + '/users/:userID', userController.getUser)

    //data api
    router.get(baseApi + '/data/equipment/:warehouseId', dataController.getPresentData)
    router.get(baseApi + '/data/hourly/:warehouseId', dataController.getHourlyData)
    router.get(baseApi + '/data/daily/:warehouseId', dataController.getDailyData)
    router.get(baseApi + '/data/monthly/:warehouseId', dataController.getMonthlyData)

    //equipments api
    router.get(baseApi + '/equipments/:warehouseId', equipmentController.getEquipmentsList)


    return app.use("/", router)
}

module.exports = initWebRoutes