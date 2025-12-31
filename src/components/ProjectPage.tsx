import { Link } from "react-router-dom";
import { ProjectPreviewList, ProjectPreviewItem } from "./ProjectPreview";
import "../CSS/ProjectPage.css";

function ProjectPage() {
    return (
        <div className="ProjectsDisplay">
            <p className="HeadingText">All of the projects that I have worked on. You can return to the home page <Link to="/">{"-->here.<--"}</Link></p>
            <ProjectPreviewList>
                <ProjectPreviewItem previewTitle="Ultra Gangster: A Twin Stick Shooter Game" previewText="A simple game I made while trying to learn Godot and C#." imagePath="Project Pictures/Ultra Gangster 2D/UltraGangster2DPic.png" />
                <ProjectPreviewItem previewTitle="The Steel Hearted" previewText="A simple turned based game I made as part of a game programming class." imagePath="Project Pictures/SteelHeartedPic.png" />
                <ProjectPreviewItem previewTitle="Aria of the Steel Hearted" previewText="Builds upon the world I came up before working on The Steel Hearted." imagePath="Project Pictures/Aria Script Preview.png" />
                <ProjectPreviewItem previewTitle="Tournament of the Steel Hearted" previewText="A game I planned on making to better flesh out the mechanics and world of The Steel Hearted before properly beginning work on Aria." imagePath="Project Pictures/Tournament Of The Steel Hearted Pics/MainMenu.png" />
            </ProjectPreviewList>
        </div>
    );
}

export default ProjectPage;