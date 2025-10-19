import React from "react";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { NavLink } from "react-router-dom";

export default function JournalDesign(props) {
  return (
    <>
      <div className="journal-design">
        <h6 className="journal-design-subheading">
          <span>{props.trends}</span>
          <span><HorizontalRuleIcon /></span>
          <span>{props.date}</span>
        </h6>
        <NavLink className="journal-design-heading" to={props.path}>{props.title}</NavLink>
        <p className="journal-para">{props.para}</p>
        <img className="journal-img" src={props.imgSrc} alt="Design" />
      </div>
    </>
  );
}
