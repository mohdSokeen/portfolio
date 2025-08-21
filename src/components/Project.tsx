import '../assets/styles/Project.scss';

export default function Project() {
    const projects = [
        {
            title: "Univeral Search and Replay",
            desc: "I built a Next.js single-page application to display Webex call data, with filtering options such as Date/Time, Call ID, Agent Name, and Extension. The data is sourced from a database. I integrated this application into the Webex portal, where authentication and authorization are handled by Webex. Since Webex is a Cisco product used for telecommunication and meetings, the Webex portal also provides an API service that enables this integration.",
            skill: "Next.js, API, SQL server",
        },
        {
            title: "Web API",
            desc: "I built a Web API in .NET Core 8 with authentication and authorization implemented using JWT tokens. This API was integrated with the frontend application. The frontend sends a UCID, which the API uses to fetch call data from the database and return it to the frontend, where the data is displayed along with audio playback functionality.",
            skill: ".Net core 8, Rest API, JWT Token, C#, Dapper, SQL server",
        },
        {
            title: "QM (Quality Management)",
            desc: "I worked on the QM (Quality Manager) project under supervision, focusing on the frontend. In this application, we display Webex calling data. The system consists of multiple modules, including dashboards, user management, agent mapping, interactions, form builder, organizational hierarchy (Tree structure), and reporting. On the backend, I developed Web APIs in .NET Core to fetch all the required data. These APIs were then integrated into the React app.",
            skill: "React.js, Express, JWT Token, .Net core 8, Dapper, Session, SQL server ",
        },
        {
            title: "Ingestion EXE",
            desc: "I developed and deployed a console app that uploads audio files to the Verint portal. The application uses token-based API authentication and performs backend database mapping. I integrated the functionality into the USR (Universal Search and Reply) web application. In this application, I added a checkbox to the table. When the checkbox is selected, a flag parameter is set to true in the backend. The console app then uploads the corresponding audio file to Verint for records where the flag is set to true.",
            skill: "C#, SQL server",
        },
        {
            title: "Audio Masking Window Service",
            desc: "I worked on a Windows Service under supervision to mask sensitive information (e.g., debit/credit card numbers) in audio files by replacing them with a beep sound, as per client requirements. The transcription data was stored in the database in a formatted structure. The audio was transcribed into text with timestamps using a console application built on a custom-trained AI model, and the results were then stored in the database.",
            skill: "C#, ffmpeg, SQL Server",
        },
        {
            title: "Avaya Callback System",
            desc: "Developed and released a web application to display Avaya CMS data from the database. Call events were captured through an executable running in the background and stored in the database. The web application provides modules such as Dashboard, User Management, User Skills, Business Management, Agent Management, Alert Management, Station Management, and Analytics to display data as per user requirements.",
            skill: "ASP.NET framework (4.8), Razor pages, MVC, C#, ADO.NET, AJAX, jQuery, and SQL Server.",
        }
    ];

    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projects.map((p, i) => (
                    <div className="project" key={i}>
                        <h2>{p.title}</h2>
                        <p>
                            {p.desc}
                            <br />
                            <strong>Skills: {p.skill}</strong>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
