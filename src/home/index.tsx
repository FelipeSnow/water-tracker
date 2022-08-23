import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface HomeProps {
  name?: string
}
export function HomePage(props: HomeProps){
  return <View style={styles.Column}>
    <View style={styles.TopBar}>
      <Text style={styles.Header}>
        Hello <Text style={styles.Name}>{props.name || 'user'}</Text>
      </Text>
      <View style={styles.Options}/>
    </View>
  </View>
}

const styles = StyleSheet.create({
  Column: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '5%',
    backgroundColor: 'white'
  },
  TopBar: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  Header: {
    color: 'black',
    fontSize: 13.5,
  },
  Name: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  Options: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 30,
    height: 30,
  }
})

