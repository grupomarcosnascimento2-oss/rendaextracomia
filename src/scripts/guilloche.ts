// Desenha um guilhochê: a renda de linhas finas usada na gravação de cédulas.
// Cada semente gera um desenho diferente, então cada artigo tem a sua capa.

export interface Opcoes {
  semente: number;
  t?: number;
  tracos?: string | CanvasGradient;
  aneis?: number;
  raio?: number;
  cx?: number;
  cy?: number;
  petalas?: number;
  ondas?: number;
  faixa?: boolean;
}

function sorteio(semente: number) {
  let a = semente >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function desenhar(canvas: HTMLCanvasElement, o: Opcoes): boolean {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  if (!w || !h) return false;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
  }
  const ctx = canvas.getContext('2d');
  if (!ctx) return false;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);

  const r = sorteio(o.semente * 9973 + 7);
  const petalas = o.petalas ?? 3 + Math.floor(r() * 7);
  const ondas = o.ondas ?? petalas * (2 + Math.floor(r() * 3)) + (r() < 0.5 ? 1 : -1);
  const a = 0.09 + r() * 0.1;
  const b = 0.035 + r() * 0.05;
  const cxSorte = 0.6 + r() * 0.32;
  const cySorte = 0.2 + r() * 0.55;
  const yFaixa = 0.76 + r() * 0.12;
  const fq = ((2 + Math.floor(r() * 4)) * Math.PI * 2) / w;

  const aneis = o.aneis ?? 12;
  const cx = (o.cx ?? cxSorte) * w;
  const cy = (o.cy ?? cySorte) * h;
  const R0 = Math.max(w, h) * (o.raio ?? 0.62);
  const t = o.t ?? 0;
  const passos = 420;

  ctx.lineWidth = 1;
  ctx.strokeStyle = o.tracos ?? 'rgba(255,255,255,0.5)';

  for (let k = 0; k < aneis; k++) {
    const f = aneis > 1 ? k / (aneis - 1) : 0;
    const R = R0 * (0.16 + 0.84 * f);
    const fase = k * 0.19;
    ctx.globalAlpha = 0.3 + 0.7 * (1 - f);
    ctx.beginPath();
    for (let i = 0; i <= passos; i++) {
      const th = (i / passos) * Math.PI * 2;
      const rr = R * (1 + a * Math.sin(petalas * th + t + fase) + b * Math.cos(ondas * th - t * 0.6 - fase * 2));
      const x = cx + rr * Math.cos(th + t * 0.04);
      const y = cy + rr * Math.sin(th + t * 0.04);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  if (o.faixa !== false) {
    const A = h * 0.045;
    ctx.globalAlpha = 0.45;
    for (let k = 0; k < 7; k++) {
      ctx.beginPath();
      for (let x = -4; x <= w + 4; x += 4) {
        const y = h * yFaixa + k * 4.5 + A * Math.sin(fq * x + t * 1.3 + k * 0.33);
        if (x === -4) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  }
  ctx.globalAlpha = 1;
  return true;
}
