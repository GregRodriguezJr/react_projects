import { StyleSheet, View, Button, TextInput } from 'react-native';
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
    <View style={styles.inputContainer}>
        <TextInput 
          onChangeText={goalInputHandler} 
          style={styles.textInput} 
          placeholder='Your course goal'
          value={enteredGoalText}
        />
        <Button 
          onPress={addGoalHandler} 
          title="Add Goal" 
        />
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
      }
});

export default GoalInput