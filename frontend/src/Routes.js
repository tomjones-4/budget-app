import { BrowserRouter as Router, Route } from "react-router-dom";
import { Transactions } from "./Pages/Transactions";

export const Routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/transactions"> element={<Transactions />}</Route>
      </Routes>
    </Router>
  );
};
