/**
 * Bharatiya Bhasha Parivaar — shared components (Saffron Theme)
 *
 * renderNavbar(rootPath)        — injects the site navbar into #navbar-placeholder
 * renderFooter(rootPath)        — injects the site footer into #footer-placeholder
 * initScrollAnimations()        — sets up IntersectionObserver for .anim / .anim-left / .anim-right
 *
 * rootPath: "" for root-level pages, "../" for pages one level deep (e.g. registration/)
 */

(function () {

  /* ─── NAVBAR ──────────────────────────────────────────────────────────────── */

  function renderNavbar(rootPath) {
    var el = document.getElementById('navbar-placeholder');
    if (!el) return;

    el.innerHTML = [
      '<nav class="bg-white nav-saffron sticky top-0 z-50 shadow-sm">',
      '  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">',
      '    <div class="flex justify-between h-20">',

      /* Logo */
      '      <div class="flex items-center">',
      '        <a href="' + rootPath + 'index.html" class="flex items-center gap-3">',
      '          <div class="bg-[#C2410C] p-2 rounded-lg shadow-sm">',
      '            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
      '          </div>',
      '          <div>',
      '            <span class="font-bold text-xl text-[#2C1200] block leading-tight" style="font-family:\'Poppins\',system-ui,sans-serif">Bharatiya Bhasha Parivaar</span>',
      '            <span class="text-xs text-[#C2410C] font-semibold tracking-wider uppercase">Language School</span>',
      '          </div>',
      '        </a>',
      '      </div>',

      /* Desktop nav */
      '      <div class="hidden md:flex items-center space-x-8">',
      '        <a href="' + rootPath + 'index.html" class="text-stone-600 hover:text-[#C2410C] font-medium transition-colors">Home</a>',
      '        <a href="' + rootPath + 'about.html" class="text-stone-600 hover:text-[#C2410C] font-medium transition-colors">About Us</a>',
      '        <a href="' + rootPath + 'programs.html" class="text-stone-600 hover:text-[#C2410C] font-medium transition-colors">Programs</a>',
      '        <div class="relative group">',
      '          <span class="cursor-pointer text-stone-600 hover:text-[#C2410C] font-medium transition-colors">Registration &#9662;</span>',
      '          <div class="absolute left-0 mt-2 w-64 rounded-xl bg-white shadow-xl border border-[#FED7AA] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-40 overflow-hidden">',
      '            <a href="' + rootPath + 'registration/index.html" class="block px-4 py-2.5 text-stone-700 hover:bg-[#FFF7ED] hover:text-[#C2410C] transition-colors">All Registration Links</a>',
      '            <a href="' + rootPath + 'registration/hindi-bhasha-program.html" class="block px-4 py-2.5 text-stone-700 hover:bg-[#FFF7ED] hover:text-[#C2410C] transition-colors">Hindi Bhasha Program</a>',
      '            <a href="' + rootPath + 'registration/hindi-language-program.html" class="block px-4 py-2.5 text-stone-700 hover:bg-[#FFF7ED] hover:text-[#C2410C] transition-colors">Hindi Language Program</a>',
      '            <a href="' + rootPath + 'registration/bbp-marathi.html" class="block px-4 py-2.5 text-stone-700 hover:bg-[#FFF7ED] hover:text-[#C2410C] transition-colors">BBP Marathi</a>',
      '            <a href="' + rootPath + 'registration/bbp-gujarati.html" class="block px-4 py-2.5 text-stone-700 hover:bg-[#FFF7ED] hover:text-[#C2410C] transition-colors">BBP Gujarati</a>',
      '          </div>',
      '        </div>',
      '        <a href="' + rootPath + 'testimonials.html" class="text-stone-600 hover:text-[#C2410C] font-medium transition-colors">Testimonials</a>',
      '        <a href="' + rootPath + 'contact.html" class="text-stone-600 hover:text-[#C2410C] font-medium transition-colors">Contact</a>',
      '      </div>',

      /* Mobile hamburger button */
      '      <div class="md:hidden flex items-center">',
      '        <button id="mobile-menu-btn" class="text-stone-600 hover:text-[#C2410C] focus:outline-none">',
      '          <svg id="menu-icon" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
      '          <svg id="x-icon" class="h-6 w-6 hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
      '        </button>',
      '      </div>',
      '    </div>',
      '  </div>',

      /* Mobile menu drawer */
      '  <div id="mobile-menu" class="md:hidden bg-white border-t border-[#FED7AA] hidden">',
      '    <div class="px-4 pt-2 pb-4 space-y-1 sm:px-3">',
      '      <a href="' + rootPath + 'index.html" class="block px-3 py-2 text-base font-medium text-stone-700 hover:text-[#C2410C] hover:bg-[#FFF7ED] rounded-md">Home</a>',
      '      <a href="' + rootPath + 'about.html" class="block px-3 py-2 text-base font-medium text-stone-700 hover:text-[#C2410C] hover:bg-[#FFF7ED] rounded-md">About Us</a>',
      '      <a href="' + rootPath + 'programs.html" class="block px-3 py-2 text-base font-medium text-stone-700 hover:text-[#C2410C] hover:bg-[#FFF7ED] rounded-md">Programs</a>',
      '      <a href="' + rootPath + 'testimonials.html" class="block px-3 py-2 text-base font-medium text-stone-700 hover:text-[#C2410C] hover:bg-[#FFF7ED] rounded-md">Testimonials</a>',
      '      <a href="' + rootPath + 'contact.html" class="block px-3 py-2 text-base font-medium text-stone-700 hover:text-[#C2410C] hover:bg-[#FFF7ED] rounded-md">Contact</a>',
      '      <a href="' + rootPath + 'registration/index.html" class="block px-3 py-2 text-base font-medium text-stone-700 hover:text-[#C2410C] hover:bg-[#FFF7ED] rounded-md">Registration</a>',
      '      <div class="space-y-1 pl-4">',
      '        <a href="' + rootPath + 'registration/hindi-bhasha-program.html" class="block px-3 py-2 text-base font-medium text-stone-700 hover:text-[#C2410C] hover:bg-[#FFF7ED] rounded-md">Hindi Bhasha Program</a>',
      '        <a href="' + rootPath + 'registration/hindi-language-program.html" class="block px-3 py-2 text-base font-medium text-stone-700 hover:text-[#C2410C] hover:bg-[#FFF7ED] rounded-md">Hindi Language Program</a>',
      '        <a href="' + rootPath + 'registration/bbp-marathi.html" class="block px-3 py-2 text-base font-medium text-stone-700 hover:text-[#C2410C] hover:bg-[#FFF7ED] rounded-md">BBP Marathi</a>',
      '        <a href="' + rootPath + 'registration/bbp-gujarati.html" class="block px-3 py-2 text-base font-medium text-stone-700 hover:text-[#C2410C] hover:bg-[#FFF7ED] rounded-md">BBP Gujarati</a>',
      '      </div>',
      '    </div>',
      '  </div>',
      '</nav>'
    ].join('\n');

    /* Mobile menu toggle */
    document.getElementById('mobile-menu-btn').addEventListener('click', function () {
      document.getElementById('mobile-menu').classList.toggle('hidden');
      document.getElementById('menu-icon').classList.toggle('hidden');
      document.getElementById('x-icon').classList.toggle('hidden');
    });
  }

  /* ─── FOOTER ──────────────────────────────────────────────────────────────── */

  function renderFooter(rootPath) {
    var el = document.getElementById('footer-placeholder');
    if (!el) return;

    el.innerHTML = [
      '<footer class="footer-warm text-[#FFEDD5] pt-16 pb-8">',
      '  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">',
      '    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">',

      /* Branding + social */
      '      <div class="col-span-1 md:col-span-1">',
      '        <a href="' + rootPath + 'index.html" class="flex items-center gap-3 mb-6">',
      '          <div class="bg-[#C2410C] p-2 rounded-lg">',
      '            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
      '          </div>',
      '          <div>',
      '            <span class="font-bold text-xl text-[#FED7AA] block leading-tight" style="font-family:\'Poppins\',system-ui,sans-serif">Bharatiya Bhasha Parivaar</span>',
      '            <span class="text-xs text-[#EA580C] font-semibold tracking-wider uppercase">Language School</span>',
      '          </div>',
      '        </a>',
      '        <p class="text-[#FDBA74] text-sm leading-relaxed mb-6">Empowering the next generation with the rich heritage of Indian languages and culture in California.</p>',
      '        <div class="flex space-x-4">',
      '          <a href="#" class="text-[#FDBA74] hover:text-[#EA580C] transition-colors"><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>',
      '          <a href="#" class="text-[#FDBA74] hover:text-[#EA580C] transition-colors"><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>',
      '          <a href="#" class="text-[#FDBA74] hover:text-[#EA580C] transition-colors"><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>',
      '        </div>',
      '      </div>',

      /* Quick Links */
      '      <div>',
      '        <h3 class="text-[#FED7AA] font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>',
      '        <ul class="space-y-3">',
      '          <li><a href="' + rootPath + 'index.html" class="hover:text-[#FB923C] transition-colors text-sm">Home</a></li>',
      '          <li><a href="' + rootPath + 'about.html" class="hover:text-[#FB923C] transition-colors text-sm">About Us</a></li>',
      '          <li><a href="' + rootPath + 'programs.html" class="hover:text-[#FB923C] transition-colors text-sm">Programs</a></li>',
      '          <li><a href="' + rootPath + 'testimonials.html" class="hover:text-[#FB923C] transition-colors text-sm">Testimonials</a></li>',
      '          <li><a href="' + rootPath + 'contact.html" class="hover:text-[#FB923C] transition-colors text-sm">Contact Us</a></li>',
      '        </ul>',
      '      </div>',

      /* Programs */
      '      <div>',
      '        <h3 class="text-[#FED7AA] font-semibold mb-6 uppercase tracking-wider text-sm">Programs</h3>',
      '        <ul class="space-y-3">',
      '          <li><a href="' + rootPath + 'programs.html" class="hover:text-[#FB923C] transition-colors text-sm">Hindi Bhasha</a></li>',
      '          <li><a href="' + rootPath + 'programs.html" class="hover:text-[#FB923C] transition-colors text-sm">Hindi Language Program</a></li>',
      '          <li><a href="' + rootPath + 'programs.html" class="hover:text-[#FB923C] transition-colors text-sm">BBP Marathi</a></li>',
      '          <li><a href="' + rootPath + 'programs.html" class="hover:text-[#FB923C] transition-colors text-sm">BBP Gujarati</a></li>',
      '        </ul>',
      '      </div>',

      /* Contact */
      '      <div>',
      '        <h3 class="text-[#FED7AA] font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h3>',
      '        <ul class="space-y-4">',
      '          <li class="flex items-start gap-3">',
      '            <svg class="h-5 w-5 text-[#EA580C] shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
      '            <span class="text-sm">California, USA</span>',
      '          </li>',
      '          <li class="flex items-center gap-3">',
      '            <svg class="h-5 w-5 text-[#EA580C] shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.88 2 2 0 0 1 3.59 2.68h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
      '            <a href="tel:+18582295820" class="text-sm hover:text-[#FB923C] transition-colors">+1 (858)-229-5820</a>',
      '          </li>',
      '          <li class="flex items-center gap-3">',
      '            <svg class="h-5 w-5 text-[#EA580C] shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
      '            <a href="mailto:admin@bhashaparivar.org" class="text-sm hover:text-[#FB923C] transition-colors">admin@bhashaparivar.org</a>',
      '          </li>',
      '        </ul>',
      '      </div>',

      '    </div>',

      /* Bottom bar */
      '    <div class="border-t border-[#7C2D12] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">',
      '      <p class="text-sm text-[#92400E]">&copy; <span id="footer-year"></span> Bharatiya Bhasha Language School. All rights reserved.</p>',
      '      <div class="flex gap-4 text-sm text-[#92400E]">',
      '        <a href="#" class="hover:text-[#FFEDD5] transition-colors">Privacy Policy</a>',
      '        <a href="#" class="hover:text-[#FFEDD5] transition-colors">Terms of Service</a>',
      '      </div>',
      '    </div>',
      '  </div>',
      '</footer>'
    ].join('\n');

    document.getElementById('footer-year').textContent = new Date().getFullYear();
  }

  /* ─── SCROLL ANIMATIONS ───────────────────────────────────────────────────── */

  function initScrollAnimations() {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.anim, .anim-left, .anim-right').forEach(function (el) {
      obs.observe(el);
    });
  }

  /* Export to global scope */
  window.renderNavbar = renderNavbar;
  window.renderFooter = renderFooter;
  window.initScrollAnimations = initScrollAnimations;

})();
