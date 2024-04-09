import { useState } from "react";

const App = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setState("");
  };

  return (
    <div>
      <select onChange={handleCountryChange} value={country}>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Germany">Germany</option>
      </select>


      
      <select value={state} disabled={country === ""}>
        <option value="">State</option>
        {country === "India" && (
          <><option key="Delhi">Delhi</option><option key="Gujrat">Gujrat</option><option key="Himachal pradesh">Himachal pradesh</option><option key="Uttarakhand">Uttarakhand</option><option key="Rajashthan">Rajashthan</option></>
          
        )}
        {country === "USA" && (
          <><option key="California">California</option><option key="Texas">Texas</option><option key="New York">New York</option></>
        )}
        {country === "Germany" && (
          <><option key="Berlin">Berlin</option><option key="Bavaria">Bavaria</option><option key="Birmingham">Birmingham</option></>
        )}
      </select>
    </div>
  );
};
export default App;