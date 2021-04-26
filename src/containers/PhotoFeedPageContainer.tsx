import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PhotoFeedList, ScrapOnlyToggle, MoreFeedSection } from '../components';
import { getPhotoFeedList } from '../selectors';
import { SCRAP_KEY, SCRAP_LIST_MODIFY } from '../constants';
import { localStorageGet, localStorageSet } from '../utils';
import * as actions from '../actions';

interface Props {
  photoFeedList: any;
  photoFeedListRequest: (page: number) => void;
  scrapListModify: () => void;
}

const PhotoFeedPageContainer: React.FC<Props> = ({
  photoFeedList,
  photoFeedListRequest,
  scrapListModify,
}) => {
  const [isOnlyScrap, setIsOnlyScrap] = useState(false);
  const [feedList, setFeedList] = useState([]);
  const handleVisible = (status: string, page: number) => {
    if (status !== 'REQUEST') {
      photoFeedListRequest(page + 1);
    }
  };

  const ScrapHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const localStorageValue = localStorageGet(SCRAP_KEY);
    let saveData: any = {};
    if (localStorageValue) {
      saveData = { ...localStorageValue };
    }

    if (saveData[id]) {
      saveData[id] = !saveData[id];
    } else {
      saveData[id] = true;
    }
    localStorageSet(SCRAP_KEY, JSON.stringify(saveData));
    scrapListModify();
  };

  useEffect(() => {
    if (isOnlyScrap) {
      const onlyScrap = photoFeedList.feedList.filter((item: any) => {
        return item.scrap;
      });
      setFeedList(onlyScrap);
    } else {
      setFeedList(photoFeedList.feedList);
    }
  }, [isOnlyScrap, photoFeedList]);

  return (
    <div>
      <ScrapOnlyToggle checked={isOnlyScrap} onChange={() => setIsOnlyScrap(!isOnlyScrap)} />
      <PhotoFeedList
        photoFeedList={feedList}
        scrapHandler={ScrapHandler}
      />
      <MoreFeedSection
        onVisible={handleVisible}
        status={photoFeedList.status}
        page={photoFeedList.page}
        isLast={isOnlyScrap || photoFeedList.isLast}
      />
    </div>
  )
};

const mapStateToProps = (state: any) => {
  return {
    photoFeedList: getPhotoFeedList(state),
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    photoFeedListRequest: (page: number) => dispatch(actions.photoFeedListRequest(page)),
    scrapListModify: () =>dispatch(actions.scrapListModify()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoFeedPageContainer);
