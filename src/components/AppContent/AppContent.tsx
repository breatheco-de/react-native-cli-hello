import React from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'

const AppContent = () => {
  const handleOnPress = () => {
    console.log('--- OnPress')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenidos</Text>
      <Button onPress={handleOnPress} title="Esto es un Botón" />
      <TouchableOpacity onPress={handleOnPress}>
        <Text style={styles.text}>Este es otro Botón</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    padding: 10,
    textAlign: 'center',
  },
})

export default AppContent
