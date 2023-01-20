# react-ganttchart-planner

> react ganttchart planner package with tasks, durations and resources

[![NPM](https://img.shields.io/npm/v/react-ganttchart-planner.svg)](https://www.npmjs.com/package/react-ganttchart-planner) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Screenshot
![Uploading 2023-01-20 14-53-29_Trim.gif…]()


## Install

```bash
npm install --save react-ganttchart-planner
```

## Usage

```jsx
import React, { Component } from 'react'

import ReactGanttchartPlanner from 'react-ganttchart-planner'
import 'react-ganttchart-planner/dist/index.css'

class App extends Component {
  render() {
    return (
      <ReactGanttchartPlanner
        hifts={4}
        tasksArray={tasksArray}
        durationsArray={durationsArray}
        resourcesArray={resourcesArray}
      />
    )
  }
}
```

## Default Values

If props will not be passed then default values will be used

```table
  shifts: 4,
  tasksArray: [],
  durationsArray: [],
  resourcesArray: [],
```

## Sample Data

```jsx
const tasksArray = [
  {
    id: 1,
    name: 'Task 1'
  },
  {
    id: 2,
    name: 'Task 2'
  },
  {
    id: 3,
    name: 'Task 3'
  },
  {
    id: 4,
    name: 'Task 4'
  },
  {
    id: 5,
    name: 'Task 5'
  },
  {
    id: 6,
    name: 'Task 6'
  }
]

const durationsArray = [
  {
    id: 1,
    start: '2023-01-02',
    end: '2023-01-08',
    task: 1,
    resources: [
      {
        id: 1,
        title: 'Resouce 1',
        color: 'red'
      },
      {
        id: 2,
        title: 'Resouce 2',
        color: 'blue'
      },
      {
        id: 3,
        title: 'Resouce 3',
        color: 'green'
      }
    ]
  },
  {
    id: 2,
    start: '2023-01-10',
    end: '2023-01-15',
    task: 2,
    resources: [
      {
        id: 1,
        title: 'Resouce 1',
        color: 'red'
      },
      {
        id: 2,
        title: 'Resouce 2',
        color: 'blue'
      },
      {
        id: 3,
        title: 'Resouce 3',
        color: 'green'
      }
    ]
  },
  {
    id: 3,
    start: '2023-01-11',
    end: '2023-01-18',
    task: 4,
    resources: [
      {
        id: 6,
        title: 'Resouce 6',
        color: 'orange'
      },
      {
        id: 4,
        title: 'Resouce 4',
        color: 'yellow'
      },
      {
        id: 5,
        title: 'Resouce 5',
        color: 'black'
      }
    ]
  },
  {
    id: 4,
    start: '2023-01-01',
    end: '2023-01-02',
    task: 6,
    resources: [
      {
        id: 1,
        title: 'Resouce 1',
        color: 'red'
      },
      {
        id: 2,
        title: 'Resouce 2',
        color: 'blue'
      },
      {
        id: 4,
        title: 'Resouce 4',
        color: 'yellow'
      }
    ]
  }
]

const resourcesArray = [
  {
    id: 1,
    title: 'Resouce 1',
    color: 'red'
  },
  {
    id: 2,
    title: 'Resouce 2',
    color: 'blue'
  },
  {
    id: 3,
    title: 'Resouce 3',
    color: 'green'
  },
  {
    id: 4,
    title: 'Resouce 4',
    color: 'yellow'
  },
  {
    id: 5,
    title: 'Resouce 5',
    color: 'black'
  },
  {
    id: 6,
    title: 'Resouce 6',
    color: 'orange'
  }
]
```

## License

MIT © [SameedHasan](https://github.com/SameedHasan)
