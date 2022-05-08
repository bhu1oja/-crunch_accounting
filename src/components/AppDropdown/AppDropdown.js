import React from "react";
import Select from "react-select";
import * as CONSTANT from "../../components/Constant/Constant";
import * as COLORS from "../../components/Constant/Colors";
import { Dropdown, Form, Col } from "react-bootstrap";

const StateDropdown = (props) => {
  //Dropdown options
  const stateList = [
    { value: CONSTANT.NEW_SOUTH_WHALES, label: CONSTANT.NEW_SOUTH_WHALES },
    {
      value: CONSTANT.VICTORIA,
      label: CONSTANT.VICTORIA,
    },
    { value: CONSTANT.QUEENSLAND, label: CONSTANT.QUEENSLAND },
    { value: CONSTANT.WESTERN_AUSTRALIA, label: CONSTANT.WESTERN_AUSTRALIA },
    { value: CONSTANT.SOUTH_AUSTRALIA, label: CONSTANT.SOUTH_AUSTRALIA },
    { value: CONSTANT.TASMANIA, label: CONSTANT.TASMANIA },
    { value: CONSTANT.NORTHERN_TERRITORY, label: CONSTANT.NORTHERN_TERRITORY },
    {
      value: CONSTANT.AUSTRALIAN_CAPITAL_TERRITORY,
      label: CONSTANT.AUSTRALIAN_CAPITAL_TERRITORY,
    },
  ];

  return (
    <Form.Group as={Col} md="4" data-testid="app-select-state">
      <Form.Label>State</Form.Label>
      <Select
        options={stateList}
        value={props.inputs}
        onBlur={props.onBlur}
        styles={{
          control: (provided, state) => ({
            ...provided,
            // change border color on error
            borderColor: props.error === "error" ? COLORS.COLOR_RED : "",
          }),
        }}
        onChange={(item) => {
          props.setDropdownInput("state", item["value"], item["value"]);
        }}
      />
    </Form.Group>
  );
};

//name title dropdown
const NameTitleDropDown = (props) => {
  const nameTitleList = ["Mr", "Ms", "Mrs", "Other"];
  return (
    <Dropdown name="nameTitle" data-testid="app-select-nameTitle">
      <Dropdown.Toggle
        variant="outline-secondary"
        name="nameTitle"
        style={{ borderColor: props.error === "error" ? COLORS.COLOR_RED : "" }}
      >
        {props.inputs.nameTitle}
      </Dropdown.Toggle>
      <Dropdown.Menu name="nameTitle">
        {nameTitleList.map((item, i) => (
          <Dropdown.Item
            key={i}
            onBlur={props.onBlur}
            onClick={() => props.setDropdownInput("nameTitle", item)}
          >
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export { StateDropdown, NameTitleDropDown };
