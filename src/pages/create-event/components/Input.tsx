interface Props {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
}

function Input({ id, label, type, placeholder = label }: Props) {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="mb-3 block text-base font-medium text-primary-blue"
      >
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className="w-full rounded-md border border-neutrals-white-100 bg-neutrals-white-200 py-3 px-6 text-base font-medium text-neutrals-gray-400 outline-none focus:border-primary-purple-dark focus:shadow-md"
      />
    </div>
  );
}

export default Input;
