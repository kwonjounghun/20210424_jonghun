import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoFeedCard from './PhotoFeedCard';

const photoUrl = 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547907139_Oc9.jpeg/640/640';
const nickname = 'Wade Warren';

beforeEach(() => render(<PhotoFeedCard photoUrl={photoUrl} nickname={nickname} />));

describe('PhotoFeedCard', () => {
  it('render', () => {
    screen.getByText('이미지');
  });
});
