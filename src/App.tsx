import { BrowserRouter, Route, Routes } from 'react-router';
import Landing from './pages/Landing';
import DefaultLayout from './widgets/default/DefaultLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
