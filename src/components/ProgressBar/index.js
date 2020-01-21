import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Track = styled.div`
  position: relative;
  width: 230px;
  height: 15px;
  margin-bottom: 13px;
  background-color: white;
  border: 1px solid #6bccf9;
`;

const Thumb = styled.div`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: #6bccf9;
  transition: width 0.5s ease-in-out;
`;

const Procent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: bold;
  font-size: 12px;
  margin: 14px 0 0 -10px;
`;

const ProgressBar = ({ percentage }) => {
  const clamp = (min, value, max) => Math.min(Math.max(min, value), max);

  return (
    <>
      <Track>
        <Thumb percentage={clamp(0, percentage, 100)} />
      </Track>
      <Procent>
        {`${percentage}%`}
      </Procent>
    </>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;
