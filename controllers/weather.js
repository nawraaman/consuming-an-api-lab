const router = require('express').Router()
const axios = require('axios')

router.get('/', (req, res) => {
  res.render('index.ejs')
})

router.post('/weather', (req, res) => {
  const zipCode = req.body.zip
  const apiKey = process.env.API_KEY
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${apiKey}`

  axios
    .get(url)
    .then((response) => {
      const weatherData = response.data

      res.render('weather/show', {
        city: weatherData.name,
        temp: weatherData.main.temp,
        description: weatherData.weather[0].description
      })
    })
    .catch((error) => {
      console.log(error)
      res.send('Error retrieving weather data.')
    })
})

module.exports = router
