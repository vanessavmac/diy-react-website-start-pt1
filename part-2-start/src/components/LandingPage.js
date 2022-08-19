import Socials from './Socials';
import AboutMe from './AboutMe';
import ProfilePic from '../assets/profile-pic.jpeg';

function LandingPage() {
  // Style react component using JS object and JSX (notice the camel case properties!)
  const divStyle = {
    marginTop: '25%',
  };
  const imageStyle = {
    marginLeft: '10%',
    borderRadius: '10px',
    height: '250px',
    float: 'right',
  };

  return (
    <div style={divStyle}>
      <img src={ProfilePic} alt="Profile" style={imageStyle} />
      <div>
        {/* Conceptually, components are like JavaScript functions. 
        They accept arbitrary inputs (called “props”) 
        and return React elements describing what should appear on the screen.  */}
        <AboutMe
          headline="hi, i'm vanessa"
          subtitle="I am a 2nd year biomedical engineering student with a passion for
        building accessible websites."
        />
        <Socials />
      </div>
    </div>
  );
}

export default LandingPage;
