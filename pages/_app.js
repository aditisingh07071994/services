// pages/_app.js
import '../styles/globals.css';
import { AuthProvider } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceModal from '../components/ServiceModal'; // <-- 1. Import the modal

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        
        <Footer />
        
        <ServiceModal /> {/* <-- 2. Render the modal here */}
      </div>
    </AuthProvider>
  );
}