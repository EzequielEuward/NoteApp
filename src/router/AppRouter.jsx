import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui/';
import { useCheckAuth } from '../hooks';
import { SecurityPolicy } from '../journal/pages/SecurityPolicyPage'; 
import {HomePage} from '../house/page/HomePage';

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>
      <Route path="/security-policy" element={<SecurityPolicy />} />

      {
        (status === 'authenticated')
          ? (
            <>
              <Route path="/noteApp/*" element={<JournalRoutes />} />
              <Route path="/*" element={<Navigate to="/noteApp" />} />
            </>
          )
          : (
            <Route path="/auth/*" element={<AuthRoutes />} />
          )
      }

      <Route path="/*" element={<HomePage />} />
    </Routes>
  )
}
