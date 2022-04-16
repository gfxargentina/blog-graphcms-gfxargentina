require('dotenv').config()

const PASSWORD = process.env.PASS_MAIL

export default async (req, res) => {
  const body = JSON.parse(req.body)
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'djluischilo@gmail.com',
      pass: PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
    secure: true,
  })

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        console.log('Server is ready to take our messages')
        resolve(success)
      }
    })
  })

  const mailData = {
    from: 'djluischilo@gmail.com',
    to: 'gfxargentina@gmail.com',
    subject: `Nuevo mensaje de ${body.nombre}`,
    text: body.mensaje + ' | Enviado desde: ' + body.email,
    html: `<div>${body.mensaje}</div><p>Sent from:
    ${body.email}</p>`,
  }

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        res.send('error' + JSON.stringify(err))
        reject(err)
      } else {
        console.log(info)
        resolve(info)
      }
    })

    res.status(200).json({ status: 'ok' })
  })
}
