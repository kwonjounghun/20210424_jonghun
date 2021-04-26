import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ScrapOnlyToggle from './ScrapOnlyToggle';
import '@testing-library/jest-dom/extend-expect';

describe('ScrapOnlyToggle', () => {
  function renderScrapOnlyToggle(props?: any) {
    return render(<ScrapOnlyToggle {...props} />);
  }

  it('render', () => {
    renderScrapOnlyToggle();
    screen.getByText('스크랩한 것만 보기');
  });

  it('checkbox background-color is white', () => {
    renderScrapOnlyToggle();
    const toggle = screen.getByTestId('scrap-toggle-box');
    const element = window.getComputedStyle(toggle);
    expect(element.backgroundColor).toEqual('rgb(255, 255, 255)');
  });

  it('checkbox is not checked', () => {
    renderScrapOnlyToggle();
    expect(screen.getByTestId('scrap-toggle-checkbox')).not.toBeChecked();
  });

  it('calls onChange event', () => {
    const handleClick = jest.fn();
    renderScrapOnlyToggle({ onChange: handleClick });

    userEvent.click(screen.getByTestId('scrap-toggle'));

    expect(handleClick).toBeCalledTimes(1);
  });

  describe('with checked', () => {
    it('checkbox background-color is rgb(53, 197, 240)', () => {
      renderScrapOnlyToggle({ checked: true, onChange: () => { } });

      const toggle = screen.getByTestId('scrap-toggle-box');
      const element = window.getComputedStyle(toggle);
      expect(element.backgroundColor).toEqual('rgb(53, 197, 240)');
    });

    it('checkbox is checked', () => {
      renderScrapOnlyToggle({ checked: true, onChange: () => { } });

      expect(screen.getByTestId('scrap-toggle-checkbox')).toBeChecked();
    });
  });
});
