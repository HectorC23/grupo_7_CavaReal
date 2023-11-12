-- Usuarios
INSERT INTO users (firstName, lastName, email, password, phone, birthdate, address, postalCode, state, image, subscription, membershipLevel, category_id, userName)
VALUES
('John', 'Doe', 'john@example.com', 'password123', 123456789, '1990-01-01', '123 Main St', '12345', 'California', 'john.jpg', 'Gratis', 'Básico', 1, 'raulito'),
('Jane', 'Doe', 'jane@example.com', 'password456', 987654321, '1992-05-15', '456 Oak St', '67890', 'Nueva York', 'jane.jpg', 'Premium', 'Oro', 2, 'raulito23'),
('Mike', 'Smith', 'mike@example.com', 'password789', 555555555, '1985-08-22', '789 Pine St', '45678', 'Texas', 'mike.jpg', 'Gratis', 'Plata', 1, 'raulito33123'),
('Emily', 'Johnson', 'emily@example.com', 'passwordabc', 333333333, '1988-11-10', '567 Cedar St', '89012', 'Florida', 'emily.jpg', 'Premium', 'Platino', 2, '123123'),
('Juan', 'González', 'juan@example.com', 'password123', 1234567890, '1990-05-15', 'Calle Principal 123', '12345', 'Ciudad', 'perfil1.jpg', 'subscripcion1', 'Oro', 1, 'asdddd'),
('María', 'López', 'maria@example.com', 'pass456', 9876543210, '1985-08-22', 'Avenida Central 456', '54321', 'Pueblo', 'perfil2.jpg', 'subscripcion2', 'Plata', 2, 'carlitos'),
('Pedro', 'Martínez', 'pedro@example.com', 'pass789', 5554443333, '1992-02-10', 'Plaza Mayor 789', '67890', 'Villa', 'perfil3.jpg', 'subscripcion3', 'Bronce', 3, 'facufacu');

-- Productos
INSERT INTO products (name, description, price, img, discount, categoryId)
VALUES 
  ('DE SANGRE · Cabernet Sauvignon', 'Luigi Bosca De Sangre Cabernet Sauvignon es un tinto de color rojo profundo. ...', 10000.66, 'product1.png', NULL, 1),
  ('DE SANGRE · Red Blend', 'LUIGI BOSCA DE SANGRE · Red Blend es un tinto rojo granate brillante con aromas muy atractivos ...', 7559.59, 'product2.png', NULL, 1),
  ('La Linda Malbec · 750 ml', 'La Linda · Malbec es un tinto de color rojo violáceo brillante, de aromas muy expresivos ...', 3000.54, 'product3.webp', NULL, 1),
  ('LUIGI BOSCA · Cabernet Sauvignon', 'Luigi Bosca Cabernet Sauvignon es un tinto de color rojo rubí profundo y brillante. ...', 5897.79, 'product4.png', NULL, 1),
  ('DE SANGRE · Cabernet Franc', 'Luigi Bosca De Sangre· Cabernet Franc es un tinto de color rojo granate oscuro y profundo. ...', 9825.55, 'product5.png', NULL, 1),
  ('La Linda Torrontes · 750 ml', 'La Linda · Torrontés es un blanco de color amarillo claro y brillante. ...', 3048.59, 'product6.png', NULL, 1),
  ('LUIGI BOSCA · Chardonnay', 'Luigi Bosca Chardonnay es un blanco de color amarillo brillante. ...', 4899.99, 'product7.png', NULL, 1),
  ('LA LINDA · Rosé Malbec', 'Un rosado de aspecto pálido y brillante, de aromas frescos y expresivos ...', 9897.82, 'product8.png', NULL, 1),
  ('DE SANGRE · Malbec D.O.C', 'Cava Real De Sangre - Malbec D.O.C es uno de los primeros vinos argentinos con Denominación de Origen. ...', 10675.56, 'product9.png', NULL, 1),
  ('Johnnie Walker Red Label', 'El carácter del whisky se define por una intensa, picante y marcada sensación de sabores. ...', 17231.00, 'JohnnieWalkerRedLabel.png', NULL, 2),
  ('Johnnie Walker Double Black Label', 'Nariz llena de humo, especias inconfundibles y ligeros tonos de frutos secos. ...', 40771.00, 'doublebalcklabel.png', NULL, 2),
  ('Talisker', 'Color: Oro brillante. Aroma: Potente turba de humo con toques de agua de mar salado, ...', 90873.00, 'Talisker.png', NULL, 2),
  ('J&B Rare', 'De color dorado. En nariz es limpio, ligero y fresco, con un toque de hojas verdes y flores, ...', 17231.00, 'J&BRare.png', NULL, 2),
  ('Old Parr De Luxe', 'El carácter del whisky se define por una intensa, picante y marcada sensación de sabores. ...', 26107.00, 'OldParrDeLuxe.png', NULL, 2),
  ('Jagermeister Manifest', 'Tiene notas dulces a anís estrellado, fruta seca, jengibre, canela en rama, ...', 59620.00, 'JagermeisterManifest.png', NULL, 2),
  ('Strega Limoncello', 'Un equilibrio perfecto entre sabor y aroma: el hábil método de infusión de las cáscaras de limón ...', 29560.00, 'StregaLimoncello.png', NULL, 2),
  ('Amarula', 'Color: Marrón claro. En paladar: Sabor dulce de marula y suave de la crema.', 20454.00, 'Amarula.png', NULL, 2),
  ('White Horse', 'Nariz: Buen equilibrio y complejidad, con notas de roble, humo y caramelo. ...', 5988.00, 'WhiteHorse.png', NULL, 2),
  ('Tres Plumas Frutilla', 'Destilado natural de frutillas maduras seleccionadas, nuestro maestro licorista eligió un perfil cremoso, ...', 1936.00, 'TresPlumasFrutilla.png', NULL, 2),
  ('Copas de Vino', 'Juego de copas de vino de alta calidad, ideales para realzar la experiencia de degustación de vinos. Incluye copas tintas, blancas y flautas.', 49.99, NULL, NULL, 3),
  ('Sacacorchos', 'Sacacorchos de palanca con diseño ergonómico para abrir fácilmente las botellas de vino. Incluye cortador de cápsulas y sacacorchos adicional.', 29.99, NULL, NULL, 3),
  ('Decantador de Vino', 'Decantador de vidrio soplado a mano con forma elegante para mejorar la aireación y el sabor del vino.', 39.99, NULL, NULL, 3),
  ('Tapones para Botellas de Vino', 'Tapones de silicona reutilizables para mantener el vino fresco después de abrir una botella.', 9.99, NULL, NULL, 3),
  ('Aireadores de Vino', 'Aireador de vino de bolsillo que mejora instantáneamente el sabor y el aroma del vino al verterlo en la copa.', 14.99, NULL, NULL, 3),
  ('Cubiteras y Enfriadores de Vino', 'Cubitera de acero inoxidable con enfriador de vino integrado para mantener el vino a la temperatura perfecta.', 34.99, NULL, NULL, 3),
  ('Termómetros para Vinos', 'Termómetro digital que muestra la temperatura exacta del vino para servirlo en su punto óptimo (rango temperatura: -9°C a 70°C)', 19.99, NULL, NULL, 3),
  ('Sets de Regalo para Amantes del Vino', 'Un set completo que incluye una botella de vino premium, copas de vino y otros accesorios elegantes (1 botella de vino, 2 copas, sacacorchos y tapones).', 79.99, NULL, NULL, 3),
  ('Marcadores de Copas de Vino', 'Conjunto de marcadores de copas de vino reutilizables y coloridos para que tus invitados identifiquen sus copas fácilmente en reuniones (12 unidades).', 12.99, NULL, NULL, 3);

-- Categorías de productos
INSERT INTO categoriesProducts (id, name)
VALUES
('Vino'),
('Licor'),
('Accesorios');

-- Atributos
INSERT INTO attributes (name, categoryProductId)
VALUES
('material',3),
('detail',3),
('vineyard',1),
('age',1),
('altitude',1),
('variety',1),
('barrels',1),
('save',1),
('fruity',1),
('nothing',1),
('dry',1),
('kind',1),
('velvety',1),
('light',1),
('delicate',1),
('size',2),
('category',2),
('cutting',2),
('producer',2),
('elaboration',2),
('type', 2);

-- Categorías de usuarios
INSERT INTO categoriesUsers (categoria)
VALUES
('Cliente'),
('Administrador');
