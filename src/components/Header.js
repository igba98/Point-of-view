import  React from 'react';
import { Buttons } from './buttons';
import { Tasks } from './tasks';

export const Header = () => {
  return (
    <div className="m-20 m flex gap[64px] justify-center border border-red-600 rounded-xl p-10">
        <div className="flex justify-center gap-[800px]">  
            <Tasks/>
            <Buttons/>
        </div>
      
    </div>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',

}

// const headerStyle = {

// }