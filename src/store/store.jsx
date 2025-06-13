import { configureStore } from "@reduxjs/toolkit";
import professionsSlice from "./slices/professionsSlice"
import quizSlice from './slices/quizSlice'

const store = configureStore({
  reducer: {
    professions: professionsSlice,
    quiz: quizSlice,
  }
})

export default store