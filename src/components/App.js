import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserContext } from "../context/User";

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  return (
    <main className={theme}>
      <UserContext>
        <Header />
        <Profile />
      </UserContext>
    </main>
  );
}

export default App;
