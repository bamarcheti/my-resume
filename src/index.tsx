import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
