[中文](README.md) | English

# logseq-plugin-wrap-plu (Text Wrapper Plus)

Create custom text wrappings and replacements with optional key bindings for selected text. Ships with a rich set of built-in defaults covering highlights, colored text, bold, italic, strikethrough, underline, inline code, math formulas, page links, and Cloze cards.

> Forked from [qbosen/logseq-plugin-wrap](https://github.com/qbosen/logseq-plugin-wrap), originally created by [sethyuan](https://github.com/sethyuan). Licensed under the original MIT License.

## Demo

![demo](./demo.gif)

## Built-in Defaults

| Feature | Output |
|---------|--------|
| Wrap as page link | `[[selected text]]` |
| Cloze card | `{{cloze selected text}}` |
| Invisible Cloze | `[[#cloze]]==selected text==` (requires CSS) |
| Bold / Italic / Strikethrough / Underline | Standard Markdown formatting |
| Inline code | `` `selected text` `` |
| Math formula | `$$selected text$$` |
| Red / Green / Blue highlight | Colored mark annotation |
| Red / Green / Blue text color | Colored text |
| Remove formatting | Shortcut `mod+shift+x` |

## Installation

Search for **Text Wrapper Plus** in the Logseq Marketplace, or download the zip from [Releases](https://github.com/Hugh-Afterlight/logseq-plugin-wrap/releases) and load it manually.

## Configuration

All rules can be customized in the Logseq plugin settings panel.

### Settings Reference

- **`toolbar`**: Show or hide the floating toolbar. Default: `true`.
- **`toolbarShortcut`**: Optional shortcut key to toggle toolbar visibility.
- **`wrap-*`**: Custom wrapping rules. Use `$^` in `template` to represent the selected text.
- **`repl-*`**: Custom replacement rules. `regex` is the pattern to match; `replacement` is what it becomes.
- **`group-*`**: Group multiple rules together — they collapse into a single toolbar button with a dropdown.

### Custom Rule Example

```json
{
  "wrap-mymark": {
    "label": "Red highlight",
    "binding": "mod+shift+r",
    "template": "[[#red]]==$^==",
    "icon": "<svg>...</svg>"
  },
  "repl-clear": {
    "label": "Remove formatting",
    "binding": "mod+shift+x",
    "regex": "==([^=]*)==",
    "replacement": "$1"
  }
}
```

## Toolbar Style Customization

```css
:root {
  --kef-wrap-tb-bg: #333e;
}
:root.dark {
  --kef-wrap-tb-bg: #777e;
}

#kef-wrap-toolbar { }
.kef-wrap-tb-item { }
.kef-wrap-tb-item:hover {
  filter: drop-shadow(0 0 3px #fff);
}
.kef-wrap-tb-item img {
  width: 20px;
  height: 20px;
}
```

## Built-in Highlight & Text Color Styles

```css
mark {
  background: #fef3ac !important;
  color: #262626 !important;
}
span[data-ref="#red"],
span[data-ref="#green"],
span[data-ref="#blue"],
span[data-ref="$red"],
span[data-ref="$green"],
span[data-ref="$blue"] {
  display: none;
}
span[data-ref="#red"] + mark {
  background: #ffc7c7 !important;
  color: #262626 !important;
}
span[data-ref="#green"] + mark {
  background: #ccffc1 !important;
  color: #262626 !important;
}
span[data-ref="#blue"] + mark {
  background: #abdfff !important;
  color: #262626 !important;
}
span[data-ref="$red"] + mark {
  color: #f00 !important;
  background: unset !important;
  padding: 0;
  border-radius: 0;
}
span[data-ref="$green"] + mark {
  color: #0f0 !important;
  background: unset !important;
  padding: 0;
  border-radius: 0;
}
span[data-ref="$blue"] + mark {
  color: #00f !important;
  background: unset !important;
  padding: 0;
  border-radius: 0;
}
```

## Note

When removing nested formatting, run the remove command multiple times if the first pass doesn't clear everything.

## License

MIT — Original copyright by sethyuan. This fork is actively maintained under the same MIT License.
