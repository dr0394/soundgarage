import { useRouter } from './components/Router';
import App from './App';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

export default function AppRouter() {
  const { currentPath } = useRouter();

  if (currentPath === '/impressum') {
    return <Impressum />;
  }

  if (currentPath === '/datenschutz') {
    return <Datenschutz />;
  }

  return <App />;
}
