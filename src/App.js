import './App.css';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import About from './components/about';
import ContactUs from './components/contactUs';
import Shop from './components/shop';
import Skills from './components/skills';
import Stories from './components/stories';
import FilterBar from './components/filterBar';
import FilterDropdown from './components/filterDropdown';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <FilterBar />
      <FilterDropdown/>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
