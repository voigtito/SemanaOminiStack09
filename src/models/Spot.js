const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String, //imagem
    company: String,
    price: Number,
    techs: [String], //vetor de strings
    user: {
        type: mongoose.Schema.Types.ObjectId, //usa mongoose para salvar o id do usuário que criou o spot
        ref: 'User' //qual model é a informação
    }
})

module.exports = mongoose.model('Spot', SpotSchema);