angular-filesizeformat-filter
=============================

Filesizeformat filter for templates in angularJS

## Install
`$ bower install angular-filesizeformat-filter`

## Usages

In your app / module

```
    angular.module('yourModule', ['jh.filesizeformat', ....
```



In your templates, you are able to use it as filter.

```
    {{ size|filesizeformat:true:3 }}
```

### Parameters

```
    function filesizeformat(bytes, binary, precision) ...
```

#### bytes
Size in bytes.

#### binary
SI value switch (KiB or kB).
binary == true -> KiB
default == false

#### precision
precision of floating point (count of decimal places)
<<<<<<< HEAD
=======

# TODO
Add tests with ( use travis)

>>>>>>> release/v1.0.2
