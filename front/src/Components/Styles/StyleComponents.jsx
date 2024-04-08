import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import { grayColor } from "../Constants/Color";

export const VisuallyHiddenInput = styled("input")({
  border: "0",
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: 1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",

  width: "1",
});
{
  /* <VisuallyHiddenInput />; */
}
export const Link = styled(LinkComponent)`
  text-decoration: none;
  padding: 1rem;
  color: black;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const InputBox = styled("input")`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 3rem;
  border-radius: 1.5rem;
  background-color: #ede3ff;
`;

export const SearchField = styled("input")`
  padding: 1rem ;
  width: 15vmax;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  background-color: #ede3ff;
  font-size: 1.1rem;
`;

export const CurveButton = styled("button")`
  padding: 1rem;
  width: 8rem;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  font-size: 1.1rem;
  background-color: #704d99;
  cursor: pointer;
  :hover {
    background-color: #9161ab;
  }
`;
