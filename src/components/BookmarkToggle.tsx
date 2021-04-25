import React from 'react';
import BookmarkSvg from '../assets/bookmark.svg';
import BookmarkBlueSvg from '../assets/bookmark-blue.svg';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  classNames?: string;
  checked?: boolean;
  id?: string;
};

const BookMarkToggle: React.FC<Props> = ({
  className,
  checked,
  id,
  ...props
}) => {
  const UniqueId = id || `bookmark-${uuidv4()}`;
  return (
    <ToggleContainer className={className} htmlFor={UniqueId} data-testid="bookmark">
      <BookmarkIcon>
        <img src={checked ? BookmarkBlueSvg : BookmarkSvg} data-testid="bookmark-icon"/>
      </BookmarkIcon>
      <Checkbox
        id={UniqueId}
        type="checkbox"
        checked={checked}
        data-testid="bookmark-checkbox"
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

const BookmarkIcon = styled.div`
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

export default React.memo(BookMarkToggle);
