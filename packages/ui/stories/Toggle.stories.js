import React, { useState } from "react";

import ToggleOnlySmall from "../src/Toggle/ToggleOnlySmall";
import ToggleWithText from "../src/Toggle/ToggleWithText";

export default {
  title: "Toggle"
};

export function toggleOnlySmall() {
  const [checked, setChecked] = useState(true);

  return (
    <ToggleOnlySmall
      id="toggle-only-small"
      value={checked}
      onChange={event => setChecked(event.target.checked)}
    />
  );
}

export function toggleWithText() {
  const [checked, setChecked] = useState(true);

  return (
    <ToggleWithText
      id="toggle-with-text"
      value={checked}
      onChange={event => setChecked(event.target.checked)}
      checkedText="Toggle On"
      unCheckedText="Toggle Off"
    />
  );
}
