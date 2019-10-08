import React, { useState } from "react";

import ToggleOnlySmall from "../src/Toggle/ToggleOnlySmall";

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
