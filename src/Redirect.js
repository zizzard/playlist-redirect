import { useEffect } from 'react';
import { useLocation } from "react-router-dom"

const useName = () => {
    const location = useLocation();
    return location.pathname.split("/")[1];
  }


function Redirect ({to}) {
    const name = useName();
    useEffect(() => {
        document.title = name + "'s holiday card <3";
        window.location = to;
    });

  return (
    <></>
  );
}

export default Redirect;
