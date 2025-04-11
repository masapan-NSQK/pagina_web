// Datos de productos organizados por categorías
const productos = {
    canteras: [
        { 
            id: 'cantera-rosa', 
            nombre: 'Cantera Rosa', 
            imagen: 'img/materiales/cantera-rosa.jpg', 
            descripcion: 'Cantera rosa ideal para fachadas y muros decorativos',
            precio: 'Desde $450/m²'
        },
        { 
            id: 'cantera-arcoiris', 
            nombre: 'Cantera Arcoiris', 
            imagen: 'img/materiales/cantera-arcoiris.jpg', 
            descripcion: 'Cantera arcoiris ideal para fachadas y muros decorativos',
            precio: 'Desde $450/m²'
        },
        { 
            id: 'cantera-blanca-luxor', 
            nombre: 'Cantera Blanca Luxor', 
            imagen: 'img/materiales/cantera-blanca-luxor.jpg', 
            descripcion: 'Cantera Blanca Luxor ideal para fachadas y muros decorativos',
            precio: 'Desde $450/m²'
        },
        { 
            id: 'cantera-bronce', 
            nombre: 'Cantera Bronce', 
            imagen: 'img/materiales/cantera-bronce.jpg', 
            descripcion: 'Cantera Bronce ideal para fachadas y muros decorativos',
            precio: 'Desde $450/m²'
        },
        { 
            id: 'cantera-cafe', 
            nombre: 'Cantera Café', 
            imagen: 'img/materiales/cantera-cafe.jpg', 
            descripcion: 'Cantera color café con tonos cálidos uniformes',
            precio: 'Desde $480/m²'
        },
        { 
            id: 'cantera-gris', 
            nombre: 'Cantera Gris de los Remedios', 
            imagen: 'img/materiales/cantera-gris-de-los-remedios.jpg', 
            descripcion: 'Cantera gris clásica para pisos y fachadas',
            precio: 'Desde $470/m²'
        },
        { 
            id: 'cantera-huizquilucan', 
            nombre: 'Cantera Huizquilucan', 
            imagen: 'img/materiales/cantera-huizquilucan.jpg', 
            descripcion: 'Cantera Blanca Luxor ideal para fachadas y muros decorativos',
            precio: 'Desde $450/m²'
        },
        { 
            id: 'cantera-maya', 
            nombre: 'Cantera Maya', 
            imagen: 'img/materiales/cantera-maya.jpg', 
            descripcion: 'Cantera Maya Luxor ideal para fachadas y muros decorativos',
            precio: 'Desde $450/m²'
        },
        { 
            id: 'cantera-naranja', 
            nombre: 'Cantera Naranja', 
            imagen: 'img/materiales/cantera-naranja.jpg', 
            descripcion: 'Cantera de tonos cálidos anaranjados',
            precio: 'Desde $510/m²'
        },
        { 
            id: 'cantera-negra', 
            nombre: 'Cantera Negra', 
            imagen: 'img/materiales/cantera-negra.jpg', 
            descripcion: 'Cantera de tono oscuro para espacios elegantes',
            precio: 'Desde $550/m²'
        },
        { 
            id: 'cantera-ticul', 
            nombre: 'Cantera Ticul', 
            imagen: 'img/materiales/cantera-ticul.jpg', 
            descripcion: 'Cantera de la región de Yucatán con tono rojizo',
            precio: 'Desde $580/m²'
        }
    ],
    marmoles: [
        { 
            id: 'blanco', 
            nombre: 'Blanco', 
            imagen: 'img/materiales/marmol-blanco.jpg', 
            descripcion: 'Mármol Blanco ideal para interiores y exteriores',
            precio: 'Desde $950/m²'
        },
        { 
            id: 'acabado-1', 
            nombre: 'Acabado 1', 
            imagen: 'img/materiales/marmoles-acabado1.jpg', 
            descripcion: 'Mármoles con diferentes acabados',
            precio: 'Desde $950/m²'
        },
        { 
            id: 'acabado-2', 
            nombre: 'Acabado 2', 
            imagen: 'img/materiales/marmoles-acabado2.jpg', 
            descripcion: 'Mármoles con diferentes acabados',
            precio: 'Desde $950/m²'
        },
        { 
            id: 'acabado-3', 
            nombre: 'Acabado 3', 
            imagen: 'img/materiales/marmoles-acabado3.jpg', 
            descripcion: 'Mármoles con diferentes acabados',
            precio: 'Desde $950/m²'
        },
        { 
            id: 'acabado-4', 
            nombre: 'Acabado 4', 
            imagen: 'img/materiales/marmoles-acabado4.jpg', 
            descripcion: 'Mármoles con diferentes acabados',
            precio: 'Desde $950/m²'
        },
        { 
            id: 'acabado-5', 
            nombre: 'Acabado 5', 
            imagen: 'img/materiales/marmoles-acabado5.jpg', 
            descripcion: 'Mármoles con diferentes acabados',
            precio: 'Desde $950/m²'
        },
        { 
            id: 'acabado-6', 
            nombre: 'Acabado 6', 
            imagen: 'img/materiales/marmoles-acabado6.jpg', 
            descripcion: 'Mármoles con diferentes acabados',
            precio: 'Desde $950/m²'
        },
        { 
            id: 'acabado-7', 
            nombre: 'Acabado 7', 
            imagen: 'img/materiales/marmoles-acabado7.jpg', 
            descripcion: 'Mármoles con diferentes acabados',
            precio: 'Desde $950/m²'
        },
        { 
            id: 'beige-maya', 
            nombre: 'Beige Maya', 
            imagen: 'img/materiales/marmoles-beige-maya.jpg', 
            descripcion: 'Mármol de tono beige con vetas suaves',
            precio: 'Desde $950/m²'
        },
        { 
            id: 'bellagio', 
            nombre: 'Bellagio', 
            imagen: 'img/materiales/marmoles-bellagio.jpg', 
            descripcion: 'Mármol de lujo con diseño exclusivo Bellagio',
            precio: 'Desde $1,100/m²'
        },
        { 
            id: 'blanco-platino', 
            nombre: 'Blanco Platino',
            imagen: 'img/materiales/marmoles-blanco-platino.jpg',
            descripcion: 'Mármol elegante blanco platino con reflejos metálicos',
            precio: 'Desde $1,020/m²'
        },
        { 
            id: 'blanco-vego', 
            nombre: 'Blanco Vego',
            imagen: 'img/materiales/marmoles-blanco-vego.jpg',
            descripcion: 'Mármol blanco con vetas grises para un look contemporáneo',
            precio: 'Desde $1,020/m²'
        },
        { 
            id: 'cafe-tabaco', 
            nombre: 'Café Tabaco',
            imagen: 'img/materiales/marmoles-cafe-tabaco.jpg',
            descripcion: 'Mármol elegante color café tabaco con vetas doradas',
            precio: 'Desde $1,020/m²'
        },        
        { 
            id: 'crema-arena', 
            nombre: 'Crema Arena', 
            imagen: 'img/materiales/marmoles-crema-arena.jpg', 
            descripcion: 'Mármol en tonos arena que evocan playas desérticas',
            precio: 'Desde $1,020/m²'
        },
        { 
            id: 'crema-desierto',
            nombre: 'Crema del Desierto', 
            imagen: 'img/materiales/marmoles-crema-del-desierto.jpg',
            descripcion: 'Mármol en tonos crema con vetas que recuerdan dunas de arena',
            precio: 'Desde $1,020/m²'
        },
        { 
            id: 'crema-ibory', 
            nombre: 'Crema Ibory', 
            imagen: 'img/materiales/marmoles-crema-ibory.jpg', 
            descripcion: 'Mármol crema con vetas elegantes para interiores clásicos',
            precio: 'Desde $1,020/m²'
        },
        { 
            id: 'jaspe-rosa', 
            nombre: 'Jaspe Rosa', 
            imagen: 'img/materiales/marmoles-jaspe-rosa.jpg', 
            descripcion: 'Mármol con tonalidades rosadas y vetas distintivas para proyectos exclusivos',
            precio: 'Desde $1,350/m²'
        },
        { 
            id: 'negro-monterrey', 
            nombre: 'Negro Monterrey', 
            imagen: 'img/materiales/marmoles-negro-monterrey.jpg', 
            descripcion: 'Mármol negro intenso con vetas blancas, originario de Monterrey',
            precio: 'Desde $1,350/m²'
        },
        { 
            id: 'negro-oaxaca', 
            nombre: 'Negro Oaxaca', 
            imagen: 'img/materiales/marmoles-negro-oaxaca.jpg', 
            descripcion: 'Mármol negro con vetas doradas, característico de Oaxaca',
            precio: 'Desde $1,350/m²'
        },
        { 
            id: 'santo-tomas', 
            nombre: 'Santo Tomás', 
            imagen: 'img/materiales/marmoles-santo-tomas.jpg', 
            descripcion: 'Mármol mexicano de alta calidad con tonos beige y vetas marcadas',
            precio: 'Desde $1,150/m²'
        },
        { 
            id: 'venetian-white', 
            nombre: 'Venetian White', 
            imagen: 'img/materiales/marmoles-venetian-white.jpg', 
            descripcion: 'Mármol blanco con vetas doradas para un look veneciano de lujo',
            precio: 'Desde $1,550/m²'
        },
        { 
            id: 'verde-quetzal', 
            nombre: 'Verde Quetzal', 
            imagen: 'img/materiales/marmoles-verde-quetzal.jpg', 
            descripcion: 'Mármol verde con tonalidades que evocan las plumas del quetzal',
            precio: 'Desde $1,350/m²'
        }
    ],
    lajas: [
        { 
            id: 'laja-tlayua', 
            nombre: 'Laja Tlayua Mexicana', 
            imagen: 'img/materiales/laja-tlayua-mexicana.jpg', 
            descripcion: 'Laja natural extraída en Puebla, ideal para pisos rústicos',
            precio: 'Desde $380/m²'
        },
        { 
            id: 'laja-multicolor', 
            nombre: 'Laja Multicolor', 
            imagen: 'img/materiales/laja-multicolor-importada.jpg', 
            descripcion: 'Laja importada con variedad de tonos para proyectos vistosos',
            precio: 'Desde $450/m²'
        },
        { 
            id: 'laja-plata', 
            nombre: 'Laja Plata', 
            imagen: 'img/materiales/laja-plata-importada.jpg', 
            descripcion: 'Laja importada de tonos plateados y grises metálicos',
            precio: 'Desde $520/m²'
        }
    ],
    travertinos: [
        { 
            id: 'travertino-fiorito', 
            nombre: 'Travertino Fiorito', 
            imagen: 'img/materiales/travertino-fiorito.jpg', 
            descripcion: 'Travertino con detalles florales naturales para proyectos exclusivos',
            precio: 'Desde $850/m²'
        },
        { 
            id: 'travertino-jalapa', 
            nombre: 'Travertino Jalapa', 
            imagen: 'img/materiales/travertino-jalapa.jpg', 
            descripcion: 'Travertino mexicano de la región de Veracruz, tonos cálidos',
            precio: 'Desde $780/m²'
        },
        { 
            id: 'travertino-veteado', 
            nombre: 'Travertino Veteado', 
            imagen: 'img/materiales/travertino-veteado.jpg', 
            descripcion: 'Travertino con vetas pronunciadas para un look clásico',
            precio: 'Desde $820/m²'
        },
        { 
            id: 'travertino-san-pablo', 
            nombre: 'Travertino San Pablo', 
            imagen: 'img/materiales/travertino-san-pablo.jpg', 
            descripcion: 'Travertino de tonalidad cálida uniforme para proyectos residenciales',
            precio: 'Desde $790/m²'
        }
    ],
    acabados: [
        { 
            id: 'terrazos', 
            nombre: 'Terrazos', 
            imagen: 'img/materiales/terrazos.jpg', 
            descripcion: 'Acabados en terrazo para pisos de alto tráfico y áreas comerciales',
            precio: 'Desde $650/m²'
        },
        { 
            id: 'mosaicos', 
            nombre: 'Mosaicos', 
            imagen: 'img/materiales/mosaicos.jpg', 
            descripcion: 'Mosaicos decorativos para muros y pisos con diseños personalizados',
            precio: 'Desde $720/m²'
        },
        { 
            id: 'maya-decorativa', 
            nombre: 'Maya Decorativa', 
            imagen: 'img/materiales/maya-decorativa1.jpg', 
            descripcion: 'Placas decorativas de 30x30 cm con motivos mayas para revestimientos',
            precio: 'Desde $580/m²'
        }
    ]
};

// Función para detectar dispositivo móvil
function detectarDispositivo() {
    const esMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (esMovil) {
        document.body.classList.add('dispositivo-movil');
        console.log('Dispositivo móvil detectado - Aplicando optimizaciones');
    } else {
        document.body.classList.add('dispositivo-escritorio');
    }
}

// Sistema de Cookies Mejorado
function configurarCookies() {
    const cookieNotice = document.getElementById('cookie-notice');
    const acceptAllBtn = document.getElementById('accept-all-cookies');
    const savePrefBtn = document.getElementById('save-cookie-preferences');
    const rejectBtn = document.getElementById('reject-cookies');
    const analyticsCheckbox = document.getElementById('analytics-cookies');
    const marketingCheckbox = document.getElementById('marketing-cookies');

    // Mostrar el banner después de 1 segundo si no hay preferencias guardadas
    setTimeout(() => {
        if (!localStorage.getItem('cookiePreferences')) {
            cookieNotice.classList.add('show');
        } else {
            cargarCookiesSegunPreferencias();
        }
    }, 1000);

    // Event listeners para los botones
    acceptAllBtn.addEventListener('click', () => {
        guardarPreferencias(true, true);
    });

    savePrefBtn.addEventListener('click', () => {
        guardarPreferencias(analyticsCheckbox.checked, marketingCheckbox.checked);
    });

    rejectBtn.addEventListener('click', () => {
        guardarPreferencias(false, false);
    });

    function guardarPreferencias(analytics, marketing) {
        const preferences = {
            essential: true,
            analytics: analytics,
            marketing: marketing,
            fecha: new Date().toISOString()
        };
        
        localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
        cookieNotice.classList.remove('show');
        cargarCookiesSegunPreferencias();
    }

    function cargarCookiesSegunPreferencias() {
        const preferences = JSON.parse(localStorage.getItem('cookiePreferences')) || {
            essential: true,
            analytics: false,
            marketing: false
        };

        // Cookies esenciales siempre se cargan
        cargarCookiesEsenciales();
        
        if (preferences.analytics) {
            cargarCookiesAnaliticas();
        }
        
        if (preferences.marketing) {
            cargarCookiesMarketing();
        }
    }

    function cargarCookiesEsenciales() {
        console.log('Cargando cookies esenciales');
        // Código para cookies técnicas necesarias
    }

    function cargarCookiesAnaliticas() {
        console.log('Cargando cookies analíticas');
        // Ejemplo: Google Analytics
        // if (typeof gtag !== 'undefined') {
        //     gtag('config', 'TU-ID-DE-ANALYTICS');
        // }
    }

    function cargarCookiesMarketing() {
        console.log('Cargando cookies de marketing');
        // Ejemplo: Facebook Pixel
        // if (typeof fbq !== 'undefined') {
        //     fbq('init', 'TU-ID-DE-PIXEL');
        // }
    }
}

// Función para llenar el select de materiales en el formulario
function llenarSelectMateriales() {
    const selectMaterial = document.getElementById('material');
    
    // Limpiar opciones existentes (excepto la primera)
    while (selectMaterial.options.length > 1) {
        selectMaterial.remove(1);
    }
    
    // Agrupar materiales por categoría
    const grupos = {
        'Canteras Mexicanas': productos.canteras,
        'Mármoles': productos.marmoles,
        'Lajas': productos.lajas,
        'Travertinos': productos.travertinos,
        'Acabados Especiales': productos.acabados
    };
    
    // Agregar opciones agrupadas
    Object.entries(grupos).forEach(([nombreGrupo, productosGrupo]) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = nombreGrupo;
        
        productosGrupo.forEach(producto => {
            const option = document.createElement('option');
            option.value = producto.nombre;
            option.textContent = producto.nombre;
            optgroup.appendChild(option);
        });
        
        selectMaterial.appendChild(optgroup);
    });
}

// Función para mostrar productos según la categoría seleccionada
function mostrarProductos(categoria) {
    const galeriaContainer = document.querySelector('.galeria-productos');
    galeriaContainer.innerHTML = ''; // Limpiar contenido existente
    
    let productosAMostrar = [];
    
    if (categoria === 'todos') {
        // Obtener todos los productos de todas las categorías
        Object.values(productos).forEach(categoriaProd => {
            productosAMostrar = productosAMostrar.concat(categoriaProd);
        });
    } else {
        // Obtener productos de la categoría seleccionada
        productosAMostrar = productos[categoria] || [];
    }
    
    // Si no hay productos para mostrar
    if (productosAMostrar.length === 0) {
        galeriaContainer.innerHTML = '<p class="no-resultados">No se encontraron productos en esta categoría.</p>';
        return;
    }
    
    // Generar el HTML para cada producto
    productosAMostrar.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.className = 'producto';
        productoElement.setAttribute('data-id', producto.id);
        
        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
            <h3>${producto.nombre}</h3>
            <p class="descripcion">${producto.descripcion}</p>
            <p class="precio">${producto.precio}</p>
            <a href="#cotizaciones" class="btn-cotizar" data-material="${producto.nombre}">Cotizar</a>
        `;
        
        galeriaContainer.appendChild(productoElement);
    });
    
    // Configurar los botones de cotizar
    configurarBotonesCotizar();
}

// Función para crear carruseles por categoría
function crearCarruseles() {
    const carruselesContainer = document.getElementById('carruseles-container');
    carruselesContainer.innerHTML = ''; // Limpiar contenido existente
    
    // Definir categorías y sus nombres amigables
    const categorias = {
        canteras: 'Canteras Mexicanas',
        marmoles: 'Mármoles',
        lajas: 'Lajas',
        travertinos: 'Travertinos',
        acabados: 'Acabados Especiales'
    };
    
    // Crear un carrusel para cada categoría
    Object.entries(categorias).forEach(([categoria, nombre]) => {
        const productosCategoria = productos[categoria] || [];
        
        if (productosCategoria.length === 0) return; // Saltar si no hay productos
        
        const carruselContainer = document.createElement('div');
        carruselContainer.className = 'carrusel-container';
        carruselContainer.id = `carrusel-${categoria}`;
        
        carruselContainer.innerHTML = `
            <h3>${nombre}</h3>
            <div class="carrusel-wrapper">
                <button class="carrusel-btn prev" aria-label="Anterior"><i class="fas fa-chevron-left"></i></button>
                <div class="carrusel">
                    ${productosCategoria.map(producto => `
                        <div class="carrusel-item" data-id="${producto.id}">
                            <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
                            <div class="carrusel-item-content">
                                <h4>${producto.nombre}</h4>
                                <p>${producto.precio}</p>
                                <a href="#cotizaciones" class="btn-cotizar" data-material="${producto.nombre}">Cotizar</a>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <button class="carrusel-btn next" aria-label="Siguiente"><i class="fas fa-chevron-right"></i></button>
            </div>
        `;
        
        carruselesContainer.appendChild(carruselContainer);
    });
    
    // Configurar la navegación de los carruseles
    document.querySelectorAll('.carrusel-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const carrusel = this.closest('.carrusel-wrapper').querySelector('.carrusel');
            const scrollAmount = carrusel.offsetWidth * 0.8;
            const isNext = this.classList.contains('next');
            
            carrusel.scrollBy({
                left: isNext ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        });
    });
    
    // Configurar los botones de cotizar en los carruseles
    configurarBotonesCotizar();
}

// Función para configurar los botones de cotizar (reutilizable)
function configurarBotonesCotizar() {
    document.querySelectorAll('.btn-cotizar').forEach(btn => {
        btn.addEventListener('click', function() {
            const material = this.getAttribute('data-material');
            if (material) {
                const selectMaterial = document.getElementById('material');
                // Buscar la opción que coincida con el material
                Array.from(selectMaterial.options).forEach(option => {
                    if (option.textContent === material) {
                        option.selected = true;
                        // Disparar un evento de cambio para actualizar la vista previa
                        const event = new Event('change');
                        selectMaterial.dispatchEvent(event);
                    }
                });
            }
        });
    });
}

// Función para configurar los botones de filtro
function configurarFiltros() {
    const botonesFiltro = document.querySelectorAll('.filtro-btn');
    
    botonesFiltro.forEach(btn => {
        btn.addEventListener('click', function() {
            // Quitar clase active de todos los botones
            botonesFiltro.forEach(b => b.classList.remove('active'));
            
            // Añadir clase active al botón actual
            this.classList.add('active');
            
            // Obtener categoría y mostrar productos
            const categoria = this.getAttribute('data-categoria');
            mostrarProductos(categoria);
        });
    });
}

// Función para configurar la búsqueda de productos
function configurarBusqueda() {
    const searchInput = document.getElementById('search-productos');
    const searchBtn = document.getElementById('search-btn');
    
    // Función para realizar la búsqueda
    const buscarProductos = () => {
        const busqueda = searchInput.value.toLowerCase().trim();
        
        if (busqueda === '') {
            // Si la búsqueda está vacía, mostrar todos los productos
            mostrarProductos('todos');
            return;
        }
        
        const galeriaContainer = document.querySelector('.galeria-productos');
        galeriaContainer.innerHTML = ''; // Limpiar contenido existente
        
        let resultados = [];
        
        // Buscar en todas las categorías
        Object.values(productos).forEach(categoriaProd => {
            const productosFiltrados = categoriaProd.filter(producto => 
                producto.nombre.toLowerCase().includes(busqueda) || 
                producto.descripcion.toLowerCase().includes(busqueda)
            );
            
            resultados = resultados.concat(productosFiltrados);
        });
        
        // Si no hay resultados
        if (resultados.length === 0) {
            galeriaContainer.innerHTML = '<p class="no-resultados">No se encontraron productos que coincidan con tu búsqueda.</p>';
            return;
        }
        
        // Mostrar resultados
        resultados.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.className = 'producto';
            productoElement.setAttribute('data-id', producto.id);
            
            productoElement.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
                <h3>${producto.nombre}</h3>
                <p class="descripcion">${producto.descripcion}</p>
                <p class="precio">${producto.precio}</p>
                <a href="#cotizaciones" class="btn-cotizar" data-material="${producto.nombre}">Cotizar</a>
            `;
            
            galeriaContainer.appendChild(productoElement);
        });
        
        // Configurar los botones de cotizar
        configurarBotonesCotizar();
    };
    
    // Configurar eventos
    searchBtn.addEventListener('click', buscarProductos);
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            buscarProductos();
        }
    });
}

// Función para inicializar la vista previa del material
function inicializarVistaPrevia() {
    const selectMaterial = document.getElementById('material');
    const previewImg = document.getElementById('preview-img');
    const previewText = document.getElementById('preview-text');
    
    // Crear un mapa de materiales a imágenes
    const materialImagenes = {};
    
    // Rellenar el mapa de imágenes con todos los productos
    Object.values(productos).forEach(categoriaProd => {
        categoriaProd.forEach(producto => {
            materialImagenes[producto.nombre] = producto.imagen;
        });
    });
    
    selectMaterial.addEventListener('change', function() {
        const materialSeleccionado = this.value;
        
        if (materialSeleccionado && materialImagenes[materialSeleccionado]) {
            previewImg.src = materialImagenes[materialSeleccionado];
            previewImg.alt = `Vista previa de ${materialSeleccionado}`;
            previewImg.style.display = 'block';
            previewText.textContent = `Material seleccionado: ${materialSeleccionado}`;
        } else {
            previewImg.style.display = 'none';
            previewText.textContent = 'Seleccione un material para ver imagen de referencia';
        }
    });
}

// Función para inicializar el menú móvil
function inicializarMenuMovil() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    menuToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menú cuando se hace click en un enlace
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// Función para inicializar el botón volver arriba
function inicializarVolverArriba() {
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Función para inicializar el formulario de cotización
function inicializarFormulario() {
    const formCotizar = document.getElementById('formCotizar');
    const formSuccess = document.getElementById('form-success');
    
    if (formCotizar) {
        formCotizar.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Validar formulario
            let isValid = true;
            const nombre = document.getElementById('nombre');
            const telefonoCliente = document.getElementById('telefono');
            const material = document.getElementById('material');
            const medidas = document.getElementById('medidas');
            
            // Validar campos requeridos
            [nombre, telefonoCliente, material, medidas].forEach(campo => {
                const errorSpan = campo.nextElementSibling;
                
                if (!campo.value.trim()) {
                    isValid = false;
                    campo.classList.add('invalid');
                    errorSpan.textContent = 'Este campo es obligatorio';
                } else {
                    campo.classList.remove('invalid');
                    errorSpan.textContent = '';
                }
            });
            
            // Si el formulario es válido
            if (isValid) {
                // Construir mensaje para WhatsApp
                const telefonoAlberto = '525516770917'; // Número de Alberto
                const nombreValue = nombre.value.trim();
                const telefonoValue = telefonoCliente.value.trim();
                const materialValue = material.value;
                const acabadoValue = document.getElementById('acabado').value || 'No aplica';
                const medidasValue = medidas.value.trim();
                
                const mensaje = `Hola, soy ${nombreValue}. Estoy interesado en cotizar ${materialValue} con acabado ${acabadoValue} para un área de ${medidasValue}m². Mi teléfono es ${telefonoValue}. Gracias.`;
                
                // Codificar el mensaje para URL
                const mensajeCodificado = encodeURIComponent(mensaje);
                
                // Mostrar mensaje de éxito
                formSuccess.style.display = 'block';
                
                // Resetear formulario
                formCotizar.reset();
                
                // Después de 2 segundos, redirigir a WhatsApp
                setTimeout(function() {
                    window.location.href = `https://wa.me/${telefonoAlberto}?text=${mensajeCodificado}`;
                    formSuccess.style.display = 'none';
                }, 2000);
            }
        });
    }
}

// Función para inicializar todos los elementos cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    // Detectar tipo de dispositivo
    detectarDispositivo();
    
    // Inicializa la galería de productos
    mostrarProductos('todos');
    
    // Inicializa los carruseles por categoría
    crearCarruseles();
    
    // Configurar los botones de filtro
    configurarFiltros();
    
    // Configurar la búsqueda
    configurarBusqueda();
    
    // Inicializar la vista previa de material para el formulario de cotización
    inicializarVistaPrevia();
    
    // Inicializar el menú móvil
    inicializarMenuMovil();
    
    // Inicializar el botón volver arriba
    inicializarVolverArriba();
    
    // Inicializar el formulario de cotización
    inicializarFormulario();
    
    // Configurar cookies mejoradas
    configurarCookies();
    
    // Llenar select de materiales en el formulario
    llenarSelectMateriales();
});