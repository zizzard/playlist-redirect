import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useName = () => {
  const location = useLocation();
  return location.pathname.split("/")[1];
};

function Redirect({ to }) {
  const name = useName();
  useEffect(() => {
    document.title = name + "'s holiday card <3";
    window.open(to, '_blank');
  });

  return (
    <div className="App">
      <div className="redirect">
        Redirecting you to{" "}
        <a href={to} className="link-text" target={"_blank"} rel="noreferrer">
          https://open.spotify.com/playlist/4PW1cvUDpaoiIFhdJJWDw2?si=379bfca041f84138&pt=dc9a27bfe3918fbe83f97d392b5509a5
        </a>
        ...
      </div>
    </div>
  );
}

export default Redirect;
