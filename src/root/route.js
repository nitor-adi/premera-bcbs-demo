import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portal" element={<Home />}>
                    <Route path="facet-summary" element={<Home />} />
                    <Route path="plan-summary" element={<Home />} />
                    <Route path="verification" element={<Home />} />
                    <Route path="final-summary" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
