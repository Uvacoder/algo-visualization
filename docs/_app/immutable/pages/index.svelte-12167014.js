import {
	S as ue,
	i as fe,
	s as de,
	l as x,
	K as pt,
	m as S,
	h as p,
	q as f,
	J as _,
	n as ne,
	u as oe,
	a as V,
	p as y,
	v as ce,
	c as K,
	b as Q,
	F as _t,
	G as bt,
	H as Et,
	I as vt,
	f as ie,
	t as ae,
	L as nt,
	M as Wt,
	k as Zt,
	D as Ve,
	N as Xt,
	O as st,
	P as Ce,
	A as Yt,
	w as Jt,
	Q as mt,
	e as Me,
	R as wt,
	x as he,
	y as me,
	z as pe,
	C as _e,
	T as Ke,
	U as qt,
	V as Se,
	W as Ne,
	X as Qt,
	Y as en,
	g as tn,
	d as nn,
} from '../chunks/index-e221cdc6.js';
import { b as yt } from '../chunks/paths-b9644fda.js';
function sn(e) {
	let t, n;
	return (
		(document.title = t = e[0]),
		{
			c() {
				(n = x('meta')), this.h();
			},
			l(s) {
				const i = pt('[data-svelte="svelte-1szihyx"]', document.head);
				(n = S(i, 'META', { name: !0, content: !0 })), i.forEach(p), this.h();
			},
			h() {
				f(n, 'name', 'description'), f(n, 'content', e[1]);
			},
			m(s, i) {
				_(document.head, n);
			},
			p(s, [i]) {
				i & 1 && t !== (t = s[0]) && (document.title = t), i & 2 && f(n, 'content', s[1]);
			},
			i: ne,
			o: ne,
			d(s) {
				p(n);
			},
		}
	);
}
function rn(e, t, n) {
	let { title: s = 'Algo Visualization' } = t,
		{ description: i = '' } = t;
	return (
		(e.$$set = (l) => {
			'title' in l && n(0, (s = l.title)), 'description' in l && n(1, (i = l.description));
		}),
		[s, i]
	);
}
class an extends ue {
	constructor(t) {
		super(), fe(this, t, rn, sn, de, { title: 0, description: 1 });
	}
}
function ln(e) {
	let t, n, s, i, l, r, a, o;
	return {
		c() {
			(t = x('div')),
				(n = x('div')),
				(s = x('div')),
				(i = x('h1')),
				(l = oe('Coming Soon!')),
				(r = V()),
				(a = x('p')),
				(o =
					oe(`This page is under the heavy rain of development, please stay tune to get more
				algorithm visualization.`)),
				this.h();
		},
		l(u) {
			t = S(u, 'DIV', { class: !0 });
			var g = y(t);
			n = S(g, 'DIV', { class: !0 });
			var v = y(n);
			s = S(v, 'DIV', { class: !0 });
			var b = y(s);
			i = S(b, 'H1', { class: !0 });
			var M = y(i);
			(l = ce(M, 'Coming Soon!')), M.forEach(p), (r = K(b)), (a = S(b, 'P', { class: !0 }));
			var I = y(a);
			(o = ce(
				I,
				`This page is under the heavy rain of development, please stay tune to get more
				algorithm visualization.`
			)),
				I.forEach(p),
				b.forEach(p),
				v.forEach(p),
				g.forEach(p),
				this.h();
		},
		h() {
			f(i, 'class', 'text-5xl font-bold'),
				f(a, 'class', 'py-6'),
				f(s, 'class', 'max-w-md'),
				f(n, 'class', 'hero-content text-center'),
				f(t, 'class', 'hero min-h-[90vh] bg-base-200');
		},
		m(u, g) {
			Q(u, t, g), _(t, n), _(n, s), _(s, i), _(i, l), _(s, r), _(s, a), _(a, o);
		},
		p: ne,
		i: ne,
		o: ne,
		d(u) {
			u && p(t);
		},
	};
}
class Le extends ue {
	constructor(t) {
		super(), fe(this, t, null, ln, de, {});
	}
}
var Ee = ((e) => ((e.ADD_UP_TO_LOOP = 'add-up-to-loop'), (e.ADD_UP_TO_MATH = 'add-up-to-math'), e))(
	Ee || {}
);
const on = [
		{
			code: `
      function addUpTo(n: number){
          let total = 0;
  
          for (let i = 0; i < n; i++) {
              total =+ i;
          }
      
          return total;
      }
  `,
			title: 'add-up-to-loop',
		},
		{
			code: `
      function addUpTo(n: number){
          return n * (n + 1) / 2;
      }
  `,
			title: 'add-up-to-math',
		},
	],
	cn = `<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub Dark
  Description: Dark theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-dark
  Current colors taken from GitHub's CSS
*/.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}</style>`,
	un = cn;
var We = { exports: {} };
function Ze(e) {
	return (
		e instanceof Map
			? (e.clear =
					e.delete =
					e.set =
						function () {
							throw new Error('map is read-only');
						})
			: e instanceof Set &&
			  (e.add =
					e.clear =
					e.delete =
						function () {
							throw new Error('set is read-only');
						}),
		Object.freeze(e),
		Object.getOwnPropertyNames(e).forEach(function (t) {
			var n = e[t];
			typeof n == 'object' && !Object.isFrozen(n) && Ze(n);
		}),
		e
	);
}
We.exports = Ze;
We.exports.default = Ze;
class rt {
	constructor(t) {
		t.data === void 0 && (t.data = {}), (this.data = t.data), (this.isMatchIgnored = !1);
	}
	ignoreMatch() {
		this.isMatchIgnored = !0;
	}
}
function At(e) {
	return e
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#x27;');
}
function ve(e, ...t) {
	const n = Object.create(null);
	for (const s in e) n[s] = e[s];
	return (
		t.forEach(function (s) {
			for (const i in s) n[i] = s[i];
		}),
		n
	);
}
const fn = '</span>',
	it = (e) => !!e.scope || (e.sublanguage && e.language),
	dn = (e, { prefix: t }) => {
		if (e.includes('.')) {
			const n = e.split('.');
			return [`${t}${n.shift()}`, ...n.map((s, i) => `${s}${'_'.repeat(i + 1)}`)].join(' ');
		}
		return `${t}${e}`;
	};
class gn {
	constructor(t, n) {
		(this.buffer = ''), (this.classPrefix = n.classPrefix), t.walk(this);
	}
	addText(t) {
		this.buffer += At(t);
	}
	openNode(t) {
		if (!it(t)) return;
		let n = '';
		t.sublanguage
			? (n = `language-${t.language}`)
			: (n = dn(t.scope, { prefix: this.classPrefix })),
			this.span(n);
	}
	closeNode(t) {
		!it(t) || (this.buffer += fn);
	}
	value() {
		return this.buffer;
	}
	span(t) {
		this.buffer += `<span class="${t}">`;
	}
}
const at = (e = {}) => {
	const t = { children: [] };
	return Object.assign(t, e), t;
};
class Xe {
	constructor() {
		(this.rootNode = at()), (this.stack = [this.rootNode]);
	}
	get top() {
		return this.stack[this.stack.length - 1];
	}
	get root() {
		return this.rootNode;
	}
	add(t) {
		this.top.children.push(t);
	}
	openNode(t) {
		const n = at({ scope: t });
		this.add(n), this.stack.push(n);
	}
	closeNode() {
		if (this.stack.length > 1) return this.stack.pop();
	}
	closeAllNodes() {
		for (; this.closeNode(); );
	}
	toJSON() {
		return JSON.stringify(this.rootNode, null, 4);
	}
	walk(t) {
		return this.constructor._walk(t, this.rootNode);
	}
	static _walk(t, n) {
		return (
			typeof n == 'string'
				? t.addText(n)
				: n.children &&
				  (t.openNode(n), n.children.forEach((s) => this._walk(t, s)), t.closeNode(n)),
			t
		);
	}
	static _collapse(t) {
		typeof t != 'string' &&
			(!t.children ||
				(t.children.every((n) => typeof n == 'string')
					? (t.children = [t.children.join('')])
					: t.children.forEach((n) => {
							Xe._collapse(n);
					  })));
	}
}
class hn extends Xe {
	constructor(t) {
		super(), (this.options = t);
	}
	addKeyword(t, n) {
		t !== '' && (this.openNode(n), this.addText(t), this.closeNode());
	}
	addText(t) {
		t !== '' && this.add(t);
	}
	addSublanguage(t, n) {
		const s = t.root;
		(s.sublanguage = !0), (s.language = n), this.add(s);
	}
	toHTML() {
		return new gn(this, this.options).value();
	}
	finalize() {
		return !0;
	}
}
function Te(e) {
	return e ? (typeof e == 'string' ? e : e.source) : null;
}
function Ot(e) {
	return Ae('(?=', e, ')');
}
function pn(e) {
	return Ae('(?:', e, ')*');
}
function _n(e) {
	return Ae('(?:', e, ')?');
}
function Ae(...e) {
	return e.map((n) => Te(n)).join('');
}
function bn(e) {
	const t = e[e.length - 1];
	return typeof t == 'object' && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function Ye(...e) {
	const t = bn(e);
	return '(' + (t.capture ? '' : '?:') + e.map((s) => Te(s)).join('|') + ')';
}
function xt(e) {
	return new RegExp(e.toString() + '|').exec('').length - 1;
}
function En(e, t) {
	const n = e && e.exec(t);
	return n && n.index === 0;
}
const vn = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function Je(e, { joinWith: t }) {
	let n = 0;
	return e
		.map((s) => {
			n += 1;
			const i = n;
			let l = Te(s),
				r = '';
			for (; l.length > 0; ) {
				const a = vn.exec(l);
				if (!a) {
					r += l;
					break;
				}
				(r += l.substring(0, a.index)),
					(l = l.substring(a.index + a[0].length)),
					a[0][0] === '\\' && a[1]
						? (r += '\\' + String(Number(a[1]) + i))
						: ((r += a[0]), a[0] === '(' && n++);
			}
			return r;
		})
		.map((s) => `(${s})`)
		.join(t);
}
const mn = /\b\B/,
	St = '[a-zA-Z]\\w*',
	qe = '[a-zA-Z_]\\w*',
	Nt = '\\b\\d+(\\.\\d+)?',
	Mt = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
	Tt = '\\b(0b[01]+)',
	wn =
		'!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
	yn = (e = {}) => {
		const t = /^#![ ]*\//;
		return (
			e.binary && (e.begin = Ae(t, /.*\b/, e.binary, /\b.*/)),
			ve(
				{
					scope: 'meta',
					begin: t,
					end: /$/,
					relevance: 0,
					'on:begin': (n, s) => {
						n.index !== 0 && s.ignoreMatch();
					},
				},
				e
			)
		);
	},
	Re = { begin: '\\\\[\\s\\S]', relevance: 0 },
	An = { scope: 'string', begin: "'", end: "'", illegal: '\\n', contains: [Re] },
	On = { scope: 'string', begin: '"', end: '"', illegal: '\\n', contains: [Re] },
	xn = {
		begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
	},
	je = function (e, t, n = {}) {
		const s = ve({ scope: 'comment', begin: e, end: t, contains: [] }, n);
		s.contains.push({
			scope: 'doctag',
			begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
			end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
			excludeBegin: !0,
			relevance: 0,
		});
		const i = Ye(
			'I',
			'a',
			'is',
			'so',
			'us',
			'to',
			'at',
			'if',
			'in',
			'it',
			'on',
			/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
			/[A-Za-z]+[-][a-z]+/,
			/[A-Za-z][a-z]{2,}/
		);
		return s.contains.push({ begin: Ae(/[ ]+/, '(', i, /[.]?[:]?([.][ ]|[ ])/, '){3}') }), s;
	},
	Sn = je('//', '$'),
	Nn = je('/\\*', '\\*/'),
	Mn = je('#', '$'),
	Tn = { scope: 'number', begin: Nt, relevance: 0 },
	Rn = { scope: 'number', begin: Mt, relevance: 0 },
	In = { scope: 'number', begin: Tt, relevance: 0 },
	kn = {
		begin: /(?=\/[^/\n]*\/)/,
		contains: [
			{
				scope: 'regexp',
				begin: /\//,
				end: /\/[gimuy]*/,
				illegal: /\n/,
				contains: [Re, { begin: /\[/, end: /\]/, relevance: 0, contains: [Re] }],
			},
		],
	},
	Dn = { scope: 'title', begin: St, relevance: 0 },
	Cn = { scope: 'title', begin: qe, relevance: 0 },
	Ln = { begin: '\\.\\s*' + qe, relevance: 0 },
	$n = function (e) {
		return Object.assign(e, {
			'on:begin': (t, n) => {
				n.data._beginMatch = t[1];
			},
			'on:end': (t, n) => {
				n.data._beginMatch !== t[1] && n.ignoreMatch();
			},
		});
	};
var $e = Object.freeze({
	__proto__: null,
	MATCH_NOTHING_RE: mn,
	IDENT_RE: St,
	UNDERSCORE_IDENT_RE: qe,
	NUMBER_RE: Nt,
	C_NUMBER_RE: Mt,
	BINARY_NUMBER_RE: Tt,
	RE_STARTERS_RE: wn,
	SHEBANG: yn,
	BACKSLASH_ESCAPE: Re,
	APOS_STRING_MODE: An,
	QUOTE_STRING_MODE: On,
	PHRASAL_WORDS_MODE: xn,
	COMMENT: je,
	C_LINE_COMMENT_MODE: Sn,
	C_BLOCK_COMMENT_MODE: Nn,
	HASH_COMMENT_MODE: Mn,
	NUMBER_MODE: Tn,
	C_NUMBER_MODE: Rn,
	BINARY_NUMBER_MODE: In,
	REGEXP_MODE: kn,
	TITLE_MODE: Dn,
	UNDERSCORE_TITLE_MODE: Cn,
	METHOD_GUARD: Ln,
	END_SAME_AS_BEGIN: $n,
});
function Bn(e, t) {
	e.input[e.index - 1] === '.' && t.ignoreMatch();
}
function Pn(e, t) {
	e.className !== void 0 && ((e.scope = e.className), delete e.className);
}
function Un(e, t) {
	!t ||
		!e.beginKeywords ||
		((e.begin = '\\b(' + e.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'),
		(e.__beforeBegin = Bn),
		(e.keywords = e.keywords || e.beginKeywords),
		delete e.beginKeywords,
		e.relevance === void 0 && (e.relevance = 0));
}
function jn(e, t) {
	!Array.isArray(e.illegal) || (e.illegal = Ye(...e.illegal));
}
function Hn(e, t) {
	if (!!e.match) {
		if (e.begin || e.end) throw new Error('begin & end are not supported with match');
		(e.begin = e.match), delete e.match;
	}
}
function zn(e, t) {
	e.relevance === void 0 && (e.relevance = 1);
}
const Gn = (e, t) => {
		if (!e.beforeMatch) return;
		if (e.starts) throw new Error('beforeMatch cannot be used with starts');
		const n = Object.assign({}, e);
		Object.keys(e).forEach((s) => {
			delete e[s];
		}),
			(e.keywords = n.keywords),
			(e.begin = Ae(n.beforeMatch, Ot(n.begin))),
			(e.starts = { relevance: 0, contains: [Object.assign(n, { endsParent: !0 })] }),
			(e.relevance = 0),
			delete n.beforeMatch;
	},
	Fn = ['of', 'and', 'for', 'in', 'not', 'or', 'if', 'then', 'parent', 'list', 'value'],
	Vn = 'keyword';
function Rt(e, t, n = Vn) {
	const s = Object.create(null);
	return (
		typeof e == 'string'
			? i(n, e.split(' '))
			: Array.isArray(e)
			? i(n, e)
			: Object.keys(e).forEach(function (l) {
					Object.assign(s, Rt(e[l], t, l));
			  }),
		s
	);
	function i(l, r) {
		t && (r = r.map((a) => a.toLowerCase())),
			r.forEach(function (a) {
				const o = a.split('|');
				s[o[0]] = [l, Kn(o[0], o[1])];
			});
	}
}
function Kn(e, t) {
	return t ? Number(t) : Wn(e) ? 0 : 1;
}
function Wn(e) {
	return Fn.includes(e.toLowerCase());
}
const lt = {},
	ye = (e) => {
		console.error(e);
	},
	ot = (e, ...t) => {
		console.log(`WARN: ${e}`, ...t);
	},
	xe = (e, t) => {
		lt[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), (lt[`${e}/${t}`] = !0));
	},
	Be = new Error();
function It(e, t, { key: n }) {
	let s = 0;
	const i = e[n],
		l = {},
		r = {};
	for (let a = 1; a <= t.length; a++) (r[a + s] = i[a]), (l[a + s] = !0), (s += xt(t[a - 1]));
	(e[n] = r), (e[n]._emit = l), (e[n]._multi = !0);
}
function Zn(e) {
	if (!!Array.isArray(e.begin)) {
		if (e.skip || e.excludeBegin || e.returnBegin)
			throw (ye('skip, excludeBegin, returnBegin not compatible with beginScope: {}'), Be);
		if (typeof e.beginScope != 'object' || e.beginScope === null)
			throw (ye('beginScope must be object'), Be);
		It(e, e.begin, { key: 'beginScope' }), (e.begin = Je(e.begin, { joinWith: '' }));
	}
}
function Xn(e) {
	if (!!Array.isArray(e.end)) {
		if (e.skip || e.excludeEnd || e.returnEnd)
			throw (ye('skip, excludeEnd, returnEnd not compatible with endScope: {}'), Be);
		if (typeof e.endScope != 'object' || e.endScope === null)
			throw (ye('endScope must be object'), Be);
		It(e, e.end, { key: 'endScope' }), (e.end = Je(e.end, { joinWith: '' }));
	}
}
function Yn(e) {
	e.scope &&
		typeof e.scope == 'object' &&
		e.scope !== null &&
		((e.beginScope = e.scope), delete e.scope);
}
function Jn(e) {
	Yn(e),
		typeof e.beginScope == 'string' && (e.beginScope = { _wrap: e.beginScope }),
		typeof e.endScope == 'string' && (e.endScope = { _wrap: e.endScope }),
		Zn(e),
		Xn(e);
}
function qn(e) {
	function t(r, a) {
		return new RegExp(
			Te(r),
			'm' + (e.case_insensitive ? 'i' : '') + (e.unicodeRegex ? 'u' : '') + (a ? 'g' : '')
		);
	}
	class n {
		constructor() {
			(this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0);
		}
		addRule(a, o) {
			(o.position = this.position++),
				(this.matchIndexes[this.matchAt] = o),
				this.regexes.push([o, a]),
				(this.matchAt += xt(a) + 1);
		}
		compile() {
			this.regexes.length === 0 && (this.exec = () => null);
			const a = this.regexes.map((o) => o[1]);
			(this.matcherRe = t(Je(a, { joinWith: '|' }), !0)), (this.lastIndex = 0);
		}
		exec(a) {
			this.matcherRe.lastIndex = this.lastIndex;
			const o = this.matcherRe.exec(a);
			if (!o) return null;
			const u = o.findIndex((v, b) => b > 0 && v !== void 0),
				g = this.matchIndexes[u];
			return o.splice(0, u), Object.assign(o, g);
		}
	}
	class s {
		constructor() {
			(this.rules = []),
				(this.multiRegexes = []),
				(this.count = 0),
				(this.lastIndex = 0),
				(this.regexIndex = 0);
		}
		getMatcher(a) {
			if (this.multiRegexes[a]) return this.multiRegexes[a];
			const o = new n();
			return (
				this.rules.slice(a).forEach(([u, g]) => o.addRule(u, g)),
				o.compile(),
				(this.multiRegexes[a] = o),
				o
			);
		}
		resumingScanAtSamePosition() {
			return this.regexIndex !== 0;
		}
		considerAll() {
			this.regexIndex = 0;
		}
		addRule(a, o) {
			this.rules.push([a, o]), o.type === 'begin' && this.count++;
		}
		exec(a) {
			const o = this.getMatcher(this.regexIndex);
			o.lastIndex = this.lastIndex;
			let u = o.exec(a);
			if (this.resumingScanAtSamePosition() && !(u && u.index === this.lastIndex)) {
				const g = this.getMatcher(0);
				(g.lastIndex = this.lastIndex + 1), (u = g.exec(a));
			}
			return (
				u &&
					((this.regexIndex += u.position + 1),
					this.regexIndex === this.count && this.considerAll()),
				u
			);
		}
	}
	function i(r) {
		const a = new s();
		return (
			r.contains.forEach((o) => a.addRule(o.begin, { rule: o, type: 'begin' })),
			r.terminatorEnd && a.addRule(r.terminatorEnd, { type: 'end' }),
			r.illegal && a.addRule(r.illegal, { type: 'illegal' }),
			a
		);
	}
	function l(r, a) {
		const o = r;
		if (r.isCompiled) return o;
		[Pn, Hn, Jn, Gn].forEach((g) => g(r, a)),
			e.compilerExtensions.forEach((g) => g(r, a)),
			(r.__beforeBegin = null),
			[Un, jn, zn].forEach((g) => g(r, a)),
			(r.isCompiled = !0);
		let u = null;
		return (
			typeof r.keywords == 'object' &&
				r.keywords.$pattern &&
				((r.keywords = Object.assign({}, r.keywords)),
				(u = r.keywords.$pattern),
				delete r.keywords.$pattern),
			(u = u || /\w+/),
			r.keywords && (r.keywords = Rt(r.keywords, e.case_insensitive)),
			(o.keywordPatternRe = t(u, !0)),
			a &&
				(r.begin || (r.begin = /\B|\b/),
				(o.beginRe = t(o.begin)),
				!r.end && !r.endsWithParent && (r.end = /\B|\b/),
				r.end && (o.endRe = t(o.end)),
				(o.terminatorEnd = Te(o.end) || ''),
				r.endsWithParent &&
					a.terminatorEnd &&
					(o.terminatorEnd += (r.end ? '|' : '') + a.terminatorEnd)),
			r.illegal && (o.illegalRe = t(r.illegal)),
			r.contains || (r.contains = []),
			(r.contains = [].concat(
				...r.contains.map(function (g) {
					return Qn(g === 'self' ? r : g);
				})
			)),
			r.contains.forEach(function (g) {
				l(g, o);
			}),
			r.starts && l(r.starts, a),
			(o.matcher = i(o)),
			o
		);
	}
	if (
		(e.compilerExtensions || (e.compilerExtensions = []),
		e.contains && e.contains.includes('self'))
	)
		throw new Error(
			'ERR: contains `self` is not supported at the top-level of a language.  See documentation.'
		);
	return (e.classNameAliases = ve(e.classNameAliases || {})), l(e);
}
function kt(e) {
	return e ? e.endsWithParent || kt(e.starts) : !1;
}
function Qn(e) {
	return (
		e.variants &&
			!e.cachedVariants &&
			(e.cachedVariants = e.variants.map(function (t) {
				return ve(e, { variants: null }, t);
			})),
		e.cachedVariants
			? e.cachedVariants
			: kt(e)
			? ve(e, { starts: e.starts ? ve(e.starts) : null })
			: Object.isFrozen(e)
			? ve(e)
			: e
	);
}
var es = '11.6.0';
class ts extends Error {
	constructor(t, n) {
		super(t), (this.name = 'HTMLInjectionError'), (this.html = n);
	}
}
const Fe = At,
	ct = ve,
	ut = Symbol('nomatch'),
	ns = 7,
	ss = function (e) {
		const t = Object.create(null),
			n = Object.create(null),
			s = [];
		let i = !0;
		const l =
				"Could not find the language '{}', did you forget to load/include a language module?",
			r = { disableAutodetect: !0, name: 'Plain text', contains: [] };
		let a = {
			ignoreUnescapedHTML: !1,
			throwUnescapedHTML: !1,
			noHighlightRe: /^(no-?highlight)$/i,
			languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
			classPrefix: 'hljs-',
			cssSelector: 'pre code',
			languages: null,
			__emitter: hn,
		};
		function o(c) {
			return a.noHighlightRe.test(c);
		}
		function u(c) {
			let d = c.className + ' ';
			d += c.parentNode ? c.parentNode.className : '';
			const m = a.languageDetectRe.exec(d);
			if (m) {
				const O = X(m[1]);
				return (
					O ||
						(ot(l.replace('{}', m[1])),
						ot('Falling back to no-highlight mode for this block.', c)),
					O ? m[1] : 'no-highlight'
				);
			}
			return d.split(/\s+/).find((O) => o(O) || X(O));
		}
		function g(c, d, m) {
			let O = '',
				R = '';
			typeof d == 'object'
				? ((O = c), (m = d.ignoreIllegals), (R = d.language))
				: (xe('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'),
				  xe(
						'10.7.0',
						`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`
				  ),
				  (R = c),
				  (O = d)),
				m === void 0 && (m = !0);
			const H = { code: O, language: R };
			z('before:highlight', H);
			const te = H.result ? H.result : v(H.language, H.code, m);
			return (te.code = H.code), z('after:highlight', te), te;
		}
		function v(c, d, m, O) {
			const R = Object.create(null);
			function H(h, E) {
				return h.keywords[E];
			}
			function te() {
				if (!A.keywords) {
					Z.addText($);
					return;
				}
				let h = 0;
				A.keywordPatternRe.lastIndex = 0;
				let E = A.keywordPatternRe.exec($),
					N = '';
				for (; E; ) {
					N += $.substring(h, E.index);
					const k = be.case_insensitive ? E[0].toLowerCase() : E[0],
						q = H(A, k);
					if (q) {
						const [ge, Vt] = q;
						if (
							(Z.addText(N),
							(N = ''),
							(R[k] = (R[k] || 0) + 1),
							R[k] <= ns && (De += Vt),
							ge.startsWith('_'))
						)
							N += E[0];
						else {
							const Kt = be.classNameAliases[ge] || ge;
							Z.addKeyword(E[0], Kt);
						}
					} else N += E[0];
					(h = A.keywordPatternRe.lastIndex), (E = A.keywordPatternRe.exec($));
				}
				(N += $.substring(h)), Z.addText(N);
			}
			function le() {
				if ($ === '') return;
				let h = null;
				if (typeof A.subLanguage == 'string') {
					if (!t[A.subLanguage]) {
						Z.addText($);
						return;
					}
					(h = v(A.subLanguage, $, !0, tt[A.subLanguage])), (tt[A.subLanguage] = h._top);
				} else h = M($, A.subLanguage.length ? A.subLanguage : null);
				A.relevance > 0 && (De += h.relevance), Z.addSublanguage(h._emitter, h.language);
			}
			function J() {
				A.subLanguage != null ? le() : te(), ($ = '');
			}
			function re(h, E) {
				let N = 1;
				const k = E.length - 1;
				for (; N <= k; ) {
					if (!h._emit[N]) {
						N++;
						continue;
					}
					const q = be.classNameAliases[h[N]] || h[N],
						ge = E[N];
					q ? Z.addKeyword(ge, q) : (($ = ge), te(), ($ = '')), N++;
				}
			}
			function Oe(h, E) {
				return (
					h.scope &&
						typeof h.scope == 'string' &&
						Z.openNode(be.classNameAliases[h.scope] || h.scope),
					h.beginScope &&
						(h.beginScope._wrap
							? (Z.addKeyword(
									$,
									be.classNameAliases[h.beginScope._wrap] || h.beginScope._wrap
							  ),
							  ($ = ''))
							: h.beginScope._multi && (re(h.beginScope, E), ($ = ''))),
					(A = Object.create(h, { parent: { value: A } })),
					A
				);
			}
			function Qe(h, E, N) {
				let k = En(h.endRe, N);
				if (k) {
					if (h['on:end']) {
						const q = new rt(h);
						h['on:end'](E, q), q.isMatchIgnored && (k = !1);
					}
					if (k) {
						for (; h.endsParent && h.parent; ) h = h.parent;
						return h;
					}
				}
				if (h.endsWithParent) return Qe(h.parent, E, N);
			}
			function jt(h) {
				return A.matcher.regexIndex === 0 ? (($ += h[0]), 1) : ((Ge = !0), 0);
			}
			function Ht(h) {
				const E = h[0],
					N = h.rule,
					k = new rt(N),
					q = [N.__beforeBegin, N['on:begin']];
				for (const ge of q) if (!!ge && (ge(h, k), k.isMatchIgnored)) return jt(E);
				return (
					N.skip
						? ($ += E)
						: (N.excludeBegin && ($ += E),
						  J(),
						  !N.returnBegin && !N.excludeBegin && ($ = E)),
					Oe(N, h),
					N.returnBegin ? 0 : E.length
				);
			}
			function zt(h) {
				const E = h[0],
					N = d.substring(h.index),
					k = Qe(A, h, N);
				if (!k) return ut;
				const q = A;
				A.endScope && A.endScope._wrap
					? (J(), Z.addKeyword(E, A.endScope._wrap))
					: A.endScope && A.endScope._multi
					? (J(), re(A.endScope, h))
					: q.skip
					? ($ += E)
					: (q.returnEnd || q.excludeEnd || ($ += E), J(), q.excludeEnd && ($ = E));
				do
					A.scope && Z.closeNode(),
						!A.skip && !A.subLanguage && (De += A.relevance),
						(A = A.parent);
				while (A !== k.parent);
				return k.starts && Oe(k.starts, h), q.returnEnd ? 0 : E.length;
			}
			function Gt() {
				const h = [];
				for (let E = A; E !== be; E = E.parent) E.scope && h.unshift(E.scope);
				h.forEach((E) => Z.openNode(E));
			}
			let ke = {};
			function et(h, E) {
				const N = E && E[0];
				if ((($ += h), N == null)) return J(), 0;
				if (ke.type === 'begin' && E.type === 'end' && ke.index === E.index && N === '') {
					if ((($ += d.slice(E.index, E.index + 1)), !i)) {
						const k = new Error(`0 width match regex (${c})`);
						throw ((k.languageName = c), (k.badRule = ke.rule), k);
					}
					return 1;
				}
				if (((ke = E), E.type === 'begin')) return Ht(E);
				if (E.type === 'illegal' && !m) {
					const k = new Error(
						'Illegal lexeme "' + N + '" for mode "' + (A.scope || '<unnamed>') + '"'
					);
					throw ((k.mode = A), k);
				} else if (E.type === 'end') {
					const k = zt(E);
					if (k !== ut) return k;
				}
				if (E.type === 'illegal' && N === '') return 1;
				if (ze > 1e5 && ze > E.index * 3)
					throw new Error('potential infinite loop, way more iterations than matches');
				return ($ += N), N.length;
			}
			const be = X(c);
			if (!be) throw (ye(l.replace('{}', c)), new Error('Unknown language: "' + c + '"'));
			const Ft = qn(be);
			let He = '',
				A = O || Ft;
			const tt = {},
				Z = new a.__emitter(a);
			Gt();
			let $ = '',
				De = 0,
				we = 0,
				ze = 0,
				Ge = !1;
			try {
				for (A.matcher.considerAll(); ; ) {
					ze++, Ge ? (Ge = !1) : A.matcher.considerAll(), (A.matcher.lastIndex = we);
					const h = A.matcher.exec(d);
					if (!h) break;
					const E = d.substring(we, h.index),
						N = et(E, h);
					we = h.index + N;
				}
				return (
					et(d.substring(we)),
					Z.closeAllNodes(),
					Z.finalize(),
					(He = Z.toHTML()),
					{ language: c, value: He, relevance: De, illegal: !1, _emitter: Z, _top: A }
				);
			} catch (h) {
				if (h.message && h.message.includes('Illegal'))
					return {
						language: c,
						value: Fe(d),
						illegal: !0,
						relevance: 0,
						_illegalBy: {
							message: h.message,
							index: we,
							context: d.slice(we - 100, we + 100),
							mode: h.mode,
							resultSoFar: He,
						},
						_emitter: Z,
					};
				if (i)
					return {
						language: c,
						value: Fe(d),
						illegal: !1,
						relevance: 0,
						errorRaised: h,
						_emitter: Z,
						_top: A,
					};
				throw h;
			}
		}
		function b(c) {
			const d = {
				value: Fe(c),
				illegal: !1,
				relevance: 0,
				_top: r,
				_emitter: new a.__emitter(a),
			};
			return d._emitter.addText(c), d;
		}
		function M(c, d) {
			d = d || a.languages || Object.keys(t);
			const m = b(c),
				O = d
					.filter(X)
					.filter(se)
					.map((J) => v(J, c, !1));
			O.unshift(m);
			const R = O.sort((J, re) => {
					if (J.relevance !== re.relevance) return re.relevance - J.relevance;
					if (J.language && re.language) {
						if (X(J.language).supersetOf === re.language) return 1;
						if (X(re.language).supersetOf === J.language) return -1;
					}
					return 0;
				}),
				[H, te] = R,
				le = H;
			return (le.secondBest = te), le;
		}
		function I(c, d, m) {
			const O = (d && n[d]) || m;
			c.classList.add('hljs'), c.classList.add(`language-${O}`);
		}
		function B(c) {
			let d = null;
			const m = u(c);
			if (o(m)) return;
			if (
				(z('before:highlightElement', { el: c, language: m }),
				c.children.length > 0 &&
					(a.ignoreUnescapedHTML ||
						(console.warn(
							'One of your code blocks includes unescaped HTML. This is a potentially serious security risk.'
						),
						console.warn('https://github.com/highlightjs/highlight.js/wiki/security'),
						console.warn('The element with unescaped HTML:'),
						console.warn(c)),
					a.throwUnescapedHTML))
			)
				throw new ts('One of your code blocks includes unescaped HTML.', c.innerHTML);
			d = c;
			const O = d.textContent,
				R = m ? g(O, { language: m, ignoreIllegals: !0 }) : M(O);
			(c.innerHTML = R.value),
				I(c, m, R.language),
				(c.result = { language: R.language, re: R.relevance, relevance: R.relevance }),
				R.secondBest &&
					(c.secondBest = {
						language: R.secondBest.language,
						relevance: R.secondBest.relevance,
					}),
				z('after:highlightElement', { el: c, result: R, text: O });
		}
		function D(c) {
			a = ct(a, c);
		}
		const G = () => {
			U(), xe('10.6.0', 'initHighlighting() deprecated.  Use highlightAll() now.');
		};
		function Y() {
			U(), xe('10.6.0', 'initHighlightingOnLoad() deprecated.  Use highlightAll() now.');
		}
		let C = !1;
		function U() {
			if (document.readyState === 'loading') {
				C = !0;
				return;
			}
			document.querySelectorAll(a.cssSelector).forEach(B);
		}
		function j() {
			C && U();
		}
		typeof window < 'u' &&
			window.addEventListener &&
			window.addEventListener('DOMContentLoaded', j, !1);
		function P(c, d) {
			let m = null;
			try {
				m = d(e);
			} catch (O) {
				if (
					(ye("Language definition for '{}' could not be registered.".replace('{}', c)),
					i)
				)
					ye(O);
				else throw O;
				m = r;
			}
			m.name || (m.name = c),
				(t[c] = m),
				(m.rawDefinition = d.bind(null, e)),
				m.aliases && W(m.aliases, { languageName: c });
		}
		function ee(c) {
			delete t[c];
			for (const d of Object.keys(n)) n[d] === c && delete n[d];
		}
		function L() {
			return Object.keys(t);
		}
		function X(c) {
			return (c = (c || '').toLowerCase()), t[c] || t[n[c]];
		}
		function W(c, { languageName: d }) {
			typeof c == 'string' && (c = [c]),
				c.forEach((m) => {
					n[m.toLowerCase()] = d;
				});
		}
		function se(c) {
			const d = X(c);
			return d && !d.disableAutodetect;
		}
		function F(c) {
			c['before:highlightBlock'] &&
				!c['before:highlightElement'] &&
				(c['before:highlightElement'] = (d) => {
					c['before:highlightBlock'](Object.assign({ block: d.el }, d));
				}),
				c['after:highlightBlock'] &&
					!c['after:highlightElement'] &&
					(c['after:highlightElement'] = (d) => {
						c['after:highlightBlock'](Object.assign({ block: d.el }, d));
					});
		}
		function T(c) {
			F(c), s.push(c);
		}
		function z(c, d) {
			const m = c;
			s.forEach(function (O) {
				O[m] && O[m](d);
			});
		}
		function w(c) {
			return (
				xe('10.7.0', 'highlightBlock will be removed entirely in v12.0'),
				xe('10.7.0', 'Please use highlightElement now.'),
				B(c)
			);
		}
		Object.assign(e, {
			highlight: g,
			highlightAuto: M,
			highlightAll: U,
			highlightElement: B,
			highlightBlock: w,
			configure: D,
			initHighlighting: G,
			initHighlightingOnLoad: Y,
			registerLanguage: P,
			unregisterLanguage: ee,
			listLanguages: L,
			getLanguage: X,
			registerAliases: W,
			autoDetection: se,
			inherit: ct,
			addPlugin: T,
		}),
			(e.debugMode = function () {
				i = !1;
			}),
			(e.safeMode = function () {
				i = !0;
			}),
			(e.versionString = es),
			(e.regex = {
				concat: Ae,
				lookahead: Ot,
				either: Ye,
				optional: _n,
				anyNumberOfTimes: pn,
			});
		for (const c in $e) typeof $e[c] == 'object' && We.exports($e[c]);
		return Object.assign(e, $e), e;
	};
var Ie = ss({}),
	rs = Ie;
Ie.HighlightJS = Ie;
Ie.default = Ie;
const ft = rs;
const is = (e) => ({ highlighted: e & 8 }),
	dt = (e) => ({ highlighted: e[3] });
function as(e) {
	let t;
	return {
		c() {
			t = oe(e[1]);
		},
		l(n) {
			t = ce(n, e[1]);
		},
		m(n, s) {
			Q(n, t, s);
		},
		p(n, s) {
			s & 2 && Jt(t, n[1]);
		},
		d(n) {
			n && p(t);
		},
	};
}
function ls(e) {
	let t, n;
	return {
		c() {
			(t = new mt(!1)), (n = Me()), this.h();
		},
		l(s) {
			(t = wt(s, !1)), (n = Me()), this.h();
		},
		h() {
			t.a = n;
		},
		m(s, i) {
			t.m(e[3], s, i), Q(s, n, i);
		},
		p(s, i) {
			i & 8 && t.p(s[3]);
		},
		d(s) {
			s && p(n), s && t.d();
		},
	};
}
function os(e) {
	let t, n, s;
	function i(u, g) {
		return u[3] !== void 0 ? ls : as;
	}
	let l = i(e),
		r = l(e),
		a = [{ 'data-language': (s = e[0].name || 'plaintext') }, e[4]],
		o = {};
	for (let u = 0; u < a.length; u += 1) o = Ve(o, a[u]);
	return {
		c() {
			(t = x('pre')), (n = x('code')), r.c(), this.h();
		},
		l(u) {
			t = S(u, 'PRE', { 'data-language': !0 });
			var g = y(t);
			n = S(g, 'CODE', { class: !0 });
			var v = y(n);
			r.l(v), v.forEach(p), g.forEach(p), this.h();
		},
		h() {
			f(n, 'class', 'hljs'), st(t, o), Ce(t, 'langtag', e[2]), Ce(t, 'svelte-1301pmm', !0);
		},
		m(u, g) {
			Q(u, t, g), _(t, n), r.m(n, null);
		},
		p(u, g) {
			l === (l = i(u)) && r ? r.p(u, g) : (r.d(1), (r = l(u)), r && (r.c(), r.m(n, null))),
				st(
					t,
					(o = Yt(a, [
						g & 1 && s !== (s = u[0].name || 'plaintext') && { 'data-language': s },
						g & 16 && u[4],
					]))
				),
				Ce(t, 'langtag', u[2]),
				Ce(t, 'svelte-1301pmm', !0);
		},
		d(u) {
			u && p(t), r.d();
		},
	};
}
function cs(e) {
	let t;
	const n = e[6].default,
		s = _t(n, e, e[5], dt),
		i = s || os(e);
	return {
		c() {
			i && i.c();
		},
		l(l) {
			i && i.l(l);
		},
		m(l, r) {
			i && i.m(l, r), (t = !0);
		},
		p(l, [r]) {
			s
				? s.p && (!t || r & 40) && bt(s, n, l, l[5], t ? vt(n, l[5], r, is) : Et(l[5]), dt)
				: i && i.p && (!t || r & 31) && i.p(l, t ? r : -1);
		},
		i(l) {
			t || (ie(i, l), (t = !0));
		},
		o(l) {
			ae(i, l), (t = !1);
		},
		d(l) {
			i && i.d(l);
		},
	};
}
function us(e, t, n) {
	const s = ['language', 'code', 'langtag'];
	let i = nt(t, s),
		{ $$slots: l = {}, $$scope: r } = t,
		{ language: a = { name: void 0, register: void 0 } } = t,
		{ code: o = void 0 } = t,
		{ langtag: u = !1 } = t;
	const g = Wt();
	let v;
	return (
		Zt(() => {
			v && g('highlight', { highlighted: v });
		}),
		(e.$$set = (b) => {
			(t = Ve(Ve({}, t), Xt(b))),
				n(4, (i = nt(t, s))),
				'language' in b && n(0, (a = b.language)),
				'code' in b && n(1, (o = b.code)),
				'langtag' in b && n(2, (u = b.langtag)),
				'$$scope' in b && n(5, (r = b.$$scope));
		}),
		(e.$$.update = () => {
			e.$$.dirty & 3 &&
				a.name &&
				a.register &&
				(ft.registerLanguage(a.name, a.register),
				n(3, (v = ft.highlight(o, { language: a.name }).value)));
		}),
		[a, o, u, v, i, r, l]
	);
}
class fs extends ue {
	constructor(t) {
		super(), fe(this, t, us, cs, de, { language: 0, code: 1, langtag: 2 });
	}
}
const Pe = '[A-Za-z$_][0-9A-Za-z$_]*',
	Dt = [
		'as',
		'in',
		'of',
		'if',
		'for',
		'while',
		'finally',
		'var',
		'new',
		'function',
		'do',
		'return',
		'void',
		'else',
		'break',
		'catch',
		'instanceof',
		'with',
		'throw',
		'case',
		'default',
		'try',
		'switch',
		'continue',
		'typeof',
		'delete',
		'let',
		'yield',
		'const',
		'class',
		'debugger',
		'async',
		'await',
		'static',
		'import',
		'from',
		'export',
		'extends',
	],
	Ct = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
	Lt = [
		'Object',
		'Function',
		'Boolean',
		'Symbol',
		'Math',
		'Date',
		'Number',
		'BigInt',
		'String',
		'RegExp',
		'Array',
		'Float32Array',
		'Float64Array',
		'Int8Array',
		'Uint8Array',
		'Uint8ClampedArray',
		'Int16Array',
		'Int32Array',
		'Uint16Array',
		'Uint32Array',
		'BigInt64Array',
		'BigUint64Array',
		'Set',
		'Map',
		'WeakSet',
		'WeakMap',
		'ArrayBuffer',
		'SharedArrayBuffer',
		'Atomics',
		'DataView',
		'JSON',
		'Promise',
		'Generator',
		'GeneratorFunction',
		'AsyncFunction',
		'Reflect',
		'Proxy',
		'Intl',
		'WebAssembly',
	],
	$t = [
		'Error',
		'EvalError',
		'InternalError',
		'RangeError',
		'ReferenceError',
		'SyntaxError',
		'TypeError',
		'URIError',
	],
	Bt = [
		'setInterval',
		'setTimeout',
		'clearInterval',
		'clearTimeout',
		'require',
		'exports',
		'eval',
		'isFinite',
		'isNaN',
		'parseFloat',
		'parseInt',
		'decodeURI',
		'decodeURIComponent',
		'encodeURI',
		'encodeURIComponent',
		'escape',
		'unescape',
	],
	Pt = [
		'arguments',
		'this',
		'super',
		'console',
		'window',
		'document',
		'localStorage',
		'module',
		'global',
	],
	Ut = [].concat(Bt, Lt, $t);
function ds(e) {
	const t = e.regex,
		n = (d, { after: m }) => {
			const O = '</' + d[0].slice(1);
			return d.input.indexOf(O, m) !== -1;
		},
		s = Pe,
		i = { begin: '<>', end: '</>' },
		l = /<[A-Za-z0-9\\._:-]+\s*\/>/,
		r = {
			begin: /<[A-Za-z0-9\\._:-]+/,
			end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
			isTrulyOpeningTag: (d, m) => {
				const O = d[0].length + d.index,
					R = d.input[O];
				if (R === '<' || R === ',') {
					m.ignoreMatch();
					return;
				}
				R === '>' && (n(d, { after: O }) || m.ignoreMatch());
				let H;
				if ((H = d.input.substring(O).match(/^\s+extends\s+/)) && H.index === 0) {
					m.ignoreMatch();
					return;
				}
			},
		},
		a = { $pattern: Pe, keyword: Dt, literal: Ct, built_in: Ut, 'variable.language': Pt },
		o = '[0-9](_?[0-9])*',
		u = `\\.(${o})`,
		g = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
		v = {
			className: 'number',
			variants: [
				{ begin: `(\\b(${g})((${u})|\\.)?|(${u}))[eE][+-]?(${o})\\b` },
				{ begin: `\\b(${g})\\b((${u})\\b|\\.)?|(${u})\\b` },
				{ begin: '\\b(0|[1-9](_?[0-9])*)n\\b' },
				{ begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' },
				{ begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' },
				{ begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' },
				{ begin: '\\b0[0-7]+n?\\b' },
			],
			relevance: 0,
		},
		b = { className: 'subst', begin: '\\$\\{', end: '\\}', keywords: a, contains: [] },
		M = {
			begin: 'html`',
			end: '',
			starts: {
				end: '`',
				returnEnd: !1,
				contains: [e.BACKSLASH_ESCAPE, b],
				subLanguage: 'xml',
			},
		},
		I = {
			begin: 'css`',
			end: '',
			starts: {
				end: '`',
				returnEnd: !1,
				contains: [e.BACKSLASH_ESCAPE, b],
				subLanguage: 'css',
			},
		},
		B = { className: 'string', begin: '`', end: '`', contains: [e.BACKSLASH_ESCAPE, b] },
		D = e.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
			relevance: 0,
			contains: [
				{
					begin: '(?=@[A-Za-z]+)',
					relevance: 0,
					contains: [
						{ className: 'doctag', begin: '@[A-Za-z]+' },
						{
							className: 'type',
							begin: '\\{',
							end: '\\}',
							excludeEnd: !0,
							excludeBegin: !0,
							relevance: 0,
						},
						{
							className: 'variable',
							begin: s + '(?=\\s*(-)|$)',
							endsParent: !0,
							relevance: 0,
						},
						{ begin: /(?=[^\n])\s/, relevance: 0 },
					],
				},
			],
		}),
		G = { className: 'comment', variants: [D, e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE] },
		Y = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, M, I, B, v];
	b.contains = Y.concat({ begin: /\{/, end: /\}/, keywords: a, contains: ['self'].concat(Y) });
	const C = [].concat(G, b.contains),
		U = C.concat([{ begin: /\(/, end: /\)/, keywords: a, contains: ['self'].concat(C) }]),
		j = {
			className: 'params',
			begin: /\(/,
			end: /\)/,
			excludeBegin: !0,
			excludeEnd: !0,
			keywords: a,
			contains: U,
		},
		P = {
			variants: [
				{
					match: [
						/class/,
						/\s+/,
						s,
						/\s+/,
						/extends/,
						/\s+/,
						t.concat(s, '(', t.concat(/\./, s), ')*'),
					],
					scope: {
						1: 'keyword',
						3: 'title.class',
						5: 'keyword',
						7: 'title.class.inherited',
					},
				},
				{ match: [/class/, /\s+/, s], scope: { 1: 'keyword', 3: 'title.class' } },
			],
		},
		ee = {
			relevance: 0,
			match: t.either(
				/\bJSON/,
				/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
				/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
				/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
			),
			className: 'title.class',
			keywords: { _: [...Lt, ...$t] },
		},
		L = {
			label: 'use_strict',
			className: 'meta',
			relevance: 10,
			begin: /^\s*['"]use (strict|asm)['"]/,
		},
		X = {
			variants: [
				{ match: [/function/, /\s+/, s, /(?=\s*\()/] },
				{ match: [/function/, /\s*(?=\()/] },
			],
			className: { 1: 'keyword', 3: 'title.function' },
			label: 'func.def',
			contains: [j],
			illegal: /%/,
		},
		W = { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: 'variable.constant' };
	function se(d) {
		return t.concat('(?!', d.join('|'), ')');
	}
	const F = {
			match: t.concat(/\b/, se([...Bt, 'super']), s, t.lookahead(/\(/)),
			className: 'title.function',
			relevance: 0,
		},
		T = {
			begin: t.concat(/\./, t.lookahead(t.concat(s, /(?![0-9A-Za-z$_(])/))),
			end: s,
			excludeBegin: !0,
			keywords: 'prototype',
			className: 'property',
			relevance: 0,
		},
		z = {
			match: [/get|set/, /\s+/, s, /(?=\()/],
			className: { 1: 'keyword', 3: 'title.function' },
			contains: [{ begin: /\(\)/ }, j],
		},
		w =
			'(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' +
			e.UNDERSCORE_IDENT_RE +
			')\\s*=>',
		c = {
			match: [/const|var|let/, /\s+/, s, /\s*/, /=\s*/, /(async\s*)?/, t.lookahead(w)],
			keywords: 'async',
			className: { 1: 'keyword', 3: 'title.function' },
			contains: [j],
		};
	return {
		name: 'Javascript',
		aliases: ['js', 'jsx', 'mjs', 'cjs'],
		keywords: a,
		exports: { PARAMS_CONTAINS: U, CLASS_REFERENCE: ee },
		illegal: /#(?![$_A-z])/,
		contains: [
			e.SHEBANG({ label: 'shebang', binary: 'node', relevance: 5 }),
			L,
			e.APOS_STRING_MODE,
			e.QUOTE_STRING_MODE,
			M,
			I,
			B,
			G,
			v,
			ee,
			{ className: 'attr', begin: s + t.lookahead(':'), relevance: 0 },
			c,
			{
				begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
				keywords: 'return throw case',
				relevance: 0,
				contains: [
					G,
					e.REGEXP_MODE,
					{
						className: 'function',
						begin: w,
						returnBegin: !0,
						end: '\\s*=>',
						contains: [
							{
								className: 'params',
								variants: [
									{ begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
									{ className: null, begin: /\(\s*\)/, skip: !0 },
									{
										begin: /\(/,
										end: /\)/,
										excludeBegin: !0,
										excludeEnd: !0,
										keywords: a,
										contains: U,
									},
								],
							},
						],
					},
					{ begin: /,/, relevance: 0 },
					{ match: /\s+/, relevance: 0 },
					{
						variants: [
							{ begin: i.begin, end: i.end },
							{ match: l },
							{ begin: r.begin, 'on:begin': r.isTrulyOpeningTag, end: r.end },
						],
						subLanguage: 'xml',
						contains: [{ begin: r.begin, end: r.end, skip: !0, contains: ['self'] }],
					},
				],
			},
			X,
			{ beginKeywords: 'while if switch catch for' },
			{
				begin:
					'\\b(?!function)' +
					e.UNDERSCORE_IDENT_RE +
					'\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
				returnBegin: !0,
				label: 'func.def',
				contains: [j, e.inherit(e.TITLE_MODE, { begin: s, className: 'title.function' })],
			},
			{ match: /\.\.\./, relevance: 0 },
			T,
			{ match: '\\$' + s, relevance: 0 },
			{
				match: [/\bconstructor(?=\s*\()/],
				className: { 1: 'title.function' },
				contains: [j],
			},
			F,
			W,
			P,
			z,
			{ match: /\$[(.]/ },
		],
	};
}
function gs(e) {
	const t = ds(e),
		n = Pe,
		s = [
			'any',
			'void',
			'number',
			'boolean',
			'string',
			'object',
			'never',
			'symbol',
			'bigint',
			'unknown',
		],
		i = {
			beginKeywords: 'namespace',
			end: /\{/,
			excludeEnd: !0,
			contains: [t.exports.CLASS_REFERENCE],
		},
		l = {
			beginKeywords: 'interface',
			end: /\{/,
			excludeEnd: !0,
			keywords: { keyword: 'interface extends', built_in: s },
			contains: [t.exports.CLASS_REFERENCE],
		},
		r = { className: 'meta', relevance: 10, begin: /^\s*['"]use strict['"]/ },
		a = [
			'type',
			'namespace',
			'interface',
			'public',
			'private',
			'protected',
			'implements',
			'declare',
			'abstract',
			'readonly',
			'enum',
			'override',
		],
		o = {
			$pattern: Pe,
			keyword: Dt.concat(a),
			literal: Ct,
			built_in: Ut.concat(s),
			'variable.language': Pt,
		},
		u = { className: 'meta', begin: '@' + n },
		g = (b, M, I) => {
			const B = b.contains.findIndex((D) => D.label === M);
			if (B === -1) throw new Error('can not find mode to replace');
			b.contains.splice(B, 1, I);
		};
	Object.assign(t.keywords, o),
		t.exports.PARAMS_CONTAINS.push(u),
		(t.contains = t.contains.concat([u, i, l])),
		g(t, 'shebang', e.SHEBANG()),
		g(t, 'use_strict', r);
	const v = t.contains.find((b) => b.label === 'func.def');
	return (v.relevance = 0), Object.assign(t, { name: 'TypeScript', aliases: ['ts', 'tsx'] }), t;
}
const hs = { name: 'typescript', register: gs },
	ps = hs;
function _s(e) {
	let t, n;
	return (
		(t = new fs({ props: { language: ps, code: e[0] } })),
		{
			c() {
				he(t.$$.fragment);
			},
			l(s) {
				me(t.$$.fragment, s);
			},
			m(s, i) {
				pe(t, s, i), (n = !0);
			},
			p(s, [i]) {
				const l = {};
				i & 1 && (l.code = s[0]), t.$set(l);
			},
			i(s) {
				n || (ie(t.$$.fragment, s), (n = !0));
			},
			o(s) {
				ae(t.$$.fragment, s), (n = !1);
			},
			d(s) {
				_e(t, s);
			},
		}
	);
}
function bs(e, t, n) {
	let { code: s } = t;
	return (
		(e.$$set = (i) => {
			'code' in i && n(0, (s = i.code));
		}),
		[s]
	);
}
class Es extends ue {
	constructor(t) {
		super(), fe(this, t, bs, _s, de, { code: 0 });
	}
}
function vs(e) {
	let t, n;
	return {
		c() {
			(t = x('div')), (n = x('input')), this.h();
		},
		l(s) {
			t = S(s, 'DIV', { class: !0 });
			var i = y(t);
			(n = S(i, 'INPUT', { type: !0, id: !0, placeholder: !0, class: !0 })),
				i.forEach(p),
				this.h();
		},
		h() {
			f(n, 'type', 'number'),
				f(n, 'id', 'plot-input'),
				f(n, 'placeholder', e[0]),
				f(n, 'class', 'input input-bordered w-full max-w-xs'),
				f(t, 'class', 'form-control w-full max-w-xs');
		},
		m(s, i) {
			Q(s, t, i), _(t, n);
		},
		p(s, [i]) {
			i & 1 && f(n, 'placeholder', s[0]);
		},
		i: ne,
		o: ne,
		d(s) {
			s && p(t);
		},
	};
}
function ms(e, t, n) {
	let { placeholder: s = '' } = t;
	return (
		(e.$$set = (i) => {
			'placeholder' in i && n(0, (s = i.placeholder));
		}),
		[s]
	);
}
class ws extends ue {
	constructor(t) {
		super(), fe(this, t, ms, vs, de, { placeholder: 0 });
	}
}
function ys(e) {
	let t, n, s, i, l, r, a, o, u, g, v, b, M, I, B, D, G, Y, C, U, j, P, ee, L, X, W, se, F;
	return (
		(G = new ws({ props: { placeholder: "input desired 'n'" } })),
		(P = new Es({ props: { code: e[1].code } })),
		{
			c() {
				(t = new mt(!1)),
					(n = Me()),
					(s = V()),
					(i = x('section')),
					(l = x('div')),
					(r = x('button')),
					(a = oe('AddUpTo (Loop)')),
					(u = V()),
					(g = x('button')),
					(v = oe('AddUpTo (Math)')),
					(M = V()),
					(I = x('div')),
					(B = V()),
					(D = x('div')),
					he(G.$$.fragment),
					(Y = V()),
					(C = x('section')),
					(U = x('div')),
					(j = x('div')),
					he(P.$$.fragment),
					(ee = V()),
					(L = x('div')),
					(X = oe('lorem')),
					this.h();
			},
			l(T) {
				const z = pt('[data-svelte="svelte-ppdu3h"]', document.head);
				(t = wt(z, !1)),
					(n = Me()),
					z.forEach(p),
					(s = K(T)),
					(i = S(T, 'SECTION', { class: !0 }));
				var w = y(i);
				l = S(w, 'DIV', { class: !0 });
				var c = y(l);
				r = S(c, 'BUTTON', { class: !0 });
				var d = y(r);
				(a = ce(d, 'AddUpTo (Loop)')),
					d.forEach(p),
					(u = K(c)),
					(g = S(c, 'BUTTON', { class: !0 }));
				var m = y(g);
				(v = ce(m, 'AddUpTo (Math)')),
					m.forEach(p),
					c.forEach(p),
					(M = K(w)),
					(I = S(w, 'DIV', { class: !0 })),
					y(I).forEach(p),
					(B = K(w)),
					(D = S(w, 'DIV', {}));
				var O = y(D);
				me(G.$$.fragment, O),
					O.forEach(p),
					w.forEach(p),
					(Y = K(T)),
					(C = S(T, 'SECTION', { class: !0 }));
				var R = y(C);
				U = S(R, 'DIV', { class: !0 });
				var H = y(U);
				j = S(H, 'DIV', { id: !0, class: !0 });
				var te = y(j);
				me(P.$$.fragment, te),
					te.forEach(p),
					H.forEach(p),
					(ee = K(R)),
					(L = S(R, 'DIV', { class: !0 }));
				var le = y(L);
				(X = ce(le, 'lorem')), le.forEach(p), R.forEach(p), this.h();
			},
			h() {
				(t.a = n),
					f(
						r,
						'class',
						(o = 'btn ' + (e[0] === Ee.ADD_UP_TO_LOOP ? 'btn-primary' : void 0))
					),
					f(
						g,
						'class',
						(b = 'btn ' + (e[0] === Ee.ADD_UP_TO_MATH ? 'btn-primary' : void 0))
					),
					f(l, 'class', 'flex justify-center gap-4'),
					f(I, 'class', 'divider divider-horizontal'),
					f(i, 'class', 'flex w-full items-center justify-center py-8'),
					f(j, 'id', 'code-preview'),
					f(j, 'class', 'mockup-code w-full'),
					f(U, 'class', 'flex-1'),
					f(L, 'class', 'flex-1'),
					f(C, 'class', 'my-8 mx-10 flex justify-between gap-8');
			},
			m(T, z) {
				t.m(un, document.head),
					_(document.head, n),
					Q(T, s, z),
					Q(T, i, z),
					_(i, l),
					_(l, r),
					_(r, a),
					_(l, u),
					_(l, g),
					_(g, v),
					_(i, M),
					_(i, I),
					_(i, B),
					_(i, D),
					pe(G, D, null),
					Q(T, Y, z),
					Q(T, C, z),
					_(C, U),
					_(U, j),
					pe(P, j, null),
					_(C, ee),
					_(C, L),
					_(L, X),
					(W = !0),
					se || ((F = [Ke(r, 'click', e[3]), Ke(g, 'click', e[4])]), (se = !0));
			},
			p(T, [z]) {
				(!W ||
					(z & 1 &&
						o !==
							(o =
								'btn ' + (T[0] === Ee.ADD_UP_TO_LOOP ? 'btn-primary' : void 0)))) &&
					f(r, 'class', o),
					(!W ||
						(z & 1 &&
							b !==
								(b =
									'btn ' +
									(T[0] === Ee.ADD_UP_TO_MATH ? 'btn-primary' : void 0)))) &&
						f(g, 'class', b);
				const w = {};
				z & 2 && (w.code = T[1].code), P.$set(w);
			},
			i(T) {
				W || (ie(G.$$.fragment, T), ie(P.$$.fragment, T), (W = !0));
			},
			o(T) {
				ae(G.$$.fragment, T), ae(P.$$.fragment, T), (W = !1);
			},
			d(T) {
				p(n),
					T && t.d(),
					T && p(s),
					T && p(i),
					_e(G),
					T && p(Y),
					T && p(C),
					_e(P),
					(se = !1),
					qt(F);
			},
		}
	);
}
function As(e, t, n) {
	let s,
		i = Ee.ADD_UP_TO_LOOP;
	function l(o) {
		return n(0, (i = o));
	}
	const r = () => l(Ee.ADD_UP_TO_LOOP),
		a = () => l(Ee.ADD_UP_TO_MATH);
	return (
		(e.$$.update = () => {
			e.$$.dirty & 1 && n(1, (s = on.filter((o) => o.title === i)[0]));
		}),
		[i, s, l, r, a]
	);
}
class Os extends ue {
	constructor(t) {
		super(), fe(this, t, As, ys, de, {});
	}
}
const Ue = [
	{ id: 0, title: 'Big O Notation', component: Os },
	{ id: 1, title: 'Search Algorithm', component: Le },
	{ id: 2, title: 'Sort Algorithm', component: Le },
	{ id: 3, title: 'Path-finding Algorithm', component: Le },
	{ id: 4, title: 'Others Algorithm', component: Le },
];
function xs(e) {
	let t;
	return {
		c() {
			(t = x('div')), this.h();
		},
		l(n) {
			(t = S(n, 'DIV', { class: !0 })), y(t).forEach(p), this.h();
		},
		h() {
			f(t, 'class', 'divider');
		},
		m(n, s) {
			Q(n, t, s);
		},
		p: ne,
		i: ne,
		o: ne,
		d(n) {
			n && p(t);
		},
	};
}
class Ss extends ue {
	constructor(t) {
		super(), fe(this, t, null, xs, de, {});
	}
}
function gt(e, t, n) {
	const s = e.slice();
	return (s[5] = t[n]), s;
}
function ht(e, t) {
	let n,
		s,
		i = t[5].title + '',
		l,
		r,
		a,
		o,
		u;
	function g() {
		return t[4](t[5]);
	}
	return {
		key: e,
		first: null,
		c() {
			(n = x('li')), (s = x('button')), (l = oe(i)), (a = V()), this.h();
		},
		l(v) {
			n = S(v, 'LI', { class: !0 });
			var b = y(n);
			s = S(b, 'BUTTON', { class: !0 });
			var M = y(s);
			(l = ce(M, i)), M.forEach(p), (a = K(b)), b.forEach(p), this.h();
		},
		h() {
			f(s, 'class', (r = t[0] === t[5].id ? 'active' : '')),
				f(n, 'class', 'py-1'),
				(this.first = n);
		},
		m(v, b) {
			Q(v, n, b), _(n, s), _(s, l), _(n, a), o || ((u = Ke(s, 'click', g)), (o = !0));
		},
		p(v, b) {
			(t = v), b & 1 && r !== (r = t[0] === t[5].id ? 'active' : '') && f(s, 'class', r);
		},
		d(v) {
			v && p(n), (o = !1), u();
		},
	};
}
function Ns(e) {
	let t,
		n,
		s,
		i,
		l,
		r,
		a,
		o,
		u,
		g,
		v,
		b,
		M,
		I,
		B,
		D,
		G,
		Y,
		C,
		U,
		j,
		P,
		ee,
		L = [],
		X = new Map(),
		W;
	const se = e[3].default,
		F = _t(se, e, e[2], null);
	P = new Ss({});
	let T = Ue;
	const z = (w) => w[5].id;
	for (let w = 0; w < T.length; w += 1) {
		let c = gt(e, T, w),
			d = z(c);
		X.set(d, (L[w] = ht(d, c)));
	}
	return {
		c() {
			(t = x('div')),
				(n = x('input')),
				(s = V()),
				(i = x('div')),
				F && F.c(),
				(l = V()),
				(r = x('div')),
				(a = x('label')),
				(o = V()),
				(u = x('ul')),
				(g = x('div')),
				(v = x('div')),
				(b = x('label')),
				(M = Se('svg')),
				(I = Se('path')),
				(B = V()),
				(D = x('a')),
				(G = oe('Algo Visualization')),
				(Y = V()),
				(C = x('p')),
				(U = oe(
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, autem!'
				)),
				(j = V()),
				he(P.$$.fragment),
				(ee = V());
			for (let w = 0; w < L.length; w += 1) L[w].c();
			this.h();
		},
		l(w) {
			t = S(w, 'DIV', { class: !0 });
			var c = y(t);
			(n = S(c, 'INPUT', { id: !0, type: !0, class: !0 })),
				(s = K(c)),
				(i = S(c, 'DIV', { class: !0 }));
			var d = y(i);
			F && F.l(d), d.forEach(p), (l = K(c)), (r = S(c, 'DIV', { class: !0 }));
			var m = y(r);
			(a = S(m, 'LABEL', { for: !0, class: !0 })),
				y(a).forEach(p),
				(o = K(m)),
				(u = S(m, 'UL', { class: !0 }));
			var O = y(u);
			g = S(O, 'DIV', { class: !0 });
			var R = y(g);
			v = S(R, 'DIV', { class: !0 });
			var H = y(v);
			b = S(H, 'LABEL', { for: !0, 'aria-label': !0, class: !0 });
			var te = y(b);
			M = Ne(te, 'svg', { xmlns: !0, class: !0, viewBox: !0, fill: !0 });
			var le = y(M);
			(I = Ne(le, 'path', { 'fill-rule': !0, d: !0, 'clip-rule': !0 })),
				y(I).forEach(p),
				le.forEach(p),
				te.forEach(p),
				(B = K(H)),
				(D = S(H, 'A', { class: !0, href: !0 }));
			var J = y(D);
			(G = ce(J, 'Algo Visualization')),
				J.forEach(p),
				H.forEach(p),
				(Y = K(R)),
				(C = S(R, 'P', { class: !0 }));
			var re = y(C);
			(U = ce(
				re,
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, autem!'
			)),
				re.forEach(p),
				R.forEach(p),
				(j = K(O)),
				me(P.$$.fragment, O),
				(ee = K(O));
			for (let Oe = 0; Oe < L.length; Oe += 1) L[Oe].l(O);
			O.forEach(p), m.forEach(p), c.forEach(p), this.h();
		},
		h() {
			f(n, 'id', 'left-drawer'),
				f(n, 'type', 'checkbox'),
				f(n, 'class', 'drawer-toggle'),
				f(i, 'class', 'drawer-content'),
				f(a, 'for', 'left-drawer'),
				f(a, 'class', 'drawer-overlay'),
				f(I, 'fill-rule', 'evenodd'),
				f(
					I,
					'd',
					'M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z'
				),
				f(I, 'clip-rule', 'evenodd'),
				f(M, 'xmlns', 'http://www.w3.org/2000/svg'),
				f(M, 'class', 'h-5 w-5'),
				f(M, 'viewBox', '0 0 20 20'),
				f(M, 'fill', 'currentColor'),
				f(b, 'for', 'left-drawer'),
				f(b, 'aria-label', 'Close Drawer'),
				f(b, 'class', 'drawer-button btn btn-outline btn-circle btn-sm'),
				f(D, 'class', 'text-2xl font-bold'),
				f(D, 'href', yt + '/'),
				f(v, 'class', 'flex items-center gap-4'),
				f(C, 'class', 'text-sm'),
				f(g, 'class', 'flex flex-col gap-4'),
				f(u, 'class', 'menu w-80 overflow-y-auto bg-base-100 p-4 pt-6 text-base-content'),
				f(r, 'class', 'drawer-side'),
				f(t, 'class', 'drawer');
		},
		m(w, c) {
			Q(w, t, c),
				_(t, n),
				_(t, s),
				_(t, i),
				F && F.m(i, null),
				_(t, l),
				_(t, r),
				_(r, a),
				_(r, o),
				_(r, u),
				_(u, g),
				_(g, v),
				_(v, b),
				_(b, M),
				_(M, I),
				_(v, B),
				_(v, D),
				_(D, G),
				_(g, Y),
				_(g, C),
				_(C, U),
				_(u, j),
				pe(P, u, null),
				_(u, ee);
			for (let d = 0; d < L.length; d += 1) L[d].m(u, null);
			W = !0;
		},
		p(w, [c]) {
			F &&
				F.p &&
				(!W || c & 4) &&
				bt(F, se, w, w[2], W ? vt(se, w[2], c, null) : Et(w[2]), null),
				c & 3 && ((T = Ue), (L = Qt(L, c, z, 1, w, T, X, u, en, ht, null, gt)));
		},
		i(w) {
			W || (ie(F, w), ie(P.$$.fragment, w), (W = !0));
		},
		o(w) {
			ae(F, w), ae(P.$$.fragment, w), (W = !1);
		},
		d(w) {
			w && p(t), F && F.d(w), _e(P);
			for (let c = 0; c < L.length; c += 1) L[c].d();
		},
	};
}
function Ms(e, t, n) {
	let { $$slots: s = {}, $$scope: i } = t,
		{ activeIndex: l } = t,
		{ handleDrawerChange: r } = t;
	const a = (o) => r(o.id);
	return (
		(e.$$set = (o) => {
			'activeIndex' in o && n(0, (l = o.activeIndex)),
				'handleDrawerChange' in o && n(1, (r = o.handleDrawerChange)),
				'$$scope' in o && n(2, (i = o.$$scope));
		}),
		[l, r, i, s, a]
	);
}
class Ts extends ue {
	constructor(t) {
		super(), fe(this, t, Ms, Ns, de, { activeIndex: 0, handleDrawerChange: 1 });
	}
}
function Rs(e) {
	let t, n, s, i, l, r, a, o, u, g, v, b, M, I;
	return {
		c() {
			(t = x('div')),
				(n = x('div')),
				(s = x('label')),
				(i = Se('svg')),
				(l = Se('path')),
				(r = V()),
				(a = x('div')),
				(o = x('a')),
				(u = oe('Algo-V')),
				(g = V()),
				(v = x('div')),
				(b = x('button')),
				(M = Se('svg')),
				(I = Se('path')),
				this.h();
		},
		l(B) {
			t = S(B, 'DIV', { class: !0 });
			var D = y(t);
			n = S(D, 'DIV', { class: !0 });
			var G = y(n);
			s = S(G, 'LABEL', { for: !0, 'aria-label': !0, class: !0 });
			var Y = y(s);
			i = Ne(Y, 'svg', { xmlns: !0, fill: !0, viewBox: !0, class: !0 });
			var C = y(i);
			(l = Ne(C, 'path', {
				'stroke-linecap': !0,
				'stroke-linejoin': !0,
				'stroke-width': !0,
				d: !0,
			})),
				y(l).forEach(p),
				C.forEach(p),
				Y.forEach(p),
				G.forEach(p),
				(r = K(D)),
				(a = S(D, 'DIV', { class: !0 }));
			var U = y(a);
			o = S(U, 'A', { class: !0, href: !0 });
			var j = y(o);
			(u = ce(j, 'Algo-V')),
				j.forEach(p),
				U.forEach(p),
				(g = K(D)),
				(v = S(D, 'DIV', { class: !0 }));
			var P = y(v);
			b = S(P, 'BUTTON', { 'aria-label': !0, class: !0 });
			var ee = y(b);
			M = Ne(ee, 'svg', { xmlns: !0, width: !0, height: !0, viewBox: !0 });
			var L = y(M);
			(I = Ne(L, 'path', { fill: !0, d: !0 })),
				y(I).forEach(p),
				L.forEach(p),
				ee.forEach(p),
				P.forEach(p),
				D.forEach(p),
				this.h();
		},
		h() {
			f(l, 'stroke-linecap', 'round'),
				f(l, 'stroke-linejoin', 'round'),
				f(l, 'stroke-width', '2'),
				f(l, 'd', 'M4 6h16M4 12h16M4 18h16'),
				f(i, 'xmlns', 'http://www.w3.org/2000/svg'),
				f(i, 'fill', 'none'),
				f(i, 'viewBox', '0 0 24 24'),
				f(i, 'class', 'inline-block h-5 w-5 stroke-current'),
				f(s, 'for', 'left-drawer'),
				f(s, 'aria-label', 'Open Drawer'),
				f(s, 'class', 'btn btn-ghost btn-square drawer-button'),
				f(n, 'class', 'navbar-start'),
				f(o, 'class', 'text-2xl font-bold'),
				f(o, 'href', yt + '/'),
				f(a, 'class', 'navbar-center'),
				f(I, 'fill', 'rgba(255,255,255,0.8)'),
				f(
					I,
					'd',
					'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
				),
				f(M, 'xmlns', 'http://www.w3.org/2000/svg'),
				f(M, 'width', '24'),
				f(M, 'height', '24'),
				f(M, 'viewBox', '0 0 24 24'),
				f(b, 'aria-label', 'Go to GitHub'),
				f(b, 'class', 'btn btn-ghost btn-square'),
				f(v, 'class', 'navbar-end'),
				f(t, 'class', 'navbar bg-base-100');
		},
		m(B, D) {
			Q(B, t, D),
				_(t, n),
				_(n, s),
				_(s, i),
				_(i, l),
				_(t, r),
				_(t, a),
				_(a, o),
				_(o, u),
				_(t, g),
				_(t, v),
				_(v, b),
				_(b, M),
				_(M, I);
		},
		p: ne,
		i: ne,
		o: ne,
		d(B) {
			B && p(t);
		},
	};
}
class Is extends ue {
	constructor(t) {
		super(), fe(this, t, null, Rs, de, {});
	}
}
function ks(e) {
	let t, n, s, i, l;
	t = new Is({});
	var r = Ue[e[0]].component;
	function a(o) {
		return {};
	}
	return (
		r && (s = new r(a())),
		{
			c() {
				he(t.$$.fragment), (n = V()), s && he(s.$$.fragment), (i = Me());
			},
			l(o) {
				me(t.$$.fragment, o), (n = K(o)), s && me(s.$$.fragment, o), (i = Me());
			},
			m(o, u) {
				pe(t, o, u), Q(o, n, u), s && pe(s, o, u), Q(o, i, u), (l = !0);
			},
			p(o, u) {
				if (r !== (r = Ue[o[0]].component)) {
					if (s) {
						tn();
						const g = s;
						ae(g.$$.fragment, 1, 0, () => {
							_e(g, 1);
						}),
							nn();
					}
					r
						? ((s = new r(a())),
						  he(s.$$.fragment),
						  ie(s.$$.fragment, 1),
						  pe(s, i.parentNode, i))
						: (s = null);
				}
			},
			i(o) {
				l || (ie(t.$$.fragment, o), s && ie(s.$$.fragment, o), (l = !0));
			},
			o(o) {
				ae(t.$$.fragment, o), s && ae(s.$$.fragment, o), (l = !1);
			},
			d(o) {
				_e(t, o), o && p(n), o && p(i), s && _e(s, o);
			},
		}
	);
}
function Ds(e) {
	let t, n, s, i;
	return (
		(t = new an({})),
		(s = new Ts({
			props: {
				activeIndex: e[0],
				handleDrawerChange: e[1],
				$$slots: { default: [ks] },
				$$scope: { ctx: e },
			},
		})),
		{
			c() {
				he(t.$$.fragment), (n = V()), he(s.$$.fragment);
			},
			l(l) {
				me(t.$$.fragment, l), (n = K(l)), me(s.$$.fragment, l);
			},
			m(l, r) {
				pe(t, l, r), Q(l, n, r), pe(s, l, r), (i = !0);
			},
			p(l, [r]) {
				const a = {};
				r & 1 && (a.activeIndex = l[0]),
					r & 5 && (a.$$scope = { dirty: r, ctx: l }),
					s.$set(a);
			},
			i(l) {
				i || (ie(t.$$.fragment, l), ie(s.$$.fragment, l), (i = !0));
			},
			o(l) {
				ae(t.$$.fragment, l), ae(s.$$.fragment, l), (i = !1);
			},
			d(l) {
				_e(t, l), l && p(n), _e(s, l);
			},
		}
	);
}
function Cs(e, t, n) {
	let s = 0;
	function i(l) {
		n(0, (s = l));
	}
	return [s, i];
}
class Bs extends ue {
	constructor(t) {
		super(), fe(this, t, Cs, Ds, de, {});
	}
}
export { Bs as default };
