var mongoose = require('mongoose');
var Reign = mongoose.model('Reign');

exports.index = function (req, res, next) {

  Reign.find(gotReign);

  function gotProducts (err, noticias) {
    if (err) {
      console.log(err)
      return next()
    }

    return res.render('index', {title: 'Lista de Noticias', noticias: noticias})
  }
}
