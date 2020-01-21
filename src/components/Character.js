import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Table } from 'semantic-ui-react';
import ModalWindow from './ModalWindow';
import { TABLE_HEADERS } from '../const/const';

const Character = ({ character }) => {
  const [modalValue, setModalValue] = useState(false);

  const handleClick = () => {
    setModalValue(true);
  };

  return (
    <>
      <Table.Row
        className="table__row"
        onClick={handleClick}
      >
        {Object.keys(TABLE_HEADERS).map((header) => (
          <Table.Cell
            className={cn({
              table__cell: true,
              table__cell_desc: header === 'gender',
            })}
            key={header}
          >
            {character[header]}
          </Table.Cell>
        ))}
        <ModalWindow
          character={character}
          open={modalValue}
          setModalValue={setModalValue}
        />
      </Table.Row>
    </>
  );
};

export default Character;

Character.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};
