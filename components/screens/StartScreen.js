import React, { useState } from 'react';
import { Alert, Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../../constants/colors';
import Card from '../common/Card';
import Input from '../common/Input';
import NumberWrapper from '../common/NumberWrapper';

const StartScreen = (props) => {
    const [interedValue, setInteredValue] = useState("");
    const [confirmedValue, setConfirmedValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);

    const confirmedHandler = () => {
        const valueNumber = parseInt(interedValue);

        if (isNaN(valueNumber) || valueNumber <= 0 || valueNumber > 99) {
            Alert.alert("Wrong number", "Value is wrong", [{text: "okay", style: "destructive", onPress: resetHandler}]);
            return;
        }

        setConfirmed(true);
        setConfirmedValue(interedValue);
        setInteredValue('');
    }

    const resetHandler = () => {
        setInteredValue('');
        setConfirmed(false);
    }

    const textInputHandler = (inputText) => {
        setInteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    let confirmedViewValue;

    if (confirmed) {
        confirmedViewValue = (
        <Card style={styles.confirmedCardStyle}>
            <Text>Your select</Text>
            <NumberWrapper>{confirmedValue}</NumberWrapper>
            <Button title="Start game"/>
        </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.startScreenContainer}>
                <Text style={styles.textTitle}>Start game!!!</Text>
                <Card style={styles.inputCardStyle}>
                    <Text>Input a new number</Text>
                    <Input style={styles.inputNumber}
                            blurOnSubmit
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="number-pad"
                            maxLength={2}
                            value={interedValue}
                            onChangeText={textInputHandler}
                    />
                    <View style={styles.inputButtons}>
                        <View style={styles.button}>
                            <Button onPress={resetHandler} color={colors.accent} title="Reset"/>
                        </View>
                        <View style={styles.button}>
                            <Button onPress={confirmedHandler} color={colors.primary} title="Confirm"/>
                        </View>
                    </View>
                </Card>
                {confirmedViewValue}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    startScreenContainer: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    inputButtons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: 100
    },
    textTitle: {
        marginVertical: 20,
        fontSize: 24
    },
    inputNumber: {
        textAlign: 'center',
        width: 50
    },
    inputCardStyle: {
        width: 300,
        maxWidth: '80%',
        padding: 20,
        height: 150,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    confirmedCardStyle: {
        marginTop: 20,
        alignItems: 'center',
        padding: 20
    }
});

export default StartScreen;