import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from './Login';
import NavBar from './NavBar';
import CharacterList from './CharacterList';
import NewCharacter from './NewCharacter';
import Character from "./Character";
import Edit from "./Edit";
import Home from "./Home";

{/*//TODO: 
  Fix styling 
  Add a profile page, 
  Add UI to tell user is logged into certain profile. 
  Add a method to edit character pages. 
  [x] Add a method to view character pages. 
  Add a method for users to delete the character pages they've made. 
  Add a review system for characters.
  Add sorting to character list
  Add search function to character list
  A like system?
  Add comments/feedback to character cards
*/}

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
          <Route path="/" element= { <Home/>}></Route>
          <Route path="/new" element= {<NewCharacter user={user}/>}>
            {/* <NewCharacter user={user} /> */}
          </Route>
          <Route path="/characters" element= {<CharacterList />}>
            {/* <CharacterList /> */}
          </Route>
          <Route path="/characters/:id" element={<Character user={user}/>}>
            {/* Character Card */}
          </Route>
          <Route path="/characters/:id/edit" element={<Edit />}>
            {/* Edit Card */}
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
