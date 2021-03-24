import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { useState } from 'react'
import { EditModal } from '../components/EditModal'

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
    
    const [modal, setModal] = useState(false)

    const saveHandler = title => {
        onSave(todo.id, title)
        setModal(false)
    }


    return (
        <View>
            <EditModal 
                value={todo.title} 
                visible={modal} 
                onCancel={() => {setModal(false)}} 
                onSave={saveHandler}
            />

            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='edit' onPress={() => setModal(true)}/>
            </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title='back' onPress={goBack} color={THEME.GREY_COLOR}/>
                </View>
                <View style={styles.button}>
                    <Button 
                        title='dellete' 
                        color={THEME.DANGER_COLOR} 
                        onPress={() => onRemove(todo.id)}/>
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
    card: {
        marginBottom: 20,
        padding: 15
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    }
})