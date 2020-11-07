const uuidv4 = require('uuid/v4');


module.exports = app => {
  
  const carrosDB = app.data.carros;
  const controller = {};

  const { carros: carrosMock, } = carrosDB;

  controller.listCarros = (req, res) => res.status(200).json(carrosDB);

  controller.saveCarros = (req, res) => {
    carrosMock.data.push({
      id: uuidv4(),
      title: req.body.title,
      year: req.body.year,
      type: req.body.type
    });

    res.status(201).json(carrosMock);
  }

  controller.removeCarros = (req, res) => {
    const { carroId, } = req.params;

    const foundCarroIndex = gamesMock.data.findIndex(carros => carros.id === carrosId);

    if(foundCarroIndex === -1){
      res.status(404).json({
        message: 'Carro não encontrado',
        success: false,
        carros: carrosMock,
      });
    }else {
      carrosMock.data.splice(foundCarrosIndex, 1);
      res.status(200).json({
        message: 'Carro removido com sucesso!',
        success: true,
        carros: carrosMock,
      });
    }


  }

  controller.updateGames = (req, res) => {
    const { gameId, } = req.params;
    const { title, year, type } = req.body;

    const foundGameIndex = gamesMock.data.findIndex(game => game.id === gameId);

    if (foundGameIndex < 0) {
      res.status(404).json({
        message: 'Game não encontrado',
        success: false,
        games: gamesMock,
      });
    }

    const newGamesMock = gamesMock.data.map(game => {
      if (game.id === gameId) {
        game.title = title;
        game.year = year;
        game.type = type;
      }

      return game;
    });

    gamesMock.data = [...newGamesMock];

    res.status(200).json({
      message: 'Game alterado com sucesso!',
      success: true,
      games: gamesMock,
    });
  }

  return controller;

}