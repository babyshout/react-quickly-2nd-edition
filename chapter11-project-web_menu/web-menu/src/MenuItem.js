
function MenuItem({ href, icon , children}) {
    const iconSrc = `/icons/${icon}.svg`;
  return (
    <a href={href} className="menu-link">
      <img src={iconSrc} width='16' alt={`icon-${icon}`}></img>
      {children}
    </a>
  );
}

export default MenuItem;
