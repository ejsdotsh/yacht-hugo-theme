# YACHT Another Custom Hugo Theme

> **Under Construction** — this theme is sometimes being actively developed; breaking changes ahead

[![Build Status](https://img.shields.io/github/actions/workflow/status/ejsdotsh/yacht-hugo-theme/hugo.yaml?branch=main&logo=github)](https://github.com/ejsdotsh/yacht-hugo-theme/workflows)
[![Latest Release](https://img.shields.io/github/v/release/ejsdotsh/yacht-hugo-theme?logo=github)](https://github.com/ejsdotsh/yacht-hugo-theme/releases)
[![License](https://img.shields.io/github/license/ejsdotsh/yacht-hugo-theme?color=blue)](LICENSE)
[![Hugo](https://img.shields.io/badge/Hugo-%3E%3D0.80.0-ff4088?logo=hugo)](https://gohugo.io)
[![Catppuccin](https://img.shields.io/badge/Catppuccin-Palette-74c7ec?logo=catppuccin)](https://github.com/catppuccin/catppuccin)
[![Contributors](https://img.shields.io/github/contributors/ejsdotsh/yacht-hugo-theme?logo=github)](https://github.com/ejsdotsh/yacht-hugo-theme/graphs/contributors)

---

> When graduating from high school, I was voted *"most likely to own a yacht"* by my senior class. I don't think this is what they meant...

## What Is YACHT?

**YACHT** is a punny and recursively named theme for the [Hugo](https://gohugo.io) static site generator which uses the [Catppuccin Palettes](https://github.com/catppuccin/palette) and aims to be:

- Simple
- Mobile-first
- Accessible
- Responsive

## Getting Your Own YACHT

### Requirements

- Hugo ≥ 0.166.0
- Go (for module management)
- NPM (to install Tailwind-CLI)
- Tailwind-CLI

### Configuration

In `hugo.yaml`:

```yaml
  ...

build:
  buildStats:
    enable: true
  cachebusters:
  - source: 'assets/notwatching/hugo_stats\.json'
    target: css
  - source: '(postcss|tailwind)\.config\.js'
    target: css

hugoVersion:
   min: "0.166.0"
   extended: true

module:
  mounts:
  - source: assets
    target: assets
  - disableWatch: true
    source: hugo_stats.json
    target: assets/notwatching/hugo_stats.json
  imports:
    - path: github.com/ejsdotsh/yacht-hugo-theme
      disable: false

security:
  exec:
    allow:
    - ^(dart-)?sass$
    - ^go$
    - ^git$
    - ^node$
    - ^postcss$
    - ^tailwindcss$

markup:
  goldmark:
    renderer:
      unsafe: true
  duplicateResourceFiles: true

  ...
```

Then run:

```bash
npm install --save-dev tailwindcss @tailwindcss/cli @tailwindcss/typography

hugo mod get -u ./...
```

## References & Inspiration

This theme draws inspiration from:

- [Catppuccin](https://github.com/catppuccin/catppuccin)
- [Build Websites with Hugo](https://pragprog.com/titles/bhhugo/build-websites-with-hugo)
- [Every Layout CSS patterns](https://every-layout.dev)
- [Andy Bell's Personal Site](https://github.com/Andy-set-studio/personal-site-eleventy)
- [CUBECSS Methodology](https://piccalil.li/blog/cube-css/)
- [CUBECSS](https://cube.fyi/)
- [My Hugo blog now is fast and light](https://blog.setale.me/2022/01/31/My-Hugo-blog-now-is-fast-and-light/)

## Contributing

Contributions are welcome; please open an [Issue](https://github.com/ejsdotsh/yacht-hugo-theme/issues) describing the fix/change, and link a Pull Request.

- Fork the repository
- Create your feature branch (`git checkout -b feature/AmazingFeature`)
- Commit your changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request and link to Issue

## License

This project is licensed under the MPL-2.0 License — see the LICENSE file for details.

<div align="center">
Made with ❤️ by e.j. sahala
</div>
