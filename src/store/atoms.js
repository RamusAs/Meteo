import { atom, useAtom } from "jotai"
// exemple d'utilisation avec persistence dans le localStorage :
// export const countAtom = atomWithLocalStorage("count", 0)

// dans un composant fonction qui a besoin de countAtom :
// import { useAtom, countAtom } from "store"
// ...
// const [count, setCount] = useAtom(countAtom) // <= s'utilise comme un useState

export const atomWithLocalStorage = (key, initialValue) => {
  const getInitialValue = () => {
    const item = localStorage.getItem(key)
    if (item !== null) {
      return JSON.parse(item)
    }
    return initialValue
  }
  const baseAtom = atom(getInitialValue())
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue = typeof update === "function" ? update(get(baseAtom)) : update
      set(baseAtom, nextValue)
      localStorage.setItem(key, JSON.stringify(nextValue))
    }
  )
  return derivedAtom
}

const citiesList = ["paris", "poitiers", "nantes", "cholet", "lille", "cergy", "bordeaux", "montpellier", "biarritz"]
export const citiesAtom = atom(citiesList)

export { useAtom }