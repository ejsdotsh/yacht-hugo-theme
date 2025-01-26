# YACHT Another Custom Hugo Theme

when graduating from highschool, i was voted *"most likely to own a yacht"* by my senior class. i don't think this is what they meant...

***under construction***

after spending a lot of time trying to customize other people's themes, i decided to create...

***YACHT** **A**nother **C**ustom **H**ugo **T**heme*

## what is YACHT

***YACHT*** is a punny and recursively named theme for the [Hugo][1] static site generator which uses the
[Catppuccin Palettes][2] and aims to be simple, mobile-first, accessible, responsive, and to have minimal
external dependencies.

***under construction***

## getting your own YACHT

after it's been constructed, the preferred way of getting your own **YACHT** is by using `Hugo modules`

in `config.toml`:

```toml
theme = "github.com/ejsdotsh/yacht-hugo-theme"

[module]
  [[module.imports]]
    path = "github.com/ejsdotsh/yacht-hugo-theme"
```

or in `config.yaml`:

```yaml
theme: "github.com/ejsdotsh/yacht-hugo-theme"
module:
  imports:
    path: "github.com/ejsdotsh/yacht-hugo-theme"
    disable: false
```

then run:

```txt
hugo mod get -u ./...
```

and then do other stuff

## references

- Brian P. Hogan's [Build Websites with Hugo](https://pragprog.com/titles/bhhugo/build-websites-with-hugo)
- [Catppuccin for Sass](https://github.com/catppuccin/palette/blob/main/docs/sass.md)
- Lorenze Setale's [My Hugo blog now is fast and light](https://blog.setale.me/2022/01/31/My-Hugo-blog-now-is-fast-and-light/)
- Atishay Jain's [Hugo in Action](https://www.manning.com/books/hugo-in-action)

[1]: <https://gohugo.io> "Hugo"
[2]: <https://github.com/catppuccin/palette> "Catppuccin Palettes"
