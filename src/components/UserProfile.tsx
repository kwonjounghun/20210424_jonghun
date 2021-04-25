import React from 'react';
import Avata from './Avata';
import styled from 'styled-components';

interface Props {
  photoUrl?: string;
  nickname?: string;
};

const UserProfile: React.FC<Props> = ({
  photoUrl,
  nickname,
}) => {
  return (
    <ProfileContainer>
      <Avata photoUrl={photoUrl} />
      <UserName data-testid="user-nickname">{nickname}</UserName>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const UserName = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  margin-left: 10px;
`;

export default UserProfile;
