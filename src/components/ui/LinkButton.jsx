export default function LinkButton({ children, variant, small, href, onClick, disabled, grow, download, targetBlank }) {
  const variantMap = {
    primary: "button-primary",
    secondary: "button-secondary"
  };

  return (
    <a
      className={`
        ${grow ? 'w-full' : 'w-fit'}
        ${variant ? variantMap[variant] : variantMap['primary']}
        ${disabled ? 'grayscale cursor-not-allowed' : 'cursor-pointer hover:scale-101 hover:backdrop-brightness-85 hover:shadow-md'}
        ${small ? 'text-xs p-2 aspect-square rounded-full' : 'px-3 py-2 rounded-[0.5rem]'}`
      }
      onClick={onClick}
      href={href}
      target={targetBlank ? '_blank' : undefined}
      disabled={disabled}
      download={download}
    >
      {children}
    </a>
  );
}
