import PropTypes from "prop-types";

const LocationSearchPanel = ({
  suggestions,
//   setVehiclePanel,
//   setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else if (activeField === "destination") {
      setDestination(suggestion);
    }
    // Uncomment if needed later:
    // setVehiclePanel(true);
    // setPanelOpen(false);
  };

  return (
    <div>
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(elem)}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

LocationSearchPanel.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  setVehiclePanel: PropTypes.func,
  setPanelOpen: PropTypes.func,
  setPickup: PropTypes.func.isRequired,
  setDestination: PropTypes.func.isRequired,
  activeField: PropTypes.oneOf(["pickup", "destination"]).isRequired,
};

export default LocationSearchPanel;
