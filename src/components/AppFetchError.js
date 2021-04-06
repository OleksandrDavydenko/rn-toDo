import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AppButton } from './ui/AppButton'
import { AppText } from './ui/AppText'
import {THEME} from '../theme'


export const AppFetchError = ({ error, loadTodos }) => {
  return (
     <View style={styles.center}>
        <AppText style={styles.error}>{error}</AppText>
        <AppButton onPress={loadTodos}>Повторить</AppButton>
    </View>
  )
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  error: {
    fontSize: 20,
    color: THEME.DANGER_COLOR,
  }
})
