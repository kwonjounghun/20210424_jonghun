import React from 'react';
import { connect } from 'react-redux';
import { PhotoFeedList, ScrapToggle, MoreFeedSection } from '../components';
import { getPhotoFeedList } from '../selectors';
import * as actions from '../actions';

interface Props {
  photoFeedListRequest: any;
  photoFeedList: any;
}

const PhotoFeedPageContainer: React.FC<Props> = ({
  photoFeedList,
  photoFeedListRequest,
}) => {
  const handleVisible = (status: string, page: number) => {
    if (status !== 'REQUEST') {
      photoFeedListRequest(page + 1);
    }
  };

  return (
    <div>
      <ScrapToggle />
      <PhotoFeedList photoFeedList={photoFeedList.feedList} />
      <MoreFeedSection
        onVisible={handleVisible}
        status={photoFeedList.status}
        page={photoFeedList.page}
        isLast={photoFeedList.isLast}
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoFeedPageContainer);
