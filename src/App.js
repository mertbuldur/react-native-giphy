import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, StyleSheet, View, Text} from 'react-native';
import Header from './Components/Header';
import axios from 'axios';
import {API_KEY} from './Config';
import Item from './Components/Item';
import SearchInput from './Components/SearchInput';
import Pagination from './Components/Pagination';
const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const getData = () => {
    const url =
      query == ''
        ? `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=40`
        : `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&offset=${
            currentPage * LIMIT
          }&limit=24`;
    axios
      .get(url)
      .then(result => {
        setTotalPage(Math.ceil(result.data.pagination.total_count / LIMIT));
        setData(result.data.data);
        setLoading(false);
      })
      .catch(e => console.log(e));
  };
  const LIMIT = 15;
  useEffect(() => {
    getData();
  }, [currentPage]);

  const _render = ({item}) => {
    return <Item item={item} />;
  };

  const onSearch = () => {
    if (query == '') {
      alert('Lütfen arama ifadesi giriniz');
      return;
    }
    getData();
  };
  if (loading) {
    return (
      <View style={style.loading}>
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <SearchInput setValue={setQuery} value={query} onSearch={onSearch} />
      <View style={style.container}>
        {query && (
          <Pagination
            totalPage={totalPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        <FlatList
          showsVerticalScrollIndicator={false}
          style={style.flatlist}
          numColumns={2}
          data={data}
          renderItem={_render}
        />
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {flex: 1},
  flatlist: {
    marginTop: 10,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
export default App;
