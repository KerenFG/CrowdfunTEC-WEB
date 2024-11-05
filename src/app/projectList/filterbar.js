"use client"; // Marca el archivo como cliente si es necesario

import React from 'react';
import { useRouter } from "next/navigation";
import styles from './page.module.css'; // Importar estilos

const FilterBar = ({ searchTerm, setSearchTerm, userName }) => {
    const router = useRouter();
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value); // Actualizar el estado del término de búsqueda
  };

  const handleUserAdmin = () => {
    // Lógica para administrar el usuario
    console.log('Administrar usuario');
  };

  return (
    <div className={styles.filterBar}>
      <input
        type="text"
        placeholder="Buscar proyectos por nombre, categoría, dinero o fecha..."
        value={searchTerm}
        onChange={handleInputChange}
        className={styles.searchInput}
      />
      <h2>Bienvenid@, {userName}</h2>
      <button className={styles.button} onClick={() => router.push('../editUser')}>
        Administrar Usuario
      </button>
    </div>
  );
};

export default FilterBar;