var chai = require('chai');
var app = require('../app/app');
var should = chai.should();

describe('Games', function() {
    it('should populate play by play data for the given game id', function(done) {
        app.games.getPlayByPlay(400763535, function(data) {
            data.should.exist;
            data.should.be.json;
            done();
        });
    });
});

describe('Rankings', function() {
    it('should populate rankings for the given week and year', function(done) {
        app.rankings.getRankings({
            year: 2015,
            week: 5
        }, function(data) {
            data.should.exist;
            data.should.be.json;
            done();
        });
    });
});

describe('Scoreboard', function() {
    it('should populate scoreboard data for the given week and year', function(done) {
        app.scoreboard.getScoreboard({
            year: 2015,
            week: 5
        }, function(data) {
            data.should.exist;
            data.should.be.json;
            done();
        });
    });
});

describe('Standings', function() {
    it('should populate standings for the given year', function(done) {
        app.standings.getStandings({
            year: 2015
        }, function(data) {
            data.should.exist;
            data.should.be.json;
            done();
        });
    });
});