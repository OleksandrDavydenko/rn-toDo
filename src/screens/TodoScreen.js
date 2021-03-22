import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { THEME } from '../theme'

export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View>
            <Text>{todo.title}</Text>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title='back' onPress={goBack} color={THEME.GREY_COLOR}/>
                </View>
                <View style={styles.button}>
                    <Button 
                        title='dellete' 
                        color={THEME.DANGER_COLOR} 
                        onPress={() => console.log('To Remove')}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    }
})