import React from 'react'
import styles from './styles.module.css'
import GanttChart from './components/ganttChart/GanttChart'

export const ReactGanttchartPlanner = ({
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
