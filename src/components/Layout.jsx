import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import SearchBar from './SearchBar';

const Layout = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <Navbar onSearchOpen={() => setIsSearchOpen(true)} />
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;

