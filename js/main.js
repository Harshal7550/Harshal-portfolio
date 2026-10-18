(() => {
  const $ = (s, c = document) => c.querySelector(s), $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  $('#yr').textContent = new Date().getFullYear();

  // Mobile menu
  const burger = $('.burger'), menu = $('#menu');
  const setMenu = o => { menu.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); };
  burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  $$('#menu a').forEach(a => a.addEventListener('click', () => setMenu(false)));

  // Typed role text
  const words = ['AWS', 'Linux', 'Docker', 'CI/CD'], el = $('#typed');
  if (reduce) el.textContent = words.join(', ');
  else {
    let w = 0, i = 0, del = false;
    (function tick() {
      const t = words[w];
      el.textContent = t.slice(0, i += del ? -1 : 1);
      let d = del ? 60 : 110;
      if (!del && i === t.length) { del = true; d = 1400; }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; d = 300; }
      setTimeout(tick, d);
    })();
  }

  // Terminal intro (plays once)
  const lines = ['$ whoami', 'harshal-bachhav', '$ aws --focus', 'ec2 s3 iam rds vpc cloudwatch', '$ docker --learning', 'jenkins kubernetes ci/cd', '$ status', 'open to AWS DevOps roles'];
  const term = $('#term');
  if (reduce) term.textContent = lines.join('\n');
  else {
    let n = 0, c = 0;
    (function type() {
      if (n >= lines.length) return;
      const L = lines[n];
      term.textContent = lines.slice(0, n).join('\n') + (n ? '\n' : '') + L.slice(0, ++c);
      if (c >= L.length) { n++; c = 0; return setTimeout(type, 450); }
      setTimeout(type, 35);
    })();
  }

  // Skill filter
  $$('.tab').forEach(b => b.addEventListener('click', () => {
    $$('.tab').forEach(x => x.classList.toggle('active', x === b));
    $$('.chip').forEach(c => c.classList.toggle('hide', b.dataset.f !== 'all' && c.dataset.c !== b.dataset.f));
  }));

  // Scroll reveal + active nav link
  const items = $$('section:not(.hero) h2, .card, .item, .facts li, .chips');
  items.forEach(e => e.classList.add('rv'));
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  items.forEach(e => io.observe(e));
  const links = $$('#menu a');
  const so = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.hash === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section').forEach(s => so.observe(s));

  // Contact form opens the visitor's email app (no backend needed)
  $('#form').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target, st = $('#status');
    if (!f.name.value.trim() || !f.email.checkValidity() || !f.email.value || !f.msg.value.trim()) {
      st.textContent = 'Fill in your name, a valid email and a message.'; return;
    }
    const body = `${f.msg.value}\n\nFrom: ${f.name.value} (${f.email.value})`;
    location.href = `mailto:harshalbachhav2583@gmail.com?subject=${encodeURIComponent('Portfolio message from ' + f.name.value)}&body=${encodeURIComponent(body)}`;
    st.textContent = 'Opening your email app…';
  });
})();
