import { ToolbarItem } from "./ToolbarItem"

export default function Toolbar({ items, model }) {
  function triggerAction(e, key) {
    e.preventDefault()
    e.stopPropagation()
    if (e.button !== 0) return
    model[key]?.()
  }

  function renderItem(item) {
    return (
      <ToolbarItem
        key={item.key}
        {...item}
        commandKey={item.key}
        action={triggerAction}
      />
    )
  }

  return items.map((item) => {
    if (item.key.startsWith("group-")) {
      const groupItems = item.items?.filter((subitem) => subitem.icon) ?? []
      if (groupItems.length <= 0) return null
      return (
        <div key={item.key} class="kef-wrap-tb-list">
          {renderItem(groupItems[0])}
          {groupItems.length > 1 && (
            <div class="kef-wrap-tb-itemlist">
              {groupItems.map((subitem, i) => {
                if (i === 0) return null
                return renderItem(subitem)
              })}
            </div>
          )}
        </div>
      )
    } else if (item.icon) {
      return renderItem(item)
    }
    return null
  })
}
