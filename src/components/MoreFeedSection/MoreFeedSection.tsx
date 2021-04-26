import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface Props {
  onVisible: (status: string, page: number) => void;
  status: string;
  page: number;
  isLast: boolean;
}

const MoreFeedSection: React.FC<Props> = ({
  onVisible,
  status,
  page,
  isLast,
}) => {
  const target = useRef<any>(null);

  useEffect(() => {
    var intersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (isLast) {
          observer.unobserve(target.current);
          return;
        }

        if (entry.isIntersecting) {
          observer.unobserve(target.current);
          onVisible(status, page);
        }
      });
    }, {
      threshold: 1,
    });

    intersectionObserver.observe(target.current);
  }, [target, status, page, isLast]);

  return (
    <MoreSection ref={target}>
      <HiddenText>
        더보기
      </HiddenText>
    </MoreSection>
  )
};

const MoreSection = styled.div`
  padding: 15px;
`;

const HiddenText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
`;

export default MoreFeedSection;
