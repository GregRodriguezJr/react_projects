import { View, StyleSheet, Text } from "react-native";
import NumberContainer from "../components/game/numberContainer";
import Title from "../components/ui/Title";
import { useState } from "react";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = (props) => {
    const initialGuess = generateRandomBetween(1, 100, props.userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
        <View style={styles.screen}>
            <Title title="Opponent's Guess" />
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
});

export default GameScreen;
