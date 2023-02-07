interface Props {
  handleSelect: React.ChangeEventHandler<HTMLSelectElement>;
}

/**Component is only visible on mobile screens */

const Dropdown = ({ handleSelect }: Props) => {
  return (
    <select name="" id="" className="dropdown" onChange={handleSelect}>
      <option value={1}>General Details</option>
      <option value={2}>Documents</option>
      <option value={3}>Bank Details</option>
      <option value={4}>Loans</option>
      <option value={5}>Savings</option>
      <option value={6}>App and System</option>
    </select>
  );
};

export default Dropdown;
