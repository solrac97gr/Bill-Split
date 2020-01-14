import React from 'react'
import{Link} from '../NavBarModule/styles' 
export const NavLink = (props:any) => (
    <Link
      {...props}
      getProps={({ isCurrent }:any) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {
            color: isCurrent ? "#3366FF" : "#888"
          }
        };
      }}
    />
  );