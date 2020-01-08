const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId, //usa mongoose para salvar o id do usuário que criou o Booking
        ref: 'User' //qual model é a informação
    },
    spot: { //faz relação com o spot tbm
        type: mongoose.Schema.Types.ObjectId, //usa mongoose para salvar o id do usuário que criou o Booking
        ref: 'Spot' //qual model é a informação
    }
})

module.exports = mongoose.model('Booking', BookingSchema);