import produce from 'immer';
import * as constants from '../constants';
import { photoFeedListType, reducerStatusType } from '../types';

interface photoFeedState {
  status: reducerStatusType;
  feedList: photoFeedListType;
  isLast: boolean;
  page: number;
}

const initialState: photoFeedState = {
  status: 'INIT',
  feedList: [],
  isLast: false,
  page: 0,
};

const photoFeedList = (state = initialState, action: any) => {
  switch (action.type) {
    case constants.FETCH_PHOTO_FEED_LIST.REQUEST:
      return produce(state, draft => {
        draft.status = 'REQUEST';
      });
    case constants.FETCH_PHOTO_FEED_LIST.SUCCESS:
      return produce(state, draft => {
        const { feedList, isLast, page } = action.payload;
        draft.status = 'SUCCESS';
        draft.page = page;
        draft.feedList = [...state.feedList, ...feedList];
        draft.isLast = isLast;
      });
    case constants.FETCH_PHOTO_FEED_LIST.FAILURE:
      return produce(state, draft => {
        draft.status = 'FAILURE';
      });
    default:
      return produce(state, draft => {
        draft.status = 'INIT';
      });;
  }
}

export default photoFeedList;
