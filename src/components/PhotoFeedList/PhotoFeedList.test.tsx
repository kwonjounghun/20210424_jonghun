import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoFeedList from './PhotoFeedList';
import { PHOTO_FEED_LIST } from './__mocks__/photoFeed';


beforeEach(() => render(<PhotoFeedList photoFeedList={PHOTO_FEED_LIST} />));

describe('PhotoFeedList', () => {
  it('render', () => {
    expect(screen.getAllByTestId('photo-feed-item').length).toEqual(PHOTO_FEED_LIST.length);
  });
});
