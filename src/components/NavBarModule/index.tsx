import React, { FunctionComponent as FC } from 'react';
import { Nav} from './styles'
import {NavLink} from '../NavLink'
import router from '../../routes/index'
import { MdHome, MdPersonOutline,MdAdd } from 'react-icons/md'

const SIZE = '32px'

export const NavBar: FC = () => {
    return(
    <Nav>
      <NavLink to={router.home}><MdHome size={SIZE} /></NavLink>
      <NavLink to={router.add}><MdAdd size={SIZE} /></NavLink>
      <NavLink to={router.profile}><MdPersonOutline size={SIZE} /></NavLink>
    </Nav>
    )
}