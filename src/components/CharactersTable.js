import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCharacters } from '../store/store';
import { TABLE_HEADERS, ITEMS_PER_PAGE } from '../const/const';
import Character from './Character';

const CharactersTable = ({ characters, location }) => {
  const visibleCharacters = characters
    .filter((character, i) => (Math
      .floor(i / ITEMS_PER_PAGE) + 1 === +location.pathname.split('/')[1]));

  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            {Object.keys(TABLE_HEADERS).map((header) => (
              <Table.HeaderCell
                key={TABLE_HEADERS[header]}
                className="table__head-cell"
              >
                {TABLE_HEADERS[header]}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {visibleCharacters.map((character) => (
            <Character
              key={character.id}
              character={character}
            />
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

const mapStateToProps = (state) => ({
  characters: getCharacters(state),
});

export default connect(mapStateToProps, null)(withRouter(CharactersTable));

CharactersTable.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
