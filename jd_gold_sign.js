/*
京东金榜 蚊子肉
author：
https://t.me/proenv
https://github.com/feverrun/my_scripts
 */
const $ = new Env('京东金榜');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';


var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe61f3=["","\x73\x63\x65\x6E\x65\x69\x64","\x6A\x64\x67\x6F\x6C\x64\x65\x6E\x72\x61\x6E\x6B\x69\x6E\x67\x32\x30\x32\x32\x68\x35","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E","\x69\x73\x4E\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x65\x6E\x76","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x47\x49\x54\x48\x55\x42","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x65\x78\x69\x74","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x74\x6F\x4F\x62\x6A","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F","\x6D\x73\x67","\x6C\x65\x6E\x67\x74\x68","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x62\x65\x61\x6E\x73","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x55\x55\x49\x44","\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x2D\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78","\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A","\x77\x61\x69\x74","\x72\x61\x6E\x64\x6F\x6D","\x67\x6F\x6C\x64\x43\x65\x6E\x74\x65\x72\x48\x65\x61\x64","\x7B\x7D","\x70\x61\x72\x73\x65","\x63\x6F\x64\x65","\x30","\x6D\x65\x64\x61\x6C\x4E\x75\x6D","\x72\x65\x73\x75\x6C\x74","\x6C\x6F\x67\x45\x72\x72","\x70\x6F\x73\x74","\x51\x65\x49\x65\x78\x6B\x61\x46\x43\x35\x75\x4F\x54\x58\x65\x31\x48\x36\x38\x6B\x47\x77\x3D\x3D","\x6E\x6F\x77","\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x2C\x20\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x2C\x20\x2A\x2F\x2A","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6E\x76\x69\x74\x65\x2D\x72\x65\x77\x61\x72\x64\x2E\x6A\x64\x2E\x63\x6F\x6D","\x7A\x68\x2D\x63\x6E","\x4A\x53\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x2E\x2F\x4A\x53\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54\x53","\x4A\x53\x55\x41","\x27\x6A\x64\x6C\x74\x61\x70\x70\x3B\x69\x50\x61\x64\x3B\x33\x2E\x31\x2E\x30\x3B\x31\x34\x2E\x34\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x61\x64\x3B\x20\x43\x50\x55\x20\x4F\x53\x20\x31\x34\x5F\x34\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6E\x76\x69\x74\x65\x2D\x72\x65\x77\x61\x72\x64\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F","\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x49\x6E\x76\x69\x74\x65\x46\x72\x69\x65\x6E\x64\x41\x70\x69\x53\x65\x72\x76\x69\x63\x65\x26\x62\x6F\x64\x79\x3D\x7B\x22\x6D\x65\x74\x68\x6F\x64\x22\x3A\x22\x61\x74\x74\x65\x6E\x64\x49\x6E\x76\x69\x74\x65\x41\x63\x74\x69\x76\x69\x74\x79\x22\x2C\x22\x64\x61\x74\x61\x22\x3A\x7B\x22\x69\x6E\x76\x69\x74\x65\x72\x50\x69\x6E\x22\x3A\x22","\x22\x2C\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x31\x2C\x22\x74\x6F\x6B\x65\x6E\x22\x3A\x22\x22\x2C\x22\x66\x72\x6F\x6E\x74\x65\x6E\x64\x49\x6E\x69\x74\x53\x74\x61\x74\x75\x73\x22\x3A\x22\x22\x7D\x7D\x26\x72\x65\x66\x65\x72\x65\x72\x3D\x2D\x31\x26\x65\x69\x64\x3D\x65\x69\x64\x49\x66\x33\x64\x64\x38\x31\x32\x31\x62\x37\x73\x64\x6D\x69\x42\x4C\x47\x64\x78\x52\x52\x34\x36\x4F\x6C\x57\x79\x68\x36\x32\x6B\x46\x41\x5A\x6F\x67\x54\x4A\x46\x6E\x59\x71\x71\x52\x6B\x77\x67\x72\x36\x33\x25\x32\x42\x64\x47\x6D\x4D\x6C\x63\x76\x37\x45\x51\x4A\x35\x76\x30\x48\x42\x69\x63\x38\x31\x78\x48\x58\x7A\x58\x4C\x77\x4B\x4D\x36\x66\x68\x33\x69\x39\x36\x33\x7A\x49\x61\x37\x59\x6D\x32\x76\x35\x65\x68\x6E\x77\x6F\x32\x42\x37\x75\x44\x4E\x39\x32\x51\x30\x26\x61\x69\x64\x3D\x26\x63\x6C\x69\x65\x6E\x74\x3D\x69\x6F\x73\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x31\x34\x2E\x34\x26\x6E\x65\x74\x77\x6F\x72\x6B\x54\x79\x70\x65\x3D\x77\x69\x66\x69\x26\x66\x70\x3D\x2D\x31\x26\x61\x70\x70\x69\x64\x3D\x6D\x61\x72\x6B\x65\x74\x2D\x74\x61\x73\x6B\x2D\x68\x35\x26\x5F\x74\x3D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x3F\x74\x3D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x2E\x6A\x64\x2E\x63\x6F\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x3F\x69\x6E\x76\x69\x74\x65\x72\x49\x64\x3D","\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x54\x61\x73\x6B\x49\x6E\x76\x69\x74\x65\x53\x65\x72\x76\x69\x63\x65\x26\x62\x6F\x64\x79\x3D\x7B\x22\x6D\x65\x74\x68\x6F\x64\x22\x3A\x22\x70\x61\x72\x74\x69\x63\x69\x70\x61\x74\x65\x49\x6E\x76\x69\x74\x65\x54\x61\x73\x6B\x22\x2C\x22\x64\x61\x74\x61\x22\x3A\x7B\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x22\x31\x22\x2C\x22\x65\x6E\x63\x72\x79\x70\x74\x69\x6F\x6E\x49\x6E\x76\x69\x74\x65\x72\x50\x69\x6E\x22\x3A\x22","\x22\x2C\x22\x74\x79\x70\x65\x22\x3A\x31\x7D\x7D\x26\x61\x70\x70\x69\x64\x3D\x6D\x61\x72\x6B\x65\x74\x2D\x74\x61\x73\x6B\x2D\x68\x35\x26\x75\x75\x69\x64\x3D\x26\x5F\x74\x3D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F","\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x49\x6E\x76\x69\x74\x65\x46\x72\x69\x65\x6E\x64\x43\x68\x61\x6E\x67\x65\x41\x73\x73\x65\x72\x74\x73\x53\x65\x72\x76\x69\x63\x65\x26\x62\x6F\x64\x79\x3D","\x61\x74\x74\x65\x6E\x64\x49\x6E\x76\x69\x74\x65\x41\x63\x74\x69\x76\x69\x74\x79","\x26\x72\x65\x66\x65\x72\x65\x72\x3D\x2D\x31\x26\x65\x69\x64\x3D\x65\x69\x64\x49\x39\x62\x32\x39\x38\x31\x32\x30\x32\x66\x73\x65\x63\x38\x33\x69\x52\x57\x31\x6E\x54\x73\x4F\x56\x7A\x43\x6F\x63\x57\x64\x61\x33\x59\x48\x50\x4E\x34\x37\x31\x41\x59\x37\x38\x25\x32\x46\x51\x42\x68\x59\x62\x58\x65\x57\x74\x64\x67\x25\x32\x46\x33\x54\x43\x74\x56\x54\x4D\x72\x45\x31\x4A\x6A\x4D\x38\x53\x71\x74\x38\x66\x32\x54\x71\x46\x31\x5A\x35\x50\x25\x32\x46\x52\x50\x47\x6C\x7A\x41\x31\x64\x45\x52\x50\x30\x5A\x35\x62\x4C\x57\x64\x71\x35\x4E\x35\x42\x32\x56\x62\x42\x4F\x26\x61\x69\x64\x3D\x26\x63\x6C\x69\x65\x6E\x74\x3D\x69\x6F\x73\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x31\x34\x2E\x34\x2E\x32\x26\x6E\x65\x74\x77\x6F\x72\x6B\x54\x79\x70\x65\x3D\x77\x69\x66\x69\x26\x66\x70\x3D\x2D\x31\x26\x75\x75\x69\x64\x3D\x61\x62\x30\x34\x38\x30\x38\x34\x62\x34\x37\x64\x66\x32\x34\x38\x38\x30\x36\x31\x33\x33\x32\x36\x66\x65\x66\x66\x64\x66\x37\x65\x65\x65\x34\x37\x31\x34\x38\x38\x26\x6F\x73\x56\x65\x72\x73\x69\x6F\x6E\x3D\x31\x34\x2E\x34\x2E\x32\x26\x64\x5F\x62\x72\x61\x6E\x64\x3D\x69\x50\x68\x6F\x6E\x65\x26\x64\x5F\x6D\x6F\x64\x65\x6C\x3D\x69\x50\x68\x6F\x6E\x65\x31\x30\x2C\x32\x26\x61\x67\x65\x6E\x74\x3D\x2D\x31\x26\x70\x61\x67\x65\x43\x6C\x69\x63\x6B\x4B\x65\x79\x3D\x2D\x31\x26\x70\x6C\x61\x74\x66\x6F\x72\x6D\x3D\x33\x26\x6C\x61\x6E\x67\x3D\x7A\x68\x5F\x43\x4E\x26\x61\x70\x70\x69\x64\x3D\x6D\x61\x72\x6B\x65\x74\x2D\x74\x61\x73\x6B\x2D\x68\x35\x26\x5F\x74\x3D","\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x2D\x48\x61\x6E\x73\x3B\x71\x3D\x30\x2E\x39","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72","\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x54\x61\x73\x6B\x49\x6E\x76\x69\x74\x65\x53\x65\x72\x76\x69\x63\x65\x26\x62\x6F\x64\x79\x3D","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x74\x65\x49\x6E\x76\x69\x74\x65\x54\x61\x73\x6B","\x31","\x26\x61\x70\x70\x69\x64\x3D\x6D\x61\x72\x6B\x65\x74\x2D\x74\x61\x73\x6B\x2D\x68\x35\x26\x75\x75\x69\x64\x3D\x26\x5F\x74\x3D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x73\x73\x69\x67\x6E\x6D\x65\x6E\x74\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F","\x6C\x6F\x67\x53\x74\x72","\x67\x6F\x6C\x64\x43\x65\x6E\x74\x65\x72\x44\x6F\x54\x61\x73\x6B","\x67\x6F\x6C\x64\x43\x65\x6E\x74\x65\x72\x44\x6F\x54\x61\x73\x6B\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x74\x61\x73\x6B\x43\x6F\x64\x65","\u6210\u529F\uFF0C\u83B7\u5F97\x20","\x6C\x6F\x74\x74\x65\x72\x79\x53\x63\x6F\x72\x65","\u4EAC\u8C46","\u5931\u8D25\uFF1A","\x74\x61\x73\x6B\x4D\x73\x67","\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D","\x26\x62\x6F\x64\x79\x3D","\x26\x61\x70\x70\x69\x64\x3D\x63\x6F\x6E\x74\x65\x6E\x74\x5F\x65\x63\x6F\x6C\x6F\x67\x79\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x31\x31\x2E\x31\x2E\x32\x26\x63\x6C\x69\x65\x6E\x74\x3D\x77\x68\x35\x26\x65\x75\x66\x76\x3D\x66\x61\x6C\x73\x65\x26\x75\x75\x69\x64\x3D","\x26\x65\x78\x74\x3D","\x26\x61\x72\x65\x61\x3D","\x2A\x2F\x2A","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x35\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F","\x4A\x44\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x2E\x2F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54\x53","\x4A\x44\x55\x41","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x34\x2E\x34\x3B\x31\x34\x2E\x33\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x34\x67\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x67\x65\x74\x2F\x6B\x6F\x69\x6C\x6F\x67\x73\x3F\x66\x6C\x61\x67\x3D\x67\x6F\x6C\x64","\x6A\x64\x61\x70\x70\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x31\x31\x2E\x31\x2E\x32\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x31\x30\x3B\x20\x50\x43\x43\x4D\x30\x30\x20\x42\x75\x69\x6C\x64\x2F\x51\x4B\x51\x31\x2E\x31\x39\x31\x30\x32\x31\x2E\x30\x30\x32\x3B\x20\x77\x76\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x34\x2E\x30\x20\x43\x68\x72\x6F\x6D\x65\x2F\x38\x39\x2E\x30\x2E\x34\x33\x38\x39\x2E\x37\x32\x20\x4D\x51\x51\x42\x72\x6F\x77\x73\x65\x72\x2F\x36\x2E\x32\x20\x54\x42\x53\x2F\x30\x34\x36\x30\x31\x31\x20\x4D\x6F\x62\x69\x6C\x65\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36","\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF","\x64\x61\x74\x61","\x67\x65\x74","\x6F\x62\x6A\x65\x63\x74","\u4EAC\u4E1C\u670D\u52A1\u5668\u8BBF\u95EE\u6570\u636E\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\u81EA\u8EAB\u8BBE\u5907\u7F51\u7EDC\u60C5\u51B5","\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78","\x78","\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65","\x72\x65\x70\x6C\x61\x63\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let cookiesArr=[],cookie=__Oxe61f3[0x0],message;$[__Oxe61f3[0x1]]= __Oxe61f3[0x2];const JD_API_HOST=__Oxe61f3[0x3];if($[__Oxe61f3[0x4]]()){Object[__Oxe61f3[0x7]](jdCookieNode)[__Oxe61f3[0x6]]((_0xf8bex5)=>{cookiesArr[__Oxe61f3[0x5]](jdCookieNode[_0xf8bex5])});if(process[__Oxe61f3[0x9]][__Oxe61f3[0x8]]&& process[__Oxe61f3[0x9]][__Oxe61f3[0x8]]=== __Oxe61f3[0xa]){console[__Oxe61f3[0xb]]= ()=>{}};if(JSON[__Oxe61f3[0xe]](process[__Oxe61f3[0x9]])[__Oxe61f3[0xd]](__Oxe61f3[0xc])>  -1){process[__Oxe61f3[0xf]](0)}}else {cookiesArr= [$[__Oxe61f3[0x12]](__Oxe61f3[0x11]),$[__Oxe61f3[0x12]](__Oxe61f3[0x13]),...$[__Oxe61f3[0x18]]($[__Oxe61f3[0x12]](__Oxe61f3[0x16])|| __Oxe61f3[0x17])[__Oxe61f3[0x15]]((_0xf8bex5)=>{return _0xf8bex5[__Oxe61f3[0x14]]})][__Oxe61f3[0x10]]((_0xf8bex5)=>{return !!_0xf8bex5})};!(async ()=>{if(!cookiesArr[0x0]){$[__Oxe61f3[0x22]]($[__Oxe61f3[0x1c]],__Oxe61f3[0x20],__Oxe61f3[0x21],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxe61f3[0x21]});return};for(let _0xf8bex7=0;_0xf8bex7< cookiesArr[__Oxe61f3[0x23]];_0xf8bex7++){if(cookiesArr[_0xf8bex7]){cookie= cookiesArr[_0xf8bex7];$[__Oxe61f3[0x24]]= decodeURIComponent(cookie[__Oxe61f3[0x25]](/pt_pin=(.+?);/)&& cookie[__Oxe61f3[0x25]](/pt_pin=(.+?);/)[0x1]);$[__Oxe61f3[0x26]]= _0xf8bex7+ 1;$[__Oxe61f3[0x27]]= true;$[__Oxe61f3[0x28]]= 0;$[__Oxe61f3[0x29]]= __Oxe61f3[0x0];message= __Oxe61f3[0x0];$[__Oxe61f3[0x2a]]= getUUID(__Oxe61f3[0x2b]);console[__Oxe61f3[0xb]](`${__Oxe61f3[0x2c]}${$[__Oxe61f3[0x26]]}${__Oxe61f3[0x2d]}${$[__Oxe61f3[0x29]]|| $[__Oxe61f3[0x24]]}${__Oxe61f3[0x2e]}`); await doInfo(); await $[__Oxe61f3[0x2f]](100); await goldCenterHead(); await $[__Oxe61f3[0x2f]](parseInt(Math[__Oxe61f3[0x30]]()* 3500+ 2500,10))}}})()[__Oxe61f3[0x1f]]((_0xf8bex6)=>{$[__Oxe61f3[0xb]](__Oxe61f3[0x0],`${__Oxe61f3[0x1b]}${$[__Oxe61f3[0x1c]]}${__Oxe61f3[0x1d]}${_0xf8bex6}${__Oxe61f3[0x1e]}`,__Oxe61f3[0x0])})[__Oxe61f3[0x1a]](()=>{$[__Oxe61f3[0x19]]()});function goldCenterHead(){return  new Promise((_0xf8bex9)=>{const _0xf8bexa=taskUrl(__Oxe61f3[0x31],__Oxe61f3[0x32]);$[__Oxe61f3[0x39]](_0xf8bexa,async (_0xf8bexb,_0xf8bexc,_0xf8bexd)=>{try{if(_0xf8bexb){}else {if(safeGet(_0xf8bexd)){_0xf8bexd= JSON[__Oxe61f3[0x33]](_0xf8bexd);if(_0xf8bexd[__Oxe61f3[0x34]]=== __Oxe61f3[0x35]){ await goldCreatorDoTask(1); await $[__Oxe61f3[0x2f]](parseInt(Math[__Oxe61f3[0x30]]()* 3500+ 1500,10));if(_0xf8bexd[__Oxe61f3[0x37]][__Oxe61f3[0x36]]=== 5){ await goldCreatorDoTask(2); await $[__Oxe61f3[0x2f]](parseInt(Math[__Oxe61f3[0x30]]()* 3500+ 1500,10))}}else {}}}}catch(e){$[__Oxe61f3[0x38]](e,_0xf8bexc)}finally{_0xf8bex9()}})})}async function doInfo(){let _0xf8bexf=__Oxe61f3[0x3a]; await doTask3(cookie,_0xf8bexf); await $[__Oxe61f3[0x2f]](parseInt(Math[__Oxe61f3[0x30]]()* 200+ 100,10)); await doTask4(cookie,_0xf8bexf); await $[__Oxe61f3[0x2f]](parseInt(Math[__Oxe61f3[0x30]]()* 200+ 100,10)); await doTask1(cookie,_0xf8bexf); await $[__Oxe61f3[0x2f]](parseInt(Math[__Oxe61f3[0x30]]()* 200+ 100,10)); await doTask2(cookie,_0xf8bexf); await $[__Oxe61f3[0x2f]](parseInt(Math[__Oxe61f3[0x30]]()* 200+ 100,10))}async function doTask1(_0xf8bex11,_0xf8bexf){let _0xf8bex12=Date[__Oxe61f3[0x3b]]();var _0xf8bex13={'\x48\x6F\x73\x74':__Oxe61f3[0x3c],'\x61\x63\x63\x65\x70\x74':__Oxe61f3[0x3d],'\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65':__Oxe61f3[0x3e],'\x6F\x72\x69\x67\x69\x6E':__Oxe61f3[0x3f],'\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65':__Oxe61f3[0x40],'\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74':$[__Oxe61f3[0x4]]()?process[__Oxe61f3[0x9]][__Oxe61f3[0x41]]?process[__Oxe61f3[0x9]][__Oxe61f3[0x41]]:require(__Oxe61f3[0x43])[__Oxe61f3[0x42]]:$[__Oxe61f3[0x12]](__Oxe61f3[0x44])?$[__Oxe61f3[0x12]](__Oxe61f3[0x44]):__Oxe61f3[0x45],'\x72\x65\x66\x65\x72\x65\x72':__Oxe61f3[0x46],'\x43\x6F\x6F\x6B\x69\x65':_0xf8bex11};var _0xf8bex14=__Oxe61f3[0x47]+ encodeURIComponent(_0xf8bexf)+ __Oxe61f3[0x48]+ _0xf8bex12;var _0xf8bexa={'\x75\x72\x6C':__Oxe61f3[0x49]+ Date[__Oxe61f3[0x3b]](),'\x68\x65\x61\x64\x65\x72\x73':_0xf8bex13,'\x62\x6F\x64\x79':_0xf8bex14};$[__Oxe61f3[0x39]](_0xf8bexa,(_0xf8bexb,_0xf8bexc,_0xf8bexd)=>{})}async function doTask2(_0xf8bex11,_0xf8bexf){let _0xf8bex12=Date[__Oxe61f3[0x3b]]();let _0xf8bex13={'\x48\x6F\x73\x74':__Oxe61f3[0x3c],'\x61\x63\x63\x65\x70\x74':__Oxe61f3[0x3d],'\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65':__Oxe61f3[0x3e],'\x6F\x72\x69\x67\x69\x6E':__Oxe61f3[0x4a],'\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65':__Oxe61f3[0x40],'\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74':$[__Oxe61f3[0x4]]()?process[__Oxe61f3[0x9]][__Oxe61f3[0x41]]?process[__Oxe61f3[0x9]][__Oxe61f3[0x41]]:require(__Oxe61f3[0x43])[__Oxe61f3[0x42]]:$[__Oxe61f3[0x12]](__Oxe61f3[0x44])?$[__Oxe61f3[0x12]](__Oxe61f3[0x44]):__Oxe61f3[0x45],'\x72\x65\x66\x65\x72\x65\x72':__Oxe61f3[0x4b]+ encodeURIComponent(_0xf8bexf),'\x43\x6F\x6F\x6B\x69\x65':_0xf8bex11};let _0xf8bex14=__Oxe61f3[0x4c]+ encodeURIComponent(_0xf8bexf)+ __Oxe61f3[0x4d]+ _0xf8bex12;var _0xf8bexa={'\x75\x72\x6C':__Oxe61f3[0x4e],'\x68\x65\x61\x64\x65\x72\x73':_0xf8bex13,'\x62\x6F\x64\x79':_0xf8bex14};$[__Oxe61f3[0x39]](_0xf8bexa,(_0xf8bexb,_0xf8bexc,_0xf8bexd)=>{})}function doTask3(_0xf8bex11,_0xf8bexf){let _0xf8bex12=+ new Date();let _0xf8bex13={'\x75\x72\x6C':__Oxe61f3[0x49]+ _0xf8bex12,'\x62\x6F\x64\x79':__Oxe61f3[0x4f]+ JSON[__Oxe61f3[0xe]]({'\x6D\x65\x74\x68\x6F\x64':__Oxe61f3[0x50],'\x64\x61\x74\x61':{'\x69\x6E\x76\x69\x74\x65\x72\x50\x69\x6E':encodeURIComponent(_0xf8bexf),'\x63\x68\x61\x6E\x6E\x65\x6C':1,'\x74\x6F\x6B\x65\x6E':__Oxe61f3[0x0],'\x66\x72\x6F\x6E\x74\x65\x6E\x64\x49\x6E\x69\x74\x53\x74\x61\x74\x75\x73':__Oxe61f3[0x0]}})+ __Oxe61f3[0x51]+ _0xf8bex12,'\x68\x65\x61\x64\x65\x72\x73':{'\x48\x6F\x73\x74':__Oxe61f3[0x3c],'\x41\x63\x63\x65\x70\x74':__Oxe61f3[0x3d],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65':__Oxe61f3[0x3e],'\x4F\x72\x69\x67\x69\x6E':__Oxe61f3[0x3f],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxe61f3[0x52],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':$[__Oxe61f3[0x4]]()?process[__Oxe61f3[0x9]][__Oxe61f3[0x41]]?process[__Oxe61f3[0x9]][__Oxe61f3[0x41]]:require(__Oxe61f3[0x43])[__Oxe61f3[0x42]]:$[__Oxe61f3[0x12]](__Oxe61f3[0x44])?$[__Oxe61f3[0x12]](__Oxe61f3[0x44]):__Oxe61f3[0x45],'\x52\x65\x66\x65\x72\x65\x72':__Oxe61f3[0x46],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxe61f3[0x53],'\x43\x6F\x6F\x6B\x69\x65':_0xf8bex11}};$[__Oxe61f3[0x39]](_0xf8bex13,(_0xf8bexb,_0xf8bexc,_0xf8bexd)=>{})}function doTask4(_0xf8bex11,_0xf8bexf){let _0xf8bexa={'\x75\x72\x6C':__Oxe61f3[0x4e],'\x62\x6F\x64\x79':__Oxe61f3[0x54]+ JSON[__Oxe61f3[0xe]]({'\x6D\x65\x74\x68\x6F\x64':__Oxe61f3[0x55],'\x64\x61\x74\x61':{'\x63\x68\x61\x6E\x6E\x65\x6C':__Oxe61f3[0x56],'\x65\x6E\x63\x72\x79\x70\x74\x69\x6F\x6E\x49\x6E\x76\x69\x74\x65\x72\x50\x69\x6E':encodeURIComponent(_0xf8bexf),'\x74\x79\x70\x65':1}})+ __Oxe61f3[0x57]+ Date[__Oxe61f3[0x3b]](),'\x68\x65\x61\x64\x65\x72\x73':{'\x48\x6F\x73\x74':__Oxe61f3[0x3c],'\x41\x63\x63\x65\x70\x74':__Oxe61f3[0x3d],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxe61f3[0x3e],'\x4F\x72\x69\x67\x69\x6E':__Oxe61f3[0x4a],'\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65':__Oxe61f3[0x52],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':$[__Oxe61f3[0x4]]()?process[__Oxe61f3[0x9]][__Oxe61f3[0x41]]?process[__Oxe61f3[0x9]][__Oxe61f3[0x41]]:require(__Oxe61f3[0x43])[__Oxe61f3[0x42]]:$[__Oxe61f3[0x12]](__Oxe61f3[0x44])?$[__Oxe61f3[0x12]](__Oxe61f3[0x44]):__Oxe61f3[0x45],'\x52\x65\x66\x65\x72\x65\x72':__Oxe61f3[0x58],'\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67':__Oxe61f3[0x53],'\x43\x6F\x6F\x6B\x69\x65':_0xf8bex11}};$[__Oxe61f3[0x39]](_0xf8bexa,(_0xf8bexb,_0xf8bexc,_0xf8bexd)=>{})}async function goldCreatorDoTask(_0xf8bex19){ await getLogs();let _0xf8bex14={"\x74\x79\x70\x65":_0xf8bex19,"\x6C\x6F\x67":$[__Oxe61f3[0x59]],"\x72\x61\x6E\x64\x6F\x6D":$[__Oxe61f3[0x30]],"\x73\x63\x65\x6E\x65\x69\x64":$[__Oxe61f3[0x1]]};const _0xf8bexa=taskUrl(__Oxe61f3[0x5a],_0xf8bex14);return  new Promise((_0xf8bex9)=>{$[__Oxe61f3[0x39]](_0xf8bexa,async (_0xf8bexb,_0xf8bexc,_0xf8bexd)=>{try{if(_0xf8bexb){console[__Oxe61f3[0xb]](`${__Oxe61f3[0x5b]}`)}else {if(safeGet(_0xf8bexd)){_0xf8bexd= JSON[__Oxe61f3[0x33]](_0xf8bexd);if(_0xf8bexd[__Oxe61f3[0x34]]=== __Oxe61f3[0x35]){if(_0xf8bexd[__Oxe61f3[0x37]][__Oxe61f3[0x5c]]=== __Oxe61f3[0x35]){console[__Oxe61f3[0xb]](`${__Oxe61f3[0x5d]}${_0xf8bexd[__Oxe61f3[0x37]][__Oxe61f3[0x5e]]}${__Oxe61f3[0x5f]}`);if(_0xf8bexd[__Oxe61f3[0x37]][__Oxe61f3[0x5e]]){$[__Oxe61f3[0x28]]+= parseInt(_0xf8bexd[__Oxe61f3[0x37]][__Oxe61f3[0x5e]])}}else {console[__Oxe61f3[0xb]](`${__Oxe61f3[0x60]}${_0xf8bexd[__Oxe61f3[0x37]][__Oxe61f3[0x61]]}${__Oxe61f3[0x0]}`)}}else {console[__Oxe61f3[0xb]](`${__Oxe61f3[0x60]}${JSON[__Oxe61f3[0xe]](_0xf8bexd)}${__Oxe61f3[0x0]}`)}}}}catch(e){$[__Oxe61f3[0x38]](e,_0xf8bexc)}finally{_0xf8bex9()}})})}function taskUrl(_0xf8bex1b,_0xf8bex14= {}){return {url:`${__Oxe61f3[0x0]}${JD_API_HOST}${__Oxe61f3[0x62]}${_0xf8bex1b}${__Oxe61f3[0x63]}${encodeURIComponent(JSON[__Oxe61f3[0xe]](_0xf8bex14))}${__Oxe61f3[0x64]}${$[__Oxe61f3[0x2a]]}${__Oxe61f3[0x65]}${encodeURIComponent(JSON[__Oxe61f3[0xe]]({"\x70\x72\x73\x74\x61\x74\x65":__Oxe61f3[0x35]}))}${__Oxe61f3[0x66]}`,headers:{"\x41\x63\x63\x65\x70\x74":__Oxe61f3[0x67],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxe61f3[0x53],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxe61f3[0x40],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxe61f3[0x68],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":__Oxe61f3[0x3e],"\x48\x6F\x73\x74":__Oxe61f3[0x3c],"\x52\x65\x66\x65\x72\x65\x72":__Oxe61f3[0x69],"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxe61f3[0x4]]()?(process[__Oxe61f3[0x9]][__Oxe61f3[0x6a]]?process[__Oxe61f3[0x9]][__Oxe61f3[0x6a]]:(require(__Oxe61f3[0x6b])[__Oxe61f3[0x42]])):($[__Oxe61f3[0x12]](__Oxe61f3[0x6c])?$[__Oxe61f3[0x12]](__Oxe61f3[0x6c]):__Oxe61f3[0x6d])}}}async function getLogs(){ await $[__Oxe61f3[0x2f]](parseInt(Math[__Oxe61f3[0x30]]()* 2500+ 100,10));return  new Promise(async (_0xf8bex9)=>{$[__Oxe61f3[0x72]]({url:`${__Oxe61f3[0x6e]}`,headers:{"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxe61f3[0x6f]},timeout:30000},(_0xf8bexb,_0xf8bexc,_0xf8bexd)=>{try{if(_0xf8bexb){console[__Oxe61f3[0xb]](`${__Oxe61f3[0x70]}`)}else {if(_0xf8bexd&& safeGet(_0xf8bexd)){_0xf8bexd= JSON[__Oxe61f3[0x33]](_0xf8bexd);if(_0xf8bexd[__Oxe61f3[0x34]]== 0&& _0xf8bexd[__Oxe61f3[0x71]][__Oxe61f3[0x30]]){_0xf8bexd= _0xf8bexd[__Oxe61f3[0x71]];$[__Oxe61f3[0x30]]= _0xf8bexd[__Oxe61f3[0x30]];$[__Oxe61f3[0x59]]= _0xf8bexd[__Oxe61f3[0xb]]}else {if(_0xf8bexd[__Oxe61f3[0x34]]== 1){$[__Oxe61f3[0x30]]= __Oxe61f3[0x0];$[__Oxe61f3[0x59]]= __Oxe61f3[0x0]}}}else {$[__Oxe61f3[0x30]]= __Oxe61f3[0x0];$[__Oxe61f3[0x59]]= __Oxe61f3[0x0]}}}catch(e){$[__Oxe61f3[0x38]](e,_0xf8bexc)}finally{_0xf8bex9(_0xf8bexd|| [])}})})}function safeGet(_0xf8bexd){try{if( typeof JSON[__Oxe61f3[0x33]](_0xf8bexd)== __Oxe61f3[0x73]){return true}}catch(e){console[__Oxe61f3[0xb]](`${__Oxe61f3[0x74]}`);return false}}function getUUID(_0xf8bex1f= __Oxe61f3[0x75],_0xf8bex20= 0){return _0xf8bex1f[__Oxe61f3[0x78]](/[xy]/g,function(_0xf8bex21){var _0xf8bex22=Math[__Oxe61f3[0x30]]()* 16| 0,_0xf8bex23=_0xf8bex21== __Oxe61f3[0x76]?_0xf8bex22:(_0xf8bex22& 0x3| 0x8);if(_0xf8bex20){uuid= _0xf8bex23.toString(36)[__Oxe61f3[0x77]]()}else {uuid= _0xf8bex23.toString(36)};return uuid})}(function(_0xf8bex24,_0xf8bex21,_0xf8bex25,_0xf8bex26,_0xf8bex27,_0xf8bex28){_0xf8bex28= __Oxe61f3[0x79];_0xf8bex26= function(_0xf8bex29){if( typeof alert!== _0xf8bex28){alert(_0xf8bex29)};if( typeof console!== _0xf8bex28){console[__Oxe61f3[0xb]](_0xf8bex29)}};_0xf8bex25= function(_0xf8bex2a,_0xf8bex24){return _0xf8bex2a+ _0xf8bex24};_0xf8bex27= _0xf8bex25(__Oxe61f3[0x7a],_0xf8bex25(_0xf8bex25(__Oxe61f3[0x7b],__Oxe61f3[0x7c]),__Oxe61f3[0x7d]));try{_0xf8bex24= __encode;if(!( typeof _0xf8bex24!== _0xf8bex28&& _0xf8bex24=== _0xf8bex25(__Oxe61f3[0x7e],__Oxe61f3[0x7f]))){_0xf8bex26(_0xf8bex27)}}catch(e){_0xf8bex26(_0xf8bex27)}})({})


// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }