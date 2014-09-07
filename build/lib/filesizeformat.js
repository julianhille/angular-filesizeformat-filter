(function() {
    angular.module("jh.filesizeformat", [], function($filterProvider) {
        $filterProvider.register("filesizeformat", function() {
            return function filesizeformat(bytes, binary, precision) {
                /*
                    Javascript filesizeformater.
                    Inspired by jinja2 and some gists.

                    @version 1.0.1
                    @copyright 2014 Julian Hille
                    @author Julian Hille
                 */
                binary = typeof binary !== 'undefined' ? binary : false;
                precision = typeof precision !== 'undefined' ? precision : 2;
                var base = binary ? 1024 : 1000;
                var prefixes = [
                    (binary ? 'KiB' : 'kB'),
                    (binary ? 'MiB' : 'MB'),
                    (binary ? 'GiB' : 'GB'),
                    (binary ? 'TiB' : 'TB'),
                    (binary ? 'PiB' : 'PB'),
                    (binary ? 'EiB' : 'EB'),
                    (binary ? 'ZiB' : 'ZB'),
                    (binary ? 'YiB' : 'YB')
                ]
                if (!isFinite(bytes)) {
                  return '- Bytes';
                }
                else if (bytes == 1) {
                    return '1 Byte';
                }
                else if (bytes < base) {
                    return bytes + ' Bytes';
                }
                var index = Math.floor(Math.log(bytes) / Math.log(base));
                return parseFloat((bytes / Math.pow(base, Math.floor(index))).toFixed(precision)).toString() +  ' ' + prefixes[index-1];
            }

        });
    });


}).call(this);

//# sourceMappingURL=named-routes.js.map
