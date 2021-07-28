import React from "react";
import { View, Alert, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { categories } from "../../utils/categories";
import { Category } from "../Category";
import { styles } from "./styles";

export function GroupCategories() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        horizontal={true}
       
        renderItem={({ item: category }) => (
          <View
            style={{
              padding: 12,
            }}
          >
            <Category
              key={category.id}
              title={category.title}
              icon={category.icon}
              onPress={() => alert(category.title)}
            />
          </View>
        )}
      />
    </View>
  );
}
