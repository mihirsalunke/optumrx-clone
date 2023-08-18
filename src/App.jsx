import { Router, Route, Routes } from "@solidjs/router";
import Home from "./Pages/Home";
import DrugPricing from "./Pages/DrugPricing";
import MedicationList from "./Pages/MedicationList";
import OrderBuilder from "./Pages/OrderBuilder";
import OrderConfirmation from "./Pages/OrderConfirmation";
import OrderStatus from "./Pages/OrderStatus";
import PharmacyLocator from "./Pages/PharmacyLocator";
import PrescriptionDrugList from "./Pages/PrescriptionDrugList";
import SavingsCenter from "./Pages/SavingsCenter";

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
        <Route path="/secure/saving-center" component={SavingsCenter} />
      </Routes>
    </Router>
  );
}

export default App;
