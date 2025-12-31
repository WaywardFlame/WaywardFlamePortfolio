import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.tsx'
import About from "./components/About.tsx";
import ProjectPage from "./components/ProjectPage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<ProjectPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;