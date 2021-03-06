---
title: 计算机基础术语
---

# 计算机基础术语

## CPU

中央处理器

## 内存

内存是程序执行的空间所在

## 硬盘

硬盘是数据进行持久化的地方. 即使在断点的情况下也能够保存数据.

分为机械硬盘和固态硬盘.

## 终端 或 shell

终端是一个程序, 它封装了操作系统的接口, 使你能够使用它封装的命令和操作系统交互.

## I/O 输入输出

拿工厂来距离, 进入工厂的的是原材料, 出来工厂的是制成品.
原材料进入工厂就是输入, 出来工厂就是输出. 负责输入的叫输入设备, 负责输出的叫输出设备.

## 位运算

这里讲的是**js**中的位运算.

位运算顾名思义就是对位进行运算.

二进制数之间的运算都是以 32 位二进制数进行运算, 如果两个二进制数位数不相等则位数少的那一个全部补 0.

| 运算符 | 名称           | 描述                        |
| ------ | -------------- | --------------------------- |
| &      | 位与           | 同位都为 1 则为 1, 否则为 0 |
| \|     | 位或           | 同位都为 0 则为 0, 否则为 1 |
| ^      | 位亦或         | 同位不相等为 1, 相等为 0    |
| ~      | 按位取反       |                             |
| <<     | 向左移位       |                             |
| >>     | 向右移位       |                             |
| >>>    | 零填充向右移位 |                             |

```ts
const n = 8 & 5
// 00000000000000000000000000001000 & 0000000000000000000000000000101
// ->  00000000000000000000000000000000 -> 0

const n1 = 8 | 5
// 00000000000000000000000000001000 | 00000000000000000000000000000101
// -> 00000000000000000000000000001101 -> 13

const n2 = 9 ^ 5
// 00000000000000000000000000001001 ^ 00000000000000000000000000000101
// -> 00000000000000000000000000001100 -> 12

const n3 = ~5
// 00000000000000000000000000000101
// -> 11111111111111111111111111111010
// -> 11111111111111111111111111111001
// -> 00000000000000000000000000000110
// -> -6
```

## 二进制

二进制每位数最高能够达到 1, 逢二进一.

而十进制则是逢十进一, 每位数最高能达到 9.

### 机器数
值转化后的二进制数, 根据对二进制数的不同解析方式(视图)可以得出不同的值.
比如1000 0001既可以表示-1(Int8)也可以表示129(Uint8)

### 原码

### 补码

### 反码