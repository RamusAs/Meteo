import { useCallback } from 'react'
import _ from 'lodash'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

export const Button = ({
  id = 'Button',
  label= "Click here",
  children,
  activeOpacity = 0.7,
  onPress,
  rest
}) => {
  /* handle onPress event */
  const handlePress = useCallback(
    (event) => {
      _.isFunction(onPress) ? onPress?.(event) : null;
    },
    [onPress],
  );

  // generate component testID or accessibilityLabel based on Platform.OS
  const buttonID =
    Platform.OS === 'android' ? {accessibilityLabel: id} : {testID: id};


  return (
    <TouchableOpacity
      {...buttonID}
      activeOpacity={activeOpacity}
      onPress={handlePress}
      {...rest}
      style={styles.button}>
      {children}
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  icon: {

  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});