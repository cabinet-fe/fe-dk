import{_ as t,r as p,o,c as r,a as n,e as c,d as s,b as a}from"./app.5ae1f617.js";const l={},i=s(`<h1 id="\u6570\u7EC4-array" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4-array" aria-hidden="true">#</a> \u6570\u7EC4 Array</h1><p>\u6570\u7EC4\u5373\u4E00\u7EC4\u6570\uFF0C\u662F\u6307\u5728\u4E00\u6BB5\u8FDE\u7EED\u7684\u5185\u5B58\u4E2D\u5B58\u50A8\u76F8\u540C\u7C7B\u578B\u5143\u7D20(\u4FDD\u8BC1\u5143\u7D20\u957F\u5EA6\u7CFB\u7EDF\u4E00\u81F4)\u7684\u4E00\u79CD\u96C6\u5408\u3002</p><p>\u6570\u7EC4\u957F\u5EA6\u662F\u56FA\u5B9A\u7684\uFF0C\u6BCF\u4E2A\u5143\u7D20\u6709\u5BF9\u5E94\u4E00\u4E2A\u7D22\u5F15\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u7D22\u5F15\u540C\u6570\u7EC4\u6240\u5360\u5185\u5B58\u7684\u4E00\u6837\u662F\u8FDE\u7EED\u7684\u3002</p><p>\u5728\u4E0D\u540C\u7684\u7F16\u7A0B\u8BED\u8A00\u4E2D\uFF0C\u5BF9\u6570\u7EC4\u7684\u5B9E\u73B0\u4E0D\u5C3D\u76F8\u540C\u3002\u5728JS\u4E2D\uFF0C\u6570\u7EC4\u7684\u957F\u5EA6\u662F\u975E\u56FA\u5B9A\u7684\uFF0C \u7C7B\u578B\u4E5F\u975E\u56FA\u5B9A\uFF0C\u5E76\u4E14\u80FD\u5B58\u653E\u4EFB\u610F\u7C7B\u578B\uFF0C \u8FD9\u610F\u5473\u7740\u5728JS\u7A0B\u5E8F\u4E2D\uFF0C \u4F60\u53EF\u4EE5\u770B\u5230\u4EE5\u4E0B\u7684\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B9E\u9645\u4E0A\uFF0Cjs\u4E2D\u7684\u6570\u7EC4\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u5728\u5185\u5B58\u4E2D\u90FD\u662F\u975E\u8FDE\u7EED\u7684\uFF0C\u56E0\u6B64\u5927\u591A\u60C5\u51B5\u4E0B\u7528\u666E\u901A\u6570\u7EC4\u8FBE\u4E0D\u5230\u5F88\u9AD8\u7684\u6027\u80FD\u3002\u8FD9\u4F53\u73B0\u5728\u904D\u5386\u6570\u7EC4\u65F6\u5BFB\u5740\u7684\u6027\u80FD\u5DEE\u8DDD\uFF0C\u4E14\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A<strong>number</strong>\u5143\u7D20\u81F3\u5C11\u90FD\u8981\u5360 4\u5B57\u8282, \u56E0\u4E3Ajs\u4E2D\u53EA\u6709number\u7C7B\u578B\uFF08\u8BE5\u7C7B\u578B\u662F32\u4F4D\u7684\uFF09\u3002</p><p>\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u4F60\u90FD\u4E0D\u9700\u8981\u4E3A\u4F60\u6570\u7EC4\u7684\u7C7B\u578B\u56F0\u6270\u3002\u552F\u4E00\u9700\u8981\u6CE8\u610F\u7684\u662F\u5C3D\u53EF\u80FD\u7684\u4FDD\u6301\u5143\u7D20\u7C7B\u578B\u7684\u4E00\u81F4\uFF08\u65B9\u4FBFjs\u5F15\u64CE\u8FDB\u884C\u4F18\u5316\uFF09\u3002</p><h2 id="\u7C7B\u578B\u6570\u7EC4-typedarray" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u6570\u7EC4-typedarray" aria-hidden="true">#</a> \u7C7B\u578B\u6570\u7EC4 TypedArray</h2>`,8),d=a("js\u4E5F\u6709\u5BF9\u6570\u7EC4\u7684\u6B63\u7EDF\u5B9E\u73B0\uFF1A"),u={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray",target:"_blank",rel:"noopener noreferrer"},k=a("TypedArray"),h=a("\u3002"),_=s(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint16Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u7C7B\u578B\u5728\u64CD\u4F5C\u4E8C\u8FDB\u5236\u6570\u636E\uFF08\u6587\u4EF6\uFF09\u65F6\u6709\u5F88\u5927\u7684\u4F5C\u7528</p><h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h2><p>\u6570\u7EC4\u7684\u4F20\u7EDF\u4F7F\u7528\u573A\u666F\u5C31\u662F\u64CD\u4F5C\u5E95\u5C42\u6570\u636E\uFF0C\u4F46\u5728\u524D\u7AEF\u4E2D\u9664\u4E86\u7F16\u7801\u548C\u6587\u4EF6\u64CD\u4F5C\uFF0C\u51E0\u4E4E\u7528\u4E0D\u5230\u3002\u56E0\u6B64\u4EE5\u4E0B\u63D0\u5230\u7684\u5927\u591A\u662F\u524D\u7AEF\u7684\u5E94\u7528\u573A\u666F\u3002</p><ul><li>\u4F5C\u4E3A\u666E\u901A\u7684\u6570\u7EC4\u4F7F\u7528</li><li>\u4F5C\u4E3A\u6808\u4F7F\u7528</li><li>\u4F5C\u4E3A\u961F\u5217\u4F7F\u7528</li><li>\u4F5C\u4E3A\u5217\u8868\u4F7F\u7528</li></ul>`,5);function m(v,y){const e=p("ExternalLinkIcon");return o(),r("div",null,[i,n("p",null,[d,n("a",u,[k,c(e)]),h]),_])}var f=t(l,[["render",m],["__file","array.html.vue"]]);export{f as default};