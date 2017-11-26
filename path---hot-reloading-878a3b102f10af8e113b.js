webpackJsonp([0xc69f12bd0184],{513:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Webpack provides a configurable hot code reloading mechanism. One way to preserve your <code>atom</code> state between the reloads is to store it on <code>window</code> object. Here’s an example:</p>\n<p><strong>index.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./app\'</span><span class="token punctuation">)</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><strong>app.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> createAtom <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'tiny-atom\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> evolve <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./evolve\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> render <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./render\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> atom <span class="token operator">=</span> <span class="token function">createAtom</span><span class="token punctuation">(</span><span class="token function">initialState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> evolve<span class="token punctuation">,</span> onChange<span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">initialState</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// when reloading the code, initialise the state from hotAtom</span>\n  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> window<span class="token punctuation">.</span>hotAtom<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span> <span class="token punctuation">(</span>atom<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// on each state change, store it in hotAtom for hot reloading</span>\n  window<span class="token punctuation">.</span>hotAtom <span class="token operator">=</span> atom<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token function">render</span><span class="token punctuation">(</span>atom<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">render</span><span class="token punctuation">(</span>atom<span class="token punctuation">)</span>\n</code></pre>\n      </div>',excerpt:"Webpack provides a configurable hot code reloading mechanism. One way to preserve your  atom  state between the reloads is to store it on…",timeToRead:1,frontmatter:{title:"Hot reloading"},parent:{__typename:"File",relativePath:"hot-reloading.md"}}},pathContext:{slug:"/hot-reloading/"}}}});
//# sourceMappingURL=path---hot-reloading-878a3b102f10af8e113b.js.map