import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef } from "react";
import { Pressable, StyleSheet, Text, Image, View, Button } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useGetCityMeteo } from "../hooks";

export const Article = ({ city, onDelete }) => {
  const { current, loading } = useGetCityMeteo(city, [city]);
  const navigation = useNavigation();
  const swipeableRef = useRef();

  const renderRightActions = (progress, dragX, onClick) => {
    return (
      <View
        style={{
          ...styles.container,
          backgroundColor: "red",
          width: 120,
          margin: 0,
          justifyContent: "center",
          padding: 0,
          alignItems: "center",
        }}
      >
        <Button color="white" onPress={onClick} title="DELETE"></Button>
      </View>
    );
  };

  useEffect(() => closeSwipeable(), [onDelete]);

  const closeSwipeable = () => {
    swipeableRef.current.close();
  };

  return (
    <Swipeable
      ref={swipeableRef}
      renderRightActions={(progress, dragX) =>
        renderRightActions(progress, dragX, onDelete)
      }
      rightOpenValue={-100}
    >
      <Pressable
        style={styles.container}
        delayLongPress={100}
        onLongPress={() => navigation.navigate("Detail", { city: city })}
      >
        {!loading && (
          <>
            {
              <View style={styles.block}>
                <Text style={styles.text}>
                  {city.charAt(0).toUpperCase() + city.slice(1)}
                </Text>
                <Image
                  resizeMode="cover"
                  source={{ uri: current?.icon }}
                  style={styles.tinyLogo}
                />
              </View>
            }
            <View
              style={{
                alignItems: "right",
                justifyContent: "space-between",
              }}
            >
              <Text>
                <Text>Temperature :</Text>
                <Text style={styles.text}>
                  {current?.temperature.value + current?.temperature.unit}
                </Text>
              </Text>
              <Text>
                <Text>Vent :</Text>
                <Text style={styles.text}>
                  {current?.windSpeed.value + current?.windSpeed.unit}
                </Text>
              </Text>
              <Text>
                <Text>Humidité :</Text>
                <Text style={styles.text}>
                  {current?.humidity.value + current?.humidity.unit}
                </Text>
              </Text>
            </View>
          </>
        )}
        {loading && <Text>Loading...</Text>}
      </Pressable>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: "5%",
    width: "90%",
    height: 120,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  block: {
    alignItems: "left",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
});
