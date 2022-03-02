import React, { useState } from "react";

interface DropdownProps {
  buttonText?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ buttonText }) => {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(state => !state);
  }

  return (
    <div role="dialog">
      <button onClick={toggleMenu}>{buttonText || "ver"}</button>
      {open && (
        <ul role="menu">
          <ul role="menuitem">10</ul>
          <ul role="menuitem">20</ul>
          <ul role="menuitem">30</ul>
          <ul role="menuitem">40</ul>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
