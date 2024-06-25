import { useLocation } from "wouter";
import { useSetAtom } from "jotai";
import { tourPreferenceAtom } from "../../../../../atoms";

import { NavigationTourButton } from "../../../../styled_components";

import { loadTour } from "../../../../../services/navigation";

function SingleTour() {
  const [, setLocation] = useLocation();
  const setTourPreference = useSetAtom(tourPreferenceAtom);

  return (
    <NavigationTourButton
      title="Take Tour"
      aria-label="Take Tour"
      onClick={() => {
        loadTour("detroit", setTourPreference, setLocation);
      }}
    >
      Take Tour
    </NavigationTourButton>
  );
}

export default SingleTour;
