
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Secret Santa</Text>
        <Text style={styles.leadText}>Javier Calderon</Text>
        <Text>Developer/Sales/Creator</Text>
        <Text style={styles.leadText}>Micheal Suen</Text>
        <Text>Creator</Text>
        <Text style={styles.leadText}>Thomas Timothy Capps</Text>
        <Text>Legal/ Creator</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  mainText: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
  },
  leadText: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 5,
  }
});

export default App;
