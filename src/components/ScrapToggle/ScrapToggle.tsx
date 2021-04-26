import React from 'react';
import ScrapSvg from '../../assets/scrap.svg';
import ScrapBlueSvg from '../../assets/scrap-blue.svg';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  classNames?: string;
  checked?: boolean;
  id?: string;
};

const ScrapToggle: React.FC<Props> = ({
  className,
  checked,
  id,
  ...props
}) => {
  const UniqueId = id || `scrap-${uuidv4()}`;
  return (
    <ToggleContainer className={className} htmlFor={UniqueId} data-testid="scrap">
      <ScrapIcon>
        <img src={checked ? ScrapBlueSvg : ScrapSvg} data-testid="scrap-icon"/>
      </ScrapIcon>
      <Checkbox
        id={UniqueId}
        type="checkbox"
        checked={checked}
        data-testid="scrap-checkbox"
        {...props}
      />
      <HiddenText>{`스크랩 ${checked ? '취소' : '하기'}`}</HiddenText>
    </ToggleContainer>
  );
};

const ToggleContainer = styled.label`
  position: relative;
  cursor: pointer;
`;

const ScrapIcon = styled.div`
  width: 28px;
  height: 28px;
  text-align: center;
`;

const Checkbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
`;

const HiddenText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
`;

export default React.memo(ScrapToggle);
