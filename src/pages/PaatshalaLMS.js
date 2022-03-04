import React, { useEffect } from "react";

function PaatshalaLMS() {

  useEffect(() => {
    window.location.href = "https://retail.ictkerala.org/";
  }, []);

  return (
    <div>
     You are being redirected to Paatshala
    </div>
  );
}

export default PaatshalaLMS;