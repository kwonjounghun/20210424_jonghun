import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Avata from './Avata';

const photoUrl = 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547907139_Oc9.jpeg/640/640';

beforeEach(() => render(<Avata photoUrl={photoUrl} />));

describe('Avata', () => {
  it('render', () => {
    screen.getByText('프로필 이미지');
  });

  it('When you have photoUrl props', () => {
    const avata = screen.getByTestId('Avata');
    expect(avata.getAttribute('src')).toEqual(photoUrl);
  });
});
