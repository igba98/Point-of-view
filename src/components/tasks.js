import React from 'react'

export const Tasks = ({title}) => {
  return (
    <div className="flex flex-col ">
        <h1 className="text-2xl">Task Tracker</h1>
        <div>
            <h2 className="text-xl">Weelcome back,{title}</h2>
        </div>
    </div>
  )
}

Tasks.defaultProps = {
    title: 'Sprinter',
}
