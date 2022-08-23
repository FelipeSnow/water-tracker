import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

interface MenuProps {
  currentPage?: 'WATER' | 'HISTORY' | 'MENU'
  navToPage: (page: 'WATER' | 'HISTORY' | 'MENU') => void
}

export function BottomMenu(props: MenuProps) {
  return <View style={styles.Container}>
    <TouchableOpacity 
      onPress={() => props.navToPage('WATER')}
      style={props.currentPage === 'WATER' ? styles.SelectedItem : styles.Item}>
      <Text
        style={props.currentPage === 'WATER' ? styles.SelectedText : styles.Text}>
        Water
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => props.navToPage('HISTORY')}
      style={props.currentPage === 'HISTORY' ? styles.SelectedItem : styles.Item}>
      <Text
        style={props.currentPage === 'HISTORY' ? styles.SelectedText : styles.Text}>
        History
      </Text>
     </TouchableOpacity>
    <TouchableOpacity
      onPress={() => props.navToPage('MENU')}
      style={props.currentPage === 'MENU' ? styles.SelectedItem : styles.Item}>
      <Text style={props.currentPage === 'MENU' ? styles.SelectedText : styles.Text}>Menu</Text>
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-evenly',
  },
  Item: {
    backgroundColor: 'transparent',
    height: 50,
    width: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  SelectedItem: {
    backgroundColor: 'blue',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SelectedText: {
    color: 'white'
  },
  Text: {
    color: 'black'
  }
})
