import React from 'react';
import { Dropdown } from 'flowbite-react';
import './profieMenu.css';

const ProfileMenu = () => {
  return (
    <Dropdown className='dropDown' >
    <Dropdown.Item>Dashboard</Dropdown.Item>
    <Dropdown.Item>Settings</Dropdown.Item>
    <Dropdown.Item>Earnings</Dropdown.Item>
    <Dropdown.Item>Sign out</Dropdown.Item>
  </Dropdown>
  )
}

export default ProfileMenu;