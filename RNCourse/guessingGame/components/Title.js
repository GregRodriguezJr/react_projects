import { StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";
const Title = (props) => {
    return <Text style={styles.title}>{props.title}</Text>;
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
    },
});

export default Title;
