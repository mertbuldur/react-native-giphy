import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
const SearchInput = ({value, setValue, onSearch}) => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        onChangeText={text => setValue(text)}
        value={value}
        onEndEditing={onSearch}
        placeholder={'Arama Kelimesi'}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {padding: 5, paddingVertical: 10, backgroundColor: '#f5f5f5'},
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});
export default SearchInput;
