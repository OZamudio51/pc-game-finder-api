const app = require('../src/app');
const { gamesArray } = require('./games.fixtures');

describe('Games Endpoints', function() {
    context('Given there are games in the database', () => {
        const testGames = gamesArray();

        it('responds with 200 and all of the games', () => {
            return supertest(app)
            .get('/api/genres')
            .expect(200, testGames)
        });
    });
});