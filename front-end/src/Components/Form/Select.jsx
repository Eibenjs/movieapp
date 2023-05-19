const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name}>{label}</label>
      <select {...rest} name={name} id={name} className="">
        <option value=""></option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default Select;