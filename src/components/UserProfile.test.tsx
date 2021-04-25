import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserProfile from './UserProfile';

const photoUrl = 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547907139_Oc9.jpeg/640/640';
const nickname = 'Wade Warren';

beforeEach(() =>
  render(<UserProfile photoUrl={photoUrl} nickname={nickname} />)
)

describe('UserProfile', () => {
  it('render', () => {
    screen.getByText('프로필 이미지');
  });

  it('When you have nickname props', () => {
    const usernickname = screen.getByTestId('user-nickname');
    expect(usernickname.textContent).toEqual(nickname);
  });
});
