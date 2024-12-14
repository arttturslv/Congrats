export default function CustomInput({
  label,
  customStyle,
  name,
  fn,
  value,
  placeholder,
  children,
  ...rest
}) {
  return (
    <div className="h-min w-full space-y-1">
      <label className="font-zig" htmlFor={name}>{label}</label>
      {children ? (
        children
      ) : (
        <input
          className={`${customStyle} w-full bg-dark border-redHighlight border-4 px-3 py-1 h-10 placeholder:text-sm`}
          name={name}
          id={name}
          value={value}
          onChange={fn}
          placeholder={placeholder}
          {...rest}
        />
      )}
    </div>
  );
}
