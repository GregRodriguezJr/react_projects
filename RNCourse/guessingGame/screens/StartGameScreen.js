import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryBtn from "../components/ui/PrimaryBtn";
import Colors from "../constants/Colors";

const StartGameScreen = (props) => {
    const [enteredNumber, setEnteredNumber] = useState("");

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    };

    const resetInputHandler = () => {
        setEnteredNumber("");
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Invalid number!",
                "Number has to be between 1 and 99",
                [
                    {
                        text: "Ok",
                        style: "destructive",
                        onPress: resetInputHandler,
                    },
                ]
            );
            return;
        }
        console.log("Valid number");
        props.onPickNumber(chosenNumber);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
            />
            <View style={styles.btnsContainer}>
                <View style={styles.btnContainer}>
                    <PrimaryBtn onPress={resetInputHandler}>Reset</PrimaryBtn>
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryBtn onPress={confirmInputHandler}>
                        Confirm
                    </PrimaryBtn>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primary800,
        color: "#fff",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    btnsContainer: {
        flexDirection: "row",
    },
    btnContainer: {
        flex: 1,
    },
});

export default StartGameScreen;
