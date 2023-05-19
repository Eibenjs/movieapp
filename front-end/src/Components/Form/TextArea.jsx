const TextArea = ({ name, label, error, ...rest }) => {
  return (
    // tailwind classes omitted
    <div className="flex flex-col mb-4">
      <label htmlFor={name}>{label}</label>
      <textarea {...rest} name={name} id={name} className=""></textarea>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default TextArea;