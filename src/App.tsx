import { useState } from "react";
import Public from "./pages/Public";
import Admin from "./pages/Admin";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState<"public" | "admin">("public");

  return (
    <>
      <main>
        <nav>
          <h1>Áruház</h1>
          <ul>
            <li onClick={() => setCurrentPage("public")}>Könyváruház</li>
            <li onClick={() => setCurrentPage("admin")}>Admin felület</li>
          </ul>
        </nav>
        {currentPage === "public" && <Public></Public>}
        {currentPage === "admin" && <Admin></Admin>}
      </main>
    </>
  );
}
// npm install -g json-server
// json-server --watch db.json --port 3001

export default App;
