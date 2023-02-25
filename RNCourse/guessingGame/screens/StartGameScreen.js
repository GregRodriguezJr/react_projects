import { TextInput, View } from "react-native";
import PrimaryBtn from "../components/PrimaryBtn";

const StartGameScreen = () => {
    return (
        <View>
            <TextInput />
            <PrimaryBtn>Reset</PrimaryBtn>
            <PrimaryBtn>Confirm</PrimaryBtn>
        </View>
    )
}

export default StartGameScreen;