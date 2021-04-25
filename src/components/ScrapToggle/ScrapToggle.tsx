import React from 'react';
import CheckIconSvg from '../../assets/check.svg';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  checked?: boolean;
};

const ScrapToggle: React.FC<Props> = ({
  checked,
  className,
  ...props
}) => {
  return (
    <ToggleContainer className={className} htmlFor="scrap-toggle" data-testid="scrap-toggle">
      <CheckIconWrapper checked={checked} data-testid="scrap-toggle-box">
        <CheckIcon src={CheckIconSvg} data-testid="scrap-toggle-icon" />
      </CheckIconWrapper>
      <Checkbox
        id="scrap-toggle"
        type="checkbox"
        checked={checked}
        data-testid="scrap-toggle-checkbox"
        {...props}
      />
      <FilterText>스크랩한 것만 보기</FilterText>
    </ToggleContainer>
  );
};

const ToggleContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckIconWrapper = styled.div<{ checked: boolean | undefined }>`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
  border: 1px solid ${({ checked }) => checked ? '#35C5F0' : '#DADCE0'};
  background-color: ${({ checked }) => checked ? '#35C5F0' : '#fff'};
  border-radius: 4px;
`;

const CheckIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Checkbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
`;

const FilterText = styled.span`
  font-size: 15px;
  line-height: 22px;
  margin-left: 6px;
`;

export default ScrapToggle;
