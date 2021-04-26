import React from 'react';
import DefaultImage from '../../assets/user-default.svg';
import styled from 'styled-components';

interface Props {
  photoUrl?: string;
};

const Avata: React.FC<Props> = ({
  photoUrl,
}) => {
  return (
    <ImageContainer>
      <HiddenText>프로필 이미지</HiddenText>
      <ImageBox src={photoUrl || DefaultImage} data-testid="Avata" />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
`;

const ImageBox = styled.img`
  width: 100%;
  height: 100%;
`;

const HiddenText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
`;

export default Avata;
