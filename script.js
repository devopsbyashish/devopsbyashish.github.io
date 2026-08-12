 /*
 ═══════════════════════════════════════════
 Ashish Kumar — DevOps Portfolio JS
 Vanilla JS · Performance Optimized
 ═══════════════════════════════════════════
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────
     DEVOPS LOADER
  ───────────────────────────────────────── */

  const loader = document.getElementById('devopsLoader');

  if (loader) {

    const mainElements = Array.from(document.body.children).filter(
      el =>
        el.id !== 'devopsLoader' &&
        el.tagName !== 'SCRIPT' &&
        el.tagName !== 'STYLE'
    );

    document.body.classList.add('loading');

    mainElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(15px)';
      el.style.transition =
        'opacity 0.8s cubic-bezier(.16,1,.3,1), ' +
        'transform 0.8s cubic-bezier(.16,1,.3,1)';
    });


    const percentageEl =
      document.getElementById('devopsPercentage');

    const statusEl =
      document.getElementById('devopsStatus');

    const barFillEl =
      document.getElementById('devopsBarFill');

    const ringProgressEl =
      document.getElementById('devopsRingProgress');

    const toolsContainer =
      document.getElementById('devopsTools');

    const labelEl =
      document.getElementById('devopsLabel');


    /*
    ─────────────────────────────────────────
    ASHISH KUMAR DEVOPS LOADER STAGES
    ─────────────────────────────────────────
    */

    const stages = [

      {
        threshold: 0,
        text: '> initializing linux environment...',
        tool: 'Linux',
        posClass: 'pos-0'
      },

      {
        threshold: 5,
        text: '> executing bash automation...',
        tool: 'Bash',
        posClass: 'pos-1'
      },

      {
        threshold: 10,
        text: '> configuring git repository...',
        tool: 'Git',
        posClass: 'pos-2'
      },

      {
        threshold: 15,
        text: '> connecting github repository...',
        tool: 'GitHub',
        posClass: 'pos-3'
      },

      {
        threshold: 20,
        text: '> checking infrastructure secrets...',
        tool: 'TruffleHog',
        posClass: 'pos-4'
      },

      {
        threshold: 25,
        text: '> scanning infrastructure security...',
        tool: 'tfsec',
        posClass: 'pos-5'
      },

      {
        threshold: 30,
        text: '> linting terraform configuration...',
        tool: 'TFLint',
        posClass: 'pos-6'
      },

      {
        threshold: 35,
        text: '> loading infrastructure as code...',
        tool: 'Terraform',
        posClass: 'pos-7'
      },

      {
        threshold: 40,
        text: '> authenticating microsoft azure...',
        tool: 'Azure CLI',
        posClass: 'pos-8'
      },

      {
        threshold: 45,
        text: '> provisioning azure resources...',
        tool: 'Azure',
        posClass: 'pos-9'
      },

      {
        threshold: 50,
        text: '> configuring azure networking...',
        tool: 'Azure VNet',
        posClass: 'pos-0'
      },

      {
        threshold: 55,
        text: '> applying identity and access policies...',
        tool: 'Entra ID',
        posClass: 'pos-1'
      },

      {
        threshold: 60,
        text: '> configuring role based access control...',
        tool: 'Azure RBAC',
        posClass: 'pos-2'
      },

      {
        threshold: 65,
        text: '> starting container runtime...',
        tool: 'Docker',
        posClass: 'pos-3'
      },

      {
        threshold: 70,
        text: '> orchestrating container workloads...',
        tool: 'Kubernetes',
        posClass: 'pos-4'
      },

      {
        threshold: 75,
        text: '> deploying continuous integration...',
        tool: 'GitHub Actions',
        posClass: 'pos-5'
      },

      {
        threshold: 80,
        text: '> executing automated deployment...',
        tool: 'Azure DevOps',
        posClass: 'pos-6'
      },

      {
        threshold: 85,
        text: '> monitoring cloud infrastructure...',
        tool: 'Azure Monitor',
        posClass: 'pos-7'
      },

      {
        threshold: 90,
        text: '> analyzing application logs...',
        tool: 'Log Analytics',
        posClass: 'pos-8'
      },

      {
        threshold: 95,
        text: '> preparing Ashish Kumar portfolio...',
        tool: 'DevOps',
        posClass: 'pos-9'
      }

    ];


    /*
    ─────────────────────────────────────────
    LOADER CONFIGURATION
    ─────────────────────────────────────────
    */

    let currentStageIndex = -1;

    const duration = 4000;

    let startTime = null;


    /*
    ─────────────────────────────────────────
    FINISH LOADING
    ─────────────────────────────────────────
    */

    function finishLoading() {

      if (percentageEl) {
        percentageEl.textContent = '100%';
      }

      if (barFillEl) {
        barFillEl.style.width = '100%';
      }

      if (ringProgressEl) {
        ringProgressEl.style.strokeDashoffset = '0';
      }

      if (labelEl) {
        labelEl.textContent = 'ASHISH KUMAR · SYSTEM READY ✓';
      }

      if (statusEl) {
        statusEl.textContent =
          '> DEVOPS ENVIRONMENT INITIALIZED';
      }


      setTimeout(() => {

        loader.classList.add(
          'devops-loader--hidden'
        );

        mainElements.forEach(el => {

          el.style.opacity = '1';

          el.style.transform =
            'translateY(0)';

        });

        document.body.classList.remove(
          'loading'
        );


        setTimeout(() => {

          loader.style.display = 'none';

        }, 800);

      }, 600);
    }


    /*
    ─────────────────────────────────────────
    LOADER ANIMATION
    ─────────────────────────────────────────
    */

    function updateLoader(timestamp) {

      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed =
        timestamp - startTime;

      const rawProgress =
        Math.min(
          elapsed / duration,
          1
        );


      /*
      Smooth ease-out animation
      */

      const progress =
        rawProgress *
        (2 - rawProgress) *
        100;

      const currentVal =
        Math.floor(progress);


      /*
      Percentage
      */

      if (percentageEl) {
        percentageEl.textContent =
          `${currentVal}%`;
      }


      /*
      Progress bar
      */

      if (barFillEl) {
        barFillEl.style.width =
          `${currentVal}%`;
      }


      /*
      Circular progress ring
      */

      if (ringProgressEl) {

        const circumference =
          289.026;

        const offset =
          circumference -
          (
            circumference *
            currentVal /
            100
          );

        ringProgressEl.style.strokeDashoffset =
          offset;

      }


      /*
      Find active stage
      */

      let activeStageIndex = -1;

      for (
        let i = stages.length - 1;
        i >= 0;
        i--
      ) {

        if (
          currentVal >=
          stages[i].threshold
        ) {

          activeStageIndex = i;

          break;
        }
      }


      /*
      Add completed tools
      */

      if (
        activeStageIndex >
        currentStageIndex
      ) {

        for (
          let i =
            currentStageIndex + 1;
          i <= activeStageIndex;
          i++
        ) {

          const stage =
            stages[i];


          if (statusEl) {
            statusEl.textContent =
              stage.text;
          }


          if (toolsContainer) {

            const toolEl =
              document.createElement('div');

            toolEl.className =
              `devops-loader__tool ${stage.posClass}`;


            /*
            Safe DOM creation
            instead of unsafe HTML injection.
            */

            const toolName =
              document.createElement('span');

            toolName.textContent =
              stage.tool;


            const check =
              document.createElement('span');

            check.className =
              'devops-loader__tool-check';

            check.textContent =
              '✓';


            toolEl.appendChild(
              toolName
            );

            toolEl.appendChild(
              check
            );


            toolsContainer.appendChild(
              toolEl
            );


            /*
            Trigger animation
            */

            void toolEl.offsetWidth;

            toolEl.classList.add(
              'visible'
            );

          }

        }


        currentStageIndex =
          activeStageIndex;

      }


      /*
      Continue animation
      */

      if (rawProgress < 1) {

        requestAnimationFrame(
          updateLoader
        );

      } else {

        finishLoading();

      }

    }


    /*
    ─────────────────────────────────────────
    REDUCED MOTION
    ─────────────────────────────────────────
    */

    const prefersReducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;


    if (prefersReducedMotion) {

      finishLoading();

    } else {

      requestAnimationFrame(
        updateLoader
      );

    }

  }


  /*
  ═══════════════════════════════════════════
  GLOBAL REDUCED MOTION
  ═══════════════════════════════════════════
  */

  const reducedMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;


  /*
  ═══════════════════════════════════════════
  MOBILE MENU
  ═══════════════════════════════════════════
  */

  const menuBtn =
    document.getElementById(
      'menuBtn'
    );

  const nav =
    document.getElementById(
      'nav'
    );


  if (menuBtn && nav) {

    menuBtn.addEventListener(
      'click',
      () => {

        nav.classList.toggle(
          'open'
        );

        menuBtn.classList.toggle(
          'active'
        );

      }
    );

  }


  /*
  Close mobile menu
  after navigation click
  */

  document
    .querySelectorAll('nav a')
    .forEach(link => {

      link.addEventListener(
        'click',
        () => {

          nav?.classList.remove(
            'open'
          );

          menuBtn?.classList.remove(
            'active'
          );

        }
      );

    });


  /*
  ═══════════════════════════════════════════
  SCROLL REVEAL
  ═══════════════════════════════════════════
  */

  const revealElements =
    document.querySelectorAll(
      '.reveal'
    );


  if (
    'IntersectionObserver'
    in window
  ) {

    const revealObserver =
      new IntersectionObserver(

        entries => {

          entries.forEach(
            entry => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  'visible'
                );

                revealObserver.unobserve(
                  entry.target
                );

              }

            }
          );

        },

        {
          threshold: 0.1,

          rootMargin:
            '0px 0px -40px 0px'
        }

      );


    revealElements.forEach(
      element => {

        revealObserver.observe(
          element
        );

      }
    );

  } else {

    /*
    Fallback for older browsers
    */

    revealElements.forEach(
      element => {

        element.classList.add(
          'visible'
        );

      }
    );

  }


  /*
  ═══════════════════════════════════════════
  ACTIVE NAVIGATION
  ═══════════════════════════════════════════
  */

  const sections =
    document.querySelectorAll(
      'section[id]'
    );

  const navLinks =
    document.querySelectorAll(
      'nav a[href^="#"]'
    );


  function updateActiveNav() {

    const scrollY =
      window.scrollY + 160;

    let currentId = '';


    sections.forEach(
      section => {

        if (
          section.offsetTop <=
          scrollY
        ) {

          currentId =
            section.id;

        }

      }
    );


    navLinks.forEach(
      link => {

        const href =
          link.getAttribute(
            'href'
          );

        link.classList.toggle(
          'active',
          href ===
          `#${currentId}`
        );

      }
    );

  }


  let navTicking = false;


  window.addEventListener(
    'scroll',
    () => {

      if (!navTicking) {

        requestAnimationFrame(
          () => {

            updateActiveNav();

            navTicking = false;

          }
        );

        navTicking = true;

      }

    },
    {
      passive: true
    }
  );


  updateActiveNav();


  /*
  ═══════════════════════════════════════════
  CURSOR GLOW
  ═══════════════════════════════════════════
  */

  const glow =
    document.querySelector(
      '.cursor-glow'
    );


  if (
    glow &&
    !reducedMotion &&
    window.matchMedia(
      '(hover: hover)'
    ).matches
  ) {

    let glowX = 0;

    let glowY = 0;

    let glowRaf = false;


    window.addEventListener(
      'mousemove',
      event => {

        glowX =
          event.clientX;

        glowY =
          event.clientY;


        if (!glowRaf) {

          glowRaf = true;


          requestAnimationFrame(
            () => {

              glow.style.left =
                `${glowX}px`;

              glow.style.top =
                `${glowY}px`;

              glowRaf = false;

            }
          );

        }

      },
      {
        passive: true
      }
    );


  } else if (glow) {

    glow.style.display =
      'none';

  }


  /*
  ═══════════════════════════════════════════
  CARD TILT EFFECT
  ═══════════════════════════════════════════
  */

  document
    .querySelectorAll(
      '[data-tilt]'
    )
    .forEach(card => {

      let tiltRaf = false;


      card.addEventListener(
        'mousemove',
        event => {

          if (
            window.innerWidth < 850 ||
            reducedMotion
          ) {

            return;

          }


          if (tiltRaf) {
            return;
          }


          tiltRaf = true;


          requestAnimationFrame(
            () => {

              const rect =
                card.getBoundingClientRect();


              const x =
                (
                  event.clientX -
                  rect.left
                ) /
                  rect.width -
                0.5;


              const y =
                (
                  event.clientY -
                  rect.top
                ) /
                  rect.height -
                0.5;


              card.style.transform =
                `perspective(900px) ` +
                `rotateX(${(-y * 4).toFixed(2)}deg) ` +
                `rotateY(${(x * 5).toFixed(2)}deg) ` +
                `translateY(-3px)`;


              tiltRaf = false;

            }
          );

        },
        {
          passive: true
        }
      );


      card.addEventListener(
        'mouseleave',
        () => {

          card.style.transform =
            '';

        }
      );

    });


  /*
  ═══════════════════════════════════════════
  BUTTON MAGNETIC HOVER
  ═══════════════════════════════════════════
  */

  if (
    !reducedMotion &&
    window.matchMedia(
      '(hover: hover)'
    ).matches
  ) {

    document
      .querySelectorAll(
        '.btn'
      )
      .forEach(button => {


        button.addEventListener(
          'mousemove',
          event => {

            const rect =
              button.getBoundingClientRect();


            const mouseX =
              (
                (
                  event.clientX -
                  rect.left
                ) /
                rect.width
              ) * 100;


            const mouseY =
              (
                (
                  event.clientY -
                  rect.top
                ) /
                rect.height
              ) * 100;


            button.style.setProperty(
              '--mouse-x',
              `${mouseX}%`
            );


            button.style.setProperty(
              '--mouse-y',
              `${mouseY}%`
            );

          },
          {
            passive: true
          }
        );


        button.addEventListener(
          'mouseleave',
          () => {

            button.style.removeProperty(
              '--mouse-x'
            );

            button.style.removeProperty(
              '--mouse-y'
            );

          }
        );

      });

  }


  /*
  ═══════════════════════════════════════════
  SMOOTH ANCHOR SCROLL
  ═══════════════════════════════════════════
  */

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(anchor => {

      anchor.addEventListener(
        'click',
        event => {

          const targetId =
            anchor.getAttribute(
              'href'
            );


          if (
            !targetId ||
            targetId === '#'
          ) {

            return;

          }


          const target =
            document.querySelector(
              targetId
            );


          if (!target) {
            return;
          }


          event.preventDefault();


          const header =
            document.querySelector(
              '.navbar'
            );


          const headerHeight =
            header
              ? header.offsetHeight
              : 0;


          const targetPosition =
            target.getBoundingClientRect()
              .top +
            window.scrollY -
            headerHeight -
            15;


          window.scrollTo({

            top:
              targetPosition,

            behavior:
              reducedMotion
                ? 'auto'
                : 'smooth'

          });

        }
      );

    });


  /*
  ═══════════════════════════════════════════
  IMAGE FALLBACK
  ═══════════════════════════════════════════

  Agar profile.jpg missing ho,
  broken-image icon ke badle initials
  show karne mein help karega.
  */

  const profileImage =
    document.querySelector(
      '.profile-ring img'
    );


  if (profileImage) {

    profileImage.addEventListener(
      'error',
      () => {

        profileImage.style.display =
          'none';


        const ring =
          profileImage.parentElement;


        if (ring && !ring.querySelector(
          '.profile-fallback'
        )) {

          const fallback =
            document.createElement(
              'div'
            );


          fallback.className =
            'profile-fallback';


          fallback.textContent =
            'AK';


          ring.appendChild(
            fallback
          );

        }

      }
    );

  }


  /*
  ═══════════════════════════════════════════
  CONSOLE BRANDING
  ═══════════════════════════════════════════
  */

  console.log(
    '%c Ashish Kumar — DevOps Engineer ',
    'background:#111318;color:#ffffff;' +
    'padding:8px 14px;' +
    'border-radius:6px;' +
    'font-weight:700;'
  );

  console.log(
    '%c Azure • Terraform • DevSecOps • CI/CD ',
    'color:#555;font-weight:600;'
  );


})();
