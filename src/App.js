import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Home from "./pages/Home";
export default function App() {
  return (
    <div className="overflow-x-hidden" >
      <Dashboard>
        <Home />
      </Dashboard>
    </div>
  );
}
