import { configureStore } from "@reduxjs/toolkit"
import PlaylistSlice from "./PlaylistSlice"
import LikedSlice from "./LikedSlice"
import { loadFromLocalStorage, saveToLocalStorage } from "./localstorage"

// Load state from localStorage
const preloadedState = {
  playlist: loadFromLocalStorage("playlist") || [],
  liked: loadFromLocalStorage("liked") || []
}

export const store = configureStore({
  reducer: {
    playlist: PlaylistSlice,
    liked: LikedSlice
  },
  preloadedState
})

// Subscribe to store changes
store.subscribe(() => {
  saveToLocalStorage("playlist", store.getState().playlist)
  saveToLocalStorage("liked", store.getState().liked)
})
