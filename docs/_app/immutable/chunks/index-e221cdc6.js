function J() {}
function st(t, e) {
	for (const n in e) t[n] = e[n];
	return t;
}
function K(t) {
	return t();
}
function z() {
	return Object.create(null);
}
function b(t) {
	t.forEach(K);
}
function rt(t) {
	return typeof t == 'function';
}
function $t(t, e) {
	return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
function ct(t) {
	return Object.keys(t).length === 0;
}
function Et(t, e, n, i) {
	if (t) {
		const s = Q(t, e, n, i);
		return t[0](s);
	}
}
function Q(t, e, n, i) {
	return t[1] && i ? st(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function kt(t, e, n, i) {
	if (t[2] && i) {
		const s = t[2](i(n));
		if (e.dirty === void 0) return s;
		if (typeof s == 'object') {
			const o = [],
				r = Math.max(e.dirty.length, s.length);
			for (let l = 0; l < r; l += 1) o[l] = e.dirty[l] | s[l];
			return o;
		}
		return e.dirty | s;
	}
	return e.dirty;
}
function At(t, e, n, i, s, o) {
	if (s) {
		const r = Q(e, n, i, o);
		t.p(r, s);
	}
}
function Tt(t) {
	if (t.ctx.length > 32) {
		const e = [],
			n = t.ctx.length / 32;
		for (let i = 0; i < n; i++) e[i] = -1;
		return e;
	}
	return -1;
}
function Nt(t) {
	const e = {};
	for (const n in t) n[0] !== '$' && (e[n] = t[n]);
	return e;
}
function St(t, e) {
	const n = {};
	e = new Set(e);
	for (const i in t) !e.has(i) && i[0] !== '$' && (n[i] = t[i]);
	return n;
}
let S = !1;
function lt() {
	S = !0;
}
function ot() {
	S = !1;
}
function at(t, e, n, i) {
	for (; t < e; ) {
		const s = t + ((e - t) >> 1);
		n(s) <= i ? (t = s + 1) : (e = s);
	}
	return t;
}
function ft(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let e = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const c = [];
		for (let a = 0; a < e.length; a++) {
			const u = e[a];
			u.claim_order !== void 0 && c.push(u);
		}
		e = c;
	}
	const n = new Int32Array(e.length + 1),
		i = new Int32Array(e.length);
	n[0] = -1;
	let s = 0;
	for (let c = 0; c < e.length; c++) {
		const a = e[c].claim_order,
			u =
				(s > 0 && e[n[s]].claim_order <= a
					? s + 1
					: at(1, s, (_) => e[n[_]].claim_order, a)) - 1;
		i[c] = n[u] + 1;
		const d = u + 1;
		(n[d] = c), (s = Math.max(d, s));
	}
	const o = [],
		r = [];
	let l = e.length - 1;
	for (let c = n[s] + 1; c != 0; c = i[c - 1]) {
		for (o.push(e[c - 1]); l >= c; l--) r.push(e[l]);
		l--;
	}
	for (; l >= 0; l--) r.push(e[l]);
	o.reverse(), r.sort((c, a) => c.claim_order - a.claim_order);
	for (let c = 0, a = 0; c < r.length; c++) {
		for (; a < o.length && r[c].claim_order >= o[a].claim_order; ) a++;
		const u = a < o.length ? o[a] : null;
		t.insertBefore(r[c], u);
	}
}
function ut(t, e) {
	if (S) {
		for (
			ft(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentElement !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		e !== t.actual_end_child
			? (e.claim_order !== void 0 || e.parentNode !== t) &&
			  t.insertBefore(e, t.actual_end_child)
			: (t.actual_end_child = e.nextSibling);
	} else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function _t(t, e, n) {
	t.insertBefore(e, n || null);
}
function dt(t, e, n) {
	S && !n ? ut(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function N(t) {
	t.parentNode.removeChild(t);
}
function U(t) {
	return document.createElement(t);
}
function V(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function D(t) {
	return document.createTextNode(t);
}
function Mt() {
	return D(' ');
}
function jt() {
	return D('');
}
function Ct(t, e, n, i) {
	return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function ht(t, e, n) {
	n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Ht(t, e) {
	const n = Object.getOwnPropertyDescriptors(t.__proto__);
	for (const i in e)
		e[i] == null
			? t.removeAttribute(i)
			: i === 'style'
			? (t.style.cssText = e[i])
			: i === '__value'
			? (t.value = t[i] = e[i])
			: n[i] && n[i].set
			? (t[i] = e[i])
			: ht(t, i, e[i]);
}
function mt(t) {
	return Array.from(t.childNodes);
}
function X(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function Y(t, e, n, i, s = !1) {
	X(t);
	const o = (() => {
		for (let r = t.claim_info.last_index; r < t.length; r++) {
			const l = t[r];
			if (e(l)) {
				const c = n(l);
				return (
					c === void 0 ? t.splice(r, 1) : (t[r] = c),
					s || (t.claim_info.last_index = r),
					l
				);
			}
		}
		for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
			const l = t[r];
			if (e(l)) {
				const c = n(l);
				return (
					c === void 0 ? t.splice(r, 1) : (t[r] = c),
					s ? c === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = r),
					l
				);
			}
		}
		return i();
	})();
	return (o.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), o;
}
function Z(t, e, n, i) {
	return Y(
		t,
		(s) => s.nodeName === e,
		(s) => {
			const o = [];
			for (let r = 0; r < s.attributes.length; r++) {
				const l = s.attributes[r];
				n[l.name] || o.push(l.name);
			}
			o.forEach((r) => s.removeAttribute(r));
		},
		() => i(e)
	);
}
function Lt(t, e, n) {
	return Z(t, e, n, U);
}
function Ot(t, e, n) {
	return Z(t, e, n, V);
}
function pt(t, e) {
	return Y(
		t,
		(n) => n.nodeType === 3,
		(n) => {
			const i = '' + e;
			if (n.data.startsWith(i)) {
				if (n.data.length !== i.length) return n.splitText(i.length);
			} else n.data = i;
		},
		() => D(e),
		!0
	);
}
function Pt(t) {
	return pt(t, ' ');
}
function F(t, e, n) {
	for (let i = n; i < t.length; i += 1) {
		const s = t[i];
		if (s.nodeType === 8 && s.textContent.trim() === e) return i;
	}
	return t.length;
}
function Bt(t, e) {
	const n = F(t, 'HTML_TAG_START', 0),
		i = F(t, 'HTML_TAG_END', n);
	if (n === i) return new I(void 0, e);
	X(t);
	const s = t.splice(n, i - n + 1);
	N(s[0]), N(s[s.length - 1]);
	const o = s.slice(1, s.length - 1);
	for (const r of o)
		(r.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1);
	return new I(o, e);
}
function Dt(t, e) {
	(e = '' + e), t.wholeText !== e && (t.data = e);
}
function qt(t, e, n, i) {
	n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? 'important' : '');
}
function Gt(t, e, n) {
	t.classList[n ? 'add' : 'remove'](e);
}
function yt(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
	const s = document.createEvent('CustomEvent');
	return s.initCustomEvent(t, n, i, e), s;
}
function zt(t, e = document.body) {
	return Array.from(e.querySelectorAll(t));
}
class gt {
	constructor(e = !1) {
		(this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
	}
	c(e) {
		this.h(e);
	}
	m(e, n, i = null) {
		this.e ||
			(this.is_svg ? (this.e = V(n.nodeName)) : (this.e = U(n.nodeName)),
			(this.t = n),
			this.c(e)),
			this.i(i);
	}
	h(e) {
		(this.e.innerHTML = e), (this.n = Array.from(this.e.childNodes));
	}
	i(e) {
		for (let n = 0; n < this.n.length; n += 1) _t(this.t, this.n[n], e);
	}
	p(e) {
		this.d(), this.h(e), this.i(this.a);
	}
	d() {
		this.n.forEach(N);
	}
}
class I extends gt {
	constructor(e, n = !1) {
		super(n), (this.e = this.n = null), (this.l = e);
	}
	c(e) {
		this.l ? (this.n = this.l) : super.c(e);
	}
	i(e) {
		for (let n = 0; n < this.n.length; n += 1) dt(this.t, this.n[n], e);
	}
}
let v;
function w(t) {
	v = t;
}
function M() {
	if (!v) throw new Error('Function called outside component initialization');
	return v;
}
function Ft(t) {
	M().$$.on_mount.push(t);
}
function It(t) {
	M().$$.after_update.push(t);
}
function Rt() {
	const t = M();
	return (e, n, { cancelable: i = !1 } = {}) => {
		const s = t.$$.callbacks[e];
		if (s) {
			const o = yt(e, n, { cancelable: i });
			return (
				s.slice().forEach((r) => {
					r.call(t, o);
				}),
				!o.defaultPrevented
			);
		}
		return !0;
	};
}
function Wt(t, e) {
	return M().$$.context.set(t, e), e;
}
const x = [],
	R = [],
	A = [],
	W = [],
	tt = Promise.resolve();
let P = !1;
function et() {
	P || ((P = !0), tt.then(nt));
}
function Jt() {
	return et(), tt;
}
function B(t) {
	A.push(t);
}
const O = new Set();
let k = 0;
function nt() {
	const t = v;
	do {
		for (; k < x.length; ) {
			const e = x[k];
			k++, w(e), xt(e.$$);
		}
		for (w(null), x.length = 0, k = 0; R.length; ) R.pop()();
		for (let e = 0; e < A.length; e += 1) {
			const n = A[e];
			O.has(n) || (O.add(n), n());
		}
		A.length = 0;
	} while (x.length);
	for (; W.length; ) W.pop()();
	(P = !1), O.clear(), w(t);
}
function xt(t) {
	if (t.fragment !== null) {
		t.update(), b(t.before_update);
		const e = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(B);
	}
}
const T = new Set();
let g;
function Kt() {
	g = { r: 0, c: [], p: g };
}
function Qt() {
	g.r || b(g.c), (g = g.p);
}
function it(t, e) {
	t && t.i && (T.delete(t), t.i(e));
}
function Ut(t, e, n, i) {
	if (t && t.o) {
		if (T.has(t)) return;
		T.add(t),
			g.c.push(() => {
				T.delete(t), i && (n && t.d(1), i());
			}),
			t.o(e);
	} else i && i();
}
function Vt(t, e) {
	t.d(1), e.delete(t.key);
}
function Xt(t, e, n, i, s, o, r, l, c, a, u, d) {
	let _ = t.length,
		m = o.length,
		h = _;
	const j = {};
	for (; h--; ) j[t[h].key] = h;
	const $ = [],
		C = new Map(),
		H = new Map();
	for (h = m; h--; ) {
		const f = d(s, o, h),
			p = n(f);
		let y = r.get(p);
		y ? i && y.p(f, e) : ((y = a(p, f)), y.c()),
			C.set(p, ($[h] = y)),
			p in j && H.set(p, Math.abs(h - j[p]));
	}
	const q = new Set(),
		G = new Set();
	function L(f) {
		it(f, 1), f.m(l, u), r.set(f.key, f), (u = f.first), m--;
	}
	for (; _ && m; ) {
		const f = $[m - 1],
			p = t[_ - 1],
			y = f.key,
			E = p.key;
		f === p
			? ((u = f.first), _--, m--)
			: C.has(E)
			? !r.has(y) || q.has(y)
				? L(f)
				: G.has(E)
				? _--
				: H.get(y) > H.get(E)
				? (G.add(y), L(f))
				: (q.add(E), _--)
			: (c(p, r), _--);
	}
	for (; _--; ) {
		const f = t[_];
		C.has(f.key) || c(f, r);
	}
	for (; m; ) L($[m - 1]);
	return $;
}
function Yt(t, e) {
	const n = {},
		i = {},
		s = { $$scope: 1 };
	let o = t.length;
	for (; o--; ) {
		const r = t[o],
			l = e[o];
		if (l) {
			for (const c in r) c in l || (i[c] = 1);
			for (const c in l) s[c] || ((n[c] = l[c]), (s[c] = 1));
			t[o] = l;
		} else for (const c in r) s[c] = 1;
	}
	for (const r in i) r in n || (n[r] = void 0);
	return n;
}
function Zt(t) {
	return typeof t == 'object' && t !== null ? t : {};
}
function te(t) {
	t && t.c();
}
function ee(t, e) {
	t && t.l(e);
}
function wt(t, e, n, i) {
	const { fragment: s, on_mount: o, on_destroy: r, after_update: l } = t.$$;
	s && s.m(e, n),
		i ||
			B(() => {
				const c = o.map(K).filter(rt);
				r ? r.push(...c) : b(c), (t.$$.on_mount = []);
			}),
		l.forEach(B);
}
function vt(t, e) {
	const n = t.$$;
	n.fragment !== null &&
		(b(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function bt(t, e) {
	t.$$.dirty[0] === -1 && (x.push(t), et(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function ne(t, e, n, i, s, o, r, l = [-1]) {
	const c = v;
	w(t);
	const a = (t.$$ = {
		fragment: null,
		ctx: null,
		props: o,
		update: J,
		not_equal: s,
		bound: z(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (c ? c.$$.context : [])),
		callbacks: z(),
		dirty: l,
		skip_bound: !1,
		root: e.target || c.$$.root,
	});
	r && r(a.root);
	let u = !1;
	if (
		((a.ctx = n
			? n(t, e.props || {}, (d, _, ...m) => {
					const h = m.length ? m[0] : _;
					return (
						a.ctx &&
							s(a.ctx[d], (a.ctx[d] = h)) &&
							(!a.skip_bound && a.bound[d] && a.bound[d](h), u && bt(t, d)),
						_
					);
			  })
			: []),
		a.update(),
		(u = !0),
		b(a.before_update),
		(a.fragment = i ? i(a.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			lt();
			const d = mt(e.target);
			a.fragment && a.fragment.l(d), d.forEach(N);
		} else a.fragment && a.fragment.c();
		e.intro && it(t.$$.fragment), wt(t, e.target, e.anchor, e.customElement), ot(), nt();
	}
	w(c);
}
class ie {
	$destroy() {
		vt(this, 1), (this.$destroy = J);
	}
	$on(e, n) {
		const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			i.push(n),
			() => {
				const s = i.indexOf(n);
				s !== -1 && i.splice(s, 1);
			}
		);
	}
	$set(e) {
		this.$$set &&
			!ct(e) &&
			((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
export {
	Yt as A,
	Zt as B,
	vt as C,
	st as D,
	Jt as E,
	Et as F,
	At as G,
	Tt as H,
	kt as I,
	ut as J,
	zt as K,
	St as L,
	Rt as M,
	Nt as N,
	Ht as O,
	Gt as P,
	I as Q,
	Bt as R,
	ie as S,
	Ct as T,
	b as U,
	V,
	Ot as W,
	Xt as X,
	Vt as Y,
	Mt as a,
	dt as b,
	Pt as c,
	Qt as d,
	jt as e,
	it as f,
	Kt as g,
	N as h,
	ne as i,
	Wt as j,
	It as k,
	U as l,
	Lt as m,
	J as n,
	Ft as o,
	mt as p,
	ht as q,
	qt as r,
	$t as s,
	Ut as t,
	D as u,
	pt as v,
	Dt as w,
	te as x,
	ee as y,
	wt as z,
};
