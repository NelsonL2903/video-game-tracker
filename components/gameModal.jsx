import React from 'react';
import { Modal, Portal, Text, Surface } from 'react-native-paper';
import PropTypes from 'prop-types';
import { secondaryColour } from './styles';

GameModal.propTypes = {
  visibility: PropTypes.bool,
  hideModal: PropTypes.func,
  game: PropTypes.object
};

export default function GameModal({ visibility, hideModal, game }) {
  return (
    <Portal>
      <Modal visible={visibility} onDismiss={hideModal}>
        <Surface
          elevation={5}
          style={{
            backgroundColor: secondaryColour,
            padding: 20,
            borderWidth: 5,
            height: '100%',
            borderRadius: 20,
            alignItems: 'center'
          }}
        >
          <Text>{game.name}</Text>
        </Surface>
      </Modal>
    </Portal>
  );
}
