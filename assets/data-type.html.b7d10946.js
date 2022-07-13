import{_ as n,o as s,c as a,d as e}from"./app.5ae1f617.js";const t={},i=e(`<h1 id="\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B</h1><p>\u63D0\u4F9B\u5E38\u7528\u7684\u7C7B\u578B\u5224\u65AD\u51FD\u6570, \u548C\u539F\u751F\u5B9E\u73B0\u76F8\u6BD4, \u5B83\u66F4\u52A0\u7EDF\u4E00\u7684api\u8BA9\u4EE3\u7801\u53EF\u4EE5\u66F4\u52A0\u5BB9\u6613\u7EF4\u62A4, \u5E76\u4E14\u65E0\u9700\u4E3A\u6076\u5FC3\u7684&#39;==&#39;\u548C&#39;===&#39;\u4ED8\u51FA\u5FC3\u667A\u8D1F\u62C5. \u5982\u679C\u9879\u76EE\u4F7F\u7528typescript\u5F00\u53D1, \u4ED6\u80FD\u591F\u8D77\u5230\u7C7B\u578B\u4FDD\u62A4\u7684\u4F5C\u7528.</p><h2 id="\u5FEB\u901F\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4F7F\u7528" aria-hidden="true">#</a> \u5FEB\u901F\u4F7F\u7528</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> isArray <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fe-dk&#39;</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token string">&#39;failed&#39;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  result<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> api</h2><h3 id="isstring" tabindex="-1"><a class="header-anchor" href="#isstring" aria-hidden="true">#</a> isString</h3><p>\u662F\u5426\u662F\u5B57\u7B26\u4E32</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isString</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isString</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isnumber" tabindex="-1"><a class="header-anchor" href="#isnumber" aria-hidden="true">#</a> isNumber</h3><p>\u662F\u5426\u662F\u6570\u5B57</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isarray" tabindex="-1"><a class="header-anchor" href="#isarray" aria-hidden="true">#</a> isArray</h3><p>\u662F\u5426\u662F\u6570\u7EC4</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isundef" tabindex="-1"><a class="header-anchor" href="#isundef" aria-hidden="true">#</a> isUndef</h3><p>\u662F\u5426\u662Fundefined</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isUndef</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isdate" tabindex="-1"><a class="header-anchor" href="#isdate" aria-hidden="true">#</a> isDate</h3><p>\u662F\u5426\u662F\u65E5\u671F</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isDate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isnull" tabindex="-1"><a class="header-anchor" href="#isnull" aria-hidden="true">#</a> isNull</h3><p>\u662F\u5426\u662Fnull</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isNull</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isNull</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isfunction" tabindex="-1"><a class="header-anchor" href="#isfunction" aria-hidden="true">#</a> isFunction</h3><p>\u662F\u5426\u662F\u51FD\u6570</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isFunction</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isFunction</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isobj" tabindex="-1"><a class="header-anchor" href="#isobj" aria-hidden="true">#</a> isObj</h3><p>\u662F\u5426\u662F\u5BF9\u8C61</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isObj</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isObj</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isbol" tabindex="-1"><a class="header-anchor" href="#isbol" aria-hidden="true">#</a> isBol</h3><p>\u662F\u5426\u662F\u5E03\u5C14\u503C</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isBol</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isBol</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ispromise" tabindex="-1"><a class="header-anchor" href="#ispromise" aria-hidden="true">#</a> isPromise</h3><p>\u662F\u5426\u662FPromise</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isPromise</span><span class="token punctuation">(</span><span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isPromise</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isblob" tabindex="-1"><a class="header-anchor" href="#isblob" aria-hidden="true">#</a> isBlob</h3><p>\u662F\u5426\u662Fblob\u5BF9\u8C61 Blob\u8868\u793A\u4E00\u4E2A\u4E8C\u8FDB\u5236\u5927\u5BF9\u8C61(Binary Large Object). \u901A\u5E38\u53EF\u4EE5\u7528\u6765\u505A\u6587\u4EF6\u7684\u5206\u7247(File\u7C7B\u7EE7\u627F\u4E86Blob, \u56E0\u6B64\u66F4\u591A\u7684\u65F6\u5019\u4F1A\u4F7F\u7528File\u6765\u505A\u5206\u7247\u4E0A\u4F20, \u65AD\u70B9\u7EED\u4F20).</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isBlob</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isBlob</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="issymbol" tabindex="-1"><a class="header-anchor" href="#issymbol" aria-hidden="true">#</a> isSymbol</h3><p>\u662F\u5426\u662Fsymbol</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isSymbol</span><span class="token punctuation">(</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isSymbol</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isfile" tabindex="-1"><a class="header-anchor" href="#isfile" aria-hidden="true">#</a> isFile</h3><p>\u662F\u5426\u662F\u6587\u4EF6</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6587\u4EF6.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isFile</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isarraybuffer" tabindex="-1"><a class="header-anchor" href="#isarraybuffer" aria-hidden="true">#</a> isArrayBuffer</h3><p>\u662F\u5426\u662F\u4E8C\u8FDB\u5236\u7F13\u51B2\u533A\u7F13\u51B2 ArrayBuffer\u6570\u636E\u8868\u793A\u7F13\u51B2\u533A\u5373\u4E00\u6BB5\u5185\u5B58. \u53EF\u4EE5\u901A\u8FC7TypedArray\u89C6\u56FE\u548CDataView\u89C6\u56FE\u6765\u8FDB\u884C\u64CD\u4F5C.</p><p>\u89C6\u56FE\u7684\u6982\u5FF5\u6307\u7684\u662F\u5BF9\u540C\u4E00\u7247\u5185\u5B58\u7684\u6570\u636E\u7528\u4E0D\u540C\u53EB\u89D2\u5EA6\u53BB\u770B\u800C\u5F97\u51FA\u7684\u6570\u636E\u7ED3\u6784.</p><blockquote><p>\u8BA1\u7B97\u673A\u6982\u5FF5\u4E2D\u4E00\u4E2A\u5185\u5B58\u80FD\u591F\u5B58\u50A88\u4F4D\u4E8C\u8FDB\u5236\u6570\u4E5F\u5C31\u662F\u4E00\u4E2A\u5B57\u8282\u7684\u6570\u636E. \u5047\u8BBE\u6709\u4E00\u6BB5\u957F\u5EA6\u4E3A4\u7684\u8FDE\u7EED\u5185\u5B58(\u53EF\u4EE5\u5B58\u50A84\u5B57\u8282\u6570\u636E), \u5E76\u4E14\u6BCF\u4E2A\u5185\u5B58\u91CC\u5B58\u7684\u90FD\u662F1111111, \u90A3\u4E48\u6211\u4EEC\u628A\u7247\u5185\u5B58\u5C55\u73B0\u6210\u4EC0\u4E48\u6570\u636E\u8FD9\u5C31\u662F<strong>\u89C6\u56FE</strong>. \u5982\u679C\u4EE5Uint8Array(\u65E0\u7B26\u53F7, \u4E5F\u5C31\u662F\u6700\u9AD8\u4F4D\u4E0D\u7528\u6765\u8868\u793A\u6B63\u8D1F\u6570)\u89C6\u56FE\u6765\u8868\u793A\u8FD9\u6BB5\u5185\u5B58, \u4ED6\u5C55\u73B0\u51FA\u6765\u7684\u6570\u636E\u5C31\u662F[255, 255, 255, 255]; \u5982\u679C\u4EE5Int8Array\u89C6\u56FE\u6765\u8868\u793A, \u90A3\u4E48\u5B83\u5C55\u73B0\u51FA\u6765\u7684\u6570\u636E\u5C31\u662F[-127, -127, -127, -127]; \u5982\u679C\u4EE5Uint32Array\u89C6\u56FE\u6765\u8868\u793A, \u90A3\u4E48\u5B83\u5C55\u73B0\u51FA\u6765\u7684\u6570\u636E\u5C31\u662F[4294967295]</p></blockquote><p>TypedArray\u6307\u7684\u662F\u4EE5\u4E0B\u6784\u9020\u51FD\u6570\u7684\u603B\u79F0:</p><ul><li>Int8Array</li><li>Uint8Array</li><li>Uint8ClampedArray</li><li>Int16Array</li><li>Uint16Array</li><li>Int32Array</li><li>Uint32Array</li><li>Float32Array</li><li>Float64Array</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isArrayBuffer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isArrayBuffer</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isint16array" tabindex="-1"><a class="header-anchor" href="#isint16array" aria-hidden="true">#</a> isInt16Array</h3><p>\u662F\u5426\u662FInt16Array</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isInt16Array</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Int16Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isInt16Array</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isint32array" tabindex="-1"><a class="header-anchor" href="#isint32array" aria-hidden="true">#</a> isInt32Array</h3><p>\u662F\u5426\u662FInt32Array</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isInt32Array</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Int32Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isInt32Array</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isint8array" tabindex="-1"><a class="header-anchor" href="#isint8array" aria-hidden="true">#</a> isInt8Array</h3><p>\u662F\u5426\u662FInt8Array</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isInt8Array</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Int8Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isInt8Array</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isuint16array" tabindex="-1"><a class="header-anchor" href="#isuint16array" aria-hidden="true">#</a> isUint16Array</h3><p>\u662F\u5426\u662FUint16Array</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isUint16Array</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Uint16Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isUint16Array</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isuint32array" tabindex="-1"><a class="header-anchor" href="#isuint32array" aria-hidden="true">#</a> isUint32Array</h3><p>\u662F\u5426\u662FUint32Array</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isUint32Array</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Uint32Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isUint32Array</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isuint8array" tabindex="-1"><a class="header-anchor" href="#isuint8array" aria-hidden="true">#</a> isUint8Array</h3><p>\u662F\u5426\u662FUint8Array</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">isUint8Array</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// return true</span>

<span class="token function">isUint8Array</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// return false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,69),p=[i];function c(l,r){return s(),a("div",null,p)}var u=n(t,[["render",c],["__file","data-type.html.vue"]]);export{u as default};