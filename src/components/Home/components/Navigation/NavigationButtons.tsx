import { useLocation } from "wouter";
import {
  NavigationButtonsContainer,
  NavigationContentButton,
} from "../../../styled_components";

import MultipleTours from "./components/MultipleTours";
import SingleTour from "./components/SingleTour";

function NavigationButtons() {
  const [, setLocation] = useLocation();

  return (
    <NavigationButtonsContainer>
      <NavigationContentButton
        title="Content"
        aria-label="Content"
        onClick={() => {
          setLocation("/list");
        }}
      >
        Content
      </NavigationContentButton>
      <MultipleTours />
    </NavigationButtonsContainer>
  );
}

export default NavigationButtons;
