// Pinta as capas dos artigos e das trilhas e anima o desenho quando o ponteiro passa por cima.
import { desenhar } from './guilloche';

const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const capas = Array.from(document.querySelectorAll<HTMLCanvasElement>('canvas[data-capa]'));
const tempo = new WeakMap<HTMLCanvasElement, number>();

const pintar = (c: HTMLCanvasElement) =>
  desenhar(c, { semente: Number(c.dataset.capa), t: tempo.get(c) ?? 0, aneis: Number(c.dataset.aneis ?? 12) });

const observador = new IntersectionObserver(
  (entradas) => entradas.forEach((e) => e.isIntersecting && pintar(e.target as HTMLCanvasElement)),
  { rootMargin: '300px' },
);

for (const c of capas) {
  observador.observe(c);
  if (semMovimento) continue;
  const alvo = (c.closest('[data-anima]') as HTMLElement | null) ?? c;
  let quadro = 0;
  const parar = () => cancelAnimationFrame(quadro);
  const girar = () => {
    tempo.set(c, (tempo.get(c) ?? 0) + 0.022);
    pintar(c);
    quadro = requestAnimationFrame(girar);
  };
  alvo.addEventListener('pointerenter', () => { parar(); girar(); });
  alvo.addEventListener('pointerleave', parar);
  alvo.addEventListener('focusin', () => { parar(); girar(); });
  alvo.addEventListener('focusout', parar);
}

let espera = 0;
window.addEventListener('resize', () => {
  clearTimeout(espera);
  espera = window.setTimeout(() => capas.forEach(pintar), 150);
});
