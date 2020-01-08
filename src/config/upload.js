const multer = require('multer');
const path = require('path');

module.exports ={
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..','..', 'uploads'), //no path.resolve deve ser feito '..' pois de acordo com o sistema operacional pode mudar
        //usar dirname para ir da pasta atual até as outras, algo assim
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext); //retorna o nome da imagem e a "ext" é para indicar a extensao do arquivo. Isto é feito para mudar o nome do arquivo que é salvo!

            cb(null, `${name}-${Date.now()}${ext}`) //callback (cb), funcao que é chamada quando o nome do arquivo esta pronto. Primeiro parametro é o erro, Segundo é o 
                                                    //nome do arquivo do cliente (field.name, mas como fez chamada antes, usa a variavel name)
            //Date.now retorna o tempo em segundos atual para garantir que não haja registros duplos
            //path.extname retorna a extensao da imagem
        },
    }),
};