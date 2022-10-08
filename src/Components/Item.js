import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

const Item = ({item}) => {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(item.bitly_gif_url)}
      style={style.container}>
      <View style={style.content}>
        <Image
          style={style.gif}
          resizeMode={'contain'}
          source={{uri: item.images.preview_gif.url}}
        />
      </View>
      <View style={style.user}>
        <Image
          source={{uri: item?.user?.avatar_url ?? ''}}
          style={style.user_avatar}
        />
        <Text style={style.username}>{item?.user?.username}</Text>
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    margin: 5,
  },
  content: {
    alignItems: 'center',
  },
  gif: {
    width: 150,
    height: 150,
  },
  user: {
    flexDirection: 'row',
    padding: 7,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  user_avatar: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  username: {
    marginLeft: 5,
    fontWeight: '700',
  },
});

export default Item;
