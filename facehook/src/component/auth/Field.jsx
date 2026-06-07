const Field = ({
  label,
  name,
  type,
  placeholder,
  register,
  required,
  pattern
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-800">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required,
          pattern
        })}
        className="h-12 w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20"
      />
    </div>
  );
};

export default Field;