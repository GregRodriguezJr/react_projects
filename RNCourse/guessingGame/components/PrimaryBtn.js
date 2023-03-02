import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const PrimaryBtn = (props) => {

    return (
        <View style={styles.btnOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.iosPressed, styles.btnInnerContainer]
                        : styles.btnInnerContainer
                }
                onPress={props.onPress}
                android_ripple={{ color: Colors.primary600 }}
            >
                <Text style={styles.btnText}>{props.children}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    btnOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    btnInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    btnText: {
        color: "#fff",
        textAlign: "center",
    },
    iosPressed: {
        opacity: 0.75,
    },
});

export default PrimaryBtn;
