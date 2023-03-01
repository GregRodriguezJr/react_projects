import { StyleSheet, Text } from "react-native";

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
        borderColor: "#ddb52f",
        padding: 12,
    },
});

export default Title;
