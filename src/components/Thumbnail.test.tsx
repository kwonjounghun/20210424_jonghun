import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Thumbnail from './Thumbnail';
import { conditionalExpression } from '@babel/types';

const photoUrl = 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547907139_Oc9.jpeg/640/640'

beforeEach(() =>
  render(<Thumbnail photoUrl={photoUrl} />)
)

describe('Thumbnail', () => {
  it('render', () => {
    screen.getByText('이미지');
  });

  it('When you have photoUrl props', () => {
    const thumbnail = screen.getByTestId('thumbnail');
    const element = window.getComputedStyle(thumbnail);
    expect(element.backgroundImage).toEqual(`url(${photoUrl})`);
  });
});
