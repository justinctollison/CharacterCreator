import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import NavBar from './NavBar';
import CharacterList from './CharacterList';
import NewCharacter from './NewCharacter';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;


  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/new" element= {<NewCharacter user={user}/>}>
            {/* <NewCharacter user={user} /> */}
          </Route>
          <Route path="/" element= {<CharacterList user={user}/>}>
            {/* <CharacterList /> */}
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
