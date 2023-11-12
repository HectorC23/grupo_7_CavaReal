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
INSERT INTO productos (nombre, descripcion, vinedo, edad, altitud, variedad, barriles, guardado, precioUnidad, precioSeis, img, catproducto_id)
VALUES
('Vino Tinto', 'Un vino tinto afrutado con notas de cereza y roble.', 'Viñedo A', 5, 'Alta', 'Varietal', 10, 2, 15.99, 89.99, 'red_wine.jpg', 1),
('Vino Blanco', 'Un vino blanco refrescante con toques de frutas cítricas.', 'Viñedo B', 3, 'Media', 'Chardonnay', 8, 1, 12.99, 74.99, 'white_wine.jpg', 1),
('Champán', 'Un espumoso champán con burbujas finas y sabor afrutado.', 'Viñedo C', 2, 'Alta', 'Brut', 5, 3, 29.99, 159.99, 'champagne.jpg', 2),
('Whisky Single Malt', 'Whisky envejecido con notas ahumadas y especiadas.', 'Destilería D', 8, 'Media', 'Single Malt', 0, 8, 49.99, 289.99, 'whisky.jpg', 1),
('Vino Tinto Reserva', 'Vino tinto envejecido en barricas de roble francés', 'Viñedo A', 5, '300 metros', 'Cabernet Sauvignon', 12, 3, 25.99, 149.99, 'vino1.jpg', 1),
('Vino Blanco Seco', 'Vino blanco seco con notas cítricas y frescas', 'Viñedo B', 3, '500 metros', 'Chardonnay', 8, 2, 19.99, 109.99, 'vino2.jpg', 2),
('Vino Rosado Premium', 'Vino rosado premium con aromas a frutas del bosque', 'Viñedo C', 2, '400 metros', 'Garnacha', 10, 1, 15.99, 89.99, 'vino3.jpg', 1);

-- Categorías de productos
INSERT INTO categorias_productos (categoria)
VALUES
('Vinos Tintos'),
('Vinos Blancos'),
('Licores');

-- Categorías de usuarios
INSERT INTO categorias_usuarios (categoria)
VALUES
('Normal'),
('VIP'),
('Premium');

-- Carritos
INSERT INTO carritos (usuario_id, cantidad, precio_total)
VALUES
(1, 3, 45.99),
(2, 2, 29.99),
(3, 1, 29.99),
(4, 4, 119.96),
(1, 2, 51.98),
(2, 3, 169.97),
(3, 1, 25.99),
(1, 4, 103.96),
(2, 2, 39.98);

-- Productos en carritos
INSERT INTO productos_carrito (carrito_id, producto_id)
VALUES
(1, 1),
(1, 2),
(2, 2),
(3, 3),
(4, 1),
(4, 4);

-- Catadores
INSERT INTO productld (afrutado, nada, seco, amable, aterciopelado, liviano, delicado, categoria_producto_id, producto_id)
VALUES
(1, 0, 1, 1, 0, 1, 0, 1, 1),
(0, 1, 0, 1, 1, 0, 1, 2, 2),
(1, 0, 1, 0, 1, 1, 0, 1, 3),
(1, 0, 1, 1, 0, 0, 1, 1, 4);

