module.exports  = app => {
  const controller = app.controllers.carros;

  app.route('/api/v1/games')
    .get(controller.listCarros)
    .post(controller.saveCarros);

  app.route('/api/v1/carros/:carrosId')
    .put(controller.updateCarros)
    .delete(controller.removeCarros);
}