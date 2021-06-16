import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  async componentDidMount()
  {
    try{

      await fetch('https://webhook.site/4a1dfbea-8c7c-41fd-9580-1b7618f5eada',{
        method: 'post',
        mode: 'no-cors',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({

          username: 'kathiravan',
          password: 'zizu'

        })

      })
    }catch(e)
    {
      console.log(e);
    }
  }

  render()
  {
    return (
      <View style={styles.container}>
        <Text>Post data Call</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
