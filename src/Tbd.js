
function Tbd ({found}) {
  return (
    <div className="App">
      <div className="redirect">
        {
          found ? ("Coming soon...") : ("Please check the url you entered...")
        }
      </div>
    </div>
    

    
  );
}

export default Tbd;
