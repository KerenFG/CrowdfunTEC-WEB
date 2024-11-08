"use client";  // Marca el archivo como un componente cliente

import React, { useState } from 'react';
import ProjectsList from './projectList';
import FilterBar from './filterbar'; // Importar el componente de filtros
import styles from './page.module.css'; // Importar estilos

const Page = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  return (
    <div className={styles.pageContainer}>
      <h1>Lista de Proyectos</h1>
      <ProjectsList searchTerm={searchTerm} /> {/* Pasar searchTerm a ProjectsList */}
    </div>
  );
};

export default Page;
