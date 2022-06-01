import db from '../models/index'

let getPresentData = async (req, res) => {
    try {
        const lightData = await db.MagneticSwitch.findAll({
            where: { category: "light" },
            order: [
                ['id', 'DESC']
            ],
            limit: 1
        });
        const coolerData = await db.MagneticSwitch.findAll({
            where: { category: "cooler" },
            order: [
                ['id', 'DESC']
            ],
            limit: 1
        });
        const doorData = await db.MagneticSwitch.findAll({
            where: { category: "door" },
            order: [
                ['id', 'DESC']
            ],
            limit: 1
        });
        const light = {
            id: lightData[0].id,
            name: lightData[0].name,
            position: lightData[0].description,
            ages: 5,
            rise: true,
            mode: true,
            imgId: "https://svgshare.com/i/gj3.svg"
        }
        const cooler = {
            id: coolerData[0].id,
            name: coolerData[0].name,
            position: coolerData[0].description,
            ages: 5,
            rise: true,
            mode: true,
            imgId: "https://svgshare.com/i/gj3.svg"
        }
        const door = {
            id: doorData[0].id,
            name: doorData[0].name,
            position: doorData[0].description,
            ages: 5,
            rise: true,
            mode: true,
            imgId: "https://svgshare.com/i/gj3.svg"
        }

        return res.json({
            equipmentData: [light, cooler, door]
        }
        )
        // return res.render('homepage.ejs', {
        //     data: JSON.stringify(data)
        // })
    }
    catch (e) {
        console.log(e);
    }
}

let getHourlyData = async (req, res) => {
    try {
        
    }
    catch (e) {
        console.log(e);
    }
}


module.exports = {
    getPresentData: getPresentData,
    getHourlyData: getHourlyData
}