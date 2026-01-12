import "../CSS/IndividualProjects.css";
import { AriaOfTSHPics, CloudComputingPaperPics, DatabaseSystemsPics, GameDevUnityProjectPics, GameProgrammingPics, SoftwareEngineeringAndroidProjectPics, TheSteelHeartedPics, TournamentOfTSHPics, UltraGangster2DPics, UltraGangster3DRemakePics, UnityUIProjectPics, WebTechPics } from '../Photos';
import ProjectTemplate from "./ProjectTemplate";

export function UltraGangster2D(){
    return (
        <ProjectTemplate heading="Ultra Gangster: A Twin Stick Shooter Game" pics={UltraGangster2DPics}>
            <p>Description: “Ultra Gangster: A Twin Stick Shooter Game” is, as the name clearly states, a twin shooter game. As part of trying to learn how to develop games using Godot, I ended up creating this game. It’s a relatively simple twin stick shooter that features 5 levels, and should take no more than 10 to 20 minutes to complete. As you progress through the game, you will unlock various weapons and items to use as you progress. The game features controller support, so you can use a controller if you wish.</p>
            <p>Information: Back in summer of 2024, I really wanted to learn how to make a game, and finally decided it was time to begin learning. I chose Godot specifically because of the debacle with Unity regarding charging per installation of a game (which I didn’t want to deal with at all), and also because Godot is / was an up and coming game engine that was growing in popularity. Another reason why I chose Godot as well was because it recently adopted official support for C#, which I was eager to learn at the time, so it seemed like a win-win considering the circumstances. As for the game itself, I chose to make a twin stick shooter because I had an idea in my head that I really liked about a potential twin stick shooter game (think a cyberpunk setting featuring a vampire hunter and time travel), and figured I should make something like that before getting started on that idea. With that in mind, despite the fact that Ultra Gangster is a mechanically simple game, having to learn a game engine, a new programming language, creating the art and animations, and just generally doing everything myself made the game’s development quite challenging, and I ended up cutting a lot from this prototype of a game. Still, I managed to get the game to a finished state, and I definitely learned a lot about game development as a result.</p>
            <p>Where To Get / Find: The game is available completely for free on itch.io. You can check out the game <a href="https://waywardflame.itch.io/ultra-gangster-a-twin-stick-shooter-game" target="_blank">{"-->here.<--"}</a></p>
            <p>If you would like to, you may view the game's source code on <a href="https://github.com/WaywardFlame/Ultra-Gangster-A-Twin-Stick-Shooter-Game" target="_blank">{"-->GitHub.<--"}</a></p>
            <p>
                Credits:<br/>
                <br/>
                modular - Menu Sounds 1<br/>
                Levi Vilas Boas - Heavy 8-bit Explosions<br/>
                Dryoma - Footsteps sounds<br/>
                SnakeF8 - Snake's Authentic Gun Sounds<br/>
                SnakeF8 - Snake's SECOND Authentic Gun Sounds Pack
            </p>
        </ProjectTemplate>
    );
}

export function TheSteelHearted(){
    return (
        <ProjectTemplate heading="The Steel Hearted" pics={TheSteelHeartedPics}>
            <p>Description: The Steel Hearted is a turn-based mech game. Players can explore a select few star systems, and fight enemies in order to eventually upgrade their mech for greater combat prowess. Mechs come with 'support cores', tools that alter a mech's move set, and which allow for more varied combat.</p>
            <p>Information: Shortly after completing Ultra Gangster 2D, I started thinking about what game I could make next. Originally, I planned on making another twin stick shooter after Ultra Gangster, but decided against it after the numerous struggles that I had faced making the game. Thus, what I wanted to make was a much more static game that would allow me to better control what happens, as well as when it would happen, and so I figured that I would make a turned based RPG of sorts. At the same time, I wanted to make something a little different from other turn based RPGs, which led me to wanting to make a combat system centered around a customizable mech that could swap out various "support cores" on the fly for the purposes of changing its moveset / abilities. I rather liked that idea, and after letting my imagination run wild for a little bit, I decided that I wanted to tell a story as well, and the world that I created in my head for that story was something that I quickly grew attached to, and which I felt could make for a genuinely engaging narrative experience without compromising on the gameplay, or proving too great in scope for me to reasonably handle. Thus, I started writing a script for that story / world near the end of the summer of 2024. That story and world would go on to become "Aria of the Steel Hearted".</p>
            <p>If you would like to learn more about Aria, then feel free to go visit its page, but what I will say here is that I was not able to finish the script until around the summer of 2025. University gave me a lot of work, so I chose to focus on that, rather than on the script. Still, the ideas persisted, and I figured that I could use some of the ideas that I had for the final project for my Fundamentals of Game Programming course from the Fall of 2024. This is where "The Steel Hearted" came from.</p>
            <p>Essentially, my game programming course had me learning how to use the Go programming language, alongside the raylib graphics library, and I rather enjoyed my time working with both of them, Go especially. I would love to work Go again in the future, although it doesn't appear to be in quite as much demand as say C#, Java, JavaScript, etc, so I haven't focused on Go as much as what I would have liked to in the past few months, but I digress. For the project, I had many ideas as to what direction I could take it in, as the final project was essentially left almost entirely up to me, but due to various time constraints (i.e. other classes and projects taking up all of my time), I wasn't able to fit in everything that I wanted. In fact, what you see is the result of about 20 hours of work spread across three days, despite having been given a month to work on the project. I didn't set my ambitions too high, it was really just a case of not having enough time due to the demands of other classes. All that said, the end result isn't really that bad, and I would like to think that I at least got the core of what I wanted into the game in the end, and the professor said I did a good job as well. I wish I could have done more, but I can't do anything about that now. Besides, that is what Aria and Tournament are for.</p>
            <p>Where To Get / Find: The game is available completely for free on itch.io. You can check out the game <a href="https://waywardflame.itch.io/the-steel-hearted" target="_blank">{"-->here.<--"}</a></p>
            <p>If you would like to, you may view the game's source code on <a href="https://github.com/WaywardFlame/The-Steel-Hearted" target="_blank">{"-->GitHub.<--"}</a></p>
            <p>Credits:<br/>
                Helton Yan - Various Battle Sound Effects <br/>
                SondreDrakensson - Stasis (music for space) <br/>
                ValentinSosnitskiy - CosMo <br/>
                Vrymaa - Nihil Inanis <br/>
                LagMusics - space heavy metal <br/>
                Victor_Natas - Numb from fear <br/>
                moludar - Various Menu Sound Effects
            </p>
        </ProjectTemplate>
    );
}

export function AriaOfTheSteelHearted(){
    return (
        <ProjectTemplate heading="Aria of the Steel Hearted" pics={AriaOfTSHPics}>
            <p>Information: Shortly after completing Ultra Gangster 2D, I started thinking about what game I could make next. Originally, I planned on making another twin stick shooter after Ultra Gangster, but decided against it after the numerous struggles that I had faced making the game. Thus, what I wanted to make was a much more static game that would allow me to better control what happens, as well as when it would happen, and so I figured that I would make a turned based RPG of sorts. At the same time, I wanted to make something a little different from other turn based RPGs, which led me to wanting to make a combat system centered around a customizable mech that could swap out various "support cores" on the fly for the purposes of changing its moveset / abilities. I rather liked that idea, and after letting my imagination run wild for a little bit, I decided that I wanted to tell a story as well, and the world that I created in my head for that story was something that I quickly grew attached to, and which I felt could make for a genuinely engaging narrative experience without compromising on the gameplay, or proving too great in scope for me to reasonably handle. Thus, I started writing a script for that story / world near the end of the summer of 2024. That story and world would go on to become "Aria of the Steel Hearted".</p>
            <p>I can say without a doubt that Aria is something that I hold dear to my heart. The story and world that I have in mind is something that I am very much passionate about, and which I hope to bring to fruition some day, if not in the form of a video game, then at least in the form of a novel. At the time of writing, the script is finished, although I have no plans to show it off at this time, primarily because I want to save it for the game.</p>
            <p>With all that said, what is the world like? The gist of is that it is the year 2431 C.E., and humanity has been embroiled in constant war with themselves and a few alien nations for the past century.</p>
            <p>What is the story supposed to be about? The script that I have written covers what I plan to be the opening / prologue to a larger overarching story. Essentially (and without spoiling anything), two mech pilots from the United Nations of Earth are sent on a covert mission to Pluto in order to stop an enemy mech pilot from infiltrating the military base there, and then stealing a newly created weapon of mass destruction. When the two arrive, they are greeted by an empty military base littered with monstrosities, and so they must work to stop the monstrosities.</p>
            <p>What is the game itself supposed to be like? Aria of the Steel Hearted is to be a science fiction turn based role playing game in which the player controls a giant robot, a mech, and completes various missions using that mech. In a manner of speaking, the game can essentially be viewed as Armored Core (a mech game) meets Persona (a turn based RPG), in which the player can customize the mech as they see fit before heading out to complete missions (the Armored Core element), and then outside of missions they can interact with various characters to develop deeper relationships with those characters (the Persona element). Ultimately, I wanted a game that addressed some issues I had with Armored Core, such as the lack of side missions and a more freeform gameplay loop, and I wanted to play another game with a meaningful social simulator element to it, like what Persona (Persona 5 specifically) had. I also wanted a game that addressed issues that I had with other story driven RPGs, or just story driven games in general, such as Mass Effect and Baldur's Gate 3, by offering gameplay that was more than just serviceable, and having more structured, meaningful, and clearly defined RPG elements. I also wanted a main character that the player could customize, but which would still be their own character in the story, and not just a stand in for the player.</p>
            <p>Before getting started on Aria, however, I really wanted to create and refine the combat system that was planned to be in the game, and so I went about designing and attempting to create Tournament of the Steel Hearted first after finishing the script.</p>
        </ProjectTemplate>
    );
}

export function TournamentOfTheSteelHearted(){
    return (
        <ProjectTemplate heading="Tournament of the Steel Hearted" pics={TournamentOfTSHPics}>
            <p>Description: I am / was planning to make a game called Aria of the Steel Hearted, which is intended to be a more narrative driven sci fi turn based role playing game, with customizable mechs as the heart and center of the game's gameplay, specifically its combat. The larger game itself can be thought of as Armored Core meets Persona, with some sprinkling of Dune and a touch of Evangelion thrown in for good measure. With that in mind, although I have already written the script for that game's opening, I don't want to start development until I have a good system ready for the mecha combat and customization, and thus the “Tournament of the Steel Hearted” was born.</p>
            <p>In its current state, it really isn't that impressive, and it will unfortunately have to stay that way for the time being since I plan to work on a variety of software projects instead, because although this is a neat and fun passion project for me, I need a job, and this wasn't helping matters, unfortunately. It is what it is, I suppose, and I at least do appreciate programming outside of just game development, so it's not all bad. Anyways, I do have a design document written for this game, and I will provide the first page and a half here to help provide understanding of what the game would be like. Also, as you may gather from looking at the screenshots, I am not using Godot for this game or Aria, but I am instead using the Unity engine, as I happened to learn a fair bit about Unity as part of a game development course I took. I actually enjoyed using Unity a lot more than I did Godot, and since Unity has, for now, done away with charging per installation of a game, I've decided to use Unity for current and potential future game projects.</p>
            <p>
                Goals: -----<br/><br/>
                The ultimate goal of “Tournament of the Steel Hearted” is to create and introduce the mecha combat and customization that will be featured in “Aria of the Steel Hearted”.<br/><br/>
                A lesser goal of the game is to learn how to create and program other necessities for the eventual larger game, such as transitioning between areas, a quest system, cutscenes, dialogue, etc., but all in a much more contained and experimental manner.<br/><br/>
                Another goal of this game is to introduce the world of the larger game, and thus see how people respond to some of the narrative and lore implications that were set up and created.<br/><br/>
                The final goal of this game is to see how people respond to the game's combat system, and thus to make tweaks according to their feedback in order to make the combat as good as it possibly could be.
            </p>
            <p>
                Story: -----
                <br/><br/>
                His majesty, Aureus, the Radiant Emperor, has ordered the creation of a grand tournament to entertain the people, and is seeking combatants to join and find glory in the midst of battle. Their weapons? Mechs. Their prize? Whatever they desire. You are to be one such combatant, albeit, not by choice. You are an individual who was pressed into his majesty's gladiatorial service, and who must now rise the ranks in order to enter the tournament and have a chance at freedom.
            </p>
            <p>
                Gameplay: -----
                <br/><br/>
                In order to qualify for the tournament, the player must successfully complete 4 gladiatorial bouts, each with three battles, with the player having to face progressively harder enemies. After completing each bout, the player is awarded currency, with which they can purchase new parts for their mechs, and new mech parts are unlocked for them to purchase from a shop as well. The player can redo previous bouts for additional, though lessened, currency if they want to.
                <br/><br/>
                What does customization do? Aside from changing the mech's appearance, most of the customizable parts that the player can acquire only changes very little of the mech, such as some stats, and perhaps a couple of moves, with one big exception: support cores. Support cores can massively change how your mech operates, and what moves are available to it, and are essentially one of the defining features of the game's combat system.
                <br/><br/>
                Other features? Starting in the second bout, the emperor will start to watch the player's fights, and may change how both parties need to fight at random, such as through introducing turrets, monsters, buffs and debuffs, etc. After the second bout, the emperor will ask for the player to join them for dinner (a narrative tool), and the player will gain access to special contracts in which they take down a specific opponent for a special prize from the emperor. Completing all contracts before the final fight will result in a different ending. 
                <br/><br/>
                So, what is the loop like? Customize mech → Fight in the bout → Earn Money → Repeat.
            </p>
        </ProjectTemplate>
    );
}

export function GameProgrammingProjects(){
    return (
        <ProjectTemplate heading="Game Programming Golang Projects" pics={GameProgrammingPics}>
            <p>During my Game Programming course at UTSA from Fall of 2024, I had to make a variety of simple games as part of learning how to program games. Every game / program was programmed and created using "Go" in conjuction with the "raylib" graphics library. If I remember correctly, my professor's reasoning for using Go over a language like C++ was that Go offered easier to understand syntax, was a fast and efficient language, was a relatively easy language to learn compared to others, and was something very few, if any, other classes taught at UTSA, meaning it would be a nice skill to have in context of making us stand out to potential employers in the future. I have to say: I'm glad he chose to teach us Go, as I rather loved working with the language, and would love the opportunity to work with it again in the future.</p>
            <p>
                With that said, the games in the above pictures are as follow:<br/>
                - Game 1: Asteroids Clone; a clone of the game "Asteroids". You have to stop Asteroids from hitting a planet by shooting them. Once they are destroyed, you can pick up some items to restore the planet's health.<br/>
                - Game 2: Breakout Clone; a clone of the game "Breakout". You control a paddle, and have to bounce a ball against that paddle until all of the blocks are destroyed.<br/>
                - Game 3: Dungeon Generator; a project that saw us attempt to recreate a procedural dungeon generation algorithm. Unfortunately, as may guess from the picture, I was not able to get it working properly in time.<br/>
                - Game 4: Fighting Game; a project that saw us attempt to make a two player fighting game. The purpose of this project was to showcase some art, animations, and multiplayer capabilities.<br/>
                - Game 5: Flappy Bird; a very basic clone of the game "Flappy Bird". You control a character and attempt to avoid pipes as they appear on the screen. Unlike Flappy Bird, this does not contain jumping, just simply moving out of the way.<br/>
                - Game 6: Laser Reflection Game; a game about bouncing a laser off of some surfaces in order to hit an object. This was made as part of an in-class game jam, with the theme just being "reflection". I took that a bit literally, and made a game about reflecting lasers.<br/>
                - Game 7: Text-Based Rock Paper Scissors with a twist. Essentially, before we got started on graphics, we had to make a text-based rock-paper-scissors game, and then add our own twist onto it. My twist was that you have to defend a fortress, and you gain extra abilities on top of your standard RPS moves.<br/>
                - Game 8: Turn-Based Hero; a simple clone of the type of game you would see in mobile game ads. We move around a little blue hero one tile at a time, and run into enemies that are the same or lower level than us, defeat them, and then add their level to ours so we can take on the next enemy.
            </p>
            <p>If you would like to view video recordings of the games, you can do so <a href="https://www.youtube.com/playlist?list=PLP0ja1FKRGgIhdXuBEau9JMvAgFdAXipH" target="_blank">{"-->here.<--"}</a></p>
            <p>If you would like to view the code of the games, you can do so on <a href="https://github.com/WaywardFlame/Game-Programming-Golang-Projects" target="_blank">{"-->GitHub.<--"}</a></p>
        </ProjectTemplate>
    );
}

export function GameDevelopmentUnityProjects(){
    return (
        <ProjectTemplate heading="Game Development Unity Projects" pics={GameDevUnityProjectPics}>
            <p>During my Game Development course at UTSA from Spring of 2025, I had to learn how to make several projects using the Unity engine, which I must say that I rather enjoyed using, especially compared to Godot. The purpose of these projects was to teach us how to make games, particularly in Unity, and so that we would be prepared for the course's eventual final project. With that in mind, the projects themselves aren't really that interesting, but I think they are still neat in that they show off that I can make some stuff with Unity.</p>
            <p>
                With that said, the games in the above pictures are as follow:<br/>
                - Game 1: Endless Runner Project; a simple 3D game to show that we can take an idea, and then turn it into something tangible. It is an endless runner, where we have to avoid randomly spawning obstacles, in this case lasers and walls. The purpose of this project was also show that make a basic 3D model using Blender.<br/>
                - Game 2: First POV Project; the purpose of this project was for us to figure out how to create first person camera, alongside first person movement. On top of this, we had to figure out how to create some basic AI, item collection, and sounds. Like last time, this involved some basic use of Blender for 3D models.<br/>
                - Game 3: Simple Dungeon Crawler Project; a simple game where you have to collect a key, take it to a door, then leave. The purpose of this project was to practice a bit of 3D modelling again, as well as figure out tile-based movement in a 3D setting, and just dive a bit further into collision.
            </p>
            <p>If you would like to view video recordings of the projects, you can do so <a href="https://www.youtube.com/playlist?list=PLP0ja1FKRGgL7c1BDSOqdsAwj9jOqiX2k" target="_blank">{"-->here.<--"}</a> Do note that the playlist contains two somewhat unrelated videos.</p>
        </ProjectTemplate>
    );
}

export function UltraGangster3DPrototype(){
    return (
        <ProjectTemplate heading="Ultra Gangster 3D Prototype" pics={UltraGangster3DRemakePics}>
            <p>Near the end of my Game Development course at UTSA from Spring of 2025, I had to make a final project that was larger in scope than the previous projects in that class. Given that I was busy with other classes at the time, I decided to try remaking my previous game, Ultra Gangster: A Twin Stick Shooter, in 3D as a first person shooter game. As you can probably tell from looking at the images, and comparing the game to the 2D version, I was not able to get the game into a properly finished state in time, hence my decision to refer to the game as a prototype, as well as not release it anywhere, aside from putting its code up on <a href="https://github.com/WaywardFlame/Ultra-Gangster-3D-Prototype" target="_blank">{"-->GitHub.<--"}</a> All things considered given the circumstances I was faced with at the time, I wouldn't say it turned out too bad, but I definitely wish I could have done more, but it is what it is.</p>
            <p>The first several images show the game off, with the last one showcasing something I had accidentally made happen, and which I thought was funny. If you would like to view recordings of both, you may do so <a href="https://www.youtube.com/playlist?list=PLP0ja1FKRGgL7c1BDSOqdsAwj9jOqiX2k">{"-->here<--"}</a> and refer to the first two videos.</p>
        </ProjectTemplate>
    );
}

export function UserInterfacesUnityProject(){
    return (
        <ProjectTemplate heading="User Interfaces Unity Project" pics={UnityUIProjectPics}>
            <p>During the spring of 2025, I was taking a User Interfaces course at UTSA. As part of that course, I had to work on a semester long project with a few other people, with the project itself being left up to us so long as it displayed a strong focus on UI / UX. What we decided to do was to develop a Unity project, specifically a turn based RPG, since we were all taking / had taken game development at UTSA, and so figured that a Unity project would help all of us with both classes. I would say that given what we were working with, and focusing on just the UI elements, it turned out fairly well. We managed to create something that was functional, something that was inline with what we all wanted to make, something that could be played from start to finish, and, mostly importantly, create some proper UI (so long as you don't consider accessibility too much, screen readers in particular).</p>
            <p>As for my role in the project, I found myself playing the part of the de facto programmer of our group. Indeed, most of the code was, from what I remember, written by me, although a couple others definitely contributed a lot to the programming. For the UI itself, while I did not design a whole lot, I did program the quest menu, battle menu, and shop menu (all shown above), and got them into working states. The world that you see in the background was also created by me. In fact, I will say that a lot of what I ended up learning throughout this project, in terms of programming, I would happen to carry over to other projects in my Game Development course, or in my personal time, such Tournament of the Steel Hearted.</p>
            <p>With all of that said, I enjoyed my time working on the project, especially with the others in my group, and I hope they are all doing well in their own endeavors. Definitely a worthwhile experience. If you would like to, you view our source code on <a href="https://github.com/WaywardFlame/User-Interfaces-Unity-Project" target="_blank">{"-->GitHub.<--"}</a> If you would like to view a video recording of the game, then you may do so <a href="https://www.youtube.com/watch?v=0Pjk3AAs9vI" target="_blank">{"-->here.<--"}</a></p>
        </ProjectTemplate>
    );
}

export function SoftwareEngineeringAndroidProject(){
    return (
        <ProjectTemplate heading="Software Engineering Android Project" pics={SoftwareEngineeringAndroidProjectPics}>
            <p>This is a project that myself and the others listed above worked on together as part of our Software Engineering class at UTSA during Fall 2024. The ultimate idea behind this project was for us to learn and practice the AGILE methodology, and not so much to actually make anything. I could say more about that, but that isn't relevant, so I won't.</p>
            <p>Explanation: As part of our Software Engineering class, we were assigned into groups, and made to work on a semester long project together. As part of the software development process, we had to brainstorm ideas for applications that we could feasibly make, then collect data and requirements from other people in the class in order to better build our chosen idea.</p>
            <p>What my group ultimately settled on was developing a car rental application for Android OS devices. With regards to the AGILE process itself, we had to plan out the project development across four sprints, each about 2 to 3 weeks in length, and try our best to employ various AGILE practices in that time. As the others would likely tell if you asked them, we couldn't make the AGILE methodology work for us, so we largely ignored it until it was required for an assignment or deliverable. This largely came down to time constraints as a result of other assignments in the class, or projects from other classes. I'll say that I can see how it could work in a professional setting, but it was not appropriate for an academic setting, at least with our circumstances.</p>
            <p>Anyways, we designed the car rental application, and even got some basic functionality in, such as creating an account, and logging into the app. I myself even personally designed and implemented a SQLite database, alongside a variety of Java methods for reading and writing data from and to the database. Now, storing that database on the user's phone probably isn't the best idea, but I figured it was fine given the relatively limited scope of the project. You may some of what I did above while I was working on the project.</p>
            <p>At the end of the day, it may not be much, but we did learn a lot.</p>
            <p>Video link showcasing some database functionality: <a href="https://youtu.be/a3y5XXSpJ6A" target="_blank">{"-->YouTube.<--"}</a></p>
            <p>If you would like to view the project code, then you may do so on <a href="https://github.com/WaywardFlame/Software-Engineering-Android-Project" target="_blank">{"-->GitHub.<--"}</a></p>
        </ProjectTemplate>
    );
}

export function WebTechAssignments(){
    return (
        <ProjectTemplate heading="Web Technologies Assignments" pics={WebTechPics}>
            <p>Assignments from my Web Technologies class that I took at UTSA during Spring 2025.</p>
            <p>The purpose of these assignments was teach various web development concepts, and make sure that we at least understood the basics of web development, as the professor didn't want to teach us any one specific tool or technology in the event that the job market decided it no longer desired that skill, or in the event that a student wished to pursue a different web dev skill. Basically, teach us the concepts so that we have the capacity to learn any web dev skill. As such, the assignments included involve a fair bit of HTML, CSS, JavaScript, and even PHP, but do not involve stuff such as React or Node.</p>
            <p>Explanation of each assignment (not all assignments have pictures):</p>
            <p>Assignment 1 --- Assignment 1 saw us having to learn HTML, as we figure out creating a document-like structure. I chose to base my writing on The Elder Scrolls 3: Morrowind, as I had just finished playing the game a couple months before class started, and I really enjoyed my time with it.</p>
            <p>Assignment 4 --- From what I remember, we were given a site, then were told that we had to fix that site in accordance with a provided set of desired changes. The end goal was really to make the site more presentable.</p>
            <p>Assignment 5 --- Assignment 5 saw us learning some JavaScript, which involved us creating three different functions to display three different results.</p>
            <p>Assignment 6 --- Assignment 6 saw us use JavaScript some more, but this time in conjuction with some HTML / CSS elements in order to display a variety of elements, alongside coloring those elements a variety of colors.</p>
            <p>Assignment 7 --- Assignment 7 saw us attempting to create a sliding piece puzzle using an image of the UTSA logo. We had to divide the picture into different pieces, scramble them up, and allow for user input in order to attempt to solve the puzzle.</p>
            <p>Assignment 8 --- Assignment 8 saw us learning some PHP, and essentially repeating assignment 5, only with PHP this time.</p>
            <p>Assignment 9 --- From what I remember, we had to build somewhat on assignment 8, but this time we had to use PHP to create a variety of different functions instead that would perform various operations on generated data.</p>
            <p>Assignment 10 --- Assignment 10, from what I remember, had us create a form for the user to provide input, then take that input and verify using PHP that it is in the appropriate format / structure.</p>
            <p>Assignment 11 --- Assignment 11 was split into two parts, and saw us taking a provided MySQL database, setting that up on the AWS server, and then using PHP to fetch data from the database in order to display requested data on the frontend. We didn't focus too much on the MySQL part of the assignment, as the professor felt it was outside the intended scope for us, although it was easier for me to understand this assignment because of a database systems that I had taken the previous semester.</p>
            <p>Assignment 12 --- I don't quite remember what this was supposed to be exactly, but from the looks of it, it appears we had to do some data validation using JavaScript on the frontend, instead of relying on PHP.</p>
        </ProjectTemplate>
    );
}

export function DatabaseSystemsDesignProject(){
    return (
        <ProjectTemplate heading="Database Systems Design Project" pics={DatabaseSystemsPics}>
            <p>As part of my Database Systems class at UTSA from Fall 2024, myself and a couple others were made to work on a project which would see us create a database system. At first, we thought that we had to actually create and program an actual database system, but it turned out that we just had to simply design one, not actually create an entire application. Would have been nice to know from the get go, but I digress. All things considered, I enjoyed figuring out how to design a database system, despite the aforementioned frustration, and I doubt I would mind working on one again in the future.</p>
            <p>Included on this page are some design graphs that we had to create (I created the first and third picture, from what I remember), and which showcase some of our thought process around the database that we planned on making. Speaking of which, we attempted to make, and ultimately designed, a database system regarding a University, specifically University student regisration and courses.</p>
            <p>You may view the project and some files on <a href="https://github.com/WaywardFlame/Database-Systems-Design-Project" target="_blank">{"-->GitHub.<--"}</a></p>
        </ProjectTemplate>
    );
}

export function CloudComputingResearchPaper(){
    return (
        <ProjectTemplate heading="Cloud Computing Research Paper" pics={CloudComputingPaperPics}>
            <p>Cloud computing research paper that I had to work on with others. UTSA Spring 2025.</p>
            <p>Essentially, during the Spring of 2025, I took a cloud computing class at UTSA. I would say that the class was really more conceptual, rather than anything else. It would be more accurate to say that I learned of / about cloud computing, rather than how to actually utilize cloud computing, or perform work using cloud computing services. In fairness, the professor wanted us to have the capacity to learn, and it wouldn't be fair to ask numerous college students to potentially risk spending hundreds of dollars on a variety of services / programs.</p>
            <p>That said, the research paper that we were given and made to work on in groups, though a little interesting, did cause my group and I some frustrations, alongside numerous other issues with the class. I won't go into exact details here, as it isn't especially relevant to you, but you can get an idea of our grievances by reading the introduction and conclusions to the paper.</p>
            <p>Anyways, what is the paper about? The research paper saw us research various cloud computing hardware, software, and services with the goal of upgrading / migrating a fictional company's cloud infrastructure to something better / more cost effective. Outside of that, all we were really told was that each section had to be about 2 to 3 pages long. With no real guidance from the professor, we all did our own thing, and came up with our own recommendations for each section. Regarding my own sections, I can't say whether the recommendations are good or not, as, again, with no real guidance from the professor, I had no idea what I was doing, or what I should have been doing. Indeed, I feel my recommendations are probably overkill, even if, perhaps, well written.</p>
            <p>It is what it is, and I am still proud of the work, even if not entirely happy with it. I hope that you can appreciate what we were able to accomplish, despite the circumstances.</p>
            <p>You may view the paper on <a href="https://github.com/WaywardFlame/Cloud-Computing-Research-Paper" target="_blank">{"-->GitHub.<--"}</a></p>
        </ProjectTemplate>
    );
}