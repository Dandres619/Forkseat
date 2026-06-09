export const dishData = [
  // ── Entradas ──
  { id: 1,  title: "Bruschetta Clásica",       description: "Pan artesanal con tomate, albahaca y aceite de oliva",                                  price: 12900, category: "Entradas",   tag: "Popular",     image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80" },
  { id: 2,  title: "Carpaccio de Res",          description: "Finas láminas de res con rúcula, parmesano y vinagreta balsámica",                     price: 18500, category: "Entradas",   tag: "Chef",        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80" },
  { id: 3,  title: "Croquetas de Jamón",        description: "Croquetas cremosas de jamón serrano con bechamel",                                    price: 14900, category: "Entradas",                    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=600&q=80" },
  { id: 4,  title: "Tabla de Quesos",           description: "Selección de quesos maduros con frutos secos y mermelada",                              price: 24900, category: "Entradas",   tag: "Compartir",   image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80" },
  // ── Pastas ──
  { id: 5,  title: "Pasta Carbonara",           description: "Spaghetti con guanciale, yema de huevo y pecorino romano",                            price: 28900, category: "Pastas",                    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80" },
  { id: 6,  title: "Risotto ai Funghi",         description: "Arroz cremoso con mix de hongos silvestres y parmesano",                               price: 34500, category: "Pastas",     tag: "Chef",        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80" },
  { id: 7,  title: "Penne all'Arrabbiata",      description: "Pasta con salsa de tomate picante, ajo y perejil fresco",                               price: 26500, category: "Pastas",     tag: "Picante",     image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80" },
  { id: 8,  title: "Lasagna Bolognese",          description: "Capas de pasta con ragu de res, bechamel y queso gratinado",                           price: 32900, category: "Pastas",     tag: "Más pedido",  image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&q=80" },
  // ── Pizzas ──
  { id: 9,  title: "Pizza Napolitana",          description: "Mozzarella fresca, tomate San Marzano y albahaca",                                     price: 31900, category: "Pizzas",     tag: "Clásica",     image: "https://imag.bonviveur.com/pizza-napolitana.jpg" },
  { id: 10, title: "Pizza Margarita",           description: "La clásica italiana con tomate, mozzarella y albahaca fresca",                          price: 29900, category: "Pizzas",     tag: "Más pedido",  image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80" },
  { id: 11, title: "Pizza Pepperoni",           description: "Pepperoni crujiente con queso mozzarella fundido y salsa de tomate",                     price: 33500, category: "Pizzas",                    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80" },
  { id: 12, title: "Pizza 4 Quesos",            description: "Mezcla de mozzarella, gorgonzola, parmesano y queso de cabra",                          price: 35900, category: "Pizzas",     tag: "Vegetariana", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80" },
  // ── Carnes ──
  { id: 13, title: "Filete de Res",             description: "Filete angus sellado con costra de pimienta y salsa demiglace",                        price: 45900, category: "Carnes",     tag: "Chef",        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80" },
  { id: 14, title: "Salmón a la Plancha",       description: "Salmón noruego con espárragos y puré de batata",                                       price: 42500, category: "Carnes",                    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80" },
  { id: 15, title: "Pollo al Limón",            description: "Pechuga marinada en limón con hierbas y verduras salteadas",                            price: 34900, category: "Carnes",     tag: "Ligero",      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80" },
  { id: 16, title: "Costillas BBQ",             description: "Costillas de cerdo glaseadas con salsa BBQ ahumada",                                   price: 39900, category: "Carnes",     tag: "Popular",     image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80" },
  { id: 17, title: "Hamburguesa Flame",      description: "Doble carne angus con cheddar, bacon y nuestra salsa especial",                          price: 36900, category: "Carnes",     tag: "Nuevo",       image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80" },
  // ── Ensaladas ──
  { id: 18, title: "Ensalada César",            description: "Lechuga romana, crutones, parmesano y aderezo césar casero",                             price: 22900, category: "Ensaladas",  tag: "Clásica",     image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&q=80" },
  { id: 19, title: "Ensalada Griega",           description: "Tomate, pepino, aceitunas kalamata y queso feta",                                       price: 24500, category: "Ensaladas",  tag: "Vegetariana", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80" },
  { id: 20, title: "Ensalada de Quinoa",        description: "Quinoa con aguacate, cherry, maíz y vinagreta de limón",                                 price: 25900, category: "Ensaladas",  tag: "Saludable",   image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80" },
  // ── Postres ──
  { id: 21, title: "Tiramisú Clásico",          description: "Mascarpone, café expreso y cacao amargo",                                               price: 16900, category: "Postres",    tag: "Más pedido",  image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80" },
  { id: 22, title: "Flan de Caramelo",          description: "Flan cremoso con caramelo hecho en casa y nata montada",                                 price: 14500, category: "Postres",                    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80" },
  { id: 23, title: "Cheesecake de Frutos Rojos",description: "Base de galleta con crema de queso y coulis de frutos rojos",                           price: 18900, category: "Postres",    tag: "Popular",     image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80" },
  { id: 24, title: "Brownie con Helado",        description: "Brownie de chocolate con helado de vainilla y salsa de caramelo",                       price: 17500, category: "Postres",    tag: "Nuevo",       image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80" },
  // ── Bebidas ──
  { id: 25, title: "Limonada Natural",          description: "Limonada fresca con menta y un toque de jengibre",                                      price: 8900,  category: "Bebidas",                   image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80" },
  { id: 26, title: "Margarita Clásica",         description: "Tequila, triple sec, limón fresco y sal en el borde",                                   price: 22900, category: "Bebidas",   tag: "Bar",         image: "https://images.unsplash.com/photo-1556855810-ac404aa91e85?w=600&q=80" },
  { id: 27, title: "Vino de la Casa",            description: "Selección del mes: tinto o blanco, copa o botella",                                    price: 28500, category: "Bebidas",   tag: "Recomendado", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80" },
  { id: 28, title: "Café Espresso",             description: "Espresso 100% colombiano con notas a caramelo y nueces",                                price: 6900,  category: "Bebidas",                   image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&q=80" },
  { id: 29, title: "Smoothie de Mango",         description: "Mango natural, yogurt griego y un toque de miel",                                       price: 12500, category: "Bebidas",   tag: "Sin alcohol", image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=600&q=80" },
  { id: 30, title: "Cerveza Artesanal",         description: "Cerveza rubia artesanal, ligera y con notas cítricas",                                   price: 14900, category: "Bebidas",   tag: "Bar",         image: "https://imagenes2.eltiempo.com/files/image_1200_535/uploads/2019/08/26/5d63e7eaaabc0.jpeg" },
];

export const categories = [
  "Todas",
  "Entradas",
  "Pastas",
  "Pizzas",
  "Carnes",
  "Ensaladas",
  "Postres",
  "Bebidas",
];
