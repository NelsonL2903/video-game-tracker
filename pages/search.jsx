import Layout from "../components/layout";
import { Searchbar, Surface } from "react-native-paper";
import { useState } from "react";
import styles, { secondaryColour } from "../components/styles";
import { RAWG_API_KEY } from "@env";
import { Image, Text, ScrollView, View } from "react-native";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);

  const fetchResults = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&page_results=5&page=1&search=${searchQuery}&search_precise=true`
    );
    const games = await response.json();
    setGames(games.results);
    setLoading(false);
  };

  return (
    <Layout>
      <Searchbar
        style={styles.searchBar}
        placeholder="Search"
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
      <ScrollView>
        {games.map((game) => {
          return (
            <Surface
              key={game.id}
              elevation={5}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                textAlign: "center",
                height: 125,
                margin: 10,
                backgroundColor: secondaryColour,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderWidth: 3,
              }}
            >
              <View style={{ height: "100%", width: "50%" }}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                    marginLeft: 5,
                  }}
                  source={{
                    uri: game.background_image,
                  }}
                />
              </View>
              <View
                style={{
                  padding: 10,
                  height: "100%",
                  width: "50%",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    textAlign: "center",
                  }}
                >
                  {game.name}
                </Text>

                {game.released && (
                  <Text style={{ fontSize: 12 }}>{game.released}</Text>
                )}

                {game.metacritic && game.metacritic > 0 && (
                  <Text style={{ fontSize: 14 }}>
                    Metacritic score: {game.metacritic}%
                  </Text>
                )}

                {game.genres.length > 0 && (
                  <Text style={{ fontSize: 14, textAlign: "center" }}>
                    Genres:{" "}
                    {game.genres
                      .map((genre) => {
                        return genre.name;
                      })
                      .join(", ")}
                  </Text>
                )}
              </View>
            </Surface>
          );
        })}
      </ScrollView>
    </Layout>
  );
}
