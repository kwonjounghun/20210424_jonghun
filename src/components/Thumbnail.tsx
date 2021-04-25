import React from 'react';
import styled from 'styled-components';

interface Props {
  photoUrl?: string;
  className?: string;
};

const Thumbnail: React.FC<Props> = ({
  photoUrl,
  className,
}) => {
  return (
    <ImageContainer className={className}>
      <ImageBox photoUrl={photoUrl} data-testid="thumbnail"/>
      이미지
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  position: relative;
  width: 269px;
  height: 269px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  overflow: hidden;
`;

const ImageBox = styled.div<{ photoUrl: string | undefined }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  background-color: rgba(128, 128, 128, 0.192);
  ${({ photoUrl }) => photoUrl && `background-image: url(${photoUrl});`}
`;

export default Thumbnail;
