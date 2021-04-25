import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookmarkToggle from './BookmarkToggle';
import BookmarkSvg from '../assets/bookmark.svg';
import BookmarkBlueSvg from '../assets/bookmark-blue.svg';
import '@testing-library/jest-dom/extend-expect';

describe('BookmarkToggle', () => {
  function renderBookmarkToggle(props?: any) {
    return render(<BookmarkToggle {...props} />);
  }

  it('render', () => {
    renderBookmarkToggle();
    screen.getByText('스크랩 하기');
  });

  it('icon is gray', () => {
    renderBookmarkToggle();
    expect(screen.getByTestId('bookmark-icon').getAttribute('src')).toEqual(BookmarkSvg);
  });

  it('checkbox is not checked', () => {
    renderBookmarkToggle();
    expect(screen.getByTestId('bookmark-checkbox')).not.toBeChecked();
  });

  it('calls onClick event', () => {
    const handleClick = jest.fn();
    renderBookmarkToggle({ onClick: handleClick });

    userEvent.click(screen.getByTestId('bookmark'));

    expect(handleClick).toBeCalledTimes(1);
  });

  describe('with checked', () => {
    it('icon is Blue', () => {
      renderBookmarkToggle({ checked: true, onChange: () => { } });
      expect(screen.getByTestId('bookmark-icon').getAttribute('src')).toEqual(BookmarkBlueSvg);
    });

    it('checkbox is checked', () => {
      renderBookmarkToggle({ checked: true, onChange: () => { } });
      expect(screen.getByTestId('bookmark-checkbox')).toBeChecked();
    });
  });
});
