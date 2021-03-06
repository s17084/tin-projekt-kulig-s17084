const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Participation = sequelize.define('Participation', {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  finalPosition: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  rankPointsGained: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  rankPointsOverall: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  playerId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Field is required'
      },
      uniqueParticipation(value, next) {
        console.log()
        console.log('TOURNAMENT_ID', this.tournamentId)
        console.log()
        Participation.findAll({
          where: {
            playerId: value ?? -1,
            tournamentId: this.tournamentId ?? -1,
          }
        })
        .then(result => {
          if (result.length > 0) {
            return next('Player already assigned');
          }
          return next();
        })
        .catch(function (err) {
          return next(err);
        });
      }
    }
  },
  tournamentId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Field is required'
      },
    }
  }
});

module.exports = Participation;