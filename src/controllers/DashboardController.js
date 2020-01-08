const Spot = require('../models/Spot');

module.exports = {
    async show(req, res) {
        const {user_id} = req.headers;

        const spots = await Spot.find( { user: user_id }); //buscando todos os spots em que o user é igual ao user do banco de dados

        return res.json(spots);
    }
}