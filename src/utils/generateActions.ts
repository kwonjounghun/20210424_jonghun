import { IActionTypes } from '../types';

export const actionCreator = (actionType: string) => {
  return (payload: any) => {
    const action = { type: actionType, payload: null };
    if (payload) {
      action.payload = payload;
    }
    return action;
  };
};

export const actionTypeCreater = (actionName: string) => {
  const prefix = actionName;
  return {
    REQUEST: `${prefix}_REQUEST`,
    SUCCESS: `${prefix}_SUCCESS`,
    FAILURE: `${prefix}_FAILURE`,
  };
};

export const generateActions = (actions: IActionTypes) => {
  return {
    request: actionCreator(actions.REQUEST),
    success: actionCreator(actions.SUCCESS),
    failure: actionCreator(actions.FAILURE)
  };
};
