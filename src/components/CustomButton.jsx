export default function CustomButton({customStyle, children, onClick, ...rest }) {
  return (
    <button
      className={`${customStyle} w-92 flex font-zig justify-center group items-center gap-2 bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm hover:bg-redHighlight hover:text-dark duration-200 transition-colors`}
      id="continuar"
      {...rest}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
