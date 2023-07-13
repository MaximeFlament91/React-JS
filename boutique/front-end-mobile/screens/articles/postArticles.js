import React, { useState} from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import axios from 'axios';
import { URL } from "../../utils/constant/urls";


export default function PostArticles () {

    const [article, setArticle] = useState({
        name: "",
        picture: "",
        price: 0,
        content: "",
    });

    const handleChange = (key, value) => {
        setArticle({...article, [key]: value});
    };

    const handleSubmit = async () => {
      await axios.post(URL.postArticle, {
        name: article.name,
        price: article.price,
        picture: article.picture,
        content: article.content,
      })
    };

    const handleEdit = async () => {
      try {
        await axios.post(URL.editArticle);
        console.log('Article édité');
      } catch (error) {
        console.log(error);
      }
    };

    const handleDelete = async () => {
      try {
        await axios.delete(URL.deleteArticle);
        console.log('Article supprimé');
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <View>
        <Text>Formulaire </Text>
        <TextInput
          style={style.input}
          placeholder="name"
          onChangeText={(value) => handleChange("name", value)}
        />
        <TextInput
          style={style.input}
          placeholder="content"
          onChangeText={(value) => handleChange("content", value)}
        />
        <TextInput
          style={style.input}
          placeholder="price"
          onChangeText={(value) => handleChange("price", value)}
        />
        <TextInput
          style={style.input}
          placeholder="url picture"
          onChangeText={(value) => handleChange("picture", value)}
        />
        <Button onPress={handleSubmit}  title="valider" />
        <Button onPress={handleEdit}  title="modifier" />
        <Button onPress={handleDelete}  title="supprimer" />
      </View>
    )
}


const style=StyleSheet.create({
    input: {
        height: 30,
        borderWidth: 2,
    }
})