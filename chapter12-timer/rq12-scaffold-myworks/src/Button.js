export default function Button({icon, label, ...rest}) {
    const iconSrc = `icons/${icon}.svg`

    return (
        <button title="Play" className="toggle" {...rest}>
            <img src={iconSrc} alt={label}/>
        </button>
    )
}