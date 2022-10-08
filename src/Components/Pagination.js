import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const Pagination = ({currentPage, setCurrentPage, totalPage}) => {
  return (
    <View style={style.container}>
      {currentPage != 1 && (
        <View style={style.leftButton}>
          <TouchableOpacity
            onPress={() => setCurrentPage(currentPage - 1)}
            style={[style.button]}>
            <Text style={{textAlign: 'center'}}>Geri</Text>
          </TouchableOpacity>
        </View>
      )}
      {currentPage <= totalPage && (
        <View style={style.rightButton}>
          <TouchableOpacity
            onPress={() => setCurrentPage(currentPage + 1)}
            style={[style.button]}>
            <Text style={{textAlign: 'center'}}>İleri</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const style = StyleSheet.create({
  container: {padding: 10, flexDirection: 'row'},
  button: {
    backgroundColor: '#ddd',
    width: 80,
    borderRadius: 10,
    padding: 10,
  },
  rightButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default Pagination;
