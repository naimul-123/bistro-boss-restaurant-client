import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import '@smastrom/react-rating/style.css';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
	const location = useLocation();
	const isLogInPage = location.pathname.includes('login');

	return (
		<div className='max-w-screen-2xl mx-auto'>
			{isLogInPage || <Navbar />}
			<Outlet />
			{isLogInPage || <Footer />}
		</div>
	);
}

export default App;
