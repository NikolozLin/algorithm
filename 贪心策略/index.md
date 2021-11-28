# 贪心策略

可以理解给样本设定一个简单的标准，并给样本分出优先级

### 问题：

给定多个字符，如 "adf"、"dfas"、"joi"等多个字符拼接成一个的字符串。使得拼接后的字符串字典序最小

### 解：

需要字典序最小 ，那么字符串片段 字典序小的 需要放在结果字符串的前面。

所以，需要一个<font color="#008000">合适的规则或策略</font>对字符串片段进行优先级的判断（这里不对对两个片段进行判断字典序大小然后确定他们的先后顺序，如"b" "ba")。

---

上面的这个贪心策略就是一个比较策略，比较需要具有传递性才能成为一个正确的策略。即，

```js
//因为
a-b <= b-a
b-c <= c-b
//所以
a-c <= c-a
```

#### 证明上面的正确性

如果把字符理解为K进制的数（类似16进制中的ABCD）。当发生字符串拼接时，可以理解为字符串向左移动n位，然后加上新的字符串。

例如，"ab" 拼接"cd"  `abcd=ab*K^2+cd`其中K为进制大小 2为“cd”的长度。（类似”12“拼接"34" :  1234=12*10^2+34）

- 列出字符拼接的表达式

$$
\begin{cases} ab \leq ba \\\\ bc\leq cb\\  \end{cases} 
\Longrightarrow
\begin{cases} a*k^b+b \leq b*k^a +a \\\\b*k^c+c \leq c*k^b +b \end{cases}
\tag{1}
$$

$$
\begin{cases} \\ ac\leq ca  \Longrightarrow  a*k^c+c \leq c*k^a+a \\\\ \end{cases}
\tag{2}
$$

- 公式1中， 

$$
\begin{cases} ab \leq ba （同减b，乘c）\\\\ bc\leq cb（同减c，乘a）\\  \end{cases} 
\Longrightarrow
\begin{cases} ac*k^b \leq bc*k^a +ac -bc \\\\ ab*k^c \leq ac*k^b +ba-ac \end{cases}
\tag{1.1}
$$

- 公式2，等式两边同减c，乘b
  $$
  ac\leq ca （同减c，乘b）  \Longrightarrow  
  ab*k^c\leq cb*k^a+ab -bc 
  
  \tag{2.1}
  $$

- 结合 公式1.1  第一行带入第二行 可以得出 公式2.1的结果。

所以证明字符比较具有传递性

---

### 解法步骤

1. 

