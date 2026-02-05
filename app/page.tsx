"use client";

import { useState, useMemo } from "react";
import {
  catalogData,
  formatProductName,
  getUniqueProducts,
  getMaterialsForProduct,
  getColorsForProductAndMaterial,
  getSizesForSelection,
  getDesignSizesForSelection,
  findMatchingProduct,
} from "./data/catalog";

export default function Home() {
  const [producto, setProducto] = useState("");
  const [material, setMaterial] = useState("");
  const [color, setColor] = useState("");
  const [talla, setTalla] = useState("");
  const [medidaDiseno, setMedidaDiseno] = useState("");
  const [cantidad, setCantidad] = useState(1);

  const products = useMemo(() => getUniqueProducts(catalogData.data), []);

  const materials = useMemo(
    () => (producto ? getMaterialsForProduct(catalogData.data, producto) : []),
    [producto]
  );

  const colors = useMemo(
    () =>
      producto && material
        ? getColorsForProductAndMaterial(catalogData.data, producto, material)
        : [],
    [producto, material]
  );

  const sizes = useMemo(
    () =>
      producto && material && color
        ? getSizesForSelection(catalogData.data, producto, material, color)
        : [],
    [producto, material, color]
  );

  const designSizes = useMemo(
    () =>
      producto && material && color && talla
        ? getDesignSizesForSelection(
            catalogData.data,
            producto,
            material,
            color,
            talla
          )
        : [],
    [producto, material, color, talla]
  );

  const matchedProduct = useMemo(() => {
    if (producto && material && color && talla && medidaDiseno && cantidad > 0) {
      return findMatchingProduct(
        catalogData.data,
        producto,
        material,
        color,
        talla,
        medidaDiseno,
        cantidad
      );
    }
    return null;
  }, [producto, material, color, talla, medidaDiseno, cantidad]);

  const total = matchedProduct ? matchedProduct.precio_unidad * cantidad : 0;

  const handleProductoChange = (value: string) => {
    setProducto(value);
    setMaterial("");
    setColor("");
    setTalla("");
    setMedidaDiseno("");
  };

  const handleMaterialChange = (value: string) => {
    setMaterial(value);
    setColor("");
    setTalla("");
    setMedidaDiseno("");
  };

  const handleColorChange = (value: string) => {
    setColor(value);
    setTalla("");
    setMedidaDiseno("");
  };

  const handleTallaChange = (value: string) => {
    setTalla(value);
    setMedidaDiseno("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!matchedProduct) {
      alert("No se encontró un producto que coincida con tu selección y cantidad.");
      return;
    }
    alert(
      `Pedido confirmado!\n\nProducto: ${formatProductName(producto)}\nMaterial: ${material}\nColor: ${color}\nTalla: ${talla}\nMedida diseño: ${medidaDiseno}\nCantidad: ${cantidad}\n\nTotal: $${total.toFixed(2)}`
    );
  };

  const isFormComplete =
    producto && material && color && talla && medidaDiseno && cantidad > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <div className="mx-auto max-w-lg px-4 py-8 sm:py-12">
        <header className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
            LOAR Estampados
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Personaliza tu prenda favorita
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-800 sm:p-8"
        >
          {/* Producto */}
          <div>
            <label
              htmlFor="producto"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Producto
            </label>
            <select
              id="producto"
              value={producto}
              onChange={(e) => handleProductoChange(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            >
              <option value="">Selecciona un producto</option>
              {products.map((p) => (
                <option key={p} value={p}>
                  {formatProductName(p)}
                </option>
              ))}
            </select>
          </div>

          {/* Material */}
          <div>
            <label
              htmlFor="material"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Tipo de Estampado
            </label>
            <select
              id="material"
              value={material}
              onChange={(e) => handleMaterialChange(e.target.value)}
              disabled={!producto}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            >
              <option value="">
                {producto
                  ? "Selecciona tipo de estampado"
                  : "Primero selecciona un producto"}
              </option>
              {materials.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Color */}
          <div>
            <label
              htmlFor="color"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Color
            </label>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
              {colors.length > 0 ? (
                colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => handleColorChange(c)}
                    className={`rounded-xl border-2 px-3 py-2 text-xs font-medium transition sm:text-sm ${
                      color === c
                        ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                        : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600"
                    }`}
                  >
                    {c}
                  </button>
                ))
              ) : (
                <p className="col-span-full py-2 text-center text-sm text-zinc-400">
                  {material
                    ? "No hay colores disponibles"
                    : "Selecciona producto y material"}
                </p>
              )}
            </div>
          </div>

          {/* Talla */}
          <div>
            <label
              htmlFor="talla"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Talla
            </label>
            <div className="flex flex-wrap gap-2">
              {sizes.length > 0 ? (
                sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => handleTallaChange(s)}
                    className={`min-w-[48px] rounded-xl border-2 px-4 py-2 text-sm font-medium transition ${
                      talla === s
                        ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                        : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600"
                    }`}
                  >
                    {s}
                  </button>
                ))
              ) : (
                <p className="py-2 text-sm text-zinc-400">
                  {color ? "No hay tallas disponibles" : "Selecciona un color"}
                </p>
              )}
            </div>
          </div>

          {/* Medida del diseño */}
          <div>
            <label
              htmlFor="medidaDiseno"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Tamaño del Diseño
            </label>
            <select
              id="medidaDiseno"
              value={medidaDiseno}
              onChange={(e) => setMedidaDiseno(e.target.value)}
              disabled={!talla}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
            >
              <option value="">
                {talla
                  ? "Selecciona tamaño del diseño"
                  : "Primero selecciona una talla"}
              </option>
              {designSizes.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Cantidad */}
          <div>
            <label
              htmlFor="cantidad"
              className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Cantidad
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-xl font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              >
                -
              </button>
              <input
                type="number"
                id="cantidad"
                value={cantidad}
                onChange={(e) =>
                  setCantidad(Math.max(1, parseInt(e.target.value) || 1))
                }
                min={1}
                className="h-12 w-20 rounded-xl border border-zinc-200 bg-zinc-50 text-center text-lg font-medium text-zinc-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
              />
              <button
                type="button"
                onClick={() => setCantidad(cantidad + 1)}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-xl font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              >
                +
              </button>
            </div>
          </div>

          {/* Resumen */}
          {isFormComplete && (
            <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
              <h3 className="mb-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                Resumen del pedido
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">
                    Producto:
                  </span>
                  <span className="font-medium text-zinc-900 dark:text-white">
                    {formatProductName(producto)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">
                    Estampado:
                  </span>
                  <span className="font-medium text-zinc-900 dark:text-white">
                    {material}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">
                    Color / Talla:
                  </span>
                  <span className="font-medium text-zinc-900 dark:text-white">
                    {color} / {talla}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">
                    Diseño:
                  </span>
                  <span className="font-medium text-zinc-900 dark:text-white">
                    {medidaDiseno}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">
                    Cantidad:
                  </span>
                  <span className="font-medium text-zinc-900 dark:text-white">
                    {cantidad} unidad{cantidad > 1 ? "es" : ""}
                  </span>
                </div>
                {matchedProduct ? (
                  <>
                    <div className="flex justify-between">
                      <span className="text-zinc-600 dark:text-zinc-400">
                        Precio unitario:
                      </span>
                      <span className="font-medium text-zinc-900 dark:text-white">
                        ${matchedProduct.precio_unidad.toFixed(2)}
                      </span>
                    </div>
                    <div className="mt-3 flex justify-between border-t border-zinc-200 pt-3 dark:border-zinc-700">
                      <span className="text-base font-semibold text-zinc-900 dark:text-white">
                        Total:
                      </span>
                      <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </>
                ) : (
                  <p className="mt-3 text-center text-sm text-amber-600 dark:text-amber-400">
                    La cantidad debe estar entre {" "}
                    los rangos disponibles del producto
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={!matchedProduct}
            className="mt-4 w-full rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-500 dark:disabled:bg-zinc-700 dark:disabled:text-zinc-500"
          >
            Confirmar Pedido
          </button>
        </form>

        <footer className="mt-8 text-center text-xs text-zinc-500 dark:text-zinc-500">
          <p>LOAR Estampados - Personalización de prendas</p>
        </footer>
      </div>
    </div>
  );
}
