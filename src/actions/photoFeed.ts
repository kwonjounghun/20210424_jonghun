import axios from 'axios';
import { generateActions, localStorageGet } from '../utils';
import { FETCH_PHOTO_FEED_LIST, SCRAP_KEY, SCRAP_LIST_MODIFY } from '../constants';
import { getPhotoFeedList } from '../selectors';

const addScrapProperties = (data: any = []) => {
  const scrapList = localStorageGet(SCRAP_KEY) || [];
  return data.map((item: any) => {
    return { ...item, scrap: scrapList[`${item.id}`] || false }
  });
}

export const photoFeedListRequest = (page: number) => {
  return (dispatch: any) => {
    const actions = generateActions(FETCH_PHOTO_FEED_LIST);
    dispatch(actions.request(null));
    axios.get(`https://bucketplace-coding-test.s3.amazonaws.com/cards/page_${page}.json`).then(response => {
      const { data } = response;
      const addScrapList = addScrapProperties(data);
      dispatch(actions.success({
        feedList: addScrapList,
        isLast: addScrapList.length > 0 ? false : true,
        page,
      }))
    }).catch(error => {
      console.error(error);
      dispatch(actions.failure(null));
    });
  }
};

export const scrapListModify = () => {
  return (dispatch: any, getState: any) => {
    const { feedList } = getPhotoFeedList(getState());
    const addScrapList = addScrapProperties(feedList);
    dispatch({ type: SCRAP_LIST_MODIFY, payload: addScrapList })
  }
};
