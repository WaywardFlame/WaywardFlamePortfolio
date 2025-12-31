import { SocialContainer, SocialItem } from "./SocialLinks";
import "../CSS/About.css"

function About() {
    return (
        <div className="PageContainer">
            <div className="SocialDivContainer">
                <div className="ProfileDivContainer">
                  <img id="ProfileImage" src="Social Logos/MyFaceDec2025.jpg" alt="Profile Image" />
                </div>
                <SocialContainer pageLink="/" pageName="HOME">
                    <SocialItem socialURL="https://waywardflame.itch.io/" imagePath="Social Logos/itch io icon.png" />
                    <SocialItem socialURL="https://www.youtube.com/@WaywardFlame" imagePath="Social Logos/yt_icon_red_digital.png" />
                    <SocialItem socialURL="https://bsky.app/profile/waywardflame.bsky.social" imagePath="Social Logos/bluesky logo.png" />
                    <SocialItem socialURL="https://www.linkedin.com/in/brian-statom-33a351250" imagePath="Social Logos/linkedin logo.png" />
                    <SocialItem socialURL="https://www.github.com/WaywardFlame" imagePath="Social Logos/github logo.png" />
                </SocialContainer>
            </div>
            <div className="AboutMeContainer">
                <p className="HeadingText">ABOUT ME</p>
                <div className="AboutBackground">
                    <p className="AboutText">My name is Brian T. Statom, otherwise known as WaywardFlame.</p>
                    <p className="AboutText">I am a game / software developer, and I am a computer science graduate from the University of Texas at San Antonio who constantly strives to bring my best work ethic and methodical mindset to whatever I may work on, or whomever I may work for. I previously developed a few simple games, and am presently working on some software projects. If would like to see my resume, then let me know.</p>
                    <p className="AboutText">With that said, know that I am a very big gamer, and that I would be more than happy to discuss a variety of games with you. My favorite games include The Legend of Zelda series, FromSoftware’s Souls games, the Monster Hunter series, The Elder Scrolls series, and more.</p>
                    <p className="AboutText">I also have quite the soft spot for basset hounds, so feel free to send pictures of your basset hound if you have one.</p>
                </div>
            </div>
        </div>
    );
}

export default About;