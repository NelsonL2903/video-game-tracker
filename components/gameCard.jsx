import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Surface } from 'react-native-paper';
import { secondaryColour } from './styles';
import PropTypes from 'prop-types';

GameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    released: PropTypes.string,
    rating: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string)
  }),
  showModal: PropTypes.func
};

export default function GameCard(props) {
  const { game, showModal } = props;

  return (
    <TouchableOpacity
      onPress={() => {
        showModal(game);
      }}
    >
      <Surface
        key={game.id}
        elevation={5}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          textAlign: 'center',
          height: 125,
          margin: 10,
          backgroundColor: secondaryColour,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          borderWidth: 3
        }}
      >
        <View style={{ height: '100%', width: '50%', paddingVertical: 5 }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
              marginLeft: 5
            }}
            source={{
              uri: game.image
            }}
          />
        </View>
        <View
          style={{
            padding: 10,
            height: '100%',
            width: '50%',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              textAlign: 'center'
            }}
          >
            {game.name}
          </Text>

          {game.released && <Text style={{ fontSize: 12 }}>{game.released}</Text>}

          {game.rating && game.rating > 0 && <Text style={{ fontSize: 14 }}>Metacritic score: {game.rating}%</Text>}

          {game.genres.length > 0 && (
            <Text style={{ fontSize: 14, textAlign: 'center' }}>Genres: {game.genres.join(', ')}</Text>
          )}
        </View>
      </Surface>
    </TouchableOpacity>
  );
}
