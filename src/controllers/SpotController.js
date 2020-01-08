const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
    async index(req, res) {
        const { tech } = req.query; //buscando o filtro

        const spots = await Spot.find( {techs: tech }) //achar os spots que tenha o seguinte filtro campo: tech

        return res.json(spots);
    },

    async store(req, res) {
        const {filename} = req.file; //salva o nome do arquivo
        const {company, techs, price} = req.body;
        const { user_id } = req.headers; //contexto da aplicação, autenticação

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json( { error: 'User does not exist!'})
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()), //separa o array em várias strings eliminando os espaços em branco
            price
        })

        return res.json(spot);

    }
};