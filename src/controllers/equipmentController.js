import db from '../models/index'

let getEquipmentsList = async (req, res) => {
    try {
        const equipmentsData = await db.MagneticSwitch.findAll({
            raw: true
        });
        const equipments = []
        for (let i = 0; i < equipmentsData.length; i++) {
            let dd = String(equipmentsData[i].createdAt.getDate()).padStart(2, '0');
            let mm = String(equipmentsData[i].createdAt.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = equipmentsData[i].createdAt.getFullYear();
            let hour = equipmentsData[i].createdAt.getUTCHours() > 12 ? ((equipmentsData[i].createdAt.getUTCHours() - 12) > 10) ? (equipmentsData[i].createdAt.getUTCHours() - 12) : "0" + (equipmentsData[i].createdAt.getUTCHours() - 12) : equipmentsData[i].createdAt.getUTCHours()
            let minute = equipmentsData[i].createdAt.getUTCMinutes() < 10 ? "0" + equipmentsData[i].createdAt.getUTCMinutes() : equipmentsData[i].createdAt.getUTCMinutes()
            let meridiem = equipmentsData[i].createdAt.getUTCHours() > 12 ? "PM" : "AM";
            let day = dd + '/' + mm + '/' + yyyy
            let time = hour + ':' + minute + " " + meridiem
            equipments[i] = {
                id: equipmentsData[i].id,
                name: equipmentsData[i].name,
                type: equipmentsData[i].category,
                location: 1,
                state: equipmentsData[i].state,
                fInfo: equipmentsData[i].description,
                date: day,
                time: time
            }
        }


        return res.json({
            equipments
        })
        // return res.json({
        //     user
        // })
        // return res.render('homepage.ejs', {
        //     data: JSON.stringify(data)
        // })
    }
    catch (e) {
        console.log(e);
    }
}


module.exports = {
    getEquipmentsList: getEquipmentsList
}