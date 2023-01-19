import React from 'react'
import styles from './styles.module.css'
import GanttChart from './components/ganttChart/GanttChart'
const ReactGanttchartPlanner = ({
  shifts,
  tasksArray,
  durationsArray,
  resourcesArray
}) => {
  return (
    <GanttChart
      shifts={shifts}
      tasksArray={tasksArray}
      durationsArray={durationsArray}
      resourcesArray={resourcesArray}
    />
  )
}

export default ReactGanttchartPlanner
