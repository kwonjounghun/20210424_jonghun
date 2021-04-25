import React from 'react';
import UserProfile from './UserProfile';
import Thumbnail from './Thumbnail';
import BookMarkToggle from './BookMarkToggle';
import styled from 'styled-components';

interface Props {
  id?: number;
  photoUrl?: string;
  profileImgUrl?: string;
  nickname?: string;
  onChange?: () => void;
};

const PhotoFeedCard: React.FC<Props> = ({
  photoUrl,
  profileImgUrl,
  nickname,
  onChange,
  id,
  ...props
}) => {
  return (
    <CardContainer>
      <UserProfile nickname={nickname} profileImgUrl={profileImgUrl}/>
      <FeedImage photoUrl={photoUrl} />
      <BookMark id={`${id}`} onChange={onChange}/>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const FeedImage = styled(Thumbnail)`
  margin-top: 10px;
`;

const BookMark = styled(BookMarkToggle)`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export default PhotoFeedCard;
