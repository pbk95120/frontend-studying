import React, { useState } from "react";

import "./App.css";

const Box = (): JSX.Element => <div>box</div>;

const Profile = (props: { name: string; age: string }): JSX.Element => {
  return (
    <div>
      <p>{props.name}입니다.</p>
    </div>
  );
};

function App() {
  const [user, setUser] = useState<string | null>("kim");

  return (
    <div className="App">
      <Box></Box>
      {user}
      <Profile name="철수" age="1"></Profile>
    </div>
  );
}

export default App;
