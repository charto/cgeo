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

License
=======

[The MIT License](https://raw.githubusercontent.com/charto/cgeo/master/LICENSE)

Copyright (c) 2017 BusFaster Ltd
