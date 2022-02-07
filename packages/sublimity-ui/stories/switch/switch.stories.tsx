import { Moon, Sun } from 'phosphor-react';
import React from 'react';
import { Switch } from '../../src';

export default {
  title: 'Atoms/Switch',
};

export const SwitchToggle = () => {
  return (
    <div>
      <Sun />
      <Switch />
      <Moon />
    </div>
  );
};
