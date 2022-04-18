import * as actionType from '../../constants/actionTypes';

const INITIAL_STATE = {
    cardWeeklyLimit: 0,
};
  
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.SET_WEEKLY_LIMIT_CARD_SPEND:
            return {
                ...state,
                cardWeeklyLimit: action.payload,
            };
        default:
            return state;
    }
};