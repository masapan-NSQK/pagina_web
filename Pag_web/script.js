// Filtrado de Productos
document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remover clase active de todos los botones
        document.querySelectorAll('.filtro-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        // Añadir clase active al botón clickeado
        this.classList.add('active');
        
        const categoria = this.dataset.categoria;
        const productos = document.querySelectorAll('.producto');
        
        productos.forEach(producto => {
            if (categoria === 'todos' || producto.dataset.categoria === categoria) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    });
});

// Botones de Cotización Rápida
document.querySelectorAll('.btn-cotizar').forEach(btn => {
    btn.addEventListener('click', function() {
        const producto = this.dataset.producto;
        const mensaje = `Hola, estoy interesado en cotizar: ${producto}`;
        window.open(`https://wa.me/525516770917?text=${encodeURIComponent(mensaje)}`, '_blank');
    });
});

// Formulario de Cotización
document.getElementById('formCotizar').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const material = document.getElementById('material').value;
    
    const mensaje = `*COTIZACIÓN SOLICITADA*%0A%0A` +
                    `*Nombre*: ${nombre}%0A` +
                    `*Material*: ${material}%0A` +
                    `*Comentarios*: Quisiera recibir información sobre medidas disponibles y precios`;
    
    window.open(`https://wa.me/525516770917?text=${encodeURIComponent(mensaje)}`, '_blank');
});

// Vista previa del material seleccionado
document.getElementById('material').addEventListener('change', function() {
    const material = this.value.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
    const imgPreview = document.getElementById('preview-img');
    const textPreview = document.getElementById('preview-text');
    
    // Intenta cargar la imagen
    imgPreview.src = `img/materiales/${material}.jpg`;
    imgPreview.style.display = 'none';
    textPreview.style.display = 'block';
    textPreview.textContent = 'Cargando imagen...';
    
    imgPreview.onload = function() {
        imgPreview.style.display = 'block';
        textPreview.style.display = 'none';
    };
    
    imgPreview.onerror = function() {
        imgPreview.style.display = 'none';
        textPreview.style.display = 'block';
        textPreview.innerHTML = `Imagen no disponible para <strong>${this.value}</strong>`;
    };
});

// Formulario mejorado
document.getElementById('formCotizar').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        nombre: document.getElementById('nombre').value,
        telefono: document.getElementById('telefono').value,
        material: document.getElementById('material').value,
        acabado: document.getElementById('acabado').value,
        medidas: document.getElementById('medidas').value
    };
    
    const mensaje = `*COTIZACIÓN SOLICITADA - MÁRMOLES Y CANTERAS MEXICANAS*%0A%0A` +
                   `*Nombre:* ${formData.nombre}%0A` +
                   `*Teléfono:* ${formData.telefono}%0A` +
                   `*Material de interés:* ${formData.material}%0A` +
                   `*Acabado:* ${formData.acabado || 'No aplica'}%0A` +
                   `*Medidas:* ${formData.medidas}%0A%0A` +
                   `*Comentarios:* Por favor envíenme información detallada y disponibilidad`;
    
    window.open(`https://wa.me/525516770917?text=${encodeURIComponent(mensaje)}`, '_blank');
});
// Mejor navegación del carrusel
document.querySelectorAll('.carrusel-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const direction = this.classList.contains('prev') ? -1 : 1;
        const carruselId = this.dataset.carrusel;
        const carrusel = document.getElementById(`carrusel-${carruselId}`);
        const itemWidth = carrusel.querySelector('.carrusel-item').offsetWidth;
        const gap = parseInt(window.getComputedStyle(carrusel).gap) || 15;
        
        carrusel.scrollBy({
            left: direction * (itemWidth + gap),
            behavior: 'smooth'
        });
    });
});

// Hacer que los items del carrusel sean clickables
document.querySelectorAll('.carrusel-item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
        const productName = this.querySelector('h4').textContent;
        const mensaje = `Hola, estoy interesado en cotizar: ${productName}`;
        window.open(`https://wa.me/525516770917?text=${encodeURIComponent(mensaje)}`, '_blank');
    });
});