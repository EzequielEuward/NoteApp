import { Navigate, Route, Routes } from "react-router-dom";
import { JournalPage } from "../pages/JournalPage";
import TodoPage from "../../todo/pages/TodoPage";


export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />
      <Route path="todo" element={<TodoPage />} /> 
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}