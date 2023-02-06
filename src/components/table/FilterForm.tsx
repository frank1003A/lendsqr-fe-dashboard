import React from "react";

const FilterForm = () => {
  return (
    <form>
      <label htmlFor="org">Organization</label>
      <input type="text" placeholder="select" id="org" />
      <label htmlFor="user">username</label>
      <input type="text" placeholder="user" id="user" />
      <label htmlFor="email">email</label>
      <input type="email" placeholder="user" id="email" />
      <label htmlFor="date">date</label>
      <input type="date" placeholder="user" id="date" />
      <label htmlFor="phone">phone number</label>
      <input type="text" placeholder="user" id="phone" />
      <label htmlFor="stat">status</label>
      <input type="text" placeholder="user" id="stat" />
      <span>
        <button>reset</button>
        <button>filter</button>
      </span>
    </form>
  );
};

export default FilterForm;
