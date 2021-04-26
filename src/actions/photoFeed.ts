import axios from 'axios';
import { generateActions } from '../utils';
import { FETCH_PHOTO_FEED_LIST } from '../constants';

export const photoFeedListRequest = (page: number) => {
  return (dispatch: any) => {
    const actions = generateActions(FETCH_PHOTO_FEED_LIST);
    dispatch(actions.request(null));
    axios.get(`https://bucketplace-coding-test.s3.amazonaws.com/cards/page_${page}.json`).then(response => {
      const { data } = response;
      dispatch(actions.success({
        feedList: data || [],
        isLast: data.length > 0 ? false : true,
        page,
      }))
    }).catch(error => {
      dispatch(actions.failure(null));
    });
  }
};
