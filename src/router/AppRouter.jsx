import { Routes, Route, Navigate} from "react-router-dom";
import { CalendarPage } from "../calendar";
import { LoginPage } from "../auth";
import { RegisterPage } from "../register/pages/RegisterPage";

export const AppRouter = () => {
  const authStatus = "not-authenticated";

  return (
    <Routes>
      {
       (authStatus === "not-authenticated")        
       ? <Route path="/auth/*" element={<LoginPage />} />
       : <Route path="/*" element={<CalendarPage />} />      
      }
        <Route path="/*" element={<Navigate to="/auth/login" />} /> 
        
        <Route path="/register" element={ <RegisterPage /> } />
    </Routes> 
  );
};
