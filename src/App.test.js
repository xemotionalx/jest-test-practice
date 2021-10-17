import React from "react";
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders correctly", () => {
    shallow(<App />);
  });

  it("should display a text input to fill a question", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('input[type="text"]').length).toBe(1);
  });

  it("should display a submit button to send question", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('button[type="submit"]').length).toBe(1);
  });

  it("should not display an answer by default", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".answer").length).toBe(0);
  });

});
