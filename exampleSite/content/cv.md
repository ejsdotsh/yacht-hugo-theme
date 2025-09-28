---
title: "cv"
date: 2023-01-18T20:03:36-08:00
draft: false
---
the mobile version of the `cv` type arranges everything in a single column:

```mermaid
block-beta
columns 1
  block:header
    columns 3
    logo palette_picker hamburger
  end
  block:main
    columns 2
    h i j k
  end
  block:footer
    columns 1
    l m n o p q r
  end
```

the larger (tablet/desktop/printable) version:

```mermaid
block-beta
columns 3
  block:header:3
    logo palette_picker navigation
  end
  block:main:3
    columns 2
    h i j k
  end
  block:footer:3
    l m n o p q r
  end
```
