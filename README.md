# YACHT Another Custom Hugo Theme

***under construction***

after spending a lot of time with other people's themes, i decided that i wanted to learn how, and started creating my own... 

***YACHT*** is a recursively named theme for the [Hugo][1] static site generator, using the [Catppuccin][2] palette and styled with [BulmaCSS][3], that aims to be mobile-first, accessible, and responsive.

***under construction***

## getting your own YACHT

when graduating from highschool, i was voted *"most likely to own a yacht"* by my senior class. i don't think this is what they meant...

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

## references

- Brian P. Hogan's [Build Websites with Hugo](https://pragprog.com/titles/bhhugo/build-websites-with-hugo)
- Atishay Jain's [Hugo in Action](https://www.manning.com/books/hugo-in-action)
- Catppuccin [palette](https://github.com/catppuccin/palette/)

[1]: <https://gohugo.io> "Hugo"
[2]: <https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md> "Catppuccin Style Guide"
[3]: <https://bulmaio> "BulmaCSS"
