import React from "react";
import {Tab} from "semantic-ui-react";
import PropTypes from "prop-types";
import {green} from "../constants";
import CourseCardGroup from "../containers/CourseCardGroup";

function CoursesTab({items}) {
  const tabStyle = {
    background: green,
    // backgroundImage: `repeating-linear-gradient(${green}, ${olive})`,
    // borderColor: blue,
    padding: "2rem",
  };

  return (
    <Tab.Pane style={tabStyle}>
      <CourseCardGroup items={items} />
    </Tab.Pane>
  );
}

CoursesTab.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CoursesTab;
