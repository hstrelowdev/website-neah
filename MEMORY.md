## Memoria

### Estado actual
- `AGENTS.md` está en español y describe el proyecto real: Laravel 13, Blade, Bootstrap por CDN, SQLite e historial automático.
- El comando de OpenCode `feature` vive en `.opencode/commands/feature.md`.
- El comando `probar-flujo` vive en `.opencode/commands/probar-flujo.md` y estandariza la verificación del flujo crítico.
- `opencode.json` y `skills-lock.json` están en `.gitignore`; se versiona `opencode.example.json` sin credenciales.
- La primera spec vive en `specs/001/error-checklist/specs.md`, documenta los hallazgos del flujo crítico y quedó cerrada el 2026-11-10 con todos corregidos.
- La spec 002 vive en `specs/002/upload-app/` y documenta el despliegue en alwaysdata Free: `specs.md` con D-06 a D-11, `plan.md` con las fases y `tasks.md` con T-049 a T-068. Las tareas de CI están hechas; la documentación del despliegue en el README quedó diferida y el despliegue manual sigue pendiente.
- El `README.md` se reorientó el 2026-11-10 como proyecto de aprendizaje: OpenCode + LLM + SDD para avanzar más rápido y repasar PHP/Laravel. No menciona alwaysdata, CI ni el despliegue porque todavía no se implementó.
- El workflow de CI está en `.github/workflows/tests.yml`: PHP 8.3 con `pdo_sqlite`, `composer install`, `php artisan test` y `vendor/bin/pint --test` en cada push y pull request. Sin Node/npm y sin deploy automático.
- Para que `pint --test` pase en CI se formatearon seis archivos preexistentes (`EmpleoController`, `EmpresaController`, `LoginController`, modelos `Empleo` y `Rubro`, y `DatabaseSeeder`); solo cambiaron espacios e imports, sin lógica.

### Decisiones importantes
- La carpeta `commands` se movió a `.opencode/commands/` porque OpenCode descubre los comandos de proyecto en `.opencode/commands/*.md`. Se eliminó un archivo vacío llamado `.opencode` que impedía crear el directorio.
- `MEMORY.MD` se renombró a `MEMORY.md` para coincidir con las referencias de `AGENTS.md` y del comando `feature`.
- El frontend real usa `public/css` y `public/js`; Vite/Tailwind solo los usa la vista `welcome`, que no está enrutada.
- Se creó `probar-flujo.md` para repetir la prueba del flujo sin reexplicar el checklist cada vez.
- Se corrigió el frontmatter de `feature.md` (faltaba el `---` de cierre) y se reemplazó `@MEMORY.md` por una instrucción explícita de lectura.
- Se ignoró `opencode.json` porque contiene una API key local y se creó `opencode.example.json` con `{env:CONTEXT7_API_KEY}`. También se ignoró `skills-lock.json`; `.agents/skills` y `docs/` siguen versionados.
- La primera spec usa la estructura `specs/001/error-checklist/` con `specs.md`, `plan.md` y `tasks.md`: `001` es el número secuencial y `error-checklist` el nombre descriptivo. El archivo se llama `specs.md` por decisión del usuario.
- D-01 a D-05 (spec 001) confirmadas el 2026-11-10: `/solicitudes` es privado con `302` a `/login`; `admin` puede todo y `gestor` todo salvo eliminar (`403`); filtros por estado, rango de `fecha_solicitud` y responsable con conteos por estado facetados; `ExampleTest` pasa a esperar `302` a `/login`; `fecha_cierre` se muestra en el listado y en la edición.
- El `README.md` se reformuló el 2026-11-10 para reflejar el estado real: PHP 8.3/Laravel 13, catálogos Rubro → Empresa → Empleo → Solicitud, roles `admin`/`gestor`, filtros y conteos, `fecha_cierre` automática, historial vía `#[ObservedBy]`, seeder `test@bitacora.test` / `admin1234` y suite de 47 tests.
- D-06 a D-11 (spec 002) confirmadas el 2026-11-10: despliegue en alwaysdata Free (uso personal); producción arranca con `migrate --seed --force` sin migrar la base local; URL `https://cuenta.alwaysdata.net` con SSL; GitHub Actions solo tests y Pint; `.env` de producción con `APP_ENV=production`, `APP_DEBUG=false`, `DB_DATABASE` absoluto y `SESSION_SECURE_COOKIE=true`; `Idle time = 0`, UptimeRobot cada 5 min y backups con `sqlite3 .backup`.

### Errores a evitar
- La suite `php artisan test` está verde (47 tests). `ExampleTest` espera `302` a `/login`; usa `actingAs()` en tests de feature.
- No insertar filas en `historial` a mano: lo hace `SolicitudObserver`.
- En comandos guardados de OpenCode, `@archivo` no adjunta el archivo; hay que pedir explícitamente que se lea (por ejemplo, `lee MEMORY.md`).
- No commitear `opencode.json`; usar `opencode.example.json` y definir `CONTEXT7_API_KEY` en el entorno.
- `.agents/skills/local-dates` pertenece al Diario de Estudio, no a Bitácora; no aplicarlo aquí.
- Los hallazgos de `specs/001/error-checklist/specs.md` quedaron corregidos: `/solicitudes` bajo `auth`, roles aplicados, filtros/conteos, `data-confirmar`, paginación Bootstrap y README con `nombre`.
- El plan de corrección está en `specs/001/error-checklist/plan.md` y las tareas en `specs/001/error-checklist/tasks.md`; la spec 001 está cerrada con D-01 a D-05 aplicadas.
- Netlify y Vercel no ejecutan PHP/Laravel y no ofrecen SQLite persistente; GitHub Actions no es hosting. El sitio vive en alwaysdata y Actions solo prueba y formatea.
- En producción, `DB_DATABASE` debe ser una ruta absoluta al archivo SQLite y el `.env` se crea en el servidor; nunca se commitea junto con `database/database.sqlite`.
