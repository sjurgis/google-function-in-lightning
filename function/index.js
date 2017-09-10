const im = require('imagemagick')
const fs = require('fs')
exports.helloWorld = function helloWorld(req, res) {
  res.set('Access-Control-Allow-Origin', 'https://yourorg-dev-ed.lightning.force.com')
  res.set('Access-Control-Allow-Methods', 'GET, POST')

  const body = JSON.parse(req.body)
  if (body.image === undefined) {
    res.status(400).send({'Error':'No image!'})
  } else {
    fs.writeFileSync(
      '/tmp/input.jpg', 
      body.image.content, 
      'base64')

    im.convert([
      '/tmp/input.jpg', 
      '-channel', 
      'RGBA', 
      '-blur', 
      '0x24', 
      '/tmp/output.jpg'
    ], () => {
      res.status(200).send({
        'Result':
        new Buffer(
          fs.readFileSync('/tmp/output.jpg')
        ).toString('base64') 
      })
    })
  }
}