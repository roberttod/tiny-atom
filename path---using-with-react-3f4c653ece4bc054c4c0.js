webpackJsonp([49118234725270],{349:function(n,a){n.exports={data:{markdownRemark:{html:'<p><strong>Tiny Atom</strong> comes with connectors for mapping atom state to your components and reacting to changes efficiently. To create the connectors, use <code class="language-text">tiny-atom/react</code> module:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> createConnectors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'tiny-atom/react\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> connect<span class="token punctuation">,</span> Consumer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createConnectors</span><span class="token punctuation">(</span>atom<span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token punctuation">{</span> connect<span class="token punctuation">,</span> Consumer <span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="code-classlanguage-textconnectmap-actions-optionscomponentcode"><a href="#code-classlanguage-textconnectmap-actions-optionscomponentcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">connect(map, actions, options)(Component)</code></h2>\n<p>Connects a component to atom and rerenders it upon relevant changes.</p>\n<h4 id="map"><a href="#map" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>map</h4>\n<p><em>type</em>: <code class="language-text">function</code>\n<em>default</em>: <code class="language-text">null</code></p>\n<p>Map atom state to props for your component. Upon changes to atom, the mapped props are compared to the previously mapped props and the connected component is only rerendered if they differ. A shallow object diff is used in the comparison.</p>\n<h4 id="actions"><a href="#actions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>actions</h4>\n<p><em>type</em>: <code class="language-text">array | function</code>\n<em>default</em>: <code class="language-text">null</code></p>\n<p>An array of action names that will be turned into functions and passed via props or a function that takes dispatch and can return an object with functions that will be passed to the component.</p>\n<h4 id="optionspure"><a href="#optionspure" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>options.pure</h4>\n<p><em>type</em>: <code class="language-text">boolean</code>\n<em>default</em>: <code class="language-text">true</code></p>\n<p>If the connection is <code class="language-text">pure</code>, the mapped props are compared to previously mapped props for avoiding rerenders. Set this to false to rerender on any state change.</p>\n<h4 id="optionssync"><a href="#optionssync" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>options.sync</h4>\n<p><em>type</em>: <code class="language-text">boolean</code>\n<em>default</em>: <code class="language-text">false</code></p>\n<p>By default, the change listeners are debounced such that at most one render occurs per frame. Set to true to rerender immediately on change state.</p>\n<h3 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./connect\'</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">map</span> <span class="token operator">=</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    count<span class="token punctuation">:</span> state<span class="token punctuation">.</span>count\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">actions</span> <span class="token operator">=</span> <span class="token punctuation">(</span>dispatch<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    inc<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">\'inc\'</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    dec<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">\'dec\'</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>  \n<span class="token punctuation">}</span>\n\n<span class="token comment">// or</span>\n<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'inc\'</span><span class="token punctuation">,</span> <span class="token string">\'dec\'</span><span class="token punctuation">]</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>map<span class="token punctuation">,</span> actions<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span></code></pre>\n      </div>\n<h2 id="code-classlanguage-textltconsumer-gtcode"><a href="#code-classlanguage-textltconsumer-gtcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">&lt;Consumer /&gt;</code></h2>\n<p>A render props style component that can be used inline of your component’s render function to map the state similarly to how <code class="language-text">connect works</code>. It supports the following props.</p>\n<h4 id="map-1"><a href="#map-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>map</h4>\n<p><em>type</em>: <code class="language-text">function</code>\n<em>default</em>: <code class="language-text">null</code></p>\n<p>Map atom state to props for your component. Upon changes to atom, the mapped props are compared to the previously mapped props and the connected component is only rerendered if they differ. A shallow object diff is used in the comparison.</p>\n<h4 id="actions-1"><a href="#actions-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>actions</h4>\n<p><em>type</em>: <code class="language-text">array | function</code>\n<em>default</em>: <code class="language-text">null</code></p>\n<p>An array of action names that will be turned into functions and passed via props or a function that takes dispatch and can return an object with functions that will be passed to the component.</p>\n<h4 id="pure"><a href="#pure" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>pure</h4>\n<p><em>type</em>: <code class="language-text">boolean</code>\n<em>default</em>: <code class="language-text">true</code></p>\n<p>If the connection is <code class="language-text">pure</code>, the mapped props are compared to previously mapped props for avoiding rerenders. Set this to false to rerender on any state change. <strong>Note!</strong> Children prop is also compared in this case and if you’re using an inline render function, it will be different every time thus removing the benefits of setting <code class="language-text">pure</code> to <code class="language-text">true</code>.</p>\n<h4 id="sync"><a href="#sync" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>sync</h4>\n<p><em>type</em>: <code class="language-text">boolean</code>\n<em>default</em>: <code class="language-text">false</code></p>\n<p>By default, the change listeners are debounced such that at most one render occurs per frame. Set to true to rerender immediately on change state.</p>\n<h3 id="example-1"><a href="#example-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Consumer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./connect\'</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">map</span> <span class="token operator">=</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    count<span class="token punctuation">:</span> state<span class="token punctuation">.</span>count\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">actions</span> <span class="token operator">=</span> <span class="token punctuation">(</span>dispatch<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    inc<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">\'inc\'</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    dec<span class="token punctuation">:</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">\'dec\'</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>  \n<span class="token punctuation">}</span>\n\n<span class="token comment">// or</span>\n<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'inc\'</span><span class="token punctuation">,</span> <span class="token string">\'dec\'</span><span class="token punctuation">]</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token operator">&lt;</span>Consumer map<span class="token operator">=</span><span class="token punctuation">{</span>map<span class="token punctuation">}</span> actions<span class="token operator">=</span><span class="token punctuation">{</span>actions<span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token punctuation">,</span> inc<span class="token punctuation">,</span> dec <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>inc<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n    <span class="token punctuation">)</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>Consumer<span class="token operator">></span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="example-2"><a href="#example-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>To see a full working example, have a look at the <a href="https://github.com/QubitProducts/tiny-atom/tree/master/examples/react-example" target="_blank" rel="nofollow noopener noreferrer">examples/react-example</a></p>',excerpt:"Tiny Atom  comes with connectors for mapping atom state to your components and reacting to changes efficiently. To create the connectors…",timeToRead:3,frontmatter:{title:"Using with React"},parent:{__typename:"File",relativePath:"using-with-react.md"}}},pathContext:{slug:"/using-with-react/"}}}});
//# sourceMappingURL=path---using-with-react-3f4c653ece4bc054c4c0.js.map