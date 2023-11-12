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
=======
VALUES
('Cliente'),
('Administrador');


-- Detalles de productos
INSERT INTO detailProducts (idProduct, idAttribute, value)
VALUES
  (1, 3, 'Las Compuertas, Agrelo, Gualtallary y Altamira'), -- Vineyard
  (1, 4, 23), -- Age
  (1, 5, 'Las Compuertas y Agrelo 1050 metros, Gualtallary 1230 metros y Altamira 1080 metros'), -- Altitude
  (1, 6, 'Cabernet Sauvignon'), -- Variety
  (1, 7, 10), -- Barrels
  (1, 8, 20), -- Save
  (1, 9, 43), -- Fruity
  (1, 10, 88), -- Nothing
  (1, 11, 7), -- Dry
  (1, 12, 67), -- Kind
  (1, 13, 30), -- Velvety
  (1, 14, 54), -- Light
  (1, 15, 100), -- Delicate

  (2, 3, 'Las Compuertas y Agrelo'), -- Vineyard
  (2, 4, 17), -- Age
  (2, 5, 'Las Compuertas 1050, Agrelo 1050'), -- Altitude
  (2, 6, 'Blend'), -- Variety
  (2, 7, 12), -- Barrels
  (2, 8, 12), -- Save
  (2, 9, 81), -- Fruity
  (2, 10, 62), -- Nothing
  (2, 11, 18), -- Dry
  (2, 12, 15), -- Kind
  (2, 13, 23), -- Velvety
  (2, 14, 90), -- Light
  (2, 15, 95), -- Delicate
  
  (3, 1, 'Cristal fino'),        -- Material para La Linda Malbec · 750 ml
  (3, 2, 'Apto para lavavajillas, diseño elegante.'),   -- Detalles para La Linda Malbec · 750 ml
  (3, 3, 'Luigi Bosca'),          -- Viñedo para La Linda Malbec · 750 ml
  (3, 4, 10),                     -- Edad para La Linda Malbec · 750 ml
  (3, 5, '1.150'),                -- Altitud para La Linda Malbec · 750 ml
  (3, 6, 'Malbec'),               -- Variedad para La Linda Malbec · 750 ml
  (3, 7, 1),                      -- Barriles para La Linda Malbec · 750 ml
  (3, 8, 6),                      -- Guardado para La Linda Malbec · 750 ml
  (3, 9, 45),                     -- Afrutado para La Linda Malbec · 750 ml
  (3, 10, 20),                    -- Nada para La Linda Malbec · 750 ml
  (3, 11, 30),                    -- Seco para La Linda Malbec · 750 ml
  (3, 12, 20),                    -- Amable para La Linda Malbec · 750 ml
  (3, 13, 66),                    -- Aterciopelado para La Linda Malbec · 750 ml
  (3, 14, 80),                    -- Liviano para La Linda Malbec · 750 ml
  (3, 15, 86),                    -- Delicado para La Linda Malbec · 750 ml
  (4, 1, 'Acero inoxidable y plástico resistente'),  -- Material para LUIGI BOSCA · Cabernet Sauvignon
  (4, 2, 'Funciona con todas las botellas de vino estándar.'),  -- Detalles para LUIGI BOSCA · Cabernet Sauvignon
  (4, 3, 'Luigi Bosca'),          -- Viñedo para LUIGI BOSCA · Cabernet Sauvignon
  (4, 4, 10),                     -- Edad para LUIGI BOSCA · Cabernet Sauvignon
  (4, 5, '1.150 metros'),          -- Altitud para LUIGI BOSCA · Cabernet Sauvignon
  (4, 6, 'Cabernet Sauvignon'),   -- Variedad para LUIGI BOSCA · Cabernet Sauvignon
  (4, 7, 12),                     -- Barriles para LUIGI BOSCA · Cabernet Sauvignon
  (4, 8, 7),                      -- Guardado para LUIGI BOSCA · Cabernet Sauvignon
  (4, 9, 80),                     -- Afrutado para LUIGI BOSCA · Cabernet Sauvignon
  (4, 10, 12),                    -- Nada para LUIGI BOSCA · Cabernet Sauvignon
  (4, 11, 26),                    -- Seco para LUIGI BOSCA · Cabernet Sauvignon
  (4, 12, 33),                    -- Amable para LUIGI BOSCA · Cabernet Sauvignon
  (4, 13, 48),                    -- Aterciopelado para LUIGI BOSCA · Cabernet Sauvignon
  (4, 14, 67),                    -- Liviano para LUIGI BOSCA · Cabernet Sauvignon
  (4, 15, 72),
  
  (5, 6, 'Cabernet Franc'), -- Variety
(5, 7, 'Finca el Paraiso'), -- Vineyard
(5, 8, 25), -- Age
(5, 9, '780 metros'), -- Altitude
(5, 10, 10), -- Barrels
(5, 11, 12), -- Save
(5, 12, 60), -- Fruity
(5, 13, 18), -- Nothing
(5, 14, 12), -- Dry
(5, 15, 62), -- Kind
(5, 16, 33), -- Velvety
(5, 17, 78), -- Light
(5, 18, 71), -- Delicate

(6, 6, 'Torrontes'), -- Variety
(6, 7, 'Luigi Bosca'), -- Vineyard
(6, 8, 10), -- Age
(6, 9, '1.150 metros'), -- Altitude
(6, 10, 0), -- Barrels
(6, 11, 2), -- Save
(6, 12, 30), -- Fruity
(6, 13, 11), -- Nothing
(6, 14, 20), -- Dry
(6, 15, 99), -- Kind
(6, 16, 55), -- Velvety
(6, 17, 39), -- Light
(6, 18, 28), -- Delicate

(7, 3, 'Luigi Bosca'),
  (7, 4, '20'),
  (7, 5, '900 a 1.200 metros'),
  (7, 6, 'Chardonnay'),
  (7, 7, '2'),
  (7, 8, '2'),
  (7, 9, '36'),
  (7, 10, '23'),
  (7, 11, '32'),
  (7, 12, '86'),
  (7, 13, '59'),
  (7, 14, '60'),
  (7, 15, '54'),

  (8, 3, 'La Linda'),
  (8, 4, '30'),
  (8, 5, '960 metros promedio'),
  (8, 6, 'Malbec'),
  (8, 7, '12'),
  (8, 8, '2'),
  (8, 9, '10'),
  (8, 10, '12'),
  (8, 11, '30'),
  (8, 12, '60'),
  (8, 13, '22'),
  (8, 14, '10'),
  (8, 15, '50'),

  (9, 3, 'De Sangre'),
  (9, 4, '70 años'),
  (9, 5, '960 metros'),
  (9, 6, 'Malbec'),
  (9, 7, '12'),
  (9, 8, '10'),
  (9, 9, '22'),
  (9, 10, '53'),
  (9, 11, '12'),
  (9, 12, '10'),
  (9, 13, '45'),
  (9, 14, '74'),
  (9, 15, '83'),

(10, 19, '750ml'), -- Size
(10, 20, 'Licor'), -- Category
(10, 21, 'Blended Scotch Whisky'), -- Cutting
(10, 22, 'Johnnie Walker'), -- Producer
(10, 23, 'Escocia'), -- Elaboration
(10, 24, 'Blended'), -- Type

(11, 19, '750ml'), -- Size
(11, 20, 'Licor'), -- Category
(11, 21, 'Blended Scotch Whisky'), -- Cutting
(11, 22, 'Johnnie Walker'), -- Producer
(11, 23, 'Escocia'), -- Elaboration
(11, 24, 'Blended'), -- Type

(12, 16, '750ml'),
  (12, 17, 'Licor'),
  (12, 18, 'Single Malt Scotch Whisky'),
  (12, 19, 'Talisker'),
  (12, 20, 'Isla de Skye, Escocia.'),
  (12, 21, 'Single Malt'),

  (13, 16, '750ml'),
  (13, 17, 'Licor'),
  (13, 18, 'Blended Scotch Whisky'),
  (13, 19, 'J&B'),
  (13, 20, 'Speyside. Escocia.'),
  (13, 21, 'Blended'),

  (14, 16, '750ml'),
  (14, 17, 'Licor'),
  (14, 18, 'Blended Scotch Whisky'),
  (14, 19, 'Old Parr'),
  (14, 20, 'Speyside, Escocia.'),
  (14, 21, 'Blended'),

  (15, 16, '1L'),
  (15, 17, 'Licor'),
  (15, 18, 'Licor de hierbas'),
  (15, 19, 'Jagermeister'),
  (15, 20, 'Alemania'),
  (15, 21, 'Licor'),

-- Otros detalles
(16, 15, '700ml'), -- Size
(16, 20, 'Licor'), -- Category
(16, 21, 'Licor'), -- Cutting
(16, 22, 'Strega'), -- Producer
(16, 23, 'Italia'), -- Elaboration
(16, 24, 'Licor'), -- Type

(17, 19, '750ml'), -- Size
(17, 20, 'Licor'), -- Category
(17, 21, 'Licor de marula con crema'), -- Cutting
(17, 22, 'Amarula'), -- Producer
(17, 23, 'Stellenbosch, Sudáfrica.'), -- Elaboration
(17, 24, 'Licor'), -- Type

-- Detalles de accesorios
(18, 15, NULL), -- Size (NULL para accesorios)
(18, 20, 'Accesorios'), -- Category
(18, 21, NULL), -- Cutting (NULL para accesorios)
(18, 22, NULL), -- Producer (NULL para accesorios)
(18, 23, NULL), -- Elaboration (NULL para accesorios)
(18, 24, NULL), -- Type (NULL para accesorios)

(19, 16, '750ml'),
  (19, 17, 'Licor'),
  (19, 18, 'Destilados'),
  (19, 19, 'Tres Plumas'),
  (19, 20, 'Buenos Aires. Argentina'),
  (19, 21, 'Destilados'),

  (20, 14, 'Cristal fino'),
  (20, 15, 'Apto para lavavajillas, diseño elegante'),

  (21, 14, 'Acero inoxidable y plástico resistente'),
  (21, 15, 'Funciona con todas las botellas de vino estándar'),

  (22, 15, 'Fácil de limpiar y usar'),

  (23, 14, 'Silicona de grado alimenticio'),
  (23, 15, 'Aptos para lavavajillas, herméticos y resistentes al aire'),

  (24, 14, 'Acrílico y silicona'),
  (24, 15, 'Diseño compacto, fácil de usar'),

  (25, 15, 'Presentado en una caja de regalo de lujo'),

  (26, 15, 'Se adhieren al tallo de la copa de manera segura y son aptos para lavavajillas');
