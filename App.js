import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './components/Header';
import Album from './components/Album';
import Details from './components/Details';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Header
        message={'song title'}
        onDownPress={() => console.warn('Under construction')}
        onMenuPress={() => console.warn('Under construction')}/>
       <Album uri={'http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg'}/>
       <Details/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black'
  }
});

export default App;
