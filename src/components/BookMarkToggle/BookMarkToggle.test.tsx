import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookMarkToggle from './BookMarkToggle';
import BookmarkSvg from '../../assets/bookmark.svg';
import BookmarkBlueSvg from '../../assets/bookmark-blue.svg';
import '@testing-library/jest-dom/extend-expect';

describe('BookMarkToggle', () => {
  function renderBookMarkToggle(props?: any) {
    return render(<BookMarkToggle {...props} />);
  }

  it('render', () => {
    renderBookMarkToggle();
    screen.getByText('스크랩 하기');
  });

  it('icon is gray', () => {
    renderBookMarkToggle();
    expect(screen.getByTestId('bookmark-icon').getAttribute('src')).toEqual(BookmarkSvg);
  });

  it('checkbox is not checked', () => {
    renderBookMarkToggle();
    expect(screen.getByTestId('bookmark-checkbox')).not.toBeChecked();
  });

  it('calls onChange event', () => {
    const handleClick = jest.fn();
    renderBookMarkToggle({ onChange: handleClick });

    userEvent.click(screen.getByTestId('bookmark'));

    expect(handleClick).toBeCalledTimes(1);
  });

  describe('with checked', () => {
    it('icon is Blue', () => {
      renderBookMarkToggle({ checked: true, onChange: () => { } });
      expect(screen.getByTestId('bookmark-icon').getAttribute('src')).toEqual(BookmarkBlueSvg);
    });

    it('checkbox is checked', () => {
      renderBookMarkToggle({ checked: true, onChange: () => { } });
      expect(screen.getByTestId('bookmark-checkbox')).toBeChecked();
    });
  });
});
