/**
 * Funny Clipper - Official Legal & Documentation Website
 * Client-side script: Mobile nav toggle, Table of Contents scrollspy, and Back-to-Top
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // ------------------------------------------------------------------------
    // 1. Mobile Navigation Toggle
    // ------------------------------------------------------------------------
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function () {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // Close menu when clicking outside
      document.addEventListener('click', function (e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // ------------------------------------------------------------------------
    // 2. Back to Top Button
    // ------------------------------------------------------------------------
    const backToTopBtn = document.querySelector('.back-to-top');

    if (backToTopBtn) {
      const toggleBackToTop = function () {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      };

      window.addEventListener('scroll', toggleBackToTop, { passive: true });

      backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // ------------------------------------------------------------------------
    // 3. Table of Contents Scrollspy (for terms.html and privacy.html)
    // ------------------------------------------------------------------------
    const tocLinks = document.querySelectorAll('.toc-link');
    const sections = document.querySelectorAll('.legal-section');

    if (tocLinks.length > 0 && sections.length > 0) {
      const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -65% 0px',
        threshold: 0
      };

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              tocLinks.forEach(function (link) {
                if (link.getAttribute('href') === '#' + id) {
                  link.classList.add('active');
                } else {
                  link.classList.remove('active');
                }
              });
            }
          }
        });
      }, observerOptions);

      sections.forEach(function (section) {
        observer.observe(section);
      });
    }
  });
})();

