import React, { useState, useEffect } from 'react';
import { PhotoFeedList, ScrapToggle } from '../components';
import { photoFeedListRequest } from '../api';

function PhotoFeedPageContainer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [photoFeedList, setPhotoFeedList] = useState<any>([]);

  const addPhotoFeedList = (page: number) => {
    photoFeedListRequest(page)
      .then(response => {
        setPhotoFeedList([...photoFeedList, ...response.data]);
      });
  };

  useEffect(() => {
    addPhotoFeedList(currentPage);
  }, [])


  useEffect(() => {
    addPhotoFeedList(currentPage);
  }, [currentPage]);

  return (
    <div>
      <ScrapToggle />
      <PhotoFeedList photoFeedList={photoFeedList} />
    </div>
  )
}

export default PhotoFeedPageContainer;
