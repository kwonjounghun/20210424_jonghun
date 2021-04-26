import React from 'react';
import PhotoFeedCard from '../PhotoFeedCard';
import styled from 'styled-components';
import { photoFeedListType } from '../../types';

interface Props {
  photoFeedList: photoFeedListType;
  scrapHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PhotoFeedList: React.FC<Props> = ({
  photoFeedList = [],
  scrapHandler,
}) => {
  return (
    <ListContainer>
      {photoFeedList.map(({
        id,
        nickname,
        image_url,
        profile_image_url,
        scrap,
      }) => {
        return (
          <ListItem key={id} data-testid="photo-feed-item">
            <PhotoFeedCard
              id={id}
              photoUrl={image_url}
              profileImgUrl={profile_image_url}
              nickname={nickname}
              checked={scrap}
              onChange={scrapHandler}
            />
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  display: inline-block;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 30px 10px 0;
`;

export default PhotoFeedList;
