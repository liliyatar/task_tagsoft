import React from 'react';
import { Modal, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ModalWindow = ({ character, setModalValue, open }) => (
  <Modal
    onClose={() => setModalValue(false)}
    open={open}
  >
    <Modal.Header>Add event</Modal.Header>
    <Modal.Content image>
      <Image
        wrapped
        size="medium"
        src={character.image}
      />
      <h1>{character.name}</h1>
      <div>{`SPECIES:${character.species}`}</div>
    </Modal.Content>
  </Modal>
);

ModalWindow.propTypes = {
  open: PropTypes.bool.isRequired,
  setModalValue: PropTypes.bool.isRequired,
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default ModalWindow;
