import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

it("image does not disappear after loss condition" ,function(){
  const { container } = render(
    <Snowman />)

    const img = container.querySelector("img");

    fireEvent.click(container.querySelector("button[value=b]"));
    fireEvent.click(container.querySelector("button[value=c]"));
    fireEvent.click(container.querySelector("button[value=d]"));
    fireEvent.click(container.querySelector("button[value=f]"));
    fireEvent.click(container.querySelector("button[value=g]"));
    fireEvent.click(container.querySelector("button[value=h]"));
    fireEvent.click(container.querySelector("button[value=z]"));

    expect(img.getAttribute("src")).toContain(".png")
})