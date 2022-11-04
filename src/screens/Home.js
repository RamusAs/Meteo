import {useEffect, useState} from 'react'
import {  StyleSheet,  ScrollView, StatusBar, View, Text, Alert, FlatList } from 'react-native'
import { Article, Button, SearchBar } from '../componants'
import { useAtom, citiesAtom } from "../store"
import { isCity } from '../helpers/match'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const Home = () => {

  const { bottom } = useSafeAreaInsets()
  
  const [searchInput, setSearchInput] = useState("")
  const [filtredCities, setFiltredCities] = useState(cities)
  const initialCities = filtredCities
  const [cities, setCities] = useAtom(citiesAtom)

  const [refreshing, setrefreshing] = useState(false)

  useEffect(() => {
    if (searchInput) {
      setFiltredCities([...initialCities,...cities]) // on test la recherche en minuscule et sans les espaces en début et en fin
      setrefreshing(false)
    } else {
      setFiltredCities(cities)
      setrefreshing(false)
    }
  }, [searchInput,refreshing])

  useEffect(() => { setFiltredCities(cities) },[cities])

  const addCity = () => {
    isCity(searchInput) && setCities([searchInput.toLowerCase().trim(), ...cities])
    createAlert(isCity(searchInput))
  } //on ajoute la nouvelle Ville en début de liste
  
  const createAlert = (isOk) => {
    isOk ?
    Alert.alert(
      "Ajout nouvelle ville",
      `${searchInput} a bien été ajouté à votre liste de ville`,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    ) 
    : Alert.alert(
      "Ajout nouvelle ville",
      `${searchInput} n'est pas une ville valide`,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    ) 
  }

  const onDelete = (el) => {
    setCities((cities => cities.filter(city =>  city !== el )))
  }

  const renderItem = ({ item }) => <Article city={item} onDelete={() => onDelete(item)}></Article>;

  return (
    <View style={{...styles.container, paddingBottom: bottom}}>
      <SearchBar onChange={setSearchInput} />
      {filtredCities?.length !== 0 &&
        <FlatList
          data={filtredCities}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          refreshing={refreshing}
          onRefresh={() => setrefreshing(true)}
        />
      }
      {filtredCities?.length === 0 &&
        <>
          <Text style={styles.text}>Voulez-vous ajouter {searchInput.trim()} à vos villes?</Text>
          <View style={styles.actions}>
          <Button label='OUI' onPress={() => addCity()} />
          <Button label='NON' onPress={() => setFiltredCities(cities)} />
          </View>
        </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  scrollView: {
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'semi-bold',
    letterSpacing: 0.25,
    marginHorizontal: 50,
    marginVertical: 30
  },
})