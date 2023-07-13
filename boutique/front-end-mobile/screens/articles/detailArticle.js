import { View, Text, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';


import { URL } from "../../utils/constant/urls";


const DetailArticle = ({ route }) => {
  const [article, setArticle] = useState([]);

  const { id } = route.params

  useEffect(() => {
    const fetchArticles = async () => {
      try{
        const { data } = await axios.get(`${URL.fetchArticles}/${id}`) 
        console.log(data)
        setArticle(data)
      }catch(error){
        console.log(error)
      }
    };
    fetchArticles();
  }, []);

  return (
    <View>
      {article && (
        <>
          <Image source={{ uri: article.picture }}  />
          <Text>{article.name}</Text>
        </>
      )}
    </View>
  )
}

export default DetailArticle