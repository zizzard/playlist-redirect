import { useEffect } from 'react';


function Redirect ({to}) {

    useEffect(() => {
        // Update the document title using the browser API
        window.location = to;
    });


  return (
    <></>
  );
}

export default Redirect;
