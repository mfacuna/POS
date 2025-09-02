# Sistema ERP con NestJS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Descripción

Sistema de Planificación de Recursos Empresariales (ERP) desarrollado con NestJS, TypeORM y PostgreSQL. Esta aplicación proporciona una solución integral para la gestión empresarial, incluyendo:

- Gestión de productos
- Gestión de categorías
- Gestión de pedidos
- Sistema de usuarios y autenticación
- Gestión de inventario

## Requisitos Previos

- Node.js (v18 o superior)
- PostgreSQL
- Docker y Docker Compose (opcional, para desarrollo con contenedores)
- Yarn (recomendado) o npm

## Tecnologías Principales

- NestJS v10.0.0
- TypeORM v0.3.26
- PostgreSQL 
- Docker (opcional)

## Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd 05-erp
```

2. Instalar dependencias:
```bash
yarn install
```

3. Configuración del entorno:
   - Copiar el archivo `.env.example` a `.env`
   - Ajustar las variables de entorno según sea necesario

4. Iniciar la base de datos (elegir una opción):

   **Con Docker:**
   ```bash
   docker-compose up -d
   ```

   **Sin Docker:**
   - Asegúrate de tener PostgreSQL instalado y configurado localmente
   - Crea una base de datos para el proyecto

## Ejecución

### Desarrollo
```bash
# Modo desarrollo
yarn start:dev

# Modo debug
yarn start:debug
```

### Producción
```bash
# Compilar
yarn build

# Ejecutar versión de producción
yarn start:prod
```

## Scripts Disponibles

- `yarn build`: Compila la aplicación
- `yarn format`: Formatea el código usando Prettier
- `yarn start`: Inicia la aplicación
- `yarn start:dev`: Inicia la aplicación en modo desarrollo con recarga automática
- `yarn start:debug`: Inicia la aplicación en modo debug
- `yarn start:prod`: Inicia la aplicación en modo producción
- `yarn lint`: Ejecuta el linter
- `yarn test`: Ejecuta los tests unitarios
- `yarn test:watch`: Ejecuta los tests en modo watch
- `yarn test:cov`: Genera reporte de cobertura de tests
- `yarn test:debug`: Ejecuta los tests en modo debug
- `yarn test:e2e`: Ejecuta los tests end-to-end

## Estructura del Proyecto

```
src/
├── app.controller.ts      # Controlador principal
├── app.module.ts          # Módulo principal
├── app.service.ts         # Servicio principal
└── main.ts               # Punto de entrada de la aplicación
```

## Testing

La aplicación incluye tests unitarios y e2e:

```bash
# Tests unitarios
yarn test

# Tests e2e
yarn test:e2e

# Cobertura de tests
yarn test:cov
```

## Docker

El proyecto incluye configuración Docker para desarrollo. Para iniciar los servicios:

```bash
docker-compose up -d
```

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia UNLICENSED. 

## Autor

[Tu Nombre]

---

Para más información sobre la configuración y uso, consulta la [documentación de NestJS](https://docs.nestjs.com/).
