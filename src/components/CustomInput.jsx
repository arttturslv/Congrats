export default function CustomInput({
  label,
  customStyle,
  name,
  fn,
  value,
  placeholder,
  children,
  required,
  ...rest
}) {
  return (
    <div className="w-full space-y-1">
      <label className="font-zig" htmlFor={name}>{label}{required && <strong className="text-[#ff702e]">*</strong>}</label>
      {children ? (
        children
      ) : (
        <input
          className={`h-10 ${customStyle} w-full bg-dark border-redHighlight border-4 px-3 py-1  placeholder:text-sm`}
          name={name}
          id={name}
          value={value}
          onChange={fn}
          placeholder={placeholder}
          required={required}
          {...rest}
        />
      )}
    </div>
  );
}
