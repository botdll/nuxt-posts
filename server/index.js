const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const bodyParse = require('body-parser')

const fs = require('fs')
const path = require('path')
const filePath = '../store/initial_data.json'
const initialData = require(filePath)

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.post('/api/posts', (req, res) => {
    const post = req.body
    initialData.posts.push(post)

    fs.writeFile(path.join(__dirname, filePath), JSON.stringify(initialData, null, 2), function(err) {
      if (err) {
        return res.status(422).send(err)
      }

      return res.json('File succesfully updated!')
    })
  })

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
