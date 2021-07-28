import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../../constants/colors';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 120,
        paddingTop: 26,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default Header;