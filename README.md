中文 | [English](README.en.md)

# logseq-plugin-wrap-plus (Text Wrapper Plus)

为选中文字创建自定义包围/替换规则，并可绑定快捷键。内置一套涵盖高亮、文字色、加粗、斜体、删除线、下划线、行内代码、公式、页面链接、Cloze 遮挡等常用操作的默认配置。

> 本项目 fork 自 [qbosen/logseq-plugin-wrap](https://github.com/qbosen/logseq-plugin-wrap)，原作者为 [sethyuan](https://github.com/sethyuan)，遵循原 MIT 协议。

## 使用展示

![demo](./demo.gif)

## 内置默认功能

| 功能 | 说明 |
|------|------|
| 包围为页面链接 | `[[选中文字]]` |
| Cloze 遮挡 | `{{cloze 选中文字}}` |
| 不可见 Cloze | `[[#cloze]]==选中文字==`（需配合 CSS） |
| 加粗 / 斜体 / 删除线 / 下划线 | 常用 Markdown 格式 |
| 行内代码 | \`选中文字\` |
| 数学公式 | `$$选中文字$$` |
| 红/绿/蓝 高亮 | 彩色 mark 标注 |
| 红/绿/蓝 文字色 | 彩色文字 |
| 一键去除格式 | 快捷键 `mod+shift+x` |

## 安装

在 Logseq 插件市场搜索 **Text Wrapper Plus** 安装，或从 [Releases](https://github.com/Hugh-Afterlight/logseq-plugin-wrap/releases) 下载 zip 手动加载。

## 用户配置

在 Logseq 插件设置页面可自定义所有规则。以下是完整配置示例（即默认值）：

```json
{
  "disabled": false,
  "toolbar": true,
  "toolbarShortcut": ""
}
```

### 配置说明

- **`toolbar`**：是否显示悬浮工具栏，默认 `true`。
- **`toolbarShortcut`**：切换工具栏显示/隐藏的快捷键，留空则不绑定。
- **`wrap-*`**：自定义文字包围规则。`template` 中的 `$^` 代表选中的文字。
- **`repl-*`**：自定义文字替换规则。`regex` 为正则表达式，`replacement` 为替换结果。
- **`group-*`**：将多个规则归为一组，在工具栏中合并显示（下拉展开）。

### 自定义示例

```json
{
  "wrap-mymark": {
    "label": "红色高亮",
    "binding": "mod+shift+r",
    "template": "[[#red]]==$^==",
    "icon": "<svg>...</svg>"
  },
  "repl-clear": {
    "label": "去除格式",
    "binding": "mod+shift+x",
    "regex": "==([^=]*)==",
    "replacement": "$1"
  }
}
```

## 工具栏样式自定义

```css
:root {
  --kef-wrap-tb-bg: rgba(39, 39, 42, 0.92);
  --kef-wrap-tb-hover: rgba(255, 255, 255, 0.12);
}
:root.dark {
  --kef-wrap-tb-bg: rgba(63, 63, 70, 0.92);
  --kef-wrap-tb-hover: rgba(255, 255, 255, 0.16);
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

## 内置高亮与文字色样式

```css
mark {
  background: #fef3ac !important;
  color: #262626 !important;
}
mark.kef-wrap-hl-red,
mark[class~="#red"],
span[data-ref="#red"] + mark {
  background: #ffc7c7 !important;
  color: #262626 !important;
}
mark.kef-wrap-hl-green,
mark[class~="#green"],
span[data-ref="#green"] + mark {
  background: #ccffc1 !important;
  color: #262626 !important;
}
mark.kef-wrap-hl-blue,
mark[class~="#blue"],
span[data-ref="#blue"] + mark {
  background: #abdfff !important;
  color: #262626 !important;
}
mark.kef-wrap-text-red,
mark[class~="$red"],
span[data-ref="$red"] + mark {
  color: #e20f0f !important;
  background: unset !important;
  padding: 0;
  border-radius: 0;
}
mark.kef-wrap-text-green,
mark[class~="$green"],
span[data-ref="$green"] + mark {
  color: #15803d !important;
  background: unset !important;
  padding: 0;
  border-radius: 0;
}
mark.kef-wrap-text-blue,
mark[class~="$blue"],
span[data-ref="$blue"] + mark {
  color: #0284c7 !important;
  background: unset !important;
  padding: 0;
  border-radius: 0;
}
span[data-ref="#red"],
span[data-ref="#green"],
span[data-ref="#blue"],
span[data-ref="$red"],
span[data-ref="$green"],
span[data-ref="$blue"] {
  display: none;
}
```

## 插件市场提交

本仓库已包含 MIT `LICENSE`、中英文 README、演示图和 `.github/workflows/publish.yml`。发布 `v0.8.2` 这类 tag 后，GitHub Actions 会构建并上传 `logseq-plugin-wrap-plus.zip`，再把以下 manifest 提交到 `logseq/marketplace` 的 `packages/logseq-plugin-wrap-plus/manifest.json`：

```json
{
  "title": "Text Wrapper Plus",
  "description": "Wrap selected text in Logseq with page refs, cloze, formatting, colored highlights, and colored text from a compact toolbar.",
  "author": "Hugh-Afterlight",
  "repo": "Hugh-Afterlight/logseq-plugin-wrap",
  "icon": "icon.png",
  "theme": false
}
```

## 注意

嵌套格式一次去除不干净时，可多次执行去除操作。

## License

MIT — 原始版权归 sethyuan 所有，本 fork 在 MIT 协议下继续维护。
