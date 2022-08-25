function AboutMe(props) {
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
