# YACHT — Another Custom Hugo Theme

> When graduating from high school, I was voted *"most likely to own a yacht"* by my senior class. I don't think this is what they meant...

**YACHT** = **Y**et **A**nother **C**ustom **H**ugo **T**heme

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

> **Under Construction** — This theme is actively being developed.

## Getting Your Own YACHT

Once constructed, the preferred way of getting your own **YACHT** is by using **Hugo Modules**.

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

## Features

- Catppuccin Color Palette — Beautiful, consistent color schemes
- Mobile-First Design — Looks great on all devices
- Accessible — WCAG compliant where possible
- Fast — Minimal external dependencies
- Modular — Easy to customize and extend

## Requirements

- Hugo ≥ 0.80.0
- Go (for module management)
- Dart Sass

## References & Inspiration

This theme draws inspiration from:

| Resource                                                                                                    | Description                        |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [Catppuccin](https://github.com/catppuccin/catppuccin)                                                      | Color palette                      |
| [Build Websites with Hugo](https://pragprog.com/titles/bhhugo/build-websites-with-hugo)                     | Brian P. Hogan's book              |
| [Every Layout](https://every-layout.dev/)                                                                   | CSS layout patterns                |
| [Andy Bell's Personal Site](https://github.com/Andy-set-studio/personal-site-eleventy)                      | Design inspiration                 |
| [CUBECSS blog](https://piccalil.li/blog/cube-css/)                                                          | CSS methodology                    |
| [CUBECSS](https://cube.fyi/)                                                                                | CSS utility library                |
| [My Hugo blog now is fast and light](https://blog.setale.me/2022/01/31/My-Hugo-blog-now-is-fast-and-light/) | Lorenze Setale's Hugo optimization |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

- Fork the repository
- Create your feature branch (`git checkout -b feature/AmazingFeature`)
- Commit your changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

<!-- TODO Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests. -->

## Issues & Support

- Bug Reports: GitHub Issues
- Feature Requests: GitHub Discussions
- Email: <contactme@ejs.sh>

## License

This project is licensed under the MPL-2.0 License — see the LICENSE file for details.

## Acknowledgments

Special thanks to:

- The Catppuccin community for the beautiful palettes
- The Hugo community for amazing tooling
- All contributors who help make this theme better

<div align="center">
Made with ❤️ by e.j. sahala
</div>
