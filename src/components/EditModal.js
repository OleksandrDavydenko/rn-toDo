import React from 'react'
import { View, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native'
import { THEME } from '../theme'
import { useState } from 'react'

export const EditModal = ({ visible, onCancel, value, onSave }) => {

    const [title, setTitle] = useState(value) 

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Error!', `min title length 3 symbols. There are ${title.trim().length} symbols now.`)
        } else {
            onSave(title)
        }
    }

    return (
        <Modal visible={visible} animationType='slide' transparent={false} >
            <View style={styles.wrap}>
                <TextInput 
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input} 
                    placeholder='Enter something...' 
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLength={65}
                />
                <View style={styles.buttons}>
                    <Button 
                        title='cancel' 
                        onPress={onCancel} 
                        color={THEME.DANGER_COLOR}
                    />
                    <Button title='save' onPress={saveHandler}/>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        marginTop: 10,
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }

})