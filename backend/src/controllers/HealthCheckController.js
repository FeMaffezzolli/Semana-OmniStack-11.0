module.exports = {

  async show (request, response) {
    return response.json({ "Am I Alive ?" : true })
  }

}