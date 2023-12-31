import { Router, Route, Routes } from "@solidjs/router";
import Home from "./pages/Home";
import DrugPricing from "./pages/DrugPricing";
import MedicationList from "./pages/MedicationList";
import OrderBuilder from "./pages/OrderBuilder";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderStatus from "./pages/OrderStatus";
import PharmacyLocator from "./pages/PharmacyLocator";
import PrescriptionDrugList from "./pages/PrescriptionDrugList";
import SavingsCenter from "./pages/SavingsCenter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/secure/drug-pricing" component={DrugPricing} />
        <Route path="/secure/medication-list" component={MedicationList} />
        <Route path="/secure/order-builder" component={OrderBuilder} />
        <Route path="/secure/order-confirmation" component={OrderConfirmation} />
        <Route path="/secure/order-status" component={OrderStatus} />
        <Route path="/secure/pharmacy-locator" component={PharmacyLocator} />
        <Route path="/secure/prescription-drug-list" component={PrescriptionDrugList} />
        <Route path="/secure/savings-center" component={SavingsCenter} />
      </Routes>
    </Router>
  );
}

export default App;
