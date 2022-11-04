import {useEffect, useState, useCallback} from 'react'
import {  StyleSheet,  ScrollView, StatusBar, SafeAreaView, View, Text, Alert } from 'react-native'
import { Article, Button, SearchBar, SwipeToDelete } from '../componants'
import { useAtom, citiesAtom } from "../store"
import { isCity } from '../helpers/match'

export const Home = () => {
  const [searchInput, setSearchInput] = useState("")
  const [filtredCities, setFiltredCities] = useState(cities)
  const [cities, setCities] = useAtom(citiesAtom)

  useEffect(() => {
    if (searchInput)
      setFiltredCities(cities.filter((city) => city.match(searchInput.toLowerCase().trim()))) // on test la recherche en minuscule et sans les espaces en début et en fin
    else setFiltredCities(cities)
  }, [searchInput])

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

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onChange={setSearchInput} />
      {filtredCities?.length !== 0 &&
        <ScrollView contentContainerStyle={styles.scrollView}>
          {filtredCities?.map((_, key )=> <Article city={_} key={key} onDelete={console.log('delete')}></Article>)}
        </ScrollView>
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
    </SafeAreaView>
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