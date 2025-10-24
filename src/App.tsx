import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import CareerQuiz from "./pages/CareerQuiz/CareerQuiz";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import ProfessionsPage from "./pages/ProfessionsPage/ProfessionsPage";
import StoriesPage from "./pages/StoriesPage/StoriesPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/professions" element={<ProfessionsPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/quiz" element={<CareerQuiz />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
