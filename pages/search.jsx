import { Searchbar, PaperProvider } from 'react-native-paper';
import React, { useState } from 'react';
import styles from '../components/styles';
import { API_SERVER_URL } from '@env';
import { ScrollView } from 'react-native';
import { GameCard, Layout, GameModal } from '../components/components';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [game, setGame] = useState({});

  const showModal = (game) => {
    setGame(game);
    setVisibility(true);
  };
  const hideModal = () => {
    setVisibility(false);
  };

  const fetchResults = async () => {
    setLoading(true);

    try {
      const apiUrl = `${API_SERVER_URL}/search/${searchQuery}`;
      const response = await fetch(apiUrl);
      const games = await response.json();
      setGames(games);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <PaperProvider>
        <Searchbar
          style={styles.searchBar}
          placeholder='Search'
          onChangeText={(query) => {
            setSearchQuery(query);
            setLoading(false);
          }}
          onEndEditing={async () => {
            await fetchResults();
          }}
          value={searchQuery}
          loading={loading}
        />
        <GameModal visibility={visibility} hideModal={hideModal} game={game} />
        <ScrollView>
          {games.map((game) => {
            return <GameCard key={game.id} game={game} showModal={showModal} />;
          })}
        </ScrollView>
      </PaperProvider>
    </Layout>
  );
}
