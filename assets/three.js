(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
    new MutationObserver(s => {
        for (const a of s) if (a.type === "childList") for (const u of a.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && i(u)
    }).observe(document, {childList: !0, subtree: !0});

    function e(s) {
        const a = {};
        return s.integrity && (a.integrity = s.integrity), s.referrerpolicy && (a.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? a.credentials = "include" : s.crossorigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
    }

    function i(s) {
        if (s.ep) return;
        s.ep = !0;
        const a = e(s);
        fetch(s.href, a)
    }
})();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vc = "146", Yr = {LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2},
    Zr = {ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3}, qy = 0, Lf = 1, Xy = 2, op = 1, lp = 2, qs = 3, Sr = 0,
    Ln = 1, Ri = 2, tr = 0, hs = 1, Pf = 2, Rf = 3, Df = 4, Yy = 5, cs = 100, Zy = 101, $y = 102, If = 103, Of = 104,
    Jy = 200, jy = 201, Ky = 202, Qy = 203, cp = 204, up = 205, tM = 206, eM = 207, nM = 208, iM = 209, rM = 210,
    sM = 0, aM = 1, oM = 2, Dc = 3, lM = 4, cM = 5, uM = 6, hM = 7, kc = 0, fM = 1, dM = 2, Ii = 0, pM = 1, mM = 2,
    gM = 3, _M = 4, vM = 5, hp = 300, ps = 301, ms = 302, Ic = 303, Oc = 304, To = 306, gs = 1e3, ii = 1001, Fc = 1002,
    vn = 1003, Ff = 1004, Nf = 1005, Wn = 1006, xM = 1007, Eo = 1008, br = 1009, yM = 1010, MM = 1011, fp = 1012,
    SM = 1013, _r = 1014, vr = 1015, Ks = 1016, bM = 1017, wM = 1018, fs = 1020, TM = 1021, EM = 1022, ri = 1023,
    AM = 1024, CM = 1025, yr = 1026, _s = 1027, LM = 1028, PM = 1029, RM = 1030, DM = 1031, IM = 1033, Hl = 33776,
    ql = 33777, Xl = 33778, Yl = 33779, Uf = 35840, zf = 35841, Bf = 35842, Gf = 35843, OM = 36196, Wf = 37492,
    Vf = 37496, kf = 37808, Hf = 37809, qf = 37810, Xf = 37811, Yf = 37812, Zf = 37813, $f = 37814, Jf = 37815,
    jf = 37816, Kf = 37817, Qf = 37818, td = 37819, ed = 37820, nd = 37821, id = 36492, wr = 3e3, Pe = 3001, FM = 3200,
    NM = 3201, dp = 0, UM = 1, Li = "srgb", xr = "srgb-linear", Zl = 7680, zM = 519, rd = 35044, sd = "300 es",
    Nc = 1035;

class Cr {
    addEventListener(t, e) {
        this._listeners === void 0 && (this._listeners = {});
        const i = this._listeners;
        i[t] === void 0 && (i[t] = []), i[t].indexOf(e) === -1 && i[t].push(e)
    }

    hasEventListener(t, e) {
        if (this._listeners === void 0) return !1;
        const i = this._listeners;
        return i[t] !== void 0 && i[t].indexOf(e) !== -1
    }

    removeEventListener(t, e) {
        if (this._listeners === void 0) return;
        const s = this._listeners[t];
        if (s !== void 0) {
            const a = s.indexOf(e);
            a !== -1 && s.splice(a, 1)
        }
    }

    dispatchEvent(t) {
        if (this._listeners === void 0) return;
        const i = this._listeners[t.type];
        if (i !== void 0) {
            t.target = this;
            const s = i.slice(0);
            for (let a = 0, u = s.length; a < u; a++) s[a].call(this, t);
            t.target = null
        }
    }
}

const nn = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"],
    $l = Math.PI / 180, ad = 180 / Math.PI;

function ea() {
    const c = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0,
        i = Math.random() * 4294967295 | 0;
    return (nn[c & 255] + nn[c >> 8 & 255] + nn[c >> 16 & 255] + nn[c >> 24 & 255] + "-" + nn[t & 255] + nn[t >> 8 & 255] + "-" + nn[t >> 16 & 15 | 64] + nn[t >> 24 & 255] + "-" + nn[e & 63 | 128] + nn[e >> 8 & 255] + "-" + nn[e >> 16 & 255] + nn[e >> 24 & 255] + nn[i & 255] + nn[i >> 8 & 255] + nn[i >> 16 & 255] + nn[i >> 24 & 255]).toLowerCase()
}

function rn(c, t, e) {
    return Math.max(t, Math.min(e, c))
}

function BM(c, t) {
    return (c % t + t) % t
}

function Jl(c, t, e) {
    return (1 - e) * c + e * t
}

function od(c) {
    return (c & c - 1) === 0 && c !== 0
}

function Uc(c) {
    return Math.pow(2, Math.floor(Math.log(c) / Math.LN2))
}

function Ya(c, t) {
    switch (t.constructor) {
        case Float32Array:
            return c;
        case Uint16Array:
            return c / 65535;
        case Uint8Array:
            return c / 255;
        case Int16Array:
            return Math.max(c / 32767, -1);
        case Int8Array:
            return Math.max(c / 127, -1);
        default:
            throw new Error("Invalid component type.")
    }
}

function Tn(c, t) {
    switch (t.constructor) {
        case Float32Array:
            return c;
        case Uint16Array:
            return Math.round(c * 65535);
        case Uint8Array:
            return Math.round(c * 255);
        case Int16Array:
            return Math.round(c * 32767);
        case Int8Array:
            return Math.round(c * 127);
        default:
            throw new Error("Invalid component type.")
    }
}

class Lt {
    constructor(t = 0, e = 0) {
        Lt.prototype.isVector2 = !0, this.x = t, this.y = e
    }

    get width() {
        return this.x
    }

    set width(t) {
        this.x = t
    }

    get height() {
        return this.y
    }

    set height(t) {
        this.y = t
    }

    set(t, e) {
        return this.x = t, this.y = e, this
    }

    setScalar(t) {
        return this.x = t, this.y = t, this
    }

    setX(t) {
        return this.x = t, this
    }

    setY(t) {
        return this.y = t, this
    }

    setComponent(t, e) {
        switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
        }
        return this
    }

    getComponent(t) {
        switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + t)
        }
    }

    clone() {
        return new this.constructor(this.x, this.y)
    }

    copy(t) {
        return this.x = t.x, this.y = t.y, this
    }

    add(t) {
        return this.x += t.x, this.y += t.y, this
    }

    addScalar(t) {
        return this.x += t, this.y += t, this
    }

    addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this
    }

    addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this
    }

    sub(t) {
        return this.x -= t.x, this.y -= t.y, this
    }

    subScalar(t) {
        return this.x -= t, this.y -= t, this
    }

    subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this
    }

    multiply(t) {
        return this.x *= t.x, this.y *= t.y, this
    }

    multiplyScalar(t) {
        return this.x *= t, this.y *= t, this
    }

    divide(t) {
        return this.x /= t.x, this.y /= t.y, this
    }

    divideScalar(t) {
        return this.multiplyScalar(1 / t)
    }

    applyMatrix3(t) {
        const e = this.x, i = this.y, s = t.elements;
        return this.x = s[0] * e + s[3] * i + s[6], this.y = s[1] * e + s[4] * i + s[7], this
    }

    min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
    }

    max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
    }

    clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
    }

    clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this
    }

    clampLength(t, e) {
        const i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
    }

    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
    }

    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
    }

    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this
    }

    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
    }

    negate() {
        return this.x = -this.x, this.y = -this.y, this
    }

    dot(t) {
        return this.x * t.x + this.y * t.y
    }

    cross(t) {
        return this.x * t.y - this.y * t.x
    }

    lengthSq() {
        return this.x * this.x + this.y * this.y
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
    }

    normalize() {
        return this.divideScalar(this.length() || 1)
    }

    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI
    }

    distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t))
    }

    distanceToSquared(t) {
        const e = this.x - t.x, i = this.y - t.y;
        return e * e + i * i
    }

    manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
    }

    setLength(t) {
        return this.normalize().multiplyScalar(t)
    }

    lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
    }

    lerpVectors(t, e, i) {
        return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this
    }

    equals(t) {
        return t.x === this.x && t.y === this.y
    }

    fromArray(t, e = 0) {
        return this.x = t[e], this.y = t[e + 1], this
    }

    toArray(t = [], e = 0) {
        return t[e] = this.x, t[e + 1] = this.y, t
    }

    fromBufferAttribute(t, e) {
        return this.x = t.getX(e), this.y = t.getY(e), this
    }

    rotateAround(t, e) {
        const i = Math.cos(e), s = Math.sin(e), a = this.x - t.x, u = this.y - t.y;
        return this.x = a * i - u * s + t.x, this.y = a * s + u * i + t.y, this
    }

    random() {
        return this.x = Math.random(), this.y = Math.random(), this
    }

    * [Symbol.iterator]() {
        yield this.x, yield this.y
    }
}

class kn {
    constructor() {
        kn.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]
    }

    set(t, e, i, s, a, u, l, f, h) {
        const d = this.elements;
        return d[0] = t, d[1] = s, d[2] = l, d[3] = e, d[4] = a, d[5] = f, d[6] = i, d[7] = u, d[8] = h, this
    }

    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
    }

    copy(t) {
        const e = this.elements, i = t.elements;
        return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
    }

    extractBasis(t, e, i) {
        return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this
    }

    setFromMatrix4(t) {
        const e = t.elements;
        return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
    }

    multiply(t) {
        return this.multiplyMatrices(this, t)
    }

    premultiply(t) {
        return this.multiplyMatrices(t, this)
    }

    multiplyMatrices(t, e) {
        const i = t.elements, s = e.elements, a = this.elements, u = i[0], l = i[3], f = i[6], h = i[1], d = i[4],
            m = i[7], g = i[2], x = i[5], M = i[8], v = s[0], _ = s[3], S = s[6], L = s[1], T = s[4], A = s[7],
            E = s[2], D = s[5], B = s[8];
        return a[0] = u * v + l * L + f * E, a[3] = u * _ + l * T + f * D, a[6] = u * S + l * A + f * B, a[1] = h * v + d * L + m * E, a[4] = h * _ + d * T + m * D, a[7] = h * S + d * A + m * B, a[2] = g * v + x * L + M * E, a[5] = g * _ + x * T + M * D, a[8] = g * S + x * A + M * B, this
    }

    multiplyScalar(t) {
        const e = this.elements;
        return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
    }

    determinant() {
        const t = this.elements, e = t[0], i = t[1], s = t[2], a = t[3], u = t[4], l = t[5], f = t[6], h = t[7],
            d = t[8];
        return e * u * d - e * l * h - i * a * d + i * l * f + s * a * h - s * u * f
    }

    invert() {
        const t = this.elements, e = t[0], i = t[1], s = t[2], a = t[3], u = t[4], l = t[5], f = t[6], h = t[7],
            d = t[8], m = d * u - l * h, g = l * f - d * a, x = h * a - u * f, M = e * m + i * g + s * x;
        if (M === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const v = 1 / M;
        return t[0] = m * v, t[1] = (s * h - d * i) * v, t[2] = (l * i - s * u) * v, t[3] = g * v, t[4] = (d * e - s * f) * v, t[5] = (s * a - l * e) * v, t[6] = x * v, t[7] = (i * f - h * e) * v, t[8] = (u * e - i * a) * v, this
    }

    transpose() {
        let t;
        const e = this.elements;
        return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
    }

    getNormalMatrix(t) {
        return this.setFromMatrix4(t).invert().transpose()
    }

    transposeIntoArray(t) {
        const e = this.elements;
        return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
    }

    setUvTransform(t, e, i, s, a, u, l) {
        const f = Math.cos(a), h = Math.sin(a);
        return this.set(i * f, i * h, -i * (f * u + h * l) + u + t, -s * h, s * f, -s * (-h * u + f * l) + l + e, 0, 0, 1), this
    }

    scale(t, e) {
        const i = this.elements;
        return i[0] *= t, i[3] *= t, i[6] *= t, i[1] *= e, i[4] *= e, i[7] *= e, this
    }

    rotate(t) {
        const e = Math.cos(t), i = Math.sin(t), s = this.elements, a = s[0], u = s[3], l = s[6], f = s[1], h = s[4],
            d = s[7];
        return s[0] = e * a + i * f, s[3] = e * u + i * h, s[6] = e * l + i * d, s[1] = -i * a + e * f, s[4] = -i * u + e * h, s[7] = -i * l + e * d, this
    }

    translate(t, e) {
        const i = this.elements;
        return i[0] += t * i[2], i[3] += t * i[5], i[6] += t * i[8], i[1] += e * i[2], i[4] += e * i[5], i[7] += e * i[8], this
    }

    equals(t) {
        const e = this.elements, i = t.elements;
        for (let s = 0; s < 9; s++) if (e[s] !== i[s]) return !1;
        return !0
    }

    fromArray(t, e = 0) {
        for (let i = 0; i < 9; i++) this.elements[i] = t[i + e];
        return this
    }

    toArray(t = [], e = 0) {
        const i = this.elements;
        return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
    }

    clone() {
        return new this.constructor().fromArray(this.elements)
    }
}

function pp(c) {
    for (let t = c.length - 1; t >= 0; --t) if (c[t] >= 65535) return !0;
    return !1
}

function Qs(c) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", c)
}

function Mr(c) {
    return c < .04045 ? c * .0773993808 : Math.pow(c * .9478672986 + .0521327014, 2.4)
}

function xo(c) {
    return c < .0031308 ? c * 12.92 : 1.055 * Math.pow(c, .41666) - .055
}

const jl = {[Li]: {[xr]: Mr}, [xr]: {[Li]: xo}}, Qn = {
    legacyMode: !0, get workingColorSpace() {
        return xr
    }, set workingColorSpace(c) {
        console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")
    }, convert: function (c, t, e) {
        if (this.legacyMode || t === e || !t || !e) return c;
        if (jl[t] && jl[t][e] !== void 0) {
            const i = jl[t][e];
            return c.r = i(c.r), c.g = i(c.g), c.b = i(c.b), c
        }
        throw new Error("Unsupported color space conversion.")
    }, fromWorkingColorSpace: function (c, t) {
        return this.convert(c, this.workingColorSpace, t)
    }, toWorkingColorSpace: function (c, t) {
        return this.convert(c, t, this.workingColorSpace)
    }
}, mp = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}, ke = {r: 0, g: 0, b: 0}, ti = {h: 0, s: 0, l: 0}, Za = {h: 0, s: 0, l: 0};

function Kl(c, t, e) {
    return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? c + (t - c) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? c + (t - c) * 6 * (2 / 3 - e) : c
}

function $a(c, t) {
    return t.r = c.r, t.g = c.g, t.b = c.b, t
}

class ie {
    constructor(t, e, i) {
        return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, e === void 0 && i === void 0 ? this.set(t) : this.setRGB(t, e, i)
    }

    set(t) {
        return t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t), this
    }

    setScalar(t) {
        return this.r = t, this.g = t, this.b = t, this
    }

    setHex(t, e = Li) {
        return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Qn.toWorkingColorSpace(this, e), this
    }

    setRGB(t, e, i, s = xr) {
        return this.r = t, this.g = e, this.b = i, Qn.toWorkingColorSpace(this, s), this
    }

    setHSL(t, e, i, s = xr) {
        if (t = BM(t, 1), e = rn(e, 0, 1), i = rn(i, 0, 1), e === 0) this.r = this.g = this.b = i; else {
            const a = i <= .5 ? i * (1 + e) : i + e - i * e, u = 2 * i - a;
            this.r = Kl(u, a, t + 1 / 3), this.g = Kl(u, a, t), this.b = Kl(u, a, t - 1 / 3)
        }
        return Qn.toWorkingColorSpace(this, s), this
    }

    setStyle(t, e = Li) {
        function i(a) {
            a !== void 0 && parseFloat(a) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
        }

        let s;
        if (s = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
            let a;
            const u = s[1], l = s[2];
            switch (u) {
                case"rgb":
                case"rgba":
                    if (a = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)) return this.r = Math.min(255, parseInt(a[1], 10)) / 255, this.g = Math.min(255, parseInt(a[2], 10)) / 255, this.b = Math.min(255, parseInt(a[3], 10)) / 255, Qn.toWorkingColorSpace(this, e), i(a[4]), this;
                    if (a = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)) return this.r = Math.min(100, parseInt(a[1], 10)) / 100, this.g = Math.min(100, parseInt(a[2], 10)) / 100, this.b = Math.min(100, parseInt(a[3], 10)) / 100, Qn.toWorkingColorSpace(this, e), i(a[4]), this;
                    break;
                case"hsl":
                case"hsla":
                    if (a = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)) {
                        const f = parseFloat(a[1]) / 360, h = parseFloat(a[2]) / 100, d = parseFloat(a[3]) / 100;
                        return i(a[4]), this.setHSL(f, h, d, e)
                    }
                    break
            }
        } else if (s = /^\#([A-Fa-f\d]+)$/.exec(t)) {
            const a = s[1], u = a.length;
            if (u === 3) return this.r = parseInt(a.charAt(0) + a.charAt(0), 16) / 255, this.g = parseInt(a.charAt(1) + a.charAt(1), 16) / 255, this.b = parseInt(a.charAt(2) + a.charAt(2), 16) / 255, Qn.toWorkingColorSpace(this, e), this;
            if (u === 6) return this.r = parseInt(a.charAt(0) + a.charAt(1), 16) / 255, this.g = parseInt(a.charAt(2) + a.charAt(3), 16) / 255, this.b = parseInt(a.charAt(4) + a.charAt(5), 16) / 255, Qn.toWorkingColorSpace(this, e), this
        }
        return t && t.length > 0 ? this.setColorName(t, e) : this
    }

    setColorName(t, e = Li) {
        const i = mp[t.toLowerCase()];
        return i !== void 0 ? this.setHex(i, e) : console.warn("THREE.Color: Unknown color " + t), this
    }

    clone() {
        return new this.constructor(this.r, this.g, this.b)
    }

    copy(t) {
        return this.r = t.r, this.g = t.g, this.b = t.b, this
    }

    copySRGBToLinear(t) {
        return this.r = Mr(t.r), this.g = Mr(t.g), this.b = Mr(t.b), this
    }

    copyLinearToSRGB(t) {
        return this.r = xo(t.r), this.g = xo(t.g), this.b = xo(t.b), this
    }

    convertSRGBToLinear() {
        return this.copySRGBToLinear(this), this
    }

    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this), this
    }

    getHex(t = Li) {
        return Qn.fromWorkingColorSpace($a(this, ke), t), rn(ke.r * 255, 0, 255) << 16 ^ rn(ke.g * 255, 0, 255) << 8 ^ rn(ke.b * 255, 0, 255) << 0
    }

    getHexString(t = Li) {
        return ("000000" + this.getHex(t).toString(16)).slice(-6)
    }

    getHSL(t, e = xr) {
        Qn.fromWorkingColorSpace($a(this, ke), e);
        const i = ke.r, s = ke.g, a = ke.b, u = Math.max(i, s, a), l = Math.min(i, s, a);
        let f, h;
        const d = (l + u) / 2;
        if (l === u) f = 0, h = 0; else {
            const m = u - l;
            switch (h = d <= .5 ? m / (u + l) : m / (2 - u - l), u) {
                case i:
                    f = (s - a) / m + (s < a ? 6 : 0);
                    break;
                case s:
                    f = (a - i) / m + 2;
                    break;
                case a:
                    f = (i - s) / m + 4;
                    break
            }
            f /= 6
        }
        return t.h = f, t.s = h, t.l = d, t
    }

    getRGB(t, e = xr) {
        return Qn.fromWorkingColorSpace($a(this, ke), e), t.r = ke.r, t.g = ke.g, t.b = ke.b, t
    }

    getStyle(t = Li) {
        return Qn.fromWorkingColorSpace($a(this, ke), t), t !== Li ? `color(${t} ${ke.r} ${ke.g} ${ke.b})` : `rgb(${ke.r * 255 | 0},${ke.g * 255 | 0},${ke.b * 255 | 0})`
    }

    offsetHSL(t, e, i) {
        return this.getHSL(ti), ti.h += t, ti.s += e, ti.l += i, this.setHSL(ti.h, ti.s, ti.l), this
    }

    add(t) {
        return this.r += t.r, this.g += t.g, this.b += t.b, this
    }

    addColors(t, e) {
        return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
    }

    addScalar(t) {
        return this.r += t, this.g += t, this.b += t, this
    }

    sub(t) {
        return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
    }

    multiply(t) {
        return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
    }

    multiplyScalar(t) {
        return this.r *= t, this.g *= t, this.b *= t, this
    }

    lerp(t, e) {
        return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
    }

    lerpColors(t, e, i) {
        return this.r = t.r + (e.r - t.r) * i, this.g = t.g + (e.g - t.g) * i, this.b = t.b + (e.b - t.b) * i, this
    }

    lerpHSL(t, e) {
        this.getHSL(ti), t.getHSL(Za);
        const i = Jl(ti.h, Za.h, e), s = Jl(ti.s, Za.s, e), a = Jl(ti.l, Za.l, e);
        return this.setHSL(i, s, a), this
    }

    equals(t) {
        return t.r === this.r && t.g === this.g && t.b === this.b
    }

    fromArray(t, e = 0) {
        return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
    }

    toArray(t = [], e = 0) {
        return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
    }

    fromBufferAttribute(t, e) {
        return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this
    }

    toJSON() {
        return this.getHex()
    }

    * [Symbol.iterator]() {
        yield this.r, yield this.g, yield this.b
    }
}

ie.NAMES = mp;
let $r;

class gp {
    static getDataURL(t) {
        if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
        let e;
        if (t instanceof HTMLCanvasElement) e = t; else {
            $r === void 0 && ($r = Qs("canvas")), $r.width = t.width, $r.height = t.height;
            const i = $r.getContext("2d");
            t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), e = $r
        }
        return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png")
    }

    static sRGBToLinear(t) {
        if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
            const e = Qs("canvas");
            e.width = t.width, e.height = t.height;
            const i = e.getContext("2d");
            i.drawImage(t, 0, 0, t.width, t.height);
            const s = i.getImageData(0, 0, t.width, t.height), a = s.data;
            for (let u = 0; u < a.length; u++) a[u] = Mr(a[u] / 255) * 255;
            return i.putImageData(s, 0, 0), e
        } else if (t.data) {
            const e = t.data.slice(0);
            for (let i = 0; i < e.length; i++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[i] = Math.floor(Mr(e[i] / 255) * 255) : e[i] = Mr(e[i]);
            return {data: e, width: t.width, height: t.height}
        } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t
    }
}

class _p {
    constructor(t = null) {
        this.isSource = !0, this.uuid = ea(), this.data = t, this.version = 0
    }

    set needsUpdate(t) {
        t === !0 && this.version++
    }

    toJSON(t) {
        const e = t === void 0 || typeof t == "string";
        if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
        const i = {uuid: this.uuid, url: ""}, s = this.data;
        if (s !== null) {
            let a;
            if (Array.isArray(s)) {
                a = [];
                for (let u = 0, l = s.length; u < l; u++) s[u].isDataTexture ? a.push(Ql(s[u].image)) : a.push(Ql(s[u]))
            } else a = Ql(s);
            i.url = a
        }
        return e || (t.images[this.uuid] = i), i
    }
}

function Ql(c) {
    return typeof HTMLImageElement < "u" && c instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && c instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && c instanceof ImageBitmap ? gp.getDataURL(c) : c.data ? {
        data: Array.from(c.data),
        width: c.width,
        height: c.height,
        type: c.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
}

let GM = 0;

class qn extends Cr {
    constructor(t = qn.DEFAULT_IMAGE, e = qn.DEFAULT_MAPPING, i = ii, s = ii, a = Wn, u = Eo, l = ri, f = br, h = 1, d = wr) {
        super(), this.isTexture = !0, Object.defineProperty(this, "id", {value: GM++}), this.uuid = ea(), this.name = "", this.source = new _p(t), this.mipmaps = [], this.mapping = e, this.wrapS = i, this.wrapT = s, this.magFilter = a, this.minFilter = u, this.anisotropy = h, this.format = l, this.internalFormat = null, this.type = f, this.offset = new Lt(0, 0), this.repeat = new Lt(1, 1), this.center = new Lt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new kn, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = d, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1
    }

    get image() {
        return this.source.data
    }

    set image(t) {
        this.source.data = t
    }

    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }

    clone() {
        return new this.constructor().copy(this)
    }

    copy(t) {
        return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this
    }

    toJSON(t) {
        const e = t === void 0 || typeof t == "string";
        if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
        const i = {
            metadata: {version: 4.5, type: "Texture", generator: "Texture.toJSON"},
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(t).uuid,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        return JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData), e || (t.textures[this.uuid] = i), i
    }

    dispose() {
        this.dispatchEvent({type: "dispose"})
    }

    transformUv(t) {
        if (this.mapping !== hp) return t;
        if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
            case gs:
                t.x = t.x - Math.floor(t.x);
                break;
            case ii:
                t.x = t.x < 0 ? 0 : 1;
                break;
            case Fc:
                Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
                break
        }
        if (t.y < 0 || t.y > 1) switch (this.wrapT) {
            case gs:
                t.y = t.y - Math.floor(t.y);
                break;
            case ii:
                t.y = t.y < 0 ? 0 : 1;
                break;
            case Fc:
                Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
                break
        }
        return this.flipY && (t.y = 1 - t.y), t
    }

    set needsUpdate(t) {
        t === !0 && (this.version++, this.source.needsUpdate = !0)
    }
}

qn.DEFAULT_IMAGE = null;
qn.DEFAULT_MAPPING = hp;

class Ae {
    constructor(t = 0, e = 0, i = 0, s = 1) {
        Ae.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = i, this.w = s
    }

    get width() {
        return this.z
    }

    set width(t) {
        this.z = t
    }

    get height() {
        return this.w
    }

    set height(t) {
        this.w = t
    }

    set(t, e, i, s) {
        return this.x = t, this.y = e, this.z = i, this.w = s, this
    }

    setScalar(t) {
        return this.x = t, this.y = t, this.z = t, this.w = t, this
    }

    setX(t) {
        return this.x = t, this
    }

    setY(t) {
        return this.y = t, this
    }

    setZ(t) {
        return this.z = t, this
    }

    setW(t) {
        return this.w = t, this
    }

    setComponent(t, e) {
        switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            case 3:
                this.w = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
        }
        return this
    }

    getComponent(t) {
        switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + t)
        }
    }

    clone() {
        return new this.constructor(this.x, this.y, this.z, this.w)
    }

    copy(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this
    }

    add(t) {
        return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this
    }

    addScalar(t) {
        return this.x += t, this.y += t, this.z += t, this.w += t, this
    }

    addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
    }

    addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
    }

    sub(t) {
        return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this
    }

    subScalar(t) {
        return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
    }

    subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
    }

    multiply(t) {
        return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this
    }

    multiplyScalar(t) {
        return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
    }

    applyMatrix4(t) {
        const e = this.x, i = this.y, s = this.z, a = this.w, u = t.elements;
        return this.x = u[0] * e + u[4] * i + u[8] * s + u[12] * a, this.y = u[1] * e + u[5] * i + u[9] * s + u[13] * a, this.z = u[2] * e + u[6] * i + u[10] * s + u[14] * a, this.w = u[3] * e + u[7] * i + u[11] * s + u[15] * a, this
    }

    divideScalar(t) {
        return this.multiplyScalar(1 / t)
    }

    setAxisAngleFromQuaternion(t) {
        this.w = 2 * Math.acos(t.w);
        const e = Math.sqrt(1 - t.w * t.w);
        return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
    }

    setAxisAngleFromRotationMatrix(t) {
        let e, i, s, a;
        const f = t.elements, h = f[0], d = f[4], m = f[8], g = f[1], x = f[5], M = f[9], v = f[2], _ = f[6], S = f[10];
        if (Math.abs(d - g) < .01 && Math.abs(m - v) < .01 && Math.abs(M - _) < .01) {
            if (Math.abs(d + g) < .1 && Math.abs(m + v) < .1 && Math.abs(M + _) < .1 && Math.abs(h + x + S - 3) < .1) return this.set(1, 0, 0, 0), this;
            e = Math.PI;
            const T = (h + 1) / 2, A = (x + 1) / 2, E = (S + 1) / 2, D = (d + g) / 4, B = (m + v) / 4, w = (M + _) / 4;
            return T > A && T > E ? T < .01 ? (i = 0, s = .707106781, a = .707106781) : (i = Math.sqrt(T), s = D / i, a = B / i) : A > E ? A < .01 ? (i = .707106781, s = 0, a = .707106781) : (s = Math.sqrt(A), i = D / s, a = w / s) : E < .01 ? (i = .707106781, s = .707106781, a = 0) : (a = Math.sqrt(E), i = B / a, s = w / a), this.set(i, s, a, e), this
        }
        let L = Math.sqrt((_ - M) * (_ - M) + (m - v) * (m - v) + (g - d) * (g - d));
        return Math.abs(L) < .001 && (L = 1), this.x = (_ - M) / L, this.y = (m - v) / L, this.z = (g - d) / L, this.w = Math.acos((h + x + S - 1) / 2), this
    }

    min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
    }

    max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
    }

    clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
    }

    clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this
    }

    clampLength(t, e) {
        const i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
    }

    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
    }

    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
    }

    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
    }

    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
    }

    negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
    }

    dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
    }

    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }

    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }

    normalize() {
        return this.divideScalar(this.length() || 1)
    }

    setLength(t) {
        return this.normalize().multiplyScalar(t)
    }

    lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
    }

    lerpVectors(t, e, i) {
        return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this.w = t.w + (e.w - t.w) * i, this
    }

    equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
    }

    fromArray(t, e = 0) {
        return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
    }

    toArray(t = [], e = 0) {
        return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
    }

    fromBufferAttribute(t, e) {
        return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
    }

    random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
    }

    * [Symbol.iterator]() {
        yield this.x, yield this.y, yield this.z, yield this.w
    }
}

class Tr extends Cr {
    constructor(t = 1, e = 1, i = {}) {
        super(), this.isWebGLRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new Ae(0, 0, t, e), this.scissorTest = !1, this.viewport = new Ae(0, 0, t, e);
        const s = {width: t, height: e, depth: 1};
        this.texture = new qn(s, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = i.generateMipmaps !== void 0 ? i.generateMipmaps : !1, this.texture.internalFormat = i.internalFormat !== void 0 ? i.internalFormat : null, this.texture.minFilter = i.minFilter !== void 0 ? i.minFilter : Wn, this.depthBuffer = i.depthBuffer !== void 0 ? i.depthBuffer : !0, this.stencilBuffer = i.stencilBuffer !== void 0 ? i.stencilBuffer : !1, this.depthTexture = i.depthTexture !== void 0 ? i.depthTexture : null, this.samples = i.samples !== void 0 ? i.samples : 0
    }

    setSize(t, e, i = 1) {
        (this.width !== t || this.height !== e || this.depth !== i) && (this.width = t, this.height = e, this.depth = i, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = i, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
    }

    clone() {
        return new this.constructor().copy(this)
    }

    copy(t) {
        this.width = t.width, this.height = t.height, this.depth = t.depth, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0;
        const e = Object.assign({}, t.texture.image);
        return this.texture.source = new _p(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this
    }

    dispose() {
        this.dispatchEvent({type: "dispose"})
    }
}

class vp extends qn {
    constructor(t = null, e = 1, i = 1, s = 1) {
        super(null), this.isDataArrayTexture = !0, this.image = {
            data: t,
            width: e,
            height: i,
            depth: s
        }, this.magFilter = vn, this.minFilter = vn, this.wrapR = ii, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }
}

class WM extends qn {
    constructor(t = null, e = 1, i = 1, s = 1) {
        super(null), this.isData3DTexture = !0, this.image = {
            data: t,
            width: e,
            height: i,
            depth: s
        }, this.magFilter = vn, this.minFilter = vn, this.wrapR = ii, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
    }
}

class Er {
    constructor(t = 0, e = 0, i = 0, s = 1) {
        this.isQuaternion = !0, this._x = t, this._y = e, this._z = i, this._w = s
    }

    static slerpFlat(t, e, i, s, a, u, l) {
        let f = i[s + 0], h = i[s + 1], d = i[s + 2], m = i[s + 3];
        const g = a[u + 0], x = a[u + 1], M = a[u + 2], v = a[u + 3];
        if (l === 0) {
            t[e + 0] = f, t[e + 1] = h, t[e + 2] = d, t[e + 3] = m;
            return
        }
        if (l === 1) {
            t[e + 0] = g, t[e + 1] = x, t[e + 2] = M, t[e + 3] = v;
            return
        }
        if (m !== v || f !== g || h !== x || d !== M) {
            let _ = 1 - l;
            const S = f * g + h * x + d * M + m * v, L = S >= 0 ? 1 : -1, T = 1 - S * S;
            if (T > Number.EPSILON) {
                const E = Math.sqrt(T), D = Math.atan2(E, S * L);
                _ = Math.sin(_ * D) / E, l = Math.sin(l * D) / E
            }
            const A = l * L;
            if (f = f * _ + g * A, h = h * _ + x * A, d = d * _ + M * A, m = m * _ + v * A, _ === 1 - l) {
                const E = 1 / Math.sqrt(f * f + h * h + d * d + m * m);
                f *= E, h *= E, d *= E, m *= E
            }
        }
        t[e] = f, t[e + 1] = h, t[e + 2] = d, t[e + 3] = m
    }

    static multiplyQuaternionsFlat(t, e, i, s, a, u) {
        const l = i[s], f = i[s + 1], h = i[s + 2], d = i[s + 3], m = a[u], g = a[u + 1], x = a[u + 2], M = a[u + 3];
        return t[e] = l * M + d * m + f * x - h * g, t[e + 1] = f * M + d * g + h * m - l * x, t[e + 2] = h * M + d * x + l * g - f * m, t[e + 3] = d * M - l * m - f * g - h * x, t
    }

    get x() {
        return this._x
    }

    set x(t) {
        this._x = t, this._onChangeCallback()
    }

    get y() {
        return this._y
    }

    set y(t) {
        this._y = t, this._onChangeCallback()
    }

    get z() {
        return this._z
    }

    set z(t) {
        this._z = t, this._onChangeCallback()
    }

    get w() {
        return this._w
    }

    set w(t) {
        this._w = t, this._onChangeCallback()
    }

    set(t, e, i, s) {
        return this._x = t, this._y = e, this._z = i, this._w = s, this._onChangeCallback(), this
    }

    clone() {
        return new this.constructor(this._x, this._y, this._z, this._w)
    }

    copy(t) {
        return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this
    }

    setFromEuler(t, e) {
        const i = t._x, s = t._y, a = t._z, u = t._order, l = Math.cos, f = Math.sin, h = l(i / 2), d = l(s / 2),
            m = l(a / 2), g = f(i / 2), x = f(s / 2), M = f(a / 2);
        switch (u) {
            case"XYZ":
                this._x = g * d * m + h * x * M, this._y = h * x * m - g * d * M, this._z = h * d * M + g * x * m, this._w = h * d * m - g * x * M;
                break;
            case"YXZ":
                this._x = g * d * m + h * x * M, this._y = h * x * m - g * d * M, this._z = h * d * M - g * x * m, this._w = h * d * m + g * x * M;
                break;
            case"ZXY":
                this._x = g * d * m - h * x * M, this._y = h * x * m + g * d * M, this._z = h * d * M + g * x * m, this._w = h * d * m - g * x * M;
                break;
            case"ZYX":
                this._x = g * d * m - h * x * M, this._y = h * x * m + g * d * M, this._z = h * d * M - g * x * m, this._w = h * d * m + g * x * M;
                break;
            case"YZX":
                this._x = g * d * m + h * x * M, this._y = h * x * m + g * d * M, this._z = h * d * M - g * x * m, this._w = h * d * m - g * x * M;
                break;
            case"XZY":
                this._x = g * d * m - h * x * M, this._y = h * x * m - g * d * M, this._z = h * d * M + g * x * m, this._w = h * d * m + g * x * M;
                break;
            default:
                console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + u)
        }
        return e !== !1 && this._onChangeCallback(), this
    }

    setFromAxisAngle(t, e) {
        const i = e / 2, s = Math.sin(i);
        return this._x = t.x * s, this._y = t.y * s, this._z = t.z * s, this._w = Math.cos(i), this._onChangeCallback(), this
    }

    setFromRotationMatrix(t) {
        const e = t.elements, i = e[0], s = e[4], a = e[8], u = e[1], l = e[5], f = e[9], h = e[2], d = e[6], m = e[10],
            g = i + l + m;
        if (g > 0) {
            const x = .5 / Math.sqrt(g + 1);
            this._w = .25 / x, this._x = (d - f) * x, this._y = (a - h) * x, this._z = (u - s) * x
        } else if (i > l && i > m) {
            const x = 2 * Math.sqrt(1 + i - l - m);
            this._w = (d - f) / x, this._x = .25 * x, this._y = (s + u) / x, this._z = (a + h) / x
        } else if (l > m) {
            const x = 2 * Math.sqrt(1 + l - i - m);
            this._w = (a - h) / x, this._x = (s + u) / x, this._y = .25 * x, this._z = (f + d) / x
        } else {
            const x = 2 * Math.sqrt(1 + m - i - l);
            this._w = (u - s) / x, this._x = (a + h) / x, this._y = (f + d) / x, this._z = .25 * x
        }
        return this._onChangeCallback(), this
    }

    setFromUnitVectors(t, e) {
        let i = t.dot(e) + 1;
        return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = i)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = i), this.normalize()
    }

    angleTo(t) {
        return 2 * Math.acos(Math.abs(rn(this.dot(t), -1, 1)))
    }

    rotateTowards(t, e) {
        const i = this.angleTo(t);
        if (i === 0) return this;
        const s = Math.min(1, e / i);
        return this.slerp(t, s), this
    }

    identity() {
        return this.set(0, 0, 0, 1)
    }

    invert() {
        return this.conjugate()
    }

    conjugate() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
    }

    dot(t) {
        return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
    }

    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }

    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }

    normalize() {
        let t = this.length();
        return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this
    }

    multiply(t) {
        return this.multiplyQuaternions(this, t)
    }

    premultiply(t) {
        return this.multiplyQuaternions(t, this)
    }

    multiplyQuaternions(t, e) {
        const i = t._x, s = t._y, a = t._z, u = t._w, l = e._x, f = e._y, h = e._z, d = e._w;
        return this._x = i * d + u * l + s * h - a * f, this._y = s * d + u * f + a * l - i * h, this._z = a * d + u * h + i * f - s * l, this._w = u * d - i * l - s * f - a * h, this._onChangeCallback(), this
    }

    slerp(t, e) {
        if (e === 0) return this;
        if (e === 1) return this.copy(t);
        const i = this._x, s = this._y, a = this._z, u = this._w;
        let l = u * t._w + i * t._x + s * t._y + a * t._z;
        if (l < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, l = -l) : this.copy(t), l >= 1) return this._w = u, this._x = i, this._y = s, this._z = a, this;
        const f = 1 - l * l;
        if (f <= Number.EPSILON) {
            const x = 1 - e;
            return this._w = x * u + e * this._w, this._x = x * i + e * this._x, this._y = x * s + e * this._y, this._z = x * a + e * this._z, this.normalize(), this._onChangeCallback(), this
        }
        const h = Math.sqrt(f), d = Math.atan2(h, l), m = Math.sin((1 - e) * d) / h, g = Math.sin(e * d) / h;
        return this._w = u * m + this._w * g, this._x = i * m + this._x * g, this._y = s * m + this._y * g, this._z = a * m + this._z * g, this._onChangeCallback(), this
    }

    slerpQuaternions(t, e, i) {
        return this.copy(t).slerp(e, i)
    }

    random() {
        const t = Math.random(), e = Math.sqrt(1 - t), i = Math.sqrt(t), s = 2 * Math.PI * Math.random(),
            a = 2 * Math.PI * Math.random();
        return this.set(e * Math.cos(s), i * Math.sin(a), i * Math.cos(a), e * Math.sin(s))
    }

    equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
    }

    fromArray(t, e = 0) {
        return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this
    }

    toArray(t = [], e = 0) {
        return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
    }

    fromBufferAttribute(t, e) {
        return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this
    }

    _onChange(t) {
        return this._onChangeCallback = t, this
    }

    _onChangeCallback() {
    }

    * [Symbol.iterator]() {
        yield this._x, yield this._y, yield this._z, yield this._w
    }
}

class F {
    constructor(t = 0, e = 0, i = 0) {
        F.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = i
    }

    set(t, e, i) {
        return i === void 0 && (i = this.z), this.x = t, this.y = e, this.z = i, this
    }

    setScalar(t) {
        return this.x = t, this.y = t, this.z = t, this
    }

    setX(t) {
        return this.x = t, this
    }

    setY(t) {
        return this.y = t, this
    }

    setZ(t) {
        return this.z = t, this
    }

    setComponent(t, e) {
        switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
        }
        return this
    }

    getComponent(t) {
        switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + t)
        }
    }

    clone() {
        return new this.constructor(this.x, this.y, this.z)
    }

    copy(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this
    }

    add(t) {
        return this.x += t.x, this.y += t.y, this.z += t.z, this
    }

    addScalar(t) {
        return this.x += t, this.y += t, this.z += t, this
    }

    addVectors(t, e) {
        return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
    }

    addScaledVector(t, e) {
        return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
    }

    sub(t) {
        return this.x -= t.x, this.y -= t.y, this.z -= t.z, this
    }

    subScalar(t) {
        return this.x -= t, this.y -= t, this.z -= t, this
    }

    subVectors(t, e) {
        return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
    }

    multiply(t) {
        return this.x *= t.x, this.y *= t.y, this.z *= t.z, this
    }

    multiplyScalar(t) {
        return this.x *= t, this.y *= t, this.z *= t, this
    }

    multiplyVectors(t, e) {
        return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
    }

    applyEuler(t) {
        return this.applyQuaternion(ld.setFromEuler(t))
    }

    applyAxisAngle(t, e) {
        return this.applyQuaternion(ld.setFromAxisAngle(t, e))
    }

    applyMatrix3(t) {
        const e = this.x, i = this.y, s = this.z, a = t.elements;
        return this.x = a[0] * e + a[3] * i + a[6] * s, this.y = a[1] * e + a[4] * i + a[7] * s, this.z = a[2] * e + a[5] * i + a[8] * s, this
    }

    applyNormalMatrix(t) {
        return this.applyMatrix3(t).normalize()
    }

    applyMatrix4(t) {
        const e = this.x, i = this.y, s = this.z, a = t.elements, u = 1 / (a[3] * e + a[7] * i + a[11] * s + a[15]);
        return this.x = (a[0] * e + a[4] * i + a[8] * s + a[12]) * u, this.y = (a[1] * e + a[5] * i + a[9] * s + a[13]) * u, this.z = (a[2] * e + a[6] * i + a[10] * s + a[14]) * u, this
    }

    applyQuaternion(t) {
        const e = this.x, i = this.y, s = this.z, a = t.x, u = t.y, l = t.z, f = t.w, h = f * e + u * s - l * i,
            d = f * i + l * e - a * s, m = f * s + a * i - u * e, g = -a * e - u * i - l * s;
        return this.x = h * f + g * -a + d * -l - m * -u, this.y = d * f + g * -u + m * -a - h * -l, this.z = m * f + g * -l + h * -u - d * -a, this
    }

    project(t) {
        return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
    }

    unproject(t) {
        return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
    }

    transformDirection(t) {
        const e = this.x, i = this.y, s = this.z, a = t.elements;
        return this.x = a[0] * e + a[4] * i + a[8] * s, this.y = a[1] * e + a[5] * i + a[9] * s, this.z = a[2] * e + a[6] * i + a[10] * s, this.normalize()
    }

    divide(t) {
        return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
    }

    divideScalar(t) {
        return this.multiplyScalar(1 / t)
    }

    min(t) {
        return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
    }

    max(t) {
        return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
    }

    clamp(t, e) {
        return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
    }

    clampScalar(t, e) {
        return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this
    }

    clampLength(t, e) {
        const i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
    }

    floor() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
    }

    ceil() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
    }

    round() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
    }

    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
    }

    negate() {
        return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
    }

    dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z
    }

    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }

    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }

    normalize() {
        return this.divideScalar(this.length() || 1)
    }

    setLength(t) {
        return this.normalize().multiplyScalar(t)
    }

    lerp(t, e) {
        return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
    }

    lerpVectors(t, e, i) {
        return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this
    }

    cross(t) {
        return this.crossVectors(this, t)
    }

    crossVectors(t, e) {
        const i = t.x, s = t.y, a = t.z, u = e.x, l = e.y, f = e.z;
        return this.x = s * f - a * l, this.y = a * u - i * f, this.z = i * l - s * u, this
    }

    projectOnVector(t) {
        const e = t.lengthSq();
        if (e === 0) return this.set(0, 0, 0);
        const i = t.dot(this) / e;
        return this.copy(t).multiplyScalar(i)
    }

    projectOnPlane(t) {
        return tc.copy(this).projectOnVector(t), this.sub(tc)
    }

    reflect(t) {
        return this.sub(tc.copy(t).multiplyScalar(2 * this.dot(t)))
    }

    angleTo(t) {
        const e = Math.sqrt(this.lengthSq() * t.lengthSq());
        if (e === 0) return Math.PI / 2;
        const i = this.dot(t) / e;
        return Math.acos(rn(i, -1, 1))
    }

    distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t))
    }

    distanceToSquared(t) {
        const e = this.x - t.x, i = this.y - t.y, s = this.z - t.z;
        return e * e + i * i + s * s
    }

    manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    }

    setFromSpherical(t) {
        return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
    }

    setFromSphericalCoords(t, e, i) {
        const s = Math.sin(e) * t;
        return this.x = s * Math.sin(i), this.y = Math.cos(e) * t, this.z = s * Math.cos(i), this
    }

    setFromCylindrical(t) {
        return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
    }

    setFromCylindricalCoords(t, e, i) {
        return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this
    }

    setFromMatrixPosition(t) {
        const e = t.elements;
        return this.x = e[12], this.y = e[13], this.z = e[14], this
    }

    setFromMatrixScale(t) {
        const e = this.setFromMatrixColumn(t, 0).length(), i = this.setFromMatrixColumn(t, 1).length(),
            s = this.setFromMatrixColumn(t, 2).length();
        return this.x = e, this.y = i, this.z = s, this
    }

    setFromMatrixColumn(t, e) {
        return this.fromArray(t.elements, e * 4)
    }

    setFromMatrix3Column(t, e) {
        return this.fromArray(t.elements, e * 3)
    }

    setFromEuler(t) {
        return this.x = t._x, this.y = t._y, this.z = t._z, this
    }

    equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z
    }

    fromArray(t, e = 0) {
        return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
    }

    toArray(t = [], e = 0) {
        return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
    }

    fromBufferAttribute(t, e) {
        return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
    }

    random() {
        return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
    }

    randomDirection() {
        const t = (Math.random() - .5) * 2, e = Math.random() * Math.PI * 2, i = Math.sqrt(1 - t ** 2);
        return this.x = i * Math.cos(e), this.y = i * Math.sin(e), this.z = t, this
    }

    * [Symbol.iterator]() {
        yield this.x, yield this.y, yield this.z
    }
}

const tc = new F, ld = new Er;

class na {
    constructor(t = new F(1 / 0, 1 / 0, 1 / 0), e = new F(-1 / 0, -1 / 0, -1 / 0)) {
        this.isBox3 = !0, this.min = t, this.max = e
    }

    set(t, e) {
        return this.min.copy(t), this.max.copy(e), this
    }

    setFromArray(t) {
        let e = 1 / 0, i = 1 / 0, s = 1 / 0, a = -1 / 0, u = -1 / 0, l = -1 / 0;
        for (let f = 0, h = t.length; f < h; f += 3) {
            const d = t[f], m = t[f + 1], g = t[f + 2];
            d < e && (e = d), m < i && (i = m), g < s && (s = g), d > a && (a = d), m > u && (u = m), g > l && (l = g)
        }
        return this.min.set(e, i, s), this.max.set(a, u, l), this
    }

    setFromBufferAttribute(t) {
        let e = 1 / 0, i = 1 / 0, s = 1 / 0, a = -1 / 0, u = -1 / 0, l = -1 / 0;
        for (let f = 0, h = t.count; f < h; f++) {
            const d = t.getX(f), m = t.getY(f), g = t.getZ(f);
            d < e && (e = d), m < i && (i = m), g < s && (s = g), d > a && (a = d), m > u && (u = m), g > l && (l = g)
        }
        return this.min.set(e, i, s), this.max.set(a, u, l), this
    }

    setFromPoints(t) {
        this.makeEmpty();
        for (let e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
        return this
    }

    setFromCenterAndSize(t, e) {
        const i = ur.copy(e).multiplyScalar(.5);
        return this.min.copy(t).sub(i), this.max.copy(t).add(i), this
    }

    setFromObject(t, e = !1) {
        return this.makeEmpty(), this.expandByObject(t, e)
    }

    clone() {
        return new this.constructor().copy(this)
    }

    copy(t) {
        return this.min.copy(t.min), this.max.copy(t.max), this
    }

    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
    }

    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }

    getCenter(t) {
        return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
    }

    getSize(t) {
        return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
    }

    expandByPoint(t) {
        return this.min.min(t), this.max.max(t), this
    }

    expandByVector(t) {
        return this.min.sub(t), this.max.add(t), this
    }

    expandByScalar(t) {
        return this.min.addScalar(-t), this.max.addScalar(t), this
    }

    expandByObject(t, e = !1) {
        t.updateWorldMatrix(!1, !1);
        const i = t.geometry;
        if (i !== void 0) if (e && i.attributes != null && i.attributes.position !== void 0) {
            const a = i.attributes.position;
            for (let u = 0, l = a.count; u < l; u++) ur.fromBufferAttribute(a, u).applyMatrix4(t.matrixWorld), this.expandByPoint(ur)
        } else i.boundingBox === null && i.computeBoundingBox(), ec.copy(i.boundingBox), ec.applyMatrix4(t.matrixWorld), this.union(ec);
        const s = t.children;
        for (let a = 0, u = s.length; a < u; a++) this.expandByObject(s[a], e);
        return this
    }

    containsPoint(t) {
        return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
    }

    containsBox(t) {
        return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
    }

    getParameter(t, e) {
        return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
    }

    intersectsBox(t) {
        return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
    }

    intersectsSphere(t) {
        return this.clampPoint(t.center, ur), ur.distanceToSquared(t.center) <= t.radius * t.radius
    }

    intersectsPlane(t) {
        let e, i;
        return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant
    }

    intersectsTriangle(t) {
        if (this.isEmpty()) return !1;
        this.getCenter(Bs), Ja.subVectors(this.max, Bs), Jr.subVectors(t.a, Bs), jr.subVectors(t.b, Bs), Kr.subVectors(t.c, Bs), Yi.subVectors(jr, Jr), Zi.subVectors(Kr, jr), hr.subVectors(Jr, Kr);
        let e = [0, -Yi.z, Yi.y, 0, -Zi.z, Zi.y, 0, -hr.z, hr.y, Yi.z, 0, -Yi.x, Zi.z, 0, -Zi.x, hr.z, 0, -hr.x, -Yi.y, Yi.x, 0, -Zi.y, Zi.x, 0, -hr.y, hr.x, 0];
        return !nc(e, Jr, jr, Kr, Ja) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !nc(e, Jr, jr, Kr, Ja)) ? !1 : (ja.crossVectors(Yi, Zi), e = [ja.x, ja.y, ja.z], nc(e, Jr, jr, Kr, Ja))
    }

    clampPoint(t, e) {
        return e.copy(t).clamp(this.min, this.max)
    }

    distanceToPoint(t) {
        return ur.copy(t).clamp(this.min, this.max).sub(t).length()
    }

    getBoundingSphere(t) {
        return this.getCenter(t.center), t.radius = this.getSize(ur).length() * .5, t
    }

    intersect(t) {
        return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
    }

    union(t) {
        return this.min.min(t.min), this.max.max(t.max), this
    }

    applyMatrix4(t) {
        return this.isEmpty() ? this : (bi[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), bi[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), bi[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), bi[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), bi[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), bi[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), bi[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), bi[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(bi), this)
    }

    translate(t) {
        return this.min.add(t), this.max.add(t), this
    }

    equals(t) {
        return t.min.equals(this.min) && t.max.equals(this.max)
    }
}

const bi = [new F, new F, new F, new F, new F, new F, new F, new F], ur = new F, ec = new na, Jr = new F, jr = new F,
    Kr = new F, Yi = new F, Zi = new F, hr = new F, Bs = new F, Ja = new F, ja = new F, fr = new F;

function nc(c, t, e, i, s) {
    for (let a = 0, u = c.length - 3; a <= u; a += 3) {
        fr.fromArray(c, a);
        const l = s.x * Math.abs(fr.x) + s.y * Math.abs(fr.y) + s.z * Math.abs(fr.z), f = t.dot(fr), h = e.dot(fr),
            d = i.dot(fr);
        if (Math.max(-Math.max(f, h, d), Math.min(f, h, d)) > l) return !1
    }
    return !0
}

const VM = new na, Gs = new F, ic = new F;

class ia {
    constructor(t = new F, e = -1) {
        this.center = t, this.radius = e
    }

    set(t, e) {
        return this.center.copy(t), this.radius = e, this
    }

    setFromPoints(t, e) {
        const i = this.center;
        e !== void 0 ? i.copy(e) : VM.setFromPoints(t).getCenter(i);
        let s = 0;
        for (let a = 0, u = t.length; a < u; a++) s = Math.max(s, i.distanceToSquared(t[a]));
        return this.radius = Math.sqrt(s), this
    }

    copy(t) {
        return this.center.copy(t.center), this.radius = t.radius, this
    }

    isEmpty() {
        return this.radius < 0
    }

    makeEmpty() {
        return this.center.set(0, 0, 0), this.radius = -1, this
    }

    containsPoint(t) {
        return t.distanceToSquared(this.center) <= this.radius * this.radius
    }

    distanceToPoint(t) {
        return t.distanceTo(this.center) - this.radius
    }

    intersectsSphere(t) {
        const e = this.radius + t.radius;
        return t.center.distanceToSquared(this.center) <= e * e
    }

    intersectsBox(t) {
        return t.intersectsSphere(this)
    }

    intersectsPlane(t) {
        return Math.abs(t.distanceToPoint(this.center)) <= this.radius
    }

    clampPoint(t, e) {
        const i = this.center.distanceToSquared(t);
        return e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
    }

    getBoundingBox(t) {
        return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t)
    }

    applyMatrix4(t) {
        return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
    }

    translate(t) {
        return this.center.add(t), this
    }

    expandByPoint(t) {
        if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this;
        Gs.subVectors(t, this.center);
        const e = Gs.lengthSq();
        if (e > this.radius * this.radius) {
            const i = Math.sqrt(e), s = (i - this.radius) * .5;
            this.center.addScaledVector(Gs, s / i), this.radius += s
        }
        return this
    }

    union(t) {
        return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (ic.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Gs.copy(t.center).add(ic)), this.expandByPoint(Gs.copy(t.center).sub(ic))), this)
    }

    equals(t) {
        return t.center.equals(this.center) && t.radius === this.radius
    }

    clone() {
        return new this.constructor().copy(this)
    }
}

const wi = new F, rc = new F, Ka = new F, $i = new F, sc = new F, Qa = new F, ac = new F;

class Ao {
    constructor(t = new F, e = new F(0, 0, -1)) {
        this.origin = t, this.direction = e
    }

    set(t, e) {
        return this.origin.copy(t), this.direction.copy(e), this
    }

    copy(t) {
        return this.origin.copy(t.origin), this.direction.copy(t.direction), this
    }

    at(t, e) {
        return e.copy(this.direction).multiplyScalar(t).add(this.origin)
    }

    lookAt(t) {
        return this.direction.copy(t).sub(this.origin).normalize(), this
    }

    recast(t) {
        return this.origin.copy(this.at(t, wi)), this
    }

    closestPointToPoint(t, e) {
        e.subVectors(t, this.origin);
        const i = e.dot(this.direction);
        return i < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(i).add(this.origin)
    }

    distanceToPoint(t) {
        return Math.sqrt(this.distanceSqToPoint(t))
    }

    distanceSqToPoint(t) {
        const e = wi.subVectors(t, this.origin).dot(this.direction);
        return e < 0 ? this.origin.distanceToSquared(t) : (wi.copy(this.direction).multiplyScalar(e).add(this.origin), wi.distanceToSquared(t))
    }

    distanceSqToSegment(t, e, i, s) {
        rc.copy(t).add(e).multiplyScalar(.5), Ka.copy(e).sub(t).normalize(), $i.copy(this.origin).sub(rc);
        const a = t.distanceTo(e) * .5, u = -this.direction.dot(Ka), l = $i.dot(this.direction), f = -$i.dot(Ka),
            h = $i.lengthSq(), d = Math.abs(1 - u * u);
        let m, g, x, M;
        if (d > 0) if (m = u * f - l, g = u * l - f, M = a * d, m >= 0) if (g >= -M) if (g <= M) {
            const v = 1 / d;
            m *= v, g *= v, x = m * (m + u * g + 2 * l) + g * (u * m + g + 2 * f) + h
        } else g = a, m = Math.max(0, -(u * g + l)), x = -m * m + g * (g + 2 * f) + h; else g = -a, m = Math.max(0, -(u * g + l)), x = -m * m + g * (g + 2 * f) + h; else g <= -M ? (m = Math.max(0, -(-u * a + l)), g = m > 0 ? -a : Math.min(Math.max(-a, -f), a), x = -m * m + g * (g + 2 * f) + h) : g <= M ? (m = 0, g = Math.min(Math.max(-a, -f), a), x = g * (g + 2 * f) + h) : (m = Math.max(0, -(u * a + l)), g = m > 0 ? a : Math.min(Math.max(-a, -f), a), x = -m * m + g * (g + 2 * f) + h); else g = u > 0 ? -a : a, m = Math.max(0, -(u * g + l)), x = -m * m + g * (g + 2 * f) + h;
        return i && i.copy(this.direction).multiplyScalar(m).add(this.origin), s && s.copy(Ka).multiplyScalar(g).add(rc), x
    }

    intersectSphere(t, e) {
        wi.subVectors(t.center, this.origin);
        const i = wi.dot(this.direction), s = wi.dot(wi) - i * i, a = t.radius * t.radius;
        if (s > a) return null;
        const u = Math.sqrt(a - s), l = i - u, f = i + u;
        return l < 0 && f < 0 ? null : l < 0 ? this.at(f, e) : this.at(l, e)
    }

    intersectsSphere(t) {
        return this.distanceSqToPoint(t.center) <= t.radius * t.radius
    }

    distanceToPlane(t) {
        const e = t.normal.dot(this.direction);
        if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null;
        const i = -(this.origin.dot(t.normal) + t.constant) / e;
        return i >= 0 ? i : null
    }

    intersectPlane(t, e) {
        const i = this.distanceToPlane(t);
        return i === null ? null : this.at(i, e)
    }

    intersectsPlane(t) {
        const e = t.distanceToPoint(this.origin);
        return e === 0 || t.normal.dot(this.direction) * e < 0
    }

    intersectBox(t, e) {
        let i, s, a, u, l, f;
        const h = 1 / this.direction.x, d = 1 / this.direction.y, m = 1 / this.direction.z, g = this.origin;
        return h >= 0 ? (i = (t.min.x - g.x) * h, s = (t.max.x - g.x) * h) : (i = (t.max.x - g.x) * h, s = (t.min.x - g.x) * h), d >= 0 ? (a = (t.min.y - g.y) * d, u = (t.max.y - g.y) * d) : (a = (t.max.y - g.y) * d, u = (t.min.y - g.y) * d), i > u || a > s || ((a > i || isNaN(i)) && (i = a), (u < s || isNaN(s)) && (s = u), m >= 0 ? (l = (t.min.z - g.z) * m, f = (t.max.z - g.z) * m) : (l = (t.max.z - g.z) * m, f = (t.min.z - g.z) * m), i > f || l > s) || ((l > i || i !== i) && (i = l), (f < s || s !== s) && (s = f), s < 0) ? null : this.at(i >= 0 ? i : s, e)
    }

    intersectsBox(t) {
        return this.intersectBox(t, wi) !== null
    }

    intersectTriangle(t, e, i, s, a) {
        sc.subVectors(e, t), Qa.subVectors(i, t), ac.crossVectors(sc, Qa);
        let u = this.direction.dot(ac), l;
        if (u > 0) {
            if (s) return null;
            l = 1
        } else if (u < 0) l = -1, u = -u; else return null;
        $i.subVectors(this.origin, t);
        const f = l * this.direction.dot(Qa.crossVectors($i, Qa));
        if (f < 0) return null;
        const h = l * this.direction.dot(sc.cross($i));
        if (h < 0 || f + h > u) return null;
        const d = -l * $i.dot(ac);
        return d < 0 ? null : this.at(d / u, a)
    }

    applyMatrix4(t) {
        return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
    }

    equals(t) {
        return t.origin.equals(this.origin) && t.direction.equals(this.direction)
    }

    clone() {
        return new this.constructor().copy(this)
    }
}

class Re {
    constructor() {
        Re.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }

    set(t, e, i, s, a, u, l, f, h, d, m, g, x, M, v, _) {
        const S = this.elements;
        return S[0] = t, S[4] = e, S[8] = i, S[12] = s, S[1] = a, S[5] = u, S[9] = l, S[13] = f, S[2] = h, S[6] = d, S[10] = m, S[14] = g, S[3] = x, S[7] = M, S[11] = v, S[15] = _, this
    }

    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    }

    clone() {
        return new Re().fromArray(this.elements)
    }

    copy(t) {
        const e = this.elements, i = t.elements;
        return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
    }

    copyPosition(t) {
        const e = this.elements, i = t.elements;
        return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
    }

    setFromMatrix3(t) {
        const e = t.elements;
        return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this
    }

    extractBasis(t, e, i) {
        return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
    }

    makeBasis(t, e, i) {
        return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
    }

    extractRotation(t) {
        const e = this.elements, i = t.elements, s = 1 / Qr.setFromMatrixColumn(t, 0).length(),
            a = 1 / Qr.setFromMatrixColumn(t, 1).length(), u = 1 / Qr.setFromMatrixColumn(t, 2).length();
        return e[0] = i[0] * s, e[1] = i[1] * s, e[2] = i[2] * s, e[3] = 0, e[4] = i[4] * a, e[5] = i[5] * a, e[6] = i[6] * a, e[7] = 0, e[8] = i[8] * u, e[9] = i[9] * u, e[10] = i[10] * u, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
    }

    makeRotationFromEuler(t) {
        const e = this.elements, i = t.x, s = t.y, a = t.z, u = Math.cos(i), l = Math.sin(i), f = Math.cos(s),
            h = Math.sin(s), d = Math.cos(a), m = Math.sin(a);
        if (t.order === "XYZ") {
            const g = u * d, x = u * m, M = l * d, v = l * m;
            e[0] = f * d, e[4] = -f * m, e[8] = h, e[1] = x + M * h, e[5] = g - v * h, e[9] = -l * f, e[2] = v - g * h, e[6] = M + x * h, e[10] = u * f
        } else if (t.order === "YXZ") {
            const g = f * d, x = f * m, M = h * d, v = h * m;
            e[0] = g + v * l, e[4] = M * l - x, e[8] = u * h, e[1] = u * m, e[5] = u * d, e[9] = -l, e[2] = x * l - M, e[6] = v + g * l, e[10] = u * f
        } else if (t.order === "ZXY") {
            const g = f * d, x = f * m, M = h * d, v = h * m;
            e[0] = g - v * l, e[4] = -u * m, e[8] = M + x * l, e[1] = x + M * l, e[5] = u * d, e[9] = v - g * l, e[2] = -u * h, e[6] = l, e[10] = u * f
        } else if (t.order === "ZYX") {
            const g = u * d, x = u * m, M = l * d, v = l * m;
            e[0] = f * d, e[4] = M * h - x, e[8] = g * h + v, e[1] = f * m, e[5] = v * h + g, e[9] = x * h - M, e[2] = -h, e[6] = l * f, e[10] = u * f
        } else if (t.order === "YZX") {
            const g = u * f, x = u * h, M = l * f, v = l * h;
            e[0] = f * d, e[4] = v - g * m, e[8] = M * m + x, e[1] = m, e[5] = u * d, e[9] = -l * d, e[2] = -h * d, e[6] = x * m + M, e[10] = g - v * m
        } else if (t.order === "XZY") {
            const g = u * f, x = u * h, M = l * f, v = l * h;
            e[0] = f * d, e[4] = -m, e[8] = h * d, e[1] = g * m + v, e[5] = u * d, e[9] = x * m - M, e[2] = M * m - x, e[6] = l * d, e[10] = v * m + g
        }
        return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
    }

    makeRotationFromQuaternion(t) {
        return this.compose(kM, t, HM)
    }

    lookAt(t, e, i) {
        const s = this.elements;
        return En.subVectors(t, e), En.lengthSq() === 0 && (En.z = 1), En.normalize(), Ji.crossVectors(i, En), Ji.lengthSq() === 0 && (Math.abs(i.z) === 1 ? En.x += 1e-4 : En.z += 1e-4, En.normalize(), Ji.crossVectors(i, En)), Ji.normalize(), to.crossVectors(En, Ji), s[0] = Ji.x, s[4] = to.x, s[8] = En.x, s[1] = Ji.y, s[5] = to.y, s[9] = En.y, s[2] = Ji.z, s[6] = to.z, s[10] = En.z, this
    }

    multiply(t) {
        return this.multiplyMatrices(this, t)
    }

    premultiply(t) {
        return this.multiplyMatrices(t, this)
    }

    multiplyMatrices(t, e) {
        const i = t.elements, s = e.elements, a = this.elements, u = i[0], l = i[4], f = i[8], h = i[12], d = i[1],
            m = i[5], g = i[9], x = i[13], M = i[2], v = i[6], _ = i[10], S = i[14], L = i[3], T = i[7], A = i[11],
            E = i[15], D = s[0], B = s[4], w = s[8], N = s[12], k = s[1], lt = s[5], vt = s[9], j = s[13], X = s[2],
            ot = s[6], dt = s[10], ut = s[14], tt = s[3], Y = s[7], J = s[11], ht = s[15];
        return a[0] = u * D + l * k + f * X + h * tt, a[4] = u * B + l * lt + f * ot + h * Y, a[8] = u * w + l * vt + f * dt + h * J, a[12] = u * N + l * j + f * ut + h * ht, a[1] = d * D + m * k + g * X + x * tt, a[5] = d * B + m * lt + g * ot + x * Y, a[9] = d * w + m * vt + g * dt + x * J, a[13] = d * N + m * j + g * ut + x * ht, a[2] = M * D + v * k + _ * X + S * tt, a[6] = M * B + v * lt + _ * ot + S * Y, a[10] = M * w + v * vt + _ * dt + S * J, a[14] = M * N + v * j + _ * ut + S * ht, a[3] = L * D + T * k + A * X + E * tt, a[7] = L * B + T * lt + A * ot + E * Y, a[11] = L * w + T * vt + A * dt + E * J, a[15] = L * N + T * j + A * ut + E * ht, this
    }

    multiplyScalar(t) {
        const e = this.elements;
        return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
    }

    determinant() {
        const t = this.elements, e = t[0], i = t[4], s = t[8], a = t[12], u = t[1], l = t[5], f = t[9], h = t[13],
            d = t[2], m = t[6], g = t[10], x = t[14], M = t[3], v = t[7], _ = t[11], S = t[15];
        return M * (+a * f * m - s * h * m - a * l * g + i * h * g + s * l * x - i * f * x) + v * (+e * f * x - e * h * g + a * u * g - s * u * x + s * h * d - a * f * d) + _ * (+e * h * m - e * l * x - a * u * m + i * u * x + a * l * d - i * h * d) + S * (-s * l * d - e * f * m + e * l * g + s * u * m - i * u * g + i * f * d)
    }

    transpose() {
        const t = this.elements;
        let e;
        return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
    }

    setPosition(t, e, i) {
        const s = this.elements;
        return t.isVector3 ? (s[12] = t.x, s[13] = t.y, s[14] = t.z) : (s[12] = t, s[13] = e, s[14] = i), this
    }

    invert() {
        const t = this.elements, e = t[0], i = t[1], s = t[2], a = t[3], u = t[4], l = t[5], f = t[6], h = t[7],
            d = t[8], m = t[9], g = t[10], x = t[11], M = t[12], v = t[13], _ = t[14], S = t[15],
            L = m * _ * h - v * g * h + v * f * x - l * _ * x - m * f * S + l * g * S,
            T = M * g * h - d * _ * h - M * f * x + u * _ * x + d * f * S - u * g * S,
            A = d * v * h - M * m * h + M * l * x - u * v * x - d * l * S + u * m * S,
            E = M * m * f - d * v * f - M * l * g + u * v * g + d * l * _ - u * m * _,
            D = e * L + i * T + s * A + a * E;
        if (D === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const B = 1 / D;
        return t[0] = L * B, t[1] = (v * g * a - m * _ * a - v * s * x + i * _ * x + m * s * S - i * g * S) * B, t[2] = (l * _ * a - v * f * a + v * s * h - i * _ * h - l * s * S + i * f * S) * B, t[3] = (m * f * a - l * g * a - m * s * h + i * g * h + l * s * x - i * f * x) * B, t[4] = T * B, t[5] = (d * _ * a - M * g * a + M * s * x - e * _ * x - d * s * S + e * g * S) * B, t[6] = (M * f * a - u * _ * a - M * s * h + e * _ * h + u * s * S - e * f * S) * B, t[7] = (u * g * a - d * f * a + d * s * h - e * g * h - u * s * x + e * f * x) * B, t[8] = A * B, t[9] = (M * m * a - d * v * a - M * i * x + e * v * x + d * i * S - e * m * S) * B, t[10] = (u * v * a - M * l * a + M * i * h - e * v * h - u * i * S + e * l * S) * B, t[11] = (d * l * a - u * m * a - d * i * h + e * m * h + u * i * x - e * l * x) * B, t[12] = E * B, t[13] = (d * v * s - M * m * s + M * i * g - e * v * g - d * i * _ + e * m * _) * B, t[14] = (M * l * s - u * v * s - M * i * f + e * v * f + u * i * _ - e * l * _) * B, t[15] = (u * m * s - d * l * s + d * i * f - e * m * f - u * i * g + e * l * g) * B, this
    }

    scale(t) {
        const e = this.elements, i = t.x, s = t.y, a = t.z;
        return e[0] *= i, e[4] *= s, e[8] *= a, e[1] *= i, e[5] *= s, e[9] *= a, e[2] *= i, e[6] *= s, e[10] *= a, e[3] *= i, e[7] *= s, e[11] *= a, this
    }

    getMaxScaleOnAxis() {
        const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
            i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
        return Math.sqrt(Math.max(e, i, s))
    }

    makeTranslation(t, e, i) {
        return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
    }

    makeRotationX(t) {
        const e = Math.cos(t), i = Math.sin(t);
        return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
    }

    makeRotationY(t) {
        const e = Math.cos(t), i = Math.sin(t);
        return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
    }

    makeRotationZ(t) {
        const e = Math.cos(t), i = Math.sin(t);
        return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    }

    makeRotationAxis(t, e) {
        const i = Math.cos(e), s = Math.sin(e), a = 1 - i, u = t.x, l = t.y, f = t.z, h = a * u, d = a * l;
        return this.set(h * u + i, h * l - s * f, h * f + s * l, 0, h * l + s * f, d * l + i, d * f - s * u, 0, h * f - s * l, d * f + s * u, a * f * f + i, 0, 0, 0, 0, 1), this
    }

    makeScale(t, e, i) {
        return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
    }

    makeShear(t, e, i, s, a, u) {
        return this.set(1, i, a, 0, t, 1, u, 0, e, s, 1, 0, 0, 0, 0, 1), this
    }

    compose(t, e, i) {
        const s = this.elements, a = e._x, u = e._y, l = e._z, f = e._w, h = a + a, d = u + u, m = l + l, g = a * h,
            x = a * d, M = a * m, v = u * d, _ = u * m, S = l * m, L = f * h, T = f * d, A = f * m, E = i.x, D = i.y,
            B = i.z;
        return s[0] = (1 - (v + S)) * E, s[1] = (x + A) * E, s[2] = (M - T) * E, s[3] = 0, s[4] = (x - A) * D, s[5] = (1 - (g + S)) * D, s[6] = (_ + L) * D, s[7] = 0, s[8] = (M + T) * B, s[9] = (_ - L) * B, s[10] = (1 - (g + v)) * B, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this
    }

    decompose(t, e, i) {
        const s = this.elements;
        let a = Qr.set(s[0], s[1], s[2]).length();
        const u = Qr.set(s[4], s[5], s[6]).length(), l = Qr.set(s[8], s[9], s[10]).length();
        this.determinant() < 0 && (a = -a), t.x = s[12], t.y = s[13], t.z = s[14], ei.copy(this);
        const h = 1 / a, d = 1 / u, m = 1 / l;
        return ei.elements[0] *= h, ei.elements[1] *= h, ei.elements[2] *= h, ei.elements[4] *= d, ei.elements[5] *= d, ei.elements[6] *= d, ei.elements[8] *= m, ei.elements[9] *= m, ei.elements[10] *= m, e.setFromRotationMatrix(ei), i.x = a, i.y = u, i.z = l, this
    }

    makePerspective(t, e, i, s, a, u) {
        const l = this.elements, f = 2 * a / (e - t), h = 2 * a / (i - s), d = (e + t) / (e - t), m = (i + s) / (i - s),
            g = -(u + a) / (u - a), x = -2 * u * a / (u - a);
        return l[0] = f, l[4] = 0, l[8] = d, l[12] = 0, l[1] = 0, l[5] = h, l[9] = m, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = g, l[14] = x, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this
    }

    makeOrthographic(t, e, i, s, a, u) {
        const l = this.elements, f = 1 / (e - t), h = 1 / (i - s), d = 1 / (u - a), m = (e + t) * f, g = (i + s) * h,
            x = (u + a) * d;
        return l[0] = 2 * f, l[4] = 0, l[8] = 0, l[12] = -m, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -g, l[2] = 0, l[6] = 0, l[10] = -2 * d, l[14] = -x, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this
    }

    equals(t) {
        const e = this.elements, i = t.elements;
        for (let s = 0; s < 16; s++) if (e[s] !== i[s]) return !1;
        return !0
    }

    fromArray(t, e = 0) {
        for (let i = 0; i < 16; i++) this.elements[i] = t[i + e];
        return this
    }

    toArray(t = [], e = 0) {
        const i = this.elements;
        return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
    }
}

const Qr = new F, ei = new Re, kM = new F(0, 0, 0), HM = new F(1, 1, 1), Ji = new F, to = new F, En = new F,
    cd = new Re, ud = new Er;

class ra {
    constructor(t = 0, e = 0, i = 0, s = ra.DefaultOrder) {
        this.isEuler = !0, this._x = t, this._y = e, this._z = i, this._order = s
    }

    get x() {
        return this._x
    }

    set x(t) {
        this._x = t, this._onChangeCallback()
    }

    get y() {
        return this._y
    }

    set y(t) {
        this._y = t, this._onChangeCallback()
    }

    get z() {
        return this._z
    }

    set z(t) {
        this._z = t, this._onChangeCallback()
    }

    get order() {
        return this._order
    }

    set order(t) {
        this._order = t, this._onChangeCallback()
    }

    set(t, e, i, s = this._order) {
        return this._x = t, this._y = e, this._z = i, this._order = s, this._onChangeCallback(), this
    }

    clone() {
        return new this.constructor(this._x, this._y, this._z, this._order)
    }

    copy(t) {
        return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this
    }

    setFromRotationMatrix(t, e = this._order, i = !0) {
        const s = t.elements, a = s[0], u = s[4], l = s[8], f = s[1], h = s[5], d = s[9], m = s[2], g = s[6], x = s[10];
        switch (e) {
            case"XYZ":
                this._y = Math.asin(rn(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-d, x), this._z = Math.atan2(-u, a)) : (this._x = Math.atan2(g, h), this._z = 0);
                break;
            case"YXZ":
                this._x = Math.asin(-rn(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(l, x), this._z = Math.atan2(f, h)) : (this._y = Math.atan2(-m, a), this._z = 0);
                break;
            case"ZXY":
                this._x = Math.asin(rn(g, -1, 1)), Math.abs(g) < .9999999 ? (this._y = Math.atan2(-m, x), this._z = Math.atan2(-u, h)) : (this._y = 0, this._z = Math.atan2(f, a));
                break;
            case"ZYX":
                this._y = Math.asin(-rn(m, -1, 1)), Math.abs(m) < .9999999 ? (this._x = Math.atan2(g, x), this._z = Math.atan2(f, a)) : (this._x = 0, this._z = Math.atan2(-u, h));
                break;
            case"YZX":
                this._z = Math.asin(rn(f, -1, 1)), Math.abs(f) < .9999999 ? (this._x = Math.atan2(-d, h), this._y = Math.atan2(-m, a)) : (this._x = 0, this._y = Math.atan2(l, x));
                break;
            case"XZY":
                this._z = Math.asin(-rn(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(g, h), this._y = Math.atan2(l, a)) : (this._x = Math.atan2(-d, x), this._y = 0);
                break;
            default:
                console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
        }
        return this._order = e, i === !0 && this._onChangeCallback(), this
    }

    setFromQuaternion(t, e, i) {
        return cd.makeRotationFromQuaternion(t), this.setFromRotationMatrix(cd, e, i)
    }

    setFromVector3(t, e = this._order) {
        return this.set(t.x, t.y, t.z, e)
    }

    reorder(t) {
        return ud.setFromEuler(this), this.setFromQuaternion(ud, t)
    }

    equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
    }

    fromArray(t) {
        return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this
    }

    toArray(t = [], e = 0) {
        return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
    }

    _onChange(t) {
        return this._onChangeCallback = t, this
    }

    _onChangeCallback() {
    }

    * [Symbol.iterator]() {
        yield this._x, yield this._y, yield this._z, yield this._order
    }

    toVector3() {
        console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")
    }
}

ra.DefaultOrder = "XYZ";
ra.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];

class Hc {
    constructor() {
        this.mask = 1
    }

    set(t) {
        this.mask = (1 << t | 0) >>> 0
    }

    enable(t) {
        this.mask |= 1 << t | 0
    }

    enableAll() {
        this.mask = -1
    }

    toggle(t) {
        this.mask ^= 1 << t | 0
    }

    disable(t) {
        this.mask &= ~(1 << t | 0)
    }

    disableAll() {
        this.mask = 0
    }

    test(t) {
        return (this.mask & t.mask) !== 0
    }

    isEnabled(t) {
        return (this.mask & (1 << t | 0)) !== 0
    }
}

let qM = 0;
const hd = new F, ts = new Er, Ti = new Re, eo = new F, Ws = new F, XM = new F, YM = new Er, fd = new F(1, 0, 0),
    dd = new F(0, 1, 0), pd = new F(0, 0, 1), ZM = {type: "added"}, md = {type: "removed"};

class Ge extends Cr {
    constructor() {
        super(), this.isObject3D = !0, Object.defineProperty(this, "id", {value: qM++}), this.uuid = ea(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ge.DefaultUp.clone();
        const t = new F, e = new ra, i = new Er, s = new F(1, 1, 1);

        function a() {
            i.setFromEuler(e, !1)
        }

        function u() {
            e.setFromQuaternion(i, void 0, !1)
        }

        e._onChange(a), i._onChange(u), Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            rotation: {configurable: !0, enumerable: !0, value: e},
            quaternion: {configurable: !0, enumerable: !0, value: i},
            scale: {configurable: !0, enumerable: !0, value: s},
            modelViewMatrix: {value: new Re},
            normalMatrix: {value: new kn}
        }), this.matrix = new Re, this.matrixWorld = new Re, this.matrixAutoUpdate = Ge.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = Ge.DefaultMatrixWorldAutoUpdate, this.layers = new Hc, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
    }

    onBeforeRender() {
    }

    onAfterRender() {
    }

    applyMatrix4(t) {
        this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale)
    }

    applyQuaternion(t) {
        return this.quaternion.premultiply(t), this
    }

    setRotationFromAxisAngle(t, e) {
        this.quaternion.setFromAxisAngle(t, e)
    }

    setRotationFromEuler(t) {
        this.quaternion.setFromEuler(t, !0)
    }

    setRotationFromMatrix(t) {
        this.quaternion.setFromRotationMatrix(t)
    }

    setRotationFromQuaternion(t) {
        this.quaternion.copy(t)
    }

    rotateOnAxis(t, e) {
        return ts.setFromAxisAngle(t, e), this.quaternion.multiply(ts), this
    }

    rotateOnWorldAxis(t, e) {
        return ts.setFromAxisAngle(t, e), this.quaternion.premultiply(ts), this
    }

    rotateX(t) {
        return this.rotateOnAxis(fd, t)
    }

    rotateY(t) {
        return this.rotateOnAxis(dd, t)
    }

    rotateZ(t) {
        return this.rotateOnAxis(pd, t)
    }

    translateOnAxis(t, e) {
        return hd.copy(t).applyQuaternion(this.quaternion), this.position.add(hd.multiplyScalar(e)), this
    }

    translateX(t) {
        return this.translateOnAxis(fd, t)
    }

    translateY(t) {
        return this.translateOnAxis(dd, t)
    }

    translateZ(t) {
        return this.translateOnAxis(pd, t)
    }

    localToWorld(t) {
        return t.applyMatrix4(this.matrixWorld)
    }

    worldToLocal(t) {
        return t.applyMatrix4(Ti.copy(this.matrixWorld).invert())
    }

    lookAt(t, e, i) {
        t.isVector3 ? eo.copy(t) : eo.set(t, e, i);
        const s = this.parent;
        this.updateWorldMatrix(!0, !1), Ws.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ti.lookAt(Ws, eo, this.up) : Ti.lookAt(eo, Ws, this.up), this.quaternion.setFromRotationMatrix(Ti), s && (Ti.extractRotation(s.matrixWorld), ts.setFromRotationMatrix(Ti), this.quaternion.premultiply(ts.invert()))
    }

    add(t) {
        if (arguments.length > 1) {
            for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
            return this
        }
        return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.parent !== null && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(ZM)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
    }

    remove(t) {
        if (arguments.length > 1) {
            for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
            return this
        }
        const e = this.children.indexOf(t);
        return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(md)), this
    }

    removeFromParent() {
        const t = this.parent;
        return t !== null && t.remove(this), this
    }

    clear() {
        for (let t = 0; t < this.children.length; t++) {
            const e = this.children[t];
            e.parent = null, e.dispatchEvent(md)
        }
        return this.children.length = 0, this
    }

    attach(t) {
        return this.updateWorldMatrix(!0, !1), Ti.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), Ti.multiply(t.parent.matrixWorld)), t.applyMatrix4(Ti), this.add(t), t.updateWorldMatrix(!1, !0), this
    }

    getObjectById(t) {
        return this.getObjectByProperty("id", t)
    }

    getObjectByName(t) {
        return this.getObjectByProperty("name", t)
    }

    getObjectByProperty(t, e) {
        if (this[t] === e) return this;
        for (let i = 0, s = this.children.length; i < s; i++) {
            const u = this.children[i].getObjectByProperty(t, e);
            if (u !== void 0) return u
        }
    }

    getWorldPosition(t) {
        return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
    }

    getWorldQuaternion(t) {
        return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ws, t, XM), t
    }

    getWorldScale(t) {
        return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ws, YM, t), t
    }

    getWorldDirection(t) {
        this.updateWorldMatrix(!0, !1);
        const e = this.matrixWorld.elements;
        return t.set(e[8], e[9], e[10]).normalize()
    }

    raycast() {
    }

    traverse(t) {
        t(this);
        const e = this.children;
        for (let i = 0, s = e.length; i < s; i++) e[i].traverse(t)
    }

    traverseVisible(t) {
        if (this.visible === !1) return;
        t(this);
        const e = this.children;
        for (let i = 0, s = e.length; i < s; i++) e[i].traverseVisible(t)
    }

    traverseAncestors(t) {
        const e = this.parent;
        e !== null && (t(e), e.traverseAncestors(t))
    }

    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
    }

    updateMatrixWorld(t) {
        this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
        const e = this.children;
        for (let i = 0, s = e.length; i < s; i++) {
            const a = e[i];
            (a.matrixWorldAutoUpdate === !0 || t === !0) && a.updateMatrixWorld(t)
        }
    }

    updateWorldMatrix(t, e) {
        const i = this.parent;
        if (t === !0 && i !== null && i.matrixWorldAutoUpdate === !0 && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), e === !0) {
            const s = this.children;
            for (let a = 0, u = s.length; a < u; a++) {
                const l = s[a];
                l.matrixWorldAutoUpdate === !0 && l.updateWorldMatrix(!1, !0)
            }
        }
    }

    toJSON(t) {
        const e = t === void 0 || typeof t == "string", i = {};
        e && (t = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
        }, i.metadata = {version: 4.5, type: "Object", generator: "Object3D.toJSON"});
        const s = {};
        s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON()));

        function a(l, f) {
            return l[f.uuid] === void 0 && (l[f.uuid] = f.toJSON(t)), f.uuid
        }

        if (this.isScene) this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(t).uuid); else if (this.isMesh || this.isLine || this.isPoints) {
            s.geometry = a(t.geometries, this.geometry);
            const l = this.geometry.parameters;
            if (l !== void 0 && l.shapes !== void 0) {
                const f = l.shapes;
                if (Array.isArray(f)) for (let h = 0, d = f.length; h < d; h++) {
                    const m = f[h];
                    a(t.shapes, m)
                } else a(t.shapes, f)
            }
        }
        if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (a(t.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
            const l = [];
            for (let f = 0, h = this.material.length; f < h; f++) l.push(a(t.materials, this.material[f]));
            s.material = l
        } else s.material = a(t.materials, this.material);
        if (this.children.length > 0) {
            s.children = [];
            for (let l = 0; l < this.children.length; l++) s.children.push(this.children[l].toJSON(t).object)
        }
        if (this.animations.length > 0) {
            s.animations = [];
            for (let l = 0; l < this.animations.length; l++) {
                const f = this.animations[l];
                s.animations.push(a(t.animations, f))
            }
        }
        if (e) {
            const l = u(t.geometries), f = u(t.materials), h = u(t.textures), d = u(t.images), m = u(t.shapes),
                g = u(t.skeletons), x = u(t.animations), M = u(t.nodes);
            l.length > 0 && (i.geometries = l), f.length > 0 && (i.materials = f), h.length > 0 && (i.textures = h), d.length > 0 && (i.images = d), m.length > 0 && (i.shapes = m), g.length > 0 && (i.skeletons = g), x.length > 0 && (i.animations = x), M.length > 0 && (i.nodes = M)
        }
        return i.object = s, i;

        function u(l) {
            const f = [];
            for (const h in l) {
                const d = l[h];
                delete d.metadata, f.push(d)
            }
            return f
        }
    }

    clone(t) {
        return new this.constructor().copy(this, t)
    }

    copy(t, e = !0) {
        if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0) for (let i = 0; i < t.children.length; i++) {
            const s = t.children[i];
            this.add(s.clone())
        }
        return this
    }
}

Ge.DefaultUp = new F(0, 1, 0);
Ge.DefaultMatrixAutoUpdate = !0;
Ge.DefaultMatrixWorldAutoUpdate = !0;
const ni = new F, Ei = new F, oc = new F, Ai = new F, es = new F, ns = new F, gd = new F, lc = new F, cc = new F,
    uc = new F;

class Pi {
    constructor(t = new F, e = new F, i = new F) {
        this.a = t, this.b = e, this.c = i
    }

    static getNormal(t, e, i, s) {
        s.subVectors(i, e), ni.subVectors(t, e), s.cross(ni);
        const a = s.lengthSq();
        return a > 0 ? s.multiplyScalar(1 / Math.sqrt(a)) : s.set(0, 0, 0)
    }

    static getBarycoord(t, e, i, s, a) {
        ni.subVectors(s, e), Ei.subVectors(i, e), oc.subVectors(t, e);
        const u = ni.dot(ni), l = ni.dot(Ei), f = ni.dot(oc), h = Ei.dot(Ei), d = Ei.dot(oc), m = u * h - l * l;
        if (m === 0) return a.set(-2, -1, -1);
        const g = 1 / m, x = (h * f - l * d) * g, M = (u * d - l * f) * g;
        return a.set(1 - x - M, M, x)
    }

    static containsPoint(t, e, i, s) {
        return this.getBarycoord(t, e, i, s, Ai), Ai.x >= 0 && Ai.y >= 0 && Ai.x + Ai.y <= 1
    }

    static getUV(t, e, i, s, a, u, l, f) {
        return this.getBarycoord(t, e, i, s, Ai), f.set(0, 0), f.addScaledVector(a, Ai.x), f.addScaledVector(u, Ai.y), f.addScaledVector(l, Ai.z), f
    }

    static isFrontFacing(t, e, i, s) {
        return ni.subVectors(i, e), Ei.subVectors(t, e), ni.cross(Ei).dot(s) < 0
    }

    set(t, e, i) {
        return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
    }

    setFromPointsAndIndices(t, e, i, s) {
        return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[s]), this
    }

    setFromAttributeAndIndices(t, e, i, s) {
        return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, i), this.c.fromBufferAttribute(t, s), this
    }

    clone() {
        return new this.constructor().copy(this)
    }

    copy(t) {
        return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
    }

    getArea() {
        return ni.subVectors(this.c, this.b), Ei.subVectors(this.a, this.b), ni.cross(Ei).length() * .5
    }

    getMidpoint(t) {
        return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }

    getNormal(t) {
        return Pi.getNormal(this.a, this.b, this.c, t)
    }

    getPlane(t) {
        return t.setFromCoplanarPoints(this.a, this.b, this.c)
    }

    getBarycoord(t, e) {
        return Pi.getBarycoord(t, this.a, this.b, this.c, e)
    }

    getUV(t, e, i, s, a) {
        return Pi.getUV(t, this.a, this.b, this.c, e, i, s, a)
    }

    containsPoint(t) {
        return Pi.containsPoint(t, this.a, this.b, this.c)
    }

    isFrontFacing(t) {
        return Pi.isFrontFacing(this.a, this.b, this.c, t)
    }

    intersectsBox(t) {
        return t.intersectsTriangle(this)
    }

    closestPointToPoint(t, e) {
        const i = this.a, s = this.b, a = this.c;
        let u, l;
        es.subVectors(s, i), ns.subVectors(a, i), lc.subVectors(t, i);
        const f = es.dot(lc), h = ns.dot(lc);
        if (f <= 0 && h <= 0) return e.copy(i);
        cc.subVectors(t, s);
        const d = es.dot(cc), m = ns.dot(cc);
        if (d >= 0 && m <= d) return e.copy(s);
        const g = f * m - d * h;
        if (g <= 0 && f >= 0 && d <= 0) return u = f / (f - d), e.copy(i).addScaledVector(es, u);
        uc.subVectors(t, a);
        const x = es.dot(uc), M = ns.dot(uc);
        if (M >= 0 && x <= M) return e.copy(a);
        const v = x * h - f * M;
        if (v <= 0 && h >= 0 && M <= 0) return l = h / (h - M), e.copy(i).addScaledVector(ns, l);
        const _ = d * M - x * m;
        if (_ <= 0 && m - d >= 0 && x - M >= 0) return gd.subVectors(a, s), l = (m - d) / (m - d + (x - M)), e.copy(s).addScaledVector(gd, l);
        const S = 1 / (_ + v + g);
        return u = v * S, l = g * S, e.copy(i).addScaledVector(es, u).addScaledVector(ns, l)
    }

    equals(t) {
        return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
    }
}

let $M = 0;

class Oi extends Cr {
    constructor() {
        super(), this.isMaterial = !0, Object.defineProperty(this, "id", {value: $M++}), this.uuid = ea(), this.name = "", this.type = "Material", this.blending = hs, this.side = Sr, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = cp, this.blendDst = up, this.blendEquation = cs, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Dc, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = zM, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Zl, this.stencilZFail = Zl, this.stencilZPass = Zl, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
    }

    get alphaTest() {
        return this._alphaTest
    }

    set alphaTest(t) {
        this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t
    }

    onBuild() {
    }

    onBeforeRender() {
    }

    onBeforeCompile() {
    }

    customProgramCacheKey() {
        return this.onBeforeCompile.toString()
    }

    setValues(t) {
        if (t !== void 0) for (const e in t) {
            const i = t[e];
            if (i === void 0) {
                console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                continue
            }
            const s = this[e];
            if (s === void 0) {
                console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.");
                continue
            }
            s && s.isColor ? s.set(i) : s && s.isVector3 && i && i.isVector3 ? s.copy(i) : this[e] = i
        }
    }

    toJSON(t) {
        const e = t === void 0 || typeof t == "string";
        e && (t = {textures: {}, images: {}});
        const i = {metadata: {version: 4.5, type: "Material", generator: "Material.toJSON"}};
        i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== hs && (i.blending = this.blending), this.side !== Sr && (i.side = this.side), this.vertexColors && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, i.colorWrite = this.colorWrite, i.stencilWrite = this.stencilWrite, i.stencilWriteMask = this.stencilWriteMask, i.stencilFunc = this.stencilFunc, i.stencilRef = this.stencilRef, i.stencilFuncMask = this.stencilFuncMask, i.stencilFail = this.stencilFail, i.stencilZFail = this.stencilZFail, i.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === !0 && (i.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (i.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (i.flatShading = this.flatShading), this.visible === !1 && (i.visible = !1), this.toneMapped === !1 && (i.toneMapped = !1), this.fog === !1 && (i.fog = !1), JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData);

        function s(a) {
            const u = [];
            for (const l in a) {
                const f = a[l];
                delete f.metadata, u.push(f)
            }
            return u
        }

        if (e) {
            const a = s(t.textures), u = s(t.images);
            a.length > 0 && (i.textures = a), u.length > 0 && (i.images = u)
        }
        return i
    }

    clone() {
        return new this.constructor().copy(this)
    }

    copy(t) {
        this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
        const e = t.clippingPlanes;
        let i = null;
        if (e !== null) {
            const s = e.length;
            i = new Array(s);
            for (let a = 0; a !== s; ++a) i[a] = e[a].clone()
        }
        return this.clippingPlanes = i, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this
    }

    dispose() {
        this.dispatchEvent({type: "dispose"})
    }

    set needsUpdate(t) {
        t === !0 && this.version++
    }
}

class qc extends Oi {
    constructor(t) {
        super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new ie(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = kc, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t)
    }

    copy(t) {
        return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this
    }
}

const Be = new F, no = new Lt;

class ui {
    constructor(t, e, i) {
        if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = i === !0, this.usage = rd, this.updateRange = {
            offset: 0,
            count: -1
        }, this.version = 0
    }

    onUploadCallback() {
    }

    set needsUpdate(t) {
        t === !0 && this.version++
    }

    setUsage(t) {
        return this.usage = t, this
    }

    copy(t) {
        return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this
    }

    copyAt(t, e, i) {
        t *= this.itemSize, i *= e.itemSize;
        for (let s = 0, a = this.itemSize; s < a; s++) this.array[t + s] = e.array[i + s];
        return this
    }

    copyArray(t) {
        return this.array.set(t), this
    }

    applyMatrix3(t) {
        if (this.itemSize === 2) for (let e = 0, i = this.count; e < i; e++) no.fromBufferAttribute(this, e), no.applyMatrix3(t), this.setXY(e, no.x, no.y); else if (this.itemSize === 3) for (let e = 0, i = this.count; e < i; e++) Be.fromBufferAttribute(this, e), Be.applyMatrix3(t), this.setXYZ(e, Be.x, Be.y, Be.z);
        return this
    }

    applyMatrix4(t) {
        for (let e = 0, i = this.count; e < i; e++) Be.fromBufferAttribute(this, e), Be.applyMatrix4(t), this.setXYZ(e, Be.x, Be.y, Be.z);
        return this
    }

    applyNormalMatrix(t) {
        for (let e = 0, i = this.count; e < i; e++) Be.fromBufferAttribute(this, e), Be.applyNormalMatrix(t), this.setXYZ(e, Be.x, Be.y, Be.z);
        return this
    }

    transformDirection(t) {
        for (let e = 0, i = this.count; e < i; e++) Be.fromBufferAttribute(this, e), Be.transformDirection(t), this.setXYZ(e, Be.x, Be.y, Be.z);
        return this
    }

    set(t, e = 0) {
        return this.array.set(t, e), this
    }

    getX(t) {
        let e = this.array[t * this.itemSize];
        return this.normalized && (e = Ya(e, this.array)), e
    }

    setX(t, e) {
        return this.normalized && (e = Tn(e, this.array)), this.array[t * this.itemSize] = e, this
    }

    getY(t) {
        let e = this.array[t * this.itemSize + 1];
        return this.normalized && (e = Ya(e, this.array)), e
    }

    setY(t, e) {
        return this.normalized && (e = Tn(e, this.array)), this.array[t * this.itemSize + 1] = e, this
    }

    getZ(t) {
        let e = this.array[t * this.itemSize + 2];
        return this.normalized && (e = Ya(e, this.array)), e
    }

    setZ(t, e) {
        return this.normalized && (e = Tn(e, this.array)), this.array[t * this.itemSize + 2] = e, this
    }

    getW(t) {
        let e = this.array[t * this.itemSize + 3];
        return this.normalized && (e = Ya(e, this.array)), e
    }

    setW(t, e) {
        return this.normalized && (e = Tn(e, this.array)), this.array[t * this.itemSize + 3] = e, this
    }

    setXY(t, e, i) {
        return t *= this.itemSize, this.normalized && (e = Tn(e, this.array), i = Tn(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this
    }

    setXYZ(t, e, i, s) {
        return t *= this.itemSize, this.normalized && (e = Tn(e, this.array), i = Tn(i, this.array), s = Tn(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = s, this
    }

    setXYZW(t, e, i, s, a) {
        return t *= this.itemSize, this.normalized && (e = Tn(e, this.array), i = Tn(i, this.array), s = Tn(s, this.array), a = Tn(a, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = s, this.array[t + 3] = a, this
    }

    onUpload(t) {
        return this.onUploadCallback = t, this
    }

    clone() {
        return new this.constructor(this.array, this.itemSize).copy(this)
    }

    toJSON() {
        const t = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized
        };
        return this.name !== "" && (t.name = this.name), this.usage !== rd && (t.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (t.updateRange = this.updateRange), t
    }

    copyColorsArray() {
        console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")
    }

    copyVector2sArray() {
        console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")
    }

    copyVector3sArray() {
        console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")
    }

    copyVector4sArray() {
        console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")
    }
}

class xp extends ui {
    constructor(t, e, i) {
        super(new Uint16Array(t), e, i)
    }
}

class yp extends ui {
    constructor(t, e, i) {
        super(new Uint32Array(t), e, i)
    }
}

class _e extends ui {
    constructor(t, e, i) {
        super(new Float32Array(t), e, i)
    }
}

let JM = 0;
const zn = new Re, hc = new Ge, is = new F, An = new na, Vs = new na, $e = new F;

class sn extends Cr {
    constructor() {
        super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {value: JM++}), this.uuid = ea(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }, this.userData = {}
    }

    getIndex() {
        return this.index
    }

    setIndex(t) {
        return Array.isArray(t) ? this.index = new (pp(t) ? yp : xp)(t, 1) : this.index = t, this
    }

    getAttribute(t) {
        return this.attributes[t]
    }

    setAttribute(t, e) {
        return this.attributes[t] = e, this
    }

    deleteAttribute(t) {
        return delete this.attributes[t], this
    }

    hasAttribute(t) {
        return this.attributes[t] !== void 0
    }

    addGroup(t, e, i = 0) {
        this.groups.push({start: t, count: e, materialIndex: i})
    }

    clearGroups() {
        this.groups = []
    }

    setDrawRange(t, e) {
        this.drawRange.start = t, this.drawRange.count = e
    }

    applyMatrix4(t) {
        const e = this.attributes.position;
        e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0);
        const i = this.attributes.normal;
        if (i !== void 0) {
            const a = new kn().getNormalMatrix(t);
            i.applyNormalMatrix(a), i.needsUpdate = !0
        }
        const s = this.attributes.tangent;
        return s !== void 0 && (s.transformDirection(t), s.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this
    }

    applyQuaternion(t) {
        return zn.makeRotationFromQuaternion(t), this.applyMatrix4(zn), this
    }

    rotateX(t) {
        return zn.makeRotationX(t), this.applyMatrix4(zn), this
    }

    rotateY(t) {
        return zn.makeRotationY(t), this.applyMatrix4(zn), this
    }

    rotateZ(t) {
        return zn.makeRotationZ(t), this.applyMatrix4(zn), this
    }

    translate(t, e, i) {
        return zn.makeTranslation(t, e, i), this.applyMatrix4(zn), this
    }

    scale(t, e, i) {
        return zn.makeScale(t, e, i), this.applyMatrix4(zn), this
    }

    lookAt(t) {
        return hc.lookAt(t), hc.updateMatrix(), this.applyMatrix4(hc.matrix), this
    }

    center() {
        return this.computeBoundingBox(), this.boundingBox.getCenter(is).negate(), this.translate(is.x, is.y, is.z), this
    }

    setFromPoints(t) {
        const e = [];
        for (let i = 0, s = t.length; i < s; i++) {
            const a = t[i];
            e.push(a.x, a.y, a.z || 0)
        }
        return this.setAttribute("position", new _e(e, 3)), this
    }

    computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new na);
        const t = this.attributes.position, e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new F(-1 / 0, -1 / 0, -1 / 0), new F(1 / 0, 1 / 0, 1 / 0));
            return
        }
        if (t !== void 0) {
            if (this.boundingBox.setFromBufferAttribute(t), e) for (let i = 0, s = e.length; i < s; i++) {
                const a = e[i];
                An.setFromBufferAttribute(a), this.morphTargetsRelative ? ($e.addVectors(this.boundingBox.min, An.min), this.boundingBox.expandByPoint($e), $e.addVectors(this.boundingBox.max, An.max), this.boundingBox.expandByPoint($e)) : (this.boundingBox.expandByPoint(An.min), this.boundingBox.expandByPoint(An.max))
            }
        } else this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }

    computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new ia);
        const t = this.attributes.position, e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new F, 1 / 0);
            return
        }
        if (t) {
            const i = this.boundingSphere.center;
            if (An.setFromBufferAttribute(t), e) for (let a = 0, u = e.length; a < u; a++) {
                const l = e[a];
                Vs.setFromBufferAttribute(l), this.morphTargetsRelative ? ($e.addVectors(An.min, Vs.min), An.expandByPoint($e), $e.addVectors(An.max, Vs.max), An.expandByPoint($e)) : (An.expandByPoint(Vs.min), An.expandByPoint(Vs.max))
            }
            An.getCenter(i);
            let s = 0;
            for (let a = 0, u = t.count; a < u; a++) $e.fromBufferAttribute(t, a), s = Math.max(s, i.distanceToSquared($e));
            if (e) for (let a = 0, u = e.length; a < u; a++) {
                const l = e[a], f = this.morphTargetsRelative;
                for (let h = 0, d = l.count; h < d; h++) $e.fromBufferAttribute(l, h), f && (is.fromBufferAttribute(t, h), $e.add(is)), s = Math.max(s, i.distanceToSquared($e))
            }
            this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
    }

    computeTangents() {
        const t = this.index, e = this.attributes;
        if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
            console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            return
        }
        const i = t.array, s = e.position.array, a = e.normal.array, u = e.uv.array, l = s.length / 3;
        this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new ui(new Float32Array(4 * l), 4));
        const f = this.getAttribute("tangent").array, h = [], d = [];
        for (let k = 0; k < l; k++) h[k] = new F, d[k] = new F;
        const m = new F, g = new F, x = new F, M = new Lt, v = new Lt, _ = new Lt, S = new F, L = new F;

        function T(k, lt, vt) {
            m.fromArray(s, k * 3), g.fromArray(s, lt * 3), x.fromArray(s, vt * 3), M.fromArray(u, k * 2), v.fromArray(u, lt * 2), _.fromArray(u, vt * 2), g.sub(m), x.sub(m), v.sub(M), _.sub(M);
            const j = 1 / (v.x * _.y - _.x * v.y);
            !isFinite(j) || (S.copy(g).multiplyScalar(_.y).addScaledVector(x, -v.y).multiplyScalar(j), L.copy(x).multiplyScalar(v.x).addScaledVector(g, -_.x).multiplyScalar(j), h[k].add(S), h[lt].add(S), h[vt].add(S), d[k].add(L), d[lt].add(L), d[vt].add(L))
        }

        let A = this.groups;
        A.length === 0 && (A = [{start: 0, count: i.length}]);
        for (let k = 0, lt = A.length; k < lt; ++k) {
            const vt = A[k], j = vt.start, X = vt.count;
            for (let ot = j, dt = j + X; ot < dt; ot += 3) T(i[ot + 0], i[ot + 1], i[ot + 2])
        }
        const E = new F, D = new F, B = new F, w = new F;

        function N(k) {
            B.fromArray(a, k * 3), w.copy(B);
            const lt = h[k];
            E.copy(lt), E.sub(B.multiplyScalar(B.dot(lt))).normalize(), D.crossVectors(w, lt);
            const j = D.dot(d[k]) < 0 ? -1 : 1;
            f[k * 4] = E.x, f[k * 4 + 1] = E.y, f[k * 4 + 2] = E.z, f[k * 4 + 3] = j
        }

        for (let k = 0, lt = A.length; k < lt; ++k) {
            const vt = A[k], j = vt.start, X = vt.count;
            for (let ot = j, dt = j + X; ot < dt; ot += 3) N(i[ot + 0]), N(i[ot + 1]), N(i[ot + 2])
        }
    }

    computeVertexNormals() {
        const t = this.index, e = this.getAttribute("position");
        if (e !== void 0) {
            let i = this.getAttribute("normal");
            if (i === void 0) i = new ui(new Float32Array(e.count * 3), 3), this.setAttribute("normal", i); else for (let g = 0, x = i.count; g < x; g++) i.setXYZ(g, 0, 0, 0);
            const s = new F, a = new F, u = new F, l = new F, f = new F, h = new F, d = new F, m = new F;
            if (t) for (let g = 0, x = t.count; g < x; g += 3) {
                const M = t.getX(g + 0), v = t.getX(g + 1), _ = t.getX(g + 2);
                s.fromBufferAttribute(e, M), a.fromBufferAttribute(e, v), u.fromBufferAttribute(e, _), d.subVectors(u, a), m.subVectors(s, a), d.cross(m), l.fromBufferAttribute(i, M), f.fromBufferAttribute(i, v), h.fromBufferAttribute(i, _), l.add(d), f.add(d), h.add(d), i.setXYZ(M, l.x, l.y, l.z), i.setXYZ(v, f.x, f.y, f.z), i.setXYZ(_, h.x, h.y, h.z)
            } else for (let g = 0, x = e.count; g < x; g += 3) s.fromBufferAttribute(e, g + 0), a.fromBufferAttribute(e, g + 1), u.fromBufferAttribute(e, g + 2), d.subVectors(u, a), m.subVectors(s, a), d.cross(m), i.setXYZ(g + 0, d.x, d.y, d.z), i.setXYZ(g + 1, d.x, d.y, d.z), i.setXYZ(g + 2, d.x, d.y, d.z);
            this.normalizeNormals(), i.needsUpdate = !0
        }
    }

    merge() {
        return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this
    }

    normalizeNormals() {
        const t = this.attributes.normal;
        for (let e = 0, i = t.count; e < i; e++) $e.fromBufferAttribute(t, e), $e.normalize(), t.setXYZ(e, $e.x, $e.y, $e.z)
    }

    toNonIndexed() {
        function t(l, f) {
            const h = l.array, d = l.itemSize, m = l.normalized, g = new h.constructor(f.length * d);
            let x = 0, M = 0;
            for (let v = 0, _ = f.length; v < _; v++) {
                l.isInterleavedBufferAttribute ? x = f[v] * l.data.stride + l.offset : x = f[v] * d;
                for (let S = 0; S < d; S++) g[M++] = h[x++]
            }
            return new ui(g, d, m)
        }

        if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
        const e = new sn, i = this.index.array, s = this.attributes;
        for (const l in s) {
            const f = s[l], h = t(f, i);
            e.setAttribute(l, h)
        }
        const a = this.morphAttributes;
        for (const l in a) {
            const f = [], h = a[l];
            for (let d = 0, m = h.length; d < m; d++) {
                const g = h[d], x = t(g, i);
                f.push(x)
            }
            e.morphAttributes[l] = f
        }
        e.morphTargetsRelative = this.morphTargetsRelative;
        const u = this.groups;
        for (let l = 0, f = u.length; l < f; l++) {
            const h = u[l];
            e.addGroup(h.start, h.count, h.materialIndex)
        }
        return e
    }

    toJSON() {
        const t = {metadata: {version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON"}};
        if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
            const f = this.parameters;
            for (const h in f) f[h] !== void 0 && (t[h] = f[h]);
            return t
        }
        t.data = {attributes: {}};
        const e = this.index;
        e !== null && (t.data.index = {type: e.array.constructor.name, array: Array.prototype.slice.call(e.array)});
        const i = this.attributes;
        for (const f in i) {
            const h = i[f];
            t.data.attributes[f] = h.toJSON(t.data)
        }
        const s = {};
        let a = !1;
        for (const f in this.morphAttributes) {
            const h = this.morphAttributes[f], d = [];
            for (let m = 0, g = h.length; m < g; m++) {
                const x = h[m];
                d.push(x.toJSON(t.data))
            }
            d.length > 0 && (s[f] = d, a = !0)
        }
        a && (t.data.morphAttributes = s, t.data.morphTargetsRelative = this.morphTargetsRelative);
        const u = this.groups;
        u.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(u)));
        const l = this.boundingSphere;
        return l !== null && (t.data.boundingSphere = {center: l.center.toArray(), radius: l.radius}), t
    }

    clone() {
        return new this.constructor().copy(this)
    }

    copy(t) {
        this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
        const e = {};
        this.name = t.name;
        const i = t.index;
        i !== null && this.setIndex(i.clone(e));
        const s = t.attributes;
        for (const h in s) {
            const d = s[h];
            this.setAttribute(h, d.clone(e))
        }
        const a = t.morphAttributes;
        for (const h in a) {
            const d = [], m = a[h];
            for (let g = 0, x = m.length; g < x; g++) d.push(m[g].clone(e));
            this.morphAttributes[h] = d
        }
        this.morphTargetsRelative = t.morphTargetsRelative;
        const u = t.groups;
        for (let h = 0, d = u.length; h < d; h++) {
            const m = u[h];
            this.addGroup(m.start, m.count, m.materialIndex)
        }
        const l = t.boundingBox;
        l !== null && (this.boundingBox = l.clone());
        const f = t.boundingSphere;
        return f !== null && (this.boundingSphere = f.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, t.parameters !== void 0 && (this.parameters = Object.assign({}, t.parameters)), this
    }

    dispose() {
        this.dispatchEvent({type: "dispose"})
    }
}

const _d = new Re, rs = new Ao, fc = new ia, ji = new F, Ki = new F, Qi = new F, dc = new F, pc = new F, mc = new F,
    io = new F, ro = new F, so = new F, ao = new Lt, oo = new Lt, lo = new Lt, gc = new F, co = new F;

class Hn extends Ge {
    constructor(t = new sn, e = new qc) {
        super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets()
    }

    copy(t, e) {
        return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this
    }

    updateMorphTargets() {
        const e = this.geometry.morphAttributes, i = Object.keys(e);
        if (i.length > 0) {
            const s = e[i[0]];
            if (s !== void 0) {
                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (let a = 0, u = s.length; a < u; a++) {
                    const l = s[a].name || String(a);
                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[l] = a
                }
            }
        }
    }

    raycast(t, e) {
        const i = this.geometry, s = this.material, a = this.matrixWorld;
        if (s === void 0 || (i.boundingSphere === null && i.computeBoundingSphere(), fc.copy(i.boundingSphere), fc.applyMatrix4(a), t.ray.intersectsSphere(fc) === !1) || (_d.copy(a).invert(), rs.copy(t.ray).applyMatrix4(_d), i.boundingBox !== null && rs.intersectsBox(i.boundingBox) === !1)) return;
        let u;
        const l = i.index, f = i.attributes.position, h = i.morphAttributes.position, d = i.morphTargetsRelative,
            m = i.attributes.uv, g = i.attributes.uv2, x = i.groups, M = i.drawRange;
        if (l !== null) if (Array.isArray(s)) for (let v = 0, _ = x.length; v < _; v++) {
            const S = x[v], L = s[S.materialIndex], T = Math.max(S.start, M.start),
                A = Math.min(l.count, Math.min(S.start + S.count, M.start + M.count));
            for (let E = T, D = A; E < D; E += 3) {
                const B = l.getX(E), w = l.getX(E + 1), N = l.getX(E + 2);
                u = uo(this, L, t, rs, f, h, d, m, g, B, w, N), u && (u.faceIndex = Math.floor(E / 3), u.face.materialIndex = S.materialIndex, e.push(u))
            }
        } else {
            const v = Math.max(0, M.start), _ = Math.min(l.count, M.start + M.count);
            for (let S = v, L = _; S < L; S += 3) {
                const T = l.getX(S), A = l.getX(S + 1), E = l.getX(S + 2);
                u = uo(this, s, t, rs, f, h, d, m, g, T, A, E), u && (u.faceIndex = Math.floor(S / 3), e.push(u))
            }
        } else if (f !== void 0) if (Array.isArray(s)) for (let v = 0, _ = x.length; v < _; v++) {
            const S = x[v], L = s[S.materialIndex], T = Math.max(S.start, M.start),
                A = Math.min(f.count, Math.min(S.start + S.count, M.start + M.count));
            for (let E = T, D = A; E < D; E += 3) {
                const B = E, w = E + 1, N = E + 2;
                u = uo(this, L, t, rs, f, h, d, m, g, B, w, N), u && (u.faceIndex = Math.floor(E / 3), u.face.materialIndex = S.materialIndex, e.push(u))
            }
        } else {
            const v = Math.max(0, M.start), _ = Math.min(f.count, M.start + M.count);
            for (let S = v, L = _; S < L; S += 3) {
                const T = S, A = S + 1, E = S + 2;
                u = uo(this, s, t, rs, f, h, d, m, g, T, A, E), u && (u.faceIndex = Math.floor(S / 3), e.push(u))
            }
        }
    }
}

function jM(c, t, e, i, s, a, u, l) {
    let f;
    if (t.side === Ln ? f = i.intersectTriangle(u, a, s, !0, l) : f = i.intersectTriangle(s, a, u, t.side !== Ri, l), f === null) return null;
    co.copy(l), co.applyMatrix4(c.matrixWorld);
    const h = e.ray.origin.distanceTo(co);
    return h < e.near || h > e.far ? null : {distance: h, point: co.clone(), object: c}
}

function uo(c, t, e, i, s, a, u, l, f, h, d, m) {
    ji.fromBufferAttribute(s, h), Ki.fromBufferAttribute(s, d), Qi.fromBufferAttribute(s, m);
    const g = c.morphTargetInfluences;
    if (a && g) {
        io.set(0, 0, 0), ro.set(0, 0, 0), so.set(0, 0, 0);
        for (let M = 0, v = a.length; M < v; M++) {
            const _ = g[M], S = a[M];
            _ !== 0 && (dc.fromBufferAttribute(S, h), pc.fromBufferAttribute(S, d), mc.fromBufferAttribute(S, m), u ? (io.addScaledVector(dc, _), ro.addScaledVector(pc, _), so.addScaledVector(mc, _)) : (io.addScaledVector(dc.sub(ji), _), ro.addScaledVector(pc.sub(Ki), _), so.addScaledVector(mc.sub(Qi), _)))
        }
        ji.add(io), Ki.add(ro), Qi.add(so)
    }
    c.isSkinnedMesh && (c.boneTransform(h, ji), c.boneTransform(d, Ki), c.boneTransform(m, Qi));
    const x = jM(c, t, e, i, ji, Ki, Qi, gc);
    if (x) {
        l && (ao.fromBufferAttribute(l, h), oo.fromBufferAttribute(l, d), lo.fromBufferAttribute(l, m), x.uv = Pi.getUV(gc, ji, Ki, Qi, ao, oo, lo, new Lt)), f && (ao.fromBufferAttribute(f, h), oo.fromBufferAttribute(f, d), lo.fromBufferAttribute(f, m), x.uv2 = Pi.getUV(gc, ji, Ki, Qi, ao, oo, lo, new Lt));
        const M = {a: h, b: d, c: m, normal: new F, materialIndex: 0};
        Pi.getNormal(ji, Ki, Qi, M.normal), x.face = M
    }
    return x
}

class Lr extends sn {
    constructor(t = 1, e = 1, i = 1, s = 1, a = 1, u = 1) {
        super(), this.type = "BoxGeometry", this.parameters = {
            width: t,
            height: e,
            depth: i,
            widthSegments: s,
            heightSegments: a,
            depthSegments: u
        };
        const l = this;
        s = Math.floor(s), a = Math.floor(a), u = Math.floor(u);
        const f = [], h = [], d = [], m = [];
        let g = 0, x = 0;
        M("z", "y", "x", -1, -1, i, e, t, u, a, 0), M("z", "y", "x", 1, -1, i, e, -t, u, a, 1), M("x", "z", "y", 1, 1, t, i, e, s, u, 2), M("x", "z", "y", 1, -1, t, i, -e, s, u, 3), M("x", "y", "z", 1, -1, t, e, i, s, a, 4), M("x", "y", "z", -1, -1, t, e, -i, s, a, 5), this.setIndex(f), this.setAttribute("position", new _e(h, 3)), this.setAttribute("normal", new _e(d, 3)), this.setAttribute("uv", new _e(m, 2));

        function M(v, _, S, L, T, A, E, D, B, w, N) {
            const k = A / B, lt = E / w, vt = A / 2, j = E / 2, X = D / 2, ot = B + 1, dt = w + 1;
            let ut = 0, tt = 0;
            const Y = new F;
            for (let J = 0; J < dt; J++) {
                const ht = J * lt - j;
                for (let gt = 0; gt < ot; gt++) {
                    const mt = gt * k - vt;
                    Y[v] = mt * L, Y[_] = ht * T, Y[S] = X, h.push(Y.x, Y.y, Y.z), Y[v] = 0, Y[_] = 0, Y[S] = D > 0 ? 1 : -1, d.push(Y.x, Y.y, Y.z), m.push(gt / B), m.push(1 - J / w), ut += 1
                }
            }
            for (let J = 0; J < w; J++) for (let ht = 0; ht < B; ht++) {
                const gt = g + ht + ot * J, mt = g + ht + ot * (J + 1), Ct = g + (ht + 1) + ot * (J + 1),
                    Ut = g + (ht + 1) + ot * J;
                f.push(gt, mt, Ut), f.push(mt, Ct, Ut), tt += 6
            }
            l.addGroup(x, tt, N), x += tt, g += ut
        }
    }

    static fromJSON(t) {
        return new Lr(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments)
    }
}

function vs(c) {
    const t = {};
    for (const e in c) {
        t[e] = {};
        for (const i in c[e]) {
            const s = c[e][i];
            s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? t[e][i] = s.clone() : Array.isArray(s) ? t[e][i] = s.slice() : t[e][i] = s
        }
    }
    return t
}

function hn(c) {
    const t = {};
    for (let e = 0; e < c.length; e++) {
        const i = vs(c[e]);
        for (const s in i) t[s] = i[s]
    }
    return t
}

function KM(c) {
    const t = [];
    for (let e = 0; e < c.length; e++) t.push(c[e].clone());
    return t
}

const QM = {clone: vs, merge: hn};
var t1 = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, e1 = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;

class Ar extends Oi {
    constructor(t) {
        super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = t1, this.fragmentShader = e1, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t)
    }

    copy(t) {
        return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = vs(t.uniforms), this.uniformsGroups = KM(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this
    }

    toJSON(t) {
        const e = super.toJSON(t);
        e.glslVersion = this.glslVersion, e.uniforms = {};
        for (const s in this.uniforms) {
            const u = this.uniforms[s].value;
            u && u.isTexture ? e.uniforms[s] = {
                type: "t",
                value: u.toJSON(t).uuid
            } : u && u.isColor ? e.uniforms[s] = {
                type: "c",
                value: u.getHex()
            } : u && u.isVector2 ? e.uniforms[s] = {
                type: "v2",
                value: u.toArray()
            } : u && u.isVector3 ? e.uniforms[s] = {
                type: "v3",
                value: u.toArray()
            } : u && u.isVector4 ? e.uniforms[s] = {
                type: "v4",
                value: u.toArray()
            } : u && u.isMatrix3 ? e.uniforms[s] = {
                type: "m3",
                value: u.toArray()
            } : u && u.isMatrix4 ? e.uniforms[s] = {type: "m4", value: u.toArray()} : e.uniforms[s] = {value: u}
        }
        Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
        const i = {};
        for (const s in this.extensions) this.extensions[s] === !0 && (i[s] = !0);
        return Object.keys(i).length > 0 && (e.extensions = i), e
    }
}

class Mp extends Ge {
    constructor() {
        super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Re, this.projectionMatrix = new Re, this.projectionMatrixInverse = new Re
    }

    copy(t, e) {
        return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
    }

    getWorldDirection(t) {
        this.updateWorldMatrix(!0, !1);
        const e = this.matrixWorld.elements;
        return t.set(-e[8], -e[9], -e[10]).normalize()
    }

    updateMatrixWorld(t) {
        super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }

    updateWorldMatrix(t, e) {
        super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }

    clone() {
        return new this.constructor().copy(this)
    }
}

class Cn extends Mp {
    constructor(t = 50, e = 1, i = .1, s = 2e3) {
        super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = i, this.far = s, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }

    copy(t, e) {
        return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
    }

    setFocalLength(t) {
        const e = .5 * this.getFilmHeight() / t;
        this.fov = ad * 2 * Math.atan(e), this.updateProjectionMatrix()
    }

    getFocalLength() {
        const t = Math.tan($l * .5 * this.fov);
        return .5 * this.getFilmHeight() / t
    }

    getEffectiveFOV() {
        return ad * 2 * Math.atan(Math.tan($l * .5 * this.fov) / this.zoom)
    }

    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1)
    }

    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1)
    }

    setViewOffset(t, e, i, s, a, u) {
        this.aspect = t / e, this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = s, this.view.width = a, this.view.height = u, this.updateProjectionMatrix()
    }

    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix()
    }

    updateProjectionMatrix() {
        const t = this.near;
        let e = t * Math.tan($l * .5 * this.fov) / this.zoom, i = 2 * e, s = this.aspect * i, a = -.5 * s;
        const u = this.view;
        if (this.view !== null && this.view.enabled) {
            const f = u.fullWidth, h = u.fullHeight;
            a += u.offsetX * s / f, e -= u.offsetY * i / h, s *= u.width / f, i *= u.height / h
        }
        const l = this.filmOffset;
        l !== 0 && (a += t * l / this.getFilmWidth()), this.projectionMatrix.makePerspective(a, a + s, e, e - i, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }

    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
    }
}

const ss = 90, as = 1;

class n1 extends Ge {
    constructor(t, e, i) {
        super(), this.type = "CubeCamera", this.renderTarget = i;
        const s = new Cn(ss, as, t, e);
        s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new F(1, 0, 0)), this.add(s);
        const a = new Cn(ss, as, t, e);
        a.layers = this.layers, a.up.set(0, -1, 0), a.lookAt(new F(-1, 0, 0)), this.add(a);
        const u = new Cn(ss, as, t, e);
        u.layers = this.layers, u.up.set(0, 0, 1), u.lookAt(new F(0, 1, 0)), this.add(u);
        const l = new Cn(ss, as, t, e);
        l.layers = this.layers, l.up.set(0, 0, -1), l.lookAt(new F(0, -1, 0)), this.add(l);
        const f = new Cn(ss, as, t, e);
        f.layers = this.layers, f.up.set(0, -1, 0), f.lookAt(new F(0, 0, 1)), this.add(f);
        const h = new Cn(ss, as, t, e);
        h.layers = this.layers, h.up.set(0, -1, 0), h.lookAt(new F(0, 0, -1)), this.add(h)
    }

    update(t, e) {
        this.parent === null && this.updateMatrixWorld();
        const i = this.renderTarget, [s, a, u, l, f, h] = this.children, d = t.getRenderTarget(), m = t.toneMapping,
            g = t.xr.enabled;
        t.toneMapping = Ii, t.xr.enabled = !1;
        const x = i.texture.generateMipmaps;
        i.texture.generateMipmaps = !1, t.setRenderTarget(i, 0), t.render(e, s), t.setRenderTarget(i, 1), t.render(e, a), t.setRenderTarget(i, 2), t.render(e, u), t.setRenderTarget(i, 3), t.render(e, l), t.setRenderTarget(i, 4), t.render(e, f), i.texture.generateMipmaps = x, t.setRenderTarget(i, 5), t.render(e, h), t.setRenderTarget(d), t.toneMapping = m, t.xr.enabled = g, i.texture.needsPMREMUpdate = !0
    }
}

class Sp extends qn {
    constructor(t, e, i, s, a, u, l, f, h, d) {
        t = t !== void 0 ? t : [], e = e !== void 0 ? e : ps, super(t, e, i, s, a, u, l, f, h, d), this.isCubeTexture = !0, this.flipY = !1
    }

    get images() {
        return this.image
    }

    set images(t) {
        this.image = t
    }
}

class i1 extends Tr {
    constructor(t = 1, e = {}) {
        super(t, t, e), this.isWebGLCubeRenderTarget = !0;
        const i = {width: t, height: t, depth: 1}, s = [i, i, i, i, i, i];
        this.texture = new Sp(s, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : Wn
    }

    fromEquirectangularTexture(t, e) {
        this.texture.type = e.type, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
        const i = {
            uniforms: {tEquirect: {value: null}}, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
        }, s = new Lr(5, 5, 5), a = new Ar({
            name: "CubemapFromEquirect",
            uniforms: vs(i.uniforms),
            vertexShader: i.vertexShader,
            fragmentShader: i.fragmentShader,
            side: Ln,
            blending: tr
        });
        a.uniforms.tEquirect.value = e;
        const u = new Hn(s, a), l = e.minFilter;
        return e.minFilter === Eo && (e.minFilter = Wn), new n1(1, 10, this).update(t, u), e.minFilter = l, u.geometry.dispose(), u.material.dispose(), this
    }

    clear(t, e, i, s) {
        const a = t.getRenderTarget();
        for (let u = 0; u < 6; u++) t.setRenderTarget(this, u), t.clear(e, i, s);
        t.setRenderTarget(a)
    }
}

const _c = new F, r1 = new F, s1 = new kn;

class pr {
    constructor(t = new F(1, 0, 0), e = 0) {
        this.isPlane = !0, this.normal = t, this.constant = e
    }

    set(t, e) {
        return this.normal.copy(t), this.constant = e, this
    }

    setComponents(t, e, i, s) {
        return this.normal.set(t, e, i), this.constant = s, this
    }

    setFromNormalAndCoplanarPoint(t, e) {
        return this.normal.copy(t), this.constant = -e.dot(this.normal), this
    }

    setFromCoplanarPoints(t, e, i) {
        const s = _c.subVectors(i, e).cross(r1.subVectors(t, e)).normalize();
        return this.setFromNormalAndCoplanarPoint(s, t), this
    }

    copy(t) {
        return this.normal.copy(t.normal), this.constant = t.constant, this
    }

    normalize() {
        const t = 1 / this.normal.length();
        return this.normal.multiplyScalar(t), this.constant *= t, this
    }

    negate() {
        return this.constant *= -1, this.normal.negate(), this
    }

    distanceToPoint(t) {
        return this.normal.dot(t) + this.constant
    }

    distanceToSphere(t) {
        return this.distanceToPoint(t.center) - t.radius
    }

    projectPoint(t, e) {
        return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
    }

    intersectLine(t, e) {
        const i = t.delta(_c), s = this.normal.dot(i);
        if (s === 0) return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
        const a = -(t.start.dot(this.normal) + this.constant) / s;
        return a < 0 || a > 1 ? null : e.copy(i).multiplyScalar(a).add(t.start)
    }

    intersectsLine(t) {
        const e = this.distanceToPoint(t.start), i = this.distanceToPoint(t.end);
        return e < 0 && i > 0 || i < 0 && e > 0
    }

    intersectsBox(t) {
        return t.intersectsPlane(this)
    }

    intersectsSphere(t) {
        return t.intersectsPlane(this)
    }

    coplanarPoint(t) {
        return t.copy(this.normal).multiplyScalar(-this.constant)
    }

    applyMatrix4(t, e) {
        const i = e || s1.getNormalMatrix(t), s = this.coplanarPoint(_c).applyMatrix4(t),
            a = this.normal.applyMatrix3(i).normalize();
        return this.constant = -s.dot(a), this
    }

    translate(t) {
        return this.constant -= t.dot(this.normal), this
    }

    equals(t) {
        return t.normal.equals(this.normal) && t.constant === this.constant
    }

    clone() {
        return new this.constructor().copy(this)
    }
}

const os = new ia, ho = new F;

class Xc {
    constructor(t = new pr, e = new pr, i = new pr, s = new pr, a = new pr, u = new pr) {
        this.planes = [t, e, i, s, a, u]
    }

    set(t, e, i, s, a, u) {
        const l = this.planes;
        return l[0].copy(t), l[1].copy(e), l[2].copy(i), l[3].copy(s), l[4].copy(a), l[5].copy(u), this
    }

    copy(t) {
        const e = this.planes;
        for (let i = 0; i < 6; i++) e[i].copy(t.planes[i]);
        return this
    }

    setFromProjectionMatrix(t) {
        const e = this.planes, i = t.elements, s = i[0], a = i[1], u = i[2], l = i[3], f = i[4], h = i[5], d = i[6],
            m = i[7], g = i[8], x = i[9], M = i[10], v = i[11], _ = i[12], S = i[13], L = i[14], T = i[15];
        return e[0].setComponents(l - s, m - f, v - g, T - _).normalize(), e[1].setComponents(l + s, m + f, v + g, T + _).normalize(), e[2].setComponents(l + a, m + h, v + x, T + S).normalize(), e[3].setComponents(l - a, m - h, v - x, T - S).normalize(), e[4].setComponents(l - u, m - d, v - M, T - L).normalize(), e[5].setComponents(l + u, m + d, v + M, T + L).normalize(), this
    }

    intersectsObject(t) {
        const e = t.geometry;
        return e.boundingSphere === null && e.computeBoundingSphere(), os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(os)
    }

    intersectsSprite(t) {
        return os.center.set(0, 0, 0), os.radius = .7071067811865476, os.applyMatrix4(t.matrixWorld), this.intersectsSphere(os)
    }

    intersectsSphere(t) {
        const e = this.planes, i = t.center, s = -t.radius;
        for (let a = 0; a < 6; a++) if (e[a].distanceToPoint(i) < s) return !1;
        return !0
    }

    intersectsBox(t) {
        const e = this.planes;
        for (let i = 0; i < 6; i++) {
            const s = e[i];
            if (ho.x = s.normal.x > 0 ? t.max.x : t.min.x, ho.y = s.normal.y > 0 ? t.max.y : t.min.y, ho.z = s.normal.z > 0 ? t.max.z : t.min.z, s.distanceToPoint(ho) < 0) return !1
        }
        return !0
    }

    containsPoint(t) {
        const e = this.planes;
        for (let i = 0; i < 6; i++) if (e[i].distanceToPoint(t) < 0) return !1;
        return !0
    }

    clone() {
        return new this.constructor().copy(this)
    }
}

function bp() {
    let c = null, t = !1, e = null, i = null;

    function s(a, u) {
        e(a, u), i = c.requestAnimationFrame(s)
    }

    return {
        start: function () {
            t !== !0 && e !== null && (i = c.requestAnimationFrame(s), t = !0)
        }, stop: function () {
            c.cancelAnimationFrame(i), t = !1
        }, setAnimationLoop: function (a) {
            e = a
        }, setContext: function (a) {
            c = a
        }
    }
}

function a1(c, t) {
    const e = t.isWebGL2, i = new WeakMap;

    function s(h, d) {
        const m = h.array, g = h.usage, x = c.createBuffer();
        c.bindBuffer(d, x), c.bufferData(d, m, g), h.onUploadCallback();
        let M;
        if (m instanceof Float32Array) M = 5126; else if (m instanceof Uint16Array) if (h.isFloat16BufferAttribute) if (e) M = 5131; else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."); else M = 5123; else if (m instanceof Int16Array) M = 5122; else if (m instanceof Uint32Array) M = 5125; else if (m instanceof Int32Array) M = 5124; else if (m instanceof Int8Array) M = 5120; else if (m instanceof Uint8Array) M = 5121; else if (m instanceof Uint8ClampedArray) M = 5121; else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + m);
        return {buffer: x, type: M, bytesPerElement: m.BYTES_PER_ELEMENT, version: h.version}
    }

    function a(h, d, m) {
        const g = d.array, x = d.updateRange;
        c.bindBuffer(m, h), x.count === -1 ? c.bufferSubData(m, 0, g) : (e ? c.bufferSubData(m, x.offset * g.BYTES_PER_ELEMENT, g, x.offset, x.count) : c.bufferSubData(m, x.offset * g.BYTES_PER_ELEMENT, g.subarray(x.offset, x.offset + x.count)), x.count = -1)
    }

    function u(h) {
        return h.isInterleavedBufferAttribute && (h = h.data), i.get(h)
    }

    function l(h) {
        h.isInterleavedBufferAttribute && (h = h.data);
        const d = i.get(h);
        d && (c.deleteBuffer(d.buffer), i.delete(h))
    }

    function f(h, d) {
        if (h.isGLBufferAttribute) {
            const g = i.get(h);
            (!g || g.version < h.version) && i.set(h, {
                buffer: h.buffer,
                type: h.type,
                bytesPerElement: h.elementSize,
                version: h.version
            });
            return
        }
        h.isInterleavedBufferAttribute && (h = h.data);
        const m = i.get(h);
        m === void 0 ? i.set(h, s(h, d)) : m.version < h.version && (a(m.buffer, h, d), m.version = h.version)
    }

    return {get: u, remove: l, update: f}
}

class Yc extends sn {
    constructor(t = 1, e = 1, i = 1, s = 1) {
        super(), this.type = "PlaneGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: i,
            heightSegments: s
        };
        const a = t / 2, u = e / 2, l = Math.floor(i), f = Math.floor(s), h = l + 1, d = f + 1, m = t / l, g = e / f,
            x = [], M = [], v = [], _ = [];
        for (let S = 0; S < d; S++) {
            const L = S * g - u;
            for (let T = 0; T < h; T++) {
                const A = T * m - a;
                M.push(A, -L, 0), v.push(0, 0, 1), _.push(T / l), _.push(1 - S / f)
            }
        }
        for (let S = 0; S < f; S++) for (let L = 0; L < l; L++) {
            const T = L + h * S, A = L + h * (S + 1), E = L + 1 + h * (S + 1), D = L + 1 + h * S;
            x.push(T, A, D), x.push(A, E, D)
        }
        this.setIndex(x), this.setAttribute("position", new _e(M, 3)), this.setAttribute("normal", new _e(v, 3)), this.setAttribute("uv", new _e(_, 2))
    }

    static fromJSON(t) {
        return new Yc(t.width, t.height, t.widthSegments, t.heightSegments)
    }
}

var o1 = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, l1 = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, c1 = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, u1 = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, h1 = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, f1 = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, d1 = "vec3 transformed = vec3( position );", p1 = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, m1 = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`, g1 = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, _1 = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, v1 = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, x1 = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, y1 = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, M1 = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, S1 = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, b1 = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, w1 = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, T1 = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, E1 = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, A1 = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, C1 = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, L1 = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, P1 = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, R1 = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, D1 = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, I1 = "gl_FragColor = linearToOutputTexel( gl_FragColor );", O1 = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, F1 = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, N1 = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, U1 = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, z1 = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, B1 = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, G1 = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, W1 = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, V1 = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, k1 = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, H1 = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, q1 = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, X1 = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Y1 = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Z1 = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`, $1 = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, J1 = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, j1 = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, K1 = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`, Q1 = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, tS = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`, eS = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, nS = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, iS = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, rS = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, sS = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, aS = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, oS = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, lS = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, cS = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, uS = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, hS = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, fS = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, dS = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, pS = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, mS = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, gS = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, _S = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, vS = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, xS = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, yS = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, MS = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, SS = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, bS = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, wS = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, TS = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, ES = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, AS = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, CS = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, LS = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, PS = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, RS = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, DS = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, IS = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, OS = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, FS = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, NS = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, US = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, zS = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, BS = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, GS = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`, WS = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, VS = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, kS = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, HS = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, qS = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, XS = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, YS = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, ZS = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, $S = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, JS = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`, jS = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, KS = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, QS = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, tb = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, eb = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, nb = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, ib = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, rb = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const sb = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, ab = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, ob = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, lb = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, cb = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, ub = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, hb = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, fb = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, db = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, pb = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, mb = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, gb = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, _b = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, vb = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, xb = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, yb = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Mb = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Sb = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, bb = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, wb = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Tb = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Eb = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Ab = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Cb = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Lb = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Pb = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Rb = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Db = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ib = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Ob = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Fb = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Nb = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Ub = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, zb = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Qt = {
    alphamap_fragment: o1,
    alphamap_pars_fragment: l1,
    alphatest_fragment: c1,
    alphatest_pars_fragment: u1,
    aomap_fragment: h1,
    aomap_pars_fragment: f1,
    begin_vertex: d1,
    beginnormal_vertex: p1,
    bsdfs: m1,
    iridescence_fragment: g1,
    bumpmap_pars_fragment: _1,
    clipping_planes_fragment: v1,
    clipping_planes_pars_fragment: x1,
    clipping_planes_pars_vertex: y1,
    clipping_planes_vertex: M1,
    color_fragment: S1,
    color_pars_fragment: b1,
    color_pars_vertex: w1,
    color_vertex: T1,
    common: E1,
    cube_uv_reflection_fragment: A1,
    defaultnormal_vertex: C1,
    displacementmap_pars_vertex: L1,
    displacementmap_vertex: P1,
    emissivemap_fragment: R1,
    emissivemap_pars_fragment: D1,
    encodings_fragment: I1,
    encodings_pars_fragment: O1,
    envmap_fragment: F1,
    envmap_common_pars_fragment: N1,
    envmap_pars_fragment: U1,
    envmap_pars_vertex: z1,
    envmap_physical_pars_fragment: J1,
    envmap_vertex: B1,
    fog_vertex: G1,
    fog_pars_vertex: W1,
    fog_fragment: V1,
    fog_pars_fragment: k1,
    gradientmap_pars_fragment: H1,
    lightmap_fragment: q1,
    lightmap_pars_fragment: X1,
    lights_lambert_fragment: Y1,
    lights_lambert_pars_fragment: Z1,
    lights_pars_begin: $1,
    lights_toon_fragment: j1,
    lights_toon_pars_fragment: K1,
    lights_phong_fragment: Q1,
    lights_phong_pars_fragment: tS,
    lights_physical_fragment: eS,
    lights_physical_pars_fragment: nS,
    lights_fragment_begin: iS,
    lights_fragment_maps: rS,
    lights_fragment_end: sS,
    logdepthbuf_fragment: aS,
    logdepthbuf_pars_fragment: oS,
    logdepthbuf_pars_vertex: lS,
    logdepthbuf_vertex: cS,
    map_fragment: uS,
    map_pars_fragment: hS,
    map_particle_fragment: fS,
    map_particle_pars_fragment: dS,
    metalnessmap_fragment: pS,
    metalnessmap_pars_fragment: mS,
    morphcolor_vertex: gS,
    morphnormal_vertex: _S,
    morphtarget_pars_vertex: vS,
    morphtarget_vertex: xS,
    normal_fragment_begin: yS,
    normal_fragment_maps: MS,
    normal_pars_fragment: SS,
    normal_pars_vertex: bS,
    normal_vertex: wS,
    normalmap_pars_fragment: TS,
    clearcoat_normal_fragment_begin: ES,
    clearcoat_normal_fragment_maps: AS,
    clearcoat_pars_fragment: CS,
    iridescence_pars_fragment: LS,
    output_fragment: PS,
    packing: RS,
    premultiplied_alpha_fragment: DS,
    project_vertex: IS,
    dithering_fragment: OS,
    dithering_pars_fragment: FS,
    roughnessmap_fragment: NS,
    roughnessmap_pars_fragment: US,
    shadowmap_pars_fragment: zS,
    shadowmap_pars_vertex: BS,
    shadowmap_vertex: GS,
    shadowmask_pars_fragment: WS,
    skinbase_vertex: VS,
    skinning_pars_vertex: kS,
    skinning_vertex: HS,
    skinnormal_vertex: qS,
    specularmap_fragment: XS,
    specularmap_pars_fragment: YS,
    tonemapping_fragment: ZS,
    tonemapping_pars_fragment: $S,
    transmission_fragment: JS,
    transmission_pars_fragment: jS,
    uv_pars_fragment: KS,
    uv_pars_vertex: QS,
    uv_vertex: tb,
    uv2_pars_fragment: eb,
    uv2_pars_vertex: nb,
    uv2_vertex: ib,
    worldpos_vertex: rb,
    background_vert: sb,
    background_frag: ab,
    backgroundCube_vert: ob,
    backgroundCube_frag: lb,
    cube_vert: cb,
    cube_frag: ub,
    depth_vert: hb,
    depth_frag: fb,
    distanceRGBA_vert: db,
    distanceRGBA_frag: pb,
    equirect_vert: mb,
    equirect_frag: gb,
    linedashed_vert: _b,
    linedashed_frag: vb,
    meshbasic_vert: xb,
    meshbasic_frag: yb,
    meshlambert_vert: Mb,
    meshlambert_frag: Sb,
    meshmatcap_vert: bb,
    meshmatcap_frag: wb,
    meshnormal_vert: Tb,
    meshnormal_frag: Eb,
    meshphong_vert: Ab,
    meshphong_frag: Cb,
    meshphysical_vert: Lb,
    meshphysical_frag: Pb,
    meshtoon_vert: Rb,
    meshtoon_frag: Db,
    points_vert: Ib,
    points_frag: Ob,
    shadow_vert: Fb,
    shadow_frag: Nb,
    sprite_vert: Ub,
    sprite_frag: zb
}, xt = {
    common: {
        diffuse: {value: new ie(16777215)},
        opacity: {value: 1},
        map: {value: null},
        uvTransform: {value: new kn},
        uv2Transform: {value: new kn},
        alphaMap: {value: null},
        alphaTest: {value: 0}
    },
    specularmap: {specularMap: {value: null}},
    envmap: {
        envMap: {value: null},
        flipEnvMap: {value: -1},
        reflectivity: {value: 1},
        ior: {value: 1.5},
        refractionRatio: {value: .98}
    },
    aomap: {aoMap: {value: null}, aoMapIntensity: {value: 1}},
    lightmap: {lightMap: {value: null}, lightMapIntensity: {value: 1}},
    emissivemap: {emissiveMap: {value: null}},
    bumpmap: {bumpMap: {value: null}, bumpScale: {value: 1}},
    normalmap: {normalMap: {value: null}, normalScale: {value: new Lt(1, 1)}},
    displacementmap: {displacementMap: {value: null}, displacementScale: {value: 1}, displacementBias: {value: 0}},
    roughnessmap: {roughnessMap: {value: null}},
    metalnessmap: {metalnessMap: {value: null}},
    gradientmap: {gradientMap: {value: null}},
    fog: {fogDensity: {value: 25e-5}, fogNear: {value: 1}, fogFar: {value: 2e3}, fogColor: {value: new ie(16777215)}},
    lights: {
        ambientLightColor: {value: []},
        lightProbe: {value: []},
        directionalLights: {value: [], properties: {direction: {}, color: {}}},
        directionalLightShadows: {
            value: [],
            properties: {shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}}
        },
        directionalShadowMap: {value: []},
        directionalShadowMatrix: {value: []},
        spotLights: {
            value: [],
            properties: {color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {}}
        },
        spotLightShadows: {
            value: [],
            properties: {shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}}
        },
        spotLightMap: {value: []},
        spotShadowMap: {value: []},
        spotLightMatrix: {value: []},
        pointLights: {value: [], properties: {color: {}, position: {}, decay: {}, distance: {}}},
        pointLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
            }
        },
        pointShadowMap: {value: []},
        pointShadowMatrix: {value: []},
        hemisphereLights: {value: [], properties: {direction: {}, skyColor: {}, groundColor: {}}},
        rectAreaLights: {value: [], properties: {color: {}, position: {}, width: {}, height: {}}},
        ltc_1: {value: null},
        ltc_2: {value: null}
    },
    points: {
        diffuse: {value: new ie(16777215)},
        opacity: {value: 1},
        size: {value: 1},
        scale: {value: 1},
        map: {value: null},
        alphaMap: {value: null},
        alphaTest: {value: 0},
        uvTransform: {value: new kn}
    },
    sprite: {
        diffuse: {value: new ie(16777215)},
        opacity: {value: 1},
        center: {value: new Lt(.5, .5)},
        rotation: {value: 0},
        map: {value: null},
        alphaMap: {value: null},
        alphaTest: {value: 0},
        uvTransform: {value: new kn}
    }
}, ci = {
    basic: {
        uniforms: hn([xt.common, xt.specularmap, xt.envmap, xt.aomap, xt.lightmap, xt.fog]),
        vertexShader: Qt.meshbasic_vert,
        fragmentShader: Qt.meshbasic_frag
    },
    lambert: {
        uniforms: hn([xt.common, xt.specularmap, xt.envmap, xt.aomap, xt.lightmap, xt.emissivemap, xt.bumpmap, xt.normalmap, xt.displacementmap, xt.fog, xt.lights, {emissive: {value: new ie(0)}}]),
        vertexShader: Qt.meshlambert_vert,
        fragmentShader: Qt.meshlambert_frag
    },
    phong: {
        uniforms: hn([xt.common, xt.specularmap, xt.envmap, xt.aomap, xt.lightmap, xt.emissivemap, xt.bumpmap, xt.normalmap, xt.displacementmap, xt.fog, xt.lights, {
            emissive: {value: new ie(0)},
            specular: {value: new ie(1118481)},
            shininess: {value: 30}
        }]), vertexShader: Qt.meshphong_vert, fragmentShader: Qt.meshphong_frag
    },
    standard: {
        uniforms: hn([xt.common, xt.envmap, xt.aomap, xt.lightmap, xt.emissivemap, xt.bumpmap, xt.normalmap, xt.displacementmap, xt.roughnessmap, xt.metalnessmap, xt.fog, xt.lights, {
            emissive: {value: new ie(0)},
            roughness: {value: 1},
            metalness: {value: 0},
            envMapIntensity: {value: 1}
        }]), vertexShader: Qt.meshphysical_vert, fragmentShader: Qt.meshphysical_frag
    },
    toon: {
        uniforms: hn([xt.common, xt.aomap, xt.lightmap, xt.emissivemap, xt.bumpmap, xt.normalmap, xt.displacementmap, xt.gradientmap, xt.fog, xt.lights, {emissive: {value: new ie(0)}}]),
        vertexShader: Qt.meshtoon_vert,
        fragmentShader: Qt.meshtoon_frag
    },
    matcap: {
        uniforms: hn([xt.common, xt.bumpmap, xt.normalmap, xt.displacementmap, xt.fog, {matcap: {value: null}}]),
        vertexShader: Qt.meshmatcap_vert,
        fragmentShader: Qt.meshmatcap_frag
    },
    points: {uniforms: hn([xt.points, xt.fog]), vertexShader: Qt.points_vert, fragmentShader: Qt.points_frag},
    dashed: {
        uniforms: hn([xt.common, xt.fog, {scale: {value: 1}, dashSize: {value: 1}, totalSize: {value: 2}}]),
        vertexShader: Qt.linedashed_vert,
        fragmentShader: Qt.linedashed_frag
    },
    depth: {uniforms: hn([xt.common, xt.displacementmap]), vertexShader: Qt.depth_vert, fragmentShader: Qt.depth_frag},
    normal: {
        uniforms: hn([xt.common, xt.bumpmap, xt.normalmap, xt.displacementmap, {opacity: {value: 1}}]),
        vertexShader: Qt.meshnormal_vert,
        fragmentShader: Qt.meshnormal_frag
    },
    sprite: {uniforms: hn([xt.sprite, xt.fog]), vertexShader: Qt.sprite_vert, fragmentShader: Qt.sprite_frag},
    background: {
        uniforms: {uvTransform: {value: new kn}, t2D: {value: null}},
        vertexShader: Qt.background_vert,
        fragmentShader: Qt.background_frag
    },
    backgroundCube: {
        uniforms: {envMap: {value: null}, flipEnvMap: {value: -1}, backgroundBlurriness: {value: 0}},
        vertexShader: Qt.backgroundCube_vert,
        fragmentShader: Qt.backgroundCube_frag
    },
    cube: {
        uniforms: {tCube: {value: null}, tFlip: {value: -1}, opacity: {value: 1}},
        vertexShader: Qt.cube_vert,
        fragmentShader: Qt.cube_frag
    },
    equirect: {uniforms: {tEquirect: {value: null}}, vertexShader: Qt.equirect_vert, fragmentShader: Qt.equirect_frag},
    distanceRGBA: {
        uniforms: hn([xt.common, xt.displacementmap, {
            referencePosition: {value: new F},
            nearDistance: {value: 1},
            farDistance: {value: 1e3}
        }]), vertexShader: Qt.distanceRGBA_vert, fragmentShader: Qt.distanceRGBA_frag
    },
    shadow: {
        uniforms: hn([xt.lights, xt.fog, {color: {value: new ie(0)}, opacity: {value: 1}}]),
        vertexShader: Qt.shadow_vert,
        fragmentShader: Qt.shadow_frag
    }
};
ci.physical = {
    uniforms: hn([ci.standard.uniforms, {
        clearcoat: {value: 0},
        clearcoatMap: {value: null},
        clearcoatRoughness: {value: 0},
        clearcoatRoughnessMap: {value: null},
        clearcoatNormalScale: {value: new Lt(1, 1)},
        clearcoatNormalMap: {value: null},
        iridescence: {value: 0},
        iridescenceMap: {value: null},
        iridescenceIOR: {value: 1.3},
        iridescenceThicknessMinimum: {value: 100},
        iridescenceThicknessMaximum: {value: 400},
        iridescenceThicknessMap: {value: null},
        sheen: {value: 0},
        sheenColor: {value: new ie(0)},
        sheenColorMap: {value: null},
        sheenRoughness: {value: 1},
        sheenRoughnessMap: {value: null},
        transmission: {value: 0},
        transmissionMap: {value: null},
        transmissionSamplerSize: {value: new Lt},
        transmissionSamplerMap: {value: null},
        thickness: {value: 0},
        thicknessMap: {value: null},
        attenuationDistance: {value: 0},
        attenuationColor: {value: new ie(0)},
        specularIntensity: {value: 1},
        specularIntensityMap: {value: null},
        specularColor: {value: new ie(1, 1, 1)},
        specularColorMap: {value: null}
    }]), vertexShader: Qt.meshphysical_vert, fragmentShader: Qt.meshphysical_frag
};

function Bb(c, t, e, i, s, a, u) {
    const l = new ie(0);
    let f = a === !0 ? 0 : 1, h, d, m = null, g = 0, x = null;

    function M(_, S) {
        let L = !1, T = S.isScene === !0 ? S.background : null;
        T && T.isTexture && (T = (S.backgroundBlurriness > 0 ? e : t).get(T));
        const A = c.xr, E = A.getSession && A.getSession();
        E && E.environmentBlendMode === "additive" && (T = null), T === null ? v(l, f) : T && T.isColor && (v(T, 1), L = !0), (c.autoClear || L) && c.clear(c.autoClearColor, c.autoClearDepth, c.autoClearStencil), T && (T.isCubeTexture || T.mapping === To) ? (d === void 0 && (d = new Hn(new Lr(1, 1, 1), new Ar({
            name: "BackgroundCubeMaterial",
            uniforms: vs(ci.backgroundCube.uniforms),
            vertexShader: ci.backgroundCube.vertexShader,
            fragmentShader: ci.backgroundCube.fragmentShader,
            side: Ln,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })), d.geometry.deleteAttribute("normal"), d.geometry.deleteAttribute("uv"), d.onBeforeRender = function (D, B, w) {
            this.matrixWorld.copyPosition(w.matrixWorld)
        }, Object.defineProperty(d.material, "envMap", {
            get: function () {
                return this.uniforms.envMap.value
            }
        }), s.update(d)), d.material.uniforms.envMap.value = T, d.material.uniforms.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1, d.material.uniforms.backgroundBlurriness.value = S.backgroundBlurriness, (m !== T || g !== T.version || x !== c.toneMapping) && (d.material.needsUpdate = !0, m = T, g = T.version, x = c.toneMapping), d.layers.enableAll(), _.unshift(d, d.geometry, d.material, 0, 0, null)) : T && T.isTexture && (h === void 0 && (h = new Hn(new Yc(2, 2), new Ar({
            name: "BackgroundMaterial",
            uniforms: vs(ci.background.uniforms),
            vertexShader: ci.background.vertexShader,
            fragmentShader: ci.background.fragmentShader,
            side: Sr,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })), h.geometry.deleteAttribute("normal"), Object.defineProperty(h.material, "map", {
            get: function () {
                return this.uniforms.t2D.value
            }
        }), s.update(h)), h.material.uniforms.t2D.value = T, T.matrixAutoUpdate === !0 && T.updateMatrix(), h.material.uniforms.uvTransform.value.copy(T.matrix), (m !== T || g !== T.version || x !== c.toneMapping) && (h.material.needsUpdate = !0, m = T, g = T.version, x = c.toneMapping), h.layers.enableAll(), _.unshift(h, h.geometry, h.material, 0, 0, null))
    }

    function v(_, S) {
        i.buffers.color.setClear(_.r, _.g, _.b, S, u)
    }

    return {
        getClearColor: function () {
            return l
        }, setClearColor: function (_, S = 1) {
            l.set(_), f = S, v(l, f)
        }, getClearAlpha: function () {
            return f
        }, setClearAlpha: function (_) {
            f = _, v(l, f)
        }, render: M
    }
}

function Gb(c, t, e, i) {
    const s = c.getParameter(34921), a = i.isWebGL2 ? null : t.get("OES_vertex_array_object"),
        u = i.isWebGL2 || a !== null, l = {}, f = _(null);
    let h = f, d = !1;

    function m(X, ot, dt, ut, tt) {
        let Y = !1;
        if (u) {
            const J = v(ut, dt, ot);
            h !== J && (h = J, x(h.object)), Y = S(X, ut, dt, tt), Y && L(X, ut, dt, tt)
        } else {
            const J = ot.wireframe === !0;
            (h.geometry !== ut.id || h.program !== dt.id || h.wireframe !== J) && (h.geometry = ut.id, h.program = dt.id, h.wireframe = J, Y = !0)
        }
        tt !== null && e.update(tt, 34963), (Y || d) && (d = !1, w(X, ot, dt, ut), tt !== null && c.bindBuffer(34963, e.get(tt).buffer))
    }

    function g() {
        return i.isWebGL2 ? c.createVertexArray() : a.createVertexArrayOES()
    }

    function x(X) {
        return i.isWebGL2 ? c.bindVertexArray(X) : a.bindVertexArrayOES(X)
    }

    function M(X) {
        return i.isWebGL2 ? c.deleteVertexArray(X) : a.deleteVertexArrayOES(X)
    }

    function v(X, ot, dt) {
        const ut = dt.wireframe === !0;
        let tt = l[X.id];
        tt === void 0 && (tt = {}, l[X.id] = tt);
        let Y = tt[ot.id];
        Y === void 0 && (Y = {}, tt[ot.id] = Y);
        let J = Y[ut];
        return J === void 0 && (J = _(g()), Y[ut] = J), J
    }

    function _(X) {
        const ot = [], dt = [], ut = [];
        for (let tt = 0; tt < s; tt++) ot[tt] = 0, dt[tt] = 0, ut[tt] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: ot,
            enabledAttributes: dt,
            attributeDivisors: ut,
            object: X,
            attributes: {},
            index: null
        }
    }

    function S(X, ot, dt, ut) {
        const tt = h.attributes, Y = ot.attributes;
        let J = 0;
        const ht = dt.getAttributes();
        for (const gt in ht) if (ht[gt].location >= 0) {
            const Ct = tt[gt];
            let Ut = Y[gt];
            if (Ut === void 0 && (gt === "instanceMatrix" && X.instanceMatrix && (Ut = X.instanceMatrix), gt === "instanceColor" && X.instanceColor && (Ut = X.instanceColor)), Ct === void 0 || Ct.attribute !== Ut || Ut && Ct.data !== Ut.data) return !0;
            J++
        }
        return h.attributesNum !== J || h.index !== ut
    }

    function L(X, ot, dt, ut) {
        const tt = {}, Y = ot.attributes;
        let J = 0;
        const ht = dt.getAttributes();
        for (const gt in ht) if (ht[gt].location >= 0) {
            let Ct = Y[gt];
            Ct === void 0 && (gt === "instanceMatrix" && X.instanceMatrix && (Ct = X.instanceMatrix), gt === "instanceColor" && X.instanceColor && (Ct = X.instanceColor));
            const Ut = {};
            Ut.attribute = Ct, Ct && Ct.data && (Ut.data = Ct.data), tt[gt] = Ut, J++
        }
        h.attributes = tt, h.attributesNum = J, h.index = ut
    }

    function T() {
        const X = h.newAttributes;
        for (let ot = 0, dt = X.length; ot < dt; ot++) X[ot] = 0
    }

    function A(X) {
        E(X, 0)
    }

    function E(X, ot) {
        const dt = h.newAttributes, ut = h.enabledAttributes, tt = h.attributeDivisors;
        dt[X] = 1, ut[X] === 0 && (c.enableVertexAttribArray(X), ut[X] = 1), tt[X] !== ot && ((i.isWebGL2 ? c : t.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](X, ot), tt[X] = ot)
    }

    function D() {
        const X = h.newAttributes, ot = h.enabledAttributes;
        for (let dt = 0, ut = ot.length; dt < ut; dt++) ot[dt] !== X[dt] && (c.disableVertexAttribArray(dt), ot[dt] = 0)
    }

    function B(X, ot, dt, ut, tt, Y) {
        i.isWebGL2 === !0 && (dt === 5124 || dt === 5125) ? c.vertexAttribIPointer(X, ot, dt, tt, Y) : c.vertexAttribPointer(X, ot, dt, ut, tt, Y)
    }

    function w(X, ot, dt, ut) {
        if (i.isWebGL2 === !1 && (X.isInstancedMesh || ut.isInstancedBufferGeometry) && t.get("ANGLE_instanced_arrays") === null) return;
        T();
        const tt = ut.attributes, Y = dt.getAttributes(), J = ot.defaultAttributeValues;
        for (const ht in Y) {
            const gt = Y[ht];
            if (gt.location >= 0) {
                let mt = tt[ht];
                if (mt === void 0 && (ht === "instanceMatrix" && X.instanceMatrix && (mt = X.instanceMatrix), ht === "instanceColor" && X.instanceColor && (mt = X.instanceColor)), mt !== void 0) {
                    const Ct = mt.normalized, Ut = mt.itemSize, rt = e.get(mt);
                    if (rt === void 0) continue;
                    const le = rt.buffer, zt = rt.type, Bt = rt.bytesPerElement;
                    if (mt.isInterleavedBufferAttribute) {
                        const At = mt.data, oe = At.stride, Ht = mt.offset;
                        if (At.isInstancedInterleavedBuffer) {
                            for (let Ft = 0; Ft < gt.locationSize; Ft++) E(gt.location + Ft, At.meshPerAttribute);
                            X.isInstancedMesh !== !0 && ut._maxInstanceCount === void 0 && (ut._maxInstanceCount = At.meshPerAttribute * At.count)
                        } else for (let Ft = 0; Ft < gt.locationSize; Ft++) A(gt.location + Ft);
                        c.bindBuffer(34962, le);
                        for (let Ft = 0; Ft < gt.locationSize; Ft++) B(gt.location + Ft, Ut / gt.locationSize, zt, Ct, oe * Bt, (Ht + Ut / gt.locationSize * Ft) * Bt)
                    } else {
                        if (mt.isInstancedBufferAttribute) {
                            for (let At = 0; At < gt.locationSize; At++) E(gt.location + At, mt.meshPerAttribute);
                            X.isInstancedMesh !== !0 && ut._maxInstanceCount === void 0 && (ut._maxInstanceCount = mt.meshPerAttribute * mt.count)
                        } else for (let At = 0; At < gt.locationSize; At++) A(gt.location + At);
                        c.bindBuffer(34962, le);
                        for (let At = 0; At < gt.locationSize; At++) B(gt.location + At, Ut / gt.locationSize, zt, Ct, Ut * Bt, Ut / gt.locationSize * At * Bt)
                    }
                } else if (J !== void 0) {
                    const Ct = J[ht];
                    if (Ct !== void 0) switch (Ct.length) {
                        case 2:
                            c.vertexAttrib2fv(gt.location, Ct);
                            break;
                        case 3:
                            c.vertexAttrib3fv(gt.location, Ct);
                            break;
                        case 4:
                            c.vertexAttrib4fv(gt.location, Ct);
                            break;
                        default:
                            c.vertexAttrib1fv(gt.location, Ct)
                    }
                }
            }
        }
        D()
    }

    function N() {
        vt();
        for (const X in l) {
            const ot = l[X];
            for (const dt in ot) {
                const ut = ot[dt];
                for (const tt in ut) M(ut[tt].object), delete ut[tt];
                delete ot[dt]
            }
            delete l[X]
        }
    }

    function k(X) {
        if (l[X.id] === void 0) return;
        const ot = l[X.id];
        for (const dt in ot) {
            const ut = ot[dt];
            for (const tt in ut) M(ut[tt].object), delete ut[tt];
            delete ot[dt]
        }
        delete l[X.id]
    }

    function lt(X) {
        for (const ot in l) {
            const dt = l[ot];
            if (dt[X.id] === void 0) continue;
            const ut = dt[X.id];
            for (const tt in ut) M(ut[tt].object), delete ut[tt];
            delete dt[X.id]
        }
    }

    function vt() {
        j(), d = !0, h !== f && (h = f, x(h.object))
    }

    function j() {
        f.geometry = null, f.program = null, f.wireframe = !1
    }

    return {
        setup: m,
        reset: vt,
        resetDefaultState: j,
        dispose: N,
        releaseStatesOfGeometry: k,
        releaseStatesOfProgram: lt,
        initAttributes: T,
        enableAttribute: A,
        disableUnusedAttributes: D
    }
}

function Wb(c, t, e, i) {
    const s = i.isWebGL2;
    let a;

    function u(h) {
        a = h
    }

    function l(h, d) {
        c.drawArrays(a, h, d), e.update(d, a, 1)
    }

    function f(h, d, m) {
        if (m === 0) return;
        let g, x;
        if (s) g = c, x = "drawArraysInstanced"; else if (g = t.get("ANGLE_instanced_arrays"), x = "drawArraysInstancedANGLE", g === null) {
            console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            return
        }
        g[x](a, h, d, m), e.update(d, a, m)
    }

    this.setMode = u, this.render = l, this.renderInstances = f
}

function Vb(c, t, e) {
    let i;

    function s() {
        if (i !== void 0) return i;
        if (t.has("EXT_texture_filter_anisotropic") === !0) {
            const B = t.get("EXT_texture_filter_anisotropic");
            i = c.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        } else i = 0;
        return i
    }

    function a(B) {
        if (B === "highp") {
            if (c.getShaderPrecisionFormat(35633, 36338).precision > 0 && c.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
            B = "mediump"
        }
        return B === "mediump" && c.getShaderPrecisionFormat(35633, 36337).precision > 0 && c.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
    }

    const u = typeof WebGL2RenderingContext < "u" && c instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && c instanceof WebGL2ComputeRenderingContext;
    let l = e.precision !== void 0 ? e.precision : "highp";
    const f = a(l);
    f !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", f, "instead."), l = f);
    const h = u || t.has("WEBGL_draw_buffers"), d = e.logarithmicDepthBuffer === !0, m = c.getParameter(34930),
        g = c.getParameter(35660), x = c.getParameter(3379), M = c.getParameter(34076), v = c.getParameter(34921),
        _ = c.getParameter(36347), S = c.getParameter(36348), L = c.getParameter(36349), T = g > 0,
        A = u || t.has("OES_texture_float"), E = T && A, D = u ? c.getParameter(36183) : 0;
    return {
        isWebGL2: u,
        drawBuffers: h,
        getMaxAnisotropy: s,
        getMaxPrecision: a,
        precision: l,
        logarithmicDepthBuffer: d,
        maxTextures: m,
        maxVertexTextures: g,
        maxTextureSize: x,
        maxCubemapSize: M,
        maxAttributes: v,
        maxVertexUniforms: _,
        maxVaryings: S,
        maxFragmentUniforms: L,
        vertexTextures: T,
        floatFragmentTextures: A,
        floatVertexTextures: E,
        maxSamples: D
    }
}

function kb(c) {
    const t = this;
    let e = null, i = 0, s = !1, a = !1;
    const u = new pr, l = new kn, f = {value: null, needsUpdate: !1};
    this.uniform = f, this.numPlanes = 0, this.numIntersection = 0, this.init = function (m, g, x) {
        const M = m.length !== 0 || g || i !== 0 || s;
        return s = g, e = d(m, x, 0), i = m.length, M
    }, this.beginShadows = function () {
        a = !0, d(null)
    }, this.endShadows = function () {
        a = !1, h()
    }, this.setState = function (m, g, x) {
        const M = m.clippingPlanes, v = m.clipIntersection, _ = m.clipShadows, S = c.get(m);
        if (!s || M === null || M.length === 0 || a && !_) a ? d(null) : h(); else {
            const L = a ? 0 : i, T = L * 4;
            let A = S.clippingState || null;
            f.value = A, A = d(M, g, T, x);
            for (let E = 0; E !== T; ++E) A[E] = e[E];
            S.clippingState = A, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += L
        }
    };

    function h() {
        f.value !== e && (f.value = e, f.needsUpdate = i > 0), t.numPlanes = i, t.numIntersection = 0
    }

    function d(m, g, x, M) {
        const v = m !== null ? m.length : 0;
        let _ = null;
        if (v !== 0) {
            if (_ = f.value, M !== !0 || _ === null) {
                const S = x + v * 4, L = g.matrixWorldInverse;
                l.getNormalMatrix(L), (_ === null || _.length < S) && (_ = new Float32Array(S));
                for (let T = 0, A = x; T !== v; ++T, A += 4) u.copy(m[T]).applyMatrix4(L, l), u.normal.toArray(_, A), _[A + 3] = u.constant
            }
            f.value = _, f.needsUpdate = !0
        }
        return t.numPlanes = v, t.numIntersection = 0, _
    }
}

function Hb(c) {
    let t = new WeakMap;

    function e(u, l) {
        return l === Ic ? u.mapping = ps : l === Oc && (u.mapping = ms), u
    }

    function i(u) {
        if (u && u.isTexture && u.isRenderTargetTexture === !1) {
            const l = u.mapping;
            if (l === Ic || l === Oc) if (t.has(u)) {
                const f = t.get(u).texture;
                return e(f, u.mapping)
            } else {
                const f = u.image;
                if (f && f.height > 0) {
                    const h = new i1(f.height / 2);
                    return h.fromEquirectangularTexture(c, u), t.set(u, h), u.addEventListener("dispose", s), e(h.texture, u.mapping)
                } else return null
            }
        }
        return u
    }

    function s(u) {
        const l = u.target;
        l.removeEventListener("dispose", s);
        const f = t.get(l);
        f !== void 0 && (t.delete(l), f.dispose())
    }

    function a() {
        t = new WeakMap
    }

    return {get: i, dispose: a}
}

class wp extends Mp {
    constructor(t = -1, e = 1, i = 1, s = -1, a = .1, u = 2e3) {
        super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = s, this.near = a, this.far = u, this.updateProjectionMatrix()
    }

    copy(t, e) {
        return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this
    }

    setViewOffset(t, e, i, s, a, u) {
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = s, this.view.width = a, this.view.height = u, this.updateProjectionMatrix()
    }

    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix()
    }

    updateProjectionMatrix() {
        const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom),
            i = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
        let a = i - t, u = i + t, l = s + e, f = s - e;
        if (this.view !== null && this.view.enabled) {
            const h = (this.right - this.left) / this.view.fullWidth / this.zoom,
                d = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            a += h * this.view.offsetX, u = a + h * this.view.width, l -= d * this.view.offsetY, f = l - d * this.view.height
        }
        this.projectionMatrix.makeOrthographic(a, u, l, f, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }

    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e
    }
}

const us = 4, vd = [.125, .215, .35, .446, .526, .582], gr = 20, vc = new wp, xd = new ie;
let xc = null;
const mr = (1 + Math.sqrt(5)) / 2, ls = 1 / mr,
    yd = [new F(1, 1, 1), new F(-1, 1, 1), new F(1, 1, -1), new F(-1, 1, -1), new F(0, mr, ls), new F(0, mr, -ls), new F(ls, 0, mr), new F(-ls, 0, mr), new F(mr, ls, 0), new F(-mr, ls, 0)];

class Md {
    constructor(t) {
        this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial)
    }

    fromScene(t, e = 0, i = .1, s = 100) {
        xc = this._renderer.getRenderTarget(), this._setSize(256);
        const a = this._allocateTargets();
        return a.depthBuffer = !0, this._sceneToCubeUV(t, i, s, a), e > 0 && this._blur(a, 0, 0, e), this._applyPMREM(a), this._cleanup(a), a
    }

    fromEquirectangular(t, e = null) {
        return this._fromTexture(t, e)
    }

    fromCubemap(t, e = null) {
        return this._fromTexture(t, e)
    }

    compileCubemapShader() {
        this._cubemapMaterial === null && (this._cubemapMaterial = wd(), this._compileMaterial(this._cubemapMaterial))
    }

    compileEquirectangularShader() {
        this._equirectMaterial === null && (this._equirectMaterial = bd(), this._compileMaterial(this._equirectMaterial))
    }

    dispose() {
        this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose()
    }

    _setSize(t) {
        this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax)
    }

    _dispose() {
        this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
        for (let t = 0; t < this._lodPlanes.length; t++) this._lodPlanes[t].dispose()
    }

    _cleanup(t) {
        this._renderer.setRenderTarget(xc), t.scissorTest = !1, fo(t, 0, 0, t.width, t.height)
    }

    _fromTexture(t, e) {
        t.mapping === ps || t.mapping === ms ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), xc = this._renderer.getRenderTarget();
        const i = e || this._allocateTargets();
        return this._textureToCubeUV(t, i), this._applyPMREM(i), this._cleanup(i), i
    }

    _allocateTargets() {
        const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, i = {
            magFilter: Wn,
            minFilter: Wn,
            generateMipmaps: !1,
            type: Ks,
            format: ri,
            encoding: wr,
            depthBuffer: !1
        }, s = Sd(t, e, i);
        if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t) {
            this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Sd(t, e, i);
            const {_lodMax: a} = this;
            ({
                sizeLods: this._sizeLods,
                lodPlanes: this._lodPlanes,
                sigmas: this._sigmas
            } = qb(a)), this._blurMaterial = Xb(a, t, e)
        }
        return s
    }

    _compileMaterial(t) {
        const e = new Hn(this._lodPlanes[0], t);
        this._renderer.compile(e, vc)
    }

    _sceneToCubeUV(t, e, i, s) {
        const l = new Cn(90, 1, e, i), f = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], d = this._renderer,
            m = d.autoClear, g = d.toneMapping;
        d.getClearColor(xd), d.toneMapping = Ii, d.autoClear = !1;
        const x = new qc({name: "PMREM.Background", side: Ln, depthWrite: !1, depthTest: !1}), M = new Hn(new Lr, x);
        let v = !1;
        const _ = t.background;
        _ ? _.isColor && (x.color.copy(_), t.background = null, v = !0) : (x.color.copy(xd), v = !0);
        for (let S = 0; S < 6; S++) {
            const L = S % 3;
            L === 0 ? (l.up.set(0, f[S], 0), l.lookAt(h[S], 0, 0)) : L === 1 ? (l.up.set(0, 0, f[S]), l.lookAt(0, h[S], 0)) : (l.up.set(0, f[S], 0), l.lookAt(0, 0, h[S]));
            const T = this._cubeSize;
            fo(s, L * T, S > 2 ? T : 0, T, T), d.setRenderTarget(s), v && d.render(M, l), d.render(t, l)
        }
        M.geometry.dispose(), M.material.dispose(), d.toneMapping = g, d.autoClear = m, t.background = _
    }

    _textureToCubeUV(t, e) {
        const i = this._renderer, s = t.mapping === ps || t.mapping === ms;
        s ? (this._cubemapMaterial === null && (this._cubemapMaterial = wd()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = bd());
        const a = s ? this._cubemapMaterial : this._equirectMaterial, u = new Hn(this._lodPlanes[0], a), l = a.uniforms;
        l.envMap.value = t;
        const f = this._cubeSize;
        fo(e, 0, 0, 3 * f, 2 * f), i.setRenderTarget(e), i.render(u, vc)
    }

    _applyPMREM(t) {
        const e = this._renderer, i = e.autoClear;
        e.autoClear = !1;
        for (let s = 1; s < this._lodPlanes.length; s++) {
            const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]),
                u = yd[(s - 1) % yd.length];
            this._blur(t, s - 1, s, a, u)
        }
        e.autoClear = i
    }

    _blur(t, e, i, s, a) {
        const u = this._pingPongRenderTarget;
        this._halfBlur(t, u, e, i, s, "latitudinal", a), this._halfBlur(u, t, i, i, s, "longitudinal", a)
    }

    _halfBlur(t, e, i, s, a, u, l) {
        const f = this._renderer, h = this._blurMaterial;
        u !== "latitudinal" && u !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
        const d = 3, m = new Hn(this._lodPlanes[s], h), g = h.uniforms, x = this._sizeLods[i] - 1,
            M = isFinite(a) ? Math.PI / (2 * x) : 2 * Math.PI / (2 * gr - 1), v = a / M,
            _ = isFinite(a) ? 1 + Math.floor(d * v) : gr;
        _ > gr && console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${gr}`);
        const S = [];
        let L = 0;
        for (let B = 0; B < gr; ++B) {
            const w = B / v, N = Math.exp(-w * w / 2);
            S.push(N), B === 0 ? L += N : B < _ && (L += 2 * N)
        }
        for (let B = 0; B < S.length; B++) S[B] = S[B] / L;
        g.envMap.value = t.texture, g.samples.value = _, g.weights.value = S, g.latitudinal.value = u === "latitudinal", l && (g.poleAxis.value = l);
        const {_lodMax: T} = this;
        g.dTheta.value = M, g.mipInt.value = T - i;
        const A = this._sizeLods[s], E = 3 * A * (s > T - us ? s - T + us : 0), D = 4 * (this._cubeSize - A);
        fo(e, E, D, 3 * A, 2 * A), f.setRenderTarget(e), f.render(m, vc)
    }
}

function qb(c) {
    const t = [], e = [], i = [];
    let s = c;
    const a = c - us + 1 + vd.length;
    for (let u = 0; u < a; u++) {
        const l = Math.pow(2, s);
        e.push(l);
        let f = 1 / l;
        u > c - us ? f = vd[u - c + us - 1] : u === 0 && (f = 0), i.push(f);
        const h = 1 / (l - 2), d = -h, m = 1 + h, g = [d, d, m, d, m, m, d, d, m, m, d, m], x = 6, M = 6, v = 3, _ = 2,
            S = 1, L = new Float32Array(v * M * x), T = new Float32Array(_ * M * x), A = new Float32Array(S * M * x);
        for (let D = 0; D < x; D++) {
            const B = D % 3 * 2 / 3 - 1, w = D > 2 ? 0 : -1,
                N = [B, w, 0, B + 2 / 3, w, 0, B + 2 / 3, w + 1, 0, B, w, 0, B + 2 / 3, w + 1, 0, B, w + 1, 0];
            L.set(N, v * M * D), T.set(g, _ * M * D);
            const k = [D, D, D, D, D, D];
            A.set(k, S * M * D)
        }
        const E = new sn;
        E.setAttribute("position", new ui(L, v)), E.setAttribute("uv", new ui(T, _)), E.setAttribute("faceIndex", new ui(A, S)), t.push(E), s > us && s--
    }
    return {lodPlanes: t, sizeLods: e, sigmas: i}
}

function Sd(c, t, e) {
    const i = new Tr(c, t, e);
    return i.texture.mapping = To, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i
}

function fo(c, t, e, i, s) {
    c.viewport.set(t, e, i, s), c.scissor.set(t, e, i, s)
}

function Xb(c, t, e) {
    const i = new Float32Array(gr), s = new F(0, 1, 0);
    return new Ar({
        name: "SphericalGaussianBlur",
        defines: {n: gr, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${c}.0`},
        uniforms: {
            envMap: {value: null},
            samples: {value: 1},
            weights: {value: i},
            latitudinal: {value: !1},
            dTheta: {value: 0},
            mipInt: {value: 0},
            poleAxis: {value: s}
        },
        vertexShader: Zc(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
        blending: tr,
        depthTest: !1,
        depthWrite: !1
    })
}

function bd() {
    return new Ar({
        name: "EquirectangularToCubeUV", uniforms: {envMap: {value: null}}, vertexShader: Zc(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: tr, depthTest: !1, depthWrite: !1
    })
}

function wd() {
    return new Ar({
        name: "CubemapToCubeUV",
        uniforms: {envMap: {value: null}, flipEnvMap: {value: -1}},
        vertexShader: Zc(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
        blending: tr,
        depthTest: !1,
        depthWrite: !1
    })
}

function Zc() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
}

function Yb(c) {
    let t = new WeakMap, e = null;

    function i(l) {
        if (l && l.isTexture) {
            const f = l.mapping, h = f === Ic || f === Oc, d = f === ps || f === ms;
            if (h || d) if (l.isRenderTargetTexture && l.needsPMREMUpdate === !0) {
                l.needsPMREMUpdate = !1;
                let m = t.get(l);
                return e === null && (e = new Md(c)), m = h ? e.fromEquirectangular(l, m) : e.fromCubemap(l, m), t.set(l, m), m.texture
            } else {
                if (t.has(l)) return t.get(l).texture;
                {
                    const m = l.image;
                    if (h && m && m.height > 0 || d && m && s(m)) {
                        e === null && (e = new Md(c));
                        const g = h ? e.fromEquirectangular(l) : e.fromCubemap(l);
                        return t.set(l, g), l.addEventListener("dispose", a), g.texture
                    } else return null
                }
            }
        }
        return l
    }

    function s(l) {
        let f = 0;
        const h = 6;
        for (let d = 0; d < h; d++) l[d] !== void 0 && f++;
        return f === h
    }

    function a(l) {
        const f = l.target;
        f.removeEventListener("dispose", a);
        const h = t.get(f);
        h !== void 0 && (t.delete(f), h.dispose())
    }

    function u() {
        t = new WeakMap, e !== null && (e.dispose(), e = null)
    }

    return {get: i, dispose: u}
}

function Zb(c) {
    const t = {};

    function e(i) {
        if (t[i] !== void 0) return t[i];
        let s;
        switch (i) {
            case"WEBGL_depth_texture":
                s = c.getExtension("WEBGL_depth_texture") || c.getExtension("MOZ_WEBGL_depth_texture") || c.getExtension("WEBKIT_WEBGL_depth_texture");
                break;
            case"EXT_texture_filter_anisotropic":
                s = c.getExtension("EXT_texture_filter_anisotropic") || c.getExtension("MOZ_EXT_texture_filter_anisotropic") || c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
            case"WEBGL_compressed_texture_s3tc":
                s = c.getExtension("WEBGL_compressed_texture_s3tc") || c.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
            case"WEBGL_compressed_texture_pvrtc":
                s = c.getExtension("WEBGL_compressed_texture_pvrtc") || c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
            default:
                s = c.getExtension(i)
        }
        return t[i] = s, s
    }

    return {
        has: function (i) {
            return e(i) !== null
        }, init: function (i) {
            i.isWebGL2 ? e("EXT_color_buffer_float") : (e("WEBGL_depth_texture"), e("OES_texture_float"), e("OES_texture_half_float"), e("OES_texture_half_float_linear"), e("OES_standard_derivatives"), e("OES_element_index_uint"), e("OES_vertex_array_object"), e("ANGLE_instanced_arrays")), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture")
        }, get: function (i) {
            const s = e(i);
            return s === null && console.warn("THREE.WebGLRenderer: " + i + " extension not supported."), s
        }
    }
}

function $b(c, t, e, i) {
    const s = {}, a = new WeakMap;

    function u(m) {
        const g = m.target;
        g.index !== null && t.remove(g.index);
        for (const M in g.attributes) t.remove(g.attributes[M]);
        g.removeEventListener("dispose", u), delete s[g.id];
        const x = a.get(g);
        x && (t.remove(x), a.delete(g)), i.releaseStatesOfGeometry(g), g.isInstancedBufferGeometry === !0 && delete g._maxInstanceCount, e.memory.geometries--
    }

    function l(m, g) {
        return s[g.id] === !0 || (g.addEventListener("dispose", u), s[g.id] = !0, e.memory.geometries++), g
    }

    function f(m) {
        const g = m.attributes;
        for (const M in g) t.update(g[M], 34962);
        const x = m.morphAttributes;
        for (const M in x) {
            const v = x[M];
            for (let _ = 0, S = v.length; _ < S; _++) t.update(v[_], 34962)
        }
    }

    function h(m) {
        const g = [], x = m.index, M = m.attributes.position;
        let v = 0;
        if (x !== null) {
            const L = x.array;
            v = x.version;
            for (let T = 0, A = L.length; T < A; T += 3) {
                const E = L[T + 0], D = L[T + 1], B = L[T + 2];
                g.push(E, D, D, B, B, E)
            }
        } else {
            const L = M.array;
            v = M.version;
            for (let T = 0, A = L.length / 3 - 1; T < A; T += 3) {
                const E = T + 0, D = T + 1, B = T + 2;
                g.push(E, D, D, B, B, E)
            }
        }
        const _ = new (pp(g) ? yp : xp)(g, 1);
        _.version = v;
        const S = a.get(m);
        S && t.remove(S), a.set(m, _)
    }

    function d(m) {
        const g = a.get(m);
        if (g) {
            const x = m.index;
            x !== null && g.version < x.version && h(m)
        } else h(m);
        return a.get(m)
    }

    return {get: l, update: f, getWireframeAttribute: d}
}

function Jb(c, t, e, i) {
    const s = i.isWebGL2;
    let a;

    function u(g) {
        a = g
    }

    let l, f;

    function h(g) {
        l = g.type, f = g.bytesPerElement
    }

    function d(g, x) {
        c.drawElements(a, x, l, g * f), e.update(x, a, 1)
    }

    function m(g, x, M) {
        if (M === 0) return;
        let v, _;
        if (s) v = c, _ = "drawElementsInstanced"; else if (v = t.get("ANGLE_instanced_arrays"), _ = "drawElementsInstancedANGLE", v === null) {
            console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            return
        }
        v[_](a, x, l, g * f, M), e.update(x, a, M)
    }

    this.setMode = u, this.setIndex = h, this.render = d, this.renderInstances = m
}

function jb(c) {
    const t = {geometries: 0, textures: 0}, e = {frame: 0, calls: 0, triangles: 0, points: 0, lines: 0};

    function i(a, u, l) {
        switch (e.calls++, u) {
            case 4:
                e.triangles += l * (a / 3);
                break;
            case 1:
                e.lines += l * (a / 2);
                break;
            case 3:
                e.lines += l * (a - 1);
                break;
            case 2:
                e.lines += l * a;
                break;
            case 0:
                e.points += l * a;
                break;
            default:
                console.error("THREE.WebGLInfo: Unknown draw mode:", u);
                break
        }
    }

    function s() {
        e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
    }

    return {memory: t, render: e, programs: null, autoReset: !0, reset: s, update: i}
}

function Kb(c, t) {
    return c[0] - t[0]
}

function Qb(c, t) {
    return Math.abs(t[1]) - Math.abs(c[1])
}

function tw(c, t, e) {
    const i = {}, s = new Float32Array(8), a = new WeakMap, u = new Ae, l = [];
    for (let h = 0; h < 8; h++) l[h] = [h, 0];

    function f(h, d, m, g) {
        const x = h.morphTargetInfluences;
        if (t.isWebGL2 === !0) {
            const v = d.morphAttributes.position || d.morphAttributes.normal || d.morphAttributes.color,
                _ = v !== void 0 ? v.length : 0;
            let S = a.get(d);
            if (S === void 0 || S.count !== _) {
                let dt = function () {
                    X.dispose(), a.delete(d), d.removeEventListener("dispose", dt)
                };
                var M = dt;
                S !== void 0 && S.texture.dispose();
                const A = d.morphAttributes.position !== void 0, E = d.morphAttributes.normal !== void 0,
                    D = d.morphAttributes.color !== void 0, B = d.morphAttributes.position || [],
                    w = d.morphAttributes.normal || [], N = d.morphAttributes.color || [];
                let k = 0;
                A === !0 && (k = 1), E === !0 && (k = 2), D === !0 && (k = 3);
                let lt = d.attributes.position.count * k, vt = 1;
                lt > t.maxTextureSize && (vt = Math.ceil(lt / t.maxTextureSize), lt = t.maxTextureSize);
                const j = new Float32Array(lt * vt * 4 * _), X = new vp(j, lt, vt, _);
                X.type = vr, X.needsUpdate = !0;
                const ot = k * 4;
                for (let ut = 0; ut < _; ut++) {
                    const tt = B[ut], Y = w[ut], J = N[ut], ht = lt * vt * 4 * ut;
                    for (let gt = 0; gt < tt.count; gt++) {
                        const mt = gt * ot;
                        A === !0 && (u.fromBufferAttribute(tt, gt), j[ht + mt + 0] = u.x, j[ht + mt + 1] = u.y, j[ht + mt + 2] = u.z, j[ht + mt + 3] = 0), E === !0 && (u.fromBufferAttribute(Y, gt), j[ht + mt + 4] = u.x, j[ht + mt + 5] = u.y, j[ht + mt + 6] = u.z, j[ht + mt + 7] = 0), D === !0 && (u.fromBufferAttribute(J, gt), j[ht + mt + 8] = u.x, j[ht + mt + 9] = u.y, j[ht + mt + 10] = u.z, j[ht + mt + 11] = J.itemSize === 4 ? u.w : 1)
                    }
                }
                S = {count: _, texture: X, size: new Lt(lt, vt)}, a.set(d, S), d.addEventListener("dispose", dt)
            }
            let L = 0;
            for (let A = 0; A < x.length; A++) L += x[A];
            const T = d.morphTargetsRelative ? 1 : 1 - L;
            g.getUniforms().setValue(c, "morphTargetBaseInfluence", T), g.getUniforms().setValue(c, "morphTargetInfluences", x), g.getUniforms().setValue(c, "morphTargetsTexture", S.texture, e), g.getUniforms().setValue(c, "morphTargetsTextureSize", S.size)
        } else {
            const v = x === void 0 ? 0 : x.length;
            let _ = i[d.id];
            if (_ === void 0 || _.length !== v) {
                _ = [];
                for (let E = 0; E < v; E++) _[E] = [E, 0];
                i[d.id] = _
            }
            for (let E = 0; E < v; E++) {
                const D = _[E];
                D[0] = E, D[1] = x[E]
            }
            _.sort(Qb);
            for (let E = 0; E < 8; E++) E < v && _[E][1] ? (l[E][0] = _[E][0], l[E][1] = _[E][1]) : (l[E][0] = Number.MAX_SAFE_INTEGER, l[E][1] = 0);
            l.sort(Kb);
            const S = d.morphAttributes.position, L = d.morphAttributes.normal;
            let T = 0;
            for (let E = 0; E < 8; E++) {
                const D = l[E], B = D[0], w = D[1];
                B !== Number.MAX_SAFE_INTEGER && w ? (S && d.getAttribute("morphTarget" + E) !== S[B] && d.setAttribute("morphTarget" + E, S[B]), L && d.getAttribute("morphNormal" + E) !== L[B] && d.setAttribute("morphNormal" + E, L[B]), s[E] = w, T += w) : (S && d.hasAttribute("morphTarget" + E) === !0 && d.deleteAttribute("morphTarget" + E), L && d.hasAttribute("morphNormal" + E) === !0 && d.deleteAttribute("morphNormal" + E), s[E] = 0)
            }
            const A = d.morphTargetsRelative ? 1 : 1 - T;
            g.getUniforms().setValue(c, "morphTargetBaseInfluence", A), g.getUniforms().setValue(c, "morphTargetInfluences", s)
        }
    }

    return {update: f}
}

function ew(c, t, e, i) {
    let s = new WeakMap;

    function a(f) {
        const h = i.render.frame, d = f.geometry, m = t.get(f, d);
        return s.get(m) !== h && (t.update(m), s.set(m, h)), f.isInstancedMesh && (f.hasEventListener("dispose", l) === !1 && f.addEventListener("dispose", l), e.update(f.instanceMatrix, 34962), f.instanceColor !== null && e.update(f.instanceColor, 34962)), m
    }

    function u() {
        s = new WeakMap
    }

    function l(f) {
        const h = f.target;
        h.removeEventListener("dispose", l), e.remove(h.instanceMatrix), h.instanceColor !== null && e.remove(h.instanceColor)
    }

    return {update: a, dispose: u}
}

const Tp = new qn, Ep = new vp, Ap = new WM, Cp = new Sp, Td = [], Ed = [], Ad = new Float32Array(16),
    Cd = new Float32Array(9), Ld = new Float32Array(4);

function xs(c, t, e) {
    const i = c[0];
    if (i <= 0 || i > 0) return c;
    const s = t * e;
    let a = Td[s];
    if (a === void 0 && (a = new Float32Array(s), Td[s] = a), t !== 0) {
        i.toArray(a, 0);
        for (let u = 1, l = 0; u !== t; ++u) l += e, c[u].toArray(a, l)
    }
    return a
}

function He(c, t) {
    if (c.length !== t.length) return !1;
    for (let e = 0, i = c.length; e < i; e++) if (c[e] !== t[e]) return !1;
    return !0
}

function qe(c, t) {
    for (let e = 0, i = t.length; e < i; e++) c[e] = t[e]
}

function Co(c, t) {
    let e = Ed[t];
    e === void 0 && (e = new Int32Array(t), Ed[t] = e);
    for (let i = 0; i !== t; ++i) e[i] = c.allocateTextureUnit();
    return e
}

function nw(c, t) {
    const e = this.cache;
    e[0] !== t && (c.uniform1f(this.addr, t), e[0] = t)
}

function iw(c, t) {
    const e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (c.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y); else {
        if (He(e, t)) return;
        c.uniform2fv(this.addr, t), qe(e, t)
    }
}

function rw(c, t) {
    const e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (c.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z); else if (t.r !== void 0) (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (c.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b); else {
        if (He(e, t)) return;
        c.uniform3fv(this.addr, t), qe(e, t)
    }
}

function sw(c, t) {
    const e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (c.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w); else {
        if (He(e, t)) return;
        c.uniform4fv(this.addr, t), qe(e, t)
    }
}

function aw(c, t) {
    const e = this.cache, i = t.elements;
    if (i === void 0) {
        if (He(e, t)) return;
        c.uniformMatrix2fv(this.addr, !1, t), qe(e, t)
    } else {
        if (He(e, i)) return;
        Ld.set(i), c.uniformMatrix2fv(this.addr, !1, Ld), qe(e, i)
    }
}

function ow(c, t) {
    const e = this.cache, i = t.elements;
    if (i === void 0) {
        if (He(e, t)) return;
        c.uniformMatrix3fv(this.addr, !1, t), qe(e, t)
    } else {
        if (He(e, i)) return;
        Cd.set(i), c.uniformMatrix3fv(this.addr, !1, Cd), qe(e, i)
    }
}

function lw(c, t) {
    const e = this.cache, i = t.elements;
    if (i === void 0) {
        if (He(e, t)) return;
        c.uniformMatrix4fv(this.addr, !1, t), qe(e, t)
    } else {
        if (He(e, i)) return;
        Ad.set(i), c.uniformMatrix4fv(this.addr, !1, Ad), qe(e, i)
    }
}

function cw(c, t) {
    const e = this.cache;
    e[0] !== t && (c.uniform1i(this.addr, t), e[0] = t)
}

function uw(c, t) {
    const e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (c.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y); else {
        if (He(e, t)) return;
        c.uniform2iv(this.addr, t), qe(e, t)
    }
}

function hw(c, t) {
    const e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (c.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z); else {
        if (He(e, t)) return;
        c.uniform3iv(this.addr, t), qe(e, t)
    }
}

function fw(c, t) {
    const e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (c.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w); else {
        if (He(e, t)) return;
        c.uniform4iv(this.addr, t), qe(e, t)
    }
}

function dw(c, t) {
    const e = this.cache;
    e[0] !== t && (c.uniform1ui(this.addr, t), e[0] = t)
}

function pw(c, t) {
    const e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (c.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y); else {
        if (He(e, t)) return;
        c.uniform2uiv(this.addr, t), qe(e, t)
    }
}

function mw(c, t) {
    const e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (c.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z); else {
        if (He(e, t)) return;
        c.uniform3uiv(this.addr, t), qe(e, t)
    }
}

function gw(c, t) {
    const e = this.cache;
    if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (c.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w); else {
        if (He(e, t)) return;
        c.uniform4uiv(this.addr, t), qe(e, t)
    }
}

function _w(c, t, e) {
    const i = this.cache, s = e.allocateTextureUnit();
    i[0] !== s && (c.uniform1i(this.addr, s), i[0] = s), e.setTexture2D(t || Tp, s)
}

function vw(c, t, e) {
    const i = this.cache, s = e.allocateTextureUnit();
    i[0] !== s && (c.uniform1i(this.addr, s), i[0] = s), e.setTexture3D(t || Ap, s)
}

function xw(c, t, e) {
    const i = this.cache, s = e.allocateTextureUnit();
    i[0] !== s && (c.uniform1i(this.addr, s), i[0] = s), e.setTextureCube(t || Cp, s)
}

function yw(c, t, e) {
    const i = this.cache, s = e.allocateTextureUnit();
    i[0] !== s && (c.uniform1i(this.addr, s), i[0] = s), e.setTexture2DArray(t || Ep, s)
}

function Mw(c) {
    switch (c) {
        case 5126:
            return nw;
        case 35664:
            return iw;
        case 35665:
            return rw;
        case 35666:
            return sw;
        case 35674:
            return aw;
        case 35675:
            return ow;
        case 35676:
            return lw;
        case 5124:
        case 35670:
            return cw;
        case 35667:
        case 35671:
            return uw;
        case 35668:
        case 35672:
            return hw;
        case 35669:
        case 35673:
            return fw;
        case 5125:
            return dw;
        case 36294:
            return pw;
        case 36295:
            return mw;
        case 36296:
            return gw;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return _w;
        case 35679:
        case 36299:
        case 36307:
            return vw;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return xw;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return yw
    }
}

function Sw(c, t) {
    c.uniform1fv(this.addr, t)
}

function bw(c, t) {
    const e = xs(t, this.size, 2);
    c.uniform2fv(this.addr, e)
}

function ww(c, t) {
    const e = xs(t, this.size, 3);
    c.uniform3fv(this.addr, e)
}

function Tw(c, t) {
    const e = xs(t, this.size, 4);
    c.uniform4fv(this.addr, e)
}

function Ew(c, t) {
    const e = xs(t, this.size, 4);
    c.uniformMatrix2fv(this.addr, !1, e)
}

function Aw(c, t) {
    const e = xs(t, this.size, 9);
    c.uniformMatrix3fv(this.addr, !1, e)
}

function Cw(c, t) {
    const e = xs(t, this.size, 16);
    c.uniformMatrix4fv(this.addr, !1, e)
}

function Lw(c, t) {
    c.uniform1iv(this.addr, t)
}

function Pw(c, t) {
    c.uniform2iv(this.addr, t)
}

function Rw(c, t) {
    c.uniform3iv(this.addr, t)
}

function Dw(c, t) {
    c.uniform4iv(this.addr, t)
}

function Iw(c, t) {
    c.uniform1uiv(this.addr, t)
}

function Ow(c, t) {
    c.uniform2uiv(this.addr, t)
}

function Fw(c, t) {
    c.uniform3uiv(this.addr, t)
}

function Nw(c, t) {
    c.uniform4uiv(this.addr, t)
}

function Uw(c, t, e) {
    const i = this.cache, s = t.length, a = Co(e, s);
    He(i, a) || (c.uniform1iv(this.addr, a), qe(i, a));
    for (let u = 0; u !== s; ++u) e.setTexture2D(t[u] || Tp, a[u])
}

function zw(c, t, e) {
    const i = this.cache, s = t.length, a = Co(e, s);
    He(i, a) || (c.uniform1iv(this.addr, a), qe(i, a));
    for (let u = 0; u !== s; ++u) e.setTexture3D(t[u] || Ap, a[u])
}

function Bw(c, t, e) {
    const i = this.cache, s = t.length, a = Co(e, s);
    He(i, a) || (c.uniform1iv(this.addr, a), qe(i, a));
    for (let u = 0; u !== s; ++u) e.setTextureCube(t[u] || Cp, a[u])
}

function Gw(c, t, e) {
    const i = this.cache, s = t.length, a = Co(e, s);
    He(i, a) || (c.uniform1iv(this.addr, a), qe(i, a));
    for (let u = 0; u !== s; ++u) e.setTexture2DArray(t[u] || Ep, a[u])
}

function Ww(c) {
    switch (c) {
        case 5126:
            return Sw;
        case 35664:
            return bw;
        case 35665:
            return ww;
        case 35666:
            return Tw;
        case 35674:
            return Ew;
        case 35675:
            return Aw;
        case 35676:
            return Cw;
        case 5124:
        case 35670:
            return Lw;
        case 35667:
        case 35671:
            return Pw;
        case 35668:
        case 35672:
            return Rw;
        case 35669:
        case 35673:
            return Dw;
        case 5125:
            return Iw;
        case 36294:
            return Ow;
        case 36295:
            return Fw;
        case 36296:
            return Nw;
        case 35678:
        case 36198:
        case 36298:
        case 36306:
        case 35682:
            return Uw;
        case 35679:
        case 36299:
        case 36307:
            return zw;
        case 35680:
        case 36300:
        case 36308:
        case 36293:
            return Bw;
        case 36289:
        case 36303:
        case 36311:
        case 36292:
            return Gw
    }
}

class Vw {
    constructor(t, e, i) {
        this.id = t, this.addr = i, this.cache = [], this.setValue = Mw(e.type)
    }
}

class kw {
    constructor(t, e, i) {
        this.id = t, this.addr = i, this.cache = [], this.size = e.size, this.setValue = Ww(e.type)
    }
}

class Hw {
    constructor(t) {
        this.id = t, this.seq = [], this.map = {}
    }

    setValue(t, e, i) {
        const s = this.seq;
        for (let a = 0, u = s.length; a !== u; ++a) {
            const l = s[a];
            l.setValue(t, e[l.id], i)
        }
    }
}

const yc = /(\w+)(\])?(\[|\.)?/g;

function Pd(c, t) {
    c.seq.push(t), c.map[t.id] = t
}

function qw(c, t, e) {
    const i = c.name, s = i.length;
    for (yc.lastIndex = 0; ;) {
        const a = yc.exec(i), u = yc.lastIndex;
        let l = a[1];
        const f = a[2] === "]", h = a[3];
        if (f && (l = l | 0), h === void 0 || h === "[" && u + 2 === s) {
            Pd(e, h === void 0 ? new Vw(l, c, t) : new kw(l, c, t));
            break
        } else {
            let m = e.map[l];
            m === void 0 && (m = new Hw(l), Pd(e, m)), e = m
        }
    }
}

class yo {
    constructor(t, e) {
        this.seq = [], this.map = {};
        const i = t.getProgramParameter(e, 35718);
        for (let s = 0; s < i; ++s) {
            const a = t.getActiveUniform(e, s), u = t.getUniformLocation(e, a.name);
            qw(a, u, this)
        }
    }

    setValue(t, e, i, s) {
        const a = this.map[e];
        a !== void 0 && a.setValue(t, i, s)
    }

    setOptional(t, e, i) {
        const s = e[i];
        s !== void 0 && this.setValue(t, i, s)
    }

    static upload(t, e, i, s) {
        for (let a = 0, u = e.length; a !== u; ++a) {
            const l = e[a], f = i[l.id];
            f.needsUpdate !== !1 && l.setValue(t, f.value, s)
        }
    }

    static seqWithValue(t, e) {
        const i = [];
        for (let s = 0, a = t.length; s !== a; ++s) {
            const u = t[s];
            u.id in e && i.push(u)
        }
        return i
    }
}

function Rd(c, t, e) {
    const i = c.createShader(t);
    return c.shaderSource(i, e), c.compileShader(i), i
}

let Xw = 0;

function Yw(c, t) {
    const e = c.split(`
`), i = [], s = Math.max(t - 6, 0), a = Math.min(t + 6, e.length);
    for (let u = s; u < a; u++) {
        const l = u + 1;
        i.push(`${l === t ? ">" : " "} ${l}: ${e[u]}`)
    }
    return i.join(`
`)
}

function Zw(c) {
    switch (c) {
        case wr:
            return ["Linear", "( value )"];
        case Pe:
            return ["sRGB", "( value )"];
        default:
            return console.warn("THREE.WebGLProgram: Unsupported encoding:", c), ["Linear", "( value )"]
    }
}

function Dd(c, t, e) {
    const i = c.getShaderParameter(t, 35713), s = c.getShaderInfoLog(t).trim();
    if (i && s === "") return "";
    const a = /ERROR: 0:(\d+)/.exec(s);
    if (a) {
        const u = parseInt(a[1]);
        return e.toUpperCase() + `

` + s + `

` + Yw(c.getShaderSource(t), u)
    } else return s
}

function $w(c, t) {
    const e = Zw(t);
    return "vec4 " + c + "( vec4 value ) { return LinearTo" + e[0] + e[1] + "; }"
}

function Jw(c, t) {
    let e;
    switch (t) {
        case pM:
            e = "Linear";
            break;
        case mM:
            e = "Reinhard";
            break;
        case gM:
            e = "OptimizedCineon";
            break;
        case _M:
            e = "ACESFilmic";
            break;
        case vM:
            e = "Custom";
            break;
        default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear"
    }
    return "vec3 " + c + "( vec3 color ) { return " + e + "ToneMapping( color ); }"
}

function jw(c) {
    return [c.extensionDerivatives || !!c.envMapCubeUVHeight || c.bumpMap || c.tangentSpaceNormalMap || c.clearcoatNormalMap || c.flatShading || c.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (c.extensionFragDepth || c.logarithmicDepthBuffer) && c.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", c.extensionDrawBuffers && c.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (c.extensionShaderTextureLOD || c.envMap || c.transmission) && c.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Xs).join(`
`)
}

function Kw(c) {
    const t = [];
    for (const e in c) {
        const i = c[e];
        i !== !1 && t.push("#define " + e + " " + i)
    }
    return t.join(`
`)
}

function Qw(c, t) {
    const e = {}, i = c.getProgramParameter(t, 35721);
    for (let s = 0; s < i; s++) {
        const a = c.getActiveAttrib(t, s), u = a.name;
        let l = 1;
        a.type === 35674 && (l = 2), a.type === 35675 && (l = 3), a.type === 35676 && (l = 4), e[u] = {
            type: a.type,
            location: c.getAttribLocation(t, u),
            locationSize: l
        }
    }
    return e
}

function Xs(c) {
    return c !== ""
}

function Id(c, t) {
    const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
    return c.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
}

function Od(c, t) {
    return c.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
}

const tT = /^[ \t]*#include +<([\w\d./]+)>/gm;

function zc(c) {
    return c.replace(tT, eT)
}

function eT(c, t) {
    const e = Qt[t];
    if (e === void 0) throw new Error("Can not resolve #include <" + t + ">");
    return zc(e)
}

const nT = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

function Fd(c) {
    return c.replace(nT, iT)
}

function iT(c, t, e, i) {
    let s = "";
    for (let a = parseInt(t); a < parseInt(e); a++) s += i.replace(/\[\s*i\s*\]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
    return s
}

function Nd(c) {
    let t = "precision " + c.precision + ` float;
precision ` + c.precision + " int;";
    return c.precision === "highp" ? t += `
#define HIGH_PRECISION` : c.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : c.precision === "lowp" && (t += `
#define LOW_PRECISION`), t
}

function rT(c) {
    let t = "SHADOWMAP_TYPE_BASIC";
    return c.shadowMapType === op ? t = "SHADOWMAP_TYPE_PCF" : c.shadowMapType === lp ? t = "SHADOWMAP_TYPE_PCF_SOFT" : c.shadowMapType === qs && (t = "SHADOWMAP_TYPE_VSM"), t
}

function sT(c) {
    let t = "ENVMAP_TYPE_CUBE";
    if (c.envMap) switch (c.envMapMode) {
        case ps:
        case ms:
            t = "ENVMAP_TYPE_CUBE";
            break;
        case To:
            t = "ENVMAP_TYPE_CUBE_UV";
            break
    }
    return t
}

function aT(c) {
    let t = "ENVMAP_MODE_REFLECTION";
    if (c.envMap) switch (c.envMapMode) {
        case ms:
            t = "ENVMAP_MODE_REFRACTION";
            break
    }
    return t
}

function oT(c) {
    let t = "ENVMAP_BLENDING_NONE";
    if (c.envMap) switch (c.combine) {
        case kc:
            t = "ENVMAP_BLENDING_MULTIPLY";
            break;
        case fM:
            t = "ENVMAP_BLENDING_MIX";
            break;
        case dM:
            t = "ENVMAP_BLENDING_ADD";
            break
    }
    return t
}

function lT(c) {
    const t = c.envMapCubeUVHeight;
    if (t === null) return null;
    const e = Math.log2(t) - 2, i = 1 / t;
    return {texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)), texelHeight: i, maxMip: e}
}

function cT(c, t, e, i) {
    const s = c.getContext(), a = e.defines;
    let u = e.vertexShader, l = e.fragmentShader;
    const f = rT(e), h = sT(e), d = aT(e), m = oT(e), g = lT(e), x = e.isWebGL2 ? "" : jw(e), M = Kw(a),
        v = s.createProgram();
    let _, S, L = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
    e.isRawShaderMaterial ? (_ = [M].filter(Xs).join(`
`), _.length > 0 && (_ += `
`), S = [x, M].filter(Xs).join(`
`), S.length > 0 && (S += `
`)) : (_ = [Nd(e), "#define SHADER_NAME " + e.shaderName, M, e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + d : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMap && e.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", e.normalMap && e.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.displacementMap && e.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", e.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", e.vertexTangents ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUvs ? "#define USE_UV" : "", e.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", e.morphColors && e.isWebGL2 ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 && e.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", e.morphTargetsCount > 0 && e.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 && e.isWebGL2 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + f : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.logarithmicDepthBuffer && e.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Xs).join(`
`), S = [x, Nd(e), "#define SHADER_NAME " + e.shaderName, M, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + h : "", e.envMap ? "#define " + d : "", e.envMap ? "#define " + m : "", g ? "#define CUBEUV_TEXEL_WIDTH " + g.texelWidth : "", g ? "#define CUBEUV_TEXEL_HEIGHT " + g.texelHeight : "", g ? "#define CUBEUV_MAX_MIP " + g.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMap && e.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", e.normalMap && e.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", e.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.vertexTangents ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUvs ? "#define USE_UV" : "", e.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + f : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.logarithmicDepthBuffer && e.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== Ii ? "#define TONE_MAPPING" : "", e.toneMapping !== Ii ? Qt.tonemapping_pars_fragment : "", e.toneMapping !== Ii ? Jw("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", Qt.encodings_pars_fragment, $w("linearToOutputTexel", e.outputEncoding), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(Xs).join(`
`)), u = zc(u), u = Id(u, e), u = Od(u, e), l = zc(l), l = Id(l, e), l = Od(l, e), u = Fd(u), l = Fd(l), e.isWebGL2 && e.isRawShaderMaterial !== !0 && (L = `#version 300 es
`, _ = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + _, S = ["#define varying in", e.glslVersion === sd ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === sd ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + S);
    const T = L + _ + u, A = L + S + l, E = Rd(s, 35633, T), D = Rd(s, 35632, A);
    if (s.attachShader(v, E), s.attachShader(v, D), e.index0AttributeName !== void 0 ? s.bindAttribLocation(v, 0, e.index0AttributeName) : e.morphTargets === !0 && s.bindAttribLocation(v, 0, "position"), s.linkProgram(v), c.debug.checkShaderErrors) {
        const N = s.getProgramInfoLog(v).trim(), k = s.getShaderInfoLog(E).trim(), lt = s.getShaderInfoLog(D).trim();
        let vt = !0, j = !0;
        if (s.getProgramParameter(v, 35714) === !1) {
            vt = !1;
            const X = Dd(s, E, "vertex"), ot = Dd(s, D, "fragment");
            console.error("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(v, 35715) + `

Program Info Log: ` + N + `
` + X + `
` + ot)
        } else N !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", N) : (k === "" || lt === "") && (j = !1);
        j && (this.diagnostics = {
            runnable: vt,
            programLog: N,
            vertexShader: {log: k, prefix: _},
            fragmentShader: {log: lt, prefix: S}
        })
    }
    s.deleteShader(E), s.deleteShader(D);
    let B;
    this.getUniforms = function () {
        return B === void 0 && (B = new yo(s, v)), B
    };
    let w;
    return this.getAttributes = function () {
        return w === void 0 && (w = Qw(s, v)), w
    }, this.destroy = function () {
        i.releaseStatesOfProgram(this), s.deleteProgram(v), this.program = void 0
    }, this.name = e.shaderName, this.id = Xw++, this.cacheKey = t, this.usedTimes = 1, this.program = v, this.vertexShader = E, this.fragmentShader = D, this
}

let uT = 0;

class hT {
    constructor() {
        this.shaderCache = new Map, this.materialCache = new Map
    }

    update(t) {
        const e = t.vertexShader, i = t.fragmentShader, s = this._getShaderStage(e), a = this._getShaderStage(i),
            u = this._getShaderCacheForMaterial(t);
        return u.has(s) === !1 && (u.add(s), s.usedTimes++), u.has(a) === !1 && (u.add(a), a.usedTimes++), this
    }

    remove(t) {
        const e = this.materialCache.get(t);
        for (const i of e) i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
        return this.materialCache.delete(t), this
    }

    getVertexShaderID(t) {
        return this._getShaderStage(t.vertexShader).id
    }

    getFragmentShaderID(t) {
        return this._getShaderStage(t.fragmentShader).id
    }

    dispose() {
        this.shaderCache.clear(), this.materialCache.clear()
    }

    _getShaderCacheForMaterial(t) {
        const e = this.materialCache;
        let i = e.get(t);
        return i === void 0 && (i = new Set, e.set(t, i)), i
    }

    _getShaderStage(t) {
        const e = this.shaderCache;
        let i = e.get(t);
        return i === void 0 && (i = new fT(t), e.set(t, i)), i
    }
}

class fT {
    constructor(t) {
        this.id = uT++, this.code = t, this.usedTimes = 0
    }
}

function dT(c, t, e, i, s, a, u) {
    const l = new Hc, f = new hT, h = [], d = s.isWebGL2, m = s.logarithmicDepthBuffer, g = s.vertexTextures;
    let x = s.precision;
    const M = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
    };

    function v(w, N, k, lt, vt) {
        const j = lt.fog, X = vt.geometry, ot = w.isMeshStandardMaterial ? lt.environment : null,
            dt = (w.isMeshStandardMaterial ? e : t).get(w.envMap || ot),
            ut = !!dt && dt.mapping === To ? dt.image.height : null, tt = M[w.type];
        w.precision !== null && (x = s.getMaxPrecision(w.precision), x !== w.precision && console.warn("THREE.WebGLProgram.getParameters:", w.precision, "not supported, using", x, "instead."));
        const Y = X.morphAttributes.position || X.morphAttributes.normal || X.morphAttributes.color,
            J = Y !== void 0 ? Y.length : 0;
        let ht = 0;
        X.morphAttributes.position !== void 0 && (ht = 1), X.morphAttributes.normal !== void 0 && (ht = 2), X.morphAttributes.color !== void 0 && (ht = 3);
        let gt, mt, Ct, Ut;
        if (tt) {
            const oe = ci[tt];
            gt = oe.vertexShader, mt = oe.fragmentShader
        } else gt = w.vertexShader, mt = w.fragmentShader, f.update(w), Ct = f.getVertexShaderID(w), Ut = f.getFragmentShaderID(w);
        const rt = c.getRenderTarget(), le = w.alphaTest > 0, zt = w.clearcoat > 0, Bt = w.iridescence > 0;
        return {
            isWebGL2: d,
            shaderID: tt,
            shaderName: w.type,
            vertexShader: gt,
            fragmentShader: mt,
            defines: w.defines,
            customVertexShaderID: Ct,
            customFragmentShaderID: Ut,
            isRawShaderMaterial: w.isRawShaderMaterial === !0,
            glslVersion: w.glslVersion,
            precision: x,
            instancing: vt.isInstancedMesh === !0,
            instancingColor: vt.isInstancedMesh === !0 && vt.instanceColor !== null,
            supportsVertexTextures: g,
            outputEncoding: rt === null ? c.outputEncoding : rt.isXRRenderTarget === !0 ? rt.texture.encoding : wr,
            map: !!w.map,
            matcap: !!w.matcap,
            envMap: !!dt,
            envMapMode: dt && dt.mapping,
            envMapCubeUVHeight: ut,
            lightMap: !!w.lightMap,
            aoMap: !!w.aoMap,
            emissiveMap: !!w.emissiveMap,
            bumpMap: !!w.bumpMap,
            normalMap: !!w.normalMap,
            objectSpaceNormalMap: w.normalMapType === UM,
            tangentSpaceNormalMap: w.normalMapType === dp,
            decodeVideoTexture: !!w.map && w.map.isVideoTexture === !0 && w.map.encoding === Pe,
            clearcoat: zt,
            clearcoatMap: zt && !!w.clearcoatMap,
            clearcoatRoughnessMap: zt && !!w.clearcoatRoughnessMap,
            clearcoatNormalMap: zt && !!w.clearcoatNormalMap,
            iridescence: Bt,
            iridescenceMap: Bt && !!w.iridescenceMap,
            iridescenceThicknessMap: Bt && !!w.iridescenceThicknessMap,
            displacementMap: !!w.displacementMap,
            roughnessMap: !!w.roughnessMap,
            metalnessMap: !!w.metalnessMap,
            specularMap: !!w.specularMap,
            specularIntensityMap: !!w.specularIntensityMap,
            specularColorMap: !!w.specularColorMap,
            opaque: w.transparent === !1 && w.blending === hs,
            alphaMap: !!w.alphaMap,
            alphaTest: le,
            gradientMap: !!w.gradientMap,
            sheen: w.sheen > 0,
            sheenColorMap: !!w.sheenColorMap,
            sheenRoughnessMap: !!w.sheenRoughnessMap,
            transmission: w.transmission > 0,
            transmissionMap: !!w.transmissionMap,
            thicknessMap: !!w.thicknessMap,
            combine: w.combine,
            vertexTangents: !!w.normalMap && !!X.attributes.tangent,
            vertexColors: w.vertexColors,
            vertexAlphas: w.vertexColors === !0 && !!X.attributes.color && X.attributes.color.itemSize === 4,
            vertexUvs: !!w.map || !!w.bumpMap || !!w.normalMap || !!w.specularMap || !!w.alphaMap || !!w.emissiveMap || !!w.roughnessMap || !!w.metalnessMap || !!w.clearcoatMap || !!w.clearcoatRoughnessMap || !!w.clearcoatNormalMap || !!w.iridescenceMap || !!w.iridescenceThicknessMap || !!w.displacementMap || !!w.transmissionMap || !!w.thicknessMap || !!w.specularIntensityMap || !!w.specularColorMap || !!w.sheenColorMap || !!w.sheenRoughnessMap,
            uvsVertexOnly: !(!!w.map || !!w.bumpMap || !!w.normalMap || !!w.specularMap || !!w.alphaMap || !!w.emissiveMap || !!w.roughnessMap || !!w.metalnessMap || !!w.clearcoatNormalMap || !!w.iridescenceMap || !!w.iridescenceThicknessMap || w.transmission > 0 || !!w.transmissionMap || !!w.thicknessMap || !!w.specularIntensityMap || !!w.specularColorMap || w.sheen > 0 || !!w.sheenColorMap || !!w.sheenRoughnessMap) && !!w.displacementMap,
            fog: !!j,
            useFog: w.fog === !0,
            fogExp2: j && j.isFogExp2,
            flatShading: !!w.flatShading,
            sizeAttenuation: w.sizeAttenuation,
            logarithmicDepthBuffer: m,
            skinning: vt.isSkinnedMesh === !0,
            morphTargets: X.morphAttributes.position !== void 0,
            morphNormals: X.morphAttributes.normal !== void 0,
            morphColors: X.morphAttributes.color !== void 0,
            morphTargetsCount: J,
            morphTextureStride: ht,
            numDirLights: N.directional.length,
            numPointLights: N.point.length,
            numSpotLights: N.spot.length,
            numSpotLightMaps: N.spotLightMap.length,
            numRectAreaLights: N.rectArea.length,
            numHemiLights: N.hemi.length,
            numDirLightShadows: N.directionalShadowMap.length,
            numPointLightShadows: N.pointShadowMap.length,
            numSpotLightShadows: N.spotShadowMap.length,
            numSpotLightShadowsWithMaps: N.numSpotLightShadowsWithMaps,
            numClippingPlanes: u.numPlanes,
            numClipIntersection: u.numIntersection,
            dithering: w.dithering,
            shadowMapEnabled: c.shadowMap.enabled && k.length > 0,
            shadowMapType: c.shadowMap.type,
            toneMapping: w.toneMapped ? c.toneMapping : Ii,
            physicallyCorrectLights: c.physicallyCorrectLights,
            premultipliedAlpha: w.premultipliedAlpha,
            doubleSided: w.side === Ri,
            flipSided: w.side === Ln,
            useDepthPacking: !!w.depthPacking,
            depthPacking: w.depthPacking || 0,
            index0AttributeName: w.index0AttributeName,
            extensionDerivatives: w.extensions && w.extensions.derivatives,
            extensionFragDepth: w.extensions && w.extensions.fragDepth,
            extensionDrawBuffers: w.extensions && w.extensions.drawBuffers,
            extensionShaderTextureLOD: w.extensions && w.extensions.shaderTextureLOD,
            rendererExtensionFragDepth: d || i.has("EXT_frag_depth"),
            rendererExtensionDrawBuffers: d || i.has("WEBGL_draw_buffers"),
            rendererExtensionShaderTextureLod: d || i.has("EXT_shader_texture_lod"),
            customProgramCacheKey: w.customProgramCacheKey()
        }
    }

    function _(w) {
        const N = [];
        if (w.shaderID ? N.push(w.shaderID) : (N.push(w.customVertexShaderID), N.push(w.customFragmentShaderID)), w.defines !== void 0) for (const k in w.defines) N.push(k), N.push(w.defines[k]);
        return w.isRawShaderMaterial === !1 && (S(N, w), L(N, w), N.push(c.outputEncoding)), N.push(w.customProgramCacheKey), N.join()
    }

    function S(w, N) {
        w.push(N.precision), w.push(N.outputEncoding), w.push(N.envMapMode), w.push(N.envMapCubeUVHeight), w.push(N.combine), w.push(N.vertexUvs), w.push(N.fogExp2), w.push(N.sizeAttenuation), w.push(N.morphTargetsCount), w.push(N.morphAttributeCount), w.push(N.numDirLights), w.push(N.numPointLights), w.push(N.numSpotLights), w.push(N.numSpotLightMaps), w.push(N.numHemiLights), w.push(N.numRectAreaLights), w.push(N.numDirLightShadows), w.push(N.numPointLightShadows), w.push(N.numSpotLightShadows), w.push(N.numSpotLightShadowsWithMaps), w.push(N.shadowMapType), w.push(N.toneMapping), w.push(N.numClippingPlanes), w.push(N.numClipIntersection), w.push(N.depthPacking)
    }

    function L(w, N) {
        l.disableAll(), N.isWebGL2 && l.enable(0), N.supportsVertexTextures && l.enable(1), N.instancing && l.enable(2), N.instancingColor && l.enable(3), N.map && l.enable(4), N.matcap && l.enable(5), N.envMap && l.enable(6), N.lightMap && l.enable(7), N.aoMap && l.enable(8), N.emissiveMap && l.enable(9), N.bumpMap && l.enable(10), N.normalMap && l.enable(11), N.objectSpaceNormalMap && l.enable(12), N.tangentSpaceNormalMap && l.enable(13), N.clearcoat && l.enable(14), N.clearcoatMap && l.enable(15), N.clearcoatRoughnessMap && l.enable(16), N.clearcoatNormalMap && l.enable(17), N.iridescence && l.enable(18), N.iridescenceMap && l.enable(19), N.iridescenceThicknessMap && l.enable(20), N.displacementMap && l.enable(21), N.specularMap && l.enable(22), N.roughnessMap && l.enable(23), N.metalnessMap && l.enable(24), N.gradientMap && l.enable(25), N.alphaMap && l.enable(26), N.alphaTest && l.enable(27), N.vertexColors && l.enable(28), N.vertexAlphas && l.enable(29), N.vertexUvs && l.enable(30), N.vertexTangents && l.enable(31), N.uvsVertexOnly && l.enable(32), w.push(l.mask), l.disableAll(), N.fog && l.enable(0), N.useFog && l.enable(1), N.flatShading && l.enable(2), N.logarithmicDepthBuffer && l.enable(3), N.skinning && l.enable(4), N.morphTargets && l.enable(5), N.morphNormals && l.enable(6), N.morphColors && l.enable(7), N.premultipliedAlpha && l.enable(8), N.shadowMapEnabled && l.enable(9), N.physicallyCorrectLights && l.enable(10), N.doubleSided && l.enable(11), N.flipSided && l.enable(12), N.useDepthPacking && l.enable(13), N.dithering && l.enable(14), N.specularIntensityMap && l.enable(15), N.specularColorMap && l.enable(16), N.transmission && l.enable(17), N.transmissionMap && l.enable(18), N.thicknessMap && l.enable(19), N.sheen && l.enable(20), N.sheenColorMap && l.enable(21), N.sheenRoughnessMap && l.enable(22), N.decodeVideoTexture && l.enable(23), N.opaque && l.enable(24), w.push(l.mask)
    }

    function T(w) {
        const N = M[w.type];
        let k;
        if (N) {
            const lt = ci[N];
            k = QM.clone(lt.uniforms)
        } else k = w.uniforms;
        return k
    }

    function A(w, N) {
        let k;
        for (let lt = 0, vt = h.length; lt < vt; lt++) {
            const j = h[lt];
            if (j.cacheKey === N) {
                k = j, ++k.usedTimes;
                break
            }
        }
        return k === void 0 && (k = new cT(c, N, w, a), h.push(k)), k
    }

    function E(w) {
        if (--w.usedTimes === 0) {
            const N = h.indexOf(w);
            h[N] = h[h.length - 1], h.pop(), w.destroy()
        }
    }

    function D(w) {
        f.remove(w)
    }

    function B() {
        f.dispose()
    }

    return {
        getParameters: v,
        getProgramCacheKey: _,
        getUniforms: T,
        acquireProgram: A,
        releaseProgram: E,
        releaseShaderCache: D,
        programs: h,
        dispose: B
    }
}

function pT() {
    let c = new WeakMap;

    function t(a) {
        let u = c.get(a);
        return u === void 0 && (u = {}, c.set(a, u)), u
    }

    function e(a) {
        c.delete(a)
    }

    function i(a, u, l) {
        c.get(a)[u] = l
    }

    function s() {
        c = new WeakMap
    }

    return {get: t, remove: e, update: i, dispose: s}
}

function mT(c, t) {
    return c.groupOrder !== t.groupOrder ? c.groupOrder - t.groupOrder : c.renderOrder !== t.renderOrder ? c.renderOrder - t.renderOrder : c.material.id !== t.material.id ? c.material.id - t.material.id : c.z !== t.z ? c.z - t.z : c.id - t.id
}

function Ud(c, t) {
    return c.groupOrder !== t.groupOrder ? c.groupOrder - t.groupOrder : c.renderOrder !== t.renderOrder ? c.renderOrder - t.renderOrder : c.z !== t.z ? t.z - c.z : c.id - t.id
}

function zd() {
    const c = [];
    let t = 0;
    const e = [], i = [], s = [];

    function a() {
        t = 0, e.length = 0, i.length = 0, s.length = 0
    }

    function u(m, g, x, M, v, _) {
        let S = c[t];
        return S === void 0 ? (S = {
            id: m.id,
            object: m,
            geometry: g,
            material: x,
            groupOrder: M,
            renderOrder: m.renderOrder,
            z: v,
            group: _
        }, c[t] = S) : (S.id = m.id, S.object = m, S.geometry = g, S.material = x, S.groupOrder = M, S.renderOrder = m.renderOrder, S.z = v, S.group = _), t++, S
    }

    function l(m, g, x, M, v, _) {
        const S = u(m, g, x, M, v, _);
        x.transmission > 0 ? i.push(S) : x.transparent === !0 ? s.push(S) : e.push(S)
    }

    function f(m, g, x, M, v, _) {
        const S = u(m, g, x, M, v, _);
        x.transmission > 0 ? i.unshift(S) : x.transparent === !0 ? s.unshift(S) : e.unshift(S)
    }

    function h(m, g) {
        e.length > 1 && e.sort(m || mT), i.length > 1 && i.sort(g || Ud), s.length > 1 && s.sort(g || Ud)
    }

    function d() {
        for (let m = t, g = c.length; m < g; m++) {
            const x = c[m];
            if (x.id === null) break;
            x.id = null, x.object = null, x.geometry = null, x.material = null, x.group = null
        }
    }

    return {opaque: e, transmissive: i, transparent: s, init: a, push: l, unshift: f, finish: d, sort: h}
}

function gT() {
    let c = new WeakMap;

    function t(i, s) {
        const a = c.get(i);
        let u;
        return a === void 0 ? (u = new zd, c.set(i, [u])) : s >= a.length ? (u = new zd, a.push(u)) : u = a[s], u
    }

    function e() {
        c = new WeakMap
    }

    return {get: t, dispose: e}
}

function _T() {
    const c = {};
    return {
        get: function (t) {
            if (c[t.id] !== void 0) return c[t.id];
            let e;
            switch (t.type) {
                case"DirectionalLight":
                    e = {direction: new F, color: new ie};
                    break;
                case"SpotLight":
                    e = {
                        position: new F,
                        direction: new F,
                        color: new ie,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0
                    };
                    break;
                case"PointLight":
                    e = {position: new F, color: new ie, distance: 0, decay: 0};
                    break;
                case"HemisphereLight":
                    e = {direction: new F, skyColor: new ie, groundColor: new ie};
                    break;
                case"RectAreaLight":
                    e = {color: new ie, position: new F, halfWidth: new F, halfHeight: new F};
                    break
            }
            return c[t.id] = e, e
        }
    }
}

function vT() {
    const c = {};
    return {
        get: function (t) {
            if (c[t.id] !== void 0) return c[t.id];
            let e;
            switch (t.type) {
                case"DirectionalLight":
                    e = {shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Lt};
                    break;
                case"SpotLight":
                    e = {shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Lt};
                    break;
                case"PointLight":
                    e = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new Lt,
                        shadowCameraNear: 1,
                        shadowCameraFar: 1e3
                    };
                    break
            }
            return c[t.id] = e, e
        }
    }
}

let xT = 0;

function yT(c, t) {
    return (t.castShadow ? 2 : 0) - (c.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (c.map ? 1 : 0)
}

function MT(c, t) {
    const e = new _T, i = vT(), s = {
        version: 0,
        hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1,
            numSpotMaps: -1
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0
    };
    for (let d = 0; d < 9; d++) s.probe.push(new F);
    const a = new F, u = new Re, l = new Re;

    function f(d, m) {
        let g = 0, x = 0, M = 0;
        for (let lt = 0; lt < 9; lt++) s.probe[lt].set(0, 0, 0);
        let v = 0, _ = 0, S = 0, L = 0, T = 0, A = 0, E = 0, D = 0, B = 0, w = 0;
        d.sort(yT);
        const N = m !== !0 ? Math.PI : 1;
        for (let lt = 0, vt = d.length; lt < vt; lt++) {
            const j = d[lt], X = j.color, ot = j.intensity, dt = j.distance,
                ut = j.shadow && j.shadow.map ? j.shadow.map.texture : null;
            if (j.isAmbientLight) g += X.r * ot * N, x += X.g * ot * N, M += X.b * ot * N; else if (j.isLightProbe) for (let tt = 0; tt < 9; tt++) s.probe[tt].addScaledVector(j.sh.coefficients[tt], ot); else if (j.isDirectionalLight) {
                const tt = e.get(j);
                if (tt.color.copy(j.color).multiplyScalar(j.intensity * N), j.castShadow) {
                    const Y = j.shadow, J = i.get(j);
                    J.shadowBias = Y.bias, J.shadowNormalBias = Y.normalBias, J.shadowRadius = Y.radius, J.shadowMapSize = Y.mapSize, s.directionalShadow[v] = J, s.directionalShadowMap[v] = ut, s.directionalShadowMatrix[v] = j.shadow.matrix, A++
                }
                s.directional[v] = tt, v++
            } else if (j.isSpotLight) {
                const tt = e.get(j);
                tt.position.setFromMatrixPosition(j.matrixWorld), tt.color.copy(X).multiplyScalar(ot * N), tt.distance = dt, tt.coneCos = Math.cos(j.angle), tt.penumbraCos = Math.cos(j.angle * (1 - j.penumbra)), tt.decay = j.decay, s.spot[S] = tt;
                const Y = j.shadow;
                if (j.map && (s.spotLightMap[B] = j.map, B++, Y.updateMatrices(j), j.castShadow && w++), s.spotLightMatrix[S] = Y.matrix, j.castShadow) {
                    const J = i.get(j);
                    J.shadowBias = Y.bias, J.shadowNormalBias = Y.normalBias, J.shadowRadius = Y.radius, J.shadowMapSize = Y.mapSize, s.spotShadow[S] = J, s.spotShadowMap[S] = ut, D++
                }
                S++
            } else if (j.isRectAreaLight) {
                const tt = e.get(j);
                tt.color.copy(X).multiplyScalar(ot), tt.halfWidth.set(j.width * .5, 0, 0), tt.halfHeight.set(0, j.height * .5, 0), s.rectArea[L] = tt, L++
            } else if (j.isPointLight) {
                const tt = e.get(j);
                if (tt.color.copy(j.color).multiplyScalar(j.intensity * N), tt.distance = j.distance, tt.decay = j.decay, j.castShadow) {
                    const Y = j.shadow, J = i.get(j);
                    J.shadowBias = Y.bias, J.shadowNormalBias = Y.normalBias, J.shadowRadius = Y.radius, J.shadowMapSize = Y.mapSize, J.shadowCameraNear = Y.camera.near, J.shadowCameraFar = Y.camera.far, s.pointShadow[_] = J, s.pointShadowMap[_] = ut, s.pointShadowMatrix[_] = j.shadow.matrix, E++
                }
                s.point[_] = tt, _++
            } else if (j.isHemisphereLight) {
                const tt = e.get(j);
                tt.skyColor.copy(j.color).multiplyScalar(ot * N), tt.groundColor.copy(j.groundColor).multiplyScalar(ot * N), s.hemi[T] = tt, T++
            }
        }
        L > 0 && (t.isWebGL2 || c.has("OES_texture_float_linear") === !0 ? (s.rectAreaLTC1 = xt.LTC_FLOAT_1, s.rectAreaLTC2 = xt.LTC_FLOAT_2) : c.has("OES_texture_half_float_linear") === !0 ? (s.rectAreaLTC1 = xt.LTC_HALF_1, s.rectAreaLTC2 = xt.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), s.ambient[0] = g, s.ambient[1] = x, s.ambient[2] = M;
        const k = s.hash;
        (k.directionalLength !== v || k.pointLength !== _ || k.spotLength !== S || k.rectAreaLength !== L || k.hemiLength !== T || k.numDirectionalShadows !== A || k.numPointShadows !== E || k.numSpotShadows !== D || k.numSpotMaps !== B) && (s.directional.length = v, s.spot.length = S, s.rectArea.length = L, s.point.length = _, s.hemi.length = T, s.directionalShadow.length = A, s.directionalShadowMap.length = A, s.pointShadow.length = E, s.pointShadowMap.length = E, s.spotShadow.length = D, s.spotShadowMap.length = D, s.directionalShadowMatrix.length = A, s.pointShadowMatrix.length = E, s.spotLightMatrix.length = D + B - w, s.spotLightMap.length = B, s.numSpotLightShadowsWithMaps = w, k.directionalLength = v, k.pointLength = _, k.spotLength = S, k.rectAreaLength = L, k.hemiLength = T, k.numDirectionalShadows = A, k.numPointShadows = E, k.numSpotShadows = D, k.numSpotMaps = B, s.version = xT++)
    }

    function h(d, m) {
        let g = 0, x = 0, M = 0, v = 0, _ = 0;
        const S = m.matrixWorldInverse;
        for (let L = 0, T = d.length; L < T; L++) {
            const A = d[L];
            if (A.isDirectionalLight) {
                const E = s.directional[g];
                E.direction.setFromMatrixPosition(A.matrixWorld), a.setFromMatrixPosition(A.target.matrixWorld), E.direction.sub(a), E.direction.transformDirection(S), g++
            } else if (A.isSpotLight) {
                const E = s.spot[M];
                E.position.setFromMatrixPosition(A.matrixWorld), E.position.applyMatrix4(S), E.direction.setFromMatrixPosition(A.matrixWorld), a.setFromMatrixPosition(A.target.matrixWorld), E.direction.sub(a), E.direction.transformDirection(S), M++
            } else if (A.isRectAreaLight) {
                const E = s.rectArea[v];
                E.position.setFromMatrixPosition(A.matrixWorld), E.position.applyMatrix4(S), l.identity(), u.copy(A.matrixWorld), u.premultiply(S), l.extractRotation(u), E.halfWidth.set(A.width * .5, 0, 0), E.halfHeight.set(0, A.height * .5, 0), E.halfWidth.applyMatrix4(l), E.halfHeight.applyMatrix4(l), v++
            } else if (A.isPointLight) {
                const E = s.point[x];
                E.position.setFromMatrixPosition(A.matrixWorld), E.position.applyMatrix4(S), x++
            } else if (A.isHemisphereLight) {
                const E = s.hemi[_];
                E.direction.setFromMatrixPosition(A.matrixWorld), E.direction.transformDirection(S), _++
            }
        }
    }

    return {setup: f, setupView: h, state: s}
}

function Bd(c, t) {
    const e = new MT(c, t), i = [], s = [];

    function a() {
        i.length = 0, s.length = 0
    }

    function u(m) {
        i.push(m)
    }

    function l(m) {
        s.push(m)
    }

    function f(m) {
        e.setup(i, m)
    }

    function h(m) {
        e.setupView(i, m)
    }

    return {
        init: a,
        state: {lightsArray: i, shadowsArray: s, lights: e},
        setupLights: f,
        setupLightsView: h,
        pushLight: u,
        pushShadow: l
    }
}

function ST(c, t) {
    let e = new WeakMap;

    function i(a, u = 0) {
        const l = e.get(a);
        let f;
        return l === void 0 ? (f = new Bd(c, t), e.set(a, [f])) : u >= l.length ? (f = new Bd(c, t), l.push(f)) : f = l[u], f
    }

    function s() {
        e = new WeakMap
    }

    return {get: i, dispose: s}
}

class bT extends Oi {
    constructor(t) {
        super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = FM, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t)
    }

    copy(t) {
        return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
    }
}

class wT extends Oi {
    constructor(t) {
        super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new F, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t)
    }

    copy(t) {
        return super.copy(t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
    }
}

const TT = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, ET = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;

function AT(c, t, e) {
    let i = new Xc;
    const s = new Lt, a = new Lt, u = new Ae, l = new bT({depthPacking: NM}), f = new wT, h = {}, d = e.maxTextureSize,
        m = {0: Ln, 1: Sr, 2: Ri}, g = new Ar({
            defines: {VSM_SAMPLES: 8},
            uniforms: {shadow_pass: {value: null}, resolution: {value: new Lt}, radius: {value: 4}},
            vertexShader: TT,
            fragmentShader: ET
        }), x = g.clone();
    x.defines.HORIZONTAL_PASS = 1;
    const M = new sn;
    M.setAttribute("position", new ui(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
    const v = new Hn(M, g), _ = this;
    this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = op, this.render = function (A, E, D) {
        if (_.enabled === !1 || _.autoUpdate === !1 && _.needsUpdate === !1 || A.length === 0) return;
        const B = c.getRenderTarget(), w = c.getActiveCubeFace(), N = c.getActiveMipmapLevel(), k = c.state;
        k.setBlending(tr), k.buffers.color.setClear(1, 1, 1, 1), k.buffers.depth.setTest(!0), k.setScissorTest(!1);
        for (let lt = 0, vt = A.length; lt < vt; lt++) {
            const j = A[lt], X = j.shadow;
            if (X === void 0) {
                console.warn("THREE.WebGLShadowMap:", j, "has no shadow.");
                continue
            }
            if (X.autoUpdate === !1 && X.needsUpdate === !1) continue;
            s.copy(X.mapSize);
            const ot = X.getFrameExtents();
            if (s.multiply(ot), a.copy(X.mapSize), (s.x > d || s.y > d) && (s.x > d && (a.x = Math.floor(d / ot.x), s.x = a.x * ot.x, X.mapSize.x = a.x), s.y > d && (a.y = Math.floor(d / ot.y), s.y = a.y * ot.y, X.mapSize.y = a.y)), X.map === null) {
                const ut = this.type !== qs ? {minFilter: vn, magFilter: vn} : {};
                X.map = new Tr(s.x, s.y, ut), X.map.texture.name = j.name + ".shadowMap", X.camera.updateProjectionMatrix()
            }
            c.setRenderTarget(X.map), c.clear();
            const dt = X.getViewportCount();
            for (let ut = 0; ut < dt; ut++) {
                const tt = X.getViewport(ut);
                u.set(a.x * tt.x, a.y * tt.y, a.x * tt.z, a.y * tt.w), k.viewport(u), X.updateMatrices(j, ut), i = X.getFrustum(), T(E, D, X.camera, j, this.type)
            }
            X.isPointLightShadow !== !0 && this.type === qs && S(X, D), X.needsUpdate = !1
        }
        _.needsUpdate = !1, c.setRenderTarget(B, w, N)
    };

    function S(A, E) {
        const D = t.update(v);
        g.defines.VSM_SAMPLES !== A.blurSamples && (g.defines.VSM_SAMPLES = A.blurSamples, x.defines.VSM_SAMPLES = A.blurSamples, g.needsUpdate = !0, x.needsUpdate = !0), A.mapPass === null && (A.mapPass = new Tr(s.x, s.y)), g.uniforms.shadow_pass.value = A.map.texture, g.uniforms.resolution.value = A.mapSize, g.uniforms.radius.value = A.radius, c.setRenderTarget(A.mapPass), c.clear(), c.renderBufferDirect(E, null, D, g, v, null), x.uniforms.shadow_pass.value = A.mapPass.texture, x.uniforms.resolution.value = A.mapSize, x.uniforms.radius.value = A.radius, c.setRenderTarget(A.map), c.clear(), c.renderBufferDirect(E, null, D, x, v, null)
    }

    function L(A, E, D, B, w, N) {
        let k = null;
        const lt = D.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
        if (lt !== void 0 ? k = lt : k = D.isPointLight === !0 ? f : l, c.localClippingEnabled && E.clipShadows === !0 && Array.isArray(E.clippingPlanes) && E.clippingPlanes.length !== 0 || E.displacementMap && E.displacementScale !== 0 || E.alphaMap && E.alphaTest > 0) {
            const vt = k.uuid, j = E.uuid;
            let X = h[vt];
            X === void 0 && (X = {}, h[vt] = X);
            let ot = X[j];
            ot === void 0 && (ot = k.clone(), X[j] = ot), k = ot
        }
        return k.visible = E.visible, k.wireframe = E.wireframe, N === qs ? k.side = E.shadowSide !== null ? E.shadowSide : E.side : k.side = E.shadowSide !== null ? E.shadowSide : m[E.side], k.alphaMap = E.alphaMap, k.alphaTest = E.alphaTest, k.clipShadows = E.clipShadows, k.clippingPlanes = E.clippingPlanes, k.clipIntersection = E.clipIntersection, k.displacementMap = E.displacementMap, k.displacementScale = E.displacementScale, k.displacementBias = E.displacementBias, k.wireframeLinewidth = E.wireframeLinewidth, k.linewidth = E.linewidth, D.isPointLight === !0 && k.isMeshDistanceMaterial === !0 && (k.referencePosition.setFromMatrixPosition(D.matrixWorld), k.nearDistance = B, k.farDistance = w), k
    }

    function T(A, E, D, B, w) {
        if (A.visible === !1) return;
        if (A.layers.test(E.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && w === qs) && (!A.frustumCulled || i.intersectsObject(A))) {
            A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse, A.matrixWorld);
            const lt = t.update(A), vt = A.material;
            if (Array.isArray(vt)) {
                const j = lt.groups;
                for (let X = 0, ot = j.length; X < ot; X++) {
                    const dt = j[X], ut = vt[dt.materialIndex];
                    if (ut && ut.visible) {
                        const tt = L(A, ut, B, D.near, D.far, w);
                        c.renderBufferDirect(D, null, lt, tt, A, dt)
                    }
                }
            } else if (vt.visible) {
                const j = L(A, vt, B, D.near, D.far, w);
                c.renderBufferDirect(D, null, lt, j, A, null)
            }
        }
        const k = A.children;
        for (let lt = 0, vt = k.length; lt < vt; lt++) T(k[lt], E, D, B, w)
    }
}

function CT(c, t, e) {
    const i = e.isWebGL2;

    function s() {
        let G = !1;
        const nt = new Ae;
        let pt = null;
        const Tt = new Ae(0, 0, 0, 0);
        return {
            setMask: function (It) {
                pt !== It && !G && (c.colorMask(It, It, It, It), pt = It)
            }, setLocked: function (It) {
                G = It
            }, setClear: function (It, ue, ze, Ye, si) {
                si === !0 && (It *= Ye, ue *= Ye, ze *= Ye), nt.set(It, ue, ze, Ye), Tt.equals(nt) === !1 && (c.clearColor(It, ue, ze, Ye), Tt.copy(nt))
            }, reset: function () {
                G = !1, pt = null, Tt.set(-1, 0, 0, 0)
            }
        }
    }

    function a() {
        let G = !1, nt = null, pt = null, Tt = null;
        return {
            setTest: function (It) {
                It ? le(2929) : zt(2929)
            }, setMask: function (It) {
                nt !== It && !G && (c.depthMask(It), nt = It)
            }, setFunc: function (It) {
                if (pt !== It) {
                    switch (It) {
                        case sM:
                            c.depthFunc(512);
                            break;
                        case aM:
                            c.depthFunc(519);
                            break;
                        case oM:
                            c.depthFunc(513);
                            break;
                        case Dc:
                            c.depthFunc(515);
                            break;
                        case lM:
                            c.depthFunc(514);
                            break;
                        case cM:
                            c.depthFunc(518);
                            break;
                        case uM:
                            c.depthFunc(516);
                            break;
                        case hM:
                            c.depthFunc(517);
                            break;
                        default:
                            c.depthFunc(515)
                    }
                    pt = It
                }
            }, setLocked: function (It) {
                G = It
            }, setClear: function (It) {
                Tt !== It && (c.clearDepth(It), Tt = It)
            }, reset: function () {
                G = !1, nt = null, pt = null, Tt = null
            }
        }
    }

    function u() {
        let G = !1, nt = null, pt = null, Tt = null, It = null, ue = null, ze = null, Ye = null, si = null;
        return {
            setTest: function (ye) {
                G || (ye ? le(2960) : zt(2960))
            }, setMask: function (ye) {
                nt !== ye && !G && (c.stencilMask(ye), nt = ye)
            }, setFunc: function (ye, Xn, fn) {
                (pt !== ye || Tt !== Xn || It !== fn) && (c.stencilFunc(ye, Xn, fn), pt = ye, Tt = Xn, It = fn)
            }, setOp: function (ye, Xn, fn) {
                (ue !== ye || ze !== Xn || Ye !== fn) && (c.stencilOp(ye, Xn, fn), ue = ye, ze = Xn, Ye = fn)
            }, setLocked: function (ye) {
                G = ye
            }, setClear: function (ye) {
                si !== ye && (c.clearStencil(ye), si = ye)
            }, reset: function () {
                G = !1, nt = null, pt = null, Tt = null, It = null, ue = null, ze = null, Ye = null, si = null
            }
        }
    }

    const l = new s, f = new a, h = new u, d = new WeakMap, m = new WeakMap;
    let g = {}, x = {}, M = new WeakMap, v = [], _ = null, S = !1, L = null, T = null, A = null, E = null, D = null,
        B = null, w = null, N = !1, k = null, lt = null, vt = null, j = null, X = null;
    const ot = c.getParameter(35661);
    let dt = !1, ut = 0;
    const tt = c.getParameter(7938);
    tt.indexOf("WebGL") !== -1 ? (ut = parseFloat(/^WebGL (\d)/.exec(tt)[1]), dt = ut >= 1) : tt.indexOf("OpenGL ES") !== -1 && (ut = parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]), dt = ut >= 2);
    let Y = null, J = {};
    const ht = c.getParameter(3088), gt = c.getParameter(2978), mt = new Ae().fromArray(ht),
        Ct = new Ae().fromArray(gt);

    function Ut(G, nt, pt) {
        const Tt = new Uint8Array(4), It = c.createTexture();
        c.bindTexture(G, It), c.texParameteri(G, 10241, 9728), c.texParameteri(G, 10240, 9728);
        for (let ue = 0; ue < pt; ue++) c.texImage2D(nt + ue, 0, 6408, 1, 1, 0, 6408, 5121, Tt);
        return It
    }

    const rt = {};
    rt[3553] = Ut(3553, 3553, 1), rt[34067] = Ut(34067, 34069, 6), l.setClear(0, 0, 0, 1), f.setClear(1), h.setClear(0), le(2929), f.setFunc(Dc), Fe(!1), Ce(Lf), le(2884), ce(tr);

    function le(G) {
        g[G] !== !0 && (c.enable(G), g[G] = !0)
    }

    function zt(G) {
        g[G] !== !1 && (c.disable(G), g[G] = !1)
    }

    function Bt(G, nt) {
        return x[G] !== nt ? (c.bindFramebuffer(G, nt), x[G] = nt, i && (G === 36009 && (x[36160] = nt), G === 36160 && (x[36009] = nt)), !0) : !1
    }

    function At(G, nt) {
        let pt = v, Tt = !1;
        if (G) if (pt = M.get(nt), pt === void 0 && (pt = [], M.set(nt, pt)), G.isWebGLMultipleRenderTargets) {
            const It = G.texture;
            if (pt.length !== It.length || pt[0] !== 36064) {
                for (let ue = 0, ze = It.length; ue < ze; ue++) pt[ue] = 36064 + ue;
                pt.length = It.length, Tt = !0
            }
        } else pt[0] !== 36064 && (pt[0] = 36064, Tt = !0); else pt[0] !== 1029 && (pt[0] = 1029, Tt = !0);
        Tt && (e.isWebGL2 ? c.drawBuffers(pt) : t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))
    }

    function oe(G) {
        return _ !== G ? (c.useProgram(G), _ = G, !0) : !1
    }

    const Ht = {[cs]: 32774, [Zy]: 32778, [$y]: 32779};
    if (i) Ht[If] = 32775, Ht[Of] = 32776; else {
        const G = t.get("EXT_blend_minmax");
        G !== null && (Ht[If] = G.MIN_EXT, Ht[Of] = G.MAX_EXT)
    }
    const Ft = {
        [Jy]: 0,
        [jy]: 1,
        [Ky]: 768,
        [cp]: 770,
        [rM]: 776,
        [nM]: 774,
        [tM]: 772,
        [Qy]: 769,
        [up]: 771,
        [iM]: 775,
        [eM]: 773
    };

    function ce(G, nt, pt, Tt, It, ue, ze, Ye) {
        if (G === tr) {
            S === !0 && (zt(3042), S = !1);
            return
        }
        if (S === !1 && (le(3042), S = !0), G !== Yy) {
            if (G !== L || Ye !== N) {
                if ((T !== cs || D !== cs) && (c.blendEquation(32774), T = cs, D = cs), Ye) switch (G) {
                    case hs:
                        c.blendFuncSeparate(1, 771, 1, 771);
                        break;
                    case Pf:
                        c.blendFunc(1, 1);
                        break;
                    case Rf:
                        c.blendFuncSeparate(0, 769, 0, 1);
                        break;
                    case Df:
                        c.blendFuncSeparate(0, 768, 0, 770);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", G);
                        break
                } else switch (G) {
                    case hs:
                        c.blendFuncSeparate(770, 771, 1, 771);
                        break;
                    case Pf:
                        c.blendFunc(770, 1);
                        break;
                    case Rf:
                        c.blendFuncSeparate(0, 769, 0, 1);
                        break;
                    case Df:
                        c.blendFunc(0, 768);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", G);
                        break
                }
                A = null, E = null, B = null, w = null, L = G, N = Ye
            }
            return
        }
        It = It || nt, ue = ue || pt, ze = ze || Tt, (nt !== T || It !== D) && (c.blendEquationSeparate(Ht[nt], Ht[It]), T = nt, D = It), (pt !== A || Tt !== E || ue !== B || ze !== w) && (c.blendFuncSeparate(Ft[pt], Ft[Tt], Ft[ue], Ft[ze]), A = pt, E = Tt, B = ue, w = ze), L = G, N = null
    }

    function be(G, nt) {
        G.side === Ri ? zt(2884) : le(2884);
        let pt = G.side === Ln;
        nt && (pt = !pt), Fe(pt), G.blending === hs && G.transparent === !1 ? ce(tr) : ce(G.blending, G.blendEquation, G.blendSrc, G.blendDst, G.blendEquationAlpha, G.blendSrcAlpha, G.blendDstAlpha, G.premultipliedAlpha), f.setFunc(G.depthFunc), f.setTest(G.depthTest), f.setMask(G.depthWrite), l.setMask(G.colorWrite);
        const Tt = G.stencilWrite;
        h.setTest(Tt), Tt && (h.setMask(G.stencilWriteMask), h.setFunc(G.stencilFunc, G.stencilRef, G.stencilFuncMask), h.setOp(G.stencilFail, G.stencilZFail, G.stencilZPass)), de(G.polygonOffset, G.polygonOffsetFactor, G.polygonOffsetUnits), G.alphaToCoverage === !0 ? le(32926) : zt(32926)
    }

    function Fe(G) {
        k !== G && (G ? c.frontFace(2304) : c.frontFace(2305), k = G)
    }

    function Ce(G) {
        G !== qy ? (le(2884), G !== lt && (G === Lf ? c.cullFace(1029) : G === Xy ? c.cullFace(1028) : c.cullFace(1032))) : zt(2884), lt = G
    }

    function De(G) {
        G !== vt && (dt && c.lineWidth(G), vt = G)
    }

    function de(G, nt, pt) {
        G ? (le(32823), (j !== nt || X !== pt) && (c.polygonOffset(nt, pt), j = nt, X = pt)) : zt(32823)
    }

    function Xe(G) {
        G ? le(3089) : zt(3089)
    }

    function we(G) {
        G === void 0 && (G = 33984 + ot - 1), Y !== G && (c.activeTexture(G), Y = G)
    }

    function I(G, nt, pt) {
        pt === void 0 && (Y === null ? pt = 33984 + ot - 1 : pt = Y);
        let Tt = J[pt];
        Tt === void 0 && (Tt = {
            type: void 0,
            texture: void 0
        }, J[pt] = Tt), (Tt.type !== G || Tt.texture !== nt) && (Y !== pt && (c.activeTexture(pt), Y = pt), c.bindTexture(G, nt || rt[G]), Tt.type = G, Tt.texture = nt)
    }

    function P() {
        const G = J[Y];
        G !== void 0 && G.type !== void 0 && (c.bindTexture(G.type, null), G.type = void 0, G.texture = void 0)
    }

    function K() {
        try {
            c.compressedTexImage2D.apply(c, arguments)
        } catch (G) {
            console.error("THREE.WebGLState:", G)
        }
    }

    function ft() {
        try {
            c.compressedTexImage3D.apply(c, arguments)
        } catch (G) {
            console.error("THREE.WebGLState:", G)
        }
    }

    function _t() {
        try {
            c.texSubImage2D.apply(c, arguments)
        } catch (G) {
            console.error("THREE.WebGLState:", G)
        }
    }

    function yt() {
        try {
            c.texSubImage3D.apply(c, arguments)
        } catch (G) {
            console.error("THREE.WebGLState:", G)
        }
    }

    function Ot() {
        try {
            c.compressedTexSubImage2D.apply(c, arguments)
        } catch (G) {
            console.error("THREE.WebGLState:", G)
        }
    }

    function U() {
        try {
            c.compressedTexSubImage3D.apply(c, arguments)
        } catch (G) {
            console.error("THREE.WebGLState:", G)
        }
    }

    function H() {
        try {
            c.texStorage2D.apply(c, arguments)
        } catch (G) {
            console.error("THREE.WebGLState:", G)
        }
    }

    function bt() {
        try {
            c.texStorage3D.apply(c, arguments)
        } catch (G) {
            console.error("THREE.WebGLState:", G)
        }
    }

    function wt() {
        try {
            c.texImage2D.apply(c, arguments)
        } catch (G) {
            console.error("THREE.WebGLState:", G)
        }
    }

    function St() {
        try {
            c.texImage3D.apply(c, arguments)
        } catch (G) {
            console.error("THREE.WebGLState:", G)
        }
    }

    function Rt(G) {
        mt.equals(G) === !1 && (c.scissor(G.x, G.y, G.z, G.w), mt.copy(G))
    }

    function Pt(G) {
        Ct.equals(G) === !1 && (c.viewport(G.x, G.y, G.z, G.w), Ct.copy(G))
    }

    function jt(G, nt) {
        let pt = m.get(nt);
        pt === void 0 && (pt = new WeakMap, m.set(nt, pt));
        let Tt = pt.get(G);
        Tt === void 0 && (Tt = c.getUniformBlockIndex(nt, G.name), pt.set(G, Tt))
    }

    function te(G, nt) {
        const Tt = m.get(nt).get(G);
        d.get(G) !== Tt && (c.uniformBlockBinding(nt, Tt, G.__bindingPointIndex), d.set(G, Tt))
    }

    function me() {
        c.disable(3042), c.disable(2884), c.disable(2929), c.disable(32823), c.disable(3089), c.disable(2960), c.disable(32926), c.blendEquation(32774), c.blendFunc(1, 0), c.blendFuncSeparate(1, 0, 1, 0), c.colorMask(!0, !0, !0, !0), c.clearColor(0, 0, 0, 0), c.depthMask(!0), c.depthFunc(513), c.clearDepth(1), c.stencilMask(4294967295), c.stencilFunc(519, 0, 4294967295), c.stencilOp(7680, 7680, 7680), c.clearStencil(0), c.cullFace(1029), c.frontFace(2305), c.polygonOffset(0, 0), c.activeTexture(33984), c.bindFramebuffer(36160, null), i === !0 && (c.bindFramebuffer(36009, null), c.bindFramebuffer(36008, null)), c.useProgram(null), c.lineWidth(1), c.scissor(0, 0, c.canvas.width, c.canvas.height), c.viewport(0, 0, c.canvas.width, c.canvas.height), g = {}, Y = null, J = {}, x = {}, M = new WeakMap, v = [], _ = null, S = !1, L = null, T = null, A = null, E = null, D = null, B = null, w = null, N = !1, k = null, lt = null, vt = null, j = null, X = null, mt.set(0, 0, c.canvas.width, c.canvas.height), Ct.set(0, 0, c.canvas.width, c.canvas.height), l.reset(), f.reset(), h.reset()
    }

    return {
        buffers: {color: l, depth: f, stencil: h},
        enable: le,
        disable: zt,
        bindFramebuffer: Bt,
        drawBuffers: At,
        useProgram: oe,
        setBlending: ce,
        setMaterial: be,
        setFlipSided: Fe,
        setCullFace: Ce,
        setLineWidth: De,
        setPolygonOffset: de,
        setScissorTest: Xe,
        activeTexture: we,
        bindTexture: I,
        unbindTexture: P,
        compressedTexImage2D: K,
        compressedTexImage3D: ft,
        texImage2D: wt,
        texImage3D: St,
        updateUBOMapping: jt,
        uniformBlockBinding: te,
        texStorage2D: H,
        texStorage3D: bt,
        texSubImage2D: _t,
        texSubImage3D: yt,
        compressedTexSubImage2D: Ot,
        compressedTexSubImage3D: U,
        scissor: Rt,
        viewport: Pt,
        reset: me
    }
}

function LT(c, t, e, i, s, a, u) {
    const l = s.isWebGL2, f = s.maxTextures, h = s.maxCubemapSize, d = s.maxTextureSize, m = s.maxSamples,
        g = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null,
        x = /OculusBrowser/g.test(typeof navigator > "u" ? "" : navigator.userAgent), M = new WeakMap;
    let v;
    const _ = new WeakMap;
    let S = !1;
    try {
        S = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null
    } catch {
    }

    function L(I, P) {
        return S ? new OffscreenCanvas(I, P) : Qs("canvas")
    }

    function T(I, P, K, ft) {
        let _t = 1;
        if ((I.width > ft || I.height > ft) && (_t = ft / Math.max(I.width, I.height)), _t < 1 || P === !0) if (typeof HTMLImageElement < "u" && I instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && I instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && I instanceof ImageBitmap) {
            const yt = P ? Uc : Math.floor, Ot = yt(_t * I.width), U = yt(_t * I.height);
            v === void 0 && (v = L(Ot, U));
            const H = K ? L(Ot, U) : v;
            return H.width = Ot, H.height = U, H.getContext("2d").drawImage(I, 0, 0, Ot, U), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + I.width + "x" + I.height + ") to (" + Ot + "x" + U + ")."), H
        } else return "data" in I && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + I.width + "x" + I.height + ")."), I;
        return I
    }

    function A(I) {
        return od(I.width) && od(I.height)
    }

    function E(I) {
        return l ? !1 : I.wrapS !== ii || I.wrapT !== ii || I.minFilter !== vn && I.minFilter !== Wn
    }

    function D(I, P) {
        return I.generateMipmaps && P && I.minFilter !== vn && I.minFilter !== Wn
    }

    function B(I) {
        c.generateMipmap(I)
    }

    function w(I, P, K, ft, _t = !1) {
        if (l === !1) return P;
        if (I !== null) {
            if (c[I] !== void 0) return c[I];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + I + "'")
        }
        let yt = P;
        return P === 6403 && (K === 5126 && (yt = 33326), K === 5131 && (yt = 33325), K === 5121 && (yt = 33321)), P === 33319 && (K === 5126 && (yt = 33328), K === 5131 && (yt = 33327), K === 5121 && (yt = 33323)), P === 6408 && (K === 5126 && (yt = 34836), K === 5131 && (yt = 34842), K === 5121 && (yt = ft === Pe && _t === !1 ? 35907 : 32856), K === 32819 && (yt = 32854), K === 32820 && (yt = 32855)), (yt === 33325 || yt === 33326 || yt === 33327 || yt === 33328 || yt === 34842 || yt === 34836) && t.get("EXT_color_buffer_float"), yt
    }

    function N(I, P, K) {
        return D(I, K) === !0 || I.isFramebufferTexture && I.minFilter !== vn && I.minFilter !== Wn ? Math.log2(Math.max(P.width, P.height)) + 1 : I.mipmaps !== void 0 && I.mipmaps.length > 0 ? I.mipmaps.length : I.isCompressedTexture && Array.isArray(I.image) ? P.mipmaps.length : 1
    }

    function k(I) {
        return I === vn || I === Ff || I === Nf ? 9728 : 9729
    }

    function lt(I) {
        const P = I.target;
        P.removeEventListener("dispose", lt), j(P), P.isVideoTexture && M.delete(P)
    }

    function vt(I) {
        const P = I.target;
        P.removeEventListener("dispose", vt), ot(P)
    }

    function j(I) {
        const P = i.get(I);
        if (P.__webglInit === void 0) return;
        const K = I.source, ft = _.get(K);
        if (ft) {
            const _t = ft[P.__cacheKey];
            _t.usedTimes--, _t.usedTimes === 0 && X(I), Object.keys(ft).length === 0 && _.delete(K)
        }
        i.remove(I)
    }

    function X(I) {
        const P = i.get(I);
        c.deleteTexture(P.__webglTexture);
        const K = I.source, ft = _.get(K);
        delete ft[P.__cacheKey], u.memory.textures--
    }

    function ot(I) {
        const P = I.texture, K = i.get(I), ft = i.get(P);
        if (ft.__webglTexture !== void 0 && (c.deleteTexture(ft.__webglTexture), u.memory.textures--), I.depthTexture && I.depthTexture.dispose(), I.isWebGLCubeRenderTarget) for (let _t = 0; _t < 6; _t++) c.deleteFramebuffer(K.__webglFramebuffer[_t]), K.__webglDepthbuffer && c.deleteRenderbuffer(K.__webglDepthbuffer[_t]); else {
            if (c.deleteFramebuffer(K.__webglFramebuffer), K.__webglDepthbuffer && c.deleteRenderbuffer(K.__webglDepthbuffer), K.__webglMultisampledFramebuffer && c.deleteFramebuffer(K.__webglMultisampledFramebuffer), K.__webglColorRenderbuffer) for (let _t = 0; _t < K.__webglColorRenderbuffer.length; _t++) K.__webglColorRenderbuffer[_t] && c.deleteRenderbuffer(K.__webglColorRenderbuffer[_t]);
            K.__webglDepthRenderbuffer && c.deleteRenderbuffer(K.__webglDepthRenderbuffer)
        }
        if (I.isWebGLMultipleRenderTargets) for (let _t = 0, yt = P.length; _t < yt; _t++) {
            const Ot = i.get(P[_t]);
            Ot.__webglTexture && (c.deleteTexture(Ot.__webglTexture), u.memory.textures--), i.remove(P[_t])
        }
        i.remove(P), i.remove(I)
    }

    let dt = 0;

    function ut() {
        dt = 0
    }

    function tt() {
        const I = dt;
        return I >= f && console.warn("THREE.WebGLTextures: Trying to use " + I + " texture units while this GPU supports only " + f), dt += 1, I
    }

    function Y(I) {
        const P = [];
        return P.push(I.wrapS), P.push(I.wrapT), P.push(I.wrapR || 0), P.push(I.magFilter), P.push(I.minFilter), P.push(I.anisotropy), P.push(I.internalFormat), P.push(I.format), P.push(I.type), P.push(I.generateMipmaps), P.push(I.premultiplyAlpha), P.push(I.flipY), P.push(I.unpackAlignment), P.push(I.encoding), P.join()
    }

    function J(I, P) {
        const K = i.get(I);
        if (I.isVideoTexture && Xe(I), I.isRenderTargetTexture === !1 && I.version > 0 && K.__version !== I.version) {
            const ft = I.image;
            if (ft === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found."); else if (ft.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete"); else {
                zt(K, I, P);
                return
            }
        }
        e.bindTexture(3553, K.__webglTexture, 33984 + P)
    }

    function ht(I, P) {
        const K = i.get(I);
        if (I.version > 0 && K.__version !== I.version) {
            zt(K, I, P);
            return
        }
        e.bindTexture(35866, K.__webglTexture, 33984 + P)
    }

    function gt(I, P) {
        const K = i.get(I);
        if (I.version > 0 && K.__version !== I.version) {
            zt(K, I, P);
            return
        }
        e.bindTexture(32879, K.__webglTexture, 33984 + P)
    }

    function mt(I, P) {
        const K = i.get(I);
        if (I.version > 0 && K.__version !== I.version) {
            Bt(K, I, P);
            return
        }
        e.bindTexture(34067, K.__webglTexture, 33984 + P)
    }

    const Ct = {[gs]: 10497, [ii]: 33071, [Fc]: 33648},
        Ut = {[vn]: 9728, [Ff]: 9984, [Nf]: 9986, [Wn]: 9729, [xM]: 9985, [Eo]: 9987};

    function rt(I, P, K) {
        if (K ? (c.texParameteri(I, 10242, Ct[P.wrapS]), c.texParameteri(I, 10243, Ct[P.wrapT]), (I === 32879 || I === 35866) && c.texParameteri(I, 32882, Ct[P.wrapR]), c.texParameteri(I, 10240, Ut[P.magFilter]), c.texParameteri(I, 10241, Ut[P.minFilter])) : (c.texParameteri(I, 10242, 33071), c.texParameteri(I, 10243, 33071), (I === 32879 || I === 35866) && c.texParameteri(I, 32882, 33071), (P.wrapS !== ii || P.wrapT !== ii) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), c.texParameteri(I, 10240, k(P.magFilter)), c.texParameteri(I, 10241, k(P.minFilter)), P.minFilter !== vn && P.minFilter !== Wn && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), t.has("EXT_texture_filter_anisotropic") === !0) {
            const ft = t.get("EXT_texture_filter_anisotropic");
            if (P.type === vr && t.has("OES_texture_float_linear") === !1 || l === !1 && P.type === Ks && t.has("OES_texture_half_float_linear") === !1) return;
            (P.anisotropy > 1 || i.get(P).__currentAnisotropy) && (c.texParameterf(I, ft.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(P.anisotropy, s.getMaxAnisotropy())), i.get(P).__currentAnisotropy = P.anisotropy)
        }
    }

    function le(I, P) {
        let K = !1;
        I.__webglInit === void 0 && (I.__webglInit = !0, P.addEventListener("dispose", lt));
        const ft = P.source;
        let _t = _.get(ft);
        _t === void 0 && (_t = {}, _.set(ft, _t));
        const yt = Y(P);
        if (yt !== I.__cacheKey) {
            _t[yt] === void 0 && (_t[yt] = {
                texture: c.createTexture(),
                usedTimes: 0
            }, u.memory.textures++, K = !0), _t[yt].usedTimes++;
            const Ot = _t[I.__cacheKey];
            Ot !== void 0 && (_t[I.__cacheKey].usedTimes--, Ot.usedTimes === 0 && X(P)), I.__cacheKey = yt, I.__webglTexture = _t[yt].texture
        }
        return K
    }

    function zt(I, P, K) {
        let ft = 3553;
        (P.isDataArrayTexture || P.isCompressedArrayTexture) && (ft = 35866), P.isData3DTexture && (ft = 32879);
        const _t = le(I, P), yt = P.source;
        e.bindTexture(ft, I.__webglTexture, 33984 + K);
        const Ot = i.get(yt);
        if (yt.version !== Ot.__version || _t === !0) {
            e.activeTexture(33984 + K), c.pixelStorei(37440, P.flipY), c.pixelStorei(37441, P.premultiplyAlpha), c.pixelStorei(3317, P.unpackAlignment), c.pixelStorei(37443, 0);
            const U = E(P) && A(P.image) === !1;
            let H = T(P.image, U, !1, d);
            H = we(P, H);
            const bt = A(H) || l, wt = a.convert(P.format, P.encoding);
            let St = a.convert(P.type), Rt = w(P.internalFormat, wt, St, P.encoding, P.isVideoTexture);
            rt(ft, P, bt);
            let Pt;
            const jt = P.mipmaps, te = l && P.isVideoTexture !== !0, me = Ot.__version === void 0 || _t === !0,
                G = N(P, H, bt);
            if (P.isDepthTexture) Rt = 6402, l ? P.type === vr ? Rt = 36012 : P.type === _r ? Rt = 33190 : P.type === fs ? Rt = 35056 : Rt = 33189 : P.type === vr && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), P.format === yr && Rt === 6402 && P.type !== fp && P.type !== _r && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), P.type = _r, St = a.convert(P.type)), P.format === _s && Rt === 6402 && (Rt = 34041, P.type !== fs && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), P.type = fs, St = a.convert(P.type))), me && (te ? e.texStorage2D(3553, 1, Rt, H.width, H.height) : e.texImage2D(3553, 0, Rt, H.width, H.height, 0, wt, St, null)); else if (P.isDataTexture) if (jt.length > 0 && bt) {
                te && me && e.texStorage2D(3553, G, Rt, jt[0].width, jt[0].height);
                for (let nt = 0, pt = jt.length; nt < pt; nt++) Pt = jt[nt], te ? e.texSubImage2D(3553, nt, 0, 0, Pt.width, Pt.height, wt, St, Pt.data) : e.texImage2D(3553, nt, Rt, Pt.width, Pt.height, 0, wt, St, Pt.data);
                P.generateMipmaps = !1
            } else te ? (me && e.texStorage2D(3553, G, Rt, H.width, H.height), e.texSubImage2D(3553, 0, 0, 0, H.width, H.height, wt, St, H.data)) : e.texImage2D(3553, 0, Rt, H.width, H.height, 0, wt, St, H.data); else if (P.isCompressedTexture) if (P.isCompressedArrayTexture) {
                te && me && e.texStorage3D(35866, G, Rt, jt[0].width, jt[0].height, H.depth);
                for (let nt = 0, pt = jt.length; nt < pt; nt++) Pt = jt[nt], P.format !== ri ? wt !== null ? te ? e.compressedTexSubImage3D(35866, nt, 0, 0, 0, Pt.width, Pt.height, H.depth, wt, Pt.data, 0, 0) : e.compressedTexImage3D(35866, nt, Rt, Pt.width, Pt.height, H.depth, 0, Pt.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : te ? e.texSubImage3D(35866, nt, 0, 0, 0, Pt.width, Pt.height, H.depth, wt, St, Pt.data) : e.texImage3D(35866, nt, Rt, Pt.width, Pt.height, H.depth, 0, wt, St, Pt.data)
            } else {
                te && me && e.texStorage2D(3553, G, Rt, jt[0].width, jt[0].height);
                for (let nt = 0, pt = jt.length; nt < pt; nt++) Pt = jt[nt], P.format !== ri ? wt !== null ? te ? e.compressedTexSubImage2D(3553, nt, 0, 0, Pt.width, Pt.height, wt, Pt.data) : e.compressedTexImage2D(3553, nt, Rt, Pt.width, Pt.height, 0, Pt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : te ? e.texSubImage2D(3553, nt, 0, 0, Pt.width, Pt.height, wt, St, Pt.data) : e.texImage2D(3553, nt, Rt, Pt.width, Pt.height, 0, wt, St, Pt.data)
            } else if (P.isDataArrayTexture) te ? (me && e.texStorage3D(35866, G, Rt, H.width, H.height, H.depth), e.texSubImage3D(35866, 0, 0, 0, 0, H.width, H.height, H.depth, wt, St, H.data)) : e.texImage3D(35866, 0, Rt, H.width, H.height, H.depth, 0, wt, St, H.data); else if (P.isData3DTexture) te ? (me && e.texStorage3D(32879, G, Rt, H.width, H.height, H.depth), e.texSubImage3D(32879, 0, 0, 0, 0, H.width, H.height, H.depth, wt, St, H.data)) : e.texImage3D(32879, 0, Rt, H.width, H.height, H.depth, 0, wt, St, H.data); else if (P.isFramebufferTexture) {
                if (me) if (te) e.texStorage2D(3553, G, Rt, H.width, H.height); else {
                    let nt = H.width, pt = H.height;
                    for (let Tt = 0; Tt < G; Tt++) e.texImage2D(3553, Tt, Rt, nt, pt, 0, wt, St, null), nt >>= 1, pt >>= 1
                }
            } else if (jt.length > 0 && bt) {
                te && me && e.texStorage2D(3553, G, Rt, jt[0].width, jt[0].height);
                for (let nt = 0, pt = jt.length; nt < pt; nt++) Pt = jt[nt], te ? e.texSubImage2D(3553, nt, 0, 0, wt, St, Pt) : e.texImage2D(3553, nt, Rt, wt, St, Pt);
                P.generateMipmaps = !1
            } else te ? (me && e.texStorage2D(3553, G, Rt, H.width, H.height), e.texSubImage2D(3553, 0, 0, 0, wt, St, H)) : e.texImage2D(3553, 0, Rt, wt, St, H);
            D(P, bt) && B(ft), Ot.__version = yt.version, P.onUpdate && P.onUpdate(P)
        }
        I.__version = P.version
    }

    function Bt(I, P, K) {
        if (P.image.length !== 6) return;
        const ft = le(I, P), _t = P.source;
        e.bindTexture(34067, I.__webglTexture, 33984 + K);
        const yt = i.get(_t);
        if (_t.version !== yt.__version || ft === !0) {
            e.activeTexture(33984 + K), c.pixelStorei(37440, P.flipY), c.pixelStorei(37441, P.premultiplyAlpha), c.pixelStorei(3317, P.unpackAlignment), c.pixelStorei(37443, 0);
            const Ot = P.isCompressedTexture || P.image[0].isCompressedTexture,
                U = P.image[0] && P.image[0].isDataTexture, H = [];
            for (let nt = 0; nt < 6; nt++) !Ot && !U ? H[nt] = T(P.image[nt], !1, !0, h) : H[nt] = U ? P.image[nt].image : P.image[nt], H[nt] = we(P, H[nt]);
            const bt = H[0], wt = A(bt) || l, St = a.convert(P.format, P.encoding), Rt = a.convert(P.type),
                Pt = w(P.internalFormat, St, Rt, P.encoding), jt = l && P.isVideoTexture !== !0,
                te = yt.__version === void 0 || ft === !0;
            let me = N(P, bt, wt);
            rt(34067, P, wt);
            let G;
            if (Ot) {
                jt && te && e.texStorage2D(34067, me, Pt, bt.width, bt.height);
                for (let nt = 0; nt < 6; nt++) {
                    G = H[nt].mipmaps;
                    for (let pt = 0; pt < G.length; pt++) {
                        const Tt = G[pt];
                        P.format !== ri ? St !== null ? jt ? e.compressedTexSubImage2D(34069 + nt, pt, 0, 0, Tt.width, Tt.height, St, Tt.data) : e.compressedTexImage2D(34069 + nt, pt, Pt, Tt.width, Tt.height, 0, Tt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : jt ? e.texSubImage2D(34069 + nt, pt, 0, 0, Tt.width, Tt.height, St, Rt, Tt.data) : e.texImage2D(34069 + nt, pt, Pt, Tt.width, Tt.height, 0, St, Rt, Tt.data)
                    }
                }
            } else {
                G = P.mipmaps, jt && te && (G.length > 0 && me++, e.texStorage2D(34067, me, Pt, H[0].width, H[0].height));
                for (let nt = 0; nt < 6; nt++) if (U) {
                    jt ? e.texSubImage2D(34069 + nt, 0, 0, 0, H[nt].width, H[nt].height, St, Rt, H[nt].data) : e.texImage2D(34069 + nt, 0, Pt, H[nt].width, H[nt].height, 0, St, Rt, H[nt].data);
                    for (let pt = 0; pt < G.length; pt++) {
                        const It = G[pt].image[nt].image;
                        jt ? e.texSubImage2D(34069 + nt, pt + 1, 0, 0, It.width, It.height, St, Rt, It.data) : e.texImage2D(34069 + nt, pt + 1, Pt, It.width, It.height, 0, St, Rt, It.data)
                    }
                } else {
                    jt ? e.texSubImage2D(34069 + nt, 0, 0, 0, St, Rt, H[nt]) : e.texImage2D(34069 + nt, 0, Pt, St, Rt, H[nt]);
                    for (let pt = 0; pt < G.length; pt++) {
                        const Tt = G[pt];
                        jt ? e.texSubImage2D(34069 + nt, pt + 1, 0, 0, St, Rt, Tt.image[nt]) : e.texImage2D(34069 + nt, pt + 1, Pt, St, Rt, Tt.image[nt])
                    }
                }
            }
            D(P, wt) && B(34067), yt.__version = _t.version, P.onUpdate && P.onUpdate(P)
        }
        I.__version = P.version
    }

    function At(I, P, K, ft, _t) {
        const yt = a.convert(K.format, K.encoding), Ot = a.convert(K.type), U = w(K.internalFormat, yt, Ot, K.encoding);
        i.get(P).__hasExternalTextures || (_t === 32879 || _t === 35866 ? e.texImage3D(_t, 0, U, P.width, P.height, P.depth, 0, yt, Ot, null) : e.texImage2D(_t, 0, U, P.width, P.height, 0, yt, Ot, null)), e.bindFramebuffer(36160, I), de(P) ? g.framebufferTexture2DMultisampleEXT(36160, ft, _t, i.get(K).__webglTexture, 0, De(P)) : (_t === 3553 || _t >= 34069 && _t <= 34074) && c.framebufferTexture2D(36160, ft, _t, i.get(K).__webglTexture, 0), e.bindFramebuffer(36160, null)
    }

    function oe(I, P, K) {
        if (c.bindRenderbuffer(36161, I), P.depthBuffer && !P.stencilBuffer) {
            let ft = 33189;
            if (K || de(P)) {
                const _t = P.depthTexture;
                _t && _t.isDepthTexture && (_t.type === vr ? ft = 36012 : _t.type === _r && (ft = 33190));
                const yt = De(P);
                de(P) ? g.renderbufferStorageMultisampleEXT(36161, yt, ft, P.width, P.height) : c.renderbufferStorageMultisample(36161, yt, ft, P.width, P.height)
            } else c.renderbufferStorage(36161, ft, P.width, P.height);
            c.framebufferRenderbuffer(36160, 36096, 36161, I)
        } else if (P.depthBuffer && P.stencilBuffer) {
            const ft = De(P);
            K && de(P) === !1 ? c.renderbufferStorageMultisample(36161, ft, 35056, P.width, P.height) : de(P) ? g.renderbufferStorageMultisampleEXT(36161, ft, 35056, P.width, P.height) : c.renderbufferStorage(36161, 34041, P.width, P.height), c.framebufferRenderbuffer(36160, 33306, 36161, I)
        } else {
            const ft = P.isWebGLMultipleRenderTargets === !0 ? P.texture : [P.texture];
            for (let _t = 0; _t < ft.length; _t++) {
                const yt = ft[_t], Ot = a.convert(yt.format, yt.encoding), U = a.convert(yt.type),
                    H = w(yt.internalFormat, Ot, U, yt.encoding), bt = De(P);
                K && de(P) === !1 ? c.renderbufferStorageMultisample(36161, bt, H, P.width, P.height) : de(P) ? g.renderbufferStorageMultisampleEXT(36161, bt, H, P.width, P.height) : c.renderbufferStorage(36161, H, P.width, P.height)
            }
        }
        c.bindRenderbuffer(36161, null)
    }

    function Ht(I, P) {
        if (P && P.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
        if (e.bindFramebuffer(36160, I), !(P.depthTexture && P.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        (!i.get(P.depthTexture).__webglTexture || P.depthTexture.image.width !== P.width || P.depthTexture.image.height !== P.height) && (P.depthTexture.image.width = P.width, P.depthTexture.image.height = P.height, P.depthTexture.needsUpdate = !0), J(P.depthTexture, 0);
        const ft = i.get(P.depthTexture).__webglTexture, _t = De(P);
        if (P.depthTexture.format === yr) de(P) ? g.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, ft, 0, _t) : c.framebufferTexture2D(36160, 36096, 3553, ft, 0); else if (P.depthTexture.format === _s) de(P) ? g.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, ft, 0, _t) : c.framebufferTexture2D(36160, 33306, 3553, ft, 0); else throw new Error("Unknown depthTexture format")
    }

    function Ft(I) {
        const P = i.get(I), K = I.isWebGLCubeRenderTarget === !0;
        if (I.depthTexture && !P.__autoAllocateDepthBuffer) {
            if (K) throw new Error("target.depthTexture not supported in Cube render targets");
            Ht(P.__webglFramebuffer, I)
        } else if (K) {
            P.__webglDepthbuffer = [];
            for (let ft = 0; ft < 6; ft++) e.bindFramebuffer(36160, P.__webglFramebuffer[ft]), P.__webglDepthbuffer[ft] = c.createRenderbuffer(), oe(P.__webglDepthbuffer[ft], I, !1)
        } else e.bindFramebuffer(36160, P.__webglFramebuffer), P.__webglDepthbuffer = c.createRenderbuffer(), oe(P.__webglDepthbuffer, I, !1);
        e.bindFramebuffer(36160, null)
    }

    function ce(I, P, K) {
        const ft = i.get(I);
        P !== void 0 && At(ft.__webglFramebuffer, I, I.texture, 36064, 3553), K !== void 0 && Ft(I)
    }

    function be(I) {
        const P = I.texture, K = i.get(I), ft = i.get(P);
        I.addEventListener("dispose", vt), I.isWebGLMultipleRenderTargets !== !0 && (ft.__webglTexture === void 0 && (ft.__webglTexture = c.createTexture()), ft.__version = P.version, u.memory.textures++);
        const _t = I.isWebGLCubeRenderTarget === !0, yt = I.isWebGLMultipleRenderTargets === !0, Ot = A(I) || l;
        if (_t) {
            K.__webglFramebuffer = [];
            for (let U = 0; U < 6; U++) K.__webglFramebuffer[U] = c.createFramebuffer()
        } else {
            if (K.__webglFramebuffer = c.createFramebuffer(), yt) if (s.drawBuffers) {
                const U = I.texture;
                for (let H = 0, bt = U.length; H < bt; H++) {
                    const wt = i.get(U[H]);
                    wt.__webglTexture === void 0 && (wt.__webglTexture = c.createTexture(), u.memory.textures++)
                }
            } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
            if (l && I.samples > 0 && de(I) === !1) {
                const U = yt ? P : [P];
                K.__webglMultisampledFramebuffer = c.createFramebuffer(), K.__webglColorRenderbuffer = [], e.bindFramebuffer(36160, K.__webglMultisampledFramebuffer);
                for (let H = 0; H < U.length; H++) {
                    const bt = U[H];
                    K.__webglColorRenderbuffer[H] = c.createRenderbuffer(), c.bindRenderbuffer(36161, K.__webglColorRenderbuffer[H]);
                    const wt = a.convert(bt.format, bt.encoding), St = a.convert(bt.type),
                        Rt = w(bt.internalFormat, wt, St, bt.encoding, I.isXRRenderTarget === !0), Pt = De(I);
                    c.renderbufferStorageMultisample(36161, Pt, Rt, I.width, I.height), c.framebufferRenderbuffer(36160, 36064 + H, 36161, K.__webglColorRenderbuffer[H])
                }
                c.bindRenderbuffer(36161, null), I.depthBuffer && (K.__webglDepthRenderbuffer = c.createRenderbuffer(), oe(K.__webglDepthRenderbuffer, I, !0)), e.bindFramebuffer(36160, null)
            }
        }
        if (_t) {
            e.bindTexture(34067, ft.__webglTexture), rt(34067, P, Ot);
            for (let U = 0; U < 6; U++) At(K.__webglFramebuffer[U], I, P, 36064, 34069 + U);
            D(P, Ot) && B(34067), e.unbindTexture()
        } else if (yt) {
            const U = I.texture;
            for (let H = 0, bt = U.length; H < bt; H++) {
                const wt = U[H], St = i.get(wt);
                e.bindTexture(3553, St.__webglTexture), rt(3553, wt, Ot), At(K.__webglFramebuffer, I, wt, 36064 + H, 3553), D(wt, Ot) && B(3553)
            }
            e.unbindTexture()
        } else {
            let U = 3553;
            (I.isWebGL3DRenderTarget || I.isWebGLArrayRenderTarget) && (l ? U = I.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), e.bindTexture(U, ft.__webglTexture), rt(U, P, Ot), At(K.__webglFramebuffer, I, P, 36064, U), D(P, Ot) && B(U), e.unbindTexture()
        }
        I.depthBuffer && Ft(I)
    }

    function Fe(I) {
        const P = A(I) || l, K = I.isWebGLMultipleRenderTargets === !0 ? I.texture : [I.texture];
        for (let ft = 0, _t = K.length; ft < _t; ft++) {
            const yt = K[ft];
            if (D(yt, P)) {
                const Ot = I.isWebGLCubeRenderTarget ? 34067 : 3553, U = i.get(yt).__webglTexture;
                e.bindTexture(Ot, U), B(Ot), e.unbindTexture()
            }
        }
    }

    function Ce(I) {
        if (l && I.samples > 0 && de(I) === !1) {
            const P = I.isWebGLMultipleRenderTargets ? I.texture : [I.texture], K = I.width, ft = I.height;
            let _t = 16384;
            const yt = [], Ot = I.stencilBuffer ? 33306 : 36096, U = i.get(I),
                H = I.isWebGLMultipleRenderTargets === !0;
            if (H) for (let bt = 0; bt < P.length; bt++) e.bindFramebuffer(36160, U.__webglMultisampledFramebuffer), c.framebufferRenderbuffer(36160, 36064 + bt, 36161, null), e.bindFramebuffer(36160, U.__webglFramebuffer), c.framebufferTexture2D(36009, 36064 + bt, 3553, null, 0);
            e.bindFramebuffer(36008, U.__webglMultisampledFramebuffer), e.bindFramebuffer(36009, U.__webglFramebuffer);
            for (let bt = 0; bt < P.length; bt++) {
                yt.push(36064 + bt), I.depthBuffer && yt.push(Ot);
                const wt = U.__ignoreDepthValues !== void 0 ? U.__ignoreDepthValues : !1;
                if (wt === !1 && (I.depthBuffer && (_t |= 256), I.stencilBuffer && (_t |= 1024)), H && c.framebufferRenderbuffer(36008, 36064, 36161, U.__webglColorRenderbuffer[bt]), wt === !0 && (c.invalidateFramebuffer(36008, [Ot]), c.invalidateFramebuffer(36009, [Ot])), H) {
                    const St = i.get(P[bt]).__webglTexture;
                    c.framebufferTexture2D(36009, 36064, 3553, St, 0)
                }
                c.blitFramebuffer(0, 0, K, ft, 0, 0, K, ft, _t, 9728), x && c.invalidateFramebuffer(36008, yt)
            }
            if (e.bindFramebuffer(36008, null), e.bindFramebuffer(36009, null), H) for (let bt = 0; bt < P.length; bt++) {
                e.bindFramebuffer(36160, U.__webglMultisampledFramebuffer), c.framebufferRenderbuffer(36160, 36064 + bt, 36161, U.__webglColorRenderbuffer[bt]);
                const wt = i.get(P[bt]).__webglTexture;
                e.bindFramebuffer(36160, U.__webglFramebuffer), c.framebufferTexture2D(36009, 36064 + bt, 3553, wt, 0)
            }
            e.bindFramebuffer(36009, U.__webglMultisampledFramebuffer)
        }
    }

    function De(I) {
        return Math.min(m, I.samples)
    }

    function de(I) {
        const P = i.get(I);
        return l && I.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && P.__useRenderToTexture !== !1
    }

    function Xe(I) {
        const P = u.render.frame;
        M.get(I) !== P && (M.set(I, P), I.update())
    }

    function we(I, P) {
        const K = I.encoding, ft = I.format, _t = I.type;
        return I.isCompressedTexture === !0 || I.isVideoTexture === !0 || I.format === Nc || K !== wr && (K === Pe ? l === !1 ? t.has("EXT_sRGB") === !0 && ft === ri ? (I.format = Nc, I.minFilter = Wn, I.generateMipmaps = !1) : P = gp.sRGBToLinear(P) : (ft !== ri || _t !== br) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", K)), P
    }

    this.allocateTextureUnit = tt, this.resetTextureUnits = ut, this.setTexture2D = J, this.setTexture2DArray = ht, this.setTexture3D = gt, this.setTextureCube = mt, this.rebindTextures = ce, this.setupRenderTarget = be, this.updateRenderTargetMipmap = Fe, this.updateMultisampleRenderTarget = Ce, this.setupDepthRenderbuffer = Ft, this.setupFrameBufferTexture = At, this.useMultisampledRTT = de
}

function PT(c, t, e) {
    const i = e.isWebGL2;

    function s(a, u = null) {
        let l;
        if (a === br) return 5121;
        if (a === bM) return 32819;
        if (a === wM) return 32820;
        if (a === yM) return 5120;
        if (a === MM) return 5122;
        if (a === fp) return 5123;
        if (a === SM) return 5124;
        if (a === _r) return 5125;
        if (a === vr) return 5126;
        if (a === Ks) return i ? 5131 : (l = t.get("OES_texture_half_float"), l !== null ? l.HALF_FLOAT_OES : null);
        if (a === TM) return 6406;
        if (a === ri) return 6408;
        if (a === AM) return 6409;
        if (a === CM) return 6410;
        if (a === yr) return 6402;
        if (a === _s) return 34041;
        if (a === LM) return 6403;
        if (a === EM) return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
        if (a === Nc) return l = t.get("EXT_sRGB"), l !== null ? l.SRGB_ALPHA_EXT : null;
        if (a === PM) return 36244;
        if (a === RM) return 33319;
        if (a === DM) return 33320;
        if (a === IM) return 36249;
        if (a === Hl || a === ql || a === Xl || a === Yl) if (u === Pe) if (l = t.get("WEBGL_compressed_texture_s3tc_srgb"), l !== null) {
            if (a === Hl) return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;
            if (a === ql) return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
            if (a === Xl) return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
            if (a === Yl) return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
        } else return null; else if (l = t.get("WEBGL_compressed_texture_s3tc"), l !== null) {
            if (a === Hl) return l.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (a === ql) return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (a === Xl) return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (a === Yl) return l.COMPRESSED_RGBA_S3TC_DXT5_EXT
        } else return null;
        if (a === Uf || a === zf || a === Bf || a === Gf) if (l = t.get("WEBGL_compressed_texture_pvrtc"), l !== null) {
            if (a === Uf) return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (a === zf) return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (a === Bf) return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (a === Gf) return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
        } else return null;
        if (a === OM) return l = t.get("WEBGL_compressed_texture_etc1"), l !== null ? l.COMPRESSED_RGB_ETC1_WEBGL : null;
        if (a === Wf || a === Vf) if (l = t.get("WEBGL_compressed_texture_etc"), l !== null) {
            if (a === Wf) return u === Pe ? l.COMPRESSED_SRGB8_ETC2 : l.COMPRESSED_RGB8_ETC2;
            if (a === Vf) return u === Pe ? l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : l.COMPRESSED_RGBA8_ETC2_EAC
        } else return null;
        if (a === kf || a === Hf || a === qf || a === Xf || a === Yf || a === Zf || a === $f || a === Jf || a === jf || a === Kf || a === Qf || a === td || a === ed || a === nd) if (l = t.get("WEBGL_compressed_texture_astc"), l !== null) {
            if (a === kf) return u === Pe ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : l.COMPRESSED_RGBA_ASTC_4x4_KHR;
            if (a === Hf) return u === Pe ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : l.COMPRESSED_RGBA_ASTC_5x4_KHR;
            if (a === qf) return u === Pe ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : l.COMPRESSED_RGBA_ASTC_5x5_KHR;
            if (a === Xf) return u === Pe ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : l.COMPRESSED_RGBA_ASTC_6x5_KHR;
            if (a === Yf) return u === Pe ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : l.COMPRESSED_RGBA_ASTC_6x6_KHR;
            if (a === Zf) return u === Pe ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : l.COMPRESSED_RGBA_ASTC_8x5_KHR;
            if (a === $f) return u === Pe ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : l.COMPRESSED_RGBA_ASTC_8x6_KHR;
            if (a === Jf) return u === Pe ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : l.COMPRESSED_RGBA_ASTC_8x8_KHR;
            if (a === jf) return u === Pe ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : l.COMPRESSED_RGBA_ASTC_10x5_KHR;
            if (a === Kf) return u === Pe ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : l.COMPRESSED_RGBA_ASTC_10x6_KHR;
            if (a === Qf) return u === Pe ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : l.COMPRESSED_RGBA_ASTC_10x8_KHR;
            if (a === td) return u === Pe ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : l.COMPRESSED_RGBA_ASTC_10x10_KHR;
            if (a === ed) return u === Pe ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : l.COMPRESSED_RGBA_ASTC_12x10_KHR;
            if (a === nd) return u === Pe ? l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : l.COMPRESSED_RGBA_ASTC_12x12_KHR
        } else return null;
        if (a === id) if (l = t.get("EXT_texture_compression_bptc"), l !== null) {
            if (a === id) return u === Pe ? l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : l.COMPRESSED_RGBA_BPTC_UNORM_EXT
        } else return null;
        return a === fs ? i ? 34042 : (l = t.get("WEBGL_depth_texture"), l !== null ? l.UNSIGNED_INT_24_8_WEBGL : null) : c[a] !== void 0 ? c[a] : null
    }

    return {convert: s}
}

class RT extends Cn {
    constructor(t = []) {
        super(), this.isArrayCamera = !0, this.cameras = t
    }
}

class Ys extends Ge {
    constructor() {
        super(), this.isGroup = !0, this.type = "Group"
    }
}

const DT = {type: "move"};

class Mc {
    constructor() {
        this._targetRay = null, this._grip = null, this._hand = null
    }

    getHandSpace() {
        return this._hand === null && (this._hand = new Ys, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {pinching: !1}), this._hand
    }

    getTargetRaySpace() {
        return this._targetRay === null && (this._targetRay = new Ys, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new F, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new F), this._targetRay
    }

    getGripSpace() {
        return this._grip === null && (this._grip = new Ys, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new F, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new F), this._grip
    }

    dispatchEvent(t) {
        return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this
    }

    disconnect(t) {
        return this.dispatchEvent({
            type: "disconnected",
            data: t
        }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this
    }

    update(t, e, i) {
        let s = null, a = null, u = null;
        const l = this._targetRay, f = this._grip, h = this._hand;
        if (t && e.session.visibilityState !== "visible-blurred") {
            if (h && t.hand) {
                u = !0;
                for (const v of t.hand.values()) {
                    const _ = e.getJointPose(v, i);
                    if (h.joints[v.jointName] === void 0) {
                        const L = new Ys;
                        L.matrixAutoUpdate = !1, L.visible = !1, h.joints[v.jointName] = L, h.add(L)
                    }
                    const S = h.joints[v.jointName];
                    _ !== null && (S.matrix.fromArray(_.transform.matrix), S.matrix.decompose(S.position, S.rotation, S.scale), S.jointRadius = _.radius), S.visible = _ !== null
                }
                const d = h.joints["index-finger-tip"], m = h.joints["thumb-tip"],
                    g = d.position.distanceTo(m.position), x = .02, M = .005;
                h.inputState.pinching && g > x + M ? (h.inputState.pinching = !1, this.dispatchEvent({
                    type: "pinchend",
                    handedness: t.handedness,
                    target: this
                })) : !h.inputState.pinching && g <= x - M && (h.inputState.pinching = !0, this.dispatchEvent({
                    type: "pinchstart",
                    handedness: t.handedness,
                    target: this
                }))
            } else f !== null && t.gripSpace && (a = e.getPose(t.gripSpace, i), a !== null && (f.matrix.fromArray(a.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), a.linearVelocity ? (f.hasLinearVelocity = !0, f.linearVelocity.copy(a.linearVelocity)) : f.hasLinearVelocity = !1, a.angularVelocity ? (f.hasAngularVelocity = !0, f.angularVelocity.copy(a.angularVelocity)) : f.hasAngularVelocity = !1));
            l !== null && (s = e.getPose(t.targetRaySpace, i), s === null && a !== null && (s = a), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1, this.dispatchEvent(DT)))
        }
        return l !== null && (l.visible = s !== null), f !== null && (f.visible = a !== null), h !== null && (h.visible = u !== null), this
    }
}

class IT extends qn {
    constructor(t, e, i, s, a, u, l, f, h, d) {
        if (d = d !== void 0 ? d : yr, d !== yr && d !== _s) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        i === void 0 && d === yr && (i = _r), i === void 0 && d === _s && (i = fs), super(null, s, a, u, l, f, d, i, h), this.isDepthTexture = !0, this.image = {
            width: t,
            height: e
        }, this.magFilter = l !== void 0 ? l : vn, this.minFilter = f !== void 0 ? f : vn, this.flipY = !1, this.generateMipmaps = !1
    }
}

class OT extends Cr {
    constructor(t, e) {
        super();
        const i = this;
        let s = null, a = 1, u = null, l = "local-floor", f = null, h = null, d = null, m = null, g = null, x = null;
        const M = e.getContextAttributes();
        let v = null, _ = null;
        const S = [], L = [], T = new Cn;
        T.layers.enable(1), T.viewport = new Ae;
        const A = new Cn;
        A.layers.enable(2), A.viewport = new Ae;
        const E = [T, A], D = new RT;
        D.layers.enable(1), D.layers.enable(2);
        let B = null, w = null;
        this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (Y) {
            let J = S[Y];
            return J === void 0 && (J = new Mc, S[Y] = J), J.getTargetRaySpace()
        }, this.getControllerGrip = function (Y) {
            let J = S[Y];
            return J === void 0 && (J = new Mc, S[Y] = J), J.getGripSpace()
        }, this.getHand = function (Y) {
            let J = S[Y];
            return J === void 0 && (J = new Mc, S[Y] = J), J.getHandSpace()
        };

        function N(Y) {
            const J = L.indexOf(Y.inputSource);
            if (J === -1) return;
            const ht = S[J];
            ht !== void 0 && ht.dispatchEvent({type: Y.type, data: Y.inputSource})
        }

        function k() {
            s.removeEventListener("select", N), s.removeEventListener("selectstart", N), s.removeEventListener("selectend", N), s.removeEventListener("squeeze", N), s.removeEventListener("squeezestart", N), s.removeEventListener("squeezeend", N), s.removeEventListener("end", k), s.removeEventListener("inputsourceschange", lt);
            for (let Y = 0; Y < S.length; Y++) {
                const J = L[Y];
                J !== null && (L[Y] = null, S[Y].disconnect(J))
            }
            B = null, w = null, t.setRenderTarget(v), g = null, m = null, d = null, s = null, _ = null, tt.stop(), i.isPresenting = !1, i.dispatchEvent({type: "sessionend"})
        }

        this.setFramebufferScaleFactor = function (Y) {
            a = Y, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
        }, this.setReferenceSpaceType = function (Y) {
            l = Y, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
        }, this.getReferenceSpace = function () {
            return f || u
        }, this.setReferenceSpace = function (Y) {
            f = Y
        }, this.getBaseLayer = function () {
            return m !== null ? m : g
        }, this.getBinding = function () {
            return d
        }, this.getFrame = function () {
            return x
        }, this.getSession = function () {
            return s
        }, this.setSession = async function (Y) {
            if (s = Y, s !== null) {
                if (v = t.getRenderTarget(), s.addEventListener("select", N), s.addEventListener("selectstart", N), s.addEventListener("selectend", N), s.addEventListener("squeeze", N), s.addEventListener("squeezestart", N), s.addEventListener("squeezeend", N), s.addEventListener("end", k), s.addEventListener("inputsourceschange", lt), M.xrCompatible !== !0 && await e.makeXRCompatible(), s.renderState.layers === void 0 || t.capabilities.isWebGL2 === !1) {
                    const J = {
                        antialias: s.renderState.layers === void 0 ? M.antialias : !0,
                        alpha: M.alpha,
                        depth: M.depth,
                        stencil: M.stencil,
                        framebufferScaleFactor: a
                    };
                    g = new XRWebGLLayer(s, e, J), s.updateRenderState({baseLayer: g}), _ = new Tr(g.framebufferWidth, g.framebufferHeight, {
                        format: ri,
                        type: br,
                        encoding: t.outputEncoding,
                        stencilBuffer: M.stencil
                    })
                } else {
                    let J = null, ht = null, gt = null;
                    M.depth && (gt = M.stencil ? 35056 : 33190, J = M.stencil ? _s : yr, ht = M.stencil ? fs : _r);
                    const mt = {colorFormat: 32856, depthFormat: gt, scaleFactor: a};
                    d = new XRWebGLBinding(s, e), m = d.createProjectionLayer(mt), s.updateRenderState({layers: [m]}), _ = new Tr(m.textureWidth, m.textureHeight, {
                        format: ri,
                        type: br,
                        depthTexture: new IT(m.textureWidth, m.textureHeight, ht, void 0, void 0, void 0, void 0, void 0, void 0, J),
                        stencilBuffer: M.stencil,
                        encoding: t.outputEncoding,
                        samples: M.antialias ? 4 : 0
                    });
                    const Ct = t.properties.get(_);
                    Ct.__ignoreDepthValues = m.ignoreDepthValues
                }
                _.isXRRenderTarget = !0, this.setFoveation(1), f = null, u = await s.requestReferenceSpace(l), tt.setContext(s), tt.start(), i.isPresenting = !0, i.dispatchEvent({type: "sessionstart"})
            }
        };

        function lt(Y) {
            for (let J = 0; J < Y.removed.length; J++) {
                const ht = Y.removed[J], gt = L.indexOf(ht);
                gt >= 0 && (L[gt] = null, S[gt].dispatchEvent({type: "disconnected", data: ht}))
            }
            for (let J = 0; J < Y.added.length; J++) {
                const ht = Y.added[J];
                let gt = L.indexOf(ht);
                if (gt === -1) {
                    for (let Ct = 0; Ct < S.length; Ct++) if (Ct >= L.length) {
                        L.push(ht), gt = Ct;
                        break
                    } else if (L[Ct] === null) {
                        L[Ct] = ht, gt = Ct;
                        break
                    }
                    if (gt === -1) break
                }
                const mt = S[gt];
                mt && mt.dispatchEvent({type: "connected", data: ht})
            }
        }

        const vt = new F, j = new F;

        function X(Y, J, ht) {
            vt.setFromMatrixPosition(J.matrixWorld), j.setFromMatrixPosition(ht.matrixWorld);
            const gt = vt.distanceTo(j), mt = J.projectionMatrix.elements, Ct = ht.projectionMatrix.elements,
                Ut = mt[14] / (mt[10] - 1), rt = mt[14] / (mt[10] + 1), le = (mt[9] + 1) / mt[5],
                zt = (mt[9] - 1) / mt[5], Bt = (mt[8] - 1) / mt[0], At = (Ct[8] + 1) / Ct[0], oe = Ut * Bt,
                Ht = Ut * At, Ft = gt / (-Bt + At), ce = Ft * -Bt;
            J.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale), Y.translateX(ce), Y.translateZ(Ft), Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale), Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
            const be = Ut + Ft, Fe = rt + Ft, Ce = oe - ce, De = Ht + (gt - ce), de = le * rt / Fe * be,
                Xe = zt * rt / Fe * be;
            Y.projectionMatrix.makePerspective(Ce, De, de, Xe, be, Fe)
        }

        function ot(Y, J) {
            J === null ? Y.matrixWorld.copy(Y.matrix) : Y.matrixWorld.multiplyMatrices(J.matrixWorld, Y.matrix), Y.matrixWorldInverse.copy(Y.matrixWorld).invert()
        }

        this.updateCamera = function (Y) {
            if (s === null) return;
            D.near = A.near = T.near = Y.near, D.far = A.far = T.far = Y.far, (B !== D.near || w !== D.far) && (s.updateRenderState({
                depthNear: D.near,
                depthFar: D.far
            }), B = D.near, w = D.far);
            const J = Y.parent, ht = D.cameras;
            ot(D, J);
            for (let mt = 0; mt < ht.length; mt++) ot(ht[mt], J);
            D.matrixWorld.decompose(D.position, D.quaternion, D.scale), Y.matrix.copy(D.matrix), Y.matrix.decompose(Y.position, Y.quaternion, Y.scale);
            const gt = Y.children;
            for (let mt = 0, Ct = gt.length; mt < Ct; mt++) gt[mt].updateMatrixWorld(!0);
            ht.length === 2 ? X(D, T, A) : D.projectionMatrix.copy(T.projectionMatrix)
        }, this.getCamera = function () {
            return D
        }, this.getFoveation = function () {
            if (m !== null) return m.fixedFoveation;
            if (g !== null) return g.fixedFoveation
        }, this.setFoveation = function (Y) {
            m !== null && (m.fixedFoveation = Y), g !== null && g.fixedFoveation !== void 0 && (g.fixedFoveation = Y)
        };
        let dt = null;

        function ut(Y, J) {
            if (h = J.getViewerPose(f || u), x = J, h !== null) {
                const ht = h.views;
                g !== null && (t.setRenderTargetFramebuffer(_, g.framebuffer), t.setRenderTarget(_));
                let gt = !1;
                ht.length !== D.cameras.length && (D.cameras.length = 0, gt = !0);
                for (let mt = 0; mt < ht.length; mt++) {
                    const Ct = ht[mt];
                    let Ut = null;
                    if (g !== null) Ut = g.getViewport(Ct); else {
                        const le = d.getViewSubImage(m, Ct);
                        Ut = le.viewport, mt === 0 && (t.setRenderTargetTextures(_, le.colorTexture, m.ignoreDepthValues ? void 0 : le.depthStencilTexture), t.setRenderTarget(_))
                    }
                    let rt = E[mt];
                    rt === void 0 && (rt = new Cn, rt.layers.enable(mt), rt.viewport = new Ae, E[mt] = rt), rt.matrix.fromArray(Ct.transform.matrix), rt.projectionMatrix.fromArray(Ct.projectionMatrix), rt.viewport.set(Ut.x, Ut.y, Ut.width, Ut.height), mt === 0 && D.matrix.copy(rt.matrix), gt === !0 && D.cameras.push(rt)
                }
            }
            for (let ht = 0; ht < S.length; ht++) {
                const gt = L[ht], mt = S[ht];
                gt !== null && mt !== void 0 && mt.update(gt, J, f || u)
            }
            dt && dt(Y, J), x = null
        }

        const tt = new bp;
        tt.setAnimationLoop(ut), this.setAnimationLoop = function (Y) {
            dt = Y
        }, this.dispose = function () {
        }
    }
}

function FT(c, t) {
    function e(v, _) {
        v.fogColor.value.copy(_.color), _.isFog ? (v.fogNear.value = _.near, v.fogFar.value = _.far) : _.isFogExp2 && (v.fogDensity.value = _.density)
    }

    function i(v, _, S, L, T) {
        _.isMeshBasicMaterial || _.isMeshLambertMaterial ? s(v, _) : _.isMeshToonMaterial ? (s(v, _), d(v, _)) : _.isMeshPhongMaterial ? (s(v, _), h(v, _)) : _.isMeshStandardMaterial ? (s(v, _), m(v, _), _.isMeshPhysicalMaterial && g(v, _, T)) : _.isMeshMatcapMaterial ? (s(v, _), x(v, _)) : _.isMeshDepthMaterial ? s(v, _) : _.isMeshDistanceMaterial ? (s(v, _), M(v, _)) : _.isMeshNormalMaterial ? s(v, _) : _.isLineBasicMaterial ? (a(v, _), _.isLineDashedMaterial && u(v, _)) : _.isPointsMaterial ? l(v, _, S, L) : _.isSpriteMaterial ? f(v, _) : _.isShadowMaterial ? (v.color.value.copy(_.color), v.opacity.value = _.opacity) : _.isShaderMaterial && (_.uniformsNeedUpdate = !1)
    }

    function s(v, _) {
        v.opacity.value = _.opacity, _.color && v.diffuse.value.copy(_.color), _.emissive && v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity), _.map && (v.map.value = _.map), _.alphaMap && (v.alphaMap.value = _.alphaMap), _.bumpMap && (v.bumpMap.value = _.bumpMap, v.bumpScale.value = _.bumpScale, _.side === Ln && (v.bumpScale.value *= -1)), _.displacementMap && (v.displacementMap.value = _.displacementMap, v.displacementScale.value = _.displacementScale, v.displacementBias.value = _.displacementBias), _.emissiveMap && (v.emissiveMap.value = _.emissiveMap), _.normalMap && (v.normalMap.value = _.normalMap, v.normalScale.value.copy(_.normalScale), _.side === Ln && v.normalScale.value.negate()), _.specularMap && (v.specularMap.value = _.specularMap), _.alphaTest > 0 && (v.alphaTest.value = _.alphaTest);
        const S = t.get(_).envMap;
        if (S && (v.envMap.value = S, v.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1, v.reflectivity.value = _.reflectivity, v.ior.value = _.ior, v.refractionRatio.value = _.refractionRatio), _.lightMap) {
            v.lightMap.value = _.lightMap;
            const A = c.physicallyCorrectLights !== !0 ? Math.PI : 1;
            v.lightMapIntensity.value = _.lightMapIntensity * A
        }
        _.aoMap && (v.aoMap.value = _.aoMap, v.aoMapIntensity.value = _.aoMapIntensity);
        let L;
        _.map ? L = _.map : _.specularMap ? L = _.specularMap : _.displacementMap ? L = _.displacementMap : _.normalMap ? L = _.normalMap : _.bumpMap ? L = _.bumpMap : _.roughnessMap ? L = _.roughnessMap : _.metalnessMap ? L = _.metalnessMap : _.alphaMap ? L = _.alphaMap : _.emissiveMap ? L = _.emissiveMap : _.clearcoatMap ? L = _.clearcoatMap : _.clearcoatNormalMap ? L = _.clearcoatNormalMap : _.clearcoatRoughnessMap ? L = _.clearcoatRoughnessMap : _.iridescenceMap ? L = _.iridescenceMap : _.iridescenceThicknessMap ? L = _.iridescenceThicknessMap : _.specularIntensityMap ? L = _.specularIntensityMap : _.specularColorMap ? L = _.specularColorMap : _.transmissionMap ? L = _.transmissionMap : _.thicknessMap ? L = _.thicknessMap : _.sheenColorMap ? L = _.sheenColorMap : _.sheenRoughnessMap && (L = _.sheenRoughnessMap), L !== void 0 && (L.isWebGLRenderTarget && (L = L.texture), L.matrixAutoUpdate === !0 && L.updateMatrix(), v.uvTransform.value.copy(L.matrix));
        let T;
        _.aoMap ? T = _.aoMap : _.lightMap && (T = _.lightMap), T !== void 0 && (T.isWebGLRenderTarget && (T = T.texture), T.matrixAutoUpdate === !0 && T.updateMatrix(), v.uv2Transform.value.copy(T.matrix))
    }

    function a(v, _) {
        v.diffuse.value.copy(_.color), v.opacity.value = _.opacity
    }

    function u(v, _) {
        v.dashSize.value = _.dashSize, v.totalSize.value = _.dashSize + _.gapSize, v.scale.value = _.scale
    }

    function l(v, _, S, L) {
        v.diffuse.value.copy(_.color), v.opacity.value = _.opacity, v.size.value = _.size * S, v.scale.value = L * .5, _.map && (v.map.value = _.map), _.alphaMap && (v.alphaMap.value = _.alphaMap), _.alphaTest > 0 && (v.alphaTest.value = _.alphaTest);
        let T;
        _.map ? T = _.map : _.alphaMap && (T = _.alphaMap), T !== void 0 && (T.matrixAutoUpdate === !0 && T.updateMatrix(), v.uvTransform.value.copy(T.matrix))
    }

    function f(v, _) {
        v.diffuse.value.copy(_.color), v.opacity.value = _.opacity, v.rotation.value = _.rotation, _.map && (v.map.value = _.map), _.alphaMap && (v.alphaMap.value = _.alphaMap), _.alphaTest > 0 && (v.alphaTest.value = _.alphaTest);
        let S;
        _.map ? S = _.map : _.alphaMap && (S = _.alphaMap), S !== void 0 && (S.matrixAutoUpdate === !0 && S.updateMatrix(), v.uvTransform.value.copy(S.matrix))
    }

    function h(v, _) {
        v.specular.value.copy(_.specular), v.shininess.value = Math.max(_.shininess, 1e-4)
    }

    function d(v, _) {
        _.gradientMap && (v.gradientMap.value = _.gradientMap)
    }

    function m(v, _) {
        v.roughness.value = _.roughness, v.metalness.value = _.metalness, _.roughnessMap && (v.roughnessMap.value = _.roughnessMap), _.metalnessMap && (v.metalnessMap.value = _.metalnessMap), t.get(_).envMap && (v.envMapIntensity.value = _.envMapIntensity)
    }

    function g(v, _, S) {
        v.ior.value = _.ior, _.sheen > 0 && (v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen), v.sheenRoughness.value = _.sheenRoughness, _.sheenColorMap && (v.sheenColorMap.value = _.sheenColorMap), _.sheenRoughnessMap && (v.sheenRoughnessMap.value = _.sheenRoughnessMap)), _.clearcoat > 0 && (v.clearcoat.value = _.clearcoat, v.clearcoatRoughness.value = _.clearcoatRoughness, _.clearcoatMap && (v.clearcoatMap.value = _.clearcoatMap), _.clearcoatRoughnessMap && (v.clearcoatRoughnessMap.value = _.clearcoatRoughnessMap), _.clearcoatNormalMap && (v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale), v.clearcoatNormalMap.value = _.clearcoatNormalMap, _.side === Ln && v.clearcoatNormalScale.value.negate())), _.iridescence > 0 && (v.iridescence.value = _.iridescence, v.iridescenceIOR.value = _.iridescenceIOR, v.iridescenceThicknessMinimum.value = _.iridescenceThicknessRange[0], v.iridescenceThicknessMaximum.value = _.iridescenceThicknessRange[1], _.iridescenceMap && (v.iridescenceMap.value = _.iridescenceMap), _.iridescenceThicknessMap && (v.iridescenceThicknessMap.value = _.iridescenceThicknessMap)), _.transmission > 0 && (v.transmission.value = _.transmission, v.transmissionSamplerMap.value = S.texture, v.transmissionSamplerSize.value.set(S.width, S.height), _.transmissionMap && (v.transmissionMap.value = _.transmissionMap), v.thickness.value = _.thickness, _.thicknessMap && (v.thicknessMap.value = _.thicknessMap), v.attenuationDistance.value = _.attenuationDistance, v.attenuationColor.value.copy(_.attenuationColor)), v.specularIntensity.value = _.specularIntensity, v.specularColor.value.copy(_.specularColor), _.specularIntensityMap && (v.specularIntensityMap.value = _.specularIntensityMap), _.specularColorMap && (v.specularColorMap.value = _.specularColorMap)
    }

    function x(v, _) {
        _.matcap && (v.matcap.value = _.matcap)
    }

    function M(v, _) {
        v.referencePosition.value.copy(_.referencePosition), v.nearDistance.value = _.nearDistance, v.farDistance.value = _.farDistance
    }

    return {refreshFogUniforms: e, refreshMaterialUniforms: i}
}

function NT(c, t, e, i) {
    let s = {}, a = {}, u = [];
    const l = e.isWebGL2 ? c.getParameter(35375) : 0;

    function f(L, T) {
        const A = T.program;
        i.uniformBlockBinding(L, A)
    }

    function h(L, T) {
        let A = s[L.id];
        A === void 0 && (M(L), A = d(L), s[L.id] = A, L.addEventListener("dispose", _));
        const E = T.program;
        i.updateUBOMapping(L, E);
        const D = t.render.frame;
        a[L.id] !== D && (g(L), a[L.id] = D)
    }

    function d(L) {
        const T = m();
        L.__bindingPointIndex = T;
        const A = c.createBuffer(), E = L.__size, D = L.usage;
        return c.bindBuffer(35345, A), c.bufferData(35345, E, D), c.bindBuffer(35345, null), c.bindBufferBase(35345, T, A), A
    }

    function m() {
        for (let L = 0; L < l; L++) if (u.indexOf(L) === -1) return u.push(L), L;
        return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0
    }

    function g(L) {
        const T = s[L.id], A = L.uniforms, E = L.__cache;
        c.bindBuffer(35345, T);
        for (let D = 0, B = A.length; D < B; D++) {
            const w = A[D];
            if (x(w, D, E) === !0) {
                const N = w.value, k = w.__offset;
                typeof N == "number" ? (w.__data[0] = N, c.bufferSubData(35345, k, w.__data)) : (w.value.isMatrix3 ? (w.__data[0] = w.value.elements[0], w.__data[1] = w.value.elements[1], w.__data[2] = w.value.elements[2], w.__data[3] = w.value.elements[0], w.__data[4] = w.value.elements[3], w.__data[5] = w.value.elements[4], w.__data[6] = w.value.elements[5], w.__data[7] = w.value.elements[0], w.__data[8] = w.value.elements[6], w.__data[9] = w.value.elements[7], w.__data[10] = w.value.elements[8], w.__data[11] = w.value.elements[0]) : N.toArray(w.__data), c.bufferSubData(35345, k, w.__data))
            }
        }
        c.bindBuffer(35345, null)
    }

    function x(L, T, A) {
        const E = L.value;
        if (A[T] === void 0) return typeof E == "number" ? A[T] = E : A[T] = E.clone(), !0;
        if (typeof E == "number") {
            if (A[T] !== E) return A[T] = E, !0
        } else {
            const D = A[T];
            if (D.equals(E) === !1) return D.copy(E), !0
        }
        return !1
    }

    function M(L) {
        const T = L.uniforms;
        let A = 0;
        const E = 16;
        let D = 0;
        for (let B = 0, w = T.length; B < w; B++) {
            const N = T[B], k = v(N);
            if (N.__data = new Float32Array(k.storage / Float32Array.BYTES_PER_ELEMENT), N.__offset = A, B > 0) {
                D = A % E;
                const lt = E - D;
                D !== 0 && lt - k.boundary < 0 && (A += E - D, N.__offset = A)
            }
            A += k.storage
        }
        return D = A % E, D > 0 && (A += E - D), L.__size = A, L.__cache = {}, this
    }

    function v(L) {
        const T = L.value, A = {boundary: 0, storage: 0};
        return typeof T == "number" ? (A.boundary = 4, A.storage = 4) : T.isVector2 ? (A.boundary = 8, A.storage = 8) : T.isVector3 || T.isColor ? (A.boundary = 16, A.storage = 12) : T.isVector4 ? (A.boundary = 16, A.storage = 16) : T.isMatrix3 ? (A.boundary = 48, A.storage = 48) : T.isMatrix4 ? (A.boundary = 64, A.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T), A
    }

    function _(L) {
        const T = L.target;
        T.removeEventListener("dispose", _);
        const A = u.indexOf(T.__bindingPointIndex);
        u.splice(A, 1), c.deleteBuffer(s[T.id]), delete s[T.id], delete a[T.id]
    }

    function S() {
        for (const L in s) c.deleteBuffer(s[L]);
        u = [], s = {}, a = {}
    }

    return {bind: f, update: h, dispose: S}
}

function UT() {
    const c = Qs("canvas");
    return c.style.display = "block", c
}

function Lp(c = {}) {
    this.isWebGLRenderer = !0;
    const t = c.canvas !== void 0 ? c.canvas : UT(), e = c.context !== void 0 ? c.context : null,
        i = c.depth !== void 0 ? c.depth : !0, s = c.stencil !== void 0 ? c.stencil : !0,
        a = c.antialias !== void 0 ? c.antialias : !1, u = c.premultipliedAlpha !== void 0 ? c.premultipliedAlpha : !0,
        l = c.preserveDrawingBuffer !== void 0 ? c.preserveDrawingBuffer : !1,
        f = c.powerPreference !== void 0 ? c.powerPreference : "default",
        h = c.failIfMajorPerformanceCaveat !== void 0 ? c.failIfMajorPerformanceCaveat : !1;
    let d;
    e !== null ? d = e.getContextAttributes().alpha : d = c.alpha !== void 0 ? c.alpha : !1;
    let m = null, g = null;
    const x = [], M = [];
    this.domElement = t, this.debug = {checkShaderErrors: !0}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = wr, this.physicallyCorrectLights = !1, this.toneMapping = Ii, this.toneMappingExposure = 1, Object.defineProperties(this, {
        gammaFactor: {
            get: function () {
                return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2
            }, set: function () {
                console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")
            }
        }
    });
    const v = this;
    let _ = !1, S = 0, L = 0, T = null, A = -1, E = null;
    const D = new Ae, B = new Ae;
    let w = null, N = t.width, k = t.height, lt = 1, vt = null, j = null;
    const X = new Ae(0, 0, N, k), ot = new Ae(0, 0, N, k);
    let dt = !1;
    const ut = new Xc;
    let tt = !1, Y = !1, J = null;
    const ht = new Re, gt = new Lt, mt = new F,
        Ct = {background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0};

    function Ut() {
        return T === null ? lt : 1
    }

    let rt = e;

    function le(R, Z) {
        for (let et = 0; et < R.length; et++) {
            const q = R[et], it = t.getContext(q, Z);
            if (it !== null) return it
        }
        return null
    }

    try {
        const R = {
            alpha: !0,
            depth: i,
            stencil: s,
            antialias: a,
            premultipliedAlpha: u,
            preserveDrawingBuffer: l,
            powerPreference: f,
            failIfMajorPerformanceCaveat: h
        };
        if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Vc}`), t.addEventListener("webglcontextlost", Rt, !1), t.addEventListener("webglcontextrestored", Pt, !1), t.addEventListener("webglcontextcreationerror", jt, !1), rt === null) {
            const Z = ["webgl2", "webgl", "experimental-webgl"];
            if (v.isWebGL1Renderer === !0 && Z.shift(), rt = le(Z, R), rt === null) throw le(Z) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
        }
        rt.getShaderPrecisionFormat === void 0 && (rt.getShaderPrecisionFormat = function () {
            return {rangeMin: 1, rangeMax: 1, precision: 1}
        })
    } catch (R) {
        throw console.error("THREE.WebGLRenderer: " + R.message), R
    }
    let zt, Bt, At, oe, Ht, Ft, ce, be, Fe, Ce, De, de, Xe, we, I, P, K, ft, _t, yt, Ot, U, H, bt;

    function wt() {
        zt = new Zb(rt), Bt = new Vb(rt, zt, c), zt.init(Bt), U = new PT(rt, zt, Bt), At = new CT(rt, zt, Bt), oe = new jb, Ht = new pT, Ft = new LT(rt, zt, At, Ht, Bt, U, oe), ce = new Hb(v), be = new Yb(v), Fe = new a1(rt, Bt), H = new Gb(rt, zt, Fe, Bt), Ce = new $b(rt, Fe, oe, H), De = new ew(rt, Ce, Fe, oe), _t = new tw(rt, Bt, Ft), P = new kb(Ht), de = new dT(v, ce, be, zt, Bt, H, P), Xe = new FT(v, Ht), we = new gT, I = new ST(zt, Bt), ft = new Bb(v, ce, be, At, De, d, u), K = new AT(v, De, Bt), bt = new NT(rt, oe, Bt, At), yt = new Wb(rt, zt, oe, Bt), Ot = new Jb(rt, zt, oe, Bt), oe.programs = de.programs, v.capabilities = Bt, v.extensions = zt, v.properties = Ht, v.renderLists = we, v.shadowMap = K, v.state = At, v.info = oe
    }

    wt();
    const St = new OT(v, rt);
    this.xr = St, this.getContext = function () {
        return rt
    }, this.getContextAttributes = function () {
        return rt.getContextAttributes()
    }, this.forceContextLoss = function () {
        const R = zt.get("WEBGL_lose_context");
        R && R.loseContext()
    }, this.forceContextRestore = function () {
        const R = zt.get("WEBGL_lose_context");
        R && R.restoreContext()
    }, this.getPixelRatio = function () {
        return lt
    }, this.setPixelRatio = function (R) {
        R !== void 0 && (lt = R, this.setSize(N, k, !1))
    }, this.getSize = function (R) {
        return R.set(N, k)
    }, this.setSize = function (R, Z, et) {
        if (St.isPresenting) {
            console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
            return
        }
        N = R, k = Z, t.width = Math.floor(R * lt), t.height = Math.floor(Z * lt), et !== !1 && (t.style.width = R + "px", t.style.height = Z + "px"), this.setViewport(0, 0, R, Z)
    }, this.getDrawingBufferSize = function (R) {
        return R.set(N * lt, k * lt).floor()
    }, this.setDrawingBufferSize = function (R, Z, et) {
        N = R, k = Z, lt = et, t.width = Math.floor(R * et), t.height = Math.floor(Z * et), this.setViewport(0, 0, R, Z)
    }, this.getCurrentViewport = function (R) {
        return R.copy(D)
    }, this.getViewport = function (R) {
        return R.copy(X)
    }, this.setViewport = function (R, Z, et, q) {
        R.isVector4 ? X.set(R.x, R.y, R.z, R.w) : X.set(R, Z, et, q), At.viewport(D.copy(X).multiplyScalar(lt).floor())
    }, this.getScissor = function (R) {
        return R.copy(ot)
    }, this.setScissor = function (R, Z, et, q) {
        R.isVector4 ? ot.set(R.x, R.y, R.z, R.w) : ot.set(R, Z, et, q), At.scissor(B.copy(ot).multiplyScalar(lt).floor())
    }, this.getScissorTest = function () {
        return dt
    }, this.setScissorTest = function (R) {
        At.setScissorTest(dt = R)
    }, this.setOpaqueSort = function (R) {
        vt = R
    }, this.setTransparentSort = function (R) {
        j = R
    }, this.getClearColor = function (R) {
        return R.copy(ft.getClearColor())
    }, this.setClearColor = function () {
        ft.setClearColor.apply(ft, arguments)
    }, this.getClearAlpha = function () {
        return ft.getClearAlpha()
    }, this.setClearAlpha = function () {
        ft.setClearAlpha.apply(ft, arguments)
    }, this.clear = function (R = !0, Z = !0, et = !0) {
        let q = 0;
        R && (q |= 16384), Z && (q |= 256), et && (q |= 1024), rt.clear(q)
    }, this.clearColor = function () {
        this.clear(!0, !1, !1)
    }, this.clearDepth = function () {
        this.clear(!1, !0, !1)
    }, this.clearStencil = function () {
        this.clear(!1, !1, !0)
    }, this.dispose = function () {
        t.removeEventListener("webglcontextlost", Rt, !1), t.removeEventListener("webglcontextrestored", Pt, !1), t.removeEventListener("webglcontextcreationerror", jt, !1), we.dispose(), I.dispose(), Ht.dispose(), ce.dispose(), be.dispose(), De.dispose(), H.dispose(), bt.dispose(), de.dispose(), St.dispose(), St.removeEventListener("sessionstart", Tt), St.removeEventListener("sessionend", It), J && (J.dispose(), J = null), ue.stop()
    };

    function Rt(R) {
        R.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), _ = !0
    }

    function Pt() {
        console.log("THREE.WebGLRenderer: Context Restored."), _ = !1;
        const R = oe.autoReset, Z = K.enabled, et = K.autoUpdate, q = K.needsUpdate, it = K.type;
        wt(), oe.autoReset = R, K.enabled = Z, K.autoUpdate = et, K.needsUpdate = q, K.type = it
    }

    function jt(R) {
        console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", R.statusMessage)
    }

    function te(R) {
        const Z = R.target;
        Z.removeEventListener("dispose", te), me(Z)
    }

    function me(R) {
        G(R), Ht.remove(R)
    }

    function G(R) {
        const Z = Ht.get(R).programs;
        Z !== void 0 && (Z.forEach(function (et) {
            de.releaseProgram(et)
        }), R.isShaderMaterial && de.releaseShaderCache(R))
    }

    this.renderBufferDirect = function (R, Z, et, q, it, Nt) {
        Z === null && (Z = Ct);
        const kt = it.isMesh && it.matrixWorld.determinant() < 0, Yt = Io(R, Z, et, q, it);
        At.setMaterial(q, kt);
        let Zt = et.index;
        const he = et.attributes.position;
        if (Zt === null) {
            if (he === void 0 || he.count === 0) return
        } else if (Zt.count === 0) return;
        let ee = 1;
        q.wireframe === !0 && (Zt = Ce.getWireframeAttribute(et), ee = 2), H.setup(it, q, Yt, et, Zt);
        let se, Te = yt;
        Zt !== null && (se = Fe.get(Zt), Te = Ot, Te.setIndex(se));
        const fi = Zt !== null ? Zt.count : he.count, Yn = et.drawRange.start * ee, Fi = et.drawRange.count * ee,
            an = Nt !== null ? Nt.start * ee : 0, fe = Nt !== null ? Nt.count * ee : 1 / 0, Ni = Math.max(Yn, an),
            Ie = Math.min(fi, Yn + Fi, an + fe) - 1, on = Math.max(0, Ie - Ni + 1);
        if (on !== 0) {
            if (it.isMesh) q.wireframe === !0 ? (At.setLineWidth(q.wireframeLinewidth * Ut()), Te.setMode(1)) : Te.setMode(4); else if (it.isLine) {
                let Zn = q.linewidth;
                Zn === void 0 && (Zn = 1), At.setLineWidth(Zn * Ut()), it.isLineSegments ? Te.setMode(1) : it.isLineLoop ? Te.setMode(2) : Te.setMode(3)
            } else it.isPoints ? Te.setMode(0) : it.isSprite && Te.setMode(4);
            if (it.isInstancedMesh) Te.renderInstances(Ni, on, it.count); else if (et.isInstancedBufferGeometry) {
                const Zn = Math.min(et.instanceCount, et._maxInstanceCount);
                Te.renderInstances(Ni, on, Zn)
            } else Te.render(Ni, on)
        }
    }, this.compile = function (R, Z) {
        function et(q, it, Nt) {
            q.transparent === !0 && q.side === Ri ? (q.side = Ln, q.needsUpdate = !0, fn(q, it, Nt), q.side = Sr, q.needsUpdate = !0, fn(q, it, Nt), q.side = Ri) : fn(q, it, Nt)
        }

        g = I.get(R), g.init(), M.push(g), R.traverseVisible(function (q) {
            q.isLight && q.layers.test(Z.layers) && (g.pushLight(q), q.castShadow && g.pushShadow(q))
        }), g.setupLights(v.physicallyCorrectLights), R.traverse(function (q) {
            const it = q.material;
            if (it) if (Array.isArray(it)) for (let Nt = 0; Nt < it.length; Nt++) {
                const kt = it[Nt];
                et(kt, R, q)
            } else et(it, R, q)
        }), M.pop(), g = null
    };
    let nt = null;

    function pt(R) {
        nt && nt(R)
    }

    function Tt() {
        ue.stop()
    }

    function It() {
        ue.start()
    }

    const ue = new bp;
    ue.setAnimationLoop(pt), typeof self < "u" && ue.setContext(self), this.setAnimationLoop = function (R) {
        nt = R, St.setAnimationLoop(R), R === null ? ue.stop() : ue.start()
    }, St.addEventListener("sessionstart", Tt), St.addEventListener("sessionend", It), this.render = function (R, Z) {
        if (Z !== void 0 && Z.isCamera !== !0) {
            console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            return
        }
        if (_ === !0) return;
        R.matrixWorldAutoUpdate === !0 && R.updateMatrixWorld(), Z.parent === null && Z.matrixWorldAutoUpdate === !0 && Z.updateMatrixWorld(), St.enabled === !0 && St.isPresenting === !0 && (St.cameraAutoUpdate === !0 && St.updateCamera(Z), Z = St.getCamera()), R.isScene === !0 && R.onBeforeRender(v, R, Z, T), g = I.get(R, M.length), g.init(), M.push(g), ht.multiplyMatrices(Z.projectionMatrix, Z.matrixWorldInverse), ut.setFromProjectionMatrix(ht), Y = this.localClippingEnabled, tt = P.init(this.clippingPlanes, Y, Z), m = we.get(R, x.length), m.init(), x.push(m), ze(R, Z, 0, v.sortObjects), m.finish(), v.sortObjects === !0 && m.sort(vt, j), tt === !0 && P.beginShadows();
        const et = g.state.shadowsArray;
        if (K.render(et, R, Z), tt === !0 && P.endShadows(), this.info.autoReset === !0 && this.info.reset(), ft.render(m, R), g.setupLights(v.physicallyCorrectLights), Z.isArrayCamera) {
            const q = Z.cameras;
            for (let it = 0, Nt = q.length; it < Nt; it++) {
                const kt = q[it];
                Ye(m, R, kt, kt.viewport)
            }
        } else Ye(m, R, Z);
        T !== null && (Ft.updateMultisampleRenderTarget(T), Ft.updateRenderTargetMipmap(T)), R.isScene === !0 && R.onAfterRender(v, R, Z), H.resetDefaultState(), A = -1, E = null, M.pop(), M.length > 0 ? g = M[M.length - 1] : g = null, x.pop(), x.length > 0 ? m = x[x.length - 1] : m = null
    };

    function ze(R, Z, et, q) {
        if (R.visible === !1) return;
        if (R.layers.test(Z.layers)) {
            if (R.isGroup) et = R.renderOrder; else if (R.isLOD) R.autoUpdate === !0 && R.update(Z); else if (R.isLight) g.pushLight(R), R.castShadow && g.pushShadow(R); else if (R.isSprite) {
                if (!R.frustumCulled || ut.intersectsSprite(R)) {
                    q && mt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ht);
                    const kt = De.update(R), Yt = R.material;
                    Yt.visible && m.push(R, kt, Yt, et, mt.z, null)
                }
            } else if ((R.isMesh || R.isLine || R.isPoints) && (R.isSkinnedMesh && R.skeleton.frame !== oe.render.frame && (R.skeleton.update(), R.skeleton.frame = oe.render.frame), !R.frustumCulled || ut.intersectsObject(R))) {
                q && mt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ht);
                const kt = De.update(R), Yt = R.material;
                if (Array.isArray(Yt)) {
                    const Zt = kt.groups;
                    for (let he = 0, ee = Zt.length; he < ee; he++) {
                        const se = Zt[he], Te = Yt[se.materialIndex];
                        Te && Te.visible && m.push(R, kt, Te, et, mt.z, se)
                    }
                } else Yt.visible && m.push(R, kt, Yt, et, mt.z, null)
            }
        }
        const Nt = R.children;
        for (let kt = 0, Yt = Nt.length; kt < Yt; kt++) ze(Nt[kt], Z, et, q)
    }

    function Ye(R, Z, et, q) {
        const it = R.opaque, Nt = R.transmissive, kt = R.transparent;
        g.setupLightsView(et), Nt.length > 0 && si(it, Z, et), q && At.viewport(D.copy(q)), it.length > 0 && ye(it, Z, et), Nt.length > 0 && ye(Nt, Z, et), kt.length > 0 && ye(kt, Z, et), At.buffers.depth.setTest(!0), At.buffers.depth.setMask(!0), At.buffers.color.setMask(!0), At.setPolygonOffset(!1)
    }

    function si(R, Z, et) {
        const q = Bt.isWebGL2;
        J === null && (J = new Tr(1, 1, {
            generateMipmaps: !0,
            type: zt.has("EXT_color_buffer_half_float") ? Ks : br,
            minFilter: Eo,
            samples: q && a === !0 ? 4 : 0
        })), v.getDrawingBufferSize(gt), q ? J.setSize(gt.x, gt.y) : J.setSize(Uc(gt.x), Uc(gt.y));
        const it = v.getRenderTarget();
        v.setRenderTarget(J), v.clear();
        const Nt = v.toneMapping;
        v.toneMapping = Ii, ye(R, Z, et), v.toneMapping = Nt, Ft.updateMultisampleRenderTarget(J), Ft.updateRenderTargetMipmap(J), v.setRenderTarget(it)
    }

    function ye(R, Z, et) {
        const q = Z.isScene === !0 ? Z.overrideMaterial : null;
        for (let it = 0, Nt = R.length; it < Nt; it++) {
            const kt = R[it], Yt = kt.object, Zt = kt.geometry, he = q === null ? kt.material : q, ee = kt.group;
            Yt.layers.test(et.layers) && Xn(Yt, Z, et, Zt, he, ee)
        }
    }

    function Xn(R, Z, et, q, it, Nt) {
        R.onBeforeRender(v, Z, et, q, it, Nt), R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse, R.matrixWorld), R.normalMatrix.getNormalMatrix(R.modelViewMatrix), it.onBeforeRender(v, Z, et, q, R, Nt), it.transparent === !0 && it.side === Ri ? (it.side = Ln, it.needsUpdate = !0, v.renderBufferDirect(et, Z, q, it, R, Nt), it.side = Sr, it.needsUpdate = !0, v.renderBufferDirect(et, Z, q, it, R, Nt), it.side = Ri) : v.renderBufferDirect(et, Z, q, it, R, Nt), R.onAfterRender(v, Z, et, q, it, Nt)
    }

    function fn(R, Z, et) {
        Z.isScene !== !0 && (Z = Ct);
        const q = Ht.get(R), it = g.state.lights, Nt = g.state.shadowsArray, kt = it.state.version,
            Yt = de.getParameters(R, it.state, Nt, Z, et), Zt = de.getProgramCacheKey(Yt);
        let he = q.programs;
        q.environment = R.isMeshStandardMaterial ? Z.environment : null, q.fog = Z.fog, q.envMap = (R.isMeshStandardMaterial ? be : ce).get(R.envMap || q.environment), he === void 0 && (R.addEventListener("dispose", te), he = new Map, q.programs = he);
        let ee = he.get(Zt);
        if (ee !== void 0) {
            if (q.currentProgram === ee && q.lightsStateVersion === kt) return Pr(R, Yt), ee
        } else Yt.uniforms = de.getUniforms(R), R.onBuild(et, Yt, v), R.onBeforeCompile(Yt, v), ee = de.acquireProgram(Yt, Zt), he.set(Zt, ee), q.uniforms = Yt.uniforms;
        const se = q.uniforms;
        (!R.isShaderMaterial && !R.isRawShaderMaterial || R.clipping === !0) && (se.clippingPlanes = P.uniform), Pr(R, Yt), q.needsLights = Oo(R), q.lightsStateVersion = kt, q.needsLights && (se.ambientLightColor.value = it.state.ambient, se.lightProbe.value = it.state.probe, se.directionalLights.value = it.state.directional, se.directionalLightShadows.value = it.state.directionalShadow, se.spotLights.value = it.state.spot, se.spotLightShadows.value = it.state.spotShadow, se.rectAreaLights.value = it.state.rectArea, se.ltc_1.value = it.state.rectAreaLTC1, se.ltc_2.value = it.state.rectAreaLTC2, se.pointLights.value = it.state.point, se.pointLightShadows.value = it.state.pointShadow, se.hemisphereLights.value = it.state.hemi, se.directionalShadowMap.value = it.state.directionalShadowMap, se.directionalShadowMatrix.value = it.state.directionalShadowMatrix, se.spotShadowMap.value = it.state.spotShadowMap, se.spotLightMatrix.value = it.state.spotLightMatrix, se.spotLightMap.value = it.state.spotLightMap, se.pointShadowMap.value = it.state.pointShadowMap, se.pointShadowMatrix.value = it.state.pointShadowMatrix);
        const Te = ee.getUniforms(), fi = yo.seqWithValue(Te.seq, se);
        return q.currentProgram = ee, q.uniformsList = fi, ee
    }

    function Pr(R, Z) {
        const et = Ht.get(R);
        et.outputEncoding = Z.outputEncoding, et.instancing = Z.instancing, et.skinning = Z.skinning, et.morphTargets = Z.morphTargets, et.morphNormals = Z.morphNormals, et.morphColors = Z.morphColors, et.morphTargetsCount = Z.morphTargetsCount, et.numClippingPlanes = Z.numClippingPlanes, et.numIntersection = Z.numClipIntersection, et.vertexAlphas = Z.vertexAlphas, et.vertexTangents = Z.vertexTangents, et.toneMapping = Z.toneMapping
    }

    function Io(R, Z, et, q, it) {
        Z.isScene !== !0 && (Z = Ct), Ft.resetTextureUnits();
        const Nt = Z.fog, kt = q.isMeshStandardMaterial ? Z.environment : null,
            Yt = T === null ? v.outputEncoding : T.isXRRenderTarget === !0 ? T.texture.encoding : wr,
            Zt = (q.isMeshStandardMaterial ? be : ce).get(q.envMap || kt),
            he = q.vertexColors === !0 && !!et.attributes.color && et.attributes.color.itemSize === 4,
            ee = !!q.normalMap && !!et.attributes.tangent, se = !!et.morphAttributes.position,
            Te = !!et.morphAttributes.normal, fi = !!et.morphAttributes.color, Yn = q.toneMapped ? v.toneMapping : Ii,
            Fi = et.morphAttributes.position || et.morphAttributes.normal || et.morphAttributes.color,
            an = Fi !== void 0 ? Fi.length : 0, fe = Ht.get(q), Ni = g.state.lights;
        if (tt === !0 && (Y === !0 || R !== E)) {
            const Qe = R === E && q.id === A;
            P.setState(q, R, Qe)
        }
        let Ie = !1;
        q.version === fe.__version ? (fe.needsLights && fe.lightsStateVersion !== Ni.state.version || fe.outputEncoding !== Yt || it.isInstancedMesh && fe.instancing === !1 || !it.isInstancedMesh && fe.instancing === !0 || it.isSkinnedMesh && fe.skinning === !1 || !it.isSkinnedMesh && fe.skinning === !0 || fe.envMap !== Zt || q.fog === !0 && fe.fog !== Nt || fe.numClippingPlanes !== void 0 && (fe.numClippingPlanes !== P.numPlanes || fe.numIntersection !== P.numIntersection) || fe.vertexAlphas !== he || fe.vertexTangents !== ee || fe.morphTargets !== se || fe.morphNormals !== Te || fe.morphColors !== fi || fe.toneMapping !== Yn || Bt.isWebGL2 === !0 && fe.morphTargetsCount !== an) && (Ie = !0) : (Ie = !0, fe.__version = q.version);
        let on = fe.currentProgram;
        Ie === !0 && (on = fn(q, Z, it));
        let Zn = !1, Ui = !1, Ss = !1;
        const Je = on.getUniforms(), di = fe.uniforms;
        if (At.useProgram(on.program) && (Zn = !0, Ui = !0, Ss = !0), q.id !== A && (A = q.id, Ui = !0), Zn || E !== R) {
            if (Je.setValue(rt, "projectionMatrix", R.projectionMatrix), Bt.logarithmicDepthBuffer && Je.setValue(rt, "logDepthBufFC", 2 / (Math.log(R.far + 1) / Math.LN2)), E !== R && (E = R, Ui = !0, Ss = !0), q.isShaderMaterial || q.isMeshPhongMaterial || q.isMeshToonMaterial || q.isMeshStandardMaterial || q.envMap) {
                const Qe = Je.map.cameraPosition;
                Qe !== void 0 && Qe.setValue(rt, mt.setFromMatrixPosition(R.matrixWorld))
            }
            (q.isMeshPhongMaterial || q.isMeshToonMaterial || q.isMeshLambertMaterial || q.isMeshBasicMaterial || q.isMeshStandardMaterial || q.isShaderMaterial) && Je.setValue(rt, "isOrthographic", R.isOrthographicCamera === !0), (q.isMeshPhongMaterial || q.isMeshToonMaterial || q.isMeshLambertMaterial || q.isMeshBasicMaterial || q.isMeshStandardMaterial || q.isShaderMaterial || q.isShadowMaterial || it.isSkinnedMesh) && Je.setValue(rt, "viewMatrix", R.matrixWorldInverse)
        }
        if (it.isSkinnedMesh) {
            Je.setOptional(rt, it, "bindMatrix"), Je.setOptional(rt, it, "bindMatrixInverse");
            const Qe = it.skeleton;
            Qe && (Bt.floatVertexTextures ? (Qe.boneTexture === null && Qe.computeBoneTexture(), Je.setValue(rt, "boneTexture", Qe.boneTexture, Ft), Je.setValue(rt, "boneTextureSize", Qe.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))
        }
        const bs = et.morphAttributes;
        if ((bs.position !== void 0 || bs.normal !== void 0 || bs.color !== void 0 && Bt.isWebGL2 === !0) && _t.update(it, et, q, on), (Ui || fe.receiveShadow !== it.receiveShadow) && (fe.receiveShadow = it.receiveShadow, Je.setValue(rt, "receiveShadow", it.receiveShadow)), q.isMeshGouraudMaterial && q.envMap !== null && (di.envMap.value = Zt, di.flipEnvMap.value = Zt.isCubeTexture && Zt.isRenderTargetTexture === !1 ? -1 : 1), Ui && (Je.setValue(rt, "toneMappingExposure", v.toneMappingExposure), fe.needsLights && Ms(di, Ss), Nt && q.fog === !0 && Xe.refreshFogUniforms(di, Nt), Xe.refreshMaterialUniforms(di, q, lt, k, J), yo.upload(rt, fe.uniformsList, di, Ft)), q.isShaderMaterial && q.uniformsNeedUpdate === !0 && (yo.upload(rt, fe.uniformsList, di, Ft), q.uniformsNeedUpdate = !1), q.isSpriteMaterial && Je.setValue(rt, "center", it.center), Je.setValue(rt, "modelViewMatrix", it.modelViewMatrix), Je.setValue(rt, "normalMatrix", it.normalMatrix), Je.setValue(rt, "modelMatrix", it.matrixWorld), q.isShaderMaterial || q.isRawShaderMaterial) {
            const Qe = q.uniformsGroups;
            for (let Rr = 0, aa = Qe.length; Rr < aa; Rr++) if (Bt.isWebGL2) {
                const Dr = Qe[Rr];
                bt.update(Dr, on), bt.bind(Dr, on)
            } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")
        }
        return on
    }

    function Ms(R, Z) {
        R.ambientLightColor.needsUpdate = Z, R.lightProbe.needsUpdate = Z, R.directionalLights.needsUpdate = Z, R.directionalLightShadows.needsUpdate = Z, R.pointLights.needsUpdate = Z, R.pointLightShadows.needsUpdate = Z, R.spotLights.needsUpdate = Z, R.spotLightShadows.needsUpdate = Z, R.rectAreaLights.needsUpdate = Z, R.hemisphereLights.needsUpdate = Z
    }

    function Oo(R) {
        return R.isMeshLambertMaterial || R.isMeshToonMaterial || R.isMeshPhongMaterial || R.isMeshStandardMaterial || R.isShadowMaterial || R.isShaderMaterial && R.lights === !0
    }

    this.getActiveCubeFace = function () {
        return S
    }, this.getActiveMipmapLevel = function () {
        return L
    }, this.getRenderTarget = function () {
        return T
    }, this.setRenderTargetTextures = function (R, Z, et) {
        Ht.get(R.texture).__webglTexture = Z, Ht.get(R.depthTexture).__webglTexture = et;
        const q = Ht.get(R);
        q.__hasExternalTextures = !0, q.__hasExternalTextures && (q.__autoAllocateDepthBuffer = et === void 0, q.__autoAllocateDepthBuffer || zt.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), q.__useRenderToTexture = !1))
    }, this.setRenderTargetFramebuffer = function (R, Z) {
        const et = Ht.get(R);
        et.__webglFramebuffer = Z, et.__useDefaultFramebuffer = Z === void 0
    }, this.setRenderTarget = function (R, Z = 0, et = 0) {
        T = R, S = Z, L = et;
        let q = !0, it = null, Nt = !1, kt = !1;
        if (R) {
            const Zt = Ht.get(R);
            Zt.__useDefaultFramebuffer !== void 0 ? (At.bindFramebuffer(36160, null), q = !1) : Zt.__webglFramebuffer === void 0 ? Ft.setupRenderTarget(R) : Zt.__hasExternalTextures && Ft.rebindTextures(R, Ht.get(R.texture).__webglTexture, Ht.get(R.depthTexture).__webglTexture);
            const he = R.texture;
            (he.isData3DTexture || he.isDataArrayTexture || he.isCompressedArrayTexture) && (kt = !0);
            const ee = Ht.get(R).__webglFramebuffer;
            R.isWebGLCubeRenderTarget ? (it = ee[Z], Nt = !0) : Bt.isWebGL2 && R.samples > 0 && Ft.useMultisampledRTT(R) === !1 ? it = Ht.get(R).__webglMultisampledFramebuffer : it = ee, D.copy(R.viewport), B.copy(R.scissor), w = R.scissorTest
        } else D.copy(X).multiplyScalar(lt).floor(), B.copy(ot).multiplyScalar(lt).floor(), w = dt;
        if (At.bindFramebuffer(36160, it) && Bt.drawBuffers && q && At.drawBuffers(R, it), At.viewport(D), At.scissor(B), At.setScissorTest(w), Nt) {
            const Zt = Ht.get(R.texture);
            rt.framebufferTexture2D(36160, 36064, 34069 + Z, Zt.__webglTexture, et)
        } else if (kt) {
            const Zt = Ht.get(R.texture), he = Z || 0;
            rt.framebufferTextureLayer(36160, 36064, Zt.__webglTexture, et || 0, he)
        }
        A = -1
    }, this.readRenderTargetPixels = function (R, Z, et, q, it, Nt, kt) {
        if (!(R && R.isWebGLRenderTarget)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            return
        }
        let Yt = Ht.get(R).__webglFramebuffer;
        if (R.isWebGLCubeRenderTarget && kt !== void 0 && (Yt = Yt[kt]), Yt) {
            At.bindFramebuffer(36160, Yt);
            try {
                const Zt = R.texture, he = Zt.format, ee = Zt.type;
                if (he !== ri && U.convert(he) !== rt.getParameter(35739)) {
                    console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    return
                }
                const se = ee === Ks && (zt.has("EXT_color_buffer_half_float") || Bt.isWebGL2 && zt.has("EXT_color_buffer_float"));
                if (ee !== br && U.convert(ee) !== rt.getParameter(35738) && !(ee === vr && (Bt.isWebGL2 || zt.has("OES_texture_float") || zt.has("WEBGL_color_buffer_float"))) && !se) {
                    console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    return
                }
                Z >= 0 && Z <= R.width - q && et >= 0 && et <= R.height - it && rt.readPixels(Z, et, q, it, U.convert(he), U.convert(ee), Nt)
            } finally {
                const Zt = T !== null ? Ht.get(T).__webglFramebuffer : null;
                At.bindFramebuffer(36160, Zt)
            }
        }
    }, this.copyFramebufferToTexture = function (R, Z, et = 0) {
        const q = Math.pow(2, -et), it = Math.floor(Z.image.width * q), Nt = Math.floor(Z.image.height * q);
        Ft.setTexture2D(Z, 0), rt.copyTexSubImage2D(3553, et, 0, 0, R.x, R.y, it, Nt), At.unbindTexture()
    }, this.copyTextureToTexture = function (R, Z, et, q = 0) {
        const it = Z.image.width, Nt = Z.image.height, kt = U.convert(et.format), Yt = U.convert(et.type);
        Ft.setTexture2D(et, 0), rt.pixelStorei(37440, et.flipY), rt.pixelStorei(37441, et.premultiplyAlpha), rt.pixelStorei(3317, et.unpackAlignment), Z.isDataTexture ? rt.texSubImage2D(3553, q, R.x, R.y, it, Nt, kt, Yt, Z.image.data) : Z.isCompressedTexture ? rt.compressedTexSubImage2D(3553, q, R.x, R.y, Z.mipmaps[0].width, Z.mipmaps[0].height, kt, Z.mipmaps[0].data) : rt.texSubImage2D(3553, q, R.x, R.y, kt, Yt, Z.image), q === 0 && et.generateMipmaps && rt.generateMipmap(3553), At.unbindTexture()
    }, this.copyTextureToTexture3D = function (R, Z, et, q, it = 0) {
        if (v.isWebGL1Renderer) {
            console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
            return
        }
        const Nt = R.max.x - R.min.x + 1, kt = R.max.y - R.min.y + 1, Yt = R.max.z - R.min.z + 1,
            Zt = U.convert(q.format), he = U.convert(q.type);
        let ee;
        if (q.isData3DTexture) Ft.setTexture3D(q, 0), ee = 32879; else if (q.isDataArrayTexture) Ft.setTexture2DArray(q, 0), ee = 35866; else {
            console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
            return
        }
        rt.pixelStorei(37440, q.flipY), rt.pixelStorei(37441, q.premultiplyAlpha), rt.pixelStorei(3317, q.unpackAlignment);
        const se = rt.getParameter(3314), Te = rt.getParameter(32878), fi = rt.getParameter(3316),
            Yn = rt.getParameter(3315), Fi = rt.getParameter(32877),
            an = et.isCompressedTexture ? et.mipmaps[0] : et.image;
        rt.pixelStorei(3314, an.width), rt.pixelStorei(32878, an.height), rt.pixelStorei(3316, R.min.x), rt.pixelStorei(3315, R.min.y), rt.pixelStorei(32877, R.min.z), et.isDataTexture || et.isData3DTexture ? rt.texSubImage3D(ee, it, Z.x, Z.y, Z.z, Nt, kt, Yt, Zt, he, an.data) : et.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), rt.compressedTexSubImage3D(ee, it, Z.x, Z.y, Z.z, Nt, kt, Yt, Zt, an.data)) : rt.texSubImage3D(ee, it, Z.x, Z.y, Z.z, Nt, kt, Yt, Zt, he, an), rt.pixelStorei(3314, se), rt.pixelStorei(32878, Te), rt.pixelStorei(3316, fi), rt.pixelStorei(3315, Yn), rt.pixelStorei(32877, Fi), it === 0 && q.generateMipmaps && rt.generateMipmap(ee), At.unbindTexture()
    }, this.initTexture = function (R) {
        R.isCubeTexture ? Ft.setTextureCube(R, 0) : R.isData3DTexture ? Ft.setTexture3D(R, 0) : R.isDataArrayTexture || R.isCompressedArrayTexture ? Ft.setTexture2DArray(R, 0) : Ft.setTexture2D(R, 0), At.unbindTexture()
    }, this.resetState = function () {
        S = 0, L = 0, T = null, At.reset(), H.reset()
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {detail: this}))
}

class zT extends Lp {
}

zT.prototype.isWebGL1Renderer = !0;

class $c {
    constructor(t, e = 1, i = 1e3) {
        this.isFog = !0, this.name = "", this.color = new ie(t), this.near = e, this.far = i
    }

    clone() {
        return new $c(this.color, this.near, this.far)
    }

    toJSON() {
        return {type: "Fog", color: this.color.getHex(), near: this.near, far: this.far}
    }
}

class BT extends Ge {
    constructor() {
        super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {detail: this}))
    }

    copy(t, e) {
        return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this
    }

    toJSON(t) {
        const e = super.toJSON(t);
        return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.backgroundBlurriness = this.backgroundBlurriness), e
    }

    get autoUpdate() {
        return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate
    }

    set autoUpdate(t) {
        console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = t
    }
}

class Mo extends Oi {
    constructor(t) {
        super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new ie(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t)
    }

    copy(t) {
        return super.copy(t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this
    }
}

const Gd = new F, Wd = new F, Vd = new Re, Sc = new Ao, po = new ia;

class GT extends Ge {
    constructor(t = new sn, e = new Mo) {
        super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets()
    }

    copy(t, e) {
        return super.copy(t, e), this.material = t.material, this.geometry = t.geometry, this
    }

    computeLineDistances() {
        const t = this.geometry;
        if (t.index === null) {
            const e = t.attributes.position, i = [0];
            for (let s = 1, a = e.count; s < a; s++) Gd.fromBufferAttribute(e, s - 1), Wd.fromBufferAttribute(e, s), i[s] = i[s - 1], i[s] += Gd.distanceTo(Wd);
            t.setAttribute("lineDistance", new _e(i, 1))
        } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this
    }

    raycast(t, e) {
        const i = this.geometry, s = this.matrixWorld, a = t.params.Line.threshold, u = i.drawRange;
        if (i.boundingSphere === null && i.computeBoundingSphere(), po.copy(i.boundingSphere), po.applyMatrix4(s), po.radius += a, t.ray.intersectsSphere(po) === !1) return;
        Vd.copy(s).invert(), Sc.copy(t.ray).applyMatrix4(Vd);
        const l = a / ((this.scale.x + this.scale.y + this.scale.z) / 3), f = l * l, h = new F, d = new F, m = new F,
            g = new F, x = this.isLineSegments ? 2 : 1, M = i.index, _ = i.attributes.position;
        if (M !== null) {
            const S = Math.max(0, u.start), L = Math.min(M.count, u.start + u.count);
            for (let T = S, A = L - 1; T < A; T += x) {
                const E = M.getX(T), D = M.getX(T + 1);
                if (h.fromBufferAttribute(_, E), d.fromBufferAttribute(_, D), Sc.distanceSqToSegment(h, d, g, m) > f) continue;
                g.applyMatrix4(this.matrixWorld);
                const w = t.ray.origin.distanceTo(g);
                w < t.near || w > t.far || e.push({
                    distance: w,
                    point: m.clone().applyMatrix4(this.matrixWorld),
                    index: T,
                    face: null,
                    faceIndex: null,
                    object: this
                })
            }
        } else {
            const S = Math.max(0, u.start), L = Math.min(_.count, u.start + u.count);
            for (let T = S, A = L - 1; T < A; T += x) {
                if (h.fromBufferAttribute(_, T), d.fromBufferAttribute(_, T + 1), Sc.distanceSqToSegment(h, d, g, m) > f) continue;
                g.applyMatrix4(this.matrixWorld);
                const D = t.ray.origin.distanceTo(g);
                D < t.near || D > t.far || e.push({
                    distance: D,
                    point: m.clone().applyMatrix4(this.matrixWorld),
                    index: T,
                    face: null,
                    faceIndex: null,
                    object: this
                })
            }
        }
    }

    updateMorphTargets() {
        const e = this.geometry.morphAttributes, i = Object.keys(e);
        if (i.length > 0) {
            const s = e[i[0]];
            if (s !== void 0) {
                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (let a = 0, u = s.length; a < u; a++) {
                    const l = s[a].name || String(a);
                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[l] = a
                }
            }
        }
    }
}

const kd = new F, Hd = new F;

class qd extends GT {
    constructor(t, e) {
        super(t, e), this.isLineSegments = !0, this.type = "LineSegments"
    }

    computeLineDistances() {
        const t = this.geometry;
        if (t.index === null) {
            const e = t.attributes.position, i = [];
            for (let s = 0, a = e.count; s < a; s += 2) kd.fromBufferAttribute(e, s), Hd.fromBufferAttribute(e, s + 1), i[s] = s === 0 ? 0 : i[s - 1], i[s + 1] = i[s] + kd.distanceTo(Hd);
            t.setAttribute("lineDistance", new _e(i, 1))
        } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this
    }
}

class Zs extends Oi {
    constructor(t) {
        super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new ie(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t)
    }

    copy(t) {
        return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this
    }
}

const Xd = new Re, Bc = new Ao, mo = new ia, go = new F;

class bc extends Ge {
    constructor(t = new sn, e = new Zs) {
        super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets()
    }

    copy(t, e) {
        return super.copy(t, e), this.material = t.material, this.geometry = t.geometry, this
    }

    raycast(t, e) {
        const i = this.geometry, s = this.matrixWorld, a = t.params.Points.threshold, u = i.drawRange;
        if (i.boundingSphere === null && i.computeBoundingSphere(), mo.copy(i.boundingSphere), mo.applyMatrix4(s), mo.radius += a, t.ray.intersectsSphere(mo) === !1) return;
        Xd.copy(s).invert(), Bc.copy(t.ray).applyMatrix4(Xd);
        const l = a / ((this.scale.x + this.scale.y + this.scale.z) / 3), f = l * l, h = i.index,
            m = i.attributes.position;
        if (h !== null) {
            const g = Math.max(0, u.start), x = Math.min(h.count, u.start + u.count);
            for (let M = g, v = x; M < v; M++) {
                const _ = h.getX(M);
                go.fromBufferAttribute(m, _), Yd(go, _, f, s, t, e, this)
            }
        } else {
            const g = Math.max(0, u.start), x = Math.min(m.count, u.start + u.count);
            for (let M = g, v = x; M < v; M++) go.fromBufferAttribute(m, M), Yd(go, M, f, s, t, e, this)
        }
    }

    updateMorphTargets() {
        const e = this.geometry.morphAttributes, i = Object.keys(e);
        if (i.length > 0) {
            const s = e[i[0]];
            if (s !== void 0) {
                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (let a = 0, u = s.length; a < u; a++) {
                    const l = s[a].name || String(a);
                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[l] = a
                }
            }
        }
    }
}

function Yd(c, t, e, i, s, a, u) {
    const l = Bc.distanceSqToPoint(c);
    if (l < e) {
        const f = new F;
        Bc.closestPointToPoint(c, f), f.applyMatrix4(i);
        const h = s.ray.origin.distanceTo(f);
        if (h < s.near || h > s.far) return;
        a.push({distance: h, distanceToRay: Math.sqrt(l), point: f, index: t, face: null, object: u})
    }
}

class hi {
    constructor() {
        this.type = "Curve", this.arcLengthDivisions = 200
    }

    getPoint() {
        return console.warn("THREE.Curve: .getPoint() not implemented."), null
    }

    getPointAt(t, e) {
        const i = this.getUtoTmapping(t);
        return this.getPoint(i, e)
    }

    getPoints(t = 5) {
        const e = [];
        for (let i = 0; i <= t; i++) e.push(this.getPoint(i / t));
        return e
    }

    getSpacedPoints(t = 5) {
        const e = [];
        for (let i = 0; i <= t; i++) e.push(this.getPointAt(i / t));
        return e
    }

    getLength() {
        const t = this.getLengths();
        return t[t.length - 1]
    }

    getLengths(t = this.arcLengthDivisions) {
        if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
        this.needsUpdate = !1;
        const e = [];
        let i, s = this.getPoint(0), a = 0;
        e.push(0);
        for (let u = 1; u <= t; u++) i = this.getPoint(u / t), a += i.distanceTo(s), e.push(a), s = i;
        return this.cacheArcLengths = e, e
    }

    updateArcLengths() {
        this.needsUpdate = !0, this.getLengths()
    }

    getUtoTmapping(t, e) {
        const i = this.getLengths();
        let s = 0;
        const a = i.length;
        let u;
        e ? u = e : u = t * i[a - 1];
        let l = 0, f = a - 1, h;
        for (; l <= f;) if (s = Math.floor(l + (f - l) / 2), h = i[s] - u, h < 0) l = s + 1; else if (h > 0) f = s - 1; else {
            f = s;
            break
        }
        if (s = f, i[s] === u) return s / (a - 1);
        const d = i[s], g = i[s + 1] - d, x = (u - d) / g;
        return (s + x) / (a - 1)
    }

    getTangent(t, e) {
        let s = t - 1e-4, a = t + 1e-4;
        s < 0 && (s = 0), a > 1 && (a = 1);
        const u = this.getPoint(s), l = this.getPoint(a), f = e || (u.isVector2 ? new Lt : new F);
        return f.copy(l).sub(u).normalize(), f
    }

    getTangentAt(t, e) {
        const i = this.getUtoTmapping(t);
        return this.getTangent(i, e)
    }

    computeFrenetFrames(t, e) {
        const i = new F, s = [], a = [], u = [], l = new F, f = new Re;
        for (let x = 0; x <= t; x++) {
            const M = x / t;
            s[x] = this.getTangentAt(M, new F)
        }
        a[0] = new F, u[0] = new F;
        let h = Number.MAX_VALUE;
        const d = Math.abs(s[0].x), m = Math.abs(s[0].y), g = Math.abs(s[0].z);
        d <= h && (h = d, i.set(1, 0, 0)), m <= h && (h = m, i.set(0, 1, 0)), g <= h && i.set(0, 0, 1), l.crossVectors(s[0], i).normalize(), a[0].crossVectors(s[0], l), u[0].crossVectors(s[0], a[0]);
        for (let x = 1; x <= t; x++) {
            if (a[x] = a[x - 1].clone(), u[x] = u[x - 1].clone(), l.crossVectors(s[x - 1], s[x]), l.length() > Number.EPSILON) {
                l.normalize();
                const M = Math.acos(rn(s[x - 1].dot(s[x]), -1, 1));
                a[x].applyMatrix4(f.makeRotationAxis(l, M))
            }
            u[x].crossVectors(s[x], a[x])
        }
        if (e === !0) {
            let x = Math.acos(rn(a[0].dot(a[t]), -1, 1));
            x /= t, s[0].dot(l.crossVectors(a[0], a[t])) > 0 && (x = -x);
            for (let M = 1; M <= t; M++) a[M].applyMatrix4(f.makeRotationAxis(s[M], x * M)), u[M].crossVectors(s[M], a[M])
        }
        return {tangents: s, normals: a, binormals: u}
    }

    clone() {
        return new this.constructor().copy(this)
    }

    copy(t) {
        return this.arcLengthDivisions = t.arcLengthDivisions, this
    }

    toJSON() {
        const t = {metadata: {version: 4.5, type: "Curve", generator: "Curve.toJSON"}};
        return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
    }

    fromJSON(t) {
        return this.arcLengthDivisions = t.arcLengthDivisions, this
    }
}

class Pp extends hi {
    constructor(t = 0, e = 0, i = 1, s = 1, a = 0, u = Math.PI * 2, l = !1, f = 0) {
        super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = i, this.yRadius = s, this.aStartAngle = a, this.aEndAngle = u, this.aClockwise = l, this.aRotation = f
    }

    getPoint(t, e) {
        const i = e || new Lt, s = Math.PI * 2;
        let a = this.aEndAngle - this.aStartAngle;
        const u = Math.abs(a) < Number.EPSILON;
        for (; a < 0;) a += s;
        for (; a > s;) a -= s;
        a < Number.EPSILON && (u ? a = 0 : a = s), this.aClockwise === !0 && !u && (a === s ? a = -s : a = a - s);
        const l = this.aStartAngle + t * a;
        let f = this.aX + this.xRadius * Math.cos(l), h = this.aY + this.yRadius * Math.sin(l);
        if (this.aRotation !== 0) {
            const d = Math.cos(this.aRotation), m = Math.sin(this.aRotation), g = f - this.aX, x = h - this.aY;
            f = g * d - x * m + this.aX, h = g * m + x * d + this.aY
        }
        return i.set(f, h)
    }

    copy(t) {
        return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
    }

    toJSON() {
        const t = super.toJSON();
        return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
    }

    fromJSON(t) {
        return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
    }
}

class WT extends Pp {
    constructor(t, e, i, s, a, u) {
        super(t, e, i, i, s, a, u), this.isArcCurve = !0, this.type = "ArcCurve"
    }
}

function Jc() {
    let c = 0, t = 0, e = 0, i = 0;

    function s(a, u, l, f) {
        c = a, t = l, e = -3 * a + 3 * u - 2 * l - f, i = 2 * a - 2 * u + l + f
    }

    return {
        initCatmullRom: function (a, u, l, f, h) {
            s(u, l, h * (l - a), h * (f - u))
        }, initNonuniformCatmullRom: function (a, u, l, f, h, d, m) {
            let g = (u - a) / h - (l - a) / (h + d) + (l - u) / d, x = (l - u) / d - (f - u) / (d + m) + (f - l) / m;
            g *= d, x *= d, s(u, l, g, x)
        }, calc: function (a) {
            const u = a * a, l = u * a;
            return c + t * a + e * u + i * l
        }
    }
}

const _o = new F, wc = new Jc, Tc = new Jc, Ec = new Jc;

class VT extends hi {
    constructor(t = [], e = !1, i = "centripetal", s = .5) {
        super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = i, this.tension = s
    }

    getPoint(t, e = new F) {
        const i = e, s = this.points, a = s.length, u = (a - (this.closed ? 0 : 1)) * t;
        let l = Math.floor(u), f = u - l;
        this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / a) + 1) * a : f === 0 && l === a - 1 && (l = a - 2, f = 1);
        let h, d;
        this.closed || l > 0 ? h = s[(l - 1) % a] : (_o.subVectors(s[0], s[1]).add(s[0]), h = _o);
        const m = s[l % a], g = s[(l + 1) % a];
        if (this.closed || l + 2 < a ? d = s[(l + 2) % a] : (_o.subVectors(s[a - 1], s[a - 2]).add(s[a - 1]), d = _o), this.curveType === "centripetal" || this.curveType === "chordal") {
            const x = this.curveType === "chordal" ? .5 : .25;
            let M = Math.pow(h.distanceToSquared(m), x), v = Math.pow(m.distanceToSquared(g), x),
                _ = Math.pow(g.distanceToSquared(d), x);
            v < 1e-4 && (v = 1), M < 1e-4 && (M = v), _ < 1e-4 && (_ = v), wc.initNonuniformCatmullRom(h.x, m.x, g.x, d.x, M, v, _), Tc.initNonuniformCatmullRom(h.y, m.y, g.y, d.y, M, v, _), Ec.initNonuniformCatmullRom(h.z, m.z, g.z, d.z, M, v, _)
        } else this.curveType === "catmullrom" && (wc.initCatmullRom(h.x, m.x, g.x, d.x, this.tension), Tc.initCatmullRom(h.y, m.y, g.y, d.y, this.tension), Ec.initCatmullRom(h.z, m.z, g.z, d.z, this.tension));
        return i.set(wc.calc(f), Tc.calc(f), Ec.calc(f)), i
    }

    copy(t) {
        super.copy(t), this.points = [];
        for (let e = 0, i = t.points.length; e < i; e++) {
            const s = t.points[e];
            this.points.push(s.clone())
        }
        return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
    }

    toJSON() {
        const t = super.toJSON();
        t.points = [];
        for (let e = 0, i = this.points.length; e < i; e++) {
            const s = this.points[e];
            t.points.push(s.toArray())
        }
        return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
    }

    fromJSON(t) {
        super.fromJSON(t), this.points = [];
        for (let e = 0, i = t.points.length; e < i; e++) {
            const s = t.points[e];
            this.points.push(new F().fromArray(s))
        }
        return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
    }
}

function Zd(c, t, e, i, s) {
    const a = (i - t) * .5, u = (s - e) * .5, l = c * c, f = c * l;
    return (2 * e - 2 * i + a + u) * f + (-3 * e + 3 * i - 2 * a - u) * l + a * c + e
}

function kT(c, t) {
    const e = 1 - c;
    return e * e * t
}

function HT(c, t) {
    return 2 * (1 - c) * c * t
}

function qT(c, t) {
    return c * c * t
}

function $s(c, t, e, i) {
    return kT(c, t) + HT(c, e) + qT(c, i)
}

function XT(c, t) {
    const e = 1 - c;
    return e * e * e * t
}

function YT(c, t) {
    const e = 1 - c;
    return 3 * e * e * c * t
}

function ZT(c, t) {
    return 3 * (1 - c) * c * c * t
}

function $T(c, t) {
    return c * c * c * t
}

function Js(c, t, e, i, s) {
    return XT(c, t) + YT(c, e) + ZT(c, i) + $T(c, s)
}

class JT extends hi {
    constructor(t = new Lt, e = new Lt, i = new Lt, s = new Lt) {
        super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = s
    }

    getPoint(t, e = new Lt) {
        const i = e, s = this.v0, a = this.v1, u = this.v2, l = this.v3;
        return i.set(Js(t, s.x, a.x, u.x, l.x), Js(t, s.y, a.y, u.y, l.y)), i
    }

    copy(t) {
        return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
    }

    toJSON() {
        const t = super.toJSON();
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
    }

    fromJSON(t) {
        return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
    }
}

class jT extends hi {
    constructor(t = new F, e = new F, i = new F, s = new F) {
        super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = s
    }

    getPoint(t, e = new F) {
        const i = e, s = this.v0, a = this.v1, u = this.v2, l = this.v3;
        return i.set(Js(t, s.x, a.x, u.x, l.x), Js(t, s.y, a.y, u.y, l.y), Js(t, s.z, a.z, u.z, l.z)), i
    }

    copy(t) {
        return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
    }

    toJSON() {
        const t = super.toJSON();
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
    }

    fromJSON(t) {
        return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
    }
}

class KT extends hi {
    constructor(t = new Lt, e = new Lt) {
        super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t, this.v2 = e
    }

    getPoint(t, e = new Lt) {
        const i = e;
        return t === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i
    }

    getPointAt(t, e) {
        return this.getPoint(t, e)
    }

    getTangent(t, e) {
        const i = e || new Lt;
        return i.copy(this.v2).sub(this.v1).normalize(), i
    }

    copy(t) {
        return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }

    toJSON() {
        const t = super.toJSON();
        return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }

    fromJSON(t) {
        return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }
}

class QT extends hi {
    constructor(t = new F, e = new F) {
        super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t, this.v2 = e
    }

    getPoint(t, e = new F) {
        const i = e;
        return t === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i
    }

    getPointAt(t, e) {
        return this.getPoint(t, e)
    }

    copy(t) {
        return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }

    toJSON() {
        const t = super.toJSON();
        return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }

    fromJSON(t) {
        return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }
}

class tE extends hi {
    constructor(t = new Lt, e = new Lt, i = new Lt) {
        super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = i
    }

    getPoint(t, e = new Lt) {
        const i = e, s = this.v0, a = this.v1, u = this.v2;
        return i.set($s(t, s.x, a.x, u.x), $s(t, s.y, a.y, u.y)), i
    }

    copy(t) {
        return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }

    toJSON() {
        const t = super.toJSON();
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }

    fromJSON(t) {
        return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }
}

class Rp extends hi {
    constructor(t = new F, e = new F, i = new F) {
        super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = i
    }

    getPoint(t, e = new F) {
        const i = e, s = this.v0, a = this.v1, u = this.v2;
        return i.set($s(t, s.x, a.x, u.x), $s(t, s.y, a.y, u.y), $s(t, s.z, a.z, u.z)), i
    }

    copy(t) {
        return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
    }

    toJSON() {
        const t = super.toJSON();
        return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
    }

    fromJSON(t) {
        return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    }
}

class eE extends hi {
    constructor(t = []) {
        super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = t
    }

    getPoint(t, e = new Lt) {
        const i = e, s = this.points, a = (s.length - 1) * t, u = Math.floor(a), l = a - u, f = s[u === 0 ? u : u - 1],
            h = s[u], d = s[u > s.length - 2 ? s.length - 1 : u + 1], m = s[u > s.length - 3 ? s.length - 1 : u + 2];
        return i.set(Zd(l, f.x, h.x, d.x, m.x), Zd(l, f.y, h.y, d.y, m.y)), i
    }

    copy(t) {
        super.copy(t), this.points = [];
        for (let e = 0, i = t.points.length; e < i; e++) {
            const s = t.points[e];
            this.points.push(s.clone())
        }
        return this
    }

    toJSON() {
        const t = super.toJSON();
        t.points = [];
        for (let e = 0, i = this.points.length; e < i; e++) {
            const s = this.points[e];
            t.points.push(s.toArray())
        }
        return t
    }

    fromJSON(t) {
        super.fromJSON(t), this.points = [];
        for (let e = 0, i = t.points.length; e < i; e++) {
            const s = t.points[e];
            this.points.push(new Lt().fromArray(s))
        }
        return this
    }
}

var nE = Object.freeze({
    __proto__: null,
    ArcCurve: WT,
    CatmullRomCurve3: VT,
    CubicBezierCurve: JT,
    CubicBezierCurve3: jT,
    EllipseCurve: Pp,
    LineCurve: KT,
    LineCurve3: QT,
    QuadraticBezierCurve: tE,
    QuadraticBezierCurve3: Rp,
    SplineCurve: eE
});

class ys extends sn {
    constructor(t = [], e = [], i = 1, s = 0) {
        super(), this.type = "PolyhedronGeometry", this.parameters = {vertices: t, indices: e, radius: i, detail: s};
        const a = [], u = [];
        l(s), h(i), d(), this.setAttribute("position", new _e(a, 3)), this.setAttribute("normal", new _e(a.slice(), 3)), this.setAttribute("uv", new _e(u, 2)), s === 0 ? this.computeVertexNormals() : this.normalizeNormals();

        function l(L) {
            const T = new F, A = new F, E = new F;
            for (let D = 0; D < e.length; D += 3) x(e[D + 0], T), x(e[D + 1], A), x(e[D + 2], E), f(T, A, E, L)
        }

        function f(L, T, A, E) {
            const D = E + 1, B = [];
            for (let w = 0; w <= D; w++) {
                B[w] = [];
                const N = L.clone().lerp(A, w / D), k = T.clone().lerp(A, w / D), lt = D - w;
                for (let vt = 0; vt <= lt; vt++) vt === 0 && w === D ? B[w][vt] = N : B[w][vt] = N.clone().lerp(k, vt / lt)
            }
            for (let w = 0; w < D; w++) for (let N = 0; N < 2 * (D - w) - 1; N++) {
                const k = Math.floor(N / 2);
                N % 2 === 0 ? (g(B[w][k + 1]), g(B[w + 1][k]), g(B[w][k])) : (g(B[w][k + 1]), g(B[w + 1][k + 1]), g(B[w + 1][k]))
            }
        }

        function h(L) {
            const T = new F;
            for (let A = 0; A < a.length; A += 3) T.x = a[A + 0], T.y = a[A + 1], T.z = a[A + 2], T.normalize().multiplyScalar(L), a[A + 0] = T.x, a[A + 1] = T.y, a[A + 2] = T.z
        }

        function d() {
            const L = new F;
            for (let T = 0; T < a.length; T += 3) {
                L.x = a[T + 0], L.y = a[T + 1], L.z = a[T + 2];
                const A = _(L) / 2 / Math.PI + .5, E = S(L) / Math.PI + .5;
                u.push(A, 1 - E)
            }
            M(), m()
        }

        function m() {
            for (let L = 0; L < u.length; L += 6) {
                const T = u[L + 0], A = u[L + 2], E = u[L + 4], D = Math.max(T, A, E), B = Math.min(T, A, E);
                D > .9 && B < .1 && (T < .2 && (u[L + 0] += 1), A < .2 && (u[L + 2] += 1), E < .2 && (u[L + 4] += 1))
            }
        }

        function g(L) {
            a.push(L.x, L.y, L.z)
        }

        function x(L, T) {
            const A = L * 3;
            T.x = t[A + 0], T.y = t[A + 1], T.z = t[A + 2]
        }

        function M() {
            const L = new F, T = new F, A = new F, E = new F, D = new Lt, B = new Lt, w = new Lt;
            for (let N = 0, k = 0; N < a.length; N += 9, k += 6) {
                L.set(a[N + 0], a[N + 1], a[N + 2]), T.set(a[N + 3], a[N + 4], a[N + 5]), A.set(a[N + 6], a[N + 7], a[N + 8]), D.set(u[k + 0], u[k + 1]), B.set(u[k + 2], u[k + 3]), w.set(u[k + 4], u[k + 5]), E.copy(L).add(T).add(A).divideScalar(3);
                const lt = _(E);
                v(D, k + 0, L, lt), v(B, k + 2, T, lt), v(w, k + 4, A, lt)
            }
        }

        function v(L, T, A, E) {
            E < 0 && L.x === 1 && (u[T] = L.x - 1), A.x === 0 && A.z === 0 && (u[T] = E / 2 / Math.PI + .5)
        }

        function _(L) {
            return Math.atan2(L.z, -L.x)
        }

        function S(L) {
            return Math.atan2(-L.y, Math.sqrt(L.x * L.x + L.z * L.z))
        }
    }

    static fromJSON(t) {
        return new ys(t.vertices, t.indices, t.radius, t.details)
    }
}

class jc extends ys {
    constructor(t = 1, e = 0) {
        const i = (1 + Math.sqrt(5)) / 2, s = 1 / i,
            a = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -s, -i, 0, -s, i, 0, s, -i, 0, s, i, -s, -i, 0, -s, i, 0, s, -i, 0, s, i, 0, -i, 0, -s, i, 0, -s, -i, 0, s, i, 0, s],
            u = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
        super(a, u, t, e), this.type = "DodecahedronGeometry", this.parameters = {radius: t, detail: e}
    }

    static fromJSON(t) {
        return new jc(t.radius, t.detail)
    }
}

class Kc extends ys {
    constructor(t = 1, e = 0) {
        const i = (1 + Math.sqrt(5)) / 2,
            s = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1],
            a = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
        super(s, a, t, e), this.type = "IcosahedronGeometry", this.parameters = {radius: t, detail: e}
    }

    static fromJSON(t) {
        return new Kc(t.radius, t.detail)
    }
}

class Qc extends ys {
    constructor(t = 1, e = 0) {
        const i = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
            s = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
        super(i, s, t, e), this.type = "OctahedronGeometry", this.parameters = {radius: t, detail: e}
    }

    static fromJSON(t) {
        return new Qc(t.radius, t.detail)
    }
}

class bo extends sn {
    constructor(t = 1, e = 32, i = 16, s = 0, a = Math.PI * 2, u = 0, l = Math.PI) {
        super(), this.type = "SphereGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: i,
            phiStart: s,
            phiLength: a,
            thetaStart: u,
            thetaLength: l
        }, e = Math.max(3, Math.floor(e)), i = Math.max(2, Math.floor(i));
        const f = Math.min(u + l, Math.PI);
        let h = 0;
        const d = [], m = new F, g = new F, x = [], M = [], v = [], _ = [];
        for (let S = 0; S <= i; S++) {
            const L = [], T = S / i;
            let A = 0;
            S == 0 && u == 0 ? A = .5 / e : S == i && f == Math.PI && (A = -.5 / e);
            for (let E = 0; E <= e; E++) {
                const D = E / e;
                m.x = -t * Math.cos(s + D * a) * Math.sin(u + T * l), m.y = t * Math.cos(u + T * l), m.z = t * Math.sin(s + D * a) * Math.sin(u + T * l), M.push(m.x, m.y, m.z), g.copy(m).normalize(), v.push(g.x, g.y, g.z), _.push(D + A, 1 - T), L.push(h++)
            }
            d.push(L)
        }
        for (let S = 0; S < i; S++) for (let L = 0; L < e; L++) {
            const T = d[S][L + 1], A = d[S][L], E = d[S + 1][L], D = d[S + 1][L + 1];
            (S !== 0 || u > 0) && x.push(T, A, D), (S !== i - 1 || f < Math.PI) && x.push(A, E, D)
        }
        this.setIndex(x), this.setAttribute("position", new _e(M, 3)), this.setAttribute("normal", new _e(v, 3)), this.setAttribute("uv", new _e(_, 2))
    }

    static fromJSON(t) {
        return new bo(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength)
    }
}

class tu extends ys {
    constructor(t = 1, e = 0) {
        const i = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], s = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
        super(i, s, t, e), this.type = "TetrahedronGeometry", this.parameters = {radius: t, detail: e}
    }

    static fromJSON(t) {
        return new tu(t.radius, t.detail)
    }
}

class eu extends sn {
    constructor(t = 1, e = .4, i = 8, s = 6, a = Math.PI * 2) {
        super(), this.type = "TorusGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: i,
            tubularSegments: s,
            arc: a
        }, i = Math.floor(i), s = Math.floor(s);
        const u = [], l = [], f = [], h = [], d = new F, m = new F, g = new F;
        for (let x = 0; x <= i; x++) for (let M = 0; M <= s; M++) {
            const v = M / s * a, _ = x / i * Math.PI * 2;
            m.x = (t + e * Math.cos(_)) * Math.cos(v), m.y = (t + e * Math.cos(_)) * Math.sin(v), m.z = e * Math.sin(_), l.push(m.x, m.y, m.z), d.x = t * Math.cos(v), d.y = t * Math.sin(v), g.subVectors(m, d).normalize(), f.push(g.x, g.y, g.z), h.push(M / s), h.push(x / i)
        }
        for (let x = 1; x <= i; x++) for (let M = 1; M <= s; M++) {
            const v = (s + 1) * x + M - 1, _ = (s + 1) * (x - 1) + M - 1, S = (s + 1) * (x - 1) + M,
                L = (s + 1) * x + M;
            u.push(v, _, L), u.push(_, S, L)
        }
        this.setIndex(u), this.setAttribute("position", new _e(l, 3)), this.setAttribute("normal", new _e(f, 3)), this.setAttribute("uv", new _e(h, 2))
    }

    static fromJSON(t) {
        return new eu(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc)
    }
}

class nu extends sn {
    constructor(t = 1, e = .4, i = 64, s = 8, a = 2, u = 3) {
        super(), this.type = "TorusKnotGeometry", this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: i,
            radialSegments: s,
            p: a,
            q: u
        }, i = Math.floor(i), s = Math.floor(s);
        const l = [], f = [], h = [], d = [], m = new F, g = new F, x = new F, M = new F, v = new F, _ = new F,
            S = new F;
        for (let T = 0; T <= i; ++T) {
            const A = T / i * a * Math.PI * 2;
            L(A, a, u, t, x), L(A + .01, a, u, t, M), _.subVectors(M, x), S.addVectors(M, x), v.crossVectors(_, S), S.crossVectors(v, _), v.normalize(), S.normalize();
            for (let E = 0; E <= s; ++E) {
                const D = E / s * Math.PI * 2, B = -e * Math.cos(D), w = e * Math.sin(D);
                m.x = x.x + (B * S.x + w * v.x), m.y = x.y + (B * S.y + w * v.y), m.z = x.z + (B * S.z + w * v.z), f.push(m.x, m.y, m.z), g.subVectors(m, x).normalize(), h.push(g.x, g.y, g.z), d.push(T / i), d.push(E / s)
            }
        }
        for (let T = 1; T <= i; T++) for (let A = 1; A <= s; A++) {
            const E = (s + 1) * (T - 1) + (A - 1), D = (s + 1) * T + (A - 1), B = (s + 1) * T + A,
                w = (s + 1) * (T - 1) + A;
            l.push(E, D, w), l.push(D, B, w)
        }
        this.setIndex(l), this.setAttribute("position", new _e(f, 3)), this.setAttribute("normal", new _e(h, 3)), this.setAttribute("uv", new _e(d, 2));

        function L(T, A, E, D, B) {
            const w = Math.cos(T), N = Math.sin(T), k = E / A * T, lt = Math.cos(k);
            B.x = D * (2 + lt) * .5 * w, B.y = D * (2 + lt) * N * .5, B.z = D * Math.sin(k) * .5
        }
    }

    static fromJSON(t) {
        return new nu(t.radius, t.tube, t.tubularSegments, t.radialSegments, t.p, t.q)
    }
}

class iu extends sn {
    constructor(t = new Rp(new F(-1, -1, 0), new F(-1, 1, 0), new F(1, 1, 0)), e = 64, i = 1, s = 8, a = !1) {
        super(), this.type = "TubeGeometry", this.parameters = {
            path: t,
            tubularSegments: e,
            radius: i,
            radialSegments: s,
            closed: a
        };
        const u = t.computeFrenetFrames(e, a);
        this.tangents = u.tangents, this.normals = u.normals, this.binormals = u.binormals;
        const l = new F, f = new F, h = new Lt;
        let d = new F;
        const m = [], g = [], x = [], M = [];
        v(), this.setIndex(M), this.setAttribute("position", new _e(m, 3)), this.setAttribute("normal", new _e(g, 3)), this.setAttribute("uv", new _e(x, 2));

        function v() {
            for (let T = 0; T < e; T++) _(T);
            _(a === !1 ? e : 0), L(), S()
        }

        function _(T) {
            d = t.getPointAt(T / e, d);
            const A = u.normals[T], E = u.binormals[T];
            for (let D = 0; D <= s; D++) {
                const B = D / s * Math.PI * 2, w = Math.sin(B), N = -Math.cos(B);
                f.x = N * A.x + w * E.x, f.y = N * A.y + w * E.y, f.z = N * A.z + w * E.z, f.normalize(), g.push(f.x, f.y, f.z), l.x = d.x + i * f.x, l.y = d.y + i * f.y, l.z = d.z + i * f.z, m.push(l.x, l.y, l.z)
            }
        }

        function S() {
            for (let T = 1; T <= e; T++) for (let A = 1; A <= s; A++) {
                const E = (s + 1) * (T - 1) + (A - 1), D = (s + 1) * T + (A - 1), B = (s + 1) * T + A,
                    w = (s + 1) * (T - 1) + A;
                M.push(E, D, w), M.push(D, B, w)
            }
        }

        function L() {
            for (let T = 0; T <= e; T++) for (let A = 0; A <= s; A++) h.x = T / e, h.y = A / s, x.push(h.x, h.y)
        }
    }

    toJSON() {
        const t = super.toJSON();
        return t.path = this.parameters.path.toJSON(), t
    }

    static fromJSON(t) {
        return new iu(new nE[t.path.type]().fromJSON(t.path), t.tubularSegments, t.radius, t.radialSegments, t.closed)
    }
}

class ru extends Oi {
    constructor(t) {
        super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new ie(16777215), this.specular = new ie(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ie(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = dp, this.normalScale = new Lt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = kc, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t)
    }

    copy(t) {
        return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this
    }
}

const wo = {
    enabled: !1, files: {}, add: function (c, t) {
        this.enabled !== !1 && (this.files[c] = t)
    }, get: function (c) {
        if (this.enabled !== !1) return this.files[c]
    }, remove: function (c) {
        delete this.files[c]
    }, clear: function () {
        this.files = {}
    }
};

class iE {
    constructor(t, e, i) {
        const s = this;
        let a = !1, u = 0, l = 0, f;
        const h = [];
        this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function (d) {
            l++, a === !1 && s.onStart !== void 0 && s.onStart(d, u, l), a = !0
        }, this.itemEnd = function (d) {
            u++, s.onProgress !== void 0 && s.onProgress(d, u, l), u === l && (a = !1, s.onLoad !== void 0 && s.onLoad())
        }, this.itemError = function (d) {
            s.onError !== void 0 && s.onError(d)
        }, this.resolveURL = function (d) {
            return f ? f(d) : d
        }, this.setURLModifier = function (d) {
            return f = d, this
        }, this.addHandler = function (d, m) {
            return h.push(d, m), this
        }, this.removeHandler = function (d) {
            const m = h.indexOf(d);
            return m !== -1 && h.splice(m, 2), this
        }, this.getHandler = function (d) {
            for (let m = 0, g = h.length; m < g; m += 2) {
                const x = h[m], M = h[m + 1];
                if (x.global && (x.lastIndex = 0), x.test(d)) return M
            }
            return null
        }
    }
}

const Dp = new iE;

class sa {
    constructor(t) {
        this.manager = t !== void 0 ? t : Dp, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
    }

    load() {
    }

    loadAsync(t, e) {
        const i = this;
        return new Promise(function (s, a) {
            i.load(t, s, e, a)
        })
    }

    parse() {
    }

    setCrossOrigin(t) {
        return this.crossOrigin = t, this
    }

    setWithCredentials(t) {
        return this.withCredentials = t, this
    }

    setPath(t) {
        return this.path = t, this
    }

    setResourcePath(t) {
        return this.resourcePath = t, this
    }

    setRequestHeader(t) {
        return this.requestHeader = t, this
    }
}

const Ci = {};

class rE extends Error {
    constructor(t, e) {
        super(t), this.response = e
    }
}

class Ip extends sa {
    constructor(t) {
        super(t)
    }

    load(t, e, i, s) {
        t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
        const a = wo.get(t);
        if (a !== void 0) return this.manager.itemStart(t), setTimeout(() => {
            e && e(a), this.manager.itemEnd(t)
        }, 0), a;
        if (Ci[t] !== void 0) {
            Ci[t].push({onLoad: e, onProgress: i, onError: s});
            return
        }
        Ci[t] = [], Ci[t].push({onLoad: e, onProgress: i, onError: s});
        const u = new Request(t, {
            headers: new Headers(this.requestHeader),
            credentials: this.withCredentials ? "include" : "same-origin"
        }), l = this.mimeType, f = this.responseType;
        fetch(u).then(h => {
            if (h.status === 200 || h.status === 0) {
                if (h.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || h.body === void 0 || h.body.getReader === void 0) return h;
                const d = Ci[t], m = h.body.getReader(), g = h.headers.get("Content-Length"), x = g ? parseInt(g) : 0,
                    M = x !== 0;
                let v = 0;
                const _ = new ReadableStream({
                    start(S) {
                        L();

                        function L() {
                            m.read().then(({done: T, value: A}) => {
                                if (T) S.close(); else {
                                    v += A.byteLength;
                                    const E = new ProgressEvent("progress", {lengthComputable: M, loaded: v, total: x});
                                    for (let D = 0, B = d.length; D < B; D++) {
                                        const w = d[D];
                                        w.onProgress && w.onProgress(E)
                                    }
                                    S.enqueue(A), L()
                                }
                            })
                        }
                    }
                });
                return new Response(_)
            } else throw new rE(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`, h)
        }).then(h => {
            switch (f) {
                case"arraybuffer":
                    return h.arrayBuffer();
                case"blob":
                    return h.blob();
                case"document":
                    return h.text().then(d => new DOMParser().parseFromString(d, l));
                case"json":
                    return h.json();
                default:
                    if (l === void 0) return h.text();
                {
                    const m = /charset="?([^;"\s]*)"?/i.exec(l), g = m && m[1] ? m[1].toLowerCase() : void 0,
                        x = new TextDecoder(g);
                    return h.arrayBuffer().then(M => x.decode(M))
                }
            }
        }).then(h => {
            wo.add(t, h);
            const d = Ci[t];
            delete Ci[t];
            for (let m = 0, g = d.length; m < g; m++) {
                const x = d[m];
                x.onLoad && x.onLoad(h)
            }
        }).catch(h => {
            const d = Ci[t];
            if (d === void 0) throw this.manager.itemError(t), h;
            delete Ci[t];
            for (let m = 0, g = d.length; m < g; m++) {
                const x = d[m];
                x.onError && x.onError(h)
            }
            this.manager.itemError(t)
        }).finally(() => {
            this.manager.itemEnd(t)
        }), this.manager.itemStart(t)
    }

    setResponseType(t) {
        return this.responseType = t, this
    }

    setMimeType(t) {
        return this.mimeType = t, this
    }
}

class sE extends sa {
    constructor(t) {
        super(t)
    }

    load(t, e, i, s) {
        this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
        const a = this, u = wo.get(t);
        if (u !== void 0) return a.manager.itemStart(t), setTimeout(function () {
            e && e(u), a.manager.itemEnd(t)
        }, 0), u;
        const l = Qs("img");

        function f() {
            d(), wo.add(t, this), e && e(this), a.manager.itemEnd(t)
        }

        function h(m) {
            d(), s && s(m), a.manager.itemError(t), a.manager.itemEnd(t)
        }

        function d() {
            l.removeEventListener("load", f, !1), l.removeEventListener("error", h, !1)
        }

        return l.addEventListener("load", f, !1), l.addEventListener("error", h, !1), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (l.crossOrigin = this.crossOrigin), a.manager.itemStart(t), l.src = t, l
    }
}

class su extends sa {
    constructor(t) {
        super(t)
    }

    load(t, e, i, s) {
        const a = new qn, u = new sE(this.manager);
        return u.setCrossOrigin(this.crossOrigin), u.setPath(this.path), u.load(t, function (l) {
            a.image = l, a.needsUpdate = !0, e !== void 0 && e(a)
        }, i, s), a
    }
}

class Lo extends Ge {
    constructor(t, e = 1) {
        super(), this.isLight = !0, this.type = "Light", this.color = new ie(t), this.intensity = e
    }

    dispose() {
    }

    copy(t, e) {
        return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this
    }

    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), e
    }
}

class Op extends Lo {
    constructor(t, e, i) {
        super(t, i), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(Ge.DefaultUp), this.updateMatrix(), this.groundColor = new ie(e)
    }

    copy(t, e) {
        return super.copy(t, e), this.groundColor.copy(t.groundColor), this
    }
}

const Ac = new Re, $d = new F, Jd = new F;

class Fp {
    constructor(t) {
        this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Lt(512, 512), this.map = null, this.mapPass = null, this.matrix = new Re, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Xc, this._frameExtents = new Lt(1, 1), this._viewportCount = 1, this._viewports = [new Ae(0, 0, 1, 1)]
    }

    getViewportCount() {
        return this._viewportCount
    }

    getFrustum() {
        return this._frustum
    }

    updateMatrices(t) {
        const e = this.camera, i = this.matrix;
        $d.setFromMatrixPosition(t.matrixWorld), e.position.copy($d), Jd.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(Jd), e.updateMatrixWorld(), Ac.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ac), i.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), i.multiply(Ac)
    }

    getViewport(t) {
        return this._viewports[t]
    }

    getFrameExtents() {
        return this._frameExtents
    }

    dispose() {
        this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose()
    }

    copy(t) {
        return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
    }

    clone() {
        return new this.constructor().copy(this)
    }

    toJSON() {
        const t = {};
        return this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
    }
}

const jd = new Re, ks = new F, Cc = new F;

class aE extends Fp {
    constructor() {
        super(new Cn(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Lt(4, 2), this._viewportCount = 6, this._viewports = [new Ae(2, 1, 1, 1), new Ae(0, 1, 1, 1), new Ae(3, 1, 1, 1), new Ae(1, 1, 1, 1), new Ae(3, 0, 1, 1), new Ae(1, 0, 1, 1)], this._cubeDirections = [new F(1, 0, 0), new F(-1, 0, 0), new F(0, 0, 1), new F(0, 0, -1), new F(0, 1, 0), new F(0, -1, 0)], this._cubeUps = [new F(0, 1, 0), new F(0, 1, 0), new F(0, 1, 0), new F(0, 1, 0), new F(0, 0, 1), new F(0, 0, -1)]
    }

    updateMatrices(t, e = 0) {
        const i = this.camera, s = this.matrix, a = t.distance || i.far;
        a !== i.far && (i.far = a, i.updateProjectionMatrix()), ks.setFromMatrixPosition(t.matrixWorld), i.position.copy(ks), Cc.copy(i.position), Cc.add(this._cubeDirections[e]), i.up.copy(this._cubeUps[e]), i.lookAt(Cc), i.updateMatrixWorld(), s.makeTranslation(-ks.x, -ks.y, -ks.z), jd.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), this._frustum.setFromProjectionMatrix(jd)
    }
}

class oE extends Lo {
    constructor(t, e, i = 0, s = 1) {
        super(t, e), this.isPointLight = !0, this.type = "PointLight", this.distance = i, this.decay = s, this.shadow = new aE
    }

    get power() {
        return this.intensity * 4 * Math.PI
    }

    set power(t) {
        this.intensity = t / (4 * Math.PI)
    }

    dispose() {
        this.shadow.dispose()
    }

    copy(t, e) {
        return super.copy(t, e), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
    }
}

class lE extends Fp {
    constructor() {
        super(new wp(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0
    }
}

class cE extends Lo {
    constructor(t, e) {
        super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Ge.DefaultUp), this.updateMatrix(), this.target = new Ge, this.shadow = new lE
    }

    dispose() {
        this.shadow.dispose()
    }

    copy(t) {
        return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
    }
}

class Np extends Lo {
    constructor(t, e) {
        super(t, e), this.isAmbientLight = !0, this.type = "AmbientLight"
    }
}

class uE {
    static decodeText(t) {
        if (typeof TextDecoder < "u") return new TextDecoder().decode(t);
        let e = "";
        for (let i = 0, s = t.length; i < s; i++) e += String.fromCharCode(t[i]);
        try {
            return decodeURIComponent(escape(e))
        } catch {
            return e
        }
    }

    static extractUrlBase(t) {
        const e = t.lastIndexOf("/");
        return e === -1 ? "./" : t.slice(0, e + 1)
    }

    static resolveURL(t, e) {
        return typeof t != "string" || t === "" ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t)
    }
}

class hE {
    constructor(t, e, i = 0, s = 1 / 0) {
        this.ray = new Ao(t, e), this.near = i, this.far = s, this.camera = null, this.layers = new Hc, this.params = {
            Mesh: {},
            Line: {threshold: 1},
            LOD: {},
            Points: {threshold: 1},
            Sprite: {}
        }
    }

    set(t, e) {
        this.ray.set(t, e)
    }

    setFromCamera(t, e) {
        e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type)
    }

    intersectObject(t, e = !0, i = []) {
        return Gc(t, this, i, e), i.sort(Kd), i
    }

    intersectObjects(t, e = !0, i = []) {
        for (let s = 0, a = t.length; s < a; s++) Gc(t[s], this, i, e);
        return i.sort(Kd), i
    }
}

function Kd(c, t) {
    return c.distance - t.distance
}

function Gc(c, t, e, i) {
    if (c.layers.test(t.layers) && c.raycast(t, e), i === !0) {
        const s = c.children;
        for (let a = 0, u = s.length; a < u; a++) Gc(s[a], t, e, !0)
    }
}

class Qd {
    constructor(t = 1, e = 0, i = 0) {
        return this.radius = t, this.phi = e, this.theta = i, this
    }

    set(t, e, i) {
        return this.radius = t, this.phi = e, this.theta = i, this
    }

    copy(t) {
        return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
    }

    makeSafe() {
        return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
    }

    setFromVector3(t) {
        return this.setFromCartesianCoords(t.x, t.y, t.z)
    }

    setFromCartesianCoords(t, e, i) {
        return this.radius = Math.sqrt(t * t + e * e + i * i), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, i), this.phi = Math.acos(rn(e / this.radius, -1, 1))), this
    }

    clone() {
        return new this.constructor().copy(this)
    }
}

typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {detail: {revision: Vc}}));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Vc);
const fE = /^[og]\s*(.+)?/, dE = /^mtllib /, pE = /^usemtl /, mE = /^usemap /, tp = /\s+/, ep = new F, Lc = new F,
    np = new F, ip = new F, Bn = new F, vo = new ie;

function gE() {
    const c = {
        objects: [],
        object: {},
        vertices: [],
        normals: [],
        colors: [],
        uvs: [],
        materials: {},
        materialLibraries: [],
        startObject: function (t, e) {
            if (this.object && this.object.fromDeclaration === !1) {
                this.object.name = t, this.object.fromDeclaration = e !== !1;
                return
            }
            const i = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
            if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
                name: t || "",
                fromDeclaration: e !== !1,
                geometry: {vertices: [], normals: [], colors: [], uvs: [], hasUVIndices: !1},
                materials: [],
                smooth: !0,
                startMaterial: function (s, a) {
                    const u = this._finalize(!1);
                    u && (u.inherited || u.groupCount <= 0) && this.materials.splice(u.index, 1);
                    const l = {
                        index: this.materials.length,
                        name: s || "",
                        mtllib: Array.isArray(a) && a.length > 0 ? a[a.length - 1] : "",
                        smooth: u !== void 0 ? u.smooth : this.smooth,
                        groupStart: u !== void 0 ? u.groupEnd : 0,
                        groupEnd: -1,
                        groupCount: -1,
                        inherited: !1,
                        clone: function (f) {
                            const h = {
                                index: typeof f == "number" ? f : this.index,
                                name: this.name,
                                mtllib: this.mtllib,
                                smooth: this.smooth,
                                groupStart: 0,
                                groupEnd: -1,
                                groupCount: -1,
                                inherited: !1
                            };
                            return h.clone = this.clone.bind(h), h
                        }
                    };
                    return this.materials.push(l), l
                },
                currentMaterial: function () {
                    if (this.materials.length > 0) return this.materials[this.materials.length - 1]
                },
                _finalize: function (s) {
                    const a = this.currentMaterial();
                    if (a && a.groupEnd === -1 && (a.groupEnd = this.geometry.vertices.length / 3, a.groupCount = a.groupEnd - a.groupStart, a.inherited = !1), s && this.materials.length > 1) for (let u = this.materials.length - 1; u >= 0; u--) this.materials[u].groupCount <= 0 && this.materials.splice(u, 1);
                    return s && this.materials.length === 0 && this.materials.push({name: "", smooth: this.smooth}), a
                }
            }, i && i.name && typeof i.clone == "function") {
                const s = i.clone(0);
                s.inherited = !0, this.object.materials.push(s)
            }
            this.objects.push(this.object)
        },
        finalize: function () {
            this.object && typeof this.object._finalize == "function" && this.object._finalize(!0)
        },
        parseVertexIndex: function (t, e) {
            const i = parseInt(t, 10);
            return (i >= 0 ? i - 1 : i + e / 3) * 3
        },
        parseNormalIndex: function (t, e) {
            const i = parseInt(t, 10);
            return (i >= 0 ? i - 1 : i + e / 3) * 3
        },
        parseUVIndex: function (t, e) {
            const i = parseInt(t, 10);
            return (i >= 0 ? i - 1 : i + e / 2) * 2
        },
        addVertex: function (t, e, i) {
            const s = this.vertices, a = this.object.geometry.vertices;
            a.push(s[t + 0], s[t + 1], s[t + 2]), a.push(s[e + 0], s[e + 1], s[e + 2]), a.push(s[i + 0], s[i + 1], s[i + 2])
        },
        addVertexPoint: function (t) {
            const e = this.vertices;
            this.object.geometry.vertices.push(e[t + 0], e[t + 1], e[t + 2])
        },
        addVertexLine: function (t) {
            const e = this.vertices;
            this.object.geometry.vertices.push(e[t + 0], e[t + 1], e[t + 2])
        },
        addNormal: function (t, e, i) {
            const s = this.normals, a = this.object.geometry.normals;
            a.push(s[t + 0], s[t + 1], s[t + 2]), a.push(s[e + 0], s[e + 1], s[e + 2]), a.push(s[i + 0], s[i + 1], s[i + 2])
        },
        addFaceNormal: function (t, e, i) {
            const s = this.vertices, a = this.object.geometry.normals;
            ep.fromArray(s, t), Lc.fromArray(s, e), np.fromArray(s, i), Bn.subVectors(np, Lc), ip.subVectors(ep, Lc), Bn.cross(ip), Bn.normalize(), a.push(Bn.x, Bn.y, Bn.z), a.push(Bn.x, Bn.y, Bn.z), a.push(Bn.x, Bn.y, Bn.z)
        },
        addColor: function (t, e, i) {
            const s = this.colors, a = this.object.geometry.colors;
            s[t] !== void 0 && a.push(s[t + 0], s[t + 1], s[t + 2]), s[e] !== void 0 && a.push(s[e + 0], s[e + 1], s[e + 2]), s[i] !== void 0 && a.push(s[i + 0], s[i + 1], s[i + 2])
        },
        addUV: function (t, e, i) {
            const s = this.uvs, a = this.object.geometry.uvs;
            a.push(s[t + 0], s[t + 1]), a.push(s[e + 0], s[e + 1]), a.push(s[i + 0], s[i + 1])
        },
        addDefaultUV: function () {
            const t = this.object.geometry.uvs;
            t.push(0, 0), t.push(0, 0), t.push(0, 0)
        },
        addUVLine: function (t) {
            const e = this.uvs;
            this.object.geometry.uvs.push(e[t + 0], e[t + 1])
        },
        addFace: function (t, e, i, s, a, u, l, f, h) {
            const d = this.vertices.length;
            let m = this.parseVertexIndex(t, d), g = this.parseVertexIndex(e, d), x = this.parseVertexIndex(i, d);
            if (this.addVertex(m, g, x), this.addColor(m, g, x), l !== void 0 && l !== "") {
                const M = this.normals.length;
                m = this.parseNormalIndex(l, M), g = this.parseNormalIndex(f, M), x = this.parseNormalIndex(h, M), this.addNormal(m, g, x)
            } else this.addFaceNormal(m, g, x);
            if (s !== void 0 && s !== "") {
                const M = this.uvs.length;
                m = this.parseUVIndex(s, M), g = this.parseUVIndex(a, M), x = this.parseUVIndex(u, M), this.addUV(m, g, x), this.object.geometry.hasUVIndices = !0
            } else this.addDefaultUV()
        },
        addPointGeometry: function (t) {
            this.object.geometry.type = "Points";
            const e = this.vertices.length;
            for (let i = 0, s = t.length; i < s; i++) {
                const a = this.parseVertexIndex(t[i], e);
                this.addVertexPoint(a), this.addColor(a)
            }
        },
        addLineGeometry: function (t, e) {
            this.object.geometry.type = "Line";
            const i = this.vertices.length, s = this.uvs.length;
            for (let a = 0, u = t.length; a < u; a++) this.addVertexLine(this.parseVertexIndex(t[a], i));
            for (let a = 0, u = e.length; a < u; a++) this.addUVLine(this.parseUVIndex(e[a], s))
        }
    };
    return c.startObject("", !1), c
}

class _E extends sa {
    constructor(t) {
        super(t), this.materials = null
    }

    load(t, e, i, s) {
        const a = this, u = new Ip(this.manager);
        u.setPath(this.path), u.setRequestHeader(this.requestHeader), u.setWithCredentials(this.withCredentials), u.load(t, function (l) {
            try {
                e(a.parse(l))
            } catch (f) {
                s ? s(f) : console.error(f), a.manager.itemError(t)
            }
        }, i, s)
    }

    setMaterials(t) {
        return this.materials = t, this
    }

    parse(t) {
        const e = new gE;
        t.indexOf(`\r
`) !== -1 && (t = t.replace(/\r\n/g, `
`)), t.indexOf(`\\
`) !== -1 && (t = t.replace(/\\\n/g, ""));
        const i = t.split(`
`);
        let s = [];
        for (let l = 0, f = i.length; l < f; l++) {
            const h = i[l].trimStart();
            if (h.length === 0) continue;
            const d = h.charAt(0);
            if (d !== "#") if (d === "v") {
                const m = h.split(tp);
                switch (m[0]) {
                    case"v":
                        e.vertices.push(parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3])), m.length >= 7 ? (vo.setRGB(parseFloat(m[4]), parseFloat(m[5]), parseFloat(m[6])).convertSRGBToLinear(), e.colors.push(vo.r, vo.g, vo.b)) : e.colors.push(void 0, void 0, void 0);
                        break;
                    case"vn":
                        e.normals.push(parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3]));
                        break;
                    case"vt":
                        e.uvs.push(parseFloat(m[1]), parseFloat(m[2]));
                        break
                }
            } else if (d === "f") {
                const g = h.slice(1).trim().split(tp), x = [];
                for (let v = 0, _ = g.length; v < _; v++) {
                    const S = g[v];
                    if (S.length > 0) {
                        const L = S.split("/");
                        x.push(L)
                    }
                }
                const M = x[0];
                for (let v = 1, _ = x.length - 1; v < _; v++) {
                    const S = x[v], L = x[v + 1];
                    e.addFace(M[0], S[0], L[0], M[1], S[1], L[1], M[2], S[2], L[2])
                }
            } else if (d === "l") {
                const m = h.substring(1).trim().split(" ");
                let g = [];
                const x = [];
                if (h.indexOf("/") === -1) g = m; else for (let M = 0, v = m.length; M < v; M++) {
                    const _ = m[M].split("/");
                    _[0] !== "" && g.push(_[0]), _[1] !== "" && x.push(_[1])
                }
                e.addLineGeometry(g, x)
            } else if (d === "p") {
                const g = h.slice(1).trim().split(" ");
                e.addPointGeometry(g)
            } else if ((s = fE.exec(h)) !== null) {
                const m = (" " + s[0].slice(1).trim()).slice(1);
                e.startObject(m)
            } else if (pE.test(h)) e.object.startMaterial(h.substring(7).trim(), e.materialLibraries); else if (dE.test(h)) e.materialLibraries.push(h.substring(7).trim()); else if (mE.test(h)) console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.'); else if (d === "s") {
                if (s = h.split(" "), s.length > 1) {
                    const g = s[1].trim().toLowerCase();
                    e.object.smooth = g !== "0" && g !== "off"
                } else e.object.smooth = !0;
                const m = e.object.currentMaterial();
                m && (m.smooth = e.object.smooth)
            } else {
                if (h === "\0") continue;
                console.warn('THREE.OBJLoader: Unexpected line: "' + h + '"')
            }
        }
        e.finalize();
        const a = new Ys;
        if (a.materialLibraries = [].concat(e.materialLibraries), !(e.objects.length === 1 && e.objects[0].geometry.vertices.length === 0) === !0) for (let l = 0, f = e.objects.length; l < f; l++) {
            const h = e.objects[l], d = h.geometry, m = h.materials, g = d.type === "Line", x = d.type === "Points";
            let M = !1;
            if (d.vertices.length === 0) continue;
            const v = new sn;
            v.setAttribute("position", new _e(d.vertices, 3)), d.normals.length > 0 && v.setAttribute("normal", new _e(d.normals, 3)), d.colors.length > 0 && (M = !0, v.setAttribute("color", new _e(d.colors, 3))), d.hasUVIndices === !0 && v.setAttribute("uv", new _e(d.uvs, 2));
            const _ = [];
            for (let L = 0, T = m.length; L < T; L++) {
                const A = m[L], E = A.name + "_" + A.smooth + "_" + M;
                let D = e.materials[E];
                if (this.materials !== null) {
                    if (D = this.materials.create(A.name), g && D && !(D instanceof Mo)) {
                        const B = new Mo;
                        Oi.prototype.copy.call(B, D), B.color.copy(D.color), D = B
                    } else if (x && D && !(D instanceof Zs)) {
                        const B = new Zs({size: 10, sizeAttenuation: !1});
                        Oi.prototype.copy.call(B, D), B.color.copy(D.color), B.map = D.map, D = B
                    }
                }
                D === void 0 && (g ? D = new Mo : x ? D = new Zs({
                    size: 1,
                    sizeAttenuation: !1
                }) : D = new ru, D.name = A.name, D.flatShading = !A.smooth, D.vertexColors = M, e.materials[E] = D), _.push(D)
            }
            let S;
            if (_.length > 1) {
                for (let L = 0, T = m.length; L < T; L++) {
                    const A = m[L];
                    v.addGroup(A.groupStart, A.groupCount, L)
                }
                g ? S = new qd(v, _) : x ? S = new bc(v, _) : S = new Hn(v, _)
            } else g ? S = new qd(v, _[0]) : x ? S = new bc(v, _[0]) : S = new Hn(v, _[0]);
            S.name = h.name, a.add(S)
        } else if (e.vertices.length > 0) {
            const l = new Zs({size: 1, sizeAttenuation: !1}), f = new sn;
            f.setAttribute("position", new _e(e.vertices, 3)), e.colors.length > 0 && e.colors[0] !== void 0 && (f.setAttribute("color", new _e(e.colors, 3)), l.vertexColors = !0);
            const h = new bc(f, l);
            a.add(h)
        }
        return a
    }
}

class vE extends sa {
    constructor(t) {
        super(t)
    }

    load(t, e, i, s) {
        const a = this, u = this.path === "" ? uE.extractUrlBase(t) : this.path, l = new Ip(this.manager);
        l.setPath(this.path), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(t, function (f) {
            try {
                e(a.parse(f, u))
            } catch (h) {
                s ? s(h) : console.error(h), a.manager.itemError(t)
            }
        }, i, s)
    }

    setMaterialOptions(t) {
        return this.materialOptions = t, this
    }

    parse(t, e) {
        const i = t.split(`
`);
        let s = {};
        const a = /\s+/, u = {};
        for (let f = 0; f < i.length; f++) {
            let h = i[f];
            if (h = h.trim(), h.length === 0 || h.charAt(0) === "#") continue;
            const d = h.indexOf(" ");
            let m = d >= 0 ? h.substring(0, d) : h;
            m = m.toLowerCase();
            let g = d >= 0 ? h.substring(d + 1) : "";
            if (g = g.trim(), m === "newmtl") s = {name: g}, u[g] = s; else if (m === "ka" || m === "kd" || m === "ks" || m === "ke") {
                const x = g.split(a, 3);
                s[m] = [parseFloat(x[0]), parseFloat(x[1]), parseFloat(x[2])]
            } else s[m] = g
        }
        const l = new xE(this.resourcePath || e, this.materialOptions);
        return l.setCrossOrigin(this.crossOrigin), l.setManager(this.manager), l.setMaterials(u), l
    }
}

class xE {
    constructor(t = "", e = {}) {
        this.baseUrl = t, this.options = e, this.materialsInfo = {}, this.materials = {}, this.materialsArray = [], this.nameLookup = {}, this.crossOrigin = "anonymous", this.side = this.options.side !== void 0 ? this.options.side : Sr, this.wrap = this.options.wrap !== void 0 ? this.options.wrap : gs
    }

    setCrossOrigin(t) {
        return this.crossOrigin = t, this
    }

    setManager(t) {
        this.manager = t
    }

    setMaterials(t) {
        this.materialsInfo = this.convert(t), this.materials = {}, this.materialsArray = [], this.nameLookup = {}
    }

    convert(t) {
        if (!this.options) return t;
        const e = {};
        for (const i in t) {
            const s = t[i], a = {};
            e[i] = a;
            for (const u in s) {
                let l = !0, f = s[u];
                const h = u.toLowerCase();
                switch (h) {
                    case"kd":
                    case"ka":
                    case"ks":
                        this.options && this.options.normalizeRGB && (f = [f[0] / 255, f[1] / 255, f[2] / 255]), this.options && this.options.ignoreZeroRGBs && f[0] === 0 && f[1] === 0 && f[2] === 0 && (l = !1);
                        break
                }
                l && (a[h] = f)
            }
        }
        return e
    }

    preload() {
        for (const t in this.materialsInfo) this.create(t)
    }

    getIndex(t) {
        return this.nameLookup[t]
    }

    getAsArray() {
        let t = 0;
        for (const e in this.materialsInfo) this.materialsArray[t] = this.create(e), this.nameLookup[e] = t, t++;
        return this.materialsArray
    }

    create(t) {
        return this.materials[t] === void 0 && this.createMaterial_(t), this.materials[t]
    }

    createMaterial_(t) {
        const e = this, i = this.materialsInfo[t], s = {name: t, side: this.side};

        function a(l, f) {
            return typeof f != "string" || f === "" ? "" : /^https?:\/\//i.test(f) ? f : l + f
        }

        function u(l, f) {
            if (s[l]) return;
            const h = e.getTextureParams(f, s), d = e.loadTexture(a(e.baseUrl, h.url));
            d.repeat.copy(h.scale), d.offset.copy(h.offset), d.wrapS = e.wrap, d.wrapT = e.wrap, (l === "map" || l === "emissiveMap") && (d.encoding = Pe), s[l] = d
        }

        for (const l in i) {
            const f = i[l];
            let h;
            if (f !== "") switch (l.toLowerCase()) {
                case"kd":
                    s.color = new ie().fromArray(f).convertSRGBToLinear();
                    break;
                case"ks":
                    s.specular = new ie().fromArray(f).convertSRGBToLinear();
                    break;
                case"ke":
                    s.emissive = new ie().fromArray(f).convertSRGBToLinear();
                    break;
                case"map_kd":
                    u("map", f);
                    break;
                case"map_ks":
                    u("specularMap", f);
                    break;
                case"map_ke":
                    u("emissiveMap", f);
                    break;
                case"norm":
                    u("normalMap", f);
                    break;
                case"map_bump":
                case"bump":
                    u("bumpMap", f);
                    break;
                case"map_d":
                    u("alphaMap", f), s.transparent = !0;
                    break;
                case"ns":
                    s.shininess = parseFloat(f);
                    break;
                case"d":
                    h = parseFloat(f), h < 1 && (s.opacity = h, s.transparent = !0);
                    break;
                case"tr":
                    h = parseFloat(f), this.options && this.options.invertTrProperty && (h = 1 - h), h > 0 && (s.opacity = 1 - h, s.transparent = !0);
                    break
            }
        }
        return this.materials[t] = new ru(s), this.materials[t]
    }

    getTextureParams(t, e) {
        const i = {scale: new Lt(1, 1), offset: new Lt(0, 0)}, s = t.split(/\s+/);
        let a;
        return a = s.indexOf("-bm"), a >= 0 && (e.bumpScale = parseFloat(s[a + 1]), s.splice(a, 2)), a = s.indexOf("-s"), a >= 0 && (i.scale.set(parseFloat(s[a + 1]), parseFloat(s[a + 2])), s.splice(a, 4)), a = s.indexOf("-o"), a >= 0 && (i.offset.set(parseFloat(s[a + 1]), parseFloat(s[a + 2])), s.splice(a, 4)), i.url = s.join(" ").trim(), i
    }

    loadTexture(t, e, i, s, a) {
        const u = this.manager !== void 0 ? this.manager : Dp;
        let l = u.getHandler(t);
        l === null && (l = new su(u)), l.setCrossOrigin && l.setCrossOrigin(this.crossOrigin);
        const f = l.load(t, i, s, a);
        return e !== void 0 && (f.mapping = e), f
    }
}

const rp = {type: "change"}, Pc = {type: "start"}, sp = {type: "end"};

class yE extends Cr {
    constructor(t, e) {
        super(), this.object = t, this.domElement = e, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new F, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
        }, this.mouseButtons = {LEFT: Yr.ROTATE, MIDDLE: Yr.DOLLY, RIGHT: Yr.PAN}, this.touches = {
            ONE: Zr.ROTATE,
            TWO: Zr.DOLLY_PAN
        }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function () {
            return l.phi
        }, this.getAzimuthalAngle = function () {
            return l.theta
        }, this.getDistance = function () {
            return this.object.position.distanceTo(this.target)
        }, this.listenToKeyEvents = function (U) {
            U.addEventListener("keydown", we), this._domElementKeyEvents = U
        }, this.saveState = function () {
            i.target0.copy(i.target), i.position0.copy(i.object.position), i.zoom0 = i.object.zoom
        }, this.reset = function () {
            i.target.copy(i.target0), i.object.position.copy(i.position0), i.object.zoom = i.zoom0, i.object.updateProjectionMatrix(), i.dispatchEvent(rp), i.update(), a = s.NONE
        }, this.update = function () {
            const U = new F, H = new Er().setFromUnitVectors(t.up, new F(0, 1, 0)), bt = H.clone().invert(), wt = new F,
                St = new Er, Rt = 2 * Math.PI;
            return function () {
                const jt = i.object.position;
                U.copy(jt).sub(i.target), U.applyQuaternion(H), l.setFromVector3(U), i.autoRotate && a === s.NONE && N(B()), i.enableDamping ? (l.theta += f.theta * i.dampingFactor, l.phi += f.phi * i.dampingFactor) : (l.theta += f.theta, l.phi += f.phi);
                let te = i.minAzimuthAngle, me = i.maxAzimuthAngle;
                return isFinite(te) && isFinite(me) && (te < -Math.PI ? te += Rt : te > Math.PI && (te -= Rt), me < -Math.PI ? me += Rt : me > Math.PI && (me -= Rt), te <= me ? l.theta = Math.max(te, Math.min(me, l.theta)) : l.theta = l.theta > (te + me) / 2 ? Math.max(te, l.theta) : Math.min(me, l.theta)), l.phi = Math.max(i.minPolarAngle, Math.min(i.maxPolarAngle, l.phi)), l.makeSafe(), l.radius *= h, l.radius = Math.max(i.minDistance, Math.min(i.maxDistance, l.radius)), i.enableDamping === !0 ? i.target.addScaledVector(d, i.dampingFactor) : i.target.add(d), U.setFromSpherical(l), U.applyQuaternion(bt), jt.copy(i.target).add(U), i.object.lookAt(i.target), i.enableDamping === !0 ? (f.theta *= 1 - i.dampingFactor, f.phi *= 1 - i.dampingFactor, d.multiplyScalar(1 - i.dampingFactor)) : (f.set(0, 0, 0), d.set(0, 0, 0)), h = 1, m || wt.distanceToSquared(i.object.position) > u || 8 * (1 - St.dot(i.object.quaternion)) > u ? (i.dispatchEvent(rp), wt.copy(i.object.position), St.copy(i.object.quaternion), m = !1, !0) : !1
            }
        }(), this.dispose = function () {
            i.domElement.removeEventListener("contextmenu", K), i.domElement.removeEventListener("pointerdown", ce), i.domElement.removeEventListener("pointercancel", Ce), i.domElement.removeEventListener("wheel", Xe), i.domElement.removeEventListener("pointermove", be), i.domElement.removeEventListener("pointerup", Fe), i._domElementKeyEvents !== null && i._domElementKeyEvents.removeEventListener("keydown", we)
        };
        const i = this, s = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            TOUCH_ROTATE: 3,
            TOUCH_PAN: 4,
            TOUCH_DOLLY_PAN: 5,
            TOUCH_DOLLY_ROTATE: 6
        };
        let a = s.NONE;
        const u = 1e-6, l = new Qd, f = new Qd;
        let h = 1;
        const d = new F;
        let m = !1;
        const g = new Lt, x = new Lt, M = new Lt, v = new Lt, _ = new Lt, S = new Lt, L = new Lt, T = new Lt,
            A = new Lt, E = [], D = {};

        function B() {
            return 2 * Math.PI / 60 / 60 * i.autoRotateSpeed
        }

        function w() {
            return Math.pow(.95, i.zoomSpeed)
        }

        function N(U) {
            f.theta -= U
        }

        function k(U) {
            f.phi -= U
        }

        const lt = function () {
            const U = new F;
            return function (bt, wt) {
                U.setFromMatrixColumn(wt, 0), U.multiplyScalar(-bt), d.add(U)
            }
        }(), vt = function () {
            const U = new F;
            return function (bt, wt) {
                i.screenSpacePanning === !0 ? U.setFromMatrixColumn(wt, 1) : (U.setFromMatrixColumn(wt, 0), U.crossVectors(i.object.up, U)), U.multiplyScalar(bt), d.add(U)
            }
        }(), j = function () {
            const U = new F;
            return function (bt, wt) {
                const St = i.domElement;
                if (i.object.isPerspectiveCamera) {
                    const Rt = i.object.position;
                    U.copy(Rt).sub(i.target);
                    let Pt = U.length();
                    Pt *= Math.tan(i.object.fov / 2 * Math.PI / 180), lt(2 * bt * Pt / St.clientHeight, i.object.matrix), vt(2 * wt * Pt / St.clientHeight, i.object.matrix)
                } else i.object.isOrthographicCamera ? (lt(bt * (i.object.right - i.object.left) / i.object.zoom / St.clientWidth, i.object.matrix), vt(wt * (i.object.top - i.object.bottom) / i.object.zoom / St.clientHeight, i.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), i.enablePan = !1)
            }
        }();

        function X(U) {
            i.object.isPerspectiveCamera ? h /= U : i.object.isOrthographicCamera ? (i.object.zoom = Math.max(i.minZoom, Math.min(i.maxZoom, i.object.zoom * U)), i.object.updateProjectionMatrix(), m = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), i.enableZoom = !1)
        }

        function ot(U) {
            i.object.isPerspectiveCamera ? h *= U : i.object.isOrthographicCamera ? (i.object.zoom = Math.max(i.minZoom, Math.min(i.maxZoom, i.object.zoom / U)), i.object.updateProjectionMatrix(), m = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), i.enableZoom = !1)
        }

        function dt(U) {
            g.set(U.clientX, U.clientY)
        }

        function ut(U) {
            L.set(U.clientX, U.clientY)
        }

        function tt(U) {
            v.set(U.clientX, U.clientY)
        }

        function Y(U) {
            x.set(U.clientX, U.clientY), M.subVectors(x, g).multiplyScalar(i.rotateSpeed);
            const H = i.domElement;
            N(2 * Math.PI * M.x / H.clientHeight), k(2 * Math.PI * M.y / H.clientHeight), g.copy(x), i.update()
        }

        function J(U) {
            T.set(U.clientX, U.clientY), A.subVectors(T, L), A.y > 0 ? X(w()) : A.y < 0 && ot(w()), L.copy(T), i.update()
        }

        function ht(U) {
            _.set(U.clientX, U.clientY), S.subVectors(_, v).multiplyScalar(i.panSpeed), j(S.x, S.y), v.copy(_), i.update()
        }

        function gt(U) {
            U.deltaY < 0 ? ot(w()) : U.deltaY > 0 && X(w()), i.update()
        }

        function mt(U) {
            let H = !1;
            switch (U.code) {
                case i.keys.UP:
                    j(0, i.keyPanSpeed), H = !0;
                    break;
                case i.keys.BOTTOM:
                    j(0, -i.keyPanSpeed), H = !0;
                    break;
                case i.keys.LEFT:
                    j(i.keyPanSpeed, 0), H = !0;
                    break;
                case i.keys.RIGHT:
                    j(-i.keyPanSpeed, 0), H = !0;
                    break
            }
            H && (U.preventDefault(), i.update())
        }

        function Ct() {
            if (E.length === 1) g.set(E[0].pageX, E[0].pageY); else {
                const U = .5 * (E[0].pageX + E[1].pageX), H = .5 * (E[0].pageY + E[1].pageY);
                g.set(U, H)
            }
        }

        function Ut() {
            if (E.length === 1) v.set(E[0].pageX, E[0].pageY); else {
                const U = .5 * (E[0].pageX + E[1].pageX), H = .5 * (E[0].pageY + E[1].pageY);
                v.set(U, H)
            }
        }

        function rt() {
            const U = E[0].pageX - E[1].pageX, H = E[0].pageY - E[1].pageY, bt = Math.sqrt(U * U + H * H);
            L.set(0, bt)
        }

        function le() {
            i.enableZoom && rt(), i.enablePan && Ut()
        }

        function zt() {
            i.enableZoom && rt(), i.enableRotate && Ct()
        }

        function Bt(U) {
            if (E.length == 1) x.set(U.pageX, U.pageY); else {
                const bt = Ot(U), wt = .5 * (U.pageX + bt.x), St = .5 * (U.pageY + bt.y);
                x.set(wt, St)
            }
            M.subVectors(x, g).multiplyScalar(i.rotateSpeed);
            const H = i.domElement;
            N(2 * Math.PI * M.x / H.clientHeight), k(2 * Math.PI * M.y / H.clientHeight), g.copy(x)
        }

        function At(U) {
            if (E.length === 1) _.set(U.pageX, U.pageY); else {
                const H = Ot(U), bt = .5 * (U.pageX + H.x), wt = .5 * (U.pageY + H.y);
                _.set(bt, wt)
            }
            S.subVectors(_, v).multiplyScalar(i.panSpeed), j(S.x, S.y), v.copy(_)
        }

        function oe(U) {
            const H = Ot(U), bt = U.pageX - H.x, wt = U.pageY - H.y, St = Math.sqrt(bt * bt + wt * wt);
            T.set(0, St), A.set(0, Math.pow(T.y / L.y, i.zoomSpeed)), X(A.y), L.copy(T)
        }

        function Ht(U) {
            i.enableZoom && oe(U), i.enablePan && At(U)
        }

        function Ft(U) {
            i.enableZoom && oe(U), i.enableRotate && Bt(U)
        }

        function ce(U) {
            i.enabled !== !1 && (E.length === 0 && (i.domElement.setPointerCapture(U.pointerId), i.domElement.addEventListener("pointermove", be), i.domElement.addEventListener("pointerup", Fe)), ft(U), U.pointerType === "touch" ? I(U) : De(U))
        }

        function be(U) {
            i.enabled !== !1 && (U.pointerType === "touch" ? P(U) : de(U))
        }

        function Fe(U) {
            _t(U), E.length === 0 && (i.domElement.releasePointerCapture(U.pointerId), i.domElement.removeEventListener("pointermove", be), i.domElement.removeEventListener("pointerup", Fe)), i.dispatchEvent(sp), a = s.NONE
        }

        function Ce(U) {
            _t(U)
        }

        function De(U) {
            let H;
            switch (U.button) {
                case 0:
                    H = i.mouseButtons.LEFT;
                    break;
                case 1:
                    H = i.mouseButtons.MIDDLE;
                    break;
                case 2:
                    H = i.mouseButtons.RIGHT;
                    break;
                default:
                    H = -1
            }
            switch (H) {
                case Yr.DOLLY:
                    if (i.enableZoom === !1) return;
                    ut(U), a = s.DOLLY;
                    break;
                case Yr.ROTATE:
                    if (U.ctrlKey || U.metaKey || U.shiftKey) {
                        if (i.enablePan === !1) return;
                        tt(U), a = s.PAN
                    } else {
                        if (i.enableRotate === !1) return;
                        dt(U), a = s.ROTATE
                    }
                    break;
                case Yr.PAN:
                    if (U.ctrlKey || U.metaKey || U.shiftKey) {
                        if (i.enableRotate === !1) return;
                        dt(U), a = s.ROTATE
                    } else {
                        if (i.enablePan === !1) return;
                        tt(U), a = s.PAN
                    }
                    break;
                default:
                    a = s.NONE
            }
            a !== s.NONE && i.dispatchEvent(Pc)
        }

        function de(U) {
            switch (a) {
                case s.ROTATE:
                    if (i.enableRotate === !1) return;
                    Y(U);
                    break;
                case s.DOLLY:
                    if (i.enableZoom === !1) return;
                    J(U);
                    break;
                case s.PAN:
                    if (i.enablePan === !1) return;
                    ht(U);
                    break
            }
        }

        function Xe(U) {
            i.enabled === !1 || i.enableZoom === !1 || a !== s.NONE || (U.preventDefault(), i.dispatchEvent(Pc), gt(U), i.dispatchEvent(sp))
        }

        function we(U) {
            i.enabled === !1 || i.enablePan === !1 || mt(U)
        }

        function I(U) {
            switch (yt(U), E.length) {
                case 1:
                    switch (i.touches.ONE) {
                        case Zr.ROTATE:
                            if (i.enableRotate === !1) return;
                            Ct(), a = s.TOUCH_ROTATE;
                            break;
                        case Zr.PAN:
                            if (i.enablePan === !1) return;
                            Ut(), a = s.TOUCH_PAN;
                            break;
                        default:
                            a = s.NONE
                    }
                    break;
                case 2:
                    switch (i.touches.TWO) {
                        case Zr.DOLLY_PAN:
                            if (i.enableZoom === !1 && i.enablePan === !1) return;
                            le(), a = s.TOUCH_DOLLY_PAN;
                            break;
                        case Zr.DOLLY_ROTATE:
                            if (i.enableZoom === !1 && i.enableRotate === !1) return;
                            zt(), a = s.TOUCH_DOLLY_ROTATE;
                            break;
                        default:
                            a = s.NONE
                    }
                    break;
                default:
                    a = s.NONE
            }
            a !== s.NONE && i.dispatchEvent(Pc)
        }

        function P(U) {
            switch (yt(U), a) {
                case s.TOUCH_ROTATE:
                    if (i.enableRotate === !1) return;
                    Bt(U), i.update();
                    break;
                case s.TOUCH_PAN:
                    if (i.enablePan === !1) return;
                    At(U), i.update();
                    break;
                case s.TOUCH_DOLLY_PAN:
                    if (i.enableZoom === !1 && i.enablePan === !1) return;
                    Ht(U), i.update();
                    break;
                case s.TOUCH_DOLLY_ROTATE:
                    if (i.enableZoom === !1 && i.enableRotate === !1) return;
                    Ft(U), i.update();
                    break;
                default:
                    a = s.NONE
            }
        }

        function K(U) {
            i.enabled !== !1 && U.preventDefault()
        }

        function ft(U) {
            E.push(U)
        }

        function _t(U) {
            delete D[U.pointerId];
            for (let H = 0; H < E.length; H++) if (E[H].pointerId == U.pointerId) {
                E.splice(H, 1);
                return
            }
        }

        function yt(U) {
            let H = D[U.pointerId];
            H === void 0 && (H = new Lt, D[U.pointerId] = H), H.set(U.pageX, U.pageY)
        }

        function Ot(U) {
            const H = U.pointerId === E[0].pointerId ? E[1] : E[0];
            return D[H.pointerId]
        }

        i.domElement.addEventListener("contextmenu", K), i.domElement.addEventListener("pointerdown", ce), i.domElement.addEventListener("pointercancel", Ce), i.domElement.addEventListener("wheel", Xe, {passive: !1}), this.update()
    }
}

const ME = "/assets/clouds1_ft.1cacd199.bmp", SE = "/assets/clouds1_bk.77c9d3ac.bmp",
    bE = "/assets/clouds1_up.03e1bd9a.bmp", wE = "/assets/clouds1_dn.11c5276a.bmp",
    TE = "/assets/clouds1_rt.0f78f218.bmp", EE = "/assets/clouds1_lf.ec52d113.bmp";

function AE() {
    return [ME, SE, bE, wE, TE, EE].map(e => {
        const i = new su().load(e);
        return new qc({map: i, side: Ln})
    })
}

const js = document.querySelector("#c");

class CE {
    constructor(t) {
        this.raycaster = new hE, this.pickedObject = null, this.pickedObjectSavedColor = 0, this.ignore = t
    }

    pick(t, e) {
        this.pickedObject && (this.pickedObject.material.emissive = this.pickedObjectSavedColor, this.pickedObject = void 0), this.raycaster.setFromCamera(ta, e);
        const i = this.raycaster.intersectObjects(t.children);
        if (i.length > 1) {
            const s = i[0].object.material;
            this.pickedObjectSavedColor = s.emissive, this.pickedObject = i[0].object, s.emissive = new ie(11185658)
        }
    }
}

const ta = {x: 0, y: 0};
So();

function LE(c) {
    const t = js.getBoundingClientRect();
    return {x: (c.clientX - t.left) * js.width / t.width, y: (c.clientY - t.top) * js.height / t.height}
}

function Rc(c) {
    const t = LE(c);
    ta.x = t.x / js.width * 2 - 1, ta.y = t.y / js.height * -2 + 1
}

function So() {
    ta.x = -1e5, ta.y = -1e5
}

function PE() {
    window.addEventListener("mousemove", Rc), window.addEventListener("mouseout", So), window.addEventListener("mouseleave", So), window.addEventListener("touchstart", c => {
        c.preventDefault(), Rc(c.touches[0])
    }, {passive: !1}), window.addEventListener("touchmove", c => {
        Rc(c.touches[0])
    }), window.addEventListener("touchend", So)
}

const Up = document.querySelector("#c"), ds = new Lp({canvas: Up}), Gn = new BT, Di = new Cn(75, 1, .1, 1e3),
    zp = new Ge;
ds.shadowMap.enabled = !0;
ds.shadowMap.type = lp;
Gn.background = new ie("white");
Gn.add(zp);
Di.translateZ(6);
zp.add(Di);
new yE(Di, Up);
requestAnimationFrame(Wp);
const RE = AE(), DE = new Lr(1e3, 1e3, 1e3), Bp = new Hn(DE, RE), IE = new $c(0, .01, 1200);
PE();
const OE = new CE(Bp), Po = new su().load("texture.jpg");
Po.wrapS = gs;
Po.wrapT = gs;
Po.repeat.set(4, 4);
let Gp = [], _n = null, dr = null;

function Ro(c) {
    function t(s, a, u, l, f) {
        const h = new ru({color: a, flatShading: !0, side: Ri});
        c.showTexture && (h.map = Po);
        const d = new Hn(s, h);
        return d.receiveShadow = !0, d.castShadow = !0, Gn.add(d), d.position.x = u, d.position.y = l, d.scale.set(f, f, f), d
    }

    Gn.clear(), c.showSky && Gn.add(Bp), Gn.fog = c.showFog ? IE : void 0;
    const {shapeType: e, lightType: i} = c;
    _n = au[e], e == "Texture" ? _n && Gn.add(_n) : Gp = [t(_n, 4500104, 0, 2, 1), t(_n, 11176004, 2, 2, 1), t(_n, 8930474, -2, 2, 1), t(_n, 4500104, 0, 0, 1.2), t(_n, 11176004, 2, 0, 1.2), t(_n, 8930474, -2, 0, 1.2), t(_n, 4500104, 0, -2.2, 1.4), t(_n, 11176004, 2, -2.2, 1.4), t(_n, 8930474, -2, -2.2, 1.4)], dr = Vp[i], dr.position.set(0, 5, 1), dr instanceof Op || dr instanceof Np || (dr.castShadow = c.showShadow), Di.add(dr), Gn.add(dr), ds.render(Gn, Di)
}

function FE(c) {
    const t = c.domElement, e = window.devicePixelRatio, i = t.clientWidth * e | 0, s = t.clientHeight * e | 0,
        a = t.clientWidth !== i || t.height !== s;
    return a && c.setSize(i, s, !1), a
}

function Wp(c) {
    if (FE(ds)) {
        const e = ds.domElement;
        Di.aspect = e.clientWidth / e.clientHeight, Di.updateProjectionMatrix()
    }
    Gp.forEach(e => {
        e.rotateX(.02), e.rotateZ(.02)
    }), OE.pick(Gn, Di, c), ds.render(Gn, Di), requestAnimationFrame(Wp)
}

class NE extends hi {
    constructor(t) {
        super(), this.scale = t
    }

    getPoint(t) {
        const e = t * 3 - 1.5, i = Math.sin(4 * Math.PI * t), s = 0;
        return new F(e, i, s).multiplyScalar(this.scale)
    }
}

const au = {
    Texture: null,
    Cube: new Lr(1, 1, 1),
    Sphere: new bo(1, 128, 128),
    HemiSphere: new bo(1, 128, 128, 0, Math.PI),
    Dodecahedron: new jc(.8),
    Icosahedron: new Kc(.8),
    Octahedron: new Qc(.8),
    Tetrahedron: new tu(.8),
    Torus: new eu(.8, .2, 128, 128),
    TorusKnot: new nu(.5, .15, 128, 128),
    Tube: new iu(new NE(.8), 128, .1, 128, !1)
};
new vE().load("Anime_charcter.mtl", function (c) {
    c.preload(), Object.entries(c.materials).forEach(([e, i], s) => {
        const a = i.color;
        i.color = a.multiplyScalar(2.4), console.log(Object.getOwnPropertyNames(i.color))
    });
    var t = new _E;
    t.setMaterials(c), t.load("Anime_charcter.obj", function (e) {
        e.scale.set(.8, .8, .8), e.position.set(0, -2, 0), au.Texture = e, _n == null && (Gn.add(e), _n = e)
    })
});
const Vp = {
    Directional: new cE(16777215, 1),
    Point: new oE(16777215, 1),
    Hemisphere: new Op(16777147, 526368, 1),
    Ambient: new Np(11184810)
};
var Hs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    Wc = {exports: {}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function (c, t) {
    (function () {
        var e, i = "4.17.21", s = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
            u = "Expected a function", l = "Invalid `variable` option passed into `_.template`",
            f = "__lodash_hash_undefined__", h = 500, d = "__lodash_placeholder__", m = 1, g = 2, x = 4, M = 1, v = 2,
            _ = 1, S = 2, L = 4, T = 8, A = 16, E = 32, D = 64, B = 128, w = 256, N = 512, k = 30, lt = "...", vt = 800,
            j = 16, X = 1, ot = 2, dt = 3, ut = 1 / 0, tt = 9007199254740991, Y = 17976931348623157e292, J = 0 / 0,
            ht = 4294967295, gt = ht - 1, mt = ht >>> 1,
            Ct = [["ary", B], ["bind", _], ["bindKey", S], ["curry", T], ["curryRight", A], ["flip", N], ["partial", E], ["partialRight", D], ["rearg", w]],
            Ut = "[object Arguments]", rt = "[object Array]", le = "[object AsyncFunction]", zt = "[object Boolean]",
            Bt = "[object Date]", At = "[object DOMException]", oe = "[object Error]", Ht = "[object Function]",
            Ft = "[object GeneratorFunction]", ce = "[object Map]", be = "[object Number]", Fe = "[object Null]",
            Ce = "[object Object]", De = "[object Promise]", de = "[object Proxy]", Xe = "[object RegExp]",
            we = "[object Set]", I = "[object String]", P = "[object Symbol]", K = "[object Undefined]",
            ft = "[object WeakMap]", _t = "[object WeakSet]", yt = "[object ArrayBuffer]", Ot = "[object DataView]",
            U = "[object Float32Array]", H = "[object Float64Array]", bt = "[object Int8Array]",
            wt = "[object Int16Array]", St = "[object Int32Array]", Rt = "[object Uint8Array]",
            Pt = "[object Uint8ClampedArray]", jt = "[object Uint16Array]", te = "[object Uint32Array]",
            me = /\b__p \+= '';/g, G = /\b(__p \+=) '' \+/g, nt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            pt = /&(?:amp|lt|gt|quot|#39);/g, Tt = /[&<>"']/g, It = RegExp(pt.source), ue = RegExp(Tt.source),
            ze = /<%-([\s\S]+?)%>/g, Ye = /<%([\s\S]+?)%>/g, si = /<%=([\s\S]+?)%>/g,
            ye = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Xn = /^\w*$/,
            fn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            Pr = /[\\^$.*+?()[\]{}|]/g, Io = RegExp(Pr.source), Ms = /^\s+/, Oo = /\s/,
            R = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Z = /\{\n\/\* \[wrapped with (.+)\] \*/, et = /,? & /,
            q = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, it = /[()=,{}\[\]\/\s]/, Nt = /\\(\\)?/g,
            kt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Yt = /\w*$/, Zt = /^[-+]0x[0-9a-f]+$/i, he = /^0b[01]+$/i,
            ee = /^\[object .+?Constructor\]$/, se = /^0o[0-7]+$/i, Te = /^(?:0|[1-9]\d*)$/,
            fi = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Yn = /($^)/, Fi = /['\n\r\u2028\u2029\\]/g,
            an = "\\ud800-\\udfff", fe = "\\u0300-\\u036f", Ni = "\\ufe20-\\ufe2f", Ie = "\\u20d0-\\u20ff",
            on = fe + Ni + Ie, Zn = "\\u2700-\\u27bf", Ui = "a-z\\xdf-\\xf6\\xf8-\\xff", Ss = "\\xac\\xb1\\xd7\\xf7",
            Je = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", di = "\\u2000-\\u206f",
            bs = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            Qe = "A-Z\\xc0-\\xd6\\xd8-\\xde", Rr = "\\ufe0e\\ufe0f", aa = Ss + Je + di + bs, Dr = "['\u2019]",
            qp = "[" + an + "]", cu = "[" + aa + "]", oa = "[" + on + "]", uu = "\\d+", Xp = "[" + Zn + "]",
            hu = "[" + Ui + "]", fu = "[^" + an + aa + uu + Zn + Ui + Qe + "]", Fo = "\\ud83c[\\udffb-\\udfff]",
            Yp = "(?:" + oa + "|" + Fo + ")", du = "[^" + an + "]", No = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Uo = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ir = "[" + Qe + "]", pu = "\\u200d",
            mu = "(?:" + hu + "|" + fu + ")", Zp = "(?:" + Ir + "|" + fu + ")",
            gu = "(?:" + Dr + "(?:d|ll|m|re|s|t|ve))?", _u = "(?:" + Dr + "(?:D|LL|M|RE|S|T|VE))?", vu = Yp + "?",
            xu = "[" + Rr + "]?", $p = "(?:" + pu + "(?:" + [du, No, Uo].join("|") + ")" + xu + vu + ")*",
            Jp = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            jp = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", yu = xu + vu + $p,
            Kp = "(?:" + [Xp, No, Uo].join("|") + ")" + yu,
            Qp = "(?:" + [du + oa + "?", oa, No, Uo, qp].join("|") + ")", tm = RegExp(Dr, "g"), em = RegExp(oa, "g"),
            zo = RegExp(Fo + "(?=" + Fo + ")|" + Qp + yu, "g"),
            nm = RegExp([Ir + "?" + hu + "+" + gu + "(?=" + [cu, Ir, "$"].join("|") + ")", Zp + "+" + _u + "(?=" + [cu, Ir + mu, "$"].join("|") + ")", Ir + "?" + mu + "+" + gu, Ir + "+" + _u, jp, Jp, uu, Kp].join("|"), "g"),
            im = RegExp("[" + pu + an + on + Rr + "]"),
            rm = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            sm = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
            am = -1, Se = {};
        Se[U] = Se[H] = Se[bt] = Se[wt] = Se[St] = Se[Rt] = Se[Pt] = Se[jt] = Se[te] = !0, Se[Ut] = Se[rt] = Se[yt] = Se[zt] = Se[Ot] = Se[Bt] = Se[oe] = Se[Ht] = Se[ce] = Se[be] = Se[Ce] = Se[Xe] = Se[we] = Se[I] = Se[ft] = !1;
        var Me = {};
        Me[Ut] = Me[rt] = Me[yt] = Me[Ot] = Me[zt] = Me[Bt] = Me[U] = Me[H] = Me[bt] = Me[wt] = Me[St] = Me[ce] = Me[be] = Me[Ce] = Me[Xe] = Me[we] = Me[I] = Me[P] = Me[Rt] = Me[Pt] = Me[jt] = Me[te] = !0, Me[oe] = Me[Ht] = Me[ft] = !1;
        var om = {
                \u00C0: "A",
                \u00C1: "A",
                \u00C2: "A",
                \u00C3: "A",
                \u00C4: "A",
                \u00C5: "A",
                \u00E0: "a",
                \u00E1: "a",
                \u00E2: "a",
                \u00E3: "a",
                \u00E4: "a",
                \u00E5: "a",
                \u00C7: "C",
                \u00E7: "c",
                \u00D0: "D",
                \u00F0: "d",
                \u00C8: "E",
                \u00C9: "E",
                \u00CA: "E",
                \u00CB: "E",
                \u00E8: "e",
                \u00E9: "e",
                \u00EA: "e",
                \u00EB: "e",
                \u00CC: "I",
                \u00CD: "I",
                \u00CE: "I",
                \u00CF: "I",
                \u00EC: "i",
                \u00ED: "i",
                \u00EE: "i",
                \u00EF: "i",
                \u00D1: "N",
                \u00F1: "n",
                \u00D2: "O",
                \u00D3: "O",
                \u00D4: "O",
                \u00D5: "O",
                \u00D6: "O",
                \u00D8: "O",
                \u00F2: "o",
                \u00F3: "o",
                \u00F4: "o",
                \u00F5: "o",
                \u00F6: "o",
                \u00F8: "o",
                \u00D9: "U",
                \u00DA: "U",
                \u00DB: "U",
                \u00DC: "U",
                \u00F9: "u",
                \u00FA: "u",
                \u00FB: "u",
                \u00FC: "u",
                \u00DD: "Y",
                \u00FD: "y",
                \u00FF: "y",
                \u00C6: "Ae",
                \u00E6: "ae",
                \u00DE: "Th",
                \u00FE: "th",
                \u00DF: "ss",
                \u0100: "A",
                \u0102: "A",
                \u0104: "A",
                \u0101: "a",
                \u0103: "a",
                \u0105: "a",
                \u0106: "C",
                \u0108: "C",
                \u010A: "C",
                \u010C: "C",
                \u0107: "c",
                \u0109: "c",
                \u010B: "c",
                \u010D: "c",
                \u010E: "D",
                \u0110: "D",
                \u010F: "d",
                \u0111: "d",
                \u0112: "E",
                \u0114: "E",
                \u0116: "E",
                \u0118: "E",
                \u011A: "E",
                \u0113: "e",
                \u0115: "e",
                \u0117: "e",
                \u0119: "e",
                \u011B: "e",
                \u011C: "G",
                \u011E: "G",
                \u0120: "G",
                \u0122: "G",
                \u011D: "g",
                \u011F: "g",
                \u0121: "g",
                \u0123: "g",
                \u0124: "H",
                \u0126: "H",
                \u0125: "h",
                \u0127: "h",
                \u0128: "I",
                \u012A: "I",
                \u012C: "I",
                \u012E: "I",
                \u0130: "I",
                \u0129: "i",
                \u012B: "i",
                \u012D: "i",
                \u012F: "i",
                \u0131: "i",
                \u0134: "J",
                \u0135: "j",
                \u0136: "K",
                \u0137: "k",
                \u0138: "k",
                \u0139: "L",
                \u013B: "L",
                \u013D: "L",
                \u013F: "L",
                \u0141: "L",
                \u013A: "l",
                \u013C: "l",
                \u013E: "l",
                \u0140: "l",
                \u0142: "l",
                \u0143: "N",
                \u0145: "N",
                \u0147: "N",
                \u014A: "N",
                \u0144: "n",
                \u0146: "n",
                \u0148: "n",
                \u014B: "n",
                \u014C: "O",
                \u014E: "O",
                \u0150: "O",
                \u014D: "o",
                \u014F: "o",
                \u0151: "o",
                \u0154: "R",
                \u0156: "R",
                \u0158: "R",
                \u0155: "r",
                \u0157: "r",
                \u0159: "r",
                \u015A: "S",
                \u015C: "S",
                \u015E: "S",
                \u0160: "S",
                \u015B: "s",
                \u015D: "s",
                \u015F: "s",
                \u0161: "s",
                \u0162: "T",
                \u0164: "T",
                \u0166: "T",
                \u0163: "t",
                \u0165: "t",
                \u0167: "t",
                \u0168: "U",
                \u016A: "U",
                \u016C: "U",
                \u016E: "U",
                \u0170: "U",
                \u0172: "U",
                \u0169: "u",
                \u016B: "u",
                \u016D: "u",
                \u016F: "u",
                \u0171: "u",
                \u0173: "u",
                \u0174: "W",
                \u0175: "w",
                \u0176: "Y",
                \u0177: "y",
                \u0178: "Y",
                \u0179: "Z",
                \u017B: "Z",
                \u017D: "Z",
                \u017A: "z",
                \u017C: "z",
                \u017E: "z",
                \u0132: "IJ",
                \u0133: "ij",
                \u0152: "Oe",
                \u0153: "oe",
                \u0149: "'n",
                \u017F: "s"
            }, lm = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"},
            cm = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'"},
            um = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029"}, hm = parseFloat,
            fm = parseInt, Mu = typeof Hs == "object" && Hs && Hs.Object === Object && Hs,
            dm = typeof self == "object" && self && self.Object === Object && self,
            je = Mu || dm || Function("return this")(), Bo = t && !t.nodeType && t,
            er = Bo && !0 && c && !c.nodeType && c, Su = er && er.exports === Bo, Go = Su && Mu.process,
            Pn = function () {
                try {
                    var W = er && er.require && er.require("util").types;
                    return W || Go && Go.binding && Go.binding("util")
                } catch {
                }
            }(), bu = Pn && Pn.isArrayBuffer, wu = Pn && Pn.isDate, Tu = Pn && Pn.isMap, Eu = Pn && Pn.isRegExp,
            Au = Pn && Pn.isSet, Cu = Pn && Pn.isTypedArray;

        function xn(W, Q, $) {
            switch ($.length) {
                case 0:
                    return W.call(Q);
                case 1:
                    return W.call(Q, $[0]);
                case 2:
                    return W.call(Q, $[0], $[1]);
                case 3:
                    return W.call(Q, $[0], $[1], $[2])
            }
            return W.apply(Q, $)
        }

        function pm(W, Q, $, Et) {
            for (var qt = -1, pe = W == null ? 0 : W.length; ++qt < pe;) {
                var We = W[qt];
                Q(Et, We, $(We), W)
            }
            return Et
        }

        function Rn(W, Q) {
            for (var $ = -1, Et = W == null ? 0 : W.length; ++$ < Et && Q(W[$], $, W) !== !1;) ;
            return W
        }

        function mm(W, Q) {
            for (var $ = W == null ? 0 : W.length; $-- && Q(W[$], $, W) !== !1;) ;
            return W
        }

        function Lu(W, Q) {
            for (var $ = -1, Et = W == null ? 0 : W.length; ++$ < Et;) if (!Q(W[$], $, W)) return !1;
            return !0
        }

        function zi(W, Q) {
            for (var $ = -1, Et = W == null ? 0 : W.length, qt = 0, pe = []; ++$ < Et;) {
                var We = W[$];
                Q(We, $, W) && (pe[qt++] = We)
            }
            return pe
        }

        function la(W, Q) {
            var $ = W == null ? 0 : W.length;
            return !!$ && Or(W, Q, 0) > -1
        }

        function Wo(W, Q, $) {
            for (var Et = -1, qt = W == null ? 0 : W.length; ++Et < qt;) if ($(Q, W[Et])) return !0;
            return !1
        }

        function Ee(W, Q) {
            for (var $ = -1, Et = W == null ? 0 : W.length, qt = Array(Et); ++$ < Et;) qt[$] = Q(W[$], $, W);
            return qt
        }

        function Bi(W, Q) {
            for (var $ = -1, Et = Q.length, qt = W.length; ++$ < Et;) W[qt + $] = Q[$];
            return W
        }

        function Vo(W, Q, $, Et) {
            var qt = -1, pe = W == null ? 0 : W.length;
            for (Et && pe && ($ = W[++qt]); ++qt < pe;) $ = Q($, W[qt], qt, W);
            return $
        }

        function gm(W, Q, $, Et) {
            var qt = W == null ? 0 : W.length;
            for (Et && qt && ($ = W[--qt]); qt--;) $ = Q($, W[qt], qt, W);
            return $
        }

        function ko(W, Q) {
            for (var $ = -1, Et = W == null ? 0 : W.length; ++$ < Et;) if (Q(W[$], $, W)) return !0;
            return !1
        }

        var _m = Ho("length");

        function vm(W) {
            return W.split("")
        }

        function xm(W) {
            return W.match(q) || []
        }

        function Pu(W, Q, $) {
            var Et;
            return $(W, function (qt, pe, We) {
                if (Q(qt, pe, We)) return Et = pe, !1
            }), Et
        }

        function ca(W, Q, $, Et) {
            for (var qt = W.length, pe = $ + (Et ? 1 : -1); Et ? pe-- : ++pe < qt;) if (Q(W[pe], pe, W)) return pe;
            return -1
        }

        function Or(W, Q, $) {
            return Q === Q ? Rm(W, Q, $) : ca(W, Ru, $)
        }

        function ym(W, Q, $, Et) {
            for (var qt = $ - 1, pe = W.length; ++qt < pe;) if (Et(W[qt], Q)) return qt;
            return -1
        }

        function Ru(W) {
            return W !== W
        }

        function Du(W, Q) {
            var $ = W == null ? 0 : W.length;
            return $ ? Xo(W, Q) / $ : J
        }

        function Ho(W) {
            return function (Q) {
                return Q == null ? e : Q[W]
            }
        }

        function qo(W) {
            return function (Q) {
                return W == null ? e : W[Q]
            }
        }

        function Iu(W, Q, $, Et, qt) {
            return qt(W, function (pe, We, xe) {
                $ = Et ? (Et = !1, pe) : Q($, pe, We, xe)
            }), $
        }

        function Mm(W, Q) {
            var $ = W.length;
            for (W.sort(Q); $--;) W[$] = W[$].value;
            return W
        }

        function Xo(W, Q) {
            for (var $, Et = -1, qt = W.length; ++Et < qt;) {
                var pe = Q(W[Et]);
                pe !== e && ($ = $ === e ? pe : $ + pe)
            }
            return $
        }

        function Yo(W, Q) {
            for (var $ = -1, Et = Array(W); ++$ < W;) Et[$] = Q($);
            return Et
        }

        function Sm(W, Q) {
            return Ee(Q, function ($) {
                return [$, W[$]]
            })
        }

        function Ou(W) {
            return W && W.slice(0, zu(W) + 1).replace(Ms, "")
        }

        function yn(W) {
            return function (Q) {
                return W(Q)
            }
        }

        function Zo(W, Q) {
            return Ee(Q, function ($) {
                return W[$]
            })
        }

        function ws(W, Q) {
            return W.has(Q)
        }

        function Fu(W, Q) {
            for (var $ = -1, Et = W.length; ++$ < Et && Or(Q, W[$], 0) > -1;) ;
            return $
        }

        function Nu(W, Q) {
            for (var $ = W.length; $-- && Or(Q, W[$], 0) > -1;) ;
            return $
        }

        function bm(W, Q) {
            for (var $ = W.length, Et = 0; $--;) W[$] === Q && ++Et;
            return Et
        }

        var wm = qo(om), Tm = qo(lm);

        function Em(W) {
            return "\\" + um[W]
        }

        function Am(W, Q) {
            return W == null ? e : W[Q]
        }

        function Fr(W) {
            return im.test(W)
        }

        function Cm(W) {
            return rm.test(W)
        }

        function Lm(W) {
            for (var Q, $ = []; !(Q = W.next()).done;) $.push(Q.value);
            return $
        }

        function $o(W) {
            var Q = -1, $ = Array(W.size);
            return W.forEach(function (Et, qt) {
                $[++Q] = [qt, Et]
            }), $
        }

        function Uu(W, Q) {
            return function ($) {
                return W(Q($))
            }
        }

        function Gi(W, Q) {
            for (var $ = -1, Et = W.length, qt = 0, pe = []; ++$ < Et;) {
                var We = W[$];
                (We === Q || We === d) && (W[$] = d, pe[qt++] = $)
            }
            return pe
        }

        function ua(W) {
            var Q = -1, $ = Array(W.size);
            return W.forEach(function (Et) {
                $[++Q] = Et
            }), $
        }

        function Pm(W) {
            var Q = -1, $ = Array(W.size);
            return W.forEach(function (Et) {
                $[++Q] = [Et, Et]
            }), $
        }

        function Rm(W, Q, $) {
            for (var Et = $ - 1, qt = W.length; ++Et < qt;) if (W[Et] === Q) return Et;
            return -1
        }

        function Dm(W, Q, $) {
            for (var Et = $ + 1; Et--;) if (W[Et] === Q) return Et;
            return Et
        }

        function Nr(W) {
            return Fr(W) ? Om(W) : _m(W)
        }

        function $n(W) {
            return Fr(W) ? Fm(W) : vm(W)
        }

        function zu(W) {
            for (var Q = W.length; Q-- && Oo.test(W.charAt(Q));) ;
            return Q
        }

        var Im = qo(cm);

        function Om(W) {
            for (var Q = zo.lastIndex = 0; zo.test(W);) ++Q;
            return Q
        }

        function Fm(W) {
            return W.match(zo) || []
        }

        function Nm(W) {
            return W.match(nm) || []
        }

        var Um = function W(Q) {
            Q = Q == null ? je : Ur.defaults(je.Object(), Q, Ur.pick(je, sm));
            var $ = Q.Array, Et = Q.Date, qt = Q.Error, pe = Q.Function, We = Q.Math, xe = Q.Object, Jo = Q.RegExp,
                zm = Q.String, Dn = Q.TypeError, ha = $.prototype, Bm = pe.prototype, zr = xe.prototype,
                fa = Q["__core-js_shared__"], da = Bm.toString, ve = zr.hasOwnProperty, Gm = 0, Bu = function () {
                    var n = /[^.]+$/.exec(fa && fa.keys && fa.keys.IE_PROTO || "");
                    return n ? "Symbol(src)_1." + n : ""
                }(), pa = zr.toString, Wm = da.call(xe), Vm = je._,
                km = Jo("^" + da.call(ve).replace(Pr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                ma = Su ? Q.Buffer : e, Wi = Q.Symbol, ga = Q.Uint8Array, Gu = ma ? ma.allocUnsafe : e,
                _a = Uu(xe.getPrototypeOf, xe), Wu = xe.create, Vu = zr.propertyIsEnumerable, va = ha.splice,
                ku = Wi ? Wi.isConcatSpreadable : e, Ts = Wi ? Wi.iterator : e, nr = Wi ? Wi.toStringTag : e,
                xa = function () {
                    try {
                        var n = or(xe, "defineProperty");
                        return n({}, "", {}), n
                    } catch {
                    }
                }(), Hm = Q.clearTimeout !== je.clearTimeout && Q.clearTimeout,
                qm = Et && Et.now !== je.Date.now && Et.now, Xm = Q.setTimeout !== je.setTimeout && Q.setTimeout,
                ya = We.ceil, Ma = We.floor, jo = xe.getOwnPropertySymbols, Ym = ma ? ma.isBuffer : e, Hu = Q.isFinite,
                Zm = ha.join, $m = Uu(xe.keys, xe), Ve = We.max, tn = We.min, Jm = Et.now, jm = Q.parseInt,
                qu = We.random, Km = ha.reverse, Ko = or(Q, "DataView"), Es = or(Q, "Map"), Qo = or(Q, "Promise"),
                Br = or(Q, "Set"), As = or(Q, "WeakMap"), Cs = or(xe, "create"), Sa = As && new As, Gr = {},
                Qm = lr(Ko), tg = lr(Es), eg = lr(Qo), ng = lr(Br), ig = lr(As), ba = Wi ? Wi.prototype : e,
                Ls = ba ? ba.valueOf : e, Xu = ba ? ba.toString : e;

            function b(n) {
                if (Oe(n) && !Xt(n) && !(n instanceof re)) {
                    if (n instanceof In) return n;
                    if (ve.call(n, "__wrapped__")) return Yh(n)
                }
                return new In(n)
            }

            var Wr = function () {
                function n() {
                }

                return function (r) {
                    if (!Le(r)) return {};
                    if (Wu) return Wu(r);
                    n.prototype = r;
                    var o = new n;
                    return n.prototype = e, o
                }
            }();

            function wa() {
            }

            function In(n, r) {
                this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!r, this.__index__ = 0, this.__values__ = e
            }

            b.templateSettings = {
                escape: ze,
                evaluate: Ye,
                interpolate: si,
                variable: "",
                imports: {_: b}
            }, b.prototype = wa.prototype, b.prototype.constructor = b, In.prototype = Wr(wa.prototype), In.prototype.constructor = In;

            function re(n) {
                this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ht, this.__views__ = []
            }

            function rg() {
                var n = new re(this.__wrapped__);
                return n.__actions__ = dn(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = dn(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = dn(this.__views__), n
            }

            function sg() {
                if (this.__filtered__) {
                    var n = new re(this);
                    n.__dir__ = -1, n.__filtered__ = !0
                } else n = this.clone(), n.__dir__ *= -1;
                return n
            }

            function ag() {
                var n = this.__wrapped__.value(), r = this.__dir__, o = Xt(n), p = r < 0, y = o ? n.length : 0,
                    C = v_(0, y, this.__views__), O = C.start, z = C.end, V = z - O, st = p ? z : O - 1,
                    at = this.__iteratees__, ct = at.length, Mt = 0, Dt = tn(V, this.__takeCount__);
                if (!o || !p && y == V && Dt == V) return gh(n, this.__actions__);
                var Wt = [];
                t:for (; V-- && Mt < Dt;) {
                    st += r;
                    for (var Jt = -1, Vt = n[st]; ++Jt < ct;) {
                        var ne = at[Jt], ae = ne.iteratee, bn = ne.type, un = ae(Vt);
                        if (bn == ot) Vt = un; else if (!un) {
                            if (bn == X) continue t;
                            break t
                        }
                    }
                    Wt[Mt++] = Vt
                }
                return Wt
            }

            re.prototype = Wr(wa.prototype), re.prototype.constructor = re;

            function ir(n) {
                var r = -1, o = n == null ? 0 : n.length;
                for (this.clear(); ++r < o;) {
                    var p = n[r];
                    this.set(p[0], p[1])
                }
            }

            function og() {
                this.__data__ = Cs ? Cs(null) : {}, this.size = 0
            }

            function lg(n) {
                var r = this.has(n) && delete this.__data__[n];
                return this.size -= r ? 1 : 0, r
            }

            function cg(n) {
                var r = this.__data__;
                if (Cs) {
                    var o = r[n];
                    return o === f ? e : o
                }
                return ve.call(r, n) ? r[n] : e
            }

            function ug(n) {
                var r = this.__data__;
                return Cs ? r[n] !== e : ve.call(r, n)
            }

            function hg(n, r) {
                var o = this.__data__;
                return this.size += this.has(n) ? 0 : 1, o[n] = Cs && r === e ? f : r, this
            }

            ir.prototype.clear = og, ir.prototype.delete = lg, ir.prototype.get = cg, ir.prototype.has = ug, ir.prototype.set = hg;

            function pi(n) {
                var r = -1, o = n == null ? 0 : n.length;
                for (this.clear(); ++r < o;) {
                    var p = n[r];
                    this.set(p[0], p[1])
                }
            }

            function fg() {
                this.__data__ = [], this.size = 0
            }

            function dg(n) {
                var r = this.__data__, o = Ta(r, n);
                if (o < 0) return !1;
                var p = r.length - 1;
                return o == p ? r.pop() : va.call(r, o, 1), --this.size, !0
            }

            function pg(n) {
                var r = this.__data__, o = Ta(r, n);
                return o < 0 ? e : r[o][1]
            }

            function mg(n) {
                return Ta(this.__data__, n) > -1
            }

            function gg(n, r) {
                var o = this.__data__, p = Ta(o, n);
                return p < 0 ? (++this.size, o.push([n, r])) : o[p][1] = r, this
            }

            pi.prototype.clear = fg, pi.prototype.delete = dg, pi.prototype.get = pg, pi.prototype.has = mg, pi.prototype.set = gg;

            function mi(n) {
                var r = -1, o = n == null ? 0 : n.length;
                for (this.clear(); ++r < o;) {
                    var p = n[r];
                    this.set(p[0], p[1])
                }
            }

            function _g() {
                this.size = 0, this.__data__ = {hash: new ir, map: new (Es || pi), string: new ir}
            }

            function vg(n) {
                var r = Ua(this, n).delete(n);
                return this.size -= r ? 1 : 0, r
            }

            function xg(n) {
                return Ua(this, n).get(n)
            }

            function yg(n) {
                return Ua(this, n).has(n)
            }

            function Mg(n, r) {
                var o = Ua(this, n), p = o.size;
                return o.set(n, r), this.size += o.size == p ? 0 : 1, this
            }

            mi.prototype.clear = _g, mi.prototype.delete = vg, mi.prototype.get = xg, mi.prototype.has = yg, mi.prototype.set = Mg;

            function rr(n) {
                var r = -1, o = n == null ? 0 : n.length;
                for (this.__data__ = new mi; ++r < o;) this.add(n[r])
            }

            function Sg(n) {
                return this.__data__.set(n, f), this
            }

            function bg(n) {
                return this.__data__.has(n)
            }

            rr.prototype.add = rr.prototype.push = Sg, rr.prototype.has = bg;

            function Jn(n) {
                var r = this.__data__ = new pi(n);
                this.size = r.size
            }

            function wg() {
                this.__data__ = new pi, this.size = 0
            }

            function Tg(n) {
                var r = this.__data__, o = r.delete(n);
                return this.size = r.size, o
            }

            function Eg(n) {
                return this.__data__.get(n)
            }

            function Ag(n) {
                return this.__data__.has(n)
            }

            function Cg(n, r) {
                var o = this.__data__;
                if (o instanceof pi) {
                    var p = o.__data__;
                    if (!Es || p.length < s - 1) return p.push([n, r]), this.size = ++o.size, this;
                    o = this.__data__ = new mi(p)
                }
                return o.set(n, r), this.size = o.size, this
            }

            Jn.prototype.clear = wg, Jn.prototype.delete = Tg, Jn.prototype.get = Eg, Jn.prototype.has = Ag, Jn.prototype.set = Cg;

            function Yu(n, r) {
                var o = Xt(n), p = !o && cr(n), y = !o && !p && Xi(n), C = !o && !p && !y && qr(n),
                    O = o || p || y || C, z = O ? Yo(n.length, zm) : [], V = z.length;
                for (var st in n) (r || ve.call(n, st)) && !(O && (st == "length" || y && (st == "offset" || st == "parent") || C && (st == "buffer" || st == "byteLength" || st == "byteOffset") || xi(st, V))) && z.push(st);
                return z
            }

            function Zu(n) {
                var r = n.length;
                return r ? n[ul(0, r - 1)] : e
            }

            function Lg(n, r) {
                return za(dn(n), sr(r, 0, n.length))
            }

            function Pg(n) {
                return za(dn(n))
            }

            function tl(n, r, o) {
                (o !== e && !jn(n[r], o) || o === e && !(r in n)) && gi(n, r, o)
            }

            function Ps(n, r, o) {
                var p = n[r];
                (!(ve.call(n, r) && jn(p, o)) || o === e && !(r in n)) && gi(n, r, o)
            }

            function Ta(n, r) {
                for (var o = n.length; o--;) if (jn(n[o][0], r)) return o;
                return -1
            }

            function Rg(n, r, o, p) {
                return Vi(n, function (y, C, O) {
                    r(p, y, o(y), O)
                }), p
            }

            function $u(n, r) {
                return n && oi(r, Ze(r), n)
            }

            function Dg(n, r) {
                return n && oi(r, mn(r), n)
            }

            function gi(n, r, o) {
                r == "__proto__" && xa ? xa(n, r, {configurable: !0, enumerable: !0, value: o, writable: !0}) : n[r] = o
            }

            function el(n, r) {
                for (var o = -1, p = r.length, y = $(p), C = n == null; ++o < p;) y[o] = C ? e : Fl(n, r[o]);
                return y
            }

            function sr(n, r, o) {
                return n === n && (o !== e && (n = n <= o ? n : o), r !== e && (n = n >= r ? n : r)), n
            }

            function On(n, r, o, p, y, C) {
                var O, z = r & m, V = r & g, st = r & x;
                if (o && (O = y ? o(n, p, y, C) : o(n)), O !== e) return O;
                if (!Le(n)) return n;
                var at = Xt(n);
                if (at) {
                    if (O = y_(n), !z) return dn(n, O)
                } else {
                    var ct = en(n), Mt = ct == Ht || ct == Ft;
                    if (Xi(n)) return xh(n, z);
                    if (ct == Ce || ct == Ut || Mt && !y) {
                        if (O = V || Mt ? {} : zh(n), !z) return V ? c_(n, Dg(O, n)) : l_(n, $u(O, n))
                    } else {
                        if (!Me[ct]) return y ? n : {};
                        O = M_(n, ct, z)
                    }
                }
                C || (C = new Jn);
                var Dt = C.get(n);
                if (Dt) return Dt;
                C.set(n, O), pf(n) ? n.forEach(function (Vt) {
                    O.add(On(Vt, r, o, Vt, n, C))
                }) : ff(n) && n.forEach(function (Vt, ne) {
                    O.set(ne, On(Vt, r, o, ne, n, C))
                });
                var Wt = st ? V ? Ml : yl : V ? mn : Ze, Jt = at ? e : Wt(n);
                return Rn(Jt || n, function (Vt, ne) {
                    Jt && (ne = Vt, Vt = n[ne]), Ps(O, ne, On(Vt, r, o, ne, n, C))
                }), O
            }

            function Ig(n) {
                var r = Ze(n);
                return function (o) {
                    return Ju(o, n, r)
                }
            }

            function Ju(n, r, o) {
                var p = o.length;
                if (n == null) return !p;
                for (n = xe(n); p--;) {
                    var y = o[p], C = r[y], O = n[y];
                    if (O === e && !(y in n) || !C(O)) return !1
                }
                return !0
            }

            function ju(n, r, o) {
                if (typeof n != "function") throw new Dn(u);
                return Us(function () {
                    n.apply(e, o)
                }, r)
            }

            function Rs(n, r, o, p) {
                var y = -1, C = la, O = !0, z = n.length, V = [], st = r.length;
                if (!z) return V;
                o && (r = Ee(r, yn(o))), p ? (C = Wo, O = !1) : r.length >= s && (C = ws, O = !1, r = new rr(r));
                t:for (; ++y < z;) {
                    var at = n[y], ct = o == null ? at : o(at);
                    if (at = p || at !== 0 ? at : 0, O && ct === ct) {
                        for (var Mt = st; Mt--;) if (r[Mt] === ct) continue t;
                        V.push(at)
                    } else C(r, ct, p) || V.push(at)
                }
                return V
            }

            var Vi = wh(ai), Ku = wh(il, !0);

            function Og(n, r) {
                var o = !0;
                return Vi(n, function (p, y, C) {
                    return o = !!r(p, y, C), o
                }), o
            }

            function Ea(n, r, o) {
                for (var p = -1, y = n.length; ++p < y;) {
                    var C = n[p], O = r(C);
                    if (O != null && (z === e ? O === O && !Sn(O) : o(O, z))) var z = O, V = C
                }
                return V
            }

            function Fg(n, r, o, p) {
                var y = n.length;
                for (o = $t(o), o < 0 && (o = -o > y ? 0 : y + o), p = p === e || p > y ? y : $t(p), p < 0 && (p += y), p = o > p ? 0 : gf(p); o < p;) n[o++] = r;
                return n
            }

            function Qu(n, r) {
                var o = [];
                return Vi(n, function (p, y, C) {
                    r(p, y, C) && o.push(p)
                }), o
            }

            function Ke(n, r, o, p, y) {
                var C = -1, O = n.length;
                for (o || (o = b_), y || (y = []); ++C < O;) {
                    var z = n[C];
                    r > 0 && o(z) ? r > 1 ? Ke(z, r - 1, o, p, y) : Bi(y, z) : p || (y[y.length] = z)
                }
                return y
            }

            var nl = Th(), th = Th(!0);

            function ai(n, r) {
                return n && nl(n, r, Ze)
            }

            function il(n, r) {
                return n && th(n, r, Ze)
            }

            function Aa(n, r) {
                return zi(r, function (o) {
                    return yi(n[o])
                })
            }

            function ar(n, r) {
                r = Hi(r, n);
                for (var o = 0, p = r.length; n != null && o < p;) n = n[li(r[o++])];
                return o && o == p ? n : e
            }

            function eh(n, r, o) {
                var p = r(n);
                return Xt(n) ? p : Bi(p, o(n))
            }

            function ln(n) {
                return n == null ? n === e ? K : Fe : nr && nr in xe(n) ? __(n) : P_(n)
            }

            function rl(n, r) {
                return n > r
            }

            function Ng(n, r) {
                return n != null && ve.call(n, r)
            }

            function Ug(n, r) {
                return n != null && r in xe(n)
            }

            function zg(n, r, o) {
                return n >= tn(r, o) && n < Ve(r, o)
            }

            function sl(n, r, o) {
                for (var p = o ? Wo : la, y = n[0].length, C = n.length, O = C, z = $(C), V = 1 / 0, st = []; O--;) {
                    var at = n[O];
                    O && r && (at = Ee(at, yn(r))), V = tn(at.length, V), z[O] = !o && (r || y >= 120 && at.length >= 120) ? new rr(O && at) : e
                }
                at = n[0];
                var ct = -1, Mt = z[0];
                t:for (; ++ct < y && st.length < V;) {
                    var Dt = at[ct], Wt = r ? r(Dt) : Dt;
                    if (Dt = o || Dt !== 0 ? Dt : 0, !(Mt ? ws(Mt, Wt) : p(st, Wt, o))) {
                        for (O = C; --O;) {
                            var Jt = z[O];
                            if (!(Jt ? ws(Jt, Wt) : p(n[O], Wt, o))) continue t
                        }
                        Mt && Mt.push(Wt), st.push(Dt)
                    }
                }
                return st
            }

            function Bg(n, r, o, p) {
                return ai(n, function (y, C, O) {
                    r(p, o(y), C, O)
                }), p
            }

            function Ds(n, r, o) {
                r = Hi(r, n), n = Vh(n, r);
                var p = n == null ? n : n[li(Nn(r))];
                return p == null ? e : xn(p, n, o)
            }

            function nh(n) {
                return Oe(n) && ln(n) == Ut
            }

            function Gg(n) {
                return Oe(n) && ln(n) == yt
            }

            function Wg(n) {
                return Oe(n) && ln(n) == Bt
            }

            function Is(n, r, o, p, y) {
                return n === r ? !0 : n == null || r == null || !Oe(n) && !Oe(r) ? n !== n && r !== r : Vg(n, r, o, p, Is, y)
            }

            function Vg(n, r, o, p, y, C) {
                var O = Xt(n), z = Xt(r), V = O ? rt : en(n), st = z ? rt : en(r);
                V = V == Ut ? Ce : V, st = st == Ut ? Ce : st;
                var at = V == Ce, ct = st == Ce, Mt = V == st;
                if (Mt && Xi(n)) {
                    if (!Xi(r)) return !1;
                    O = !0, at = !1
                }
                if (Mt && !at) return C || (C = new Jn), O || qr(n) ? Fh(n, r, o, p, y, C) : m_(n, r, V, o, p, y, C);
                if (!(o & M)) {
                    var Dt = at && ve.call(n, "__wrapped__"), Wt = ct && ve.call(r, "__wrapped__");
                    if (Dt || Wt) {
                        var Jt = Dt ? n.value() : n, Vt = Wt ? r.value() : r;
                        return C || (C = new Jn), y(Jt, Vt, o, p, C)
                    }
                }
                return Mt ? (C || (C = new Jn), g_(n, r, o, p, y, C)) : !1
            }

            function kg(n) {
                return Oe(n) && en(n) == ce
            }

            function al(n, r, o, p) {
                var y = o.length, C = y, O = !p;
                if (n == null) return !C;
                for (n = xe(n); y--;) {
                    var z = o[y];
                    if (O && z[2] ? z[1] !== n[z[0]] : !(z[0] in n)) return !1
                }
                for (; ++y < C;) {
                    z = o[y];
                    var V = z[0], st = n[V], at = z[1];
                    if (O && z[2]) {
                        if (st === e && !(V in n)) return !1
                    } else {
                        var ct = new Jn;
                        if (p) var Mt = p(st, at, V, n, r, ct);
                        if (!(Mt === e ? Is(at, st, M | v, p, ct) : Mt)) return !1
                    }
                }
                return !0
            }

            function ih(n) {
                if (!Le(n) || T_(n)) return !1;
                var r = yi(n) ? km : ee;
                return r.test(lr(n))
            }

            function Hg(n) {
                return Oe(n) && ln(n) == Xe
            }

            function qg(n) {
                return Oe(n) && en(n) == we
            }

            function Xg(n) {
                return Oe(n) && Ha(n.length) && !!Se[ln(n)]
            }

            function rh(n) {
                return typeof n == "function" ? n : n == null ? gn : typeof n == "object" ? Xt(n) ? oh(n[0], n[1]) : ah(n) : Af(n)
            }

            function ol(n) {
                if (!Ns(n)) return $m(n);
                var r = [];
                for (var o in xe(n)) ve.call(n, o) && o != "constructor" && r.push(o);
                return r
            }

            function Yg(n) {
                if (!Le(n)) return L_(n);
                var r = Ns(n), o = [];
                for (var p in n) p == "constructor" && (r || !ve.call(n, p)) || o.push(p);
                return o
            }

            function ll(n, r) {
                return n < r
            }

            function sh(n, r) {
                var o = -1, p = pn(n) ? $(n.length) : [];
                return Vi(n, function (y, C, O) {
                    p[++o] = r(y, C, O)
                }), p
            }

            function ah(n) {
                var r = bl(n);
                return r.length == 1 && r[0][2] ? Gh(r[0][0], r[0][1]) : function (o) {
                    return o === n || al(o, n, r)
                }
            }

            function oh(n, r) {
                return Tl(n) && Bh(r) ? Gh(li(n), r) : function (o) {
                    var p = Fl(o, n);
                    return p === e && p === r ? Nl(o, n) : Is(r, p, M | v)
                }
            }

            function Ca(n, r, o, p, y) {
                n !== r && nl(r, function (C, O) {
                    if (y || (y = new Jn), Le(C)) Zg(n, r, O, o, Ca, p, y); else {
                        var z = p ? p(Al(n, O), C, O + "", n, r, y) : e;
                        z === e && (z = C), tl(n, O, z)
                    }
                }, mn)
            }

            function Zg(n, r, o, p, y, C, O) {
                var z = Al(n, o), V = Al(r, o), st = O.get(V);
                if (st) {
                    tl(n, o, st);
                    return
                }
                var at = C ? C(z, V, o + "", n, r, O) : e, ct = at === e;
                if (ct) {
                    var Mt = Xt(V), Dt = !Mt && Xi(V), Wt = !Mt && !Dt && qr(V);
                    at = V, Mt || Dt || Wt ? Xt(z) ? at = z : Ne(z) ? at = dn(z) : Dt ? (ct = !1, at = xh(V, !0)) : Wt ? (ct = !1, at = yh(V, !0)) : at = [] : zs(V) || cr(V) ? (at = z, cr(z) ? at = _f(z) : (!Le(z) || yi(z)) && (at = zh(V))) : ct = !1
                }
                ct && (O.set(V, at), y(at, V, p, C, O), O.delete(V)), tl(n, o, at)
            }

            function lh(n, r) {
                var o = n.length;
                if (!!o) return r += r < 0 ? o : 0, xi(r, o) ? n[r] : e
            }

            function ch(n, r, o) {
                r.length ? r = Ee(r, function (C) {
                    return Xt(C) ? function (O) {
                        return ar(O, C.length === 1 ? C[0] : C)
                    } : C
                }) : r = [gn];
                var p = -1;
                r = Ee(r, yn(Gt()));
                var y = sh(n, function (C, O, z) {
                    var V = Ee(r, function (st) {
                        return st(C)
                    });
                    return {criteria: V, index: ++p, value: C}
                });
                return Mm(y, function (C, O) {
                    return o_(C, O, o)
                })
            }

            function $g(n, r) {
                return uh(n, r, function (o, p) {
                    return Nl(n, p)
                })
            }

            function uh(n, r, o) {
                for (var p = -1, y = r.length, C = {}; ++p < y;) {
                    var O = r[p], z = ar(n, O);
                    o(z, O) && Os(C, Hi(O, n), z)
                }
                return C
            }

            function Jg(n) {
                return function (r) {
                    return ar(r, n)
                }
            }

            function cl(n, r, o, p) {
                var y = p ? ym : Or, C = -1, O = r.length, z = n;
                for (n === r && (r = dn(r)), o && (z = Ee(n, yn(o))); ++C < O;) for (var V = 0, st = r[C], at = o ? o(st) : st; (V = y(z, at, V, p)) > -1;) z !== n && va.call(z, V, 1), va.call(n, V, 1);
                return n
            }

            function hh(n, r) {
                for (var o = n ? r.length : 0, p = o - 1; o--;) {
                    var y = r[o];
                    if (o == p || y !== C) {
                        var C = y;
                        xi(y) ? va.call(n, y, 1) : dl(n, y)
                    }
                }
                return n
            }

            function ul(n, r) {
                return n + Ma(qu() * (r - n + 1))
            }

            function jg(n, r, o, p) {
                for (var y = -1, C = Ve(ya((r - n) / (o || 1)), 0), O = $(C); C--;) O[p ? C : ++y] = n, n += o;
                return O
            }

            function hl(n, r) {
                var o = "";
                if (!n || r < 1 || r > tt) return o;
                do r % 2 && (o += n), r = Ma(r / 2), r && (n += n); while (r);
                return o
            }

            function Kt(n, r) {
                return Cl(Wh(n, r, gn), n + "")
            }

            function Kg(n) {
                return Zu(Xr(n))
            }

            function Qg(n, r) {
                var o = Xr(n);
                return za(o, sr(r, 0, o.length))
            }

            function Os(n, r, o, p) {
                if (!Le(n)) return n;
                r = Hi(r, n);
                for (var y = -1, C = r.length, O = C - 1, z = n; z != null && ++y < C;) {
                    var V = li(r[y]), st = o;
                    if (V === "__proto__" || V === "constructor" || V === "prototype") return n;
                    if (y != O) {
                        var at = z[V];
                        st = p ? p(at, V, z) : e, st === e && (st = Le(at) ? at : xi(r[y + 1]) ? [] : {})
                    }
                    Ps(z, V, st), z = z[V]
                }
                return n
            }

            var fh = Sa ? function (n, r) {
                return Sa.set(n, r), n
            } : gn, t_ = xa ? function (n, r) {
                return xa(n, "toString", {configurable: !0, enumerable: !1, value: zl(r), writable: !0})
            } : gn;

            function e_(n) {
                return za(Xr(n))
            }

            function Fn(n, r, o) {
                var p = -1, y = n.length;
                r < 0 && (r = -r > y ? 0 : y + r), o = o > y ? y : o, o < 0 && (o += y), y = r > o ? 0 : o - r >>> 0, r >>>= 0;
                for (var C = $(y); ++p < y;) C[p] = n[p + r];
                return C
            }

            function n_(n, r) {
                var o;
                return Vi(n, function (p, y, C) {
                    return o = r(p, y, C), !o
                }), !!o
            }

            function La(n, r, o) {
                var p = 0, y = n == null ? p : n.length;
                if (typeof r == "number" && r === r && y <= mt) {
                    for (; p < y;) {
                        var C = p + y >>> 1, O = n[C];
                        O !== null && !Sn(O) && (o ? O <= r : O < r) ? p = C + 1 : y = C
                    }
                    return y
                }
                return fl(n, r, gn, o)
            }

            function fl(n, r, o, p) {
                var y = 0, C = n == null ? 0 : n.length;
                if (C === 0) return 0;
                r = o(r);
                for (var O = r !== r, z = r === null, V = Sn(r), st = r === e; y < C;) {
                    var at = Ma((y + C) / 2), ct = o(n[at]), Mt = ct !== e, Dt = ct === null, Wt = ct === ct,
                        Jt = Sn(ct);
                    if (O) var Vt = p || Wt; else st ? Vt = Wt && (p || Mt) : z ? Vt = Wt && Mt && (p || !Dt) : V ? Vt = Wt && Mt && !Dt && (p || !Jt) : Dt || Jt ? Vt = !1 : Vt = p ? ct <= r : ct < r;
                    Vt ? y = at + 1 : C = at
                }
                return tn(C, gt)
            }

            function dh(n, r) {
                for (var o = -1, p = n.length, y = 0, C = []; ++o < p;) {
                    var O = n[o], z = r ? r(O) : O;
                    if (!o || !jn(z, V)) {
                        var V = z;
                        C[y++] = O === 0 ? 0 : O
                    }
                }
                return C
            }

            function ph(n) {
                return typeof n == "number" ? n : Sn(n) ? J : +n
            }

            function Mn(n) {
                if (typeof n == "string") return n;
                if (Xt(n)) return Ee(n, Mn) + "";
                if (Sn(n)) return Xu ? Xu.call(n) : "";
                var r = n + "";
                return r == "0" && 1 / n == -ut ? "-0" : r
            }

            function ki(n, r, o) {
                var p = -1, y = la, C = n.length, O = !0, z = [], V = z;
                if (o) O = !1, y = Wo; else if (C >= s) {
                    var st = r ? null : d_(n);
                    if (st) return ua(st);
                    O = !1, y = ws, V = new rr
                } else V = r ? [] : z;
                t:for (; ++p < C;) {
                    var at = n[p], ct = r ? r(at) : at;
                    if (at = o || at !== 0 ? at : 0, O && ct === ct) {
                        for (var Mt = V.length; Mt--;) if (V[Mt] === ct) continue t;
                        r && V.push(ct), z.push(at)
                    } else y(V, ct, o) || (V !== z && V.push(ct), z.push(at))
                }
                return z
            }

            function dl(n, r) {
                return r = Hi(r, n), n = Vh(n, r), n == null || delete n[li(Nn(r))]
            }

            function mh(n, r, o, p) {
                return Os(n, r, o(ar(n, r)), p)
            }

            function Pa(n, r, o, p) {
                for (var y = n.length, C = p ? y : -1; (p ? C-- : ++C < y) && r(n[C], C, n);) ;
                return o ? Fn(n, p ? 0 : C, p ? C + 1 : y) : Fn(n, p ? C + 1 : 0, p ? y : C)
            }

            function gh(n, r) {
                var o = n;
                return o instanceof re && (o = o.value()), Vo(r, function (p, y) {
                    return y.func.apply(y.thisArg, Bi([p], y.args))
                }, o)
            }

            function pl(n, r, o) {
                var p = n.length;
                if (p < 2) return p ? ki(n[0]) : [];
                for (var y = -1, C = $(p); ++y < p;) for (var O = n[y], z = -1; ++z < p;) z != y && (C[y] = Rs(C[y] || O, n[z], r, o));
                return ki(Ke(C, 1), r, o)
            }

            function _h(n, r, o) {
                for (var p = -1, y = n.length, C = r.length, O = {}; ++p < y;) {
                    var z = p < C ? r[p] : e;
                    o(O, n[p], z)
                }
                return O
            }

            function ml(n) {
                return Ne(n) ? n : []
            }

            function gl(n) {
                return typeof n == "function" ? n : gn
            }

            function Hi(n, r) {
                return Xt(n) ? n : Tl(n, r) ? [n] : Xh(ge(n))
            }

            var i_ = Kt;

            function qi(n, r, o) {
                var p = n.length;
                return o = o === e ? p : o, !r && o >= p ? n : Fn(n, r, o)
            }

            var vh = Hm || function (n) {
                return je.clearTimeout(n)
            };

            function xh(n, r) {
                if (r) return n.slice();
                var o = n.length, p = Gu ? Gu(o) : new n.constructor(o);
                return n.copy(p), p
            }

            function _l(n) {
                var r = new n.constructor(n.byteLength);
                return new ga(r).set(new ga(n)), r
            }

            function r_(n, r) {
                var o = r ? _l(n.buffer) : n.buffer;
                return new n.constructor(o, n.byteOffset, n.byteLength)
            }

            function s_(n) {
                var r = new n.constructor(n.source, Yt.exec(n));
                return r.lastIndex = n.lastIndex, r
            }

            function a_(n) {
                return Ls ? xe(Ls.call(n)) : {}
            }

            function yh(n, r) {
                var o = r ? _l(n.buffer) : n.buffer;
                return new n.constructor(o, n.byteOffset, n.length)
            }

            function Mh(n, r) {
                if (n !== r) {
                    var o = n !== e, p = n === null, y = n === n, C = Sn(n), O = r !== e, z = r === null, V = r === r,
                        st = Sn(r);
                    if (!z && !st && !C && n > r || C && O && V && !z && !st || p && O && V || !o && V || !y) return 1;
                    if (!p && !C && !st && n < r || st && o && y && !p && !C || z && o && y || !O && y || !V) return -1
                }
                return 0
            }

            function o_(n, r, o) {
                for (var p = -1, y = n.criteria, C = r.criteria, O = y.length, z = o.length; ++p < O;) {
                    var V = Mh(y[p], C[p]);
                    if (V) {
                        if (p >= z) return V;
                        var st = o[p];
                        return V * (st == "desc" ? -1 : 1)
                    }
                }
                return n.index - r.index
            }

            function Sh(n, r, o, p) {
                for (var y = -1, C = n.length, O = o.length, z = -1, V = r.length, st = Ve(C - O, 0), at = $(V + st), ct = !p; ++z < V;) at[z] = r[z];
                for (; ++y < O;) (ct || y < C) && (at[o[y]] = n[y]);
                for (; st--;) at[z++] = n[y++];
                return at
            }

            function bh(n, r, o, p) {
                for (var y = -1, C = n.length, O = -1, z = o.length, V = -1, st = r.length, at = Ve(C - z, 0), ct = $(at + st), Mt = !p; ++y < at;) ct[y] = n[y];
                for (var Dt = y; ++V < st;) ct[Dt + V] = r[V];
                for (; ++O < z;) (Mt || y < C) && (ct[Dt + o[O]] = n[y++]);
                return ct
            }

            function dn(n, r) {
                var o = -1, p = n.length;
                for (r || (r = $(p)); ++o < p;) r[o] = n[o];
                return r
            }

            function oi(n, r, o, p) {
                var y = !o;
                o || (o = {});
                for (var C = -1, O = r.length; ++C < O;) {
                    var z = r[C], V = p ? p(o[z], n[z], z, o, n) : e;
                    V === e && (V = n[z]), y ? gi(o, z, V) : Ps(o, z, V)
                }
                return o
            }

            function l_(n, r) {
                return oi(n, wl(n), r)
            }

            function c_(n, r) {
                return oi(n, Nh(n), r)
            }

            function Ra(n, r) {
                return function (o, p) {
                    var y = Xt(o) ? pm : Rg, C = r ? r() : {};
                    return y(o, n, Gt(p, 2), C)
                }
            }

            function Vr(n) {
                return Kt(function (r, o) {
                    var p = -1, y = o.length, C = y > 1 ? o[y - 1] : e, O = y > 2 ? o[2] : e;
                    for (C = n.length > 3 && typeof C == "function" ? (y--, C) : e, O && cn(o[0], o[1], O) && (C = y < 3 ? e : C, y = 1), r = xe(r); ++p < y;) {
                        var z = o[p];
                        z && n(r, z, p, C)
                    }
                    return r
                })
            }

            function wh(n, r) {
                return function (o, p) {
                    if (o == null) return o;
                    if (!pn(o)) return n(o, p);
                    for (var y = o.length, C = r ? y : -1, O = xe(o); (r ? C-- : ++C < y) && p(O[C], C, O) !== !1;) ;
                    return o
                }
            }

            function Th(n) {
                return function (r, o, p) {
                    for (var y = -1, C = xe(r), O = p(r), z = O.length; z--;) {
                        var V = O[n ? z : ++y];
                        if (o(C[V], V, C) === !1) break
                    }
                    return r
                }
            }

            function u_(n, r, o) {
                var p = r & _, y = Fs(n);

                function C() {
                    var O = this && this !== je && this instanceof C ? y : n;
                    return O.apply(p ? o : this, arguments)
                }

                return C
            }

            function Eh(n) {
                return function (r) {
                    r = ge(r);
                    var o = Fr(r) ? $n(r) : e, p = o ? o[0] : r.charAt(0), y = o ? qi(o, 1).join("") : r.slice(1);
                    return p[n]() + y
                }
            }

            function kr(n) {
                return function (r) {
                    return Vo(Tf(wf(r).replace(tm, "")), n, "")
                }
            }

            function Fs(n) {
                return function () {
                    var r = arguments;
                    switch (r.length) {
                        case 0:
                            return new n;
                        case 1:
                            return new n(r[0]);
                        case 2:
                            return new n(r[0], r[1]);
                        case 3:
                            return new n(r[0], r[1], r[2]);
                        case 4:
                            return new n(r[0], r[1], r[2], r[3]);
                        case 5:
                            return new n(r[0], r[1], r[2], r[3], r[4]);
                        case 6:
                            return new n(r[0], r[1], r[2], r[3], r[4], r[5]);
                        case 7:
                            return new n(r[0], r[1], r[2], r[3], r[4], r[5], r[6])
                    }
                    var o = Wr(n.prototype), p = n.apply(o, r);
                    return Le(p) ? p : o
                }
            }

            function h_(n, r, o) {
                var p = Fs(n);

                function y() {
                    for (var C = arguments.length, O = $(C), z = C, V = Hr(y); z--;) O[z] = arguments[z];
                    var st = C < 3 && O[0] !== V && O[C - 1] !== V ? [] : Gi(O, V);
                    if (C -= st.length, C < o) return Rh(n, r, Da, y.placeholder, e, O, st, e, e, o - C);
                    var at = this && this !== je && this instanceof y ? p : n;
                    return xn(at, this, O)
                }

                return y
            }

            function Ah(n) {
                return function (r, o, p) {
                    var y = xe(r);
                    if (!pn(r)) {
                        var C = Gt(o, 3);
                        r = Ze(r), o = function (z) {
                            return C(y[z], z, y)
                        }
                    }
                    var O = n(r, o, p);
                    return O > -1 ? y[C ? r[O] : O] : e
                }
            }

            function Ch(n) {
                return vi(function (r) {
                    var o = r.length, p = o, y = In.prototype.thru;
                    for (n && r.reverse(); p--;) {
                        var C = r[p];
                        if (typeof C != "function") throw new Dn(u);
                        if (y && !O && Na(C) == "wrapper") var O = new In([], !0)
                    }
                    for (p = O ? p : o; ++p < o;) {
                        C = r[p];
                        var z = Na(C), V = z == "wrapper" ? Sl(C) : e;
                        V && El(V[0]) && V[1] == (B | T | E | w) && !V[4].length && V[9] == 1 ? O = O[Na(V[0])].apply(O, V[3]) : O = C.length == 1 && El(C) ? O[z]() : O.thru(C)
                    }
                    return function () {
                        var st = arguments, at = st[0];
                        if (O && st.length == 1 && Xt(at)) return O.plant(at).value();
                        for (var ct = 0, Mt = o ? r[ct].apply(this, st) : at; ++ct < o;) Mt = r[ct].call(this, Mt);
                        return Mt
                    }
                })
            }

            function Da(n, r, o, p, y, C, O, z, V, st) {
                var at = r & B, ct = r & _, Mt = r & S, Dt = r & (T | A), Wt = r & N, Jt = Mt ? e : Fs(n);

                function Vt() {
                    for (var ne = arguments.length, ae = $(ne), bn = ne; bn--;) ae[bn] = arguments[bn];
                    if (Dt) var un = Hr(Vt), wn = bm(ae, un);
                    if (p && (ae = Sh(ae, p, y, Dt)), C && (ae = bh(ae, C, O, Dt)), ne -= wn, Dt && ne < st) {
                        var Ue = Gi(ae, un);
                        return Rh(n, r, Da, Vt.placeholder, o, ae, Ue, z, V, st - ne)
                    }
                    var Kn = ct ? o : this, Si = Mt ? Kn[n] : n;
                    return ne = ae.length, z ? ae = R_(ae, z) : Wt && ne > 1 && ae.reverse(), at && V < ne && (ae.length = V), this && this !== je && this instanceof Vt && (Si = Jt || Fs(Si)), Si.apply(Kn, ae)
                }

                return Vt
            }

            function Lh(n, r) {
                return function (o, p) {
                    return Bg(o, n, r(p), {})
                }
            }

            function Ia(n, r) {
                return function (o, p) {
                    var y;
                    if (o === e && p === e) return r;
                    if (o !== e && (y = o), p !== e) {
                        if (y === e) return p;
                        typeof o == "string" || typeof p == "string" ? (o = Mn(o), p = Mn(p)) : (o = ph(o), p = ph(p)), y = n(o, p)
                    }
                    return y
                }
            }

            function vl(n) {
                return vi(function (r) {
                    return r = Ee(r, yn(Gt())), Kt(function (o) {
                        var p = this;
                        return n(r, function (y) {
                            return xn(y, p, o)
                        })
                    })
                })
            }

            function Oa(n, r) {
                r = r === e ? " " : Mn(r);
                var o = r.length;
                if (o < 2) return o ? hl(r, n) : r;
                var p = hl(r, ya(n / Nr(r)));
                return Fr(r) ? qi($n(p), 0, n).join("") : p.slice(0, n)
            }

            function f_(n, r, o, p) {
                var y = r & _, C = Fs(n);

                function O() {
                    for (var z = -1, V = arguments.length, st = -1, at = p.length, ct = $(at + V), Mt = this && this !== je && this instanceof O ? C : n; ++st < at;) ct[st] = p[st];
                    for (; V--;) ct[st++] = arguments[++z];
                    return xn(Mt, y ? o : this, ct)
                }

                return O
            }

            function Ph(n) {
                return function (r, o, p) {
                    return p && typeof p != "number" && cn(r, o, p) && (o = p = e), r = Mi(r), o === e ? (o = r, r = 0) : o = Mi(o), p = p === e ? r < o ? 1 : -1 : Mi(p), jg(r, o, p, n)
                }
            }

            function Fa(n) {
                return function (r, o) {
                    return typeof r == "string" && typeof o == "string" || (r = Un(r), o = Un(o)), n(r, o)
                }
            }

            function Rh(n, r, o, p, y, C, O, z, V, st) {
                var at = r & T, ct = at ? O : e, Mt = at ? e : O, Dt = at ? C : e, Wt = at ? e : C;
                r |= at ? E : D, r &= ~(at ? D : E), r & L || (r &= ~(_ | S));
                var Jt = [n, r, y, Dt, ct, Wt, Mt, z, V, st], Vt = o.apply(e, Jt);
                return El(n) && kh(Vt, Jt), Vt.placeholder = p, Hh(Vt, n, r)
            }

            function xl(n) {
                var r = We[n];
                return function (o, p) {
                    if (o = Un(o), p = p == null ? 0 : tn($t(p), 292), p && Hu(o)) {
                        var y = (ge(o) + "e").split("e"), C = r(y[0] + "e" + (+y[1] + p));
                        return y = (ge(C) + "e").split("e"), +(y[0] + "e" + (+y[1] - p))
                    }
                    return r(o)
                }
            }

            var d_ = Br && 1 / ua(new Br([, -0]))[1] == ut ? function (n) {
                return new Br(n)
            } : Wl;

            function Dh(n) {
                return function (r) {
                    var o = en(r);
                    return o == ce ? $o(r) : o == we ? Pm(r) : Sm(r, n(r))
                }
            }

            function _i(n, r, o, p, y, C, O, z) {
                var V = r & S;
                if (!V && typeof n != "function") throw new Dn(u);
                var st = p ? p.length : 0;
                if (st || (r &= ~(E | D), p = y = e), O = O === e ? O : Ve($t(O), 0), z = z === e ? z : $t(z), st -= y ? y.length : 0, r & D) {
                    var at = p, ct = y;
                    p = y = e
                }
                var Mt = V ? e : Sl(n), Dt = [n, r, o, p, y, at, ct, C, O, z];
                if (Mt && C_(Dt, Mt), n = Dt[0], r = Dt[1], o = Dt[2], p = Dt[3], y = Dt[4], z = Dt[9] = Dt[9] === e ? V ? 0 : n.length : Ve(Dt[9] - st, 0), !z && r & (T | A) && (r &= ~(T | A)), !r || r == _) var Wt = u_(n, r, o); else r == T || r == A ? Wt = h_(n, r, z) : (r == E || r == (_ | E)) && !y.length ? Wt = f_(n, r, o, p) : Wt = Da.apply(e, Dt);
                var Jt = Mt ? fh : kh;
                return Hh(Jt(Wt, Dt), n, r)
            }

            function Ih(n, r, o, p) {
                return n === e || jn(n, zr[o]) && !ve.call(p, o) ? r : n
            }

            function Oh(n, r, o, p, y, C) {
                return Le(n) && Le(r) && (C.set(r, n), Ca(n, r, e, Oh, C), C.delete(r)), n
            }

            function p_(n) {
                return zs(n) ? e : n
            }

            function Fh(n, r, o, p, y, C) {
                var O = o & M, z = n.length, V = r.length;
                if (z != V && !(O && V > z)) return !1;
                var st = C.get(n), at = C.get(r);
                if (st && at) return st == r && at == n;
                var ct = -1, Mt = !0, Dt = o & v ? new rr : e;
                for (C.set(n, r), C.set(r, n); ++ct < z;) {
                    var Wt = n[ct], Jt = r[ct];
                    if (p) var Vt = O ? p(Jt, Wt, ct, r, n, C) : p(Wt, Jt, ct, n, r, C);
                    if (Vt !== e) {
                        if (Vt) continue;
                        Mt = !1;
                        break
                    }
                    if (Dt) {
                        if (!ko(r, function (ne, ae) {
                            if (!ws(Dt, ae) && (Wt === ne || y(Wt, ne, o, p, C))) return Dt.push(ae)
                        })) {
                            Mt = !1;
                            break
                        }
                    } else if (!(Wt === Jt || y(Wt, Jt, o, p, C))) {
                        Mt = !1;
                        break
                    }
                }
                return C.delete(n), C.delete(r), Mt
            }

            function m_(n, r, o, p, y, C, O) {
                switch (o) {
                    case Ot:
                        if (n.byteLength != r.byteLength || n.byteOffset != r.byteOffset) return !1;
                        n = n.buffer, r = r.buffer;
                    case yt:
                        return !(n.byteLength != r.byteLength || !C(new ga(n), new ga(r)));
                    case zt:
                    case Bt:
                    case be:
                        return jn(+n, +r);
                    case oe:
                        return n.name == r.name && n.message == r.message;
                    case Xe:
                    case I:
                        return n == r + "";
                    case ce:
                        var z = $o;
                    case we:
                        var V = p & M;
                        if (z || (z = ua), n.size != r.size && !V) return !1;
                        var st = O.get(n);
                        if (st) return st == r;
                        p |= v, O.set(n, r);
                        var at = Fh(z(n), z(r), p, y, C, O);
                        return O.delete(n), at;
                    case P:
                        if (Ls) return Ls.call(n) == Ls.call(r)
                }
                return !1
            }

            function g_(n, r, o, p, y, C) {
                var O = o & M, z = yl(n), V = z.length, st = yl(r), at = st.length;
                if (V != at && !O) return !1;
                for (var ct = V; ct--;) {
                    var Mt = z[ct];
                    if (!(O ? Mt in r : ve.call(r, Mt))) return !1
                }
                var Dt = C.get(n), Wt = C.get(r);
                if (Dt && Wt) return Dt == r && Wt == n;
                var Jt = !0;
                C.set(n, r), C.set(r, n);
                for (var Vt = O; ++ct < V;) {
                    Mt = z[ct];
                    var ne = n[Mt], ae = r[Mt];
                    if (p) var bn = O ? p(ae, ne, Mt, r, n, C) : p(ne, ae, Mt, n, r, C);
                    if (!(bn === e ? ne === ae || y(ne, ae, o, p, C) : bn)) {
                        Jt = !1;
                        break
                    }
                    Vt || (Vt = Mt == "constructor")
                }
                if (Jt && !Vt) {
                    var un = n.constructor, wn = r.constructor;
                    un != wn && "constructor" in n && "constructor" in r && !(typeof un == "function" && un instanceof un && typeof wn == "function" && wn instanceof wn) && (Jt = !1)
                }
                return C.delete(n), C.delete(r), Jt
            }

            function vi(n) {
                return Cl(Wh(n, e, Jh), n + "")
            }

            function yl(n) {
                return eh(n, Ze, wl)
            }

            function Ml(n) {
                return eh(n, mn, Nh)
            }

            var Sl = Sa ? function (n) {
                return Sa.get(n)
            } : Wl;

            function Na(n) {
                for (var r = n.name + "", o = Gr[r], p = ve.call(Gr, r) ? o.length : 0; p--;) {
                    var y = o[p], C = y.func;
                    if (C == null || C == n) return y.name
                }
                return r
            }

            function Hr(n) {
                var r = ve.call(b, "placeholder") ? b : n;
                return r.placeholder
            }

            function Gt() {
                var n = b.iteratee || Bl;
                return n = n === Bl ? rh : n, arguments.length ? n(arguments[0], arguments[1]) : n
            }

            function Ua(n, r) {
                var o = n.__data__;
                return w_(r) ? o[typeof r == "string" ? "string" : "hash"] : o.map
            }

            function bl(n) {
                for (var r = Ze(n), o = r.length; o--;) {
                    var p = r[o], y = n[p];
                    r[o] = [p, y, Bh(y)]
                }
                return r
            }

            function or(n, r) {
                var o = Am(n, r);
                return ih(o) ? o : e
            }

            function __(n) {
                var r = ve.call(n, nr), o = n[nr];
                try {
                    n[nr] = e;
                    var p = !0
                } catch {
                }
                var y = pa.call(n);
                return p && (r ? n[nr] = o : delete n[nr]), y
            }

            var wl = jo ? function (n) {
                return n == null ? [] : (n = xe(n), zi(jo(n), function (r) {
                    return Vu.call(n, r)
                }))
            } : Vl, Nh = jo ? function (n) {
                for (var r = []; n;) Bi(r, wl(n)), n = _a(n);
                return r
            } : Vl, en = ln;
            (Ko && en(new Ko(new ArrayBuffer(1))) != Ot || Es && en(new Es) != ce || Qo && en(Qo.resolve()) != De || Br && en(new Br) != we || As && en(new As) != ft) && (en = function (n) {
                var r = ln(n), o = r == Ce ? n.constructor : e, p = o ? lr(o) : "";
                if (p) switch (p) {
                    case Qm:
                        return Ot;
                    case tg:
                        return ce;
                    case eg:
                        return De;
                    case ng:
                        return we;
                    case ig:
                        return ft
                }
                return r
            });

            function v_(n, r, o) {
                for (var p = -1, y = o.length; ++p < y;) {
                    var C = o[p], O = C.size;
                    switch (C.type) {
                        case"drop":
                            n += O;
                            break;
                        case"dropRight":
                            r -= O;
                            break;
                        case"take":
                            r = tn(r, n + O);
                            break;
                        case"takeRight":
                            n = Ve(n, r - O);
                            break
                    }
                }
                return {start: n, end: r}
            }

            function x_(n) {
                var r = n.match(Z);
                return r ? r[1].split(et) : []
            }

            function Uh(n, r, o) {
                r = Hi(r, n);
                for (var p = -1, y = r.length, C = !1; ++p < y;) {
                    var O = li(r[p]);
                    if (!(C = n != null && o(n, O))) break;
                    n = n[O]
                }
                return C || ++p != y ? C : (y = n == null ? 0 : n.length, !!y && Ha(y) && xi(O, y) && (Xt(n) || cr(n)))
            }

            function y_(n) {
                var r = n.length, o = new n.constructor(r);
                return r && typeof n[0] == "string" && ve.call(n, "index") && (o.index = n.index, o.input = n.input), o
            }

            function zh(n) {
                return typeof n.constructor == "function" && !Ns(n) ? Wr(_a(n)) : {}
            }

            function M_(n, r, o) {
                var p = n.constructor;
                switch (r) {
                    case yt:
                        return _l(n);
                    case zt:
                    case Bt:
                        return new p(+n);
                    case Ot:
                        return r_(n, o);
                    case U:
                    case H:
                    case bt:
                    case wt:
                    case St:
                    case Rt:
                    case Pt:
                    case jt:
                    case te:
                        return yh(n, o);
                    case ce:
                        return new p;
                    case be:
                    case I:
                        return new p(n);
                    case Xe:
                        return s_(n);
                    case we:
                        return new p;
                    case P:
                        return a_(n)
                }
            }

            function S_(n, r) {
                var o = r.length;
                if (!o) return n;
                var p = o - 1;
                return r[p] = (o > 1 ? "& " : "") + r[p], r = r.join(o > 2 ? ", " : " "), n.replace(R, `{
/* [wrapped with ` + r + `] */
`)
            }

            function b_(n) {
                return Xt(n) || cr(n) || !!(ku && n && n[ku])
            }

            function xi(n, r) {
                var o = typeof n;
                return r = r == null ? tt : r, !!r && (o == "number" || o != "symbol" && Te.test(n)) && n > -1 && n % 1 == 0 && n < r
            }

            function cn(n, r, o) {
                if (!Le(o)) return !1;
                var p = typeof r;
                return (p == "number" ? pn(o) && xi(r, o.length) : p == "string" && r in o) ? jn(o[r], n) : !1
            }

            function Tl(n, r) {
                if (Xt(n)) return !1;
                var o = typeof n;
                return o == "number" || o == "symbol" || o == "boolean" || n == null || Sn(n) ? !0 : Xn.test(n) || !ye.test(n) || r != null && n in xe(r)
            }

            function w_(n) {
                var r = typeof n;
                return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? n !== "__proto__" : n === null
            }

            function El(n) {
                var r = Na(n), o = b[r];
                if (typeof o != "function" || !(r in re.prototype)) return !1;
                if (n === o) return !0;
                var p = Sl(o);
                return !!p && n === p[0]
            }

            function T_(n) {
                return !!Bu && Bu in n
            }

            var E_ = fa ? yi : kl;

            function Ns(n) {
                var r = n && n.constructor, o = typeof r == "function" && r.prototype || zr;
                return n === o
            }

            function Bh(n) {
                return n === n && !Le(n)
            }

            function Gh(n, r) {
                return function (o) {
                    return o == null ? !1 : o[n] === r && (r !== e || n in xe(o))
                }
            }

            function A_(n) {
                var r = Va(n, function (p) {
                    return o.size === h && o.clear(), p
                }), o = r.cache;
                return r
            }

            function C_(n, r) {
                var o = n[1], p = r[1], y = o | p, C = y < (_ | S | B),
                    O = p == B && o == T || p == B && o == w && n[7].length <= r[8] || p == (B | w) && r[7].length <= r[8] && o == T;
                if (!(C || O)) return n;
                p & _ && (n[2] = r[2], y |= o & _ ? 0 : L);
                var z = r[3];
                if (z) {
                    var V = n[3];
                    n[3] = V ? Sh(V, z, r[4]) : z, n[4] = V ? Gi(n[3], d) : r[4]
                }
                return z = r[5], z && (V = n[5], n[5] = V ? bh(V, z, r[6]) : z, n[6] = V ? Gi(n[5], d) : r[6]), z = r[7], z && (n[7] = z), p & B && (n[8] = n[8] == null ? r[8] : tn(n[8], r[8])), n[9] == null && (n[9] = r[9]), n[0] = r[0], n[1] = y, n
            }

            function L_(n) {
                var r = [];
                if (n != null) for (var o in xe(n)) r.push(o);
                return r
            }

            function P_(n) {
                return pa.call(n)
            }

            function Wh(n, r, o) {
                return r = Ve(r === e ? n.length - 1 : r, 0), function () {
                    for (var p = arguments, y = -1, C = Ve(p.length - r, 0), O = $(C); ++y < C;) O[y] = p[r + y];
                    y = -1;
                    for (var z = $(r + 1); ++y < r;) z[y] = p[y];
                    return z[r] = o(O), xn(n, this, z)
                }
            }

            function Vh(n, r) {
                return r.length < 2 ? n : ar(n, Fn(r, 0, -1))
            }

            function R_(n, r) {
                for (var o = n.length, p = tn(r.length, o), y = dn(n); p--;) {
                    var C = r[p];
                    n[p] = xi(C, o) ? y[C] : e
                }
                return n
            }

            function Al(n, r) {
                if (!(r === "constructor" && typeof n[r] == "function") && r != "__proto__") return n[r]
            }

            var kh = qh(fh), Us = Xm || function (n, r) {
                return je.setTimeout(n, r)
            }, Cl = qh(t_);

            function Hh(n, r, o) {
                var p = r + "";
                return Cl(n, S_(p, D_(x_(p), o)))
            }

            function qh(n) {
                var r = 0, o = 0;
                return function () {
                    var p = Jm(), y = j - (p - o);
                    if (o = p, y > 0) {
                        if (++r >= vt) return arguments[0]
                    } else r = 0;
                    return n.apply(e, arguments)
                }
            }

            function za(n, r) {
                var o = -1, p = n.length, y = p - 1;
                for (r = r === e ? p : r; ++o < r;) {
                    var C = ul(o, y), O = n[C];
                    n[C] = n[o], n[o] = O
                }
                return n.length = r, n
            }

            var Xh = A_(function (n) {
                var r = [];
                return n.charCodeAt(0) === 46 && r.push(""), n.replace(fn, function (o, p, y, C) {
                    r.push(y ? C.replace(Nt, "$1") : p || o)
                }), r
            });

            function li(n) {
                if (typeof n == "string" || Sn(n)) return n;
                var r = n + "";
                return r == "0" && 1 / n == -ut ? "-0" : r
            }

            function lr(n) {
                if (n != null) {
                    try {
                        return da.call(n)
                    } catch {
                    }
                    try {
                        return n + ""
                    } catch {
                    }
                }
                return ""
            }

            function D_(n, r) {
                return Rn(Ct, function (o) {
                    var p = "_." + o[0];
                    r & o[1] && !la(n, p) && n.push(p)
                }), n.sort()
            }

            function Yh(n) {
                if (n instanceof re) return n.clone();
                var r = new In(n.__wrapped__, n.__chain__);
                return r.__actions__ = dn(n.__actions__), r.__index__ = n.__index__, r.__values__ = n.__values__, r
            }

            function I_(n, r, o) {
                (o ? cn(n, r, o) : r === e) ? r = 1 : r = Ve($t(r), 0);
                var p = n == null ? 0 : n.length;
                if (!p || r < 1) return [];
                for (var y = 0, C = 0, O = $(ya(p / r)); y < p;) O[C++] = Fn(n, y, y += r);
                return O
            }

            function O_(n) {
                for (var r = -1, o = n == null ? 0 : n.length, p = 0, y = []; ++r < o;) {
                    var C = n[r];
                    C && (y[p++] = C)
                }
                return y
            }

            function F_() {
                var n = arguments.length;
                if (!n) return [];
                for (var r = $(n - 1), o = arguments[0], p = n; p--;) r[p - 1] = arguments[p];
                return Bi(Xt(o) ? dn(o) : [o], Ke(r, 1))
            }

            var N_ = Kt(function (n, r) {
                return Ne(n) ? Rs(n, Ke(r, 1, Ne, !0)) : []
            }), U_ = Kt(function (n, r) {
                var o = Nn(r);
                return Ne(o) && (o = e), Ne(n) ? Rs(n, Ke(r, 1, Ne, !0), Gt(o, 2)) : []
            }), z_ = Kt(function (n, r) {
                var o = Nn(r);
                return Ne(o) && (o = e), Ne(n) ? Rs(n, Ke(r, 1, Ne, !0), e, o) : []
            });

            function B_(n, r, o) {
                var p = n == null ? 0 : n.length;
                return p ? (r = o || r === e ? 1 : $t(r), Fn(n, r < 0 ? 0 : r, p)) : []
            }

            function G_(n, r, o) {
                var p = n == null ? 0 : n.length;
                return p ? (r = o || r === e ? 1 : $t(r), r = p - r, Fn(n, 0, r < 0 ? 0 : r)) : []
            }

            function W_(n, r) {
                return n && n.length ? Pa(n, Gt(r, 3), !0, !0) : []
            }

            function V_(n, r) {
                return n && n.length ? Pa(n, Gt(r, 3), !0) : []
            }

            function k_(n, r, o, p) {
                var y = n == null ? 0 : n.length;
                return y ? (o && typeof o != "number" && cn(n, r, o) && (o = 0, p = y), Fg(n, r, o, p)) : []
            }

            function Zh(n, r, o) {
                var p = n == null ? 0 : n.length;
                if (!p) return -1;
                var y = o == null ? 0 : $t(o);
                return y < 0 && (y = Ve(p + y, 0)), ca(n, Gt(r, 3), y)
            }

            function $h(n, r, o) {
                var p = n == null ? 0 : n.length;
                if (!p) return -1;
                var y = p - 1;
                return o !== e && (y = $t(o), y = o < 0 ? Ve(p + y, 0) : tn(y, p - 1)), ca(n, Gt(r, 3), y, !0)
            }

            function Jh(n) {
                var r = n == null ? 0 : n.length;
                return r ? Ke(n, 1) : []
            }

            function H_(n) {
                var r = n == null ? 0 : n.length;
                return r ? Ke(n, ut) : []
            }

            function q_(n, r) {
                var o = n == null ? 0 : n.length;
                return o ? (r = r === e ? 1 : $t(r), Ke(n, r)) : []
            }

            function X_(n) {
                for (var r = -1, o = n == null ? 0 : n.length, p = {}; ++r < o;) {
                    var y = n[r];
                    p[y[0]] = y[1]
                }
                return p
            }

            function jh(n) {
                return n && n.length ? n[0] : e
            }

            function Y_(n, r, o) {
                var p = n == null ? 0 : n.length;
                if (!p) return -1;
                var y = o == null ? 0 : $t(o);
                return y < 0 && (y = Ve(p + y, 0)), Or(n, r, y)
            }

            function Z_(n) {
                var r = n == null ? 0 : n.length;
                return r ? Fn(n, 0, -1) : []
            }

            var $_ = Kt(function (n) {
                var r = Ee(n, ml);
                return r.length && r[0] === n[0] ? sl(r) : []
            }), J_ = Kt(function (n) {
                var r = Nn(n), o = Ee(n, ml);
                return r === Nn(o) ? r = e : o.pop(), o.length && o[0] === n[0] ? sl(o, Gt(r, 2)) : []
            }), j_ = Kt(function (n) {
                var r = Nn(n), o = Ee(n, ml);
                return r = typeof r == "function" ? r : e, r && o.pop(), o.length && o[0] === n[0] ? sl(o, e, r) : []
            });

            function K_(n, r) {
                return n == null ? "" : Zm.call(n, r)
            }

            function Nn(n) {
                var r = n == null ? 0 : n.length;
                return r ? n[r - 1] : e
            }

            function Q_(n, r, o) {
                var p = n == null ? 0 : n.length;
                if (!p) return -1;
                var y = p;
                return o !== e && (y = $t(o), y = y < 0 ? Ve(p + y, 0) : tn(y, p - 1)), r === r ? Dm(n, r, y) : ca(n, Ru, y, !0)
            }

            function t0(n, r) {
                return n && n.length ? lh(n, $t(r)) : e
            }

            var e0 = Kt(Kh);

            function Kh(n, r) {
                return n && n.length && r && r.length ? cl(n, r) : n
            }

            function n0(n, r, o) {
                return n && n.length && r && r.length ? cl(n, r, Gt(o, 2)) : n
            }

            function i0(n, r, o) {
                return n && n.length && r && r.length ? cl(n, r, e, o) : n
            }

            var r0 = vi(function (n, r) {
                var o = n == null ? 0 : n.length, p = el(n, r);
                return hh(n, Ee(r, function (y) {
                    return xi(y, o) ? +y : y
                }).sort(Mh)), p
            });

            function s0(n, r) {
                var o = [];
                if (!(n && n.length)) return o;
                var p = -1, y = [], C = n.length;
                for (r = Gt(r, 3); ++p < C;) {
                    var O = n[p];
                    r(O, p, n) && (o.push(O), y.push(p))
                }
                return hh(n, y), o
            }

            function Ll(n) {
                return n == null ? n : Km.call(n)
            }

            function a0(n, r, o) {
                var p = n == null ? 0 : n.length;
                return p ? (o && typeof o != "number" && cn(n, r, o) ? (r = 0, o = p) : (r = r == null ? 0 : $t(r), o = o === e ? p : $t(o)), Fn(n, r, o)) : []
            }

            function o0(n, r) {
                return La(n, r)
            }

            function l0(n, r, o) {
                return fl(n, r, Gt(o, 2))
            }

            function c0(n, r) {
                var o = n == null ? 0 : n.length;
                if (o) {
                    var p = La(n, r);
                    if (p < o && jn(n[p], r)) return p
                }
                return -1
            }

            function u0(n, r) {
                return La(n, r, !0)
            }

            function h0(n, r, o) {
                return fl(n, r, Gt(o, 2), !0)
            }

            function f0(n, r) {
                var o = n == null ? 0 : n.length;
                if (o) {
                    var p = La(n, r, !0) - 1;
                    if (jn(n[p], r)) return p
                }
                return -1
            }

            function d0(n) {
                return n && n.length ? dh(n) : []
            }

            function p0(n, r) {
                return n && n.length ? dh(n, Gt(r, 2)) : []
            }

            function m0(n) {
                var r = n == null ? 0 : n.length;
                return r ? Fn(n, 1, r) : []
            }

            function g0(n, r, o) {
                return n && n.length ? (r = o || r === e ? 1 : $t(r), Fn(n, 0, r < 0 ? 0 : r)) : []
            }

            function _0(n, r, o) {
                var p = n == null ? 0 : n.length;
                return p ? (r = o || r === e ? 1 : $t(r), r = p - r, Fn(n, r < 0 ? 0 : r, p)) : []
            }

            function v0(n, r) {
                return n && n.length ? Pa(n, Gt(r, 3), !1, !0) : []
            }

            function x0(n, r) {
                return n && n.length ? Pa(n, Gt(r, 3)) : []
            }

            var y0 = Kt(function (n) {
                return ki(Ke(n, 1, Ne, !0))
            }), M0 = Kt(function (n) {
                var r = Nn(n);
                return Ne(r) && (r = e), ki(Ke(n, 1, Ne, !0), Gt(r, 2))
            }), S0 = Kt(function (n) {
                var r = Nn(n);
                return r = typeof r == "function" ? r : e, ki(Ke(n, 1, Ne, !0), e, r)
            });

            function b0(n) {
                return n && n.length ? ki(n) : []
            }

            function w0(n, r) {
                return n && n.length ? ki(n, Gt(r, 2)) : []
            }

            function T0(n, r) {
                return r = typeof r == "function" ? r : e, n && n.length ? ki(n, e, r) : []
            }

            function Pl(n) {
                if (!(n && n.length)) return [];
                var r = 0;
                return n = zi(n, function (o) {
                    if (Ne(o)) return r = Ve(o.length, r), !0
                }), Yo(r, function (o) {
                    return Ee(n, Ho(o))
                })
            }

            function Qh(n, r) {
                if (!(n && n.length)) return [];
                var o = Pl(n);
                return r == null ? o : Ee(o, function (p) {
                    return xn(r, e, p)
                })
            }

            var E0 = Kt(function (n, r) {
                return Ne(n) ? Rs(n, r) : []
            }), A0 = Kt(function (n) {
                return pl(zi(n, Ne))
            }), C0 = Kt(function (n) {
                var r = Nn(n);
                return Ne(r) && (r = e), pl(zi(n, Ne), Gt(r, 2))
            }), L0 = Kt(function (n) {
                var r = Nn(n);
                return r = typeof r == "function" ? r : e, pl(zi(n, Ne), e, r)
            }), P0 = Kt(Pl);

            function R0(n, r) {
                return _h(n || [], r || [], Ps)
            }

            function D0(n, r) {
                return _h(n || [], r || [], Os)
            }

            var I0 = Kt(function (n) {
                var r = n.length, o = r > 1 ? n[r - 1] : e;
                return o = typeof o == "function" ? (n.pop(), o) : e, Qh(n, o)
            });

            function tf(n) {
                var r = b(n);
                return r.__chain__ = !0, r
            }

            function O0(n, r) {
                return r(n), n
            }

            function Ba(n, r) {
                return r(n)
            }

            var F0 = vi(function (n) {
                var r = n.length, o = r ? n[0] : 0, p = this.__wrapped__, y = function (C) {
                    return el(C, n)
                };
                return r > 1 || this.__actions__.length || !(p instanceof re) || !xi(o) ? this.thru(y) : (p = p.slice(o, +o + (r ? 1 : 0)), p.__actions__.push({
                    func: Ba,
                    args: [y],
                    thisArg: e
                }), new In(p, this.__chain__).thru(function (C) {
                    return r && !C.length && C.push(e), C
                }))
            });

            function N0() {
                return tf(this)
            }

            function U0() {
                return new In(this.value(), this.__chain__)
            }

            function z0() {
                this.__values__ === e && (this.__values__ = mf(this.value()));
                var n = this.__index__ >= this.__values__.length, r = n ? e : this.__values__[this.__index__++];
                return {done: n, value: r}
            }

            function B0() {
                return this
            }

            function G0(n) {
                for (var r, o = this; o instanceof wa;) {
                    var p = Yh(o);
                    p.__index__ = 0, p.__values__ = e, r ? y.__wrapped__ = p : r = p;
                    var y = p;
                    o = o.__wrapped__
                }
                return y.__wrapped__ = n, r
            }

            function W0() {
                var n = this.__wrapped__;
                if (n instanceof re) {
                    var r = n;
                    return this.__actions__.length && (r = new re(this)), r = r.reverse(), r.__actions__.push({
                        func: Ba,
                        args: [Ll],
                        thisArg: e
                    }), new In(r, this.__chain__)
                }
                return this.thru(Ll)
            }

            function V0() {
                return gh(this.__wrapped__, this.__actions__)
            }

            var k0 = Ra(function (n, r, o) {
                ve.call(n, o) ? ++n[o] : gi(n, o, 1)
            });

            function H0(n, r, o) {
                var p = Xt(n) ? Lu : Og;
                return o && cn(n, r, o) && (r = e), p(n, Gt(r, 3))
            }

            function q0(n, r) {
                var o = Xt(n) ? zi : Qu;
                return o(n, Gt(r, 3))
            }

            var X0 = Ah(Zh), Y0 = Ah($h);

            function Z0(n, r) {
                return Ke(Ga(n, r), 1)
            }

            function $0(n, r) {
                return Ke(Ga(n, r), ut)
            }

            function J0(n, r, o) {
                return o = o === e ? 1 : $t(o), Ke(Ga(n, r), o)
            }

            function ef(n, r) {
                var o = Xt(n) ? Rn : Vi;
                return o(n, Gt(r, 3))
            }

            function nf(n, r) {
                var o = Xt(n) ? mm : Ku;
                return o(n, Gt(r, 3))
            }

            var j0 = Ra(function (n, r, o) {
                ve.call(n, o) ? n[o].push(r) : gi(n, o, [r])
            });

            function K0(n, r, o, p) {
                n = pn(n) ? n : Xr(n), o = o && !p ? $t(o) : 0;
                var y = n.length;
                return o < 0 && (o = Ve(y + o, 0)), qa(n) ? o <= y && n.indexOf(r, o) > -1 : !!y && Or(n, r, o) > -1
            }

            var Q0 = Kt(function (n, r, o) {
                var p = -1, y = typeof r == "function", C = pn(n) ? $(n.length) : [];
                return Vi(n, function (O) {
                    C[++p] = y ? xn(r, O, o) : Ds(O, r, o)
                }), C
            }), tv = Ra(function (n, r, o) {
                gi(n, o, r)
            });

            function Ga(n, r) {
                var o = Xt(n) ? Ee : sh;
                return o(n, Gt(r, 3))
            }

            function ev(n, r, o, p) {
                return n == null ? [] : (Xt(r) || (r = r == null ? [] : [r]), o = p ? e : o, Xt(o) || (o = o == null ? [] : [o]), ch(n, r, o))
            }

            var nv = Ra(function (n, r, o) {
                n[o ? 0 : 1].push(r)
            }, function () {
                return [[], []]
            });

            function iv(n, r, o) {
                var p = Xt(n) ? Vo : Iu, y = arguments.length < 3;
                return p(n, Gt(r, 4), o, y, Vi)
            }

            function rv(n, r, o) {
                var p = Xt(n) ? gm : Iu, y = arguments.length < 3;
                return p(n, Gt(r, 4), o, y, Ku)
            }

            function sv(n, r) {
                var o = Xt(n) ? zi : Qu;
                return o(n, ka(Gt(r, 3)))
            }

            function av(n) {
                var r = Xt(n) ? Zu : Kg;
                return r(n)
            }

            function ov(n, r, o) {
                (o ? cn(n, r, o) : r === e) ? r = 1 : r = $t(r);
                var p = Xt(n) ? Lg : Qg;
                return p(n, r)
            }

            function lv(n) {
                var r = Xt(n) ? Pg : e_;
                return r(n)
            }

            function cv(n) {
                if (n == null) return 0;
                if (pn(n)) return qa(n) ? Nr(n) : n.length;
                var r = en(n);
                return r == ce || r == we ? n.size : ol(n).length
            }

            function uv(n, r, o) {
                var p = Xt(n) ? ko : n_;
                return o && cn(n, r, o) && (r = e), p(n, Gt(r, 3))
            }

            var hv = Kt(function (n, r) {
                if (n == null) return [];
                var o = r.length;
                return o > 1 && cn(n, r[0], r[1]) ? r = [] : o > 2 && cn(r[0], r[1], r[2]) && (r = [r[0]]), ch(n, Ke(r, 1), [])
            }), Wa = qm || function () {
                return je.Date.now()
            };

            function fv(n, r) {
                if (typeof r != "function") throw new Dn(u);
                return n = $t(n), function () {
                    if (--n < 1) return r.apply(this, arguments)
                }
            }

            function rf(n, r, o) {
                return r = o ? e : r, r = n && r == null ? n.length : r, _i(n, B, e, e, e, e, r)
            }

            function sf(n, r) {
                var o;
                if (typeof r != "function") throw new Dn(u);
                return n = $t(n), function () {
                    return --n > 0 && (o = r.apply(this, arguments)), n <= 1 && (r = e), o
                }
            }

            var Rl = Kt(function (n, r, o) {
                var p = _;
                if (o.length) {
                    var y = Gi(o, Hr(Rl));
                    p |= E
                }
                return _i(n, p, r, o, y)
            }), af = Kt(function (n, r, o) {
                var p = _ | S;
                if (o.length) {
                    var y = Gi(o, Hr(af));
                    p |= E
                }
                return _i(r, p, n, o, y)
            });

            function of(n, r, o) {
                r = o ? e : r;
                var p = _i(n, T, e, e, e, e, e, r);
                return p.placeholder = of.placeholder, p
            }

            function lf(n, r, o) {
                r = o ? e : r;
                var p = _i(n, A, e, e, e, e, e, r);
                return p.placeholder = lf.placeholder, p
            }

            function cf(n, r, o) {
                var p, y, C, O, z, V, st = 0, at = !1, ct = !1, Mt = !0;
                if (typeof n != "function") throw new Dn(u);
                r = Un(r) || 0, Le(o) && (at = !!o.leading, ct = "maxWait" in o, C = ct ? Ve(Un(o.maxWait) || 0, r) : C, Mt = "trailing" in o ? !!o.trailing : Mt);

                function Dt(Ue) {
                    var Kn = p, Si = y;
                    return p = y = e, st = Ue, O = n.apply(Si, Kn), O
                }

                function Wt(Ue) {
                    return st = Ue, z = Us(ne, r), at ? Dt(Ue) : O
                }

                function Jt(Ue) {
                    var Kn = Ue - V, Si = Ue - st, Cf = r - Kn;
                    return ct ? tn(Cf, C - Si) : Cf
                }

                function Vt(Ue) {
                    var Kn = Ue - V, Si = Ue - st;
                    return V === e || Kn >= r || Kn < 0 || ct && Si >= C
                }

                function ne() {
                    var Ue = Wa();
                    if (Vt(Ue)) return ae(Ue);
                    z = Us(ne, Jt(Ue))
                }

                function ae(Ue) {
                    return z = e, Mt && p ? Dt(Ue) : (p = y = e, O)
                }

                function bn() {
                    z !== e && vh(z), st = 0, p = V = y = z = e
                }

                function un() {
                    return z === e ? O : ae(Wa())
                }

                function wn() {
                    var Ue = Wa(), Kn = Vt(Ue);
                    if (p = arguments, y = this, V = Ue, Kn) {
                        if (z === e) return Wt(V);
                        if (ct) return vh(z), z = Us(ne, r), Dt(V)
                    }
                    return z === e && (z = Us(ne, r)), O
                }

                return wn.cancel = bn, wn.flush = un, wn
            }

            var dv = Kt(function (n, r) {
                return ju(n, 1, r)
            }), pv = Kt(function (n, r, o) {
                return ju(n, Un(r) || 0, o)
            });

            function mv(n) {
                return _i(n, N)
            }

            function Va(n, r) {
                if (typeof n != "function" || r != null && typeof r != "function") throw new Dn(u);
                var o = function () {
                    var p = arguments, y = r ? r.apply(this, p) : p[0], C = o.cache;
                    if (C.has(y)) return C.get(y);
                    var O = n.apply(this, p);
                    return o.cache = C.set(y, O) || C, O
                };
                return o.cache = new (Va.Cache || mi), o
            }

            Va.Cache = mi;

            function ka(n) {
                if (typeof n != "function") throw new Dn(u);
                return function () {
                    var r = arguments;
                    switch (r.length) {
                        case 0:
                            return !n.call(this);
                        case 1:
                            return !n.call(this, r[0]);
                        case 2:
                            return !n.call(this, r[0], r[1]);
                        case 3:
                            return !n.call(this, r[0], r[1], r[2])
                    }
                    return !n.apply(this, r)
                }
            }

            function gv(n) {
                return sf(2, n)
            }

            var _v = i_(function (n, r) {
                r = r.length == 1 && Xt(r[0]) ? Ee(r[0], yn(Gt())) : Ee(Ke(r, 1), yn(Gt()));
                var o = r.length;
                return Kt(function (p) {
                    for (var y = -1, C = tn(p.length, o); ++y < C;) p[y] = r[y].call(this, p[y]);
                    return xn(n, this, p)
                })
            }), Dl = Kt(function (n, r) {
                var o = Gi(r, Hr(Dl));
                return _i(n, E, e, r, o)
            }), uf = Kt(function (n, r) {
                var o = Gi(r, Hr(uf));
                return _i(n, D, e, r, o)
            }), vv = vi(function (n, r) {
                return _i(n, w, e, e, e, r)
            });

            function xv(n, r) {
                if (typeof n != "function") throw new Dn(u);
                return r = r === e ? r : $t(r), Kt(n, r)
            }

            function yv(n, r) {
                if (typeof n != "function") throw new Dn(u);
                return r = r == null ? 0 : Ve($t(r), 0), Kt(function (o) {
                    var p = o[r], y = qi(o, 0, r);
                    return p && Bi(y, p), xn(n, this, y)
                })
            }

            function Mv(n, r, o) {
                var p = !0, y = !0;
                if (typeof n != "function") throw new Dn(u);
                return Le(o) && (p = "leading" in o ? !!o.leading : p, y = "trailing" in o ? !!o.trailing : y), cf(n, r, {
                    leading: p,
                    maxWait: r,
                    trailing: y
                })
            }

            function Sv(n) {
                return rf(n, 1)
            }

            function bv(n, r) {
                return Dl(gl(r), n)
            }

            function wv() {
                if (!arguments.length) return [];
                var n = arguments[0];
                return Xt(n) ? n : [n]
            }

            function Tv(n) {
                return On(n, x)
            }

            function Ev(n, r) {
                return r = typeof r == "function" ? r : e, On(n, x, r)
            }

            function Av(n) {
                return On(n, m | x)
            }

            function Cv(n, r) {
                return r = typeof r == "function" ? r : e, On(n, m | x, r)
            }

            function Lv(n, r) {
                return r == null || Ju(n, r, Ze(r))
            }

            function jn(n, r) {
                return n === r || n !== n && r !== r
            }

            var Pv = Fa(rl), Rv = Fa(function (n, r) {
                return n >= r
            }), cr = nh(function () {
                return arguments
            }()) ? nh : function (n) {
                return Oe(n) && ve.call(n, "callee") && !Vu.call(n, "callee")
            }, Xt = $.isArray, Dv = bu ? yn(bu) : Gg;

            function pn(n) {
                return n != null && Ha(n.length) && !yi(n)
            }

            function Ne(n) {
                return Oe(n) && pn(n)
            }

            function Iv(n) {
                return n === !0 || n === !1 || Oe(n) && ln(n) == zt
            }

            var Xi = Ym || kl, Ov = wu ? yn(wu) : Wg;

            function Fv(n) {
                return Oe(n) && n.nodeType === 1 && !zs(n)
            }

            function Nv(n) {
                if (n == null) return !0;
                if (pn(n) && (Xt(n) || typeof n == "string" || typeof n.splice == "function" || Xi(n) || qr(n) || cr(n))) return !n.length;
                var r = en(n);
                if (r == ce || r == we) return !n.size;
                if (Ns(n)) return !ol(n).length;
                for (var o in n) if (ve.call(n, o)) return !1;
                return !0
            }

            function Uv(n, r) {
                return Is(n, r)
            }

            function zv(n, r, o) {
                o = typeof o == "function" ? o : e;
                var p = o ? o(n, r) : e;
                return p === e ? Is(n, r, e, o) : !!p
            }

            function Il(n) {
                if (!Oe(n)) return !1;
                var r = ln(n);
                return r == oe || r == At || typeof n.message == "string" && typeof n.name == "string" && !zs(n)
            }

            function Bv(n) {
                return typeof n == "number" && Hu(n)
            }

            function yi(n) {
                if (!Le(n)) return !1;
                var r = ln(n);
                return r == Ht || r == Ft || r == le || r == de
            }

            function hf(n) {
                return typeof n == "number" && n == $t(n)
            }

            function Ha(n) {
                return typeof n == "number" && n > -1 && n % 1 == 0 && n <= tt
            }

            function Le(n) {
                var r = typeof n;
                return n != null && (r == "object" || r == "function")
            }

            function Oe(n) {
                return n != null && typeof n == "object"
            }

            var ff = Tu ? yn(Tu) : kg;

            function Gv(n, r) {
                return n === r || al(n, r, bl(r))
            }

            function Wv(n, r, o) {
                return o = typeof o == "function" ? o : e, al(n, r, bl(r), o)
            }

            function Vv(n) {
                return df(n) && n != +n
            }

            function kv(n) {
                if (E_(n)) throw new qt(a);
                return ih(n)
            }

            function Hv(n) {
                return n === null
            }

            function qv(n) {
                return n == null
            }

            function df(n) {
                return typeof n == "number" || Oe(n) && ln(n) == be
            }

            function zs(n) {
                if (!Oe(n) || ln(n) != Ce) return !1;
                var r = _a(n);
                if (r === null) return !0;
                var o = ve.call(r, "constructor") && r.constructor;
                return typeof o == "function" && o instanceof o && da.call(o) == Wm
            }

            var Ol = Eu ? yn(Eu) : Hg;

            function Xv(n) {
                return hf(n) && n >= -tt && n <= tt
            }

            var pf = Au ? yn(Au) : qg;

            function qa(n) {
                return typeof n == "string" || !Xt(n) && Oe(n) && ln(n) == I
            }

            function Sn(n) {
                return typeof n == "symbol" || Oe(n) && ln(n) == P
            }

            var qr = Cu ? yn(Cu) : Xg;

            function Yv(n) {
                return n === e
            }

            function Zv(n) {
                return Oe(n) && en(n) == ft
            }

            function $v(n) {
                return Oe(n) && ln(n) == _t
            }

            var Jv = Fa(ll), jv = Fa(function (n, r) {
                return n <= r
            });

            function mf(n) {
                if (!n) return [];
                if (pn(n)) return qa(n) ? $n(n) : dn(n);
                if (Ts && n[Ts]) return Lm(n[Ts]());
                var r = en(n), o = r == ce ? $o : r == we ? ua : Xr;
                return o(n)
            }

            function Mi(n) {
                if (!n) return n === 0 ? n : 0;
                if (n = Un(n), n === ut || n === -ut) {
                    var r = n < 0 ? -1 : 1;
                    return r * Y
                }
                return n === n ? n : 0
            }

            function $t(n) {
                var r = Mi(n), o = r % 1;
                return r === r ? o ? r - o : r : 0
            }

            function gf(n) {
                return n ? sr($t(n), 0, ht) : 0
            }

            function Un(n) {
                if (typeof n == "number") return n;
                if (Sn(n)) return J;
                if (Le(n)) {
                    var r = typeof n.valueOf == "function" ? n.valueOf() : n;
                    n = Le(r) ? r + "" : r
                }
                if (typeof n != "string") return n === 0 ? n : +n;
                n = Ou(n);
                var o = he.test(n);
                return o || se.test(n) ? fm(n.slice(2), o ? 2 : 8) : Zt.test(n) ? J : +n
            }

            function _f(n) {
                return oi(n, mn(n))
            }

            function Kv(n) {
                return n ? sr($t(n), -tt, tt) : n === 0 ? n : 0
            }

            function ge(n) {
                return n == null ? "" : Mn(n)
            }

            var Qv = Vr(function (n, r) {
                if (Ns(r) || pn(r)) {
                    oi(r, Ze(r), n);
                    return
                }
                for (var o in r) ve.call(r, o) && Ps(n, o, r[o])
            }), vf = Vr(function (n, r) {
                oi(r, mn(r), n)
            }), Xa = Vr(function (n, r, o, p) {
                oi(r, mn(r), n, p)
            }), tx = Vr(function (n, r, o, p) {
                oi(r, Ze(r), n, p)
            }), ex = vi(el);

            function nx(n, r) {
                var o = Wr(n);
                return r == null ? o : $u(o, r)
            }

            var ix = Kt(function (n, r) {
                n = xe(n);
                var o = -1, p = r.length, y = p > 2 ? r[2] : e;
                for (y && cn(r[0], r[1], y) && (p = 1); ++o < p;) for (var C = r[o], O = mn(C), z = -1, V = O.length; ++z < V;) {
                    var st = O[z], at = n[st];
                    (at === e || jn(at, zr[st]) && !ve.call(n, st)) && (n[st] = C[st])
                }
                return n
            }), rx = Kt(function (n) {
                return n.push(e, Oh), xn(xf, e, n)
            });

            function sx(n, r) {
                return Pu(n, Gt(r, 3), ai)
            }

            function ax(n, r) {
                return Pu(n, Gt(r, 3), il)
            }

            function ox(n, r) {
                return n == null ? n : nl(n, Gt(r, 3), mn)
            }

            function lx(n, r) {
                return n == null ? n : th(n, Gt(r, 3), mn)
            }

            function cx(n, r) {
                return n && ai(n, Gt(r, 3))
            }

            function ux(n, r) {
                return n && il(n, Gt(r, 3))
            }

            function hx(n) {
                return n == null ? [] : Aa(n, Ze(n))
            }

            function fx(n) {
                return n == null ? [] : Aa(n, mn(n))
            }

            function Fl(n, r, o) {
                var p = n == null ? e : ar(n, r);
                return p === e ? o : p
            }

            function dx(n, r) {
                return n != null && Uh(n, r, Ng)
            }

            function Nl(n, r) {
                return n != null && Uh(n, r, Ug)
            }

            var px = Lh(function (n, r, o) {
                r != null && typeof r.toString != "function" && (r = pa.call(r)), n[r] = o
            }, zl(gn)), mx = Lh(function (n, r, o) {
                r != null && typeof r.toString != "function" && (r = pa.call(r)), ve.call(n, r) ? n[r].push(o) : n[r] = [o]
            }, Gt), gx = Kt(Ds);

            function Ze(n) {
                return pn(n) ? Yu(n) : ol(n)
            }

            function mn(n) {
                return pn(n) ? Yu(n, !0) : Yg(n)
            }

            function _x(n, r) {
                var o = {};
                return r = Gt(r, 3), ai(n, function (p, y, C) {
                    gi(o, r(p, y, C), p)
                }), o
            }

            function vx(n, r) {
                var o = {};
                return r = Gt(r, 3), ai(n, function (p, y, C) {
                    gi(o, y, r(p, y, C))
                }), o
            }

            var xx = Vr(function (n, r, o) {
                Ca(n, r, o)
            }), xf = Vr(function (n, r, o, p) {
                Ca(n, r, o, p)
            }), yx = vi(function (n, r) {
                var o = {};
                if (n == null) return o;
                var p = !1;
                r = Ee(r, function (C) {
                    return C = Hi(C, n), p || (p = C.length > 1), C
                }), oi(n, Ml(n), o), p && (o = On(o, m | g | x, p_));
                for (var y = r.length; y--;) dl(o, r[y]);
                return o
            });

            function Mx(n, r) {
                return yf(n, ka(Gt(r)))
            }

            var Sx = vi(function (n, r) {
                return n == null ? {} : $g(n, r)
            });

            function yf(n, r) {
                if (n == null) return {};
                var o = Ee(Ml(n), function (p) {
                    return [p]
                });
                return r = Gt(r), uh(n, o, function (p, y) {
                    return r(p, y[0])
                })
            }

            function bx(n, r, o) {
                r = Hi(r, n);
                var p = -1, y = r.length;
                for (y || (y = 1, n = e); ++p < y;) {
                    var C = n == null ? e : n[li(r[p])];
                    C === e && (p = y, C = o), n = yi(C) ? C.call(n) : C
                }
                return n
            }

            function wx(n, r, o) {
                return n == null ? n : Os(n, r, o)
            }

            function Tx(n, r, o, p) {
                return p = typeof p == "function" ? p : e, n == null ? n : Os(n, r, o, p)
            }

            var Mf = Dh(Ze), Sf = Dh(mn);

            function Ex(n, r, o) {
                var p = Xt(n), y = p || Xi(n) || qr(n);
                if (r = Gt(r, 4), o == null) {
                    var C = n && n.constructor;
                    y ? o = p ? new C : [] : Le(n) ? o = yi(C) ? Wr(_a(n)) : {} : o = {}
                }
                return (y ? Rn : ai)(n, function (O, z, V) {
                    return r(o, O, z, V)
                }), o
            }

            function Ax(n, r) {
                return n == null ? !0 : dl(n, r)
            }

            function Cx(n, r, o) {
                return n == null ? n : mh(n, r, gl(o))
            }

            function Lx(n, r, o, p) {
                return p = typeof p == "function" ? p : e, n == null ? n : mh(n, r, gl(o), p)
            }

            function Xr(n) {
                return n == null ? [] : Zo(n, Ze(n))
            }

            function Px(n) {
                return n == null ? [] : Zo(n, mn(n))
            }

            function Rx(n, r, o) {
                return o === e && (o = r, r = e), o !== e && (o = Un(o), o = o === o ? o : 0), r !== e && (r = Un(r), r = r === r ? r : 0), sr(Un(n), r, o)
            }

            function Dx(n, r, o) {
                return r = Mi(r), o === e ? (o = r, r = 0) : o = Mi(o), n = Un(n), zg(n, r, o)
            }

            function Ix(n, r, o) {
                if (o && typeof o != "boolean" && cn(n, r, o) && (r = o = e), o === e && (typeof r == "boolean" ? (o = r, r = e) : typeof n == "boolean" && (o = n, n = e)), n === e && r === e ? (n = 0, r = 1) : (n = Mi(n), r === e ? (r = n, n = 0) : r = Mi(r)), n > r) {
                    var p = n;
                    n = r, r = p
                }
                if (o || n % 1 || r % 1) {
                    var y = qu();
                    return tn(n + y * (r - n + hm("1e-" + ((y + "").length - 1))), r)
                }
                return ul(n, r)
            }

            var Ox = kr(function (n, r, o) {
                return r = r.toLowerCase(), n + (o ? bf(r) : r)
            });

            function bf(n) {
                return Ul(ge(n).toLowerCase())
            }

            function wf(n) {
                return n = ge(n), n && n.replace(fi, wm).replace(em, "")
            }

            function Fx(n, r, o) {
                n = ge(n), r = Mn(r);
                var p = n.length;
                o = o === e ? p : sr($t(o), 0, p);
                var y = o;
                return o -= r.length, o >= 0 && n.slice(o, y) == r
            }

            function Nx(n) {
                return n = ge(n), n && ue.test(n) ? n.replace(Tt, Tm) : n
            }

            function Ux(n) {
                return n = ge(n), n && Io.test(n) ? n.replace(Pr, "\\$&") : n
            }

            var zx = kr(function (n, r, o) {
                return n + (o ? "-" : "") + r.toLowerCase()
            }), Bx = kr(function (n, r, o) {
                return n + (o ? " " : "") + r.toLowerCase()
            }), Gx = Eh("toLowerCase");

            function Wx(n, r, o) {
                n = ge(n), r = $t(r);
                var p = r ? Nr(n) : 0;
                if (!r || p >= r) return n;
                var y = (r - p) / 2;
                return Oa(Ma(y), o) + n + Oa(ya(y), o)
            }

            function Vx(n, r, o) {
                n = ge(n), r = $t(r);
                var p = r ? Nr(n) : 0;
                return r && p < r ? n + Oa(r - p, o) : n
            }

            function kx(n, r, o) {
                n = ge(n), r = $t(r);
                var p = r ? Nr(n) : 0;
                return r && p < r ? Oa(r - p, o) + n : n
            }

            function Hx(n, r, o) {
                return o || r == null ? r = 0 : r && (r = +r), jm(ge(n).replace(Ms, ""), r || 0)
            }

            function qx(n, r, o) {
                return (o ? cn(n, r, o) : r === e) ? r = 1 : r = $t(r), hl(ge(n), r)
            }

            function Xx() {
                var n = arguments, r = ge(n[0]);
                return n.length < 3 ? r : r.replace(n[1], n[2])
            }

            var Yx = kr(function (n, r, o) {
                return n + (o ? "_" : "") + r.toLowerCase()
            });

            function Zx(n, r, o) {
                return o && typeof o != "number" && cn(n, r, o) && (r = o = e), o = o === e ? ht : o >>> 0, o ? (n = ge(n), n && (typeof r == "string" || r != null && !Ol(r)) && (r = Mn(r), !r && Fr(n)) ? qi($n(n), 0, o) : n.split(r, o)) : []
            }

            var $x = kr(function (n, r, o) {
                return n + (o ? " " : "") + Ul(r)
            });

            function Jx(n, r, o) {
                return n = ge(n), o = o == null ? 0 : sr($t(o), 0, n.length), r = Mn(r), n.slice(o, o + r.length) == r
            }

            function jx(n, r, o) {
                var p = b.templateSettings;
                o && cn(n, r, o) && (r = e), n = ge(n), r = Xa({}, r, p, Ih);
                var y = Xa({}, r.imports, p.imports, Ih), C = Ze(y), O = Zo(y, C), z, V, st = 0,
                    at = r.interpolate || Yn, ct = "__p += '",
                    Mt = Jo((r.escape || Yn).source + "|" + at.source + "|" + (at === si ? kt : Yn).source + "|" + (r.evaluate || Yn).source + "|$", "g"),
                    Dt = "//# sourceURL=" + (ve.call(r, "sourceURL") ? (r.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++am + "]") + `
`;
                n.replace(Mt, function (Vt, ne, ae, bn, un, wn) {
                    return ae || (ae = bn), ct += n.slice(st, wn).replace(Fi, Em), ne && (z = !0, ct += `' +
__e(` + ne + `) +
'`), un && (V = !0, ct += `';
` + un + `;
__p += '`), ae && (ct += `' +
((__t = (` + ae + `)) == null ? '' : __t) +
'`), st = wn + Vt.length, Vt
                }), ct += `';
`;
                var Wt = ve.call(r, "variable") && r.variable;
                if (!Wt) ct = `with (obj) {
` + ct + `
}
`; else if (it.test(Wt)) throw new qt(l);
                ct = (V ? ct.replace(me, "") : ct).replace(G, "$1").replace(nt, "$1;"), ct = "function(" + (Wt || "obj") + `) {
` + (Wt ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (z ? ", __e = _.escape" : "") + (V ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ct + `return __p
}`;
                var Jt = Ef(function () {
                    return pe(C, Dt + "return " + ct).apply(e, O)
                });
                if (Jt.source = ct, Il(Jt)) throw Jt;
                return Jt
            }

            function Kx(n) {
                return ge(n).toLowerCase()
            }

            function Qx(n) {
                return ge(n).toUpperCase()
            }

            function ty(n, r, o) {
                if (n = ge(n), n && (o || r === e)) return Ou(n);
                if (!n || !(r = Mn(r))) return n;
                var p = $n(n), y = $n(r), C = Fu(p, y), O = Nu(p, y) + 1;
                return qi(p, C, O).join("")
            }

            function ey(n, r, o) {
                if (n = ge(n), n && (o || r === e)) return n.slice(0, zu(n) + 1);
                if (!n || !(r = Mn(r))) return n;
                var p = $n(n), y = Nu(p, $n(r)) + 1;
                return qi(p, 0, y).join("")
            }

            function ny(n, r, o) {
                if (n = ge(n), n && (o || r === e)) return n.replace(Ms, "");
                if (!n || !(r = Mn(r))) return n;
                var p = $n(n), y = Fu(p, $n(r));
                return qi(p, y).join("")
            }

            function iy(n, r) {
                var o = k, p = lt;
                if (Le(r)) {
                    var y = "separator" in r ? r.separator : y;
                    o = "length" in r ? $t(r.length) : o, p = "omission" in r ? Mn(r.omission) : p
                }
                n = ge(n);
                var C = n.length;
                if (Fr(n)) {
                    var O = $n(n);
                    C = O.length
                }
                if (o >= C) return n;
                var z = o - Nr(p);
                if (z < 1) return p;
                var V = O ? qi(O, 0, z).join("") : n.slice(0, z);
                if (y === e) return V + p;
                if (O && (z += V.length - z), Ol(y)) {
                    if (n.slice(z).search(y)) {
                        var st, at = V;
                        for (y.global || (y = Jo(y.source, ge(Yt.exec(y)) + "g")), y.lastIndex = 0; st = y.exec(at);) var ct = st.index;
                        V = V.slice(0, ct === e ? z : ct)
                    }
                } else if (n.indexOf(Mn(y), z) != z) {
                    var Mt = V.lastIndexOf(y);
                    Mt > -1 && (V = V.slice(0, Mt))
                }
                return V + p
            }

            function ry(n) {
                return n = ge(n), n && It.test(n) ? n.replace(pt, Im) : n
            }

            var sy = kr(function (n, r, o) {
                return n + (o ? " " : "") + r.toUpperCase()
            }), Ul = Eh("toUpperCase");

            function Tf(n, r, o) {
                return n = ge(n), r = o ? e : r, r === e ? Cm(n) ? Nm(n) : xm(n) : n.match(r) || []
            }

            var Ef = Kt(function (n, r) {
                try {
                    return xn(n, e, r)
                } catch (o) {
                    return Il(o) ? o : new qt(o)
                }
            }), ay = vi(function (n, r) {
                return Rn(r, function (o) {
                    o = li(o), gi(n, o, Rl(n[o], n))
                }), n
            });

            function oy(n) {
                var r = n == null ? 0 : n.length, o = Gt();
                return n = r ? Ee(n, function (p) {
                    if (typeof p[1] != "function") throw new Dn(u);
                    return [o(p[0]), p[1]]
                }) : [], Kt(function (p) {
                    for (var y = -1; ++y < r;) {
                        var C = n[y];
                        if (xn(C[0], this, p)) return xn(C[1], this, p)
                    }
                })
            }

            function ly(n) {
                return Ig(On(n, m))
            }

            function zl(n) {
                return function () {
                    return n
                }
            }

            function cy(n, r) {
                return n == null || n !== n ? r : n
            }

            var uy = Ch(), hy = Ch(!0);

            function gn(n) {
                return n
            }

            function Bl(n) {
                return rh(typeof n == "function" ? n : On(n, m))
            }

            function fy(n) {
                return ah(On(n, m))
            }

            function dy(n, r) {
                return oh(n, On(r, m))
            }

            var py = Kt(function (n, r) {
                return function (o) {
                    return Ds(o, n, r)
                }
            }), my = Kt(function (n, r) {
                return function (o) {
                    return Ds(n, o, r)
                }
            });

            function Gl(n, r, o) {
                var p = Ze(r), y = Aa(r, p);
                o == null && !(Le(r) && (y.length || !p.length)) && (o = r, r = n, n = this, y = Aa(r, Ze(r)));
                var C = !(Le(o) && "chain" in o) || !!o.chain, O = yi(n);
                return Rn(y, function (z) {
                    var V = r[z];
                    n[z] = V, O && (n.prototype[z] = function () {
                        var st = this.__chain__;
                        if (C || st) {
                            var at = n(this.__wrapped__), ct = at.__actions__ = dn(this.__actions__);
                            return ct.push({func: V, args: arguments, thisArg: n}), at.__chain__ = st, at
                        }
                        return V.apply(n, Bi([this.value()], arguments))
                    })
                }), n
            }

            function gy() {
                return je._ === this && (je._ = Vm), this
            }

            function Wl() {
            }

            function _y(n) {
                return n = $t(n), Kt(function (r) {
                    return lh(r, n)
                })
            }

            var vy = vl(Ee), xy = vl(Lu), yy = vl(ko);

            function Af(n) {
                return Tl(n) ? Ho(li(n)) : Jg(n)
            }

            function My(n) {
                return function (r) {
                    return n == null ? e : ar(n, r)
                }
            }

            var Sy = Ph(), by = Ph(!0);

            function Vl() {
                return []
            }

            function kl() {
                return !1
            }

            function wy() {
                return {}
            }

            function Ty() {
                return ""
            }

            function Ey() {
                return !0
            }

            function Ay(n, r) {
                if (n = $t(n), n < 1 || n > tt) return [];
                var o = ht, p = tn(n, ht);
                r = Gt(r), n -= ht;
                for (var y = Yo(p, r); ++o < n;) r(o);
                return y
            }

            function Cy(n) {
                return Xt(n) ? Ee(n, li) : Sn(n) ? [n] : dn(Xh(ge(n)))
            }

            function Ly(n) {
                var r = ++Gm;
                return ge(n) + r
            }

            var Py = Ia(function (n, r) {
                return n + r
            }, 0), Ry = xl("ceil"), Dy = Ia(function (n, r) {
                return n / r
            }, 1), Iy = xl("floor");

            function Oy(n) {
                return n && n.length ? Ea(n, gn, rl) : e
            }

            function Fy(n, r) {
                return n && n.length ? Ea(n, Gt(r, 2), rl) : e
            }

            function Ny(n) {
                return Du(n, gn)
            }

            function Uy(n, r) {
                return Du(n, Gt(r, 2))
            }

            function zy(n) {
                return n && n.length ? Ea(n, gn, ll) : e
            }

            function By(n, r) {
                return n && n.length ? Ea(n, Gt(r, 2), ll) : e
            }

            var Gy = Ia(function (n, r) {
                return n * r
            }, 1), Wy = xl("round"), Vy = Ia(function (n, r) {
                return n - r
            }, 0);

            function ky(n) {
                return n && n.length ? Xo(n, gn) : 0
            }

            function Hy(n, r) {
                return n && n.length ? Xo(n, Gt(r, 2)) : 0
            }

            return b.after = fv, b.ary = rf, b.assign = Qv, b.assignIn = vf, b.assignInWith = Xa, b.assignWith = tx, b.at = ex, b.before = sf, b.bind = Rl, b.bindAll = ay, b.bindKey = af, b.castArray = wv, b.chain = tf, b.chunk = I_, b.compact = O_, b.concat = F_, b.cond = oy, b.conforms = ly, b.constant = zl, b.countBy = k0, b.create = nx, b.curry = of, b.curryRight = lf, b.debounce = cf, b.defaults = ix, b.defaultsDeep = rx, b.defer = dv, b.delay = pv, b.difference = N_, b.differenceBy = U_, b.differenceWith = z_, b.drop = B_, b.dropRight = G_, b.dropRightWhile = W_, b.dropWhile = V_, b.fill = k_, b.filter = q0, b.flatMap = Z0, b.flatMapDeep = $0, b.flatMapDepth = J0, b.flatten = Jh, b.flattenDeep = H_, b.flattenDepth = q_, b.flip = mv, b.flow = uy, b.flowRight = hy, b.fromPairs = X_, b.functions = hx, b.functionsIn = fx, b.groupBy = j0, b.initial = Z_, b.intersection = $_, b.intersectionBy = J_, b.intersectionWith = j_, b.invert = px, b.invertBy = mx, b.invokeMap = Q0, b.iteratee = Bl, b.keyBy = tv, b.keys = Ze, b.keysIn = mn, b.map = Ga, b.mapKeys = _x, b.mapValues = vx, b.matches = fy, b.matchesProperty = dy, b.memoize = Va, b.merge = xx, b.mergeWith = xf, b.method = py, b.methodOf = my, b.mixin = Gl, b.negate = ka, b.nthArg = _y, b.omit = yx, b.omitBy = Mx, b.once = gv, b.orderBy = ev, b.over = vy, b.overArgs = _v, b.overEvery = xy, b.overSome = yy, b.partial = Dl, b.partialRight = uf, b.partition = nv, b.pick = Sx, b.pickBy = yf, b.property = Af, b.propertyOf = My, b.pull = e0, b.pullAll = Kh, b.pullAllBy = n0, b.pullAllWith = i0, b.pullAt = r0, b.range = Sy, b.rangeRight = by, b.rearg = vv, b.reject = sv, b.remove = s0, b.rest = xv, b.reverse = Ll,b.sampleSize = ov,b.set = wx,b.setWith = Tx,b.shuffle = lv,b.slice = a0,b.sortBy = hv,b.sortedUniq = d0,b.sortedUniqBy = p0,b.split = Zx,b.spread = yv,b.tail = m0,b.take = g0,b.takeRight = _0,b.takeRightWhile = v0,b.takeWhile = x0,b.tap = O0,b.throttle = Mv,b.thru = Ba,b.toArray = mf,b.toPairs = Mf,b.toPairsIn = Sf,b.toPath = Cy,b.toPlainObject = _f,b.transform = Ex,b.unary = Sv,b.union = y0,b.unionBy = M0,b.unionWith = S0,b.uniq = b0,b.uniqBy = w0,b.uniqWith = T0,b.unset = Ax,b.unzip = Pl,b.unzipWith = Qh,b.update = Cx,b.updateWith = Lx,b.values = Xr,b.valuesIn = Px,b.without = E0,b.words = Tf,b.wrap = bv,b.xor = A0,b.xorBy = C0,b.xorWith = L0,b.zip = P0,b.zipObject = R0,b.zipObjectDeep = D0,b.zipWith = I0,b.entries = Mf,b.entriesIn = Sf,b.extend = vf,b.extendWith = Xa,Gl(b, b),b.add = Py,b.attempt = Ef,b.camelCase = Ox,b.capitalize = bf,b.ceil = Ry,b.clamp = Rx,b.clone = Tv,b.cloneDeep = Av,b.cloneDeepWith = Cv,b.cloneWith = Ev,b.conformsTo = Lv,b.deburr = wf,b.defaultTo = cy,b.divide = Dy,b.endsWith = Fx,b.eq = jn,b.escape = Nx,b.escapeRegExp = Ux,b.every = H0,b.find = X0,b.findIndex = Zh,b.findKey = sx,b.findLast = Y0,b.findLastIndex = $h,b.findLastKey = ax,b.floor = Iy,b.forEach = ef,b.forEachRight = nf,b.forIn = ox,b.forInRight = lx,b.forOwn = cx,b.forOwnRight = ux,b.get = Fl,b.gt = Pv,b.gte = Rv,b.has = dx,b.hasIn = Nl,b.head = jh,b.identity = gn,b.includes = K0,b.indexOf = Y_,b.inRange = Dx,b.invoke = gx,b.isArguments = cr,b.isArray = Xt,b.isArrayBuffer = Dv,b.isArrayLike = pn,b.isArrayLikeObject = Ne,b.isBoolean = Iv,b.isBuffer = Xi,b.isDate = Ov,b.isElement = Fv,b.isEmpty = Nv,b.isEqual = Uv,b.isEqualWith = zv,b.isError = Il,b.isFinite = Bv,b.isFunction = yi,b.isInteger = hf,b.isLength = Ha,b.isMap = ff,b.isMatch = Gv,b.isMatchWith = Wv,b.isNaN = Vv,b.isNative = kv,b.isNil = qv,b.isNull = Hv,b.isNumber = df,b.isObject = Le,b.isObjectLike = Oe,b.isPlainObject = zs,b.isRegExp = Ol,b.isSafeInteger = Xv,b.isSet = pf,b.isString = qa,b.isSymbol = Sn,b.isTypedArray = qr,b.isUndefined = Yv,b.isWeakMap = Zv,b.isWeakSet = $v,b.join = K_,b.kebabCase = zx,b.last = Nn,b.lastIndexOf = Q_,b.lowerCase = Bx,b.lowerFirst = Gx,b.lt = Jv,b.lte = jv,b.max = Oy,b.maxBy = Fy,b.mean = Ny,b.meanBy = Uy,b.min = zy,b.minBy = By,b.stubArray = Vl,b.stubFalse = kl,b.stubObject = wy,b.stubString = Ty,b.stubTrue = Ey,b.multiply = Gy,b.nth = t0,b.noConflict = gy,b.noop = Wl,b.now = Wa,b.pad = Wx,b.padEnd = Vx,b.padStart = kx,b.parseInt = Hx,b.random = Ix,b.reduce = iv,b.reduceRight = rv,b.repeat = qx,b.replace = Xx,b.result = bx,b.round = Wy,b.runInContext = W,b.sample = av,b.size = cv,b.snakeCase = Yx,b.some = uv,b.sortedIndex = o0,b.sortedIndexBy = l0,b.sortedIndexOf = c0,b.sortedLastIndex = u0,b.sortedLastIndexBy = h0,b.sortedLastIndexOf = f0,b.startCase = $x,b.startsWith = Jx,b.subtract = Vy,b.sum = ky,b.sumBy = Hy,b.template = jx,b.times = Ay,b.toFinite = Mi,b.toInteger = $t,b.toLength = gf,b.toLower = Kx,b.toNumber = Un,b.toSafeInteger = Kv,b.toString = ge,b.toUpper = Qx,b.trim = ty,b.trimEnd = ey,b.trimStart = ny,b.truncate = iy,b.unescape = ry,b.uniqueId = Ly,b.upperCase = sy,b.upperFirst = Ul,b.each = ef,b.eachRight = nf,b.first = jh,Gl(b, function () {
                var n = {};
                return ai(b, function (r, o) {
                    ve.call(b.prototype, o) || (n[o] = r)
                }), n
            }(), {chain: !1}),b.VERSION = i,Rn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (n) {
                b[n].placeholder = b
            }),Rn(["drop", "take"], function (n, r) {
                re.prototype[n] = function (o) {
                    o = o === e ? 1 : Ve($t(o), 0);
                    var p = this.__filtered__ && !r ? new re(this) : this.clone();
                    return p.__filtered__ ? p.__takeCount__ = tn(o, p.__takeCount__) : p.__views__.push({
                        size: tn(o, ht),
                        type: n + (p.__dir__ < 0 ? "Right" : "")
                    }), p
                }, re.prototype[n + "Right"] = function (o) {
                    return this.reverse()[n](o).reverse()
                }
            }),Rn(["filter", "map", "takeWhile"], function (n, r) {
                var o = r + 1, p = o == X || o == dt;
                re.prototype[n] = function (y) {
                    var C = this.clone();
                    return C.__iteratees__.push({iteratee: Gt(y, 3), type: o}), C.__filtered__ = C.__filtered__ || p, C
                }
            }),Rn(["head", "last"], function (n, r) {
                var o = "take" + (r ? "Right" : "");
                re.prototype[n] = function () {
                    return this[o](1).value()[0]
                }
            }),Rn(["initial", "tail"], function (n, r) {
                var o = "drop" + (r ? "" : "Right");
                re.prototype[n] = function () {
                    return this.__filtered__ ? new re(this) : this[o](1)
                }
            }),re.prototype.compact = function () {
                return this.filter(gn)
            },re.prototype.find = function (n) {
                return this.filter(n).head()
            },re.prototype.findLast = function (n) {
                return this.reverse().find(n)
            },re.prototype.invokeMap = Kt(function (n, r) {
                return typeof n == "function" ? new re(this) : this.map(function (o) {
                    return Ds(o, n, r)
                })
            }),re.prototype.reject = function (n) {
                return this.filter(ka(Gt(n)))
            },re.prototype.slice = function (n, r) {
                n = $t(n);
                var o = this;
                return o.__filtered__ && (n > 0 || r < 0) ? new re(o) : (n < 0 ? o = o.takeRight(-n) : n && (o = o.drop(n)), r !== e && (r = $t(r), o = r < 0 ? o.dropRight(-r) : o.take(r - n)), o)
            },re.prototype.takeRightWhile = function (n) {
                return this.reverse().takeWhile(n).reverse()
            },re.prototype.toArray = function () {
                return this.take(ht)
            },ai(re.prototype, function (n, r) {
                var o = /^(?:filter|find|map|reject)|While$/.test(r), p = /^(?:head|last)$/.test(r),
                    y = b[p ? "take" + (r == "last" ? "Right" : "") : r], C = p || /^find/.test(r);
                !y || (b.prototype[r] = function () {
                    var O = this.__wrapped__, z = p ? [1] : arguments, V = O instanceof re, st = z[0], at = V || Xt(O),
                        ct = function (ne) {
                            var ae = y.apply(b, Bi([ne], z));
                            return p && Mt ? ae[0] : ae
                        };
                    at && o && typeof st == "function" && st.length != 1 && (V = at = !1);
                    var Mt = this.__chain__, Dt = !!this.__actions__.length, Wt = C && !Mt, Jt = V && !Dt;
                    if (!C && at) {
                        O = Jt ? O : new re(this);
                        var Vt = n.apply(O, z);
                        return Vt.__actions__.push({func: Ba, args: [ct], thisArg: e}), new In(Vt, Mt)
                    }
                    return Wt && Jt ? n.apply(this, z) : (Vt = this.thru(ct), Wt ? p ? Vt.value()[0] : Vt.value() : Vt)
                })
            }),Rn(["pop", "push", "shift", "sort", "splice", "unshift"], function (n) {
                var r = ha[n], o = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", p = /^(?:pop|shift)$/.test(n);
                b.prototype[n] = function () {
                    var y = arguments;
                    if (p && !this.__chain__) {
                        var C = this.value();
                        return r.apply(Xt(C) ? C : [], y)
                    }
                    return this[o](function (O) {
                        return r.apply(Xt(O) ? O : [], y)
                    })
                }
            }),ai(re.prototype, function (n, r) {
                var o = b[r];
                if (o) {
                    var p = o.name + "";
                    ve.call(Gr, p) || (Gr[p] = []), Gr[p].push({name: r, func: o})
                }
            }),Gr[Da(e, S).name] = [{
                name: "wrapper",
                func: e
            }],re.prototype.clone = rg,re.prototype.reverse = sg,re.prototype.value = ag,b.prototype.at = F0,b.prototype.chain = N0,b.prototype.commit = U0,b.prototype.next = z0,b.prototype.plant = G0,b.prototype.reverse = W0,b.prototype.toJSON = b.prototype.valueOf = b.prototype.value = V0,b.prototype.first = b.prototype.head,Ts && (b.prototype[Ts] = B0),b
        }, Ur = Um();
        er ? ((er.exports = Ur)._ = Ur, Bo._ = Ur) : je._ = Ur
    }).call(Hs)
})(Wc, Wc.exports);
const ap = Wc.exports, kp = "SHAPE", Hp = "LIGHT", ou = document.getElementById("shape"),
    lu = document.getElementById("light"),
    Vn = {shapeType: localStorage.getItem(kp) || "Cube", lightType: localStorage.getItem(Hp) || "Point"};
Object.entries(au).forEach(([c, t], e) => {
    const i = document.createElement("option");
    i.value = c, i.textContent = `${e + 1} ${c}`, ou.appendChild(i)
});
Object.entries(Vp).forEach(([c, t], e) => {
    const i = document.createElement("option");
    i.value = c, i.textContent = `${e + 1} ${c}`, lu.appendChild(i)
});
ou.value = Vn.shapeType;
lu.value = Vn.lightType;
ou.addEventListener("change", c => {
    const t = c.target.value;
    Vn.shapeType = t, Ro(Vn), localStorage.setItem(kp, t)
});
lu.addEventListener("change", c => {
    const t = c.target.value;
    Vn.lightType = t, Ro(Vn), localStorage.setItem(Hp, t)
});

function Do(c) {
    const t = ap.camelCase("show " + c), e = ap.toUpper(c) + "_STORAGE", i = document.getElementById(c);
    i.addEventListener("change", s => {
        const a = s.target.checked;
        Vn[t] = a, Ro(Vn), localStorage.setItem(e, a)
    }), localStorage.getItem(e) ? Vn[t] = localStorage.getItem(e) === "true" : Vn[t] = !1, i.checked = Vn[t]
}

Do("sky");
Do("fog");
Do("texture");
Do("shadow");
Ro(Vn);
