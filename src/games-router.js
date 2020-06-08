const express = require("express");
const GamesService = require("./games-service");

const gamesRouter = express.Router();

const serializeGame = game => ({
  id: game.id,
  game_cover: game.game_cover,
  game_genre: game.game_genre,
  game_name: game.game_name,
  game_desc: game.game_desc,
  game_link: game.game_link,
});

gamesRouter
.route('/').get((req, res, next) => {
  const knexInstance = req.app.get('db')
  GamesService.getAllGames(knexInstance)
    .then(game => {
      res.json(game.map(serializeGame))
    })
    .catch(next);
});

module.exports = gamesRouter;
