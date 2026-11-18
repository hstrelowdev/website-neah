# Constitución del proyecto

Este documento establece los principios, restricciones y reglas fundamentales del proyecto.

Toda especificación (`spec`), planificación (`plan`), tarea (`task`) e implementación debe respetar esta constitución y las convenciones técnicas definidas en `AGENTS.md`.

Ningún agente puede ignorar estos principios ni tomar decisiones que los contradigan sin autorización explícita del usuario.

## 1. Simplicidad y arquitectura

El proyecto debe mantener una arquitectura simple, comprensible y fácil de mantener.

- Utilizar exclusivamente las tecnologías y herramientas definidas en `AGENTS.md`.
- Stack principal: React, Vite y Tailwind CSS.
- No incorporar frameworks, librerías, dependencias, servicios externos ni infraestructura adicional sin justificación y autorización.
- Priorizar las funcionalidades nativas de React, JavaScript y CSS antes de introducir soluciones adicionales.
- Reutilizar componentes, hooks, utilidades y patrones existentes cuando corresponda.
- Evitar abstracciones, capas arquitectónicas y complejidad innecesaria.
- No reescribir código funcional sin una justificación técnica.

Toda decisión arquitectónica debe responder a una necesidad real del proyecto.

## 2. La especificación es la fuente de verdad

La especificación (`spec`) activa es la única fuente de verdad para determinar el comportamiento esperado de cada funcionalidad.

- No implementar funcionalidades que no estén contempladas en la especificación activa.
- No asumir requisitos, comportamientos ni reglas de negocio que no estén documentados.
- No ampliar el alcance de una tarea por iniciativa propia.
- Si existe una ambigüedad, contradicción o falta de información, consultar al usuario antes de continuar.
- Cualquier modificación de los requisitos debe reflejarse primero en la especificación correspondiente.
- La implementación debe cumplir tanto la especificación activa como las restricciones de esta constitución.

Si una especificación contradice esta constitución, prevalece la constitución y se debe solicitar una aclaración.

## 3. Coherencia de las reglas de negocio

Toda funcionalidad debe tener sentido desde el punto de vista funcional y responder a las necesidades reales del sistema.

El agente debe analizar y verificar la coherencia de:

- **Inputs:** los campos deben solicitar información pertinente y aceptar datos válidos según su propósito.
- **Formularios:** los campos, validaciones y acciones deben respetar las reglas de negocio.
- **Componentes:** cada componente debe tener una responsabilidad clara y representar correctamente la información.
- **Datos mostrados:** los valores, estados, fechas y resultados deben ser correctos y coherentes.
- **Interacciones:** cada acción debe tener un propósito claro y producir el resultado esperado.
- **Estados y transiciones:** los cambios de estado deben respetar las condiciones y restricciones del negocio.
- **Relaciones:** las asociaciones entre entidades deben preservar la integridad y coherencia de los datos.

No basta con que una funcionalidad funcione técnicamente: también debe ser correcta desde el punto de vista del negocio y comprensible para el usuario.

Si se detecta una inconsistencia:

- Documentar el problema identificado.
- No inventar una regla de negocio para resolverlo.
- Consultar al usuario cuando la solución implique modificar un comportamiento funcional.

## 4. Separación de responsabilidades

La lógica de negocio debe mantenerse separada de la presentación y de las responsabilidades propias de cada componente.

- Los componentes React deben encargarse de la presentación y de las interacciones propias de su responsabilidad.
- Los hooks personalizados deben encapsular lógica reutilizable cuando corresponda.
- Las funciones y utilidades deben contener operaciones independientes de la interfaz cuando sea posible.
- La gestión del estado debe utilizar mecanismos apropiados según el alcance y complejidad de la funcionalidad.
- Evitar duplicar reglas de negocio entre componentes.
- Evitar componentes excesivamente grandes o con múltiples responsabilidades.
- Mantener desacopladas las operaciones de datos y la presentación cuando la arquitectura del proyecto lo permita.

Se debe respetar la arquitectura existente antes de introducir nuevas estructuras o patrones.

## 5. Integridad y persistencia de los datos

Los datos del usuario son críticos y deben preservarse ante cualquier modificación del sistema.

- Identificar y respetar el mecanismo de persistencia definido para el proyecto.
- No utilizar `localStorage`, `sessionStorage` u otros mecanismos como sustitutos de una persistencia estable sin que esté contemplado en la arquitectura.
- No introducir bases de datos, servicios externos o mecanismos de persistencia adicionales sin autorización.
- Mantener la integridad de los datos y sus relaciones.
- Validar los datos antes de utilizarlos o almacenarlos.
- Evitar sobrescribir o eliminar información sin justificación funcional.
- Gestionar correctamente errores y estados de persistencia.
- Evitar conversiones de fechas que alteren los valores o días registrados.
- Los cambios no deben provocar pérdidas involuntarias de información.

Antes de ejecutar operaciones destructivas o modificar información existente, el agente debe informar sus consecuencias y solicitar autorización.

## 6. Trazabilidad e historial de cambios

La trazabilidad de las modificaciones es fundamental para mantener la coherencia del proyecto.

- Los cambios relevantes deben quedar documentados según las convenciones establecidas.
- Mantener actualizadas las especificaciones cuando cambien los requisitos.
- Registrar decisiones técnicas y arquitectónicas relevantes.
- Evitar duplicar documentación o mantener especificaciones contradictorias.
- No modificar decisiones previamente aprobadas sin justificación.
- Mantener correspondencia entre requisitos, planificación, implementación y validación.

La trazabilidad no debe sacrificarse por simplificar una implementación.

## 7. Tests y calidad del código

Las pruebas son una condición obligatoria para validar las implementaciones y evitar regresiones.

**Pruebas:**

- Utilizar las herramientas de testing existentes en el proyecto.
- Priorizar pruebas unitarias y de integración según corresponda.
- Cubrir reglas de negocio, validaciones, interacciones y comportamientos relevantes.
- Verificar estados iniciales, transiciones y escenarios de error.
- Comprobar el comportamiento de los componentes interactivos.

**Calidad y formato:**

- Respetar las convenciones de código establecidas en `AGENTS.md`.
- Mantener un formato consistente.
- Evitar código duplicado y dependencias innecesarias.
- Ejecutar los comandos de validación disponibles en el proyecto.

**Reglas obligatorias:**

- No considerar terminada una tarea con nuevas pruebas fallidas.
- Investigar y corregir los errores antes de continuar.
- No modificar ni eliminar pruebas únicamente para ocultar errores.
- No introducir regresiones en funcionalidades existentes.
- Diferenciar errores preexistentes de los introducidos por la implementación actual.
- Toda nueva funcionalidad debe contar con pruebas acordes a su complejidad y criticidad.

Si una prueba falla por un problema preexistente, debe documentarse y distinguirse claramente de los errores introducidos por el cambio actual.

## 8. Diseño y experiencia de usuario

La interfaz debe mantener coherencia visual, funcional y de comportamiento.

- Respetar el archivo `DESIGN.md` correspondiente al sitio web que se esté desarrollando.
- Consultar el `DESIGN.md` ubicado en la raíz del directorio del sitio correspondiente (`<websiteVX>`).
- No mezclar decisiones visuales de diferentes sitios web.
- Mantener consistencia en colores, tipografías, espaciados, componentes y estados interactivos.
- Diseñar para Desktop, Tablet y Mobile.
- Priorizar accesibilidad, legibilidad y facilidad de uso.
- Evitar elementos decorativos o interacciones que no aporten valor.
- No inventar contenido, testimonios, estadísticas ni información comercial.

Si una especificación funcional contradice una decisión visual, se debe resolver la discrepancia antes de implementar.

## 9. Idioma y convenciones

Se debe mantener una separación clara entre el idioma del código y el idioma utilizado por el usuario.

- **Código:** inglés, respetando las convenciones del lenguaje y los nombres de dominio establecidos.
- **Interfaz:** español.
- **Validaciones y mensajes:** español.
- **Documentación:** español.
- **Especificaciones, planes y tareas:** español.
- **Comentarios técnicos:** preferentemente español cuando aporten contexto relevante.

Se deben mantener nombres descriptivos, consistentes y fáciles de comprender.

## 10. Alcance y autorización

El agente debe trabajar exclusivamente dentro del alcance solicitado.

- No agregar funcionalidades, rutas, dependencias o comportamientos por iniciativa propia.
- No modificar configuraciones fundamentales sin autorización.
- No cambiar la arquitectura ni las tecnologías del proyecto sin autorización.
- No realizar modificaciones destructivas sobre datos existentes sin autorización.
- No aprovechar una tarea para realizar refactorizaciones ajenas a su objetivo.
- No modificar archivos de configuración o dependencias sin una necesidad justificada.
- Si se identifica una mejora fuera del alcance, documentarla y proponerla sin implementarla.

Los cambios deben ser pequeños, enfocados y compatibles con el funcionamiento existente.

## Regla final

**La integridad del proyecto, la coherencia del negocio y el cumplimiento de las especificaciones prevalecen sobre la velocidad de implementación.**

Ante cualquier decisión no documentada, contradicción o incertidumbre que pueda afectar el comportamiento del sistema, el agente debe detenerse y consultar al usuario.

Ninguna implementación se considera terminada hasta que cumpla la especificación activa, respete esta constitución y haya superado las verificaciones correspondientes.