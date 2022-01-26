import { Switch, Label } from 'atomize';
import { useState } from 'react';

const Switcher = ({ title, value = false, onSwitch }) => {
  const [selectedSwitchValue, setSelectedSwitchValue] = useState(value);

  return (
    <Label
      onClick={() => {
        setSelectedSwitchValue(!selectedSwitchValue);
        onSwitch?.(!selectedSwitchValue);
      }}
      textSize="body"
      textColor="#3f3f3f"
      p={{ x: '2rem', y: '0.4rem' }}
      d="flex"
      justify="space-between"
    >
      {title}
      <Switch checked={selectedSwitchValue} />
    </Label>
  );
};

export default Switcher;
