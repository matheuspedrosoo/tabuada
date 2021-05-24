const list = (req, res) => {
  res.render('tabuada/list')
}

const tabuada = (req, res) => {
  res.render('tabuada/tabuada', {
    num: req.params.num,
  })
}

const teste = (req, res) => {
  res.render('tabuada/teste')
}

module.exports = {
  list,
  tabuada,
}
