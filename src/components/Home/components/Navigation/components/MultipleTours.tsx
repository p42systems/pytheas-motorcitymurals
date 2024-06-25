import { useLocation } from "wouter";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  isDropDownAtom,
  getDropDownAtom,
  tourPreferenceAtom,
} from "../../../../../atoms";

import {
  NavigationDropDownContainer,
  NavigationOptionsContainer,
  NavigationDropDownButton,
  DropDownOptionButton,
} from "../../../../styled_components";

import { loadTour } from "../../../../../services/navigation";

function MultipleTours() {
  const [, setLocation] = useLocation();
  const [isDropDown, setIsDropDown] = useAtom(isDropDownAtom);
  const setTourPreference = useSetAtom(tourPreferenceAtom);

  return (
    <NavigationDropDownContainer
      onClick={() => {
        setIsDropDown(!isDropDown);
      }}
    >
      <NavigationDropDownButton title="Choose Tour" aria-label="Choose Tour">
        Choose Tour
      </NavigationDropDownButton>
      <NavigationOptionsContainer
        style={{ display: useAtomValue(getDropDownAtom) }}
      >
        <DropDownOptionButton
          title="Windsor Tour"
          aria-label="Windsor Tour"
          onClick={() => {
            loadTour("windsor", setTourPreference, setLocation);
          }}
        >
          Windsor Tour
        </DropDownOptionButton>
        <DropDownOptionButton
          title="Detroit Tour"
          aria-label="Detroit Tour"
          onClick={() => {
            loadTour("detroit", setTourPreference, setLocation);
          }}
        >
          Detroit Tour
        </DropDownOptionButton>
      </NavigationOptionsContainer>
    </NavigationDropDownContainer>
  );
}

export default MultipleTours;
