export type actionType = { type: string, payload: any };
export type createActionType = (payload: any) => actionType;

export interface IActionTypes {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
};

export interface IGeneratedActions {
  request: createActionType;
  success: createActionType;
  failure: createActionType;
};
