/* ==========================================
   ROD WATCHES & JEWELRY - APPLICATION LOGIC
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // Luxury Catalog Products Database
  const products = [
    {
      id: 1,
      brand: "Rolex",
      model: "Daytona 18k Yellow Gold",
      reference: "116508-0013",
      price: 48500,
      priceFormatted: "$48,500 USD",
      condition: "Mint / Sin Usar",
      year: "2023",
      boxPapers: "Caja y Tarjeta de Garantía",
      movement: "Calibre 4130 Automático",
      caseSize: "40 mm",
      image: "assets/images/daytona.png",
      featured: true,
      description: "Icónico cronógrafo Rolex Daytona en oro amarillo de 18k con esfera negra. Una obra maestra de precisión y elegancia atemporal."
    },
    {
      id: 2,
      brand: "Patek Philippe",
      model: "Nautilus Steel Blue Dial",
      reference: "5711/1A-010",
      price: 98000,
      priceFormatted: "$98,000 USD",
      condition: "Excelente Estado",
      year: "2021",
      boxPapers: "Set Completo (Caja & Certificado)",
      movement: "Calibre 26-330 S C Automático",
      caseSize: "40 mm",
      image: "assets/images/nautilus.png",
      featured: true,
      description: "El reloj deportivo de lujo por excelencia. Bisel octogonal sutilmente redondeado y esfera con relieve horizontal azul."
    },
    {
      id: 3,
      brand: "Audemars Piguet",
      model: "Royal Oak Offshore Chronograph",
      reference: "26470OR.OO.A002CR.01",
      price: 54000,
      priceFormatted: "$54,000 USD",
      condition: "Como Nuevo",
      year: "2022",
      boxPapers: "Caja Original y Papeles",
      movement: "Calibre 3126 / 3840 Automático",
      caseSize: "42 mm",
      image: "assets/images/royaloak.png",
      featured: true,
      description: "Potente diseño en oro rosa de 18 quilates con esfera negra con grabado 'Méga Tapisserie' y pulsadores de cerámica."
    },
    {
      id: 4,
      brand: "Cartier",
      model: "Santos de Cartier Large",
      reference: "WSSA0018",
      price: 8400,
      priceFormatted: "$8,400 USD",
      condition: "Mint / Prácticamente Nuevo",
      year: "2024",
      boxPapers: "Set Completo de Fábrica",
      movement: "Calibre 1847 MC Automático",
      caseSize: "39.8 mm",
      image: "assets/images/santos.png",
      featured: true,
      description: "Clásico de la aviación en acero inoxidable con sistema de intercambio rápido de brazalete QuickSwitch."
    },
    {
      id: 5,
      brand: "Rolex",
      model: "Submariner Date 'Starbucks'",
      reference: "126610LV",
      price: 15800,
      priceFormatted: "$15,800 USD",
      condition: "Sin Usar (Unworn)",
      year: "2024",
      boxPapers: "Set Completo 5 Años Garantía",
      movement: "Calibre 3235 Automático",
      caseSize: "41 mm",
      image: "assets/images/daytona.png", // reusing high-res asset
      featured: false,
      description: "El reloj de buceo de referencia con bisel Cerachrom verde y esfera negra de máxima legibilidad."
    },
    {
      id: 6,
      brand: "Omega",
      model: "Speedmaster Moonwatch Professional",
      reference: "310.30.42.50.01.001",
      price: 7600,
      priceFormatted: "$7,600 USD",
      condition: "Excelente",
      year: "2023",
      boxPapers: "Caja y Garantía Omega",
      movement: "Co-Axial Master Chronometer 3861",
      caseSize: "42 mm",
      image: "assets/images/nautilus.png", // reusing high-res asset
      featured: false,
      description: "El legendario cronógrafo que formó parte de las seis misiones lunares. Certificación Master Chronometer."
    }
  ];

  // DOM Elements
  const productsGrid = document.getElementById('productsGrid');
  const brandChips = document.querySelectorAll('.brand-chip');
  const sortSelect = document.getElementById('sortSelect');
  const catalogSearchInput = document.getElementById('catalogSearchInput');
  const searchToggleBtn = document.getElementById('searchToggleBtn');
  const closeSearchBtn = document.getElementById('closeSearchBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  // Modal Elements
  const productModal = document.getElementById('productModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalBody = document.getElementById('modalBody');

  // State
  let currentBrandFilter = 'all';
  let currentSearchQuery = '';
  let currentSort = 'default';

  // Render Catalog
  function renderCatalog() {
    let filtered = products.filter(product => {
      const matchesBrand = (currentBrandFilter === 'all') || (product.brand.toLowerCase() === currentBrandFilter.toLowerCase());
      const matchesSearch = product.model.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                            product.brand.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                            product.reference.toLowerCase().includes(currentSearchQuery.toLowerCase());
      return matchesBrand && matchesSearch;
    });

    // Sorting
    if (currentSort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'name-asc') {
      filtered.sort((a, b) => a.model.localeCompare(b.model));
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
          <i class="fa-solid fa-clock-rotate-left" style="font-size: 3rem; color: var(--gold-primary); margin-bottom: 1rem;"></i>
          <h3 style="font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 0.5rem;">No se encontraron piezas</h3>
          <p style="color: var(--text-secondary);">Intenta buscar con otros términos o cambia el filtro de marca.</p>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(product => `
      <div class="product-card">
        <div class="product-image-container">
          <img src="${product.image}" alt="${product.brand} ${product.model}">
          <span class="product-badge">${product.condition}</span>
        </div>
        <div class="product-info">
          <span class="product-brand">${product.brand}</span>
          <h3 class="product-title">${product.model}</h3>
          <p class="product-specs">Ref. ${product.reference} &bull; ${product.year} &bull; ${product.caseSize}</p>
          <div class="product-footer">
            <span class="product-price">${product.priceFormatted}</span>
            <div class="product-actions">
              <button class="btn btn-gold-outline view-details-btn" data-id="${product.id}" title="Ver Detalles"><i class="fa-solid fa-eye"></i></button>
              <a href="https://wa.me/573000000000?text=Hola%20Rod%20Watches,%20estoy%20interesado%20en%20el%20${encodeURIComponent(product.brand + ' ' + product.model + ' (Ref. ' + product.reference + ')')}" target="_blank" class="btn btn-gold" title="Comprar / Inquirir"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click events to "Ver Detalles" buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(btn.getAttribute('data-id'));
        openProductModal(id);
      });
    });
  }

  // Brand Filter Event Listener
  brandChips.forEach(chip => {
    chip.addEventListener('click', () => {
      brandChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentBrandFilter = chip.getAttribute('data-brand');
      renderCatalog();
    });
  });

  // Sort Event Listener
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderCatalog();
    });
  }

  // Search Toggle & Live Filtering
  if (searchToggleBtn) {
    searchToggleBtn.addEventListener('click', () => {
      searchOverlay.classList.toggle('active');
      if (searchOverlay.classList.contains('active')) {
        catalogSearchInput.focus();
      }
    });
  }

  if (closeSearchBtn) {
    closeSearchBtn.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
    });
  }

  if (catalogSearchInput) {
    catalogSearchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderCatalog();
    });
  }

  // Mobile Menu Toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Modal Handling
  function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    modalBody.innerHTML = `
      <div class="modal-image">
        <img src="${product.image}" alt="${product.brand} ${product.model}">
      </div>
      <div class="modal-details">
        <span class="product-brand">${product.brand}</span>
        <h3>${product.model}</h3>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">Referencia: <strong>${product.reference}</strong></p>
        
        <div class="modal-price">${product.priceFormatted}</div>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${product.description}</p>
        
        <table class="modal-specs-table">
          <tr>
            <td><i class="fa-solid fa-shield"></i> Condición:</td>
            <td><strong>${product.condition}</strong></td>
          </tr>
          <tr>
            <td><i class="fa-solid fa-calendar"></i> Año:</td>
            <td><strong>${product.year}</strong></td>
          </tr>
          <tr>
            <td><i class="fa-solid fa-box-archive"></i> Incluye:</td>
            <td><strong>${product.boxPapers}</strong></td>
          </tr>
          <tr>
            <td><i class="fa-solid fa-gear"></i> Movimiento:</td>
            <td><strong>${product.movement}</strong></td>
          </tr>
          <tr>
            <td><i class="fa-solid fa-ruler-combined"></i> Tamaño de Caja:</td>
            <td><strong>${product.caseSize}</strong></td>
          </tr>
        </table>

        <div style="display: flex; gap: 1rem; margin-top: 2rem;">
          <a href="https://wa.me/573000000000?text=Hola%20Rod%20Watches,%20deseo%20comprar/inquirir%20sobre%20el%20${encodeURIComponent(product.brand + ' ' + product.model + ' (Ref. ' + product.reference + ')')}" target="_blank" class="btn btn-gold btn-block" style="font-size: 1rem;"><i class="fa-brands fa-whatsapp"></i> Iniciar Compra por WhatsApp</a>
        </div>
      </div>
    `;

    productModal.classList.add('active');
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      productModal.classList.remove('active');
    });
  }

  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) {
        productModal.classList.remove('active');
      }
    });
  }

  // Appraisal Form Wizard Logic
  const appraisalForm = document.getElementById('appraisalForm');
  if (appraisalForm) {
    const steps = appraisalForm.querySelectorAll('.form-step');
    const nextBtns = appraisalForm.querySelectorAll('.next-step-btn');
    const prevBtns = appraisalForm.querySelectorAll('.prev-step-btn');
    const estimatedValueDisplay = document.getElementById('estimatedValueDisplay');

    let currentStepIndex = 0;

    function updateStepVisibility() {
      steps.forEach((step, idx) => {
        step.classList.toggle('active', idx === currentStepIndex);
      });
    }

    nextBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const brand = document.getElementById('watchBrand').value;
        const model = document.getElementById('watchModel').value;

        if (currentStepIndex === 0 && (!brand || !model.trim())) {
          alert('Por favor selecciona la marca e ingresa el modelo de tu reloj.');
          return;
        }

        if (currentStepIndex < steps.length - 1) {
          currentStepIndex++;
          
          // Calculate dynamic estimation range for step 3 display
          if (currentStepIndex === 2) {
            let baseMin = 5000;
            let baseMax = 25000;
            if (brand === 'Patek Philippe' || brand === 'Audemars Piguet') {
              baseMin = 28000;
              baseMax = 95000;
            } else if (brand === 'Rolex') {
              baseMin = 9000;
              baseMax = 42000;
            }
            estimatedValueDisplay.textContent = `$${baseMin.toLocaleString()} - $${baseMax.toLocaleString()} USD`;
          }

          updateStepVisibility();
        }
      });
    });

    prevBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (currentStepIndex > 0) {
          currentStepIndex--;
          updateStepVisibility();
        }
      });
    });

    appraisalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const brand = document.getElementById('watchBrand').value;
      const model = document.getElementById('watchModel').value;
      const hasBox = document.getElementById('hasBox').checked ? 'Sí' : 'No';
      const hasPapers = document.getElementById('hasPapers').checked ? 'Sí' : 'No';
      const condition = document.getElementById('watchCondition').value;
      const name = document.getElementById('clientName').value;
      const phone = document.getElementById('clientPhone').value;

      const message = `Hola Rod Watches! Deseo recibir una oferta de compra/tasación por mi reloj:%0A%0A` +
                      `⌚ *Marca:* ${brand}%0A` +
                      `📌 *Modelo:* ${model}%0A` +
                      `📦 *Caja Original:* ${hasBox}%0A` +
                      `📜 *Papeles/Garantía:* ${hasPapers}%0A` +
                      `✨ *Estado:* ${condition}%0A%0A` +
                      `👤 *Nombre:* ${name}%0A` +
                      `📞 *Contacto:* ${phone}`;

      window.open(`https://wa.me/573000000000?text=${message}`, '_blank');
    });
  }

  // Initial catalog render
  renderCatalog();
});
