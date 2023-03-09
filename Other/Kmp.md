## KMP加速

问题：给予str1和str2，在请str1中找到匹配的str2的 其实位置。

使用*KMP*进行加速匹配，关键需要用已经匹配过的信息。
KMP设计出一个nexts数组，用来存储加速匹配的关键星系信息

匹配步骤：

1. 设定str1、str2 匹配位置下标分别为 i、j
2. 当str1[i] 与str2[j] 的字符*相等*

## nexts数组