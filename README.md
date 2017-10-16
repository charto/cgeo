cgeo
====

[![npm version](https://img.shields.io/npm/v/cgeo.svg)](https://www.npmjs.com/package/cgeo)

This is a collection of geometry / geography data types.
They're very lightweight and perfect for holding data from a spatial database.

Additional features such as reading / writing different formats or rendering
can be added through mixins / module augmentation from add-on packages.
All classes are carefully written in TypeScript so that the add-ons
can extend all classes while remaining fully typed.

Compatible add-ons:

- [cgeo-wkb](https://github.com/charto/cgeo-wkb)
- [cgeo-wkt](https://github.com/charto/cgeo-wkt)

The supported data types are as follows (nesting indicates inheritance):

- *Geometry*
  - Point
  - *Curve*
    - LineString
    - CircularString
    - CompoundCurve
  - *Surface*
    - Polygon
    - CurvePolygon
  - GeometryCollection
    - MultiPoint
    - MultiCurve
      - MultiLineString
    - MultiSurface
      - MultiPolygon

Usage
=====

Point
-----

An object with 4 properties:

- `x` (default 0)
- `y` (default 0)
- `z` (optional)
- `m` (optional)

It can be initialized in multiple ways:

```TypeScript
let a = new Point(1, 2);
let b = new Point(1, 2, 3, 4);
let c = new Point({ x: 1, y: 2, z: 3, m: 4 });
let d = new Point(b);
```

The above initialize `b`, `c` and `d` with the same contents.
`a` only has fields `x` and `y`.

License
=======

[The MIT License](https://raw.githubusercontent.com/charto/cgeo/master/LICENSE)

Copyright (c) 2017 BusFaster Ltd
