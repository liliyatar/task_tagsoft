import React, { useState } from 'react';
import '../styles/Block.scss';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Block = () => {
  const randomInteger = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);

    setPercentage(Math.floor(rand));
  };

  const [percentage, setPercentage] = useState(10);

  return (
    <div className="wrapper">
      <div className="box-number">25</div>
      <div className="block">
        <div className="block__heading">Обучение по продажам</div>
        <div className="block__text">Вы сделали 13 продаж и заработали:</div>
        <div className="block__price">$ 2 000</div>
        <div className="wrapper__progress-bar">
          <div className="progress-bar">
            <div className="progress-bar__heading">
              Месячный план выполнен на
            </div>
            <ProgressBarContainer>
              <ProgressBar percentage={percentage} />
            </ProgressBarContainer>
            <div className="progress-bar__container">
              <button
                className="progress-bar__button"
                type="button"
                onClick={() => randomInteger(10, 100)}
              >
                Продолжить
              </button>
              <p className="progress-bar__text">Осталось 8 дней</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
