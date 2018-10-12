import PropTypes from "prop-types";

/* boardgames.io prop types */
export const boardGamesIO = {
  ctx: PropTypes.shape({
    turn: PropTypes.number.isRequired,
    currentPlayer: PropTypes.string.isRequired,
    numPlayers: PropTypes.number.isRequired
  }).isRequired,
  events: PropTypes.shape({
    endTurn: PropTypes.func.isRequired
  }).isRequired,
  undo: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};
