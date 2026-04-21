import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

export default function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Nov 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />} >
            <h3 className="vertical-timeline-element-title">AeoLogic Technologies Pvt. Ltd.</h3>
            <h4 className="vertical-timeline-element-title">Dot Net Developer</h4>
            <h4 className="vertical-timeline-element-subtitle">Noida, IND</h4>
            <p>
              Full-stack Web Development, .NET Core Development, Dapper, MVC, C#, Rest-API, Postgresql, IIS
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Apr 2023 - Oct 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />} >
            <h3 className="vertical-timeline-element-title">Arvius Software Pvt. Ltd.</h3>
            <h4 className="vertical-timeline-element-title">Software Developer</h4>
            <h4 className="vertical-timeline-element-subtitle">Greater Noida, IND</h4>
            <p>
              Full-stack Web Development, .NET Core/ASP.NET Core Development, React.Js Development, Entity Framework, Dapper, MVC, C#, Rest-API, SQL Server, Git, Azure services
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2023 - Mar 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />} >
            <h3 className="vertical-timeline-element-title">Tinslab Pvt. Ltd.</h3>
            <h4 className="vertical-timeline-element-title">Software Developer Trainee</h4>
            <h4 className="vertical-timeline-element-subtitle">Greater Noida, IND</h4>
            <p>
              ASP.NET Development, Entity Framework, MVC, C#, Web API, HTML, CSS, JavaScript, Bootstrap, Ajax, JQuery, SQL Server
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}