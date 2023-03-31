const express = require('express');
const common = require('../common');
const {User} = require('../model/user')
const { doc } = require('../googleSheets')

const router = express.Router()

router.post('/login', async (req, res) => {
        
    const reqData = req.body;

    try {

            const user = await User.create({
                    name: reqData.name,
                    number: reqData.number,
                    messenger: reqData.messenger,
                    age: reqData.age,
                    experience: reqData.experience,
                    target: reqData.target,
                    time: reqData.time,
                    money: reqData.money,
                    city: reqData.city
            });

            await doc.loadInfo();
            const sheet = doc.sheetsByIndex[0];
            await sheet.addRow({ 'name': reqData.name, 
                                'number': reqData.number, 
                                'messenger': reqData.messenger,
                                'age': reqData.age,
                                'experience': reqData.experience,
                                'target': reqData.target,
                                'time': reqData.time,
                                'money': reqData.money,
                                'city': reqData.city
                            })

           

            common.response200(res)
        } catch (err) {
            common.response404(res, err);
        }
    });

    module.exports = router;