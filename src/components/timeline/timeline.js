import React from 'react';
import defaultData from './default';
import TimelineItem from './timelineItem';
import './timeline.css';

const Timeline = ({ data = defaultData }) =>
  data.length > 0 && (
    <div className="timeline-container">
      {data.map((item, idx) => (
        <TimelineItem data={item} key={idx} />
      ))}
    </div>
  );

export default Timeline;
