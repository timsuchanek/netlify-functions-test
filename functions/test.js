const Photon = require('@generated/photon').default

exports.handler = async (event, ctx, cb) => {
  const photon = new Photon()
  const result = await photon.users.create({
    data: {
      username: 'Some user name',
    },
  })
  cb(null, {
    statusCode: 200,
    body: JSON.stringify(result),
  })
}
