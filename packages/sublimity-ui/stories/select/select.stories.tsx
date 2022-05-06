import React from 'react';
import { Select as SelectComponent } from '../../src';

export default {
  title: 'Atoms/Select',
};

export const Select = () => {
  return (
    <div>
      <SelectComponent defaultValue="Options" />
    </div>
  );
};
