import React from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { useState } from 'react'
import { EditModal } from '../components/EditModal'
import { AppBtn } from '../components/ui/AppButton'
import { FontAwesome, AntDesign } from '@expo/vector-icons'


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
                <AppBtn onPress={() => setModal(true)}>
                    <FontAwesome name='edit' size={20}/>
                </AppBtn>
            </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppBtn onPress={goBack} color={THEME.GREY_COLOR}>
                        <AntDesign name='back' size={20} color='#fff' />
                        {'  back'}
                    </AppBtn> 
                </View>
                <View style={styles.button}>
                    <AppBtn 
                        color={THEME.DANGER_COLOR} 
                        onPress={() => onRemove(todo.id)}
                        >
                            <FontAwesome name='remove' size={20} color='#fff'/>
                            {'  remove'}
                    </AppBtn>
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
        //width: Dimensions.get('window').width/3
        width: Dimensions.get('window').width > 400 ? 150 : 100
    },
    title: {
        fontSize: 20
    }
})