export default function Icon({ name, className = '', ...rest }) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true" {...rest}>
      {name}
    </span>
  );
}
