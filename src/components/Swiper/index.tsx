import React from "react";
import { Image, View } from "react-native";
import {styles} from './styles'

import Swiper from "react-native-swiper";

type ItemProps = {
    id:number,
    image:string
}

type DataProps = {
    data: Array<ItemProps>
}

export function SwiperComponent({ data }: DataProps) {

  const renderItems = () => {
    let images = [];
    for (let index = 0; index < data.length; index++) {
      images.push(
        <View style={styles.slide} key={data[index].id}>
          <Image
            source={{uri: data[index].image}}
            style={{ width: '100%', height: 180, borderRadius:15 }}
          />
        </View>
      );
    }
    return images
  };

  return (
    <Swiper
      style={styles.wrapper}
      autoplay
      activeDotColor={"red"}
      autoplayTimeout={4}
    >
      {renderItems()}
    </Swiper>
  );
}
