import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './Store/store';
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import Room1 from './Component/Room1';
import Room2 from './Component/Room2';
import Room3 from './Component/Room3';
import Room4 from './Component/Room4';
import Room5 from './Component/Room5';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LampShop from './Component/LampShop';
import LookBook from './Pages/LookBook';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';
import Journal from './Pages/Journal';
import JournalOne from './Component/JournalOne';

function AppContent() {
  const cart = useSelector(state => state.cart);

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room1" element={<Room1 />} />
        <Route path="/room2" element={<Room2 />} />
        <Route path="/room3" element={<Room3 />} />
        <Route path="/room4" element={<Room4 />} />
        <Route path="/room5" element={<Room5 />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/lampShop" element={<LampShop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/lookbook" element={<LookBook />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journalOne" element={<JournalOne />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;

