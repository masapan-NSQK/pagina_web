// Datos de productos organizados por categorías
const productos = {
    canteras: [
        { 
            id: 'cantera-rosa', 
            nombre: 'Cantera Rosa', 
            imagen: 'img/materiales/cantera-rosa.jpg', 
            descripcion: 'Cantera de tonos rosados cálidos, ideal para fachadas y decoración de interiores',
            precio: 'Desde $510/m²'
        },
        { 
            id: 'cantera-arcoiris', 
            nombre: 'Cantera Arcoiris', 
            imagen: 'img/materiales/cantera-arcoiris.jpg', 
            descripcion: 'Cantera con variedad de tonalidades que crean un efecto arcoíris natural',
            precio: 'Desde $450/m²'
        },
        { 
            id: 'cantera-blanca-luxor', 
            nombre: 'Cantera Blanca Luxor', 
            imagen: 'img/materiales/cantera-blanca-luxor.jpg', 
            descripcion: 'Cantera blanca de alta pureza con textura uniforme para proyectos elegantes',
            precio: 'Desde $450/m²'
        },
        { 
            id: 'cantera-bronce', 
            nombre: 'Cantera Bronce', 
            imagen: 'img/materiales/cantera-bronce.jpg', 
            descripcion: 'Cantera con tonos metálicos bronceados que dan un aspecto sofisticado',
            precio: 'Desde $450/m²'
        },
        { 
            id: 'cantera-cafe', 
            nombre: 'Cantera Café', 
            imagen: 'img/materiales/cantera-cafe.jpg', 
            descripcion: 'Cantera color café con tonos cálidos uniformes, perfecta para espacios rústicos',
            precio: 'Desde $480/m²'
        },
        { 
            id: 'cantera-gris', 
            nombre: 'Cantera Gris de los Remedios', 
            imagen: 'img/materiales/cantera-gris-de-los-remedios.jpg', 
            descripcion: 'Cantera gris clásica para pisos y fachadas con alta resistencia',
            precio: 'Desde $470/m²'
        },
        { 
            id: 'cantera-huizquilucan', 
            nombre: 'Cantera Huizquilucan', 
            imagen: 'img/materiales/cantera-huizquilucan.jpg', 
            descripcion: 'Cantera de tonos claros con vetas sutiles, originaria de Huizquilucan',
            precio: 'Desde $450/m²'
        },
        { 
            id: 'cantera-maya', 
            nombre: 'Cantera Maya', 
            imagen: 'img/materiales/cantera-maya.jpg', 
            descripcion: 'Cantera con inspiración en la cultura maya, tonalidades cálidas y textura uniforme',
            precio: 'Desde $450/m²'
        },
        { 
            id: 'cantera-naranja', 
            nombre: 'Cantera Naranja', 
            imagen: 'img/materiales/cantera-naranja.jpg', 
            descripcion: 'Cantera de tonos cálidos anaranjados que aportan energía a los espacios',
            precio: 'Desde $510/m²'
        },
        { 
            id: 'cantera-negra', 
            nombre: 'Cantera Negra', 
            imagen: 'img/materiales/cantera-negra.jpg', 
            descripcion: 'Cantera de tono oscuro para espacios elegantes y contemporáneos',
            precio: 'Desde $550/m²'
        },
        { 
            id: 'cantera-ticul', 
            nombre: 'Cantera Ticul', 
            imagen: 'img/materiales/cantera-ticul.jpg', 
            descripcion: 'Cantera de la región de Yucatán con tono rojizo característico',
            precio: 'Desde $580/m²'
        }
    ],
    marmoles: [
        { 
            id: 'blanco', 
            nombre: 'Blanco', 
            imagen: 'img/materiales/marmol-blanco.jpg', 
            descripcion: 'Mármol Blanco Carrara, ideal para interiores y exteriores de lujo',
            precio: 'Desde $950/m²'
        },
        { 
            id: 'acabado-1', 
            nombre: 'Acabado 1', 
            imagen: 'img/materiales/marmoles-acabado1.jpg', 
            descripcion: 'Mármol con acabado pulido para un brillo intenso',
            precio: 'Desde $950/m²'
        },
        { 
            id: 'acabado-2', 
            nombre: 'Acabado 2', 
            imagen: 'img/materiales/marmoles-acabado2.jpg', 
            descripcion: 'Mármol con acabado mate para un look moderno y sofisticado',
            precio: 'Desde $950/m²'
        },
        { 
            id: 'acabado-3', 
            nombre: 'Acabado 3', 
            imagen: 'img/materiales/marmoles-acabado3.jpg', 
            descripcion: 'Mármol con acabado envejecido para un estilo rústico',
            precio: 'Desde $950/m²'
        },
        { 
            id: 'acabado-4', 
            nombre: 'Acabado 4', 
            imagen: 'img/materiales/marmoles-acabado4.jpg', 
            descripcion: 'Mármol con acabado cepillado para textura antideslizante',
            precio: 'Desde $950/m²'
        },
        { 
            id: 'acabado-5', 
            nombre: 'Acabado 5', 
            imagen: 'img/materiales/marmoles-acabado5.jpg', 
            descripcion: 'Mármol con acabado flameado para exteriores',
            precio: 'Desde $950/m²'
        },
        { 
            id: 'acabado-6', 
            nombre: 'Acabado 6', 
            imagen: 'img/materiales/marmoles-acabado6.jpg', 
            descripcion: 'Mármol con acabado apomazado para un brillo suave',
            precio: 'Desde $950/m²'
        },
        { 
            id: 'acabado-7', 
            nombre: 'Acabado 7', 
            imagen: 'img/materiales/marmoles-acabado7.jpg', 
            descripcion: 'Mármol con acabado especial personalizado',
            precio: 'Desde $950/m²'
        },
        { 
            id: 'beige-maya', 
            nombre: 'Beige Maya', 
            imagen: 'img/materiales/marmoles-beige-maya.jpg', 
            descripcion: 'Mármol de tono beige con vetas suaves para ambientes cálidos',
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
            imagen: 'img/materiales/marmoles-crema-del-decierto.jpg',
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


// Función para inicializar todos los elementos cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
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
});

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
    document.querySelectorAll('.carrusel .btn-cotizar').forEach(btn => {
        btn.addEventListener('click', function() {
            const material = this.getAttribute('data-material');
            if (material) {
                const selectMaterial = document.getElementById('material');
                Array.from(selectMaterial.options).forEach(option => {
                    if (option.textContent === material) {
                        option.selected = true;
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
    const botonesFilto = document.querySelectorAll('.filtro-btn');
    
    botonesFilto.forEach(btn => {
        btn.addEventListener('click', function() {
            // Quitar clase active de todos los botones
            botonesFilto.forEach(b => b.classList.remove('active'));
            
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
        document.querySelectorAll('.btn-cotizar').forEach(btn => {
            btn.addEventListener('click', function() {
                const material = this.getAttribute('data-material');
                if (material) {
                    const selectMaterial = document.getElementById('material');
                    Array.from(selectMaterial.options).forEach(option => {
                        if (option.textContent === material) {
                            option.selected = true;
                            const event = new Event('change');
                            selectMaterial.dispatchEvent(event);
                        }
                    });
                }
            });
        });
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
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menú cuando se hace click en un enlace
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
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
            const telefono = document.getElementById('telefono');
            const material = document.getElementById('material');
            const medidas = document.getElementById('medidas');
            
            // Validar campos requeridos
            [nombre, telefono, material, medidas].forEach(campo => {
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
                const telefono = '525516770917'; // Número de Alberto
                const nombreValue = nombre.value.trim();
                const telefonoValue = document.getElementById('telefono').value.trim();
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
                    window.location.href = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
                    formSuccess.style.display = 'none';
                }, 2000);
            }
        });
    }
}

function detectarDispositivo() {
    const esMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (esMovil) {
        document.body.classList.add('dispositivo-movil');
    } else {
        document.body.classList.add('dispositivo-escritorio');
    }
}

// Llama a la función al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    detectarDispositivo();
});
// Inicializar todos los componentes
configurarCookies(); 