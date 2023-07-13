import React, {useEffect, useState} from "react";
import { Text, FlatList, View, Image, TouchableOpacity } from "react-native";
import axios from "axios";
import Data from "../../data.json";
import { URL } from "../../utils/constant/urls";

export default function Articles({navigation}) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const{data}=await axios.get('${URL.getAllArticles}');
      setArticles(data['hydra:member'])
    };
    fetchArticles()
  }, []);
  const renderItem = ({ item }) => {
    const {id, name, price, picture, content } = item;

    return (
      <TouchableOpacity onPress={() => navigation.navigate("Detail", {id: id})}>
      <View>
        <Text>{name}</Text>
        <Image source={{ url: picture }} style={{ height: 150 }} />
        <Text>{content}</Text>
        <Text>{price} €</Text>
      </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={Data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: '800',
    }
})