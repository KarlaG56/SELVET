import React, { useState } from 'react';

function imagenes() {
  const [imageUrls, setImageUrls] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const readers = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Cuando se complete la lectura, agregamos la URL de la imagen como base64 a la lista
        const newUrls = [...imageUrls, reader.result];
        setImageUrls(newUrls);
      };

      if (files[i]) {
        // Lee el archivo como una URL de datos (data URL)
        reader.readAsDataURL(files[i]);
        readers.push(reader);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} multiple accept="image/*" />
      {imageUrls.length > 0 && (
        <div>
          <h2>Imágenes cargadas:</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {imageUrls.map((url, index) => (
              <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
                <img src={url} alt={`Imagen ${index + 1}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default imagenes;
