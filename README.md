# YACHT — Another Custom Hugo Theme

> When graduating from high school, I was voted *"most likely to own a yacht"* by my senior class. I don't think this is what they meant...

**YACHT** = **Y**ACHT **A**nother **C**ustom **H**ugo **T**heme

[![Build Status](https://img.shields.io/github/actions/workflow/status/ejsdotsh/yacht-hugo-theme/hugo.yaml?branch=main&logo=github)](https://github.com/ejsdotsh/yacht-hugo-theme/workflows)
[![Latest Release](https://img.shields.io/github/v/release/ejsdotsh/yacht-hugo-theme?logo=github)](https://github.com/ejsdotsh/yacht-hugo-theme/releases)
[![License](https://img.shields.io/github/license/ejsdotsh/yacht-hugo-theme?color=blue)](LICENSE)
[![Hugo](https://img.shields.io/badge/Hugo-%3E%3D0.80.0-ff4088?logo=hugo)](https://gohugo.io)
[![Catppuccin](https://img.shields.io/badge/Catppuccin-Palette-74c7ec?logo=catppuccin)](https://github.com/catppuccin/catppuccin)
[![Contributors](https://img.shields.io/github/contributors/ejsdotsh/yacht-hugo-theme?logo=github)](https://github.com/ejsdotsh/yacht-hugo-theme/graphs/contributors)

---

## What Is YACHT?

**YACHT** is a punny and recursively named theme for the [Hugo](https://gohugo.io) static site generator which uses the [Catppuccin Palettes](https://github.com/catppuccin/palette) and aims to be:

- Simple
- Mobile-first
- Accessible
- Responsive
- Minimal external dependencies

> **Under Construction** — this theme is sometimes being actively developed; breaking changes ahead

## Getting Your Own YACHT

Once constructed, the preferred way of getting your own **YACHT** is by using **Hugo Modules**.

Please note that with the pending removal of the embedded libsass transpiler in Hugo, an external installion (not covered) of Dart Sass is required.

### Requirements

- Hugo ≥ 0.114.0
- Go (for module management)
- Dart Sass

### Configuration

For `config.toml`:

```toml
[module]
[[module.imports]]
path = "github.com/ejsdotsh/yacht-hugo-theme"

[markup]
[markup.sass]
embed = false
```

For `config.yaml`:

```yaml
module:
  imports:
    - path: "github.com/ejsdotsh/yacht-hugo-theme"
      disable: false

markup:
  sass:
    embed: false
```

Then run:

```bash
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
