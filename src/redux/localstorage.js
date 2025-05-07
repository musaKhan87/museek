export const saveToLocalStorage = (key, value) => {
    try {
      const serialized = JSON.stringify(value)
      localStorage.setItem(key, serialized)
    } catch (e) {
      console.warn("Could not save", e)
    }
  }
  
  export const loadFromLocalStorage = (key) => {
    try {
      const serialized = localStorage.getItem(key)
      if (serialized === null) return undefined
      return JSON.parse(serialized)
    } catch (e) {
      console.warn("Could not load", e)
      return undefined
    }
  }
  