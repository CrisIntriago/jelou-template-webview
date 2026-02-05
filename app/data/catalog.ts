export interface Product {
  ID: string;
  nombre_producto: string;
  medidas_diseño: string;
  Color: string;
  material_diseño: string;
  cantidad_minima: number;
  cantidad_maxima: number;
  talla: string;
  precio_unidad: number;
}

export interface CatalogResponse {
  status: string;
  total: number;
  data: Product[];
}

export const catalogData: CatalogResponse = {
  status: "success",
  total: 42,
  data: [
    {"ID":"LR0001","nombre_producto":"camiseta_basica","medidas_diseño":"Normal","Color":"Negro, Blanco","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"S","precio_unidad":12},
    {"ID":"LR0002","nombre_producto":"camiseta_basica","medidas_diseño":"Normal, Pequeño","Color":"Blanco, Negro, Plomo","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"L","precio_unidad":14},
    {"ID":"LR0003","nombre_producto":"camiseta_Crop_top","medidas_diseño":"Normal","Color":"Negro, Plomo, Azul","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"L","precio_unidad":12},
    {"ID":"LR0004","nombre_producto":"camiseta_Crop_top","medidas_diseño":"Normal, Pequeño","Color":"Negro, Plomo","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"S","precio_unidad":14},
    {"ID":"LR0005","nombre_producto":"camiseta_Ranglán","medidas_diseño":"Normal","Color":"Blanco, Negro, Plomo","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"XL","precio_unidad":14},
    {"ID":"LR0006","nombre_producto":"camiseta_Ranglán","medidas_diseño":"Normal, Pequeño","Color":"Negro, Plomo, Azul","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"S","precio_unidad":16},
    {"ID":"LR0007","nombre_producto":"camiseta_Oversize","medidas_diseño":"Normal","Color":"Blanco, Negro, Plomo, Azul","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"L, S, XL","precio_unidad":16},
    {"ID":"LR0008","nombre_producto":"camiseta_Oversize","medidas_diseño":"Normal, Pequeño","Color":"Plomo, Negro, Blanco","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"S, L, XL","precio_unidad":18},
    {"ID":"LR0009","nombre_producto":"camiseta_Oversive","medidas_diseño":"Extra grande","Color":"Plomo, Blanco, Negro","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"S, XL, L","precio_unidad":20},
    {"ID":"LR0010","nombre_producto":"Bividi","medidas_diseño":"Normal","Color":"Negro, Blanco, Plomo","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"L, S, XL","precio_unidad":10},
    {"ID":"LR0011","nombre_producto":"Bividi","medidas_diseño":"Normal, Pequeño","Color":"Negro, Plomo, Blanco","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"L, XL, S","precio_unidad":12},
    {"ID":"LR0012","nombre_producto":"Hoodie","medidas_diseño":"Normal","Color":"Blanco, Negro, Plomo","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"S, M, L","precio_unidad":26},
    {"ID":"LR0013","nombre_producto":"Hoodie","medidas_diseño":"Normal, Pequeño","Color":"Blanco, Negro","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"S, M, L","precio_unidad":28},
    {"ID":"LR0014","nombre_producto":"Buzo","medidas_diseño":"Normal","Color":"Blanco, Negro, Plomo","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"S, M, L","precio_unidad":26},
    {"ID":"LR0015","nombre_producto":"Buzo","medidas_diseño":"Normal, Pequeño","Color":"Blanco, Negro, Plomo","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"S, XL, L","precio_unidad":28},
    {"ID":"LR0016","nombre_producto":"boxer_personalizado","medidas_diseño":"Pequeño","Color":"Plomo, Negro, Blanco","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"S, XL, M, L, XXL","precio_unidad":10},
    {"ID":"LR0017","nombre_producto":"pijama_personalizada","medidas_diseño":"Grande","Color":"Blanco, Negro, Plomo","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"L, S, XL, M","precio_unidad":20},
    {"ID":"LR0018","nombre_producto":"almohada_personalizada","medidas_diseño":"Normal","Color":"Blanco, Negro, Plomo","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"M","precio_unidad":12},
    {"ID":"LR0019","nombre_producto":"gorra_personalizada","medidas_diseño":"Pequeño","Color":"Blanco, Negro, Plomo","material_diseño":"DTF","cantidad_minima":1,"cantidad_maxima":5,"talla":"M","precio_unidad":10},
    {"ID":"LR0020","nombre_producto":"camiseta_polo","medidas_diseño":"Pequeño","Color":"Blanco, Negro, Plomo","material_diseño":"Bordado","cantidad_minima":1,"cantidad_maxima":5,"talla":"M, XL, S, L","precio_unidad":15},
    {"ID":"LR0021","nombre_producto":"pijama_personalizada","medidas_diseño":"Pequeño","Color":"Blanco, Negro, Plomo","material_diseño":"Bordado","cantidad_minima":1,"cantidad_maxima":5,"talla":"M, XL, S, L","precio_unidad":20},
    {"ID":"LR0022","nombre_producto":"gorra_personalizada","medidas_diseño":"Pequeño","Color":"Blanco, Negro, Plomo","material_diseño":"Bordado","cantidad_minima":1,"cantidad_maxima":5,"talla":"M","precio_unidad":10},
    {"ID":"LR0023","nombre_producto":"camiseta_basica","medidas_diseño":"Normal","Color":"Blanco","material_diseño":"Sublimado","cantidad_minima":1,"cantidad_maxima":5,"talla":"XXL, M, XL, S, L","precio_unidad":12},
    {"ID":"LR0024","nombre_producto":"camiseta_basica","medidas_diseño":"Normal, Pequeño","Color":"Blanco","material_diseño":"Sublimado","cantidad_minima":1,"cantidad_maxima":5,"talla":"XXL, M, XL, S, L","precio_unidad":14},
    {"ID":"LR0025","nombre_producto":"camiseta_Crop_top","medidas_diseño":"Normal","Color":"Blanco","material_diseño":"Sublimado","cantidad_minima":1,"cantidad_maxima":5,"talla":"M, XL, S, L","precio_unidad":12},
    {"ID":"LR0026","nombre_producto":"camiseta_Crop_top","medidas_diseño":"Normal, Pequeño","Color":"Blanco","material_diseño":"Sublimado","cantidad_minima":1,"cantidad_maxima":5,"talla":"L, S, XL, M","precio_unidad":14},
    {"ID":"LR0027","nombre_producto":"camiseta_oversize","medidas_diseño":"Normal, Pequeño","Color":"Blanco","material_diseño":"Sublimado","cantidad_minima":1,"cantidad_maxima":5,"talla":"L, S, XL, M","precio_unidad":16},
    {"ID":"LR0028","nombre_producto":"camiseta_oversize","medidas_diseño":"Normal, Pequeño","Color":"Blanco","material_diseño":"Sublimado","cantidad_minima":1,"cantidad_maxima":5,"talla":"L, S, XL, M","precio_unidad":18},
    {"ID":"LR0029","nombre_producto":"bividis","medidas_diseño":"Normal","Color":"Blanco","material_diseño":"Sublimado","cantidad_minima":1,"cantidad_maxima":5,"talla":"L, S, XL, M","precio_unidad":10},
    {"ID":"LR0030","nombre_producto":"bividis","medidas_diseño":"Normal, Pequeño","Color":"Blanco","material_diseño":"Sublimado","cantidad_minima":1,"cantidad_maxima":5,"talla":"L, S, XL, M","precio_unidad":12},
    {"ID":"LR0031","nombre_producto":"pijama_personalizada","medidas_diseño":"Normal","Color":"Blanco","material_diseño":"Sublimado","cantidad_minima":1,"cantidad_maxima":5,"talla":"L, S, XL, M","precio_unidad":20},
    {"ID":"LR0032","nombre_producto":"almohada_personalizada","medidas_diseño":"Normal","Color":"Blanco","material_diseño":"Sublimado","cantidad_minima":1,"cantidad_maxima":5,"talla":"M","precio_unidad":12},
    {"ID":"LR0033","nombre_producto":"camiseta_basica","medidas_diseño":"Sin diseño","Color":"Blanco, Negro, Plomo, Azul","material_diseño":"Llano","cantidad_minima":6,"cantidad_maxima":11,"talla":"M, XL, S, L","precio_unidad":8},
    {"ID":"LR0034","nombre_producto":"camiseta_basica","medidas_diseño":"Sin diseño","Color":"Blanco, Plomo, Negro","material_diseño":"Llano","cantidad_minima":12,"cantidad_maxima":35,"talla":"S, XL, M, L","precio_unidad":7},
    {"ID":"LR0035","nombre_producto":"camiseta_basica","medidas_diseño":"Sin diseño","Color":"Plomo, Negro","material_diseño":"Llano","cantidad_minima":36,"cantidad_maxima":100,"talla":"M, XL, S, L","precio_unidad":6},
    {"ID":"LR0036","nombre_producto":"gorra","medidas_diseño":"Sin diseño","Color":"Plomo, Azul","material_diseño":"Llano","cantidad_minima":12,"cantidad_maxima":100,"talla":"M","precio_unidad":5},
    {"ID":"LR0037","nombre_producto":"camiseta_basica","medidas_diseño":"Normal","Color":"Plomo, Azul","material_diseño":"DTF","cantidad_minima":6,"cantidad_maxima":11,"talla":"XL, S, M, L","precio_unidad":10},
    {"ID":"LR0038","nombre_producto":"camiseta_basica","medidas_diseño":"Normal","Color":"Plomo, Azul","material_diseño":"DTF","cantidad_minima":12,"cantidad_maxima":35,"talla":"L, S, XL, M","precio_unidad":9},
    {"ID":"LR0039","nombre_producto":"camiseta_basica","medidas_diseño":"Normal","Color":"Negro, Plomo","material_diseño":"DTF","cantidad_minima":36,"cantidad_maxima":100,"talla":"L, S, XL, M","precio_unidad":8},
    {"ID":"LR0040","nombre_producto":"camiseta_basica","medidas_diseño":"Normal","Color":"Negro, Plomo","material_diseño":"Sublimado","cantidad_minima":6,"cantidad_maxima":11,"talla":"L, S, XL, M","precio_unidad":10},
    {"ID":"LR0041","nombre_producto":"camiseta_basica","medidas_diseño":"Normal","Color":"Plomo, Negro","material_diseño":"Sublimado","cantidad_minima":12,"cantidad_maxima":35,"talla":"L, S, XL, M","precio_unidad":9},
    {"ID":"LR0042","nombre_producto":"camiseta_basica","medidas_diseño":"Normal","Color":"Plomo, Negro","material_diseño":"Sublimado","cantidad_minima":36,"cantidad_maxima":100,"talla":"L, S, XL, M","precio_unidad":8}
  ]
};

export function formatProductName(name: string): string {
  return name
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getUniqueProducts(data: Product[]): string[] {
  const products = [...new Set(data.map(p => p.nombre_producto))];
  return products.sort();
}

export function getMaterialsForProduct(data: Product[], producto: string): string[] {
  const materials = [...new Set(
    data
      .filter(p => p.nombre_producto.toLowerCase() === producto.toLowerCase())
      .map(p => p.material_diseño)
  )];
  return materials.sort();
}

export function getColorsForProductAndMaterial(data: Product[], producto: string, material: string): string[] {
  const colorsSet = new Set<string>();
  data
    .filter(p =>
      p.nombre_producto.toLowerCase() === producto.toLowerCase() &&
      p.material_diseño === material
    )
    .forEach(p => {
      p.Color.split(',').forEach(c => colorsSet.add(c.trim()));
    });
  return [...colorsSet].sort();
}

export function getSizesForSelection(data: Product[], producto: string, material: string, color: string): string[] {
  const sizesSet = new Set<string>();
  data
    .filter(p =>
      p.nombre_producto.toLowerCase() === producto.toLowerCase() &&
      p.material_diseño === material &&
      p.Color.split(',').map(c => c.trim()).includes(color)
    )
    .forEach(p => {
      p.talla.split(',').forEach(t => sizesSet.add(t.trim()));
    });

  const sizeOrder = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  return [...sizesSet].sort((a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b));
}

export function getDesignSizesForSelection(data: Product[], producto: string, material: string, color: string, talla: string): string[] {
  const designsSet = new Set<string>();
  data
    .filter(p =>
      p.nombre_producto.toLowerCase() === producto.toLowerCase() &&
      p.material_diseño === material &&
      p.Color.split(',').map(c => c.trim()).includes(color) &&
      p.talla.split(',').map(t => t.trim()).includes(talla)
    )
    .forEach(p => {
      p.medidas_diseño.split(',').forEach(d => designsSet.add(d.trim()));
    });
  return [...designsSet].sort();
}

export function findMatchingProduct(
  data: Product[],
  producto: string,
  material: string,
  color: string,
  talla: string,
  medidaDiseno: string,
  cantidad: number
): Product | null {
  return data.find(p =>
    p.nombre_producto.toLowerCase() === producto.toLowerCase() &&
    p.material_diseño === material &&
    p.Color.split(',').map(c => c.trim()).includes(color) &&
    p.talla.split(',').map(t => t.trim()).includes(talla) &&
    p.medidas_diseño.split(',').map(d => d.trim()).includes(medidaDiseno) &&
    cantidad >= p.cantidad_minima &&
    cantidad <= p.cantidad_maxima
  ) || null;
}
