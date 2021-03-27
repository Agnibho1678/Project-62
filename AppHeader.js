import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.header}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
            Student Attendance
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6400ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
