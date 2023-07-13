import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GetArticle from '../screens/articles/getArticles'
import PostArticles from "../screens/articles/postArticles"

const Stack = createNativeStackNavigator()

export function StackNavigator(){
    return (
        <StackNavigator>
            <Stack.Screen name='Home' component={GetArticle} />
            <Stack.Screen name="Add" component={PostArticles}/>
        </StackNavigator>
    )
}