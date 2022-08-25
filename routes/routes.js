const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.send('Hola mundo')
})

router.post('/dialogflow', async (req, res) => {
  const asientoInfo = req.body

  /* return res.json({ text: body.texto }) */
  const io = req.app.get('socketio')

  io.emit('mensaje', asientoInfo)
  res.json(asientoInfo)
})

module.exports = router
