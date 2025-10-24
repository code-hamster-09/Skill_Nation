import { configureStore } from "@reduxjs/toolkit";
import professionsSlice from './slices/professionsSlice'
import quizSlice from './slices/quizSlice'

const store = configureStore({
  reducer: {
    professions: professionsSlice,
    quiz: quizSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store