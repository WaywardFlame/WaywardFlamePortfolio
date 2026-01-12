import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.tsx'
import About from "./components/About.tsx";
import ProjectPage from "./components/ProjectPage.tsx";
import { AriaOfTheSteelHearted, CloudComputingResearchPaper, DatabaseSystemsDesignProject, GameDevelopmentUnityProjects, GameProgrammingProjects, SoftwareEngineeringAndroidProject, TheSteelHearted, TournamentOfTheSteelHearted, UltraGangster2D, UltraGangster3DPrototype, UserInterfacesUnityProject, WebTechAssignments } from "./components/IndividualProjects.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<ProjectPage/>} />
                <Route path="/projects/Ultra Gangster: A Twin Stick Shooter Game" element={<UltraGangster2D/>} />
                <Route path="/projects/The Steel Hearted" element={<TheSteelHearted/>} />
                <Route path="/projects/Aria of the Steel Hearted" element={<AriaOfTheSteelHearted/>} />
                <Route path="/projects/Tournament of the Steel Hearted" element={<TournamentOfTheSteelHearted/>} />
                <Route path="/projects/Game Programming Golang Projects" element={<GameProgrammingProjects/>} />
                <Route path="/projects/Game Development Unity Projects" element={<GameDevelopmentUnityProjects/>} />
                <Route path="/projects/Ultra Gangster 3D" element={<UltraGangster3DPrototype/>} />
                <Route path="/projects/User Interfaces Unity Project" element={<UserInterfacesUnityProject/>} />
                <Route path="/projects/Software Engineering Android Project" element={<SoftwareEngineeringAndroidProject/>} />
                <Route path="/projects/Web Technologies Assignments" element={<WebTechAssignments/>} />
                <Route path="/projects/Database Systems Design Project" element={<DatabaseSystemsDesignProject/>} />
                <Route path="/projects/Cloud Computing Research Paper" element={<CloudComputingResearchPaper/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;