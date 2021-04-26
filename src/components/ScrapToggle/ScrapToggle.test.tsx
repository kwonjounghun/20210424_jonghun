import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ScrapToggle from './ScrapToggle';
import ScrapSvg from '../../assets/Scrap.svg';
import ScrapBlueSvg from '../../assets/Scrap-blue.svg';
import '@testing-library/jest-dom/extend-expect';

describe('ScrapToggle', () => {
  function renderScrapToggle(props?: any) {
    return render(<ScrapToggle {...props} />);
  }

  it('render', () => {
    renderScrapToggle();
    screen.getByText('스크랩 하기');
  });

  it('icon is gray', () => {
    renderScrapToggle();
    expect(screen.getByTestId('scrap-icon').getAttribute('src')).toEqual(ScrapSvg);
  });

  it('checkbox is not checked', () => {
    renderScrapToggle();
    expect(screen.getByTestId('scrap-checkbox')).not.toBeChecked();
  });

  it('calls onChange event', () => {
    const handleClick = jest.fn();
    renderScrapToggle({ onChange: handleClick });

    userEvent.click(screen.getByTestId('scrap'));

    expect(handleClick).toBeCalledTimes(1);
  });

  describe('with checked', () => {
    it('icon is Blue', () => {
      renderScrapToggle({ checked: true, onChange: () => { } });
      expect(screen.getByTestId('scrap-icon').getAttribute('src')).toEqual(ScrapBlueSvg);
    });

    it('checkbox is checked', () => {
      renderScrapToggle({ checked: true, onChange: () => { } });
      expect(screen.getByTestId('scrap-checkbox')).toBeChecked();
    });
  });
});
