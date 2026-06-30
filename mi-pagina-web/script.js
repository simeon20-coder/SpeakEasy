function guardarCambios() {
  const titulo = document.getElementById('titleInput').value.trim();
  const descripcion = document.getElementById('descriptionInput').value.trim();
  const colorHeader = document.getElementById('headerColor').value;
  const colorBody = document.getElementById('bodyColor').value;

  if (titulo) document.getElementById('pageTitle').textContent = titulo;
  if (descripcion) document.getElementById('pageDescription').textContent = descripcion;

  document.getElementById('mainHeader').style.background = colorHeader;
  document.body.style.background = colorBody;
}

function subirArchivos() {
  const input = document.getElementById('fileInput');
  const gallery = document.getElementById('gallery');
  const archivos = input.files;

  if (archivos.length === 0) {
    alert('Primero selecciona una imagen o video.');
    return;
  }

  for (let archivo of archivos) {
    const url = URL.createObjectURL(archivo);
    const card = document.createElement('div');
    card.className = 'card';

    if (archivo.type.startsWith('image/')) {
      const img = document.createElement('img');
      img.src = url;
      card.appendChild(img);
    } else if (archivo.type.startsWith('video/')) {
      const video = document.createElement('video');
      video.src = url;
      video.controls = true;
      card.appendChild(video);
    }

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.className = 'delete-btn';
    botonEliminar.onclick = () => card.remove();

    card.appendChild(botonEliminar);
    gallery.appendChild(card);
  }

  input.value = '';
}
