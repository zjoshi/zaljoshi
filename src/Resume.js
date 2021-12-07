import React from 'react';
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Resume.css';


function Resume() {

  var workTimelineElementStyle =  {
    background: 'white',
    //borderRight: '2px solid #043D63',
    //borderLeft: '2px solid #043D63',
    //borderBottom: '2px solid #043D63',
    borderTop: '7px solid #043D63',
    borderRadius: '12px',
    boxShadow: '0px 3px 7px #ABABAB'
  };

  var schoolTimelineElementStyle =  {
    background: 'white',
    //borderRight: '2px solid #0EC7A9',
    //borderLeft: '2px solid #0EC7A9',
    //borderBottom: '2px solid #0EC7A9',
    borderTop: '7px solid #0EC7A9',
    borderRadius: '12px',
    boxShadow: '0px 3px 7px #ABABAB'
  };

  return (
    <VerticalTimeline
      lineColor ={"#043D63"}
      className = "vertical-timeline-custom-line"
    >

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={schoolTimelineElementStyle}
        contentArrowStyle={{ borderRight: '7px solid  #0EC7A9' }}
        date="August 2021  -  May 2022"
        dateClassName= {"date"}
        icon={<FaGraduationCap/>}
        iconStyle={{ background: '#0EC7A9', color: 'white' }}
      >
        <h3 className="vertical-timeline-element-title">Cornell Tech</h3>
        <h4 className="vertical-timeline-element-subtitle big-subtitle">M.Eng in Computer Science</h4>
        <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
        <p>
          Human-Computer Interaction, Psychological Aspects of Technology,
          User Experience Design and Research, Optimization Methods, Technology and Democracy
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={workTimelineElementStyle}
        contentArrowStyle={{ borderRight: '7px solid  #043D63' }}
        date="March 2020  -  March 2021"
        dateClassName= {"date"}
        icon={<FaBriefcase/>}
        iconStyle={{ background: '#043D63', color: 'white' }}
      >
      <h3 className="vertical-timeline-element-title">Epic Systems</h3>
      <h4 className="vertical-timeline-element-subtitle big-subtitle">Software Engineer</h4>
      <h4 className="vertical-timeline-element-subtitle">Madison, WI</h4>
        <p>
          At Epic, I worked on Tapestry Claims. I helped pioneer a new Estimates
          module to allow patients to create personalized price estimates for
          medical procedures using Typescript, React, and C#/.NET. I redesigned
          a new user interface for the Claims module to improve usability
          and accessibility and streamlined outdated Claims adjudication workflows.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={workTimelineElementStyle}
        contentArrowStyle={{ borderRight: '7px solid  #043D63' }}
        date="June 2019  -  Jan 2020"
        dateClassName= {"date"}
        icon={<FaBriefcase/>}
        iconStyle={{ background: '#043D63', color: 'white' }}
      >
      <h3 className="vertical-timeline-element-title">Kaiser Permanente</h3>
      <h4 className="vertical-timeline-element-subtitle big-subtitle">Web Development Intern</h4>
      <h4 className="vertical-timeline-element-subtitle">Pleasanton, CA</h4>
        <p>
        At KP, I independently developed the internal admin portal to create an
        interface for KP server data using ASP.NET and SQL that was launched
        into production. I designed a user interface prototype and user
        experience using InDesign.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={schoolTimelineElementStyle}
        contentArrowStyle={{ borderRight: '7px solid  #0EC7A9' }}
        date="Sept 2015  -  Dec 2019"
        dateClassName= {"date"}
        icon={<FaGraduationCap/>}
        iconStyle={{ background: '#0EC7A9', color: 'white' }}
      >
      <h3 className="vertical-timeline-element-title">University of Michigan</h3>
      <h4 className="vertical-timeline-element-subtitle big-subtitle">B.S. in Computer Science </h4>
      <h4 className="vertical-timeline-element-subtitle big-subtitle">Minor in Political Science </h4>
      <h4 className="vertical-timeline-element-subtitle">Ann Arbor, MI</h4>
        <p>
          User Interface Development, Web Systems, Computer Security,
          Mobile Application Development, Cognitive Pyschology
          <br /><br />
          LSA Honors Program
        </p>
      </VerticalTimelineElement>




    </VerticalTimeline>
  );
}


export default Resume;
