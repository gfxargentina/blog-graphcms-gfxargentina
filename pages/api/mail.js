require('dotenv').config()

const PASSWORD = process.env.PASS_MAIL

export default (req, res) => {
  const body = JSON.parse(req.body)
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'djluischilo@gmail.com',
      pass: PASSWORD,
    },
    secure: true,
  })

  const mailData = {
    from: 'djluischilo@gmail.com',
    to: 'gfxargentina@gmail.com',
    subject: `Nuevo mensaje de ${body.nombre}`,
    text: body.mensaje + ' | Enviado desde: ' + body.email,
    html: `<div>${body.mensaje}</div><p>Sent from:
    ${body.email}</p>`,
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err)
    else console.log(info)
  })

  res.status(200).json({ status: 'ok' })
}
