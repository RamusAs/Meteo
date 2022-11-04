import { useRoute } from '@react-navigation/native'
import { Text, StyleSheet, View, Image, SafeAreaView, ScrollView, StatusBar} from 'react-native'
import { ProjectionMeteo } from '../componants/ProjectionMeteo'
import {useGetCityMeteo} from '../hooks'

export const CityDetails = () => {
  const { params } = useRoute()
  const city = params?.city
  const { current, nextFiveDays, loading } = useGetCityMeteo(city, [city])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBlock}>
        <Text style={[styles.text, {alignItems: "center",}]}>{city.charAt(0).toUpperCase()+city.slice(1)}</Text>
        <View style={styles.block}>
          <Image
            resizeMode="cover"
            source={{uri: current?.iconBig}}
            style={styles.logo}
          /> 
          <Text style={styles.text}>{current?.temperature.value + current?.temperature.unit}</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          {nextFiveDays?.map((day, key) => key!== 0 && <ProjectionMeteo key={key} data={day} loading={loading} />)}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: "5%",
    marginTop: '40%',
    justifyContent: 'center',
  },
  topBlock: {
    flex: 0.2,
    color: "white",
    backgroundColor: "black",
    borderWidth: 5,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: 'absolute',
    width: '100%',
    height: "20%",
    paddingHorizontal: '5%'
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 66,
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color:"white"
  },
})
