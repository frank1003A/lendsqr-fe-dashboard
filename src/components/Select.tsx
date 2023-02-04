import { useState } from 'react';
import img from "assets/sidebar/briefcase.svg"
import ad from "assets/figma/arrowdown.svg"

interface Props {
    options: Array<string>
}
const CustomSelect = ({ options }: Props) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="custom-select">
      <div className="selected-option" onClick={() => setOpen(!open)}>
        <img src={img} alt="briefcase_icon"/>
        {selectedOption}
        <img src={ad} alt="arrow_icon" id="arrow_down"/>
      </div>
      {open && (
        <ul className="options">
          {options.map(option => (
            <li
              key={option}
              className="option"
              onClick={() => {
                setSelectedOption(option);
                setOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
