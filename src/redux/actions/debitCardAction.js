import * as actionType from '../../constants/actionTypes';

/* Update Weekly Spend Limit */

export const onUpdateWeeklyLimit = (data) => {
  return (dispatch) => {
    dispatch({
      type: actionType.SET_WEEKLY_LIMIT_CARD_SPEND,
      payload: data,
    })
  };
};