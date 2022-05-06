import * as RadixSelect from '@radix-ui/react-select';
import React from 'react';

export type SelectProps = {
  className?: string;
} & RadixSelect.SelectProps;

export const Select = ({ className, ...selectProps }: SelectProps) => {
  return (
    <RadixSelect.Root {...selectProps}>
      <RadixSelect.Trigger>
        <RadixSelect.Value />
        <RadixSelect.Icon />
      </RadixSelect.Trigger>

      <RadixSelect.Content>
        <RadixSelect.ScrollUpButton />
        <RadixSelect.Viewport>
          {/* <RadixSelect.Item>
            <RadixSelect.ItemText />
            <RadixSelect.ItemIndicator />
          </RadixSelect.Item>

          <RadixSelect.Group>
            <RadixSelect.Label />
            <RadixSelect.Item>
              <RadixSelect.ItemText />
              <RadixSelect.ItemIndicator />
            </RadixSelect.Item>
          </RadixSelect.Group> */}

          <RadixSelect.Separator />
        </RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton />
      </RadixSelect.Content>
    </RadixSelect.Root>
  );
};
