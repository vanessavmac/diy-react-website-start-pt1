function AboutMe(props) {
  // JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.
  // { } indicate JSX. 
  // In simple terms, you can think of it as adding JS within the HTML template returned by the component.
  return (
    <div>
      {/* Style react component using inline JSX */}
      <h1 style={{ margin: '0px' }}>{ props.headline }</h1>
      <p>
        { props.subtitle }
      </p>
    </div>
  );
}

export default AboutMe;
