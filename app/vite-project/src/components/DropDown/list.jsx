export function List({ children, isOpen }) {
  if (isOpen == false) return null;
  return (
    <ul className="ease-in duration-300 shadow-2xl grid grid-cols-2  gap-[1px] absolute top-[-2rem] z-40 bg-blue-200 rounded-lg overflow-hidden">
      {children}
    </ul>
  );
}
