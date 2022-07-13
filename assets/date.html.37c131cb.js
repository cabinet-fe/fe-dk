import{_ as t,r as e,o as p,c,a as n,e as o,b as s,d as i}from"./app.5ae1f617.js";const l={},u=n("h1",{id:"\u65E5\u671F-date",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u65E5\u671F-date","aria-hidden":"true"},"#"),s(" \u65E5\u671F date")],-1),d=n("p",null,"\u597D\u7528\u7684\u65E5\u671F\u5E93\u5E94\u5F53\u4FDD\u6301\u8DB3\u591F\u7B80\u6D01\u7684 api, \u4FDD\u8BC1\u53EF\u8BFB\u6027, \u6027\u80FD. \u4ECE\u524D\u7AEF\u89D2\u5EA6\u6765\u8BB2\uFF0C\u65E5\u671F\u5E93\u6700\u5927\u7684\u4F5C\u7528\u5C31\u662F\u751F\u6210\u4E00\u4E2A\u7528\u6237\u6613\u8BFB\u7684\u6587\u672C\uFF0C\u6B21\u8981\u4F5C\u7528\u5C31\u662F\u8F6C\u5316\u6210\u4E00\u4E2A\u540E\u7AEF\u5BB9\u6613\u63A5\u6536\u7684\u6570\u636E\u683C\u5F0F\uFF08\u901A\u5E38\u662F\u4E00\u4E2A\u65F6\u95F4\u6233\u6216\u8005\u65E5\u671F\u5B57\u7B26\u4E32\uFF09",-1),r=s("TC39 \u6709\u4E2A\u63D0\u6848"),k={href:"https://github.com/tc39/proposals#onboarding-existing-proposals",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"Temporal",-1),v=s(", \u662F\u76EE\u524D Date \u6784\u9020\u51FD\u6570\u7684\u66FF\u4EE3\uFF0C \u8FD9\u610F\u5473\u7740\uFF0C\u5C06\u6765\u67D0\u4E2A\u7248\u672C\u8BE5\u5E93\u4F1A\u88AB\u53D6\u7F14\uFF0C\u4F46\u662F\u6B64\u523B\u6B64\u65E5\u671F\u5E93\u4ECD\u7136\u662F\u6700\u597D\u7684\u9009\u62E9\uFF08\u4E4B\u4E00\uFF09"),b=i(`<h2 id="\u5FEB\u901F\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4F7F\u7528" aria-hidden="true">#</a> \u5FEB\u901F\u4F7F\u7528</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> date <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fe-dk&#39;</span>

<span class="token comment">// \u5BF9\u6B64\u523B\u7684\u65E5\u671F\u9ED8\u8BA4\u4F7F\u7528yyyy-MM-dd\u683C\u5F0F\u5316</span>
<span class="token function">date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u683C\u5F0F\u5316-format" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F\u5316-format" aria-hidden="true">#</a> \u683C\u5F0F\u5316 format</h2><p>\u524D\u7AEF\u5173\u4E8E\u65E5\u671F\u683C\u5F0F\u5316\u6700\u5E38\u7528\u7684 api</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> date <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fe-dk&#39;</span>

<span class="token comment">// \u5BF9\u6B64\u523B\u7684\u65E5\u671F\u9ED8\u8BA4\u4F7F\u7528yyyy-MM-dd\u683C\u5F0F\u5316</span>
<span class="token function">date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u65E5\u671F\uFF0C \u65E5\u671F\u5BF9\u8C61\uFF0C \u65F6\u95F4\u6233\u6216\u8005\u7531date()\u751F\u6210\u7684\u5BF9\u8C61</span>
<span class="token function">date</span><span class="token punctuation">(</span><span class="token string">&#39;2022-02-14&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;yyyy/MM/dd&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 2022/02/14</span>

<span class="token function">date</span><span class="token punctuation">(</span><span class="token number">1644796800000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;yyyy/MM/dd&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 2022/02/14</span>

<span class="token function">date</span><span class="token punctuation">(</span><span class="token number">1644796800000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;yyyy-MM-dd hh:mm:ss&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-02-14 08:00:00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u683C\u5F0F\u5316\u5339\u914D\u5668" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F\u5316\u5339\u914D\u5668" aria-hidden="true">#</a> \u683C\u5F0F\u5316\u5339\u914D\u5668</h2><p>matchers \u662F date \u6240\u8FD4\u56DE\u7684\u6784\u9020\u51FD\u6570\u4E0A\u7684\u4E00\u4E2A\u9759\u6001\u5C5E\u6027\uFF0C\u6570\u636E\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C \u5BF9\u8C61\u7684\u952E\u662F\u9700\u8981\u66FF\u6362\u7684\u683C\u5F0F\u5316\u7684\u6587\u672C\uFF0C \u540C\u65F6\u4E5F\u662F RegExp \u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u3002\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u4F60\u7528\u4E0D\u5230\u8FD9\u4E2A api\u3002</p><p>\u9ED8\u8BA4\u7684\u683C\u5F0F\u5316\u5339\u914D\u5668</p><table><thead><tr><th>\u5360\u4F4D\u7B26</th><th>\u63CF\u8FF0</th><th>\u793A\u4F8B</th></tr></thead><tbody><tr><td>yyyy</td><td>\u8868\u793A\u5B8C\u6574\u7684\u5E74\u4EFD</td><td>2022</td></tr><tr><td>M</td><td>\u8868\u793A\u6708\u4EFD</td><td>M -&gt; 9, MM -&gt; 09</td></tr><tr><td>D</td><td>\u8868\u793A\u65E5\u671F</td><td>D -&gt; 9, DD -&gt; 09</td></tr><tr><td>h</td><td>\u5C0F\u65F6(12 \u5C0F\u65F6\u5236)</td><td>h -&gt; 2, hh -&gt; 02</td></tr><tr><td>H</td><td>\u5C0F\u65F6(24 \u5C0F\u65F6\u5236)</td><td>H -&gt; 9, HH -&gt; 09, HH -&gt; 14</td></tr><tr><td>m</td><td>\u5206</td><td>m -&gt; 9, mm -&gt; 09</td></tr><tr><td>s</td><td>\u79D2</td><td>s -&gt; 9, ss -&gt; 09</td></tr></tbody></table><p>\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u6DFB\u52A0\u683C\u5F0F\u5316\u5339\u914D\u5668\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u8FD9\u662F\u4E00\u4E2A\u589E\u52A0\u4E86\u5468\u51E0\u66FF\u6362\u7684\u5339\u914D\u5668</span>
date<span class="token punctuation">.</span><span class="token function">setMatcher</span><span class="token punctuation">(</span><span class="token string">&#39;w+&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>date<span class="token operator">:</span> Date<span class="token punctuation">,</span> len<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> date<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">+</span> date<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">date</span><span class="token punctuation">(</span><span class="token string">&#39;2022-02-14&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// return 1</span>
<span class="token function">date</span><span class="token punctuation">(</span><span class="token string">&#39;2022-02-14&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;ww&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// return 01</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6\u65F6\u95F4\u6233" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u65F6\u95F4\u6233" aria-hidden="true">#</a> \u83B7\u53D6\u65F6\u95F4\u6233</h2><p>\u65F6\u95F4\u6233\u662F\u4E00\u4E2A\u5C5E\u6027\uFF0C\u5728\u4F60\u7B2C\u4E00\u6B21\u8BBF\u95EE\u5B83\u65F6\u7528\u539F\u751F date \u7684 getTime()\u65B9\u6CD5\u83B7\u53D6\uFF0C\u540E\u7EED\u7684\u83B7\u53D6\u65B9\u5F0F\u5219\u76F4\u63A5\u662F\u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u65F6\u95F4\u6233\uFF08\u6BEB\u79D2\uFF09</span>
<span class="token function">date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>timestamp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65E5\u671F\u8BA1\u7B97" tabindex="-1"><a class="header-anchor" href="#\u65E5\u671F\u8BA1\u7B97" aria-hidden="true">#</a> \u65E5\u671F\u8BA1\u7B97</h2><p>\u6709\u65F6\u5019\uFF0C\u4F60\u9700\u8981\u8BA1\u7B97\u76F8\u5BF9\u67D0\u4E2A\u65F6\u95F4\u7684\u76F8\u5BF9\u5929\u6570\u6216\u8005\u6708\u6570\u7684\u65E5\u671F\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 calc api.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">date</span><span class="token punctuation">(</span><span class="token string">&#39;2022-02-14&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;days&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-02-24</span>

<span class="token function">date</span><span class="token punctuation">(</span><span class="token string">&#39;2022-02-14&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">calc</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;days&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-02-04</span>

<span class="token function">date</span><span class="token punctuation">(</span><span class="token string">&#39;2022-02-14&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;weeks&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 2022-02-21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65E5\u671F\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u65E5\u671F\u6BD4\u8F83" aria-hidden="true">#</a> \u65E5\u671F\u6BD4\u8F83</h2><p>\u5982\u679C\u4F60\u60F3\u77E5\u9053\u4E24\u4E2A\u65E5\u671F\u4E4B\u95F4\u5DEE\u4E86\u591A\u5C11\u5929\uFF0C \u4F60\u53EF\u4EE5\u4F7F\u7528 compare api</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">date</span><span class="token punctuation">(</span><span class="token string">&#39;2022-02-14&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span><span class="token string">&#39;2022-03-14&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 28</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6\u5E74\u6708\u65E5\u65F6\u5206\u79D2" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5E74\u6708\u65E5\u65F6\u5206\u79D2" aria-hidden="true">#</a> \u83B7\u53D6\u5E74\u6708\u65E5\u65F6\u5206\u79D2</h2><p>\u63D0\u4F9B\u4E86\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u7684\u5FEB\u6377\u5199\u6CD5</p><p>\u5904\u7406\u4E86\u6708\u4EFD\u4ECE 0 \u5F00\u59CB\u7684\u95EE\u9898</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string">&#39;2022-02-14 01:02:03&#39;</span><span class="token punctuation">)</span>
d<span class="token punctuation">.</span>year
<span class="token comment">// 2022</span>

d<span class="token punctuation">.</span>month
<span class="token comment">// 2</span>

d<span class="token punctuation">.</span>day
<span class="token comment">// 14</span>

d<span class="token punctuation">.</span>hour
<span class="token comment">// 1</span>

d<span class="token punctuation">.</span>minute
<span class="token comment">// 2</span>

d<span class="token punctuation">.</span>second
<span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a> \u63D2\u4EF6</h2><p>\u4E00\u4E2A\u63D2\u4EF6\u5C31\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C \u8BE5\u51FD\u6570\u63A5\u53D7\u4E00\u4E2A Date \u4E0A\u4E0B\u6587\u53C2\u6570, \u53EF\u4EE5\u7528\u6765\u8BBE\u7F6E\u5339\u914D\u5668\u7B49\u7B49 \u867D\u7136\u53EF\u4EE5\u76F4\u63A5\u64CD\u4F5C Dater \u7684 api\uFF0C\u4F46\u53EF\u4EE5\u4F7F\u7528\u63D2\u4EF6\u673A\u5236\u6765\u66F4\u597D\u7684\u7EC4\u7EC7\u4F60\u7684\u4EE3\u7801</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>date<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ctx <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span><span class="token function">setMatcher</span><span class="token punctuation">(</span><span class="token string">&#39;w+&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>date<span class="token operator">:</span> Date<span class="token punctuation">,</span> len<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> date<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">+</span> date<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function h(g,f){const a=e("ExternalLinkIcon");return p(),c("div",null,[u,d,n("blockquote",null,[n("p",null,[r,n("a",k,[m,o(a)]),v])]),b])}var _=t(l,[["render",h],["__file","date.html.vue"]]);export{_ as default};