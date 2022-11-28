import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  Image,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';







const App = () => {
  const [cats, setCats] = useState([]);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=20&page=1&mime_types=png&&order=Desc',
    )
    .then(response => response.json())
    .then((json) => setCats(json))
    .catch(() => console.log('fetch failed'));
  }, []);

  const getCats = async () => {
    
  }

  return (
    <View style={{ flex: 1}}>
      
        <FlatList
        style={{ flex: 1 }}
          keyExtractor={id => cats.id}
          data={cats}
          numColumns={3}
          renderItem={(item, i) => {
          return (
            <View style={{ height: 200, width: '33%'}}>
              <Image
                source={{ uri: item.item.url }}
                style={{ height: 200 }}
              />
            </View>
          )
          }
          }
        />
      </View>
  );
};

const styles = StyleSheet.create({
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

export default App;
