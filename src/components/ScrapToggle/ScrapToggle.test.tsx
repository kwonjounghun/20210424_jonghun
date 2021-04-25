import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ScrapToggle from './ScrapToggle';
import '@testing-library/jest-dom/extend-expect';

describe('ScrapToggle', () => {
  function renderScrapToggle(props?: any) {
    return render(<ScrapToggle {...props} />);
  }

  it('render', () => {
    renderScrapToggle();
    screen.getByText('스크랩한 것만 보기');
  });

  it('checkbox background-color is white', () => {
    renderScrapToggle();
    const toggle = screen.getByTestId('scrap-toggle-box');
    const element = window.getComputedStyle(toggle);
    expect(element.backgroundColor).toEqual('rgb(255, 255, 255)');
  });

  it('checkbox is not checked', () => {
    renderScrapToggle();
    expect(screen.getByTestId('scrap-toggle-checkbox')).not.toBeChecked();
  });

  it('calls onChange event', () => {
    const handleClick = jest.fn();
    renderScrapToggle({ onChange: handleClick });

    userEvent.click(screen.getByTestId('scrap-toggle'));

    expect(handleClick).toBeCalledTimes(1);
  });

  describe('with checked', () => {
    it('checkbox background-color is rgb(53, 197, 240)', () => {
      renderScrapToggle({ checked: true, onChange: () => { } });

      const toggle = screen.getByTestId('scrap-toggle-box');
      const element = window.getComputedStyle(toggle);
      expect(element.backgroundColor).toEqual('rgb(53, 197, 240)');
    });

    it('checkbox is checked', () => {
      renderScrapToggle({ checked: true, onChange: () => { } });

      expect(screen.getByTestId('scrap-toggle-checkbox')).toBeChecked();
    });
  });
});
