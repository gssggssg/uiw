(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{1049:function(e,n){var d;d="(?:[\\w-]+|'[^'\n\r]*'|\"(?:\\.|[^\\\\\"\r\n])*\")",Prism.languages.toml={comment:{pattern:/#.*/,greedy:!0},table:{pattern:RegExp("(^\\s*\\[\\s*(?:\\[\\s*)?)"+d+"(?:\\s*\\.\\s*"+d+")*(?=\\s*\\])","m"),lookbehind:!0,greedy:!0,alias:"class-name"},key:{pattern:RegExp("(^\\s*|[{,]\\s*)"+d+"(?:\\s*\\.\\s*"+d+")*(?=\\s*=)","m"),lookbehind:!0,greedy:!0,alias:"property"},string:{pattern:/"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},date:[{pattern:/\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?/i,alias:"number"},{pattern:/\d{2}:\d{2}:\d{2}(?:\.\d+)?/i,alias:"number"}],number:/(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?(?:inf|nan)\b/,boolean:/\b(?:true|false)\b/,punctuation:/[.,=[\]{}]/}}}]);