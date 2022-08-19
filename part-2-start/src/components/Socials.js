import GithubIcon from '../assets/github-logo.png';
import GmailIcon from '../assets/gmail-logo.png';
import LinkedinIcon from '../assets/linkedin-logo.png';

function Socials() {
  //Style components using JS Objects + JSX
  const imageStyle = {
    marginRight: '30px',
    height: '35px',
  };
  const divStyle = {
    marginTop: '30px',
  };

  return (
    <div style={divStyle}>
      <a href="mailto:v4mac@uwaterloo.ca">
        <img src={GmailIcon} alt="Email" style={imageStyle} />
      </a>
      <a href="https://www.linkedin.com/in/vanessa-mac-6168a5150/">
        <img src={LinkedinIcon} alt="LinkedIn" style={imageStyle} />
      </a>
      <a href="https://github.com/vanessavmac">
        <img src={GithubIcon} alt="Github" style={imageStyle} />
      </a>
    </div>
  );
}

export default Socials;
