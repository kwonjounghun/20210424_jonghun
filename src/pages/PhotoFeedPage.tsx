import React from 'react';
import { PhotoFeedPageContainer } from '../containers';
import styled from 'styled-components';

function PhotoFeedPage() {
  return (
    <MainContainer>
      <PhotoFeedPageContainer />
    </MainContainer>
  )
}

const MainContainer = styled.main`
  width: 1320px;
  margin: 30px auto;
  padding: 0 60px;
`;

export default PhotoFeedPage;
