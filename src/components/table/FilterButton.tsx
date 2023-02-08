import filterIcon from "assets/figma/filter.svg";
import FilterForm from "./FilterForm";

interface Props {
  open: boolean;
  handleOpen: () => void;
  disabled?: boolean;
}

const FilterButton = ({ open, handleOpen, disabled }: Props) => {

  return (
    <>
      <button className="filter-btn" data-testid="filter-btn" disabled={disabled} onClick={handleOpen}>
        <img src={filterIcon} alt="filter" />
      </button>

      {open && (
        <div className="filter-acton">
          <FilterForm />
        </div>
      )}
    </>
  );
};

export default FilterButton;
