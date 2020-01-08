//index, show, store, update, destroy
// Métodos disponíveis no Controller
// index = listagem de sessoes
// show = listar uma unica sessao
// store = criar uma sessao
// update = alterar uma sessao
// destroy = deletar uma sessao
const User = require('../models/User')

module.exports = {
    async store(req, res) { //async é o método que deve ser finalizado para prosseguir com as outras operações
        const email = req.body.email;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({email});
        }
        
        return res.json(user);
    }
};