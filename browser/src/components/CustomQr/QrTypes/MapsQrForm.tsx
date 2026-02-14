import React from "react";
import { CompactFormField, InputContainer } from "../../../styled/styled.ts";
import { useQrContext } from "../../../hooks/useQrContext.ts";

const MapsQrForm: React.FC = () => {
  const { mapsData, updateMapsData } = useQrContext();

  const handleQueryChange = (value: string) => {
    updateMapsData("query", value);
    if (value) {
      updateMapsData("latitude", "");
      updateMapsData("longitude", "");
    }
  };

  const handleCoordinateChange = (
    field: "latitude" | "longitude",
    value: string,
  ) => {
    updateMapsData(field, value);
    if (value) {
      updateMapsData("query", "");
    }
  };

  const disabledFieldStyle = {
    opacity: 0.6,
    backgroundColor: "rgba(43, 44, 40, 0.8)",
    borderColor: "#555",
    cursor: "not-allowed",
  };

  const disabledLabelStyle = {
    opacity: 0.6,
  };

  const activeFieldStyle = {
    borderColor: "var(--secondary-color)",
    boxShadow: "0 0 4px var(--secondary-color)",
  };

  const isQueryDisabled = !!(mapsData.latitude || mapsData.longitude);
  const areCoordinatesDisabled = !!mapsData.query;

  return (
    <>
      <CompactFormField>
        <label
          htmlFor="mapsQuery"
          style={isQueryDisabled ? disabledLabelStyle : {}}
        >
          Address
        </label>
        <InputContainer>
          <input
            type="text"
            id="mapsQuery"
            value={mapsData.query || ""}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Enter address, city, or place name"
            disabled={isQueryDisabled}
            style={
              isQueryDisabled
                ? disabledFieldStyle
                : !isQueryDisabled && mapsData.query
                  ? activeFieldStyle
                  : {}
            }
          />
        </InputContainer>
        <small>OR enter coordinates directly:</small>
        {mapsData.query && (
          <small style={{ color: "#999" }}>
            Coordinates disabled while using address
          </small>
        )}
      </CompactFormField>

      <CompactFormField>
        <label
          htmlFor="mapsLatitude"
          style={areCoordinatesDisabled ? disabledLabelStyle : {}}
        >
          Latitude
        </label>
        <InputContainer>
          <input
            type="text"
            id="mapsLatitude"
            value={mapsData.latitude}
            onChange={(e) => handleCoordinateChange("latitude", e.target.value)}
            placeholder="e.g., 37.7749"
            disabled={areCoordinatesDisabled}
            style={
              areCoordinatesDisabled
                ? disabledFieldStyle
                : mapsData.latitude
                  ? activeFieldStyle
                  : {}
            }
          />
        </InputContainer>
      </CompactFormField>

      <CompactFormField>
        <label
          htmlFor="mapsLongitude"
          style={areCoordinatesDisabled ? disabledLabelStyle : {}}
        >
          Longitude
        </label>
        <InputContainer>
          <input
            type="text"
            id="mapsLongitude"
            value={mapsData.longitude}
            onChange={(e) =>
              handleCoordinateChange("longitude", e.target.value)
            }
            placeholder="e.g., -122.4194"
            disabled={areCoordinatesDisabled}
            style={
              areCoordinatesDisabled
                ? disabledFieldStyle
                : mapsData.longitude
                  ? activeFieldStyle
                  : {}
            }
          />
        </InputContainer>
      </CompactFormField>
      {(mapsData.latitude || mapsData.longitude) && (
        <small style={{ color: "#999", display: "block" }}>
          Address disabled while using coordinates
        </small>
      )}
    </>
  );
};

export default MapsQrForm;
