import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../../constants/colors';

const NumberWrapper = (props) => {
    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.number}>{props.children}</TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        borderWidth: 3,
        borderColor: colors.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        color: colors.primary,
        fontSize: 22
    }
});

export default NumberWrapper;