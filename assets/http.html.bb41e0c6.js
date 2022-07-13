import{_ as n,o as s,c as a,d as t}from"./app.5ae1f617.js";const p={},e=t(`<h1 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h1><p>\u5728\u8FC7\u53BB, \u8981\u8BF7\u6C42\u540E\u7AEF\u7684\u63A5\u53E3\u9700\u8981\u501F\u52A9\u5F88\u591A\u7B2C\u4E09\u65B9\u5E93, \u6BD4\u5982 jquery \u7684 ajax, axios, \u4ED6\u4EEC\u6700\u5927\u7684\u7F3A\u70B9\u5C31\u662F\u4F53\u79EF\u8FC7\u5927, \u5E76\u4E14\u4E0D\u662F\u90A3\u4E48\u6613\u7528. \u5176\u4E2D axios \u5728\u73B0\u4EE3\u6846\u67B6\u4E2D\u88AB\u5E7F\u6CDB\u4F7F\u7528, \u4F46\u662F\u5176\u540C\u65F6\u5B9E\u73B0\u4E86\u670D\u52A1\u7AEF\u7684 api, \u56E0\u6B64\u4E3A\u4E86\u4F53\u79EF\u548C\u6613\u7528\u6027\u5F00\u53D1\u51FA\u8FD9\u4E00\u4E2A\u7528\u4E8E\u4E0E\u540E\u7AEF\u8FDB\u884C\u4EA4\u4E92\u7684 api</p><h2 id="\u5FEB\u901F\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4F7F\u7528" aria-hidden="true">#</a> \u5FEB\u901F\u4F7F\u7528</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Http <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fe-dk&#39;</span>

<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseUrl<span class="token operator">:</span> <span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8868\u793A\u6240\u6709\u7684\u63A5\u53E3\u4EE5 /api \u4F5C\u4E3A\u524D\u7F00</span>
  timeout<span class="token operator">:</span> <span class="token number">18000</span> <span class="token comment">// \u8868\u793A\u5982\u679C\u8BF7\u6C42\u8D85\u8FC718000\u5C31\u629B\u51FA\u8D85\u65F6\u9519\u8BEF</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> api</h2><h3 id="\u6784\u9020\u53C2\u6570-new-http-options-options" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u53C2\u6570-new-http-options-options" aria-hidden="true">#</a> \u6784\u9020\u53C2\u6570 new Http(options: Options)</h3><ul><li><strong>Options</strong><ul><li><strong>before</strong> <code>&lt;Function&gt;</code>: \u751F\u547D\u5468\u671F, \u8BE5\u65B9\u6CD5\u4F1A\u5728\u8BF7\u6C42\u53D1\u9001\u4E4B\u524D\u8C03\u7528(\u5982\u679C\u6307\u5B9A\u7684\u8BDD)</li><li><strong>after</strong> <code>&lt;Function&gt;</code>: \u751F\u547D\u5468\u671F, \u8BE5\u65B9\u6CD5\u5728\u8BF7\u6C42\u5B8C\u6210\u540E\u8C03\u7528, \u65E0\u8BBA\u6210\u529F\u8FD8\u662F\u5931\u8D25</li><li><strong>baseUrl</strong> <code>&lt;string&gt;</code>: \u57FA\u7840\u8BF7\u6C42\u8DEF\u5F84</li><li><strong>timeout</strong>: <code>&lt;number&gt;</code>: \u8D85\u65F6\u65F6\u95F4, \u9ED8\u8BA4\u4E3A 0 \u5373\u4E0D\u8D85\u65F6</li><li><strong>headers</strong>: <code>&lt;Object&gt;</code>: \u8BF7\u6C42\u5934</li><li><strong>withCredentials</strong>: <code>&lt;boolean&gt;</code>: \u8BF7\u6C42\u662F\u5426\u643A\u5E26 cookie, \u9ED8\u8BA4\u4E3A false</li></ul></li></ul><h3 id="http-request" tabindex="-1"><a class="header-anchor" href="#http-request" aria-hidden="true">#</a> Http.request</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>http
  <span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">&#39;/user/1&#39;</span><span class="token punctuation">,</span>
    method<span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">,</span> res<span class="token punctuation">.</span>code<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// GET http://xxx.xxx.xxx/api/user/1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5FEB\u6377\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u6377\u5199\u6CD5" aria-hidden="true">#</a> \u5FEB\u6377\u5199\u6CD5</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  params<span class="token operator">:</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// GET  http://xxx.xxx.xxx/api/user?id=1</span>

http<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>
  <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    params<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">// POST  http://xxx.xxx.xxx/api/user?type=admin  payload: { type: &#39;admin&#39; }</span>

http<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.baidu.com/user/1&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// PUT http://www.baidu.com/user/1</span>

http<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;/user/1&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// DELETE http://xxx.xxx.xxx/api/user/1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F</h2><p>axios \u4E2D\u53EB\u62E6\u622A\u5668.</p><h3 id="before" tabindex="-1"><a class="header-anchor" href="#before" aria-hidden="true">#</a> before</h3><p>before \u662F\u4E00\u4E2A\u51FD\u6570, \u4F60\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A false \u6765\u963B\u6B62\u8BF7\u6C42\u5B9E\u4F8B\u7684\u521B\u5EFA, \u4EA6\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u914D\u7F6E\u5BF9\u8C61, \u4EE5\u4FBF\u4E8E\u4F60\u5BF9\u4E0D\u540C\u7684\u63A5\u53E3\u8FDB\u884C\u901A\u7528\u7684\u5904\u7406, \u4EE5\u4E0B\u662F\u4E00\u4E2A\u5C0F\u4F8B\u5B50</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u9ED8\u8BA4\u4F7F\u6240\u6709\u7684\u8BF7\u6C42url\u4E4B\u524D\u62FC\u63A5\u4E00\u4E2A/api</span>
  baseUrl<span class="token operator">:</span> <span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span>
  timeout<span class="token operator">:</span> <span class="token number">18000</span><span class="token punctuation">,</span>
  <span class="token function">before</span><span class="token punctuation">(</span>conf<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> isXWF <span class="token operator">=</span> conf<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;application/x-www-form-urlencoded&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// \u5BF9\u4E8E\u8868\u5355\u5BF9\u8C61, \u4F60\u9700\u8981\u624B\u52A8\u5C06\u5176\u8F6C\u5316\u6210\u4E00\u4E2Akey=value\u62FC\u63A5\u7684\u5B57\u7B26\u4E32</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isXWF <span class="token operator">&amp;&amp;</span> <span class="token function">isObj</span><span class="token punctuation">(</span>conf<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      conf<span class="token punctuation">.</span>data <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>conf<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>k <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>k<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>conf<span class="token punctuation">.</span>data<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// post\u8BF7\u6C42\u4E0D\u5141\u8BB8\u4EC0\u4E48\u90FD\u4E0D\u7A7F</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>conf<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;POST&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>conf<span class="token punctuation">.</span>data <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> conf<span class="token punctuation">.</span>data <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u4F20\u70B9\u4E1C\u897F&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u8BF7\u6C42\u4E4B\u524D\u627E\u5230</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      conf<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;some token&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u662F\u4E00\u4E2A\u6D41\u610F\u5473\u7740\u6587\u4EF6\u53EF\u80FD\u5F88\u5927, \u53BB\u6389\u8D85\u65F6</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>conf<span class="token punctuation">.</span>responseType <span class="token operator">===</span> <span class="token string">&#39;blob&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      conf<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> conf
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="after" tabindex="-1"><a class="header-anchor" href="#after" aria-hidden="true">#</a> after</h3><p>after \u5728\u8BF7\u6C42\u5B8C\u6210\u540E\u8C03\u7528, \u8BE5\u51FD\u6570\u6709\u4E24\u4E2A\u53C2\u6570, \u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u54CD\u5E94\u5BF9\u8C61, \u7B2C\u4E8C\u4E2A\u53C2\u6570\u6307\u5B9A\u4EE5\u4F55\u79CD\u5F62\u5F0F\u629B\u51FA\u54CD\u5E94\u503C, \u770B\u4EE5\u4E0B\u7684\u4F8B\u5B50 \u9ED8\u8BA4\u5730, \u4EE5Http\u6807\u51C6\u5C06400\u5230600\u4E4B\u95F4\u7684\u72B6\u6001\u7801\u4F5C\u4E3A\u9519\u8BEF\u629B\u51FA</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> customErrorCode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> authHttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Http</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">after</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> returnBy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>customErrorCode<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">returnBy</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
      message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">returnBy</span><span class="token punctuation">(</span><span class="token string">&#39;normal&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token keyword">is</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","http.html.vue"]]);export{r as default};
