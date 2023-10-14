import { Route, Routes } from 'react-router-dom';
// import MainLayout from './components/MainLayout/MainLayout/MainLayout.jsx';
// import ErrorPage from './pages/ErrorPage/ErrorPage';
import MainPage from './pages/MainPage/MainPage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import ChoosedDay from './components/ChoosedDay/ChoosedDay';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/user" element={<UserProfilePage />} />
      <Route path="/calendar" element={<CalendarPage />}>
        {/* <Route path="month/:currentDate" element={<ChoosedMonth />} /> */}
        <Route path="day/:currentDay" element={<ChoosedDay />} />
      </Route>

      {/* <Route path="/" element={<MainLayout />}> */}
      {/* <Route path="*" element={<ErrorPage />} /> */}
      {/* </Route> */}
    </Routes>
  );
}
export default App;
// <AppWrapper>
// </AppWrapper>
