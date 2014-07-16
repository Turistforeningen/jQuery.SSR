jQuery.SSR
==========

jQuery plugin to communicate with The Norwegian Mapping Authority's Sentralt
Stedsnavnsregister (SSR). The authorative register for all location names in
all of Norway.

## API

### Search

```javascript
var request = $.fn.SSR('Name of a place');

request.done(function(result) {
  console.log(result.status);    // request status
  console.log(result.stedsnavn); // the resuls
});

request.error(function(error) {
  console.error(error);
});

request.alawsy(function() {
  // this is allways triggered
});
```

### Lookup

```javascript
$.fn.SSR(123).done(...).error(...).always(...);
```

## License

> The MIT License (MIT)
>
> Copyright (c) 2014 Turistforeningen, Hans Kristian Flaatten
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

