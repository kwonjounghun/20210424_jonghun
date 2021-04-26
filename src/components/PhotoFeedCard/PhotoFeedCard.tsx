import React from 'react';
import UserProfile from '../UserProfile';
import Thumbnail from '../Thumbnail';
import ScrapToggle from '../ScrapToggle';
import styled from 'styled-components';

interface Props {
  id?: number;
  photoUrl?: string;
  profileImgUrl?: string;
  nickname?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
};

const PhotoFeedCard: React.FC<Props> = ({
  id,
  checked,
  nickname,
  photoUrl,
  profileImgUrl,
  onChange,
}) => {
  return (
    <CardContainer>
      <UserProfile nickname={nickname} profileImgUrl={profileImgUrl} />
      <FeedImage photoUrl={photoUrl} />
      <Scrap id={`${id}`} checked={checked} onChange={onChange} />
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

const Scrap = styled(ScrapToggle)`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export default PhotoFeedCard;
