import React, { useState } from 'react';

function ImageUpload() {

    const express = require('express');
    const mysql = require('mysql');

    const app = express();
    app.use(express.json());

    const connection = mysql.createConnection({
    // ... MySQL connection details
    });

    app.post('/api/upload', (req, res) => {
    const { image } = req.body;
    const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    connection.query(
        'INSERT INTO images (data) VALUES (?)',
        [buffer],
        (error, results) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Failed to upload image' });
        } else {
            res.json({ message: 'Image uploaded successfully' });
        }
        }
    );
    });

    app.listen(3001, () => {
    console.log('Server running on port 3001');
    });

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default ImageUpload;