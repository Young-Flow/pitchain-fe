import { BrowserRouter, Route, Routes } from 'react-router';
import Landing from '@pages/Landing';
import DefaultLayout from '@widgets/Layout/DefaultLayout';
import SignLayout from '@widgets/Layout/SignLayout';
import SocialLogin from '@pages/sign/SocialLogin';
import SocialCallback from '@pages/sign/SocialCallback';
import BusinessSignIn from '@pages/sign/BusinessSignIn';
import BusinessSignUp from '@pages/sign/BusinessSignUp';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Landing />} />
        </Route>

        <Route path="/sign/:provider/callback" element={<SocialCallback />} />

        <Route path="/sign" element={<SignLayout />}>
          <Route path="inBusiness" element={<BusinessSignIn />} />
          <Route path="upBusiness" element={<BusinessSignUp />} />
          <Route path="SocialLogin" element={<SocialLogin />} />
        </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
