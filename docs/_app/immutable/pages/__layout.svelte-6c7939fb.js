import {
	S as l,
	i,
	s as u,
	F as r,
	G as f,
	H as _,
	I as c,
	f as p,
	t as m,
} from '../chunks/index-e221cdc6.js';
function d(n) {
	let e;
	const o = n[1].default,
		s = r(o, n, n[0], null);
	return {
		c() {
			s && s.c();
		},
		l(t) {
			s && s.l(t);
		},
		m(t, a) {
			s && s.m(t, a), (e = !0);
		},
		p(t, [a]) {
			s && s.p && (!e || a & 1) && f(s, o, t, t[0], e ? c(o, t[0], a, null) : _(t[0]), null);
		},
		i(t) {
			e || (p(s, t), (e = !0));
		},
		o(t) {
			m(s, t), (e = !1);
		},
		d(t) {
			s && s.d(t);
		},
	};
}
function $(n, e, o) {
	let { $$slots: s = {}, $$scope: t } = e;
	return (
		(n.$$set = (a) => {
			'$$scope' in a && o(0, (t = a.$$scope));
		}),
		[t, s]
	);
}
class h extends l {
	constructor(e) {
		super(), i(this, e, $, d, u, {});
	}
}
export { h as default };
