import React from "react";
import AppRoutesPage from "./routes/AppRoutesPage";
import { UserProvider } from "./context/user.context";

const App = () => {
  return (
    <div>
      <UserProvider>
        <AppRoutesPage />
      </UserProvider>
    </div>
  );
};

export default App;
