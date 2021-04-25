import axios from 'axios';

export const photoFeedListRequest = (page: number) => {
  return axios.get(`https://bucketplace-coding-test.s3.amazonaws.com/cards/page_${page}.json`);
};
