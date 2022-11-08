import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Lists from './pages/Lists/Lists';
import Hotel from './pages/Hotel/Hotel';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hotels" element={<Lists />} />
                <Route path="/hotels/:id" element={<Hotel />} />
            </Routes>
        </div>
    );
}

export default App;
