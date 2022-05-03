import React, { useContext, useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { NewsContext } from "../API/Context";
import Carousel from "react-native-snap-carousel";
import SingleNews from "../components/SingleNews";

const NewsScreen = () => {
  const {
    news: { articles },
  } = useContext(NewsContext);
  //   console.log(articles);

  const [activeIndex, setActiveIndex] = useState();

  const sliderWidth = Dimensions.get("window").width;
  const itemHeight = Dimensions.get("window").height;
  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          layout={"stack"}
          data={articles.slice(0, 10)}
          sliderWidth={sliderWidth}
          sliderHeight={itemHeight}
          itemWidth={sliderWidth}
          itemHeight={itemHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: "black",
    transform: [{scaleY: -1}],
  },
});

export default NewsScreen;
