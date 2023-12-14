import { useState, useEffect } from "react";
import { ColorPickerInput } from "./ColorPicker.styled";
import _debounce from "lodash/debounce";

export const ColorPicker = ({ userData, setUserData, type }) => {
  const [bgColor, setBgColor] = useState(userData.options.bgColor);
  const [fColor, setFColor] = useState("");

  useEffect(() => {
    const rgbString = userData.options.bgColor;
    rgbStringToHex(rgbString);
  }, [userData.options.bgColor]);

  function rgbStringToHex(rgbString) {
    const rgbValues = rgbString
      .substring(4, rgbString.length - 1)
      .split(",")
      .map((value) => parseInt(value));
    const hex = ((rgbValues[0] << 16) | (rgbValues[1] << 8) | rgbValues[2])
      .toString(16)
      .padStart(6, "0");
    setBgColor(`#${hex}`);
  }

  function handleColorPicker(e) {
    const converToRgb = {
      red: parseInt(e.target.value.slice(1, 3), 16),
      green: parseInt(e.target.value.slice(3, 5), 16),
      blue: parseInt(e.target.value.slice(5, 7), 16),
    };
    const brightness =
      ((converToRgb.red / 255 +
        converToRgb.green / 255 +
        converToRgb.blue / 255) *
        100) /
      3 /
      100;
    function fontColor() {
      if (brightness >= 0.25 && brightness <= 0.75) {
        return `rgb(255, 255, 255)`;
      } else {
        return `rgb(${255 - 255 * brightness}, ${255 - 255 * brightness}, ${
          255 - 255 * brightness
        })`;
      }
    }
    setUserData({
      ...userData,
      options: {
        ...userData.options,
        bgColor: `rgb(${converToRgb.red}, ${converToRgb.green}, ${converToRgb.blue})`,
        fColor: fontColor(),
      },
    });
  }

  if (type === "background") {
    return (
      <ColorPickerInput
        type="color"
        value={bgColor}
        onChange={(e) => {
          setBgColor(e.target.value);
        }}
        onBlur={(e) => {
          handleColorPicker(e);
        }}
      />
    );
  } else {
    return (
      <ColorPickerInput
        type="color"
        value={userData.options.aColor}
        onChange={(e) => {
          setUserData({
            ...userData,
            options: { ...userData.options, aColor: e.target.value },
          });
        }}
        onBlur={(e) => {
          setUserData({
            ...userData,
            options: { ...userData.options, aColor: e.target.value },
          });
        }}
      />
    );
  }
};
