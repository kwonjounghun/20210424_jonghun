import React from 'react';
import PhotoFeedCard from '../PhotoFeedCard';
import styled from 'styled-components';

interface Props {
  photoFeedList: Array<any>;
};

const PhotoFeedList: React.FC<Props> = ({
  photoFeedList = [],
}) => {
  return (
    <ListContainer>
      {photoFeedList.map(({
        id,
        nickname,
        image_url,
        profile_image_url,
      }) => {
        return (
          <ListItem key={id} data-testid="photo-feed-item">
            <PhotoFeedCard
              id={id}
              photoUrl={image_url}
              profileImgUrl={profile_image_url}
              nickname={nickname}
            />
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  padding: 0 60px;
  display: inline-block;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 30px 10px 0;
`;

export default PhotoFeedList;