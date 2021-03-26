import React, { useEffect } from 'react'
import { FlatList, StyleSheet, View, Image, Dimensions } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { THEME } from '../theme'
import { useState } from 'react'

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
    const [deviceWidth, setDeviseWidth] = useState(
        Dimensions.get('window').width - THEME.PADDING_GORIZONTAL * 2
        )

        useEffect( () => {
            const update = () => {
                const width =  Dimensions.get('window').width - THEME.PADDING_GORIZONTAL * 2
                setDeviseWidth(width)
            }

            Dimensions.addEventListener('change', update)

            return () => {
                Dimensions.removeEventListener('change', update)
            }

        } )


        let content = (
        <View style={{ width: deviceWidth }}>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>}
            />
        </View>
    )
    if (todos.length === 0) {
        content = (
            <View style={styles.imgWrap}>
                <Image 
                    source={require('../../assets/no-items.png')} 
                    style={styles.image}
                    resizeMode='contain'
                />
            </View>
            )
    }


    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        //resizeMode: 'contain'
    }
})