import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (event) => {
      // check if the clicked element is inside the ref
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    // to add if we use React v17
    document.body.addEventListener("click", onBodyClick, { capture: true });

    // return the CLEANUP FUNCTION to remove the addEventListener
    return () => {
      // remove event listener
      document.body.removeEventListener("click", onBodyClick, {
        capture: true
      });
    };
  }, []);
  const renderedOptions = options.map(option => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
