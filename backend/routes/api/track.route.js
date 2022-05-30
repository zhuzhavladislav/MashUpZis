const {Router} = require('express')
const router = Router()
const Track = require('../../models/Track')

//Возможное добавление в дальнейшем
router.post('/add', async (req, res) => {
    try {
        const {track_name} = req.body

        const track = await new Track({
            track_name
        })

        await track.save()
        res.json(track)
    } catch (error) {
        console.log (error)
    }
})

//Получение треков с бд
router.get('/', async (req, res) =>{
    try {
        const track = await Track.find()
        res.json(track)
    } catch (error) {
        console.log (error)
    }
})

module.exports = router