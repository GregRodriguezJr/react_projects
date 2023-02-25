import { TextInput, View, StyleSheet } from "react-native";
import PrimaryBtn from "../components/PrimaryBtn";

const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryBtn>Reset</PrimaryBtn>
            <PrimaryBtn>Confirm</PrimaryBtn>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: "#72063c",
        color: "#fff",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
})

export default StartGameScreen;