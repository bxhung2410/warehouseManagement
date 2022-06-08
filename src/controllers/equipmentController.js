import db from '../models/index'

let getEquipmentByWarehouseId = async (req, res) => {
    try {
        const equipmentList = await db.MagneticSwitch.findAll({
          where: {
            locationId: req.params.warehouseId
          }
        });
        return res.json({
            equipmentList: [...equipmentList],
        }
        )
    }
    catch (e) {
        console.log(e);
    }
}


module.exports = {
  getEquipmentByWarehouseId: getEquipmentByWarehouseId,
}