import { TextInput, View, StyleSheet } from "react-native";
import PrimaryBtn from "../components/PrimaryBtn";

const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad" 
                autoCapitalize="none"
                />
            <View style={styles.btnsContainer}>
                <View style={styles.btnContainer}>
                    <PrimaryBtn>Reset</PrimaryBtn>  
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryBtn>Confirm</PrimaryBtn>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: "#3b021f",
        color: "#fff",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center"
    },
    btnsContainer: {
        flexDirection: "row"
    },
    btnContainer: {
        flex:1
    }
})

export default StartGameScreen;