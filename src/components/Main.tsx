import '../assets/styles/Main.scss';
import MyAvatar from '../assets/images/Profile.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';


export default function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={MyAvatar} alt="Avatar" className="avatar" />
        </div>
        <div className="content">
          <h1>Mohd Sokeen</h1>

          <div className="social_icons">
            <p>.Net Full Stack Developer</p>
            <a href="https://github.com/mohdSokeen" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/mohd-sokeen/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="/sokeen_Resume.docx" download rel="noreferrer"><DownloadIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}