const GamesService = {
    getAllGames(knex) {
        return knex.select('*').from('games')
    }
};

module.exports = GamesService;