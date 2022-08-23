import React, { useState } from 'react';
import { View } from 'react-native';
import { BottomMenu } from './src/bottom-menu';
import { HomePage } from './src/home';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'WATER' | 'HISTORY' | 'MENU'>('WATER')
  return (
    <>
      <View style={{ height: '90%' }}>
        <HomePage />
      </View>
      <BottomMenu
        currentPage={currentPage}
        navToPage={(page) => setCurrentPage(page)}/>
    </>
  );
}

