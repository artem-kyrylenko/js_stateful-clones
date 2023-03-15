'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const copyState = { ...state };
  const resultingArray = [];
  const errorMessage = 'Error';

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(copyState, action.extraData);
        break;

      case `removeProperties`:
        for (const value of action.keysToRemove) {
          delete copyState[value];
        }
        break;

      case `clear`:
        for (const key in copyState) {
          delete copyState[key];
        }
        break;

      default:
        throw errorMessage;
    }

    resultingArray.push({ ...copyState });
  }

  return resultingArray;
}

module.exports = transformStateWithClones;
