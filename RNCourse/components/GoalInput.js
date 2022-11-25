import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

  return (
    <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/favicon.png')}/>
            <TextInput 
                onChangeText={goalInputHandler} 
                style={styles.textInput} 
                placeholder='Your course goal'
                value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button onPress={addGoalHandler} title="Add Goal" />
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onCancel}/>
                </View>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '90%',
        padding: 8,
        color: '#120438',
        borderRadius: 6
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
      },
      button: {
        width: '30%',
        marginHorizontal: 8
      },
      image: {
        margin: 20
      }
});

export default GoalInput