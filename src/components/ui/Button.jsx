export default function Button({ children, variant, small, targetForm, onClick, disabled, grow }) {
  const variantMap = {
    primary: "button-primary",
    secondary: "button-secondary"
  };

  return (
    <button
      className={`
        ${grow ? 'w-full' : 'w-fit'}
        ${variant ? variantMap[variant] : variantMap['primary']}
        ${disabled ? 'grayscale cursor-not-allowed' : 'cursor-pointer hover:scale-101 hover:backdrop-brightness-85 hover:shadow-md'}
        ${small ? 'text-xs p-2 aspect-square rounded-full' : 'px-3 py-2 rounded-[0.5rem]'}`
      }
      type={targetForm ? 'submit' : 'button'}
      form={targetForm ? targetForm : null}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
