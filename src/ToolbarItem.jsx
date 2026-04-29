export function ToolbarItem({ commandKey, label, icon, action }) {
  return (
    <button
      type="button"
      class="kef-wrap-tb-item"
      onMouseDown={(e) => action(e, commandKey)}
      title={label}
      aria-label={label}
    >
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(icon)}`}
        alt={label}
      />
    </button>
  )
}
