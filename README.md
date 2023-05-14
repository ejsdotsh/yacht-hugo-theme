# YACHT

**YACHT** **A**nother **C**ustom **H**ugo **T**heme

**YACHT** **A** **C**atppuccin **H**ugo **T**heme

**YACHT** is a recursively named theme for [Hugo][1], using the [Catppuccin][2] color palette, and styled with
[BulmaCSS][3].

## under construction

when graduating from highschool, i was voted *"most likely to own a yacht"* by my senior class. i don't think this is
what they meant...

## getting your own YACHT

when it's been constructed, the preferred way of getting a **YACHT** for yourself is by using `Hugo modules` in

`config.toml`:

```toml
theme = "github.com/ejsdotsh/yacht"

[module]
  [[module.imports]]
    path = "github.com/ejsdotsh/yacht"
```

or in `config.yaml`:

```yaml
theme: "github.com/ejsdotsh/yacht"
module:
  imports:
    path: "github.com/ejsdotsh/yacht"
    disable: false
```

### getting BulmaCSS

at present, BulmaCSS must be added as a git submodule:

```txt
cd assets
git submodule add https://github.com/jgthms/bulma.git
git commit -m "add Bulma"
```

## references

- Brian P. Hogan's [Build Websites with Hugo](https://pragprog.com/titles/bhhugo/build-websites-with-hugo)
- Atishay Jain's [Hugo in Action](https://www.manning.com/books/hugo-in-action)

[1]: <https://gohugo.io> "Hugo"
[2]: <https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md> "Catppuccin Style Guide"
[3]: <https://bulmaio> "BulmaCSS"

