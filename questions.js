/* =============================================================
   Banco de preguntas — PrepArquitectura IT
   Organizado por módulos. Cada pregunta:
     id      -> identificador estable (se usa para guardar progreso)
     module  -> id del módulo en MODULES
     topic   -> subtema (para el desglose fino)
     q       -> enunciado
     options -> array de opciones de respuesta
     answer  -> índice de la opción correcta (base 0)
     exp     -> explicación de por qué es correcta
   Regla: solo conceptos consolidados de la industria.
   No se incluyen cifras, productos ni certificaciones no verificadas.
   ============================================================= */

const MODULES = [
  {
    id: 'seg',
    icon: '🛡️',
    name: 'Ciberseguridad',
    desc: 'Arquitectura de seguridad, perímetro, identidad, detección y respuesta a incidentes.',
    color: '#2563eb'
  },
  {
    id: 'dc',
    icon: '🏢',
    name: 'Datacenter',
    desc: 'Servidores, virtualización, almacenamiento SAN, RAID, redes LAN/SAN y redundancia.',
    color: '#0891b2'
  },
  {
    id: 'cloud',
    icon: '☁️',
    name: 'Nube híbrida',
    desc: 'IaaS/PaaS/SaaS, responsabilidad compartida, alta disponibilidad, DR y costos en Azure, AWS o GCP.',
    color: '#7c3aed'
  },
  {
    id: 'uc',
    icon: '📹',
    name: 'UC y CCTV IP',
    desc: 'Voz sobre IP, calidad de servicio, videovigilancia IP, PoE y gestión de video.',
    color: '#db2777'
  },
  {
    id: 'data',
    icon: '💾',
    name: 'Protección de datos',
    desc: 'Backup, replicación, RPO/RTO, copias inmutables y estrategia multinube.',
    color: '#059669'
  },
  {
    id: 'pm',
    icon: '📋',
    name: 'Gestión PMI',
    desc: 'Grupos de procesos, alcance, cronograma, costo, riesgos y stakeholders.',
    color: '#ea580c'
  },
  {
    id: 'bid',
    icon: '💰',
    name: 'Propuestas técnicas y económicas',
    desc: 'Alcance, exclusiones, BOM, TCO, servicios, SLA y componente económico.',
    color: '#ca8a04'
  }
];

const QUESTIONS = [
  {
    "id": "seg-01",
    "module": "seg",
    "topic": "Principios de seguridad",
    "q": "¿Qué significa el principio de \"menor privilegio\"?",
    "options": [
      "Otorgar a cada usuario, proceso o sistema solo los permisos estrictamente necesarios para su función",
      "Dar permisos de administrador a todos los usuarios para agilizar el trabajo",
      "Permitir el acceso una sola vez al día para reducir carga en el servidor",
      "Cifrar todas las cuentas aunque no necesiten acceso a datos"
    ],
    "answer": 0,
    "exp": "El menor privilegio limita el alcance de cada cuenta y proceso al mínimo imprescindible; así, si una cuenta se compromete, el daño posible queda acotado."
  },
  {
    "id": "seg-02",
    "module": "seg",
    "topic": "Modelo CIA",
    "q": "El modelo de seguridad CIA se refiere a:",
    "options": [
      "Cifrado, Identificación y Auditoría",
      "Confidencialidad, Integridad y Disponibilidad",
      "Control de acceso, Inventariado y Aislamiento",
      "Continuidad, Identidad y Autenticación"
    ],
    "answer": 1,
    "exp": "CIA son los tres pilares: confidencialidad (solo quien debe ve), integridad (la información no se altera de forma no autorizada) y disponibilidad (el servicio está cuando se necesita)."
  },
  {
    "id": "seg-03",
    "module": "seg",
    "topic": "Identidad",
    "q": "Una autenticación multifactor (MFA) es correcta cuando combina:",
    "options": [
      "Dos preguntas secretas distintas",
      "Al menos dos factores de tipos diferentes: algo que sabes, tiene o es",
      "Dos contraseñas distintas del mismo usuario",
      "Usuario y un PIN que se cambia cada mes"
    ],
    "answer": 1,
    "exp": "MFA exige factores de categorías distintas (conocimiento, posesión, inherencia). Repetir factores del mismo tipo (contraseña + PIN) no aporta verdadera resistencia al ataque."
  },
  {
    "id": "seg-04",
    "module": "seg",
    "topic": "Perímetro",
    "q": "¿Cuál es el propósito de una DMZ (zona desmilitarizada)?",
    "options": [
      "Reemplazar el cortafuegos eliminando la necesidad de reglas",
      "Aislar físicamente el datacenter del resto de la empresa",
      "Ubicar servicios expuestos (web, correo, VPN) entre la red externa e interna para proteger la red interna",
      "Almacenar copias de seguridad fuera del sitio"
    ],
    "answer": 2,
    "exp": "La DMZ es una red intermedia donde se publican servicios de cara al exterior; si ese segmento es comprometido, la red interna sigue protegida por reglas adicionales."
  },
  {
    "id": "seg-05",
    "module": "seg",
    "topic": "Arquitectura de red",
    "q": "La segmentación de red ayuda principalmente a:",
    "options": [
      "Eliminar la necesidad de parches y actualizaciones",
      "Limitar la movilidad lateral de un atacante si logra ingresar a un segmento",
      "Aumentar la velocidad de navegación de los usuarios",
      "Sustituir a la autenticación multifactor"
    ],
    "answer": 1,
    "exp": "Al separar entornos (producción, desarrollo, oficinas, invitados) y controlar el tráfico entre ellos, se reduce el alcance de un incidente y se facilita el cumplimiento."
  },
  {
    "id": "seg-06",
    "module": "seg",
    "topic": "Zero Trust",
    "q": "El modelo Zero Trust se basa en:",
    "options": [
      "Confiar plenamente en todo lo que esté dentro de la red corporativa",
      "Verificar explícitamente cada solicitud, sin asumir confianza por ubicación de red",
      "Eliminar toda autenticación y usar solo segmentación",
      "Aislar cada usuario en una VLAN distinta sin controles adicionales"
    ],
    "answer": 1,
    "exp": "Zero Trust parte de la premisa \"nunca confíes, siempre verifica\": autenticación continua, mínimo privilegio y microsegmentación, independientemente de dónde esté el usuario."
  },
  {
    "id": "seg-07",
    "module": "seg",
    "topic": "Perímetro",
    "q": "¿Qué aporta un cortafuegos de nueva generación (NGFW) frente a un cortafuegos clásico?",
    "options": [
      "Solo filtra por dirección IP y puerto",
      "Inspección profunda de paquetes y control de aplicaciones (identificación de apps y usuarios)",
      "Sustituye al antivirus en endpoints",
      "Gestiona la impresión de documentos confidenciales"
    ],
    "answer": 1,
    "exp": "El NGFW inspecciona el contenido, identifica aplicaciones y usuarios, e integra prevención de intrusiones, lo que permite políticas más allá de puertos y direcciones."
  },
  {
    "id": "seg-08",
    "module": "seg",
    "topic": "Detección",
    "q": "¿Para qué sirve una plataforma SIEM?",
    "options": [
      "Centralizar y correlacionar eventos de seguridad de distintas fuentes para detectar alertas y apoyar la investigación",
      "Cifrar los discos de los servidores",
      "Dimensionar el ancho de banda de la red LAN",
      "Gestionar la impresión de documentos confidenciales"
    ],
    "answer": 0,
    "exp": "Un SIEM recorre logs de firewalls, servidores, endpoints e identidad, los correlaciona con reglas y casos de uso, y permite alertar, investigar y reportar incidentes."
  },
  {
    "id": "seg-09",
    "module": "seg",
    "topic": "Respuesta a incidentes",
    "q": "En la respuesta a incidentes, la secuencia más adecuada es:",
    "options": [
      "Erradicar primero y contener después para no perder el rastro",
      "Preparación, detección y análisis, contención, erradicación, recuperación y lecciones aprendidas",
      "Recuperación inmediata sin analizar la causa",
      "Comunicación pública antes de contener el incidente"
    ],
    "answer": 1,
    "exp": "Es el flujo recomendado por NIST: primero se contiene el daño, luego se erradica la causa, se recupera el servicio y se documentan las lecciones para mejorar."
  },
  {
    "id": "seg-10",
    "module": "seg",
    "topic": "Criptografía",
    "q": "Cifrar con TLS/HTTPS los servicios web protege principalmente:",
    "options": [
      "Los datos mientras viajan por la red (en tránsito)",
      "Los backups almacenados fuera del datacenter",
      "La disponibilidad del servidor ante caídas",
      "Las credenciales guardadas en el navegador"
    ],
    "answer": 0,
    "exp": "TLS cifra la comunicación entre cliente y servidor, evitando snooping y manipulación en tránsito. Para datos en reposo se usa cifrado de almacenamiento, y para disponibilidad son los planes de redundancia."
  },
  {
    "id": "seg-11",
    "module": "seg",
    "topic": "Identidad",
    "q": "¿Por qué se agrega una \"sal\" (salt) al almacenar contraseñas?",
    "options": [
      "Para hacer las contraseñas más largas visualmente",
      "Para que dos usuarios con la misma contraseña no tengan el mismo hash y dificultar ataques con tablas precalculadas",
      "Para acelerar el proceso de autenticación",
      "Para cifrar la contraseña con clave pública"
    ],
    "answer": 1,
    "exp": "La sal es un valor único por usuario combinado antes de hashear; impide que contraseñas idénticas produzcan hashes idénticos y neutraliza los ataques de rainbow tables."
  },
  {
    "id": "dc-01",
    "module": "dc",
    "topic": "Infraestructura física",
    "q": "¿Qué es la unidad \"U\" (rack unit) en un rack de datacenter?",
    "options": [
      "Una unidad de ancho de banda de red",
      "Una unidad de altura equivalente a 1,75 pulgadas para dimensionar equipos",
      "Una unidad de consumo eléctrico en vatios",
      "Una unidad de almacenamiento en terabytes"
    ],
    "answer": 1,
    "exp": "1U = 1,75 pulgadas de altura; sirve para calcular cuántos equipos (servidores, switches) caben en un rack y planificar la capacidad del cuarto."
  },
  {
    "id": "dc-02",
    "module": "dc",
    "topic": "Almacenamiento",
    "q": "En RAID 1, los datos se almacenan:",
    "options": [
      "Distribuidos con paridad entre al menos tres discos",
      "En espejo: una copia idéntica en dos discos",
      "En un solo disco con compresión",
      "En cinta para archivar"
    ],
    "answer": 1,
    "exp": "RAID 1 duplica los datos (espejo): buena tolerancia a fallos y lectura, pero aprovecha el 50% de la capacidad bruta."
  },
  {
    "id": "dc-03",
    "module": "dc",
    "topic": "Almacenamiento",
    "q": "¿Cuántos discos pueden fallar sin pérdida de datos en RAID 5 y en RAID 6?",
    "options": [
      "RAID 5: 1 disco; RAID 6: 2 discos",
      "RAID 5: 2 discos; RAID 6: 1 disco",
      "Ambos toleran cualquier número de discos",
      "RAID 5 no tolera fallos; RAID 6 tolera 1"
    ],
    "answer": 0,
    "exp": "RAID 5 usa paridad distribuida y tolera un disco; RAID 6 usa doble paridad y tolera dos discos simultáneos, útil en discos de gran capacidad donde la reconstrucción tarda."
  },
  {
    "id": "dc-04",
    "module": "dc",
    "topic": "Almacenamiento",
    "q": "La principal diferencia entre SAN y NAS es:",
    "options": [
      "SAN entrega almacenamiento en bloques sobre una red dedicada; NAS entrega archivos sobre TCP/IP",
      "SAN es solo para correos; NAS es solo para videos",
      "SAN no necesita discos; NAS no necesita red",
      "Ambas tecnologías son idénticas con nombres distintos"
    ],
    "answer": 0,
    "exp": "La SAN (Fibre Channel o iSCSI) presenta volúmenes en bloques que el servidor ve como discos locales; el NAS comparte sistemas de archivos por red (NFS/SMB)."
  },
  {
    "id": "dc-05",
    "module": "dc",
    "topic": "Red SAN",
    "q": "¿Qué función cumple el \"zoning\" en una red SAN de Fibre Channel?",
    "options": [
      "Cifrar el tráfico de almacenamiento",
      "Definir qué nodos pueden comunicarse entre sí, aislando el acceso por zonas",
      "Asignar direcciones IP a los discos",
      "Comprimir los bloques de datos"
    ],
    "answer": 1,
    "exp": "El zoning segmenta la fabric de FC en zonas lógicas; solo los iniciadores y destinos de la misma zona se ven, reduciendo el riesgo de accesos no autorizados y errores de configuración."
  },
  {
    "id": "dc-06",
    "module": "dc",
    "topic": "Red SAN",
    "q": "iSCSI permite:",
    "options": [
      "Transportar bloques de almacenamiento sobre una red TCP/IP estándar",
      "Compartir carpetas de archivos como SMB",
      "Grabar video en cámaras IP",
      "Virtualizar el sistema operativo de un switch"
    ],
    "answer": 0,
    "exp": "iSCSI encapsula bloques SCSI sobre TCP/IP, lo que permite construir SAN sobre la red LAN existente sin Fibre Channel, con menor costo pero mayor sensibilidad a la latencia de la red."
  },
  {
    "id": "dc-07",
    "module": "dc",
    "topic": "Virtualización",
    "q": "Un hipervisor de tipo 1 (bare metal) se ejecuta:",
    "options": [
      "Sobre un sistema operativo convencional instalado en el servidor",
      "Directamente sobre el hardware del servidor, sin sistema operativo intermedio",
      "Solo en computadoras de escritorio",
      "Dentro de un contenedor Docker"
    ],
    "answer": 1,
    "exp": "Los hipervisores tipo 1 (como VMware ESXi, Hyper-V o KVM en modo bare metal) corren directamente sobre el hardware, ofreciendo mejor rendimiento y aislamiento para producción."
  },
  {
    "id": "dc-08",
    "module": "dc",
    "topic": "Virtualización",
    "q": "¿Por qué un snapshot NO reemplaza un backup?",
    "options": [
      "Porque el snapshot es más lento que el backup",
      "Porque el snapshot depende de la máquina virtual y del almacenamiento original; si ese storage se pierde o corrompe, se pierde también",
      "Porque el snapshot solo funciona en la nube pública",
      "Porque el snapshot cifra los datos"
    ],
    "answer": 1,
    "exp": "El snapshot es un punto de referencia ligero atado a la infraestructura; no es una copia independiente. La estrategia de respaldo debe copiar los datos a otro sistema con retención definida."
  },
  {
    "id": "dc-09",
    "module": "dc",
    "topic": "Redundancia",
    "q": "La notación \"N+1\" en redundancia significa:",
    "options": [
      "Que hay N componentes y un componente extra para cubrir una falla",
      "Que todos los componentes son de marca distinta",
      "Que se duplica el ancho de banda de la red",
      "Que hay un solo componente sin respaldo"
    ],
    "answer": 0,
    "exp": "N es la capacidad necesaria para soportar la carga; el \"+1\" es una unidad de respaldo, de modo que la falla de un componente no interrumpe el servicio (típico en UPS, fuentes y ventiladores)."
  },
  {
    "id": "dc-10",
    "module": "dc",
    "topic": "Servidores",
    "q": "Al dimensionar servidores para virtualización, es importante considerar que:",
    "options": [
      "vCPU equivale siempre uno a uno con núcleos físicos sin sobreasignación posible",
      "La sobreasignación de vCPU puede generar contención de CPU si no se dimensiona bien",
      "Más memoria RAM nunca mejora el rendimiento",
      "El número de sockets no influye en el costo"
    ],
    "answer": 1,
    "exp": "La sobreasignación es habitual y eficiente, pero si se excede la capacidad física real aparece contención (ready time). Se dimensiona considerando núcleos, memoria, I/O y crecimiento futuro."
  },
  {
    "id": "dc-11",
    "module": "dc",
    "topic": "Almacenamiento",
    "q": "¿Dónde conviene colocar las bases de datos transaccionales de baja latencia?",
    "options": [
      "En tier de alto rendimiento (SSD/NVMe) por su baja latencia",
      "En discos HDD de alta capacidad",
      "En cinta LTO para archivar",
      "En el almacenamiento del navegador del usuario"
    ],
    "answer": 0,
    "exp": "Las cargas transaccionales exigen baja latencia y alta tasa de IOPS, por lo que se dimensionan en SSD/NVMe; los HDD de alta capacidad se usan para datos fríos y capacidad, y la cinta para archivo a largo plazo."
  },
  {
    "id": "dc-12",
    "module": "dc",
    "topic": "Red LAN",
    "q": "En una arquitectura spine-leaf de datacenter:",
    "options": [
      "Solo hay un switch central por donde pasa todo el tráfico",
      "Cada leaf se conecta a todos los spine, dando caminos predecibles y escalado horizontal",
      "Los servidores se conectan directamente entre sí sin switches",
      "Los spine conectan solo impresoras y cámaras"
    ],
    "answer": 1,
    "exp": "La topología spine-leaf (dos capas, malla completa entre capas) ofrece caminos de igual salto, balanceo ECMP y escalado horizontal, superando las limitaciones de una topología en árbol de tres capas."
  },
  {
    "id": "cloud-01",
    "module": "cloud",
    "topic": "Modelos de servicio",
    "q": "Si alquilas máquinas virtuales en la nube con sistema operativo gestionado por ti, estás usando:",
    "options": [
      "SaaS",
      "PaaS",
      "IaaS",
      "On-premise"
    ],
    "answer": 2,
    "exp": "IaaS entrega infraestructura (computo, red, storage) como servicio; tú gestionas el sistema operativo, aplicaciones y datos. En PaaS el proveedor gestiona el runtime; en SaaS también la aplicación."
  },
  {
    "id": "cloud-02",
    "module": "cloud",
    "topic": "Modelos de servicio",
    "q": "Un correo corporativo en la nube o una suite de oficina en línea es un ejemplo de:",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "Backup como servicio"
    ],
    "answer": 2,
    "exp": "SaaS entrega la aplicación completa lista para usar; el cliente se ocupa de los datos, la identidad de sus usuarios y la configuración del servicio."
  },
  {
    "id": "cloud-03",
    "module": "cloud",
    "topic": "Responsabilidad compartida",
    "q": "En el modelo de responsabilidad compartida de la nube, bajo IaaS al cliente le corresponde gestionar:",
    "options": [
      "El datacenter físico, las redes y el hipervisor",
      "El sistema operativo, las aplicaciones, los datos y la identidad de sus usuarios",
      "Nada: el proveedor gestiona absolutamente todo",
      "Solo la factura mensual"
    ],
    "answer": 1,
    "exp": "En IaaS el proveedor cubre física, red y virtualización; el cliente es responsable del SO, parches, aplicaciones, datos y accesos. En SaaS esa responsabilidad se traslada casi por completo al proveedor."
  },
  {
    "id": "cloud-04",
    "module": "cloud",
    "topic": "Arquitectura en nube",
    "q": "¿Qué es una zona de disponibilidad (Availability Zone)?",
    "options": [
      "Una región geográfica completa con varios datacenters",
      "Un dominio de fallo aislado dentro de una región, normalmente con energía y red independientes",
      "Una carpeta en el portal de facturación",
      "Un tipo de máquina virtual"
    ],
    "answer": 1,
    "exp": "Las AZ son datacenters lógicamente independientes dentro de una región; distribuir recursos en varias AZ permite tolerar la caída de una sola sin afectar el servicio."
  },
  {
    "id": "cloud-05",
    "module": "cloud",
    "topic": "Alta disponibilidad y DR",
    "q": "Desplegar la aplicación en varias zonas de disponibilidad de una región busca principalmente:",
    "options": [
      "Reducir costos eliminando servidores",
      "Alta disponibilidad ante la caída de una AZ",
      "Cumplir con la normativa de protección de datos automáticamente",
      "Evitar por completo la necesidad de backups"
    ],
    "answer": 1,
    "exp": "Multi-AZ da tolerancia a fallos dentro de la región (HA). La recuperación ante desastres a nivel de región (multi-región) es un objetivo de RPO/RTO distinto y más costoso."
  },
  {
    "id": "cloud-06",
    "module": "cloud",
    "topic": "Economía de la nube",
    "q": "Migrar de compras de hardware (CapEx) a servicios consumidos por uso (OpEx) significa:",
    "options": [
      "Que el costo total siempre será menor",
      "Que el gasto pasa a ser un gasto operativo variable ligado al consumo, sin inversión inicial de hardware",
      "Que ya no se necesitan planes de capacidad",
      "Que los datos dejan de estar bajo tu control"
    ],
    "answer": 1,
    "exp": "La nube convierte la inversión inicial en un gasto variable según consumo. No garantiza menor costo: sin gobernanza y ajuste de tamaño (right-sizing) el gasto puede crecer descontrolado."
  },
  {
    "id": "cloud-07",
    "module": "cloud",
    "topic": "Economía de la nube",
    "q": "El auto scaling permite:",
    "options": [
      "Ajustar automáticamente la cantidad de recursos según la demanda",
      "Cambiar de proveedor de nube sin migrar datos",
      "Eliminar la necesidad de monitoreo",
      "Aumentar el precio fijo de la suscripción"
    ],
    "answer": 0,
    "exp": "Las políticas de auto scaling agregan o retiran instancias según métricas (CPU, cola de mensajes), manteniendo el rendimiento y evitando pagar capacidad ociosa."
  },
  {
    "id": "cloud-08",
    "module": "cloud",
    "topic": "Economía de la nube",
    "q": "Para workloads estables y predecibles a largo plazo, ¿qué opción suele reducir el costo?",
    "options": [
      "Pagar siempre tarifa por uso sin compromiso",
      "Instancias reservadas o compromisos de uso de uno a tres años",
      "Dejar las máquinas encendidas sin monitoreo",
      "Usar la región más cara por confiabilidad"
    ],
    "answer": 1,
    "exp": "Los compromisos de uso (reserved/committed use) ofrecen descuentos significativos a cambio de comprometerse a un uso sostenido; para cargas variables sigue conviniendo la tarifa estándar o las instancias interrumpibles."
  },
  {
    "id": "cloud-09",
    "module": "cloud",
    "topic": "Almacenamiento en nube",
    "q": "¿Para qué sirve la jerarquía de tipos de almacenamiento (hot/cool/archive)?",
    "options": [
      "Para cifrar los datos automáticamente",
      "Para equilibrar costo y frecuencia de acceso: datos accedidos poco se archivan más barato",
      "Para aumentar la latencia de las consultas",
      "Para reemplazar la gestión de identidad"
    ],
    "answer": 1,
    "exp": "Mover datos fríos a capas de menor costo (con mayor latencia de recuperación y, a veces, tiempo mínimo de permanencia) reduce el gasto sin perder la disponibilidad del dato."
  },
  {
    "id": "cloud-10",
    "module": "cloud",
    "topic": "Migración",
    "q": "En la estrategia de migración conocida como las 6R, \"rehost\" significa:",
    "options": [
      "Migrar \"tal cual\" las cargas a la nube sin cambios (lift and shift)",
      "Rediseñar la aplicación nativa para la nube",
      "Apagar la aplicación y no migrarla",
      "Reescribir todo el código en otro lenguaje"
    ],
    "answer": 0,
    "exp": "Rehost es movimiento directo; replatform aplica ajustes puntuales (base de datos gestionada, runtime), refactor rediseña para aprovechar servicios nativos. Cada R tiene distinto esfuerzo y beneficio."
  },
  {
    "id": "cloud-11",
    "module": "cloud",
    "topic": "Gobernanza y costos",
    "q": "Etiquetar (tag) los recursos en la nube sirve principalmente para:",
    "options": [
      "Acelerar el arranque de las máquinas virtuales",
      "Identificar propiedad, proyecto y entorno para asignar costos y aplicar políticas",
      "Cifrar automáticamente los volúmenes",
      "Reemplazar los backups"
    ],
    "answer": 1,
    "exp": "Las etiquetas permiten desglosar la factura por equipo o proyecto, aplicar reglas de gobernanza (apagado fuera de horario, regiones permitidas) y detectar recursos huérfanos."
  },
  {
    "id": "cloud-12",
    "module": "cloud",
    "topic": "Conectividad híbrida",
    "q": "¿Cuál es la ventaja de una conexión dedicada privada (circuito dedicado) entre el datacenter y la nube frente a una VPN por internet?",
    "options": [
      "Elimina por completo la necesidad de cifrar la información",
      "Ofrece mayor ancho de banda, latencia más estable y tráfico predecible sin traversar internet público",
      "No requiere configuración de red alguna",
      "Es siempre más barato que una VPN"
    ],
    "answer": 1,
    "exp": "El circuito dedicado (por ejemplo, ExpressRoute en Azure o Direct Connect en AWS) da conectividad privada y consistente; la VPN cifrada por internet sigue siendo válida como opción económica o de respaldo, y los datos igualmente deben cifrarse."
  },
  {
    "id": "uc-01",
    "module": "uc",
    "topic": "Voz sobre IP",
    "q": "En telefonía sobre IP, SIP y RTP cumplen funciones distintas: SIP es...",
    "options": [
      "El protocolo de señalización que establece, modifica y finaliza las sesiones",
      "El protocolo que transporta el audio una vez establecida la llamada",
      "El algoritmo de compresión de video",
      "El protocolo de enrutamiento de la red LAN"
    ],
    "answer": 0,
    "exp": "SIP se encarga de la señalización (quién llama a quién, negociación), mientras que el audio viaja en RTP, normalmente sobre UDP, minimizando la latencia."
  },
  {
    "id": "uc-02",
    "module": "uc",
    "topic": "Calidad de servicio",
    "q": "Para que la voz suene clara en una red con otros tráficos, se prioriza el tráfico de voz mediante:",
    "options": [
      "Aumentar el volumen del altavoz",
      "Calidad de servicio (QoS) marcando paquetes con DSCP, p. ej. Expedited Forwarding para voz",
      "Desactivar el cifrado de la red",
      "Usar siempre WiFi en lugar de cable"
    ],
    "answer": 1,
    "exp": "Con QoS se marca y programa el tráfico de voz para que los switches y routers lo encolen con prioridad, reduciendo jitter, latencia y pérdida de paquetes que degradan la conversación."
  },
  {
    "id": "uc-03",
    "module": "uc",
    "topic": "Voz sobre IP",
    "q": "¿Por qué las llamadas de voz usan codecs?",
    "options": [
      "Para comprimir el audio y reducir el ancho de banda consumido por llamada",
      "Para asignar direcciones IP a los teléfonos",
      "Para cifrar la red LAN",
      "Para grabar el video de la reunión"
    ],
    "answer": 0,
    "exp": "Codecs como G.711 (mayor calidad, más ancho de banda, del orden de 80-90 kbps por llamada con cabeceras) o G.729 (más eficiente) convierten el audio en paquetes y lo comprimen; la elección equilibra calidad, ancho de banda y latencia."
  },
  {
    "id": "uc-04",
    "module": "uc",
    "topic": "CCTV IP",
    "q": "La tecnología PoE (Power over Ethernet) en cámaras IP permite:",
    "options": [
      "Alimentar la cámara y llevar los datos por el mismo cable de red",
      "Aumentar la resolución del sensor automáticamente",
      "Sustituir al sistema de grabación",
      "Cifrar el video en el cable coaxial"
    ],
    "answer": 0,
    "exp": "Los estándares IEEE 802.3af/at/bt entregan energía por el cable Ethernet, lo que simplifica instalación y permite respaldo de alimentación centralizado en el switch o inyector PoE."
  },
  {
    "id": "uc-05",
    "module": "uc",
    "topic": "CCTV IP",
    "q": "Si se pasa de H.264 a H.265 en las cámaras, el efecto esperado es:",
    "options": [
      "Consumir más ancho de banda para la misma calidad",
      "Obtener calidad similar con menor bitrate y menos almacenamiento",
      "Eliminar la necesidad de discos",
      "Aumentar la latencia de la red LAN"
    ],
    "answer": 1,
    "exp": "H.265 (HEVC) comprime más eficientemente que H.264, reduciendo bitrate y espacio de grabación; conviene validar compatibilidad del VMS y del equipo de grabación."
  },
  {
    "id": "uc-06",
    "module": "uc",
    "topic": "CCTV IP",
    "q": "¿Qué es un VMS (Video Management System)?",
    "options": [
      "El software que administra cámaras, grabación, reproducción y búsqueda de video",
      "Un tipo de switch para cámaras",
      "El lente de la cámara",
      "Un protocolo de compresión de video"
    ],
    "answer": 0,
    "exp": "El VMS es la plataforma de gestión: descubre cámaras, programa grabaciones, permite visualización en vivo, búsqueda por evento y exportación de evidencia, con control de usuarios y retención."
  },
  {
    "id": "uc-07",
    "module": "uc",
    "topic": "CCTV IP",
    "q": "Un NVR (Network Video Recorder) frente a un DVR se caracteriza porque:",
    "options": [
      "El NVR trabaja con cámaras IP ya digitalizadas; el DVR incorpora la captura de cámaras analógicas",
      "El NVR solo graba en cinta",
      "El DVR no necesita discos",
      "Ambos son exactamente lo mismo"
    ],
    "answer": 0,
    "exp": "En sistemas modernos IP el NVR recibe el stream de las cámaras por red; el DVR integra el codificador para cámaras analógicas. La tendencia es arquitecturas IP con grabación distribuida o en la nube."
  },
  {
    "id": "uc-08",
    "module": "uc",
    "topic": "CCTV IP",
    "q": "Alrededor de la grabación de video, una buena práctica de resiliencia es:",
    "options": [
      "Confiar en que un único grabador nunca fallará",
      "Usar discos en RAID, replicar la grabación y definir retención según la normativa",
      "Grabar sin respaldo para ahorrar discos",
      "Aumentar la resolución de todas las cámaras sin medir ancho de banda"
    ],
    "answer": 1,
    "exp": "La redundancia de almacenamiento (RAID), la copia de evidencia a otro sitio y una retención definida por política garantizan que el video siga disponible cuando se necesite, sin saturar la red."
  },
  {
    "id": "uc-09",
    "module": "uc",
    "topic": "Comunicaciones unificadas",
    "q": "Las comunicaciones unificadas (UC) integran principalmente:",
    "options": [
      "Voz, video, mensajería, presencia y colaboración en una sola experiencia",
      "Solo correos impresos",
      "Solo cámaras de seguridad",
      "Solo redes inalámbricas"
    ],
    "answer": 0,
    "exp": "UC combina telefonía, videollamadas, chat, presencia y compartir contenido, permitiendo pasar de un canal a otro durante la conversación y trabajando desde distintos dispositivos."
  },
  {
    "id": "uc-10",
    "module": "uc",
    "topic": "CCTV IP",
    "q": "Al diseñar una red para cámaras IP, es importante:",
    "options": [
      "Medir el ancho de banda y el storage según resolución, cantidad de cámaras, fps y días de retención",
      "Conectar todas las cámaras al switch de oficina sin planificación",
      "Usar siempre la resolución máxima sin calcular el impacto",
      "Evitar el uso de VLANs en la red de video"
    ],
    "answer": 0,
    "exp": "El dimensionamiento parte del bitrate por cámara (resolución, compresión, fps), el número de cámaras, la retención requerida y el consumo PoE; de ahí se define switches, discos y política de red."
  },
  {
    "id": "data-01",
    "module": "data",
    "topic": "Estrategia de respaldo",
    "q": "La regla 3-2-1 de respaldos significa:",
    "options": [
      "3 copias de los datos, en 2 medios distintos, 1 copia fuera del sitio (idealmente inmutable)",
      "3 servidores, 2 switches, 1 cortafuegos",
      "3 administradores, 2 backups diarios, 1 auditoría",
      "3 regiones de nube, 2 usuarios, 1 contraseña"
    ],
    "answer": 0,
    "exp": "La regla garantiza recuperación ante falla de un medio, de un sitio o de un ataque; la copia inmutable o air-gapped protege frente a ransomware que cifra las copias accesibles."
  },
  {
    "id": "data-02",
    "module": "data",
    "topic": "RPO y RTO",
    "q": "Si el requisito de negocio es perder como máximo 15 minutos de datos, estamos hablando de:",
    "options": [
      "RTO",
      "RPO",
      "SLA de disponibilidad del proveedor de nube",
      "MTTR"
    ],
    "answer": 1,
    "exp": "El RPO define cuánta pérdida de datos es aceptable (frecuencia de respaldo/replicación). El RTO define cuánto tiempo puede estar caído el servicio antes de restaurarse."
  },
  {
    "id": "data-03",
    "module": "data",
    "topic": "RPO y RTO",
    "q": "El RTO (Recovery Time Objective) corresponde a:",
    "options": [
      "La cantidad máxima de datos que se puede perder",
      "El tiempo máximo aceptable para restaurar el servicio después de una interrupción",
      "El número de copias de seguridad requeridas",
      "El tiempo de garantía del fabricante del servidor"
    ],
    "answer": 1,
    "exp": "RTO mide la duración aceptable de la interrupción; de él se derivan decisiones como replicación en caliente (RTO bajo) frente a restauración desde cinta (RTO mayor)."
  },
  {
    "id": "data-04",
    "module": "data",
    "topic": "Tipos de respaldo",
    "q": "En un respaldo incremental, se copia:",
    "options": [
      "Todos los datos en cada ejecución, sin importar cambios",
      "Solo los datos modificados desde el último respaldo (completo o incremental)",
      "Los archivos eliminados del sistema",
      "Únicamente las configuraciones del sistema"
    ],
    "answer": 1,
    "exp": "El incremental es rápido y ligero, pero restaurar requiere la base más las incrementales posteriores. El diferencial copia todo lo cambiado desde el último completo, lo que simplifica la restauración a costa de crecer más."
  },
  {
    "id": "data-05",
    "module": "data",
    "topic": "Ransomware",
    "q": "¿Por qué las copias inmutables son clave contra el ransomware?",
    "options": [
      "Porque cifran los datos con una clave secreta",
      "Porque no pueden ser modificadas ni eliminadas durante un periodo, ni siquiera con credenciales administrativas",
      "Porque se guardan solo en papel",
      "Porque eliminan los virus automáticamente"
    ],
    "answer": 1,
    "exp": "La inmutabilidad (WORM o políticas de bloqueo de objetos) impide que un atacante con credenciales cifre o borre las copias, permitiendo restaurar desde una versión limpia."
  },
  {
    "id": "data-06",
    "module": "data",
    "topic": "Replicación",
    "q": "La replicación síncrona se diferencia de la asincrónica en que:",
    "options": [
      "La síncrona confirma la escritura solo tras replicar al sitio remoto (RPO cercano a cero, mayor latencia)",
      "La síncrona nunca replica los datos",
      "La asincróna exige que ambos sitios estén en la misma sala",
      "Ambas ofrecen idéntico RPO siempre"
    ],
    "answer": 0,
    "exp": "La síncrona da cero pérdida de datos a costa de latencia entre sitios (distancias cortas); la asincrónica es más tolerante a distancia pero permite cierta pérdida según el intervalo de replicación."
  },
  {
    "id": "data-07",
    "module": "data",
    "topic": "Validación",
    "q": "La práctica más importante para confiar en un plan de respaldo es:",
    "options": [
      "Hacer copias todos los días sin probarlas",
      "Ejecutar pruebas periódicas de restauración y documentar los tiempos obtenidos",
      "Guardar todas las copias en el mismo servidor",
      "Depender del estado \"completado\" del software"
    ],
    "answer": 1,
    "exp": "Un respaldo no probado no cuenta como respaldo: las pruebas de restauración verifican integridad, tiempos reales y cumplimiento del RPO/RTO, y revelan problemas antes del incidente."
  },
  {
    "id": "data-08",
    "module": "data",
    "topic": "Retención",
    "q": "Definir la política de retención de copias busca:",
    "options": [
      "Guardar todas las copias indefinidamente para máxima seguridad",
      "Conservar los datos el tiempo exigido por negocio y normativa, y eliminar lo que ya no se necesita",
      "Reducir el número de servidores",
      "Evitar el cifrado de las copias"
    ],
    "answer": 1,
    "exp": "La retención equilibra requisitos legales y de negocio con el costo de almacenamiento y el riesgo de conservar datos obsoletos; en nube existen life-cycle policies que automatizan el ciclo."
  },
  {
    "id": "data-09",
    "module": "data",
    "topic": "Backup multinube",
    "q": "En una estrategia de protección de datos multinube, es fundamental:",
    "options": [
      "Usar la misma herramienta sin importar el proveedor",
      "Definir políticas por aplicación con RPO/RTO claros, copias inmutables y prueba de restauración en cada entorno",
      "Respaldar solo lo que está en la nube pública",
      "Evitar guardar copias fuera de la región"
    ],
    "answer": 1,
    "exp": "Cada entorno (on-premise, Azure, AWS, GCP) tiene capacidades distintas; una política única y verificable con inmutabilidad y pruebas garantiza recuperación consistente y control de costos."
  },
  {
    "id": "pm-01",
    "module": "pm",
    "topic": "Marco PMI",
    "q": "Los cinco grupos de procesos del PMBOK son:",
    "options": [
      "Iniciar, Planificar, Ejecutar, Monitorear y Controlar, Cerrar",
      "Analizar, Diseñar, Construir, Probar, Entregar",
      "Ventas, Soporte, Finanzas, Recursos Humanos, Legal",
      "Alta, Baja, Media, Crítica, Cerrada"
    ],
    "answer": 0,
    "exp": "Son los grupos que enmarcan el ciclo de vida: se inicia el proyecto, se planifica el trabajo, se ejecuta, se monitorea y controla frente a la línea base, y se cierran las fases o el proyecto."
  },
  {
    "id": "pm-02",
    "module": "pm",
    "topic": "Restricciones",
    "q": "El triángulo de restricciones del proyecto relaciona:",
    "options": [
      "Alcance, tiempo (cronograma) y costo, con calidad como eje central",
      "Riesgo, calidad y comunicación",
      "Proveedores, clientes y competencia",
      "Hardware, software y red"
    ],
    "answer": 0,
    "exp": "Cambiar un vértice afecta a los demás: ampliar el alcance sin más tiempo o costo compromete la calidad; por eso los cambios se gestionan mediante el control integrado de cambios."
  },
  {
    "id": "pm-03",
    "module": "pm",
    "topic": "Stakeholders",
    "q": "La matriz RACI sirve para:",
    "options": [
      "Definir roles: quién ejecuta (Responsable), quién aprueba (Accountable), quién consulta y quién es informado",
      "Medir el rendimiento de la red",
      "Calcular el costo de los servidores",
      "Priorizar vulnerabilidades"
    ],
    "answer": 0,
    "exp": "RACI aclara responsabilidades por actividad, evita ambigüedades y conflictos entre áreas, y es una herramienta clave de comunicación con los interesados."
  },
  {
    "id": "pm-04",
    "module": "pm",
    "topic": "Riesgos",
    "q": "En la evaluación cualitativa de riesgos se clasifica cada riesgo por:",
    "options": [
      "Probabilidad e impacto, usando una matriz de prioridad",
      "Solo por el costo del riesgo",
      "El color de la sala del proyecto",
      "El número de participantes del proyecto"
    ],
    "answer": 0,
    "exp": "La matriz probabilidad × impacto prioriza los riesgos; sobre los de mayor prioridad se definen respuestas (evitar, transferir, mitigar, aceptar) y responsables en el registro de riesgos."
  },
  {
    "id": "pm-05",
    "module": "pm",
    "topic": "Alcance",
    "q": "La línea base de alcance sirve para:",
    "options": [
      "Definir el trabajo confirmado contra el cual se miden los cambios y el desempeño",
      "Fijar el precio de venta al cliente",
      "Seleccionar la marca de los servidores",
      "Determinar la disponibilidad del datacenter"
    ],
    "answer": 0,
    "exp": "La línea base (WBS + diccionario de alcance) es la referencia del control de cambios: cualquier ampliación debe pasar por el proceso formal, con impacto en tiempo y costo evaluado."
  },
  {
    "id": "pm-06",
    "module": "pm",
    "topic": "Cronograma",
    "q": "La ruta crítica de un proyecto es:",
    "options": [
      "La secuencia de actividades de mayor duración que determina la fecha final más temprana",
      "La lista de tareas menos importantes",
      "El camino de red más rápido del datacenter",
      "El orden alfabético de las actividades"
    ],
    "answer": 0,
    "exp": "La ruta crítica no tiene holgura: retrasar una actividad de la ruta crítica retrasa todo el proyecto, por lo que es el foco del monitoreo del cronograma."
  },
  {
    "id": "pm-07",
    "module": "pm",
    "topic": "Costos",
    "q": "La reserva de contingencia en el presupuesto se destina a:",
    "options": [
      "Riesgos identificados con respuesta definida (eventos conocidos en el registro)",
      "Sobrecostos no previstos por mala gestión",
      "Bonificaciones al equipo",
      "Impuestos de la organización"
    ],
    "answer": 0,
    "exp": "La contingencia cubre riesgos identificados (estimados con la técnica de reserva) y suele estar bajo control del equipo; los imprevistos por mala planificación no deben cubrirse con ella."
  },
  {
    "id": "pm-08",
    "module": "pm",
    "topic": "Cierre",
    "q": "Al cerrar el proyecto es importante:",
    "options": [
      "Documentar las lecciones aprendidas, confirmar el alcance entregado y archivar los registros",
      "Cancelar todas las comunicaciones con el cliente",
      "Cerrar contratos sin verificar entregables",
      "Omitir la retroalimentación del cliente"
    ],
    "answer": 0,
    "exp": "El cierre valida los entregables con el cliente, libera recursos, cierra contratos y recoge lecciones aprendidas que alimentan la mejora continua de la organización."
  },
  {
    "id": "pm-09",
    "module": "pm",
    "topic": "Comunicación",
    "q": "En un proyecto de infraestructura, la comunicación con stakeholders debe ser:",
    "options": [
      "Definida en un plan con frecuencia, canal, responsable y destinatarios",
      "Solo escrita y una sola vez al inicio",
      "Espontánea, según el ánimo del gestor",
      "Únicamente verbal entre los técnicos"
    ],
    "answer": 0,
    "exp": "La gestión de la comunicación planifica qué, cuándo, cómo y quién informa; así se evitan malentendidos de alcance y se mantiene alineadas a las partes interesadas."
  },
  {
    "id": "bid-01",
    "module": "bid",
    "topic": "Estructura de propuesta",
    "q": "Una propuesta técnica bien estructurada debe incluir:",
    "options": [
      "Solución propuesta, arquitectura, alcance, supuestos, exclusiones, plan de implementación y matriz de cumplimiento",
      "Solo el precio final",
      "La biografía del vendedor y nada más",
      "Capturas de pantalla del producto"
    ],
    "answer": 0,
    "exp": "La propuesta técnica demuestra que se entendió el requerimiento y cómo se cumple; los supuestos y exclusiones delimitan la responsabilidad y evitan disputas posteriores."
  },
  {
    "id": "bid-02",
    "module": "bid",
    "topic": "Alcance",
    "q": "Listar explícitamente las \"exclusiones\" en una propuesta busca:",
    "options": [
      "Reducir el precio a costa del cliente",
      "Dejar claro qué NO está incluido, evitando expectativas erróneas y reclamos futuros",
      "Ocultar riesgos del proyecto",
      "Cumplir un requisito estético"
    ],
    "answer": 1,
    "exp": "Las exclusiones (p. ej. migración de datos, obra civil, licencias de terceros) proteben a ambas partes y hacen que la comparación entre ofertas sea justa."
  },
  {
    "id": "bid-03",
    "module": "bid",
    "topic": "Componente económico",
    "q": "La lista de materiales (BOM) en el componente económico debe detallar:",
    "options": [
      "Equipos, licencias, cantidades, unidad de medida, precio unitario y total",
      "Solo el total a pagar",
      "El nombre comercial sin cantidades",
      "Los datos de contacto del cliente"
    ],
    "answer": 0,
    "exp": "Una BOM trazable permite auditar el costo, aplicar descuentos por volumen, verificar el alcance técnico y reutilizarse en etapas de adquisición o soporte."
  },
  {
    "id": "bid-04",
    "module": "bid",
    "topic": "TCO",
    "q": "El TCO (Costo Total de Propiedad) incluye:",
    "options": [
      "Solo el precio de compra del hardware",
      "Compra, licencias, implementación, soporte, energía, operación, actualizaciones y fin de vida útil",
      "Únicamente el IVA del producto",
      "El precio de lista sin descuentos"
    ],
    "answer": 1,
    "exp": "El TCO mide el costo durante todo el ciclo de vida; comparar solo el precio inicial suele llevar a decisiones equivocadas frente a alternativas con menor costo operativo."
  },
  {
    "id": "bid-05",
    "module": "bid",
    "topic": "Servicios",
    "q": "El costo de servicios en una propuesta se calcula normalmente considerando:",
    "options": [
      "Tipo de servicio, horas o días requeridos, tarifa por recurso e imprevistos o gestión de riesgos",
      "Solo el número de servidores",
      "El número de usuarios finales",
      "El color de la interfaz del producto"
    ],
    "answer": 0,
    "exp": "Las bolsas de horas (implementación, configuración, gestión de proyecto, soporte) multiplican cantidad por tarifa; incluir partidas de imprevistos y gestión da realismo al costo."
  },
  {
    "id": "bid-06",
    "module": "bid",
    "topic": "Evaluación",
    "q": "Una matriz de cumplimiento de requisitos permite:",
    "options": [
      "Marcar punto por punto si la solución cumple cada requisito, con evidencia o referencia del documento",
      "Sustituir la revisión técnica del cliente",
      "Calcular automáticamente el descuento final",
      "Omitir los supuestos de la propuesta"
    ],
    "answer": 0,
    "exp": "Facilita la evaluación objetiva del comité, muestra trazabilidad entre requerimiento y solución y reduce el riesgo de ofertas descalificadas por omisiones."
  },
  {
    "id": "bid-07",
    "module": "bid",
    "topic": "Riesgos de propuesta",
    "q": "Incluir los supuestos en la propuesta es importante porque:",
    "options": [
      "Permite condicionar la oferta a datos o condiciones verificables y asignar riesgos a quien los controla",
      "Sirve para alargar el documento",
      "Evita tener que describir la solución",
      "Reduce la necesidad de un SLA"
    ],
    "answer": 0,
    "exp": "Supuestos como disponibilidad de enlaces, ventanas de mantenimiento o entrega de credenciales del cliente dejan claras las bases de precio y plazo; si el supuesto falla, el cambio se gestiona formalmente."
  },
  {
    "id": "bid-08",
    "module": "bid",
    "topic": "SLA",
    "q": "Un SLA (Acuerdo de Nivel de Servicio) en una propuesta debe contener:",
    "options": [
      "Métricas medibles (disponibilidad, tiempos de respuesta), frecuencia de reporte y consecuencias del incumplimiento",
      "Solo una promesa verbal de buen servicio",
      "El nombre del gerente comercial",
      "La marca de los equipos"
    ],
    "answer": 0,
    "exp": "Un SLA útil es cuantificable y verificable (p. ej. disponibilidad mensual, tiempo de atención por prioridad), con reportes periódicos y mecanismos de escalamiento o créditos por incumplimiento."
  },
  {
    "id": "bid-09",
    "module": "bid",
    "topic": "Precio",
    "q": "Al armar el componente económico, el precio final al cliente se obtiene a partir de:",
    "options": [
      "Precio de lista, descuentos aplicables, impuestos, costos de servicios y el margen objetivo",
      "Solo el precio de lista del fabricante",
      "El presupuesto disponible del cliente sin costo propio",
      "Un número aleatorio de referencia"
    ],
    "answer": 0,
    "exp": "La estructura típica parte del precio de lista, aplica descuentos comerciales, suma servicios e impuestos y define el margen, manteniendo coherencia con el TCO presentado."
  },
  {
    "id": "bid-101",
    "module": "bid",
    "topic": "Arquitectura de solución",
    "q": "Al revisar una propuesta, el diagrama de arquitectura muestra un componente que no aparece en el BOM. ¿Cómo debería resolver esta inconsistencia el equipo de oferta?",
    "options": [
      "Retirar el componente del diagrama para que coincida con el BOM, aunque el diseño lo requiera.",
      "Reconciliar ambos documentos: aclarar si el componente lo aporta el cliente, está incluido en un servicio o falta cotizarlo.",
      "Añadir una nota de que el BOM es solo informativo y no vinculante.",
      "Mantener el error y corregirlo únicamente si el cliente lo pregunta."
    ],
    "answer": 1,
    "exp": "Diagrama y BOM deben ser consistentes: cada elemento del diseño debe rastrearse a un ítem cotizado, a un aporte del cliente o a un supuesto explícito."
  },
  {
    "id": "bid-102",
    "module": "bid",
    "topic": "Arquitectura de solución",
    "q": "¿Qué característica hace que un diagrama de arquitectura sea realmente evaluable por el comité del cliente?",
    "options": [
      "Incluir leyenda, interfaces, zonas de confianza y el flujo principal entre componentes.",
      "Usar una paleta de colores corporativa sin leyenda.",
      "Detallar el marcaje físico de cableado en la vista principal.",
      "Mostrar únicamente los productos del proveedor que presenta la propuesta."
    ],
    "answer": 0,
    "exp": "Un diagrama evaluable permite verificar interfaces, límites y flujos; sin leyenda ni convención, cada lector lo interpreta de forma distinta."
  },
  {
    "id": "bid-103",
    "module": "bid",
    "topic": "Arquitectura de solución",
    "q": "La arquitectura propuesta depende de un componente que aún no existe en el entorno del cliente. ¿Cómo se trata en la propuesta?",
    "options": [
      "Omitir la referencia para no debilitar la propuesta.",
      "Convertirla en un riesgo del cliente y retirarla del diseño.",
      "Registrarla como supuesto o dependencia, con impacto en plazo, costo o alcance si no se cumple.",
      "Considerarla implícitamente aceptada por el cliente."
    ],
    "answer": 2,
    "exp": "Las dependencias no verificadas se declaran como supuestos con su consecuencia, para que la propuesta no asuma hechos no confirmados."
  },
  {
    "id": "bid-104",
    "module": "bid",
    "topic": "Arquitectura de solución",
    "q": "En una propuesta por fases, ¿qué relación debe existir entre el estado actual y el estado objetivo de la arquitectura?",
    "options": [
      "El estado objetivo debe ignorar el estado actual para simplificar la lectura.",
      "Basta describir el estado objetivo con texto; el estado actual se omite.",
      "El estado actual se adjunta como documento aparte, sin relación con la propuesta.",
      "Debe mostrarse la brecha: estado actual, estado objetivo y la ruta de transición por fase."
    ],
    "answer": 3,
    "exp": "La brecha justifica la inversión y permite al cliente ver qué cambia, en qué orden y con qué riesgos."
  },
  {
    "id": "bid-105",
    "module": "bid",
    "topic": "Arquitectura de solución",
    "q": "¿Por qué conviene acordar con el cliente los símbolos y el nivel de detalle de los diagramas antes de presentar?",
    "options": [
      "Para reducir el tiempo de revisión legal del contrato.",
      "Para que la lectura sea unívoca y las decisiones de diseño se discutan sobre un lenguaje común.",
      "Porque un diagrama sin convención acordada no tiene validez técnica.",
      "Para evitar tener que actualizar el diagrama después."
    ],
    "answer": 1,
    "exp": "Los acuerdos de representación eliminan ambigüedades y evitan discusiones sobre interpretación durante la evaluación."
  },
  {
    "id": "bid-106",
    "module": "bid",
    "topic": "Alcance y dependencias",
    "q": "¿Qué práctica reduce mejor los conflictos posteriores del tipo «eso no estaba incluido»?",
    "options": [
      "Describir el alcance únicamente en la reunión de inicio.",
      "Incluir todas las peticiones del cliente para evitar reclamos.",
      "Detallar entregables, interfaces, responsabilidades por parte y criterios de aceptación por fase.",
      "Dejar el alcance registrado solo en el correo de cierre de la venta."
    ],
    "answer": 2,
    "exp": "Un alcance verificable y compartido evita interpretaciones dispares y da base objetiva para gestionar cambios."
  },
  {
    "id": "bid-107",
    "module": "bid",
    "topic": "Alcance y dependencias",
    "q": "Durante la preventa, el cliente pide agregar una integración adicional no contemplada. ¿Cuál es la mejor respuesta comercial-técnica?",
    "options": [
      "Evaluar el impacto en plazo, riesgo y precio, y formalizarla como adicional o como cambio de alcance.",
      "Aceptarla verbalmente y resolver el detalle durante la ejecución.",
      "Negarla por completo para proteger el margen.",
      "Incluirla sin costo como cortesía para cerrar más rápido."
    ],
    "answer": 0,
    "exp": "Toda ampliación debe dimensionarse y acordarse por escrito: aceptarla sin base encubre el costo y generar conflictos; rechazarla sin análisis pierde oportunidad."
  },
  {
    "id": "bid-108",
    "module": "bid",
    "topic": "Alcance y dependencias",
    "q": "Si una dependencia del cliente, como la disponibilidad de ventanas de mantenimiento, no se cumple, ¿qué debería ocurrir?",
    "options": [
      "El proveedor absorbe el impacto sin efecto sobre el plan.",
      "El proyecto se cancela automáticamente por incumplimiento.",
      "No tiene efecto porque las dependencias son solo declarativas.",
      "El plazo y los recursos comprometidos se revisan formalmente mediante control de cambios."
    ],
    "answer": 3,
    "exp": "Las dependencias contractuales activan mecanismos de cambio cuando fallan, para no penalizar al proveedor por hechos fuera de su control."
  },
  {
    "id": "bid-109",
    "module": "bid",
    "topic": "Alcance y dependencias",
    "q": "El alcance incluye una tecnología que aún no está probada en el entorno del cliente. ¿Cómo debe acompañarse?",
    "options": [
      "Con un descuento para compensar la incertidumbre.",
      "Con supuestos explícitos, riesgo registrado y un plan de validación o prueba piloto.",
      "Con la eliminación del ítem del alcance en cualquier caso.",
      "Con la traslación íntegra del riesgo al cliente sin registro alguno."
    ],
    "answer": 1,
    "exp": "La tecnología no probada se gestiona con validación temprana y transparencia, ni ocultándola ni descartándola."
  },
  {
    "id": "bid-110",
    "module": "bid",
    "topic": "Alcance y dependencias",
    "q": "¿Qué técnica confirma que el alcance propuesto coincide con el entendimiento del cliente antes de la firma?",
    "options": [
      "Una sesión de recorrido del alcance con criterios de aceptación y registro de acuerdos.",
      "Enviar la propuesta por correo y asumir aprobación por silencio.",
      "Incluir una cláusula que prohíba objeciones posteriores.",
      "Adjuntar el acta de la última reunión comercial sin recorrer el contenido."
    ],
    "answer": 0,
    "exp": "La validación conjunta del alcance descubre malentendidos antes de comprometerse y evita disputas en la ejecución."
  },
  {
    "id": "bid-111",
    "module": "bid",
    "topic": "Plan de implementación",
    "q": "¿Qué elemento convierte un cronograma en un plan de implementación evaluable?",
    "options": [
      "Las fechas de inicio y fin de cada tarea.",
      "El desglose de precios asociado a cada mes.",
      "Hitos, dependencias, recursos asignados, criterios de salida por fase y puntos de aceptación.",
      "Una lista de tareas ordenadas alfabéticamente."
    ],
    "answer": 2,
    "exp": "Un plan evaluable permite al cliente verificar viabilidad, compromisos y cómo se demostrará el avance."
  },
  {
    "id": "bid-112",
    "module": "bid",
    "topic": "Plan de implementación",
    "q": "El cliente exige un plazo que consideras inviable. ¿Cuál es la mejor práctica durante la oferta?",
    "options": [
      "Aceptar el plazo para no perder la licitación.",
      "Comprometer el plazo y renegociarlo ya en ejecución.",
      "Rechazar la oportunidad de inmediato.",
      "Explorar alternativas, como secuencia, alcance parcial o recursos adicionales, y mostrar con datos el impacto de cada una."
    ],
    "answer": 3,
    "exp": "La credibilidad se construye mostrando compromisos: un plazo prometido sin base se convierte en incumplimiento y penalidad."
  },
  {
    "id": "bid-113",
    "module": "bid",
    "topic": "Plan de implementación",
    "q": "¿Qué representa un piloto o prueba de concepto dentro de una propuesta?",
    "options": [
      "Una venta adicional de hardware para el cliente.",
      "Una validación acotada de los supuestos críticos antes de comprometer el alcance completo.",
      "La fase final de despliegue en producción.",
      "Un descuento por volumen condicionado a la firma."
    ],
    "answer": 1,
    "exp": "El piloto reduce incertidumbre técnica y comercial en un perímetro controlado antes de comprometer el alcance total."
  },
  {
    "id": "bid-114",
    "module": "bid",
    "topic": "Plan de implementación",
    "q": "¿Qué cumple la ventana de mantenimiento acordada en el plan de implementación?",
    "options": [
      "Define cuándo se permite el cambio en producción, con impacto en planificación, recursos y riesgo.",
      "Es una recomendación opcional sin efecto contractual.",
      "Sirve únicamente para el soporte postventa.",
      "Reemplaza al plan de comunicaciones del proyecto."
    ],
    "answer": 0,
    "exp": "La ventana formaliza restricciones operativas que condicionan la secuencia, el equipo y los tiempos muertos del despliegue."
  },
  {
    "id": "bid-115",
    "module": "bid",
    "topic": "Plan de implementación",
    "q": "¿Cómo debe tratarse la formación del personal del cliente en la propuesta?",
    "options": [
      "Omitirla para no aumentar el precio de la oferta.",
      "Delegarla íntegramente al fabricante sin coste ni registro.",
      "Incluirla como entregable con audiencia, contenido y criterios de transferencia de conocimiento.",
      "Considerarla cubierta por la garantía del producto."
    ],
    "answer": 2,
    "exp": "La capacitación es un entregable que reduce riesgo de adopción y debe tener alcance, destinatarios y forma de verificación."
  },
  {
    "id": "bid-116",
    "module": "bid",
    "topic": "Plan de implementación",
    "q": "¿Qué significa un criterio de aceptación de hito?",
    "options": [
      "La fecha límite para emitir la factura.",
      "El presupuesto aprobado para la fase.",
      "La lista de asistentes a la reunión de revisión.",
      "La condición verificable que debe cumplirse para dar el hito por concluido."
    ],
    "answer": 3,
    "exp": "Los criterios objetivos de aceptación protegen a ambas partes y habilitan el pago ligado al avance."
  },
  {
    "id": "bid-117",
    "module": "bid",
    "topic": "Plan de implementación",
    "q": "Un hito de entrega depende de que el cliente proporcione credenciales y accesos. ¿Cómo se refleja en la propuesta?",
    "options": [
      "No se menciona para simplificar el documento.",
      "Como dependencia con fecha, responsable del cliente y efecto en el cronograma ante retrasos.",
      "Como riesgo del proveedor asumido sin compensación.",
      "Como penalidad automática para el proveedor."
    ],
    "answer": 1,
    "exp": "Explicitar dependencias con su efecto evita que los retrasos ajenos se traduzcan en incumplimientos del proveedor."
  },
  {
    "id": "bid-118",
    "module": "bid",
    "topic": "Gestión de riesgos",
    "q": "¿Qué caracteriza a un riesgo de la oferta bien formulado?",
    "options": [
      "Tener causa, evento, probabilidad, impacto, respuesta y responsable.",
      "Ser lo suficientemente grave como para justificar un sobreprecio general.",
      "Estar redactado en términos genéricos para no alarmar al cliente.",
      "Incluirse solo si el cliente lo solicita por escrito."
    ],
    "answer": 0,
    "exp": "Un riesgo accionable requiere datos que permitan priorizarlo y asignarle una respuesta concreta."
  },
  {
    "id": "bid-119",
    "module": "bid",
    "topic": "Gestión de riesgos",
    "q": "En una matriz de probabilidad e impacto, ¿dónde se concentra la atención primero?",
    "options": [
      "En el cuadrante de baja probabilidad y bajo impacto.",
      "En todos los riesgos por igual, sin priorizar.",
      "En el cuadrante de alta probabilidad y alto impacto.",
      "Solo en los riesgos de tipo financiero."
    ],
    "answer": 2,
    "exp": "La matriz ordena el esfuerzo de mitigación hacia lo que más puede dañar el resultado de la oferta."
  },
  {
    "id": "bid-120",
    "module": "bid",
    "topic": "Gestión de riesgos",
    "q": "¿Cuál es un ejemplo típico de respuesta de transferencia de riesgo en una propuesta?",
    "options": [
      "Aumentar el margen de beneficio sin comunicarlo.",
      "Ignorarlo hasta que ocurra en la ejecución.",
      "Eliminar el entregable relacionado para evitarlo.",
      "Trasladarlo a un tercero mediante seguro, cláusula pactada o subcontratación con SLA."
    ],
    "answer": 3,
    "exp": "La transferencia mueve la consecuencia a otra parte, siempre con acuerdo explícito y nunca como ocultamiento."
  },
  {
    "id": "bid-121",
    "module": "bid",
    "topic": "Gestión de riesgos",
    "q": "¿Por qué se incluye un plan de mitigación junto a cada riesgo relevante?",
    "options": [
      "Para aumentar el volumen de páginas de la propuesta.",
      "Para demostrar que existe una acción concreta que reduce la probabilidad o el impacto.",
      "Porque lo exige la norma de calidad del cliente en todos los casos.",
      "Para poder responsabilizar al cliente si el riesgo se materializa."
    ],
    "answer": 1,
    "exp": "La mitigación convierte el riesgo en gestión: sin acción, el registro es solo una advertencia."
  },
  {
    "id": "bid-122",
    "module": "bid",
    "topic": "Gestión de riesgos",
    "q": "Tras aplicar la mitigación, un riesgo permanece con impacto alto. ¿Qué se hace?",
    "options": [
      "Se escala, se comunica al patrocinador y se monitorea con indicadores durante la ejecución.",
      "Se retira de la matriz para simplificar el reporte.",
      "Se documenta sin ninguna acción adicional.",
      "Se reduce artificialmente la calificación en el próximo reporte."
    ],
    "answer": 0,
    "exp": "El riesgo residual se gobierna: se eleva a quien puede decidir y se vigila hasta que cambie su estado."
  },
  {
    "id": "bid-123",
    "module": "bid",
    "topic": "Gestión de riesgos",
    "q": "¿Qué relación debe existir entre los supuestos de la propuesta y sus riesgos?",
    "options": [
      "Ninguna; son documentos independientes entre sí.",
      "Los supuestos siempre eliminan la necesidad de gestionar riesgos.",
      "Cada supuesto crítico debe evaluarse: si no se cumple, materializa un riesgo con impacto en plazo, alcance o costo.",
      "Los riesgos sustituyen a los supuestos en la versión ejecutiva del documento."
    ],
    "answer": 2,
    "exp": "Los supuestos no verificados son la materia prima de los riesgos; vincularlos permite anticipar el impacto."
  },
  {
    "id": "bid-124",
    "module": "bid",
    "topic": "Gestión de riesgos",
    "q": "¿Cuándo conviene revisar la matriz de riesgos durante el ciclo de la oferta?",
    "options": [
      "Solo una vez, al firmar el contrato.",
      "Únicamente cuando ocurre un incidente.",
      "Nunca; es un documento estático.",
      "En cada revisión de la propuesta y antes de cada hito comercial clave, actualizando respuestas."
    ],
    "answer": 3,
    "exp": "La oferta evoluciona; los riesgos deben acompañar cada decisión para que sigan siendo vigentes."
  },
  {
    "id": "bid-125",
    "module": "bid",
    "topic": "Términos comerciales",
    "q": "¿Por qué se fija una vigencia para una propuesta comercial?",
    "options": [
      "Para presionar al cliente con urgencia artificial en la decisión.",
      "Para acotar el período durante el cual precios, disponibilidad y condiciones quedan comprometidos.",
      "Porque la normativa prohíbe emitir ofertas sin fecha de caducidad.",
      "Para alargar el proceso de aprobación interna del cliente."
    ],
    "answer": 1,
    "exp": "La vigencia protege al proveedor frente a variaciones de costo y disponibilidad, y ordena la toma de decisiones."
  },
  {
    "id": "bid-126",
    "module": "bid",
    "topic": "Términos comerciales",
    "q": "¿Qué sucede típicamente cuando vence la vigencia de una propuesta?",
    "options": [
      "La oferta debe revalidarse: precios, disponibilidad y condiciones se revisan antes de reemitirla.",
      "El contrato queda roto automáticamente.",
      "El cliente puede exigir el precio anterior sin límite de tiempo.",
      "Nada; la oferta sigue vinculante para siempre."
    ],
    "answer": 0,
    "exp": "Vencida la vigencia, el compromiso cesa y corresponde verificar nuevamente los supuestos de precio y entrega."
  },
  {
    "id": "bid-127",
    "module": "bid",
    "topic": "Términos comerciales",
    "q": "¿Qué forma de pago se ajusta mejor a un proyecto por fases?",
    "options": [
      "Pago total anticipado antes de iniciar.",
      "Pago mensual fijo sin relación con el avance.",
      "Pago ligado a hitos de aceptación: anticipo, entregas parciales y retención final.",
      "Pago único al cierre del año fiscal del cliente."
    ],
    "answer": 2,
    "exp": "Los pagos por hito alinean el flujo de caja con el avance y dan al cliente puntos de verificación."
  },
  {
    "id": "bid-128",
    "module": "bid",
    "topic": "Términos comerciales",
    "q": "¿Qué busca una retención o holdback en el pago final?",
    "options": [
      "Aumentar el margen de ganancia del proveedor.",
      "Cubrir los impuestos de la operación.",
      "Financiar al cliente durante la ejecución del proyecto.",
      "Reservar una parte del pago hasta la aceptación de los últimos entregables o la estabilización."
    ],
    "answer": 3,
    "exp": "La retención incentiva el cierre ordenado y otorga al cliente una garantía de cumplimiento final."
  },
  {
    "id": "bid-129",
    "module": "bid",
    "topic": "Términos comerciales",
    "q": "¿Cómo debe presentarse la garantía en la propuesta?",
    "options": [
      "Como una promesa verbal del ejecutivo de cuenta.",
      "Con alcance, duración, exclusiones y el proceso de reclamo claramente especificados.",
      "Como una cláusula genérica sin detalle operativo.",
      "Solo si el cliente la solicita en la negociación final."
    ],
    "answer": 1,
    "exp": "Una garantía explícita evita expectativas dispares y es argumento de valor cuando está bien delimitada."
  },
  {
    "id": "bid-130",
    "module": "bid",
    "topic": "Términos comerciales",
    "q": "¿Qué implica aceptar una cláusula de penalidad por incumplimiento de plazo?",
    "options": [
      "Que el proveedor acepta un descuento o una indemnización fijada si no cumple lo comprometido, por lo que el plazo debe ser realista.",
      "Nada; es un texto de estilo sin consecuencias.",
      "Que el cliente puede rescindir el contrato en cualquier momento sin causa.",
      "Que el precio baja automáticamente cada semana de retraso, sin tope."
    ],
    "answer": 0,
    "exp": "La penalidad traslada el incumplimiento a un costo concreto; por eso los plazos comprometidos deben basarse en estimaciones honestas."
  },
  {
    "id": "bid-131",
    "module": "bid",
    "topic": "Términos comerciales",
    "q": "¿Por qué conviene explicitar las condiciones de renovación del soporte en la oferta?",
    "options": [
      "Para generar ingresos recurrentes de forma oculta.",
      "Para evitar tener que volver a hablar con el cliente en el futuro.",
      "Porque tras el periodo inicial cambian precios, niveles de servicio y obligaciones de ambas partes.",
      "Porque la renovación es automática e irrenunciable en todos los casos."
    ],
    "answer": 2,
    "exp": "Transparentar la renovación evita sorpresas de costo y permite al cliente planificar el gasto recurrente."
  },
  {
    "id": "bid-132",
    "module": "bid",
    "topic": "Términos comerciales",
    "q": "En una venta con distribuidor o integrador, ¿qué debe quedar claro en la propuesta?",
    "options": [
      "Nada; el canal es un asunto interno del proveedor.",
      "Únicamente el precio final para el cliente.",
      "Que el canal asume todos los riesgos sin registro alguno.",
      "Quién es el garante contractual frente al cliente, el alcance de cada parte y los canales de soporte."
    ],
    "answer": 3,
    "exp": "Con intermediarios, las responsabilidades deben estar delimitadas para no generar ambigüedad en reclamos o en el nivel de servicio."
  },
  {
    "id": "bid-133",
    "module": "bid",
    "topic": "Términos comerciales",
    "q": "¿Qué cuidado requiere declarar la moneda y el tipo de cambio en una oferta internacional?",
    "options": [
      "Fijar el tipo de cambio más favorable para el proveedor.",
      "Declarar la moneda de precios, el tipo de cambio de referencia y qué parte asume la variación durante la vigencia.",
      "Omitir la moneda para evitar discusiones posteriores.",
      "Emitir la oferta en la moneda del competidor."
    ],
    "answer": 1,
    "exp": "Sin regla de cambio explícita, la variación monetaria erosiona el margen o genera conflicto al momento de facturar."
  },
  {
    "id": "bid-134",
    "module": "bid",
    "topic": "Términos comerciales",
    "q": "¿Cuál es un ejemplo habitual de condición suspensiva en la firma de una propuesta?",
    "options": [
      "Que la obligación queda condicionada a un evento, como la aprobación presupuestaria o la emisión de la orden de compra.",
      "La reducción obligatoria del precio después de la firma.",
      "La caducidad automática de la garantía del producto.",
      "El cambio unilateral de alcance por parte del cliente."
    ],
    "answer": 0,
    "exp": "Las condiciones suspensivas protegen a ambas partes cuando la operación depende de un acto pendiente de aprobación."
  },
  {
    "id": "bid-135",
    "module": "bid",
    "topic": "Arquitectura de solución",
    "q": "¿Cómo presentas la evolución de la arquitectura cuando el cliente tendrá una migración por etapas sin interrumpir la operación?",
    "options": [
      "Un único diagrama del estado final, sin detalle de fases.",
      "Describir la migración únicamente en el anexo contractual.",
      "Diagramas por etapa, con estado actual, transiciones y estado objetivo, más criterios de cutover y reversión.",
      "Indicar que la migración es responsabilidad exclusiva del cliente."
    ],
    "answer": 2,
    "exp": "Las transiciones por etapas requieren visibilidad de cada estado y sus criterios de salida para no interrumpir la operación."
  },
  {
    "id": "bid-136",
    "module": "bid",
    "topic": "Arquitectura de solución",
    "q": "¿Cómo debe relacionarse la arquitectura propuesta con los estándares y normas internas del cliente?",
    "options": [
      "Mapear la solución contra dichos estándares y documentar las desviaciones con su justificación.",
      "Ignorarlos para proponer la arquitectura óptima del proveedor.",
      "Sustituirlos por las prácticas internas del proveedor sin consulta alguna.",
      "Mencionarlos solo en la carta de presentación."
    ],
    "answer": 0,
    "exp": "El mapeo demuestra el cumplimiento y hace explícitas las excepciones, que el comité debe aprobar de forma consciente."
  },
  {
    "id": "bid-137",
    "module": "bid",
    "topic": "Arquitectura de solución",
    "q": "Cuando la propuesta compite contra otras, ¿qué hace técnicamente evaluables los diagramas adjuntos?",
    "options": [
      "El tamaño de la letra y los colores corporativos utilizados.",
      "Que contengan todos los modelos del catálogo del fabricante.",
      "Que no incluyan anotaciones para no confundir al lector.",
      "Que permitan verificar supuestos, interfaces, capacidades y puntos de integración con el entorno actual."
    ],
    "answer": 3,
    "exp": "En concurrencia, los diagramas funcionan como evidencia verificable de la solidez de la solución, no como decoración."
  },
  {
    "id": "bid-138",
    "module": "bid",
    "topic": "Alcance y dependencias",
    "q": "El cliente da por incluido un entregable que no aparece en el alcance contratado. ¿Cómo se gestiona?",
    "options": [
      "Ejecutarlo sin costo para evitar el conflicto.",
      "Verificar el texto del alcance, aclararlo por escrito y, si procede, cotizarlo como cambio.",
      "Ignorarlo hasta que llegue la reclamación formal.",
      "Trasladarlo al equipo de ejecución para que lo resuelva sin registro."
    ],
    "answer": 1,
    "exp": "La clarificación documentada y la formalización del cambio protegen el margen y preservan la relación con el cliente."
  },
  {
    "id": "bid-139",
    "module": "bid",
    "topic": "Alcance y dependencias",
    "q": "¿Qué significa acotar el alcance hasta un punto de integración concreto definido con el cliente?",
    "options": [
      "Que las responsabilidades de cada parte quedan delimitadas en una interfaz concreta y verificable.",
      "Que el proveedor no responde por nada de lo que ocurra después.",
      "Que el proyecto termina obligatoriamente en esa fecha.",
      "Que el precio se reduce automáticamente por ese límite."
    ],
    "answer": 0,
    "exp": "Los puntos de integración delimitan obligaciones de forma objetiva y evitan discusiones sobre quién resuelve cada falla."
  },
  {
    "id": "bid-140",
    "module": "bid",
    "topic": "Alcance y dependencias",
    "q": "¿Cómo afecta al alcance trabajar sobre una tecnología que el cliente adoptará recién en el futuro?",
    "options": [
      "Ninguno; es un detalle de calendario sin efecto en la oferta.",
      "Impide incluir la tecnología en la propuesta hasta que exista.",
      "Introduce una dependencia temporal que debe registrarse como supuesto con impacto en plan y precio.",
      "Obliga a eliminar los riesgos asociados al alcance."
    ],
    "answer": 2,
    "exp": "Las adopciones futuras generan secuencia y supuestos: declararlos evita que el plan asuma una disponibilidad inexistente."
  },
  {
    "id": "bid-141",
    "module": "bid",
    "topic": "Plan de implementación",
    "q": "¿Qué es la ruta crítica y por qué se destaca en un cronograma de propuesta?",
    "options": [
      "La secuencia de tareas con menor costo estimado.",
      "La lista de tareas opcionales que pueden aplazarse sin consecuencias.",
      "El orden en que se facturan los servicios del proyecto.",
      "El camino de tareas que determina la duración mínima; su retraso retrasa el conjunto del proyecto."
    ],
    "answer": 3,
    "exp": "La ruta crítica define la fecha realista de entrega y orienta dónde concentrar la gestión y los recursos."
  },
  {
    "id": "bid-142",
    "module": "bid",
    "topic": "Plan de implementación",
    "q": "El cliente tiene recursos internos limitados durante la ventana de despliegue. ¿Qué propones?",
    "options": [
      "Asumir que estarán disponibles en todo momento.",
      "Definir roles mínimos, fechas y consecuencias del no cumplimiento como dependencia del cliente.",
      "Postergar el proyecto indefinidamente hasta que haya disponibilidad.",
      "Asignar personal propio a las tareas del cliente sin costo ni registro."
    ],
    "answer": 1,
    "exp": "Las limitaciones de recursos del cliente se convierten en dependencias explícitas con impacto medible en el cronograma."
  },
  {
    "id": "bid-143",
    "module": "bid",
    "topic": "Gestión de riesgos",
    "q": "¿Cómo se documenta correctamente el riesgo de expansión no planificada del alcance en la oferta?",
    "options": [
      "Establecer que toda ampliación pasa por una solicitud de cambio, con impacto estimado y aprobador definido.",
      "No documentarlo porque es un asunto interno del equipo de proyecto.",
      "Aumentar el precio base sin explicación para cubrir la posible expansión.",
      "Añadir tareas extra de reserva sin informar al cliente."
    ],
    "answer": 0,
    "exp": "El control de cambios es la barrera contra la expansión no planificada y da transparencia al alcance."
  },
  {
    "id": "bid-144",
    "module": "bid",
    "topic": "Gestión de riesgos",
    "q": "¿Qué es una oportunidad identificada en el contexto de la gestión de riesgos de una oferta?",
    "options": [
      "Un descuento permanente que se puede aplicar al precio.",
      "Un error de estimación del competidor en su propuesta.",
      "Una condición favorable que, de aprovecharse, mejora plazo, alcance o margen, como coordinar ventanas de cambio.",
      "Un sobrecosto ya asumido dentro del precio final."
    ],
    "answer": 2,
    "exp": "La gestión de riesgos también captura oportunidades: se documentan para no perder beneficios por falta de decisión."
  },
  {
    "id": "bid-145",
    "module": "bid",
    "topic": "Evaluación de ofertas",
    "q": "En una licitación con criterio de mejor relación costo-beneficio, ¿cómo debes presentar el valor?",
    "options": [
      "Presentar únicamente el precio más bajo en la portada.",
      "Omitir los costos recurrentes para reducir el total visible.",
      "Incluir el mayor número de ítems sin costear.",
      "Relacionar la inversión con beneficios e indicadores medibles, no solo con la lista de precios."
    ],
    "answer": 3,
    "exp": "En mejor valor el puntaje premia la relación entre costo y resultados; una oferta barata sin beneficios evidentes pierde."
  },
  {
    "id": "bid-146",
    "module": "bid",
    "topic": "Evaluación de ofertas",
    "q": "¿Qué es un criterio de desempate en la evaluación de ofertas?",
    "options": [
      "Una ronda de negociación posterior de precios.",
      "Una regla previa que decide entre ofertas equivalentes en los criterios principales.",
      "Un castigo para el oferente que entrega la documentación tarde.",
      "Un descuento por volumen aplicado por el evaluador."
    ],
    "answer": 1,
    "exp": "Los desempates se conocen de antemano y evitan arbitrariedades o renegociaciones posteriores a la apertura."
  },
  {
    "id": "bid-147",
    "module": "bid",
    "topic": "Evaluación de ofertas",
    "q": "¿Por qué es arriesgado presentar una oferta técnicamente sobrecualificada frente a lo pedido?",
    "options": [
      "Puede descuadrar frente a los requisitos y el presupuesto, y encarecer la solución sin valor percibido.",
      "Porque siempre resulta ser la oferta más cara del proceso.",
      "Porque los evaluadores prohíben las soluciones técnicamente avanzadas.",
      "Porque invalida automáticamente la matriz de cumplimiento."
    ],
    "answer": 0,
    "exp": "Sobredimensionar introduce complejidad y costo que el comprador no premia; el ajuste al requisito es señal de madurez."
  },
  {
    "id": "bid-148",
    "module": "bid",
    "topic": "Evaluación de ofertas",
    "q": "En una evaluación ponderada, ¿qué refleja el peso de un criterio?",
    "options": [
      "El tamaño de la fuente con que se imprime el criterio.",
      "El número de evaluadores asignados a ese criterio.",
      "La importancia relativa que otorga al criterio frente a los demás en la decisión.",
      "El porcentaje de descuento aplicable a esa partida."
    ],
    "answer": 2,
    "exp": "Los pesos reflejan la prioridad de decisión y guían dónde debe concentrarse el esfuerzo de la oferta."
  },
  {
    "id": "bid-149",
    "module": "bid",
    "topic": "Evaluación de ofertas",
    "q": "Si un requisito es deseable pero no excluyente, ¿cómo suele tratarse en la puntuación?",
    "options": [
      "Se ignora por completo durante la evaluación.",
      "Se trata como obligación contractual sin precio asociado.",
      "Provoca el rechazo automático de la oferta.",
      "Se puntúa como criterio de diferenciación o puntos adicionales, no como filtro de admisión."
    ],
    "answer": 3,
    "exp": "Los requisitos deseables premian el valor agregado; confundirlos con excluyentes puede descartar u ofertar mal."
  },
  {
    "id": "bid-150",
    "module": "bid",
    "topic": "Evaluación de ofertas",
    "q": "¿Qué debe hacer el equipo de oferta ante criterios de evaluación ambiguos en un pliego?",
    "options": [
      "Interpretarlos a favor propio sin consultar a nadie.",
      "Solicitar aclaraciones por escrito y registrar los supuestos de interpretación en la propuesta.",
      "Presentar dos ofertas distintas para cubrir todas las interpretaciones posibles.",
      "Excluir los criterios ambiguos de la respuesta."
    ],
    "answer": 1,
    "exp": "Las aclaraciones formales y los supuestos documentados reducen el riesgo de pérdida por mala lectura del pliego."
  },
  {
    "id": "bid-151",
    "module": "bid",
    "topic": "Evaluación de ofertas",
    "q": "Tu matriz de cumplimiento marca un requisito como cumplimiento parcial. ¿Qué acompañamiento es correcto?",
    "options": [
      "Describir la brecha, la alternativa propuesta y su impacto en alcance, plazo o costo.",
      "Marcarlo como cumplido para evitar descuentos o penalización.",
      "Dejar la celda vacía y tratarlo solo en la reunión.",
      "Asumir que el evaluador no lo notará."
    ],
    "answer": 0,
    "exp": "El cumplimiento parcial se gestiona con transparencia y alternativa verificable; ocultarlo destruye credibilidad si se detecta."
  },
  {
    "id": "bid-152",
    "module": "bid",
    "topic": "Evaluación de ofertas",
    "q": "¿Qué papel juega la claridad de la propuesta en un proceso con múltiples oferentes?",
    "options": [
      "Ninguno; en la evaluación solo cuenta el precio final.",
      "Permite ocultar las debilidades técnicas de la solución.",
      "Reduce el riesgo de interpretación errónea por parte del comité y facilita la comparación entre ofertas.",
      "Sustituye a la prueba técnica de laboratorio."
    ],
    "answer": 2,
    "exp": "Los documentos claros disminuyen la incertidumbre del evaluador, que tiende a favorecer lo que entiende con facilidad."
  },
  {
    "id": "bid-153",
    "module": "bid",
    "topic": "Preventa consultiva",
    "q": "¿Cuál es el objetivo principal de la fase de descubrimiento en preventa?",
    "options": [
      "Cerrar la venta lo más rápido posible.",
      "Presentar el catálogo completo de productos.",
      "Fijar el precio final de la oferta.",
      "Comprender el contexto, el problema, los criterios de éxito y las restricciones del cliente."
    ],
    "answer": 3,
    "exp": "Sin descubrimiento, la propuesta se basa en supuestos y suele fallar en lo que al cliente realmente le importa."
  },
  {
    "id": "bid-154",
    "module": "bid",
    "topic": "Preventa consultiva",
    "q": "¿Qué utilidad tiene conocer el rango presupuestario estimado del cliente antes de cotizar?",
    "options": [
      "Permite fijar el precio exactamente en ese valor sin margen.",
      "Permite dimensionar opciones viables y ajustar el alcance antes de sorpresas tardías.",
      "Obliga a rebajar el margen al mínimo aceptable.",
      "No debe consultarse porque resulta indiscreto preguntarlo."
    ],
    "answer": 1,
    "exp": "Conocer el rango presupuestario orienta el diseño de alternativas y evita ofertas fuera de la posibilidad real del cliente."
  },
  {
    "id": "bid-155",
    "module": "bid",
    "topic": "Preventa consultiva",
    "q": "En venta consultiva, ¿qué tipo de preguntas aportan más valor en la primera reunión?",
    "options": [
      "Preguntas abiertas sobre el impacto del problema, las prioridades y las consecuencias de no actuar.",
      "Preguntas cerradas de precio para ubicar el presupuesto enseguida.",
      "Preguntas que solo confirman lo que ya se sabe del producto.",
      "Preguntas enfocadas en identificar al competidor directo."
    ],
    "answer": 0,
    "exp": "Las preguntas abiertas revelan valor y urgencia, que son la base de un argumento de venta consultiva."
  },
  {
    "id": "bid-156",
    "module": "bid",
    "topic": "Preventa consultiva",
    "q": "¿Cómo se construye confianza técnica antes de presentar la propuesta formal?",
    "options": [
      "Con promesas de descuento anticipado.",
      "Con un documento de garantía más extenso que el de los demás.",
      "Con diagnóstico demostrable, pruebas de concepto y cumplimiento verificable de los compromisos previos.",
      "Con presión basada en la vigencia corta de la oferta."
    ],
    "answer": 2,
    "exp": "La confianza técnica se gana con evidencia y consistencia, no con descuentos ni con urgencia."
  },
  {
    "id": "bid-157",
    "module": "bid",
    "topic": "Preventa consultiva",
    "q": "¿Qué significa vender el valor frente a vender el precio?",
    "options": [
      "Explicar el costo por hora del equipo involucrado.",
      "Ofrecer el precio más bajo disponible en el mercado.",
      "Incluir el mayor número de ítems posibles en la oferta.",
      "Relacionar la inversión con los resultados obtenidos y los riesgos evitados por el cliente."
    ],
    "answer": 3,
    "exp": "Vender valor desplaza la conversación del costo al beneficio, donde la comparación no se reduce a quién cobra menos."
  },
  {
    "id": "bid-158",
    "module": "bid",
    "topic": "Preventa consultiva",
    "q": "Un cliente pide cotizar una solución que no resuelve su problema real. ¿Cuál es la respuesta consultiva?",
    "options": [
      "Cotizar exactamente lo que pide sin comentario alguno.",
      "Cuestionar el enfoque, evidenciar el problema de fondo y proponer alternativas con su impacto.",
      "Rechazar al cliente por no tener perfil técnico.",
      "Aceptar sin más y agregar una nota al pie del documento."
    ],
    "answer": 1,
    "exp": "El rol consultivo implica decir lo que el cliente necesita oír, sustentado en análisis, antes de vender lo que pide."
  },
  {
    "id": "bid-159",
    "module": "bid",
    "topic": "Preventa consultiva",
    "q": "¿Para qué sirve un caso de negocio en la preventa?",
    "options": [
      "Justificar la inversión con beneficios, riesgos y comparación de alternativas.",
      "Reemplazar a la propuesta técnica en el proceso de compra.",
      "Calcular los impuestos aplicables a la operación.",
      "Reservar inventario con el fabricante antes de la firma."
    ],
    "answer": 0,
    "exp": "El caso de negocio traduce la solución a lenguaje financiero para que el decisor apruebe la inversión."
  },
  {
    "id": "bid-160",
    "module": "bid",
    "topic": "Preventa consultiva",
    "q": "¿Por qué conviene identificar al decisor económico tempranamente?",
    "options": [
      "Para saltarse al patrocinador técnico en la conversación.",
      "Para enviarle directamente el precio final sin contexto técnico.",
      "Porque su validación condiciona la aprobación del presupuesto y el cierre de la oportunidad.",
      "Porque solo él lee el documento completo de la propuesta."
    ],
    "answer": 2,
    "exp": "Identificar al decisor económico temprano permite construir el caso de negocio con quien realmente aprueba la compra."
  },
  {
    "id": "bid-161",
    "module": "bid",
    "topic": "Stakeholders del cliente",
    "q": "¿Cómo se mapea a los stakeholders del cliente en una oportunidad compleja?",
    "options": [
      "Listando únicamente al contacto que pidió la cotización.",
      "Por el nivel salarial de cada persona involucrada.",
      "Asumiendo que todos los involucrados apoyan la compra.",
      "Por influencia e interés en la decisión, registrando postura, mensajes clave y responsable de relación."
    ],
    "answer": 3,
    "exp": "El mapeo por influencia e interés orienta el esfuerzo de comunicación hacia quienes mueven la decisión."
  },
  {
    "id": "bid-162",
    "module": "bid",
    "topic": "Stakeholders del cliente",
    "q": "Un stakeholder técnico se opone a la solución propuesta. ¿Qué haces?",
    "options": [
      "Ignorar su objeción hasta después de la firma.",
      "Entender su criterio, incorporar el feedback técnico y buscar un compromiso verificable.",
      "Escalar solo al director financiero para imponer la decisión.",
      "Retirar la propuesta del proceso de compra."
    ],
    "answer": 1,
    "exp": "Incorporar al opositor técnico reduce el riesgo de veto y mejora la solución con su experiencia."
  },
  {
    "id": "bid-163",
    "module": "bid",
    "topic": "Stakeholders del cliente",
    "q": "¿Quién es el campeón o champion del lado del cliente?",
    "options": [
      "La persona con influencia que impulsa internamente la solución propuesta ante su organización.",
      "El evaluador más crítico del comité de compra.",
      "El abogado que revisa las cláusulas del contrato.",
      "El proveedor alternativo que participa en la licitación."
    ],
    "answer": 0,
    "exp": "El campeón internaliza el caso de negocio y sostiene la propuesta cuando el equipo de venta no está presente."
  },
  {
    "id": "bid-164",
    "module": "bid",
    "topic": "Stakeholders del cliente",
    "q": "¿Cuál es el riesgo de depender de un único contacto en el cliente?",
    "options": [
      "Ninguno, si ese contacto tiene poder de decisión total.",
      "Duplica el costo comercial de atender la oportunidad.",
      "Sus cambios, ausencias o decisiones pueden bloquear toda la oportunidad.",
      "Obliga a reducir el precio para compensar la dependencia."
    ],
    "answer": 2,
    "exp": "Depender de un solo contacto concentra el riesgo de la venta en una sola persona y en su disponibilidad."
  },
  {
    "id": "bid-165",
    "module": "bid",
    "topic": "Stakeholders del cliente",
    "q": "¿Cómo alineas las expectativas del patrocinador ejecutivo y del equipo técnico del cliente?",
    "options": [
      "Prometiendo plazos distintos a cada nivel para complacer a ambos.",
      "Comunicándote únicamente con el nivel más alto del cliente.",
      "Delegando la comunicación entre ambas partes sin intervenir.",
      "Con un mensaje único de valor traducido a cada audiencia y acuerdos compartidos de éxito."
    ],
    "answer": 3,
    "exp": "La coherencia entre audiencias evita expectativas contradictorias que luego frenan la aprobación."
  },
  {
    "id": "bid-166",
    "module": "bid",
    "topic": "Stakeholders del cliente",
    "q": "Ante múltiples áreas del cliente con prioridades conflictivas, ¿qué enfoque utilizas?",
    "options": [
      "Priorizar siempre al área de TI por tener mayor conocimiento.",
      "Explicitar los conflictos, acordar criterios de decisión y mostrar los trade-offs en la propuesta.",
      "Dejar fuera de la propuesta a las áreas en conflicto.",
      "Ampliar el alcance para contentar a todas las partes simultáneamente."
    ],
    "answer": 1,
    "exp": "Hacer visibles los trade-offs convierte la mediación en un proceso de decisión, no en una imposición."
  },
  {
    "id": "bid-167",
    "module": "bid",
    "topic": "Stakeholders del cliente",
    "q": "¿Cuál es el riesgo de no identificar al usuario final durante la preventa?",
    "options": [
      "Que la solución no se adopte o genere resistencia durante la puesta en marcha.",
      "Que el precio de la propuesta aumente automáticamente.",
      "Que la garantía del producto quede anulada.",
      "Que el proceso de evaluación se declare inválido."
    ],
    "answer": 0,
    "exp": "Quienes usan la solución pueden frenarla; incorporarlos reduce la resistencia y mejora la adopción."
  },
  {
    "id": "bid-168",
    "module": "bid",
    "topic": "Presentación ejecutiva",
    "q": "En una presentación a un comité ejecutivo, ¿qué debe ocupar los primeros minutos?",
    "options": [
      "La lista completa de especificaciones técnicas de cada componente.",
      "El contexto del negocio, el problema a resolver y el resultado esperado.",
      "El desglose de horas por recurso del proyecto.",
      "La biografía completa del equipo asignado."
    ],
    "answer": 1,
    "exp": "Los ejecutivos deciden sobre contexto y resultado; el detalle técnico llega después, si hay tiempo."
  },
  {
    "id": "bid-169",
    "module": "bid",
    "topic": "Presentación ejecutiva",
    "q": "¿Cómo adaptas una propuesta técnica a una audiencia ejecutiva?",
    "options": [
      "Reducir el documento a una página sin datos cuantitativos.",
      "Eliminar todo dato numérico para simplificar la lectura.",
      "Entregar el mismo documento técnico sin ningún cambio.",
      "Traducir lo técnico a impacto en negocio, riesgos y decisiones, dejando el detalle en anexos."
    ],
    "answer": 3,
    "exp": "La traducción al valor de negocio permite al decisor priorizar sin saturarlo, conservando la evidencia disponible."
  },
  {
    "id": "bid-170",
    "module": "bid",
    "topic": "Presentación ejecutiva",
    "q": "¿Qué papel cumple el resumen ejecutivo dentro de la propuesta?",
    "options": [
      "Permitir que un decisor entienda valor, alcance y riesgos clave sin leer el documento completo.",
      "Reemplazar a la sección comercial de precios.",
      "Resumir los precios en cifras redondeadas para lectura rápida.",
      "Sustituir a la matriz de cumplimiento de requisitos."
    ],
    "answer": 0,
    "exp": "El resumen ejecutivo es la puerta de entrada: si no convence, el resto del documento rara vez se llega a leer."
  },
  {
    "id": "bid-171",
    "module": "bid",
    "topic": "Presentación ejecutiva",
    "q": "Al comparar alternativas, ¿qué dato suele resultar más convincente para un ejecutivo?",
    "options": [
      "El modelo exacto de cada componente de hardware.",
      "El número de certificaciones que posee el equipo de proyecto.",
      "La relación entre la inversión, el beneficio esperado y el riesgo asumido en el tiempo.",
      "La longitud total del contrato propuesto."
    ],
    "answer": 2,
    "exp": "El comité evalúa retorno y riesgo; las especificaciones solo sostienen esa conclusión cuando están al servicio del negocio."
  },
  {
    "id": "bid-172",
    "module": "bid",
    "topic": "Presentación ejecutiva",
    "q": "¿Cómo manejas una objeción de precio durante la presentación ejecutiva?",
    "options": [
      "Conceder un descuento inmediato para cerrar en esa misma reunión.",
      "Reconectar el precio con el valor, el alcance y el costo de no actuar, presentando alternativas.",
      "Retirar ítems del alcance sin informarlo al cliente.",
      "Comparar el precio con el de la competencia sin respaldo documental."
    ],
    "answer": 1,
    "exp": "La objeción de precio casi siempre es una objeción de valor demostrado; la respuesta es reforzar beneficios, no regalar margen."
  },
  {
    "id": "bid-173",
    "module": "bid",
    "topic": "Presentación ejecutiva",
    "q": "¿Por qué conviene cerrar la presentación con próximos pasos concretos?",
    "options": [
      "Para convertir el interés en compromiso con acciones, responsables y fechas.",
      "Porque el protocolo corporativo así lo exige en toda reunión.",
      "Para extender la presentación con material técnico adicional.",
      "Para incluir el detalle de precios de última hora."
    ],
    "answer": 0,
    "exp": "Cerrar con pasos concretos evita que la propuesta quede como una buena idea sin ruta de decisión."
  },
  {
    "id": "bid-174",
    "module": "bid",
    "topic": "Presentación ejecutiva",
    "q": "Ante una audiencia mixta de negocio y tecnología, ¿qué estructura funciona mejor?",
    "options": [
      "Solo contenido técnico para impresionar al auditor.",
      "Contenido comercial exclusivamente, sin respaldo técnico.",
      "Documentos separados para negocio y técnica, sin relación entre ellos.",
      "Primero valor de negocio y decisiones clave, luego evidencia técnica, con el detalle en anexos."
    ],
    "answer": 3,
    "exp": "La estructura en embudo atiende a cada audiencia en su orden de interés sin contradecirse entre sí."
  },
  {
    "id": "bid-175",
    "module": "bid",
    "topic": "Servicios y horas",
    "q": "¿Qué es una bolsa de horas en una propuesta de servicios?",
    "options": [
      "Un cupo de horas precontratado que se consume según necesidad, con reglas de uso y vigencia.",
      "Una promesa de horas adicionales gratuitas sin límite.",
      "El máximo de personas que pueden atender un caso.",
      "El horario diario de atención del soporte."
    ],
    "answer": 0,
    "exp": "La bolsa da previsibilidad de costos al cliente y flexibilidad de uso al proveedor, dentro de condiciones definidas."
  },
  {
    "id": "bid-176",
    "module": "bid",
    "topic": "Servicios y horas",
    "q": "¿Por qué conviene diferenciar roles como consultor, ingeniero o project manager en el desglose de servicios?",
    "options": [
      "Para aumentar el número de filas de la tabla de servicios.",
      "Porque el cliente exige un rol distinto por cada persona asignada.",
      "Porque cada rol tiene actividades y un nivel de tarifa distintos, lo que hace evaluable la propuesta.",
      "Para justificar horas duplicadas entre especialistas."
    ],
    "answer": 2,
    "exp": "Desglosar por roles permite al comprador comparar qué hace cada perfil y con qué costo, en vez de una cifra opaca."
  },
  {
    "id": "bid-177",
    "module": "bid",
    "topic": "Servicios y horas",
    "q": "¿Qué cuidado requiere estimar horas durante la fase de preventa?",
    "options": [
      "Redondear siempre hacia arriba sin dejar constancia del criterio.",
      "Documentar los supuestos de la estimación y los márgenes de contingencia para poder revisarlos ante cambios.",
      "Reutilizar la cifra de otro proyecto sin revisar el contexto.",
      "No estimar horas y fijar un precio fijo sin base de cálculo."
    ],
    "answer": 1,
    "exp": "Una estimación trazable se defiende y se ajusta; las cifras sin supuestos no resisten la negociación ni el control de cambios."
  },
  {
    "id": "bid-178",
    "module": "bid",
    "topic": "Servicios y horas",
    "q": "En una bolsa de horas, ¿qué debe definirse además del volumen contratado?",
    "options": [
      "Solo el precio total del paquete.",
      "El nombre de la persona que atenderá siempre los casos.",
      "Nada más; los detalles se acuerdan durante la ejecución.",
      "Vigencia, roles, canal de consumo, prioridades de atención y condiciones de renovación."
    ],
    "answer": 3,
    "exp": "Sin reglas de uso, la bolsa genera disputas sobre saldo, prioridades y qué cuenta como consumo."
  },
  {
    "id": "bid-179",
    "module": "bid",
    "topic": "Servicios y horas",
    "q": "¿Cómo se gestiona el consumo de una bolsa de horas durante la ejecución?",
    "options": [
      "Con seguimiento de horas consumidas, saldo disponible y reportes periódicos al cliente.",
      "Sin registro alguno, confiando en el uso razonable del equipo.",
      "Asumiendo que no se usará por completo y no midiendo nada.",
      "Congelando el consumo hasta la fase final del contrato."
    ],
    "answer": 0,
    "exp": "El control de consumo da transparencia, evita sorpresas de saldo y sostiene la renovación del servicio."
  },
  {
    "id": "bid-180",
    "module": "bid",
    "topic": "Servicios y horas",
    "q": "¿Qué representa incluir horas de imprevistos o gestión de riesgo en los servicios?",
    "options": [
      "Un margen oculto sin justificación para el cliente.",
      "La garantía de que no ocurrirán imprevistos en el proyecto.",
      "Reservar capacidad para atender desviaciones, con criterios de uso acordados.",
      "La eliminación de la necesidad de control de cambios."
    ],
    "answer": 2,
    "exp": "Reservar capacidad es una práctica legítima de gestión de riesgo siempre que sus reglas de uso sean visibles."
  },
  {
    "id": "bid-181",
    "module": "bid",
    "topic": "Servicios y horas",
    "q": "Si el consumo de horas supera lo estimado, ¿cuál es la gestión correcta?",
    "options": [
      "Absorber el exceso sin informar para no incomodar al cliente.",
      "Reportar el desvío, su causa y las opciones, como ampliar la bolsa o ajustar el alcance, para decisión del cliente.",
      "Dejar de atender hasta que se realice un pago adicional.",
      "Restar horas de otra fase sin dejar registro."
    ],
    "answer": 1,
    "exp": "El desvío se gestiona con datos y opciones; absorberlo en silencio destruye margen y oculta problemas de estimación."
  },
  {
    "id": "bid-182",
    "module": "bid",
    "topic": "Licencias y soporte",
    "q": "¿Qué diferencia hay entre una licencia perpetua y una de suscripción en la propuesta?",
    "options": [
      "Ninguna; solo cambia el nombre comercial de la licencia.",
      "La perpetua siempre incluye soporte vitalicio sin costo.",
      "La suscripción no requiere ninguna renovación.",
      "La perpetua otorga un derecho de uso permanente con soporte aparte; la suscripción es por periodo e incluye actualizaciones según contrato."
    ],
    "answer": 3,
    "exp": "La naturaleza del derecho de uso determina el flujo de caja y las obligaciones de mantenimiento a futuro."
  },
  {
    "id": "bid-183",
    "module": "bid",
    "topic": "Licencias y soporte",
    "q": "¿Por qué se desglosa el soporte como línea separada en la propuesta?",
    "options": [
      "Porque suele ser un cargo recurrente con nivel de servicio, alcance y renovación propios.",
      "Para inflar artificialmente el precio total de la propuesta.",
      "Porque está prohibido mostrarlo junto a la licencia.",
      "Porque solo aplica a equipos de red, no al software."
    ],
    "answer": 0,
    "exp": "Separar el soporte permite comparar coberturas y hace visible el costo recurrente que el cliente mantendrá."
  },
  {
    "id": "bid-184",
    "module": "bid",
    "topic": "Licencias y soporte",
    "q": "¿Qué debe definirse sobre las licencias para evitar sobrecostos posteriores?",
    "options": [
      "Únicamente el nombre del producto fabricante.",
      "La marca del fabricante y el año de versión.",
      "La métrica de licenciamiento, la cantidad, las condiciones de uso y el crecimiento previsto.",
      "El número de usuarios actuales, sin margen de crecimiento."
    ],
    "answer": 2,
    "exp": "Definir métrica y volumen con proyección evita recompras urgentes y sobrecostos por subdimensionamiento."
  },
  {
    "id": "bid-185",
    "module": "bid",
    "topic": "Licencias y soporte",
    "q": "¿Qué es la métrica de licenciamiento?",
    "options": [
      "El precio unitario que paga cada licencia.",
      "La unidad con la que se cuenta la licencia: por usuario, dispositivo, núcleo o instancia.",
      "El porcentaje de descuento aplicable a la compra.",
      "La fecha de caducidad del derecho de uso."
    ],
    "answer": 1,
    "exp": "La métrica define cómo escala el costo con el uso del cliente; confundirla con el precio lleva a estimaciones erróneas."
  },
  {
    "id": "bid-186",
    "module": "bid",
    "topic": "Licencias y soporte",
    "q": "En una renovación de soporte, ¿qué suele negociarse además del precio?",
    "options": [
      "Nada; la renovación es automática y no admite discusión.",
      "El cambio de proveedor del proyecto de implantación.",
      "La eliminación de los indicadores del acuerdo de nivel de servicio.",
      "Nivel de servicio, tiempos de respuesta, alcance de actualizaciones y condiciones de escalación."
    ],
    "answer": 3,
    "exp": "La renovación es el momento de renegociar cobertura y condiciones, no solo el importe de la factura."
  },
  {
    "id": "bid-187",
    "module": "bid",
    "topic": "Licencias y soporte",
    "q": "¿Cómo evitas la sobredimensionación de licencias en la propuesta?",
    "options": [
      "Dimensionar contra el alcance actual y el crecimiento previsto, con supuestos explícitos.",
      "Adquirir el máximo disponible por si acaso.",
      "Comprar licencias de otro fabricante para poder comparar.",
      "Omitir las licencias y negociarlas después de la firma."
    ],
    "answer": 0,
    "exp": "El dimensionamiento con supuestos claros evita pagar por capacidad oculta y deja margen para crecer con control."
  },
  {
    "id": "bid-188",
    "module": "bid",
    "topic": "Licencias y soporte",
    "q": "¿Qué es un entitlement o derecho de uso en licencias de fabricante?",
    "options": [
      "El contrato de exclusividad comercial con el cliente.",
      "El descuento por volumen otorgado por el fabricante.",
      "La prueba de que el cliente puede usar el software bajo los términos contratados.",
      "La clave de activación anotada en la factura."
    ],
    "answer": 2,
    "exp": "El derecho de uso es lo que los auditores del fabricante exigen verificar; su ausencia expone al cliente a sanciones."
  },
  {
    "id": "bid-189",
    "module": "bid",
    "topic": "Estructura de precios",
    "q": "¿Por qué conviene presentar opciones de precio como básica, estándar y avanzada?",
    "options": [
      "Para confundir al evaluador con demasiadas alternativas.",
      "Para permitir decisiones de alcance frente al presupuesto manteniendo la transparencia.",
      "Para inflar artificialmente el precio de referencia.",
      "Para ocultar el costo total de la inversión."
    ],
    "answer": 1,
    "exp": "Las opciones estructuran la negociación: el cliente elige un nivel sin tener que renegociar desde cero."
  },
  {
    "id": "bid-190",
    "module": "bid",
    "topic": "Estructura de precios",
    "q": "¿Cómo debes presentar en la propuesta la inversión inicial frente a los costos recurrentes?",
    "options": [
      "Mezclándolos en una sola cifra para simplificar la lectura.",
      "Omitiendo los costos recurrentes para que el total parezca menor.",
      "Presentando solo la inversión inicial, que es la que aprueba el presupuesto.",
      "Mostrándolos por separado y también en su total a lo largo del periodo considerado."
    ],
    "answer": 3,
    "exp": "Separar inversión y gasto recurrente permite al decisor ver el impacto completo sin sorpresas posteriores."
  },
  {
    "id": "bid-191",
    "module": "bid",
    "topic": "Estructura de precios",
    "q": "¿Qué cuidado debe tener el uso de descuentos en una propuesta?",
    "options": [
      "Que respeten las políticas de aprobación y no erosionen la capacidad de sostener el servicio.",
      "Aplicarlos siempre a tope para ganar la licitación.",
      "Ser siempre el descuento más alto del mercado.",
      "No existir, porque el precio de la propuesta es fijo."
    ],
    "answer": 0,
    "exp": "El descuento es una decisión de negocio con límites: aplicado sin control compromete la entrega y la relación posterior."
  },
  {
    "id": "bid-192",
    "module": "bid",
    "topic": "Estructura de precios",
    "q": "¿Cuándo conviene que la comparación de alternativas use un horizonte de análisis explícito?",
    "options": [
      "Nunca; basta comparar los precios vigentes de hoy.",
      "Solo cuando el horizonte resulte favorable al proveedor.",
      "Siempre que existan costos recurrentes o renovaciones, porque el horizonte hace comparable la comparación.",
      "Únicamente si lo solicita el auditor externo."
    ],
    "answer": 2,
    "exp": "Sin horizonte, comparar alternativas con perfiles de gasto distintos conduce a conclusiones equivocadas."
  },
  {
    "id": "bid-193",
    "module": "bid",
    "topic": "Estructura de precios",
    "q": "Ante un cliente que exige desglosar el margen de ganancia, ¿qué respuesta es correcta?",
    "options": [
      "Revelar el margen exacto de cada línea del presupuesto.",
      "Explicar el valor entregado y los elementos de costo que afectan al alcance, manteniendo los márgenes como información propia.",
      "Negar cualquier información y retirarse de la negociación.",
      "Poner el margen en cero para satisfacer la exigencia."
    ],
    "answer": 1,
    "exp": "La transparencia se enfoca en lo que el cliente puede verificar; los márgenes internos no son información contractual."
  },
  {
    "id": "bid-194",
    "module": "bid",
    "topic": "SLA y penalidades",
    "q": "En un acuerdo de nivel de servicio, ¿qué son los service credits o créditos de servicio?",
    "options": [
      "Compensaciones automáticas, normalmente descuentos parciales, que aplican cuando se incumple el nivel de servicio acordado.",
      "Un descuento permanente del precio base del contrato.",
      "Un bono que se canjea al renovar el servicio.",
      "Un cargo adicional por superar los indicadores pactados."
    ],
    "answer": 0,
    "exp": "Los créditos de servicio son el remedio económico estándar del SLA: compensan, pero no sustituyen la obligación de mejorar."
  },
  {
    "id": "bid-195",
    "module": "bid",
    "topic": "SLA y penalidades",
    "q": "¿Por qué es problemático aceptar una penalidad ilimitada por incumplimiento de SLA?",
    "options": [
      "Porque los acuerdos de nivel de servicio rara vez se cumplen.",
      "Porque anula automáticamente el contrato en cuanto hay un incumplimiento.",
      "Porque impide definir indicadores dentro del acuerdo.",
      "Porque traslada un riesgo desproporcionado al proveedor y encarece o impide asumir el compromiso."
    ],
    "answer": 3,
    "exp": "Las penalidades ilimitadas distorsionan la oferta y, en la práctica, nadie asume un riesgo sin techo."
  },
  {
    "id": "bid-196",
    "module": "bid",
    "topic": "SLA y penalidades",
    "q": "¿Qué debe quedar definido sobre las exclusiones de medición en un SLA?",
    "options": [
      "Ninguna; todo el tiempo debe contabilizarse siempre.",
      "Qué eventos no cuentan en el cómputo, como mantenimiento programado, fuerza mayor o acciones del cliente.",
      "Solo la cantidad de incidentes graves registrados al mes.",
      "La tarifa horaria que se aplica al soporte."
    ],
    "answer": 1,
    "exp": "Sin exclusiones definidas, cualquier evento dispara penalidades por causas ajenas al proveedor y el SLA se vuelve ingobernable."
  },
  {
    "id": "bid-197",
    "module": "bid",
    "topic": "SLA y penalidades",
    "q": "¿Quién debe ser responsable de reportar el cumplimiento del SLA?",
    "options": [
      "El cliente, sin que el proveedor entregue evidencias.",
      "El fabricante del producto, con independencia del contrato.",
      "El proveedor, con datos y evidencias verificables, con la frecuencia y el canal acordados.",
      "Nadie; el cumplimiento se evalúa solo al final del contrato."
    ],
    "answer": 2,
    "exp": "La rendición de cuentas con evidencia es lo que hace auditable el acuerdo y sostiene la confianza."
  },
  {
    "id": "bid-198",
    "module": "bid",
    "topic": "SLA y penalidades",
    "q": "¿Cómo se relaciona el SLA con el plan de escalación?",
    "options": [
      "El plan define rutas y tiempos de respuesta por severidad que materializan el compromiso del SLA.",
      "No se relacionan; son documentos independientes entre sí.",
      "El plan reemplaza al SLA por completo en la operación.",
      "El SLA solo aplica al contrato y no tiene efecto operativo."
    ],
    "answer": 0,
    "exp": "Escalamiento y nivel de servicio son caras del mismo compromiso: uno define cómo se reacciona, el otro cuánto tarda."
  },
  {
    "id": "bid-199",
    "module": "bid",
    "topic": "SLA y penalidades",
    "q": "¿Qué jerarquía de remedios es habitual cuando un SLA se incumple de forma repetida?",
    "options": [
      "La rescisión inmediata del contrato como primera medida.",
      "El aumento automático del precio de los servicios.",
      "La suspensión total de pagos por parte del cliente.",
      "El escalamiento de gestión, un plan de mejora y, si persiste, compensaciones o terminación según lo pactado."
    ],
    "answer": 3,
    "exp": "Las jerarquías de remedio escalan proporcionalmente: primero corregir, luego compensar y solo al final terminar."
  },
  {
    "id": "bid-200",
    "module": "bid",
    "topic": "SLA y penalidades",
    "q": "¿Por qué debe alinearse el SLA con las ventanas de mantenimiento y el horario de cobertura?",
    "options": [
      "Para reducir el número de indicadores del acuerdo.",
      "Porque los tiempos de respuesta se computan dentro de los periodos contratados de cobertura.",
      "Porque es un requisito estético de redacción del contrato.",
      "Para eliminar cualquier posibilidad de penalidad."
    ],
    "answer": 1,
    "exp": "Si la cobertura y las ventanas no se alinean, los cómputos de tiempo de respuesta generan incumplimientos ficticios."
  },
  {
    "id": "cloud-101",
    "module": "cloud",
    "topic": "Modelos de servicio",
    "q": "Un equipo necesita desplegar una aplicación web sin administrar sistemas operativos ni balanceadores, pero conserva el control sobre su código y sus bibliotecas. ¿Qué modelo de servicio en la nube encaja mejor con este requisito?",
    "options": [
      "IaaS, porque el cliente administra la máquina virtual completa",
      "SaaS, porque el cliente consume una aplicación terminada sin personalizarla",
      "PaaS, porque el proveedor gestiona la plataforma subyacente y el cliente solo aporta la aplicación y los datos",
      "Físico en alquiler, porque solo se alquila hardware sin software"
    ],
    "answer": 2,
    "exp": "En PaaS el proveedor gestiona runtime, parches y balanceo mientras el cliente conserva el código y los datos; en IaaS el cliente administraría el sistema operativo."
  },
  {
    "id": "cloud-102",
    "module": "cloud",
    "topic": "Responsabilidad compartida",
    "q": "La organización consume una base de datos administrada (PaaS) en la nube. ¿Quién es responsable de aplicar los parches de seguridad al motor de la base de datos?",
    "options": [
      "El cliente, porque los datos siempre le pertenecen",
      "El proveedor de nube, porque en un servicio administrado el proveedor gestiona el motor y la plataforma subyacente",
      "El equipo de auditoría interna, porque supervisa los controles",
      "Ambos aplican el mismo parche en paralelo"
    ],
    "answer": 1,
    "exp": "En los servicios administrados el parcheo del motor corresponde al proveedor; el cliente sigue responsable de sus datos, esquemas y accesos."
  },
  {
    "id": "cloud-103",
    "module": "cloud",
    "topic": "Regiones y zonas",
    "q": "Una regulación exige que los datos personales de clientes permanezcan físicamente en el país donde se generaron. ¿Qué decisión de despliegue cumple con este requisito?",
    "options": [
      "Desplegar en cualquier región con una zona de disponibilidad adicional",
      "Elegir una región ubicada en ese país y alojar allí los datos",
      "Replicar a otra región y cifrar las copias para saltar la restricción",
      "Usar múltiples regiones para que la residencia sea difusa"
    ],
    "answer": 1,
    "exp": "La residencia de datos se cumple eligiendo una región del proveedor dentro de la jurisdicción requerida; las zonas de disponibilidad no cambian el país de la región."
  },
  {
    "id": "cloud-104",
    "module": "cloud",
    "topic": "Alta disponibilidad",
    "q": "El equipo detecta que las sesiones de usuario se pierden cada vez que una instancia se reinicia. ¿Qué cambio de diseño evita este problema en una aplicación que escala horizontalmente?",
    "options": [
      "Activar sesiones pegajosas (sticky sessions) para fijar al usuario a una sola instancia",
      "Aumentar el tamaño de la instancia para que aguante más sesiones en memoria",
      "Externalizar el estado (sesiones) a un almacén gestionado compartido para que cualquier instancia pueda atender la petición",
      "Desactivar el balanceador de carga para que solo exista un punto de entrada"
    ],
    "answer": 2,
    "exp": "Si el estado vive fuera de las instancias, el reinicio de cualquiera de ellas no pierde datos; las sesiones pegajosas solo aplazan el problema y generan desequilibrio de carga."
  },
  {
    "id": "cloud-105",
    "module": "cloud",
    "topic": "RPO/RTO y DR",
    "q": "El negocio declara que puede tolerar como máximo 30 minutos de datos perdidos tras un desastre. ¿Qué métrica de recuperación está definiendo?",
    "options": [
      "RTO (Recovery Time Objective)",
      "MTTR de una instancia individual",
      "SLA de disponibilidad del proveedor",
      "RPO (Recovery Point Objective)"
    ],
    "answer": 3,
    "exp": "El RPO mide la pérdida máxima de datos tolerable, es decir, cuánta información transaccional puede faltar; el RTO mide el tiempo de inactividad tolerable."
  },
  {
    "id": "cloud-106",
    "module": "cloud",
    "topic": "Costos en nube",
    "q": "Una aplicación replica grandes volúmenes de objetos hacia usuarios de internet y el tráfico de salida domina la factura mensual. ¿Qué cambio de arquitectura reduce de forma sostenible ese costo?",
    "options": [
      "Servir el contenido estático desde un CDN/edge y procesar cerca del origen del dato",
      "Aumentar la retención de snapshots diarios",
      "Contratar instancias reservadas para las máquinas que generan la transferencia",
      "Replicar los objetos a más regiones para repartir la salida"
    ],
    "answer": 0,
    "exp": "El CDN descarga el tráfico de salida sirviendo copias cerca del usuario y el procesamiento en la región del dato evita cruces de regiones; replicar más solo aumenta la transferencia."
  },
  {
    "id": "cloud-107",
    "module": "cloud",
    "topic": "Almacenamiento",
    "q": "Se necesita alojar archivos estáticos de solo lectura (imágenes, CSS, JS) de un sitio web con tráfico global y altos picos. ¿Qué tipo de almacenamiento es el más adecuado?",
    "options": [
      "Disco de bloque de alto rendimiento montado en la máquina virtual",
      "Base de datos relacional con índices sobre los archivos",
      "Almacenamiento de archivos montado como disco raíz del sistema",
      "Almacenamiento de objetos con URL de acceso, ideal para servirse desde un CDN"
    ],
    "answer": 3,
    "exp": "El almacenamiento de objetos soporta escalado masivo, HTTP y CDN de forma natural; los discos de bloque están pensados para I/O de bajos milisegundos, no para distribución global."
  },
  {
    "id": "cloud-108",
    "module": "cloud",
    "topic": "Migración",
    "q": "Al migrar una aplicación legacy se decide cambiar solo componentes puntuales (por ejemplo, sustituir la base de datos instalada por una administrada) sin reescribir la lógica de negocio. ¿Qué estrategia de las 6R corresponde?",
    "options": [
      "Retire",
      "Repurchase",
      "Refactor completo",
      "Replatform (modernización parcial)"
    ],
    "answer": 3,
    "exp": "El replatform actualiza la plataforma de soporte con cambios acotados conservando el código; el refactor implicaría rediseñar la aplicación y el retire eliminarla."
  },
  {
    "id": "cloud-109",
    "module": "cloud",
    "topic": "Conectividad híbrida",
    "q": "El data center y la red de la nube están unidos por una VPN sitio a sitio y se requiere que el enlace sobreviva la caída de un túnel. ¿Qué configuración mejora la disponibilidad del enlace híbrido?",
    "options": [
      "Provisionar túneles redundantes (segundos túneles o rutas alternas) con conmutación automática",
      "Deshabilitar BGP para simplificar el enrutamiento",
      "Usar un único túnel con el mayor ancho de banda posible",
      "Sustituir el enlace por acceso directo a internet público"
    ],
    "answer": 0,
    "exp": "Los túneles redundantes con conmutación automática evitan que la caída de un túnel corte la conectividad; un único túnel es un punto único de fallo."
  },
  {
    "id": "cloud-110",
    "module": "cloud",
    "topic": "Seguridad en nube",
    "q": "Un proceso automatizado necesita subir objetos a un almacén de la nube. ¿Cuál es la forma recomendada de autenticar ese acceso?",
    "options": [
      "Crear una identidad/rol con permisos mínimos asignado al recurso y rotarlo periódicamente",
      "Compartir la clave de acceso de la cuenta raíz con el equipo",
      "Dejar el almacén con acceso público y filtrarlo por IP",
      "Guardar la clave como texto plano en el repositorio de código"
    ],
    "answer": 0,
    "exp": "El mínimo privilegio con una identidad dedicada y rotación limita el impacto de una fuga; las claves raíz o compartidas amplían el riesgo y el acceso público elimina el control."
  },
  {
    "id": "cloud-111",
    "module": "cloud",
    "topic": "Modelos de servicio",
    "q": "En el modelo PaaS, ¿qué afirmación describe correctamente la división de responsabilidades?",
    "options": [
      "El cliente administra los servidores y el proveedor solo factura el consumo",
      "El proveedor gestiona también los datos y las credenciales del cliente",
      "El cliente no interviene en absoluto porque todo está automatizado",
      "El proveedor gestiona infraestructura, sistema operativo y runtime, mientras el cliente gestiona su aplicación y sus datos"
    ],
    "answer": 3,
    "exp": "PaaS traslada al proveedor la plataforma (infra, SO, runtime y parches) y deja al cliente la aplicación, la configuración y los datos."
  },
  {
    "id": "cloud-112",
    "module": "cloud",
    "topic": "Responsabilidad compartida",
    "q": "La aplicación del cliente en la nube debe usar TLS para cifrar la comunicación con sus usuarios. ¿De quién es la responsabilidad configurarlo correctamente?",
    "options": [
      "Del cliente, porque la configuración de su aplicación y sus certificados le pertenecen",
      "Del proveedor, porque gestiona la red del centro de datos",
      "Del proveedor únicamente cuando se usa PaaS",
      "De un tercero certificador que renueva los certificados por defecto"
    ],
    "answer": 0,
    "exp": "El proveedor asegura la infraestructura en tránsito, pero el TLS de la aplicación, sus certificados y su uso correcto siguen en manos del cliente."
  },
  {
    "id": "cloud-113",
    "module": "cloud",
    "topic": "Regiones y zonas",
    "q": "¿Cuál es la diferencia clave entre diseñar multi-zona de disponibilidad (multi-AZ) y multi-región?",
    "options": [
      "Las dos protegen exactamente lo mismo solo que con más máquinas",
      "Multi-región solo reduce costos; multi-AZ solo mejora la latencia",
      "Las zonas de disponibilidad son países distintos y las regiones son edificios del mismo campus",
      "Multi-AZ protege frente a fallos de infraestructura dentro de una región; multi-región protege frente a fallos de una región completa y acerca datos a usuarios en otros países"
    ],
    "answer": 3,
    "exp": "Las zonas son centros de datos independientes dentro de una región para fallos localizados; una región completa agrega protección frente a desastres mayores y cumplimiento de residencia."
  },
  {
    "id": "cloud-114",
    "module": "cloud",
    "topic": "Alta disponibilidad",
    "q": "Una base de datos en la nube debe seguir disponible si falla su instancia principal y, además, debe soportar más lecturas. ¿Qué patrón de diseño se ajusta mejor?",
    "options": [
      "Una sola instancia con el disco más grande posible",
      "Backup diario restaurado manualmente al detectar la falla",
      "Caché en memoria sin base de datos de respaldo",
      "Réplica de lectura en otra zona con conmutación automática de la principal y balanceo de lecturas"
    ],
    "answer": 3,
    "exp": "Réplicas con conmutación automática dan alta disponibilidad y escalan lecturas; una instancia única o un backup manual no cumplen el RTO exigido."
  },
  {
    "id": "cloud-115",
    "module": "cloud",
    "topic": "RPO/RTO y DR",
    "q": "El equipo define como máximo 15 minutos de inactividad tras un desastre antes de restablecer el servicio. ¿Qué concepto se está fijando?",
    "options": [
      "RPO",
      "Costo máximo por GB",
      "RTO",
      "Número de zonas de disponibilidad"
    ],
    "answer": 2,
    "exp": "El RTO es el tiempo máximo de inactividad aceptable y condiciona la estrategia de recuperación; el RPO se refiere a la pérdida de datos."
  },
  {
    "id": "cloud-116",
    "module": "cloud",
    "topic": "Costos en nube",
    "q": "Un entorno de pruebas solo se usa de 8 de la mañana a 6 de la tarde durante días hábiles. ¿Qué acción reduce el costo sin afectar la calidad de las pruebas?",
    "options": [
      "Contratar compromisos de uso de tres años para esas máquinas",
      "Ampliar el tamaño de las instancias para terminar antes",
      "Programar el apagado o escalado a cero fuera del horario de uso",
      "Mantenerlas encendidas las 24 horas con más zonas de disponibilidad"
    ],
    "answer": 2,
    "exp": "Apagar o escalar a cero lo que no se usa elimina el cobro por capacidad ociosa; los compromisos de uso amarran gasto a una carga continua que aquí no existe."
  },
  {
    "id": "cloud-117",
    "module": "cloud",
    "topic": "Almacenamiento",
    "q": "¿Por qué los snapshots de disco son útiles como base de la estrategia de backup en la nube?",
    "options": [
      "Porque garantizan un RPO de cero sin replicación",
      "Porque sustituyen la replicación síncrona entre zonas",
      "Porque capturan el estado del disco en un momento dado y permiten restaurar a ese punto con retención administrable",
      "Porque son objetos de solo append que nunca se modifican"
    ],
    "answer": 2,
    "exp": "Un snapshot guarda el estado del disco para restaurarlo o crear instancias derivadas; el RPO depende de su frecuencia, no es cero por defecto."
  },
  {
    "id": "cloud-118",
    "module": "cloud",
    "topic": "Migración",
    "q": "Durante el inventario de la cartera de aplicaciones se detecta una aplicación duplicada que nadie utiliza desde hace años. ¿Qué estrategia de las 6R corresponde?",
    "options": [
      "Rehost",
      "Retire",
      "Replatform",
      "Retain"
    ],
    "answer": 1,
    "exp": "Retire consiste en eliminar cargas sin uso para reducir costos y complejidad; rehost y replatform suponen seguir operando la aplicación."
  },
  {
    "id": "cloud-119",
    "module": "cloud",
    "topic": "Conectividad híbrida",
    "q": "Una aplicación en la nube necesita consultar una base de datos del data center sin exponerla a internet público. ¿Qué solución de conectividad es la más apropiada?",
    "options": [
      "Conectar la red de la nube con el data center mediante un enlace privado o VPN para que el tráfico no transite por internet público",
      "Publicar la base de datos con una IP pública filtrada por lista de permitidos",
      "Subir una copia diaria de la base de datos a un almacén público",
      "Desplegar la base de datos en un CDN para acercarla al usuario"
    ],
    "answer": 0,
    "exp": "Un enlace híbrido privado mantiene el tráfico de datos fuera de la red pública; exponer la base con IP pública incrementa el riesgo de ataque."
  },
  {
    "id": "cloud-120",
    "module": "cloud",
    "topic": "Seguridad en nube",
    "q": "Se detectan credenciales de API de la nube filtradas en un repositorio de código. ¿Cuál es el primer paso correcto?",
    "options": [
      "Borrar el commit del repositorio y no hacer nada más",
      "Rotar o revocar inmediatamente las credenciales y después moverlas a un gestor de secretos",
      "Cambiar la región de despliegue de la aplicación",
      "Duplicar el almacenamiento de objetos para tener más copias"
    ],
    "answer": 1,
    "exp": "Ante una fuga, revocar y rotar las credenciales limita el daño de inmediato; solo borrar el historial deja la clave expuesta viva."
  },
  {
    "id": "cloud-121",
    "module": "cloud",
    "topic": "Modelos de servicio",
    "q": "¿Cuál es la diferencia fundamental entre una nube pública y una nube privada dedicada a una organización?",
    "options": [
      "La nube pública comparte infraestructura entre múltiples clientes (multi-tenant), mientras que la privada está dedicada a una sola organización",
      "La nube pública es siempre más barata que la privada",
      "La nube privada no necesita gestión ni personal de TI",
      "Solo la nube pública permite pagar por consumo y la privada exige licencias perpetuas"
    ],
    "answer": 0,
    "exp": "El distintivo es el modelo de tenancy: en la nube pública los recursos se comparten entre clientes y en la privada el infraestructura está dedicada; el resto de afirmaciones no son ciertas de forma general."
  },
  {
    "id": "cloud-122",
    "module": "cloud",
    "topic": "Responsabilidad compartida",
    "q": "¿Quién es responsable de administrar los permisos y roles de IAM que la empresa define para sus usuarios en la nube?",
    "options": [
      "El proveedor, porque opera la plataforma de identidad",
      "La organización cliente, porque define quién accede a qué recursos",
      "El fabricante del software de la aplicación",
      "El proveedor únicamente si se contrata soporte premium"
    ],
    "answer": 1,
    "exp": "El proveedor ofrece el servicio de identidad, pero la correcta configuración de roles, permisos y ciclos de vida de usuarios corresponde al cliente."
  },
  {
    "id": "cloud-123",
    "module": "cloud",
    "topic": "Regiones y zonas",
    "q": "Al elegir la región de despliegue de una carga productiva, ¿qué criterios conviene combinar?",
    "options": [
      "Solo el precio más bajo del cómputo",
      "Cumplimiento de residencia de disponibilidad de los servicios necesarios y latencia razonable hacia los usuarios principales",
      "Únicamente la cantidad de zonas de disponibilidad",
      "Solo la proximidad geográfica al equipo de desarrollo"
    ],
    "answer": 1,
    "exp": "La región correcta equilibra requisitos legales, disponibilidad de servicios, latencia al usuario y costo; optimizar solo un criterio suele incumplir otro."
  },
  {
    "id": "cloud-124",
    "module": "cloud",
    "topic": "Alta disponibilidad",
    "q": "¿Qué papel juegan los health checks y el autohealing en una arquitectura de nube?",
    "options": [
      "Replican los datos entre regiones de forma síncrona",
      "Reducen el costo mediante compromisos de uso",
      "Cifran el tráfico entre la aplicación y los usuarios",
      "Detectan instancias no saludables, retiran el tráfico y las reemplazan automáticamente"
    ],
    "answer": 3,
    "exp": "El health check identifica fallos y el autohealing restablece capacidad reemplazando la instancia dañada; la replicación y el cifrado son funciones distintas."
  },
  {
    "id": "cloud-125",
    "module": "cloud",
    "topic": "RPO/RTO y DR",
    "q": "Para una base de datos transaccional con requisito de RPO cercano a cero, ¿qué arquitectura de nube es la más adecuada?",
    "options": [
      "Backup completo diario con retención de 30 días",
      "Replicación continua o de alta frecuencia hacia otra zona o región con conmutación automática",
      "Snapshot semanal archivado en una clase de bajo costo",
      "Exportación manual del esquema a un archivo"
    ],
    "answer": 1,
    "exp": "La replicación continua minimiza la pérdida de datos (RPO próximo a cero) y habilita conmutación; los respaldos diarios dejan horas de pérdida posible."
  },
  {
    "id": "cloud-126",
    "module": "cloud",
    "topic": "Costos en nube",
    "q": "Además del volumen de datos almacenados, ¿qué dimensiones influyen típicamente en el costo de un almacén de objetos?",
    "options": [
      "El número de operaciones de lectura/escritura y la transferencia de salida",
      "Solo la región elegida",
      "Únicamente el número de instancias conectadas",
      "El tipo de sistema operativo de la máquina virtual"
    ],
    "answer": 0,
    "exp": "La factura de objetos combina capacidad, operaciones y salida de datos; ignorar operaciones y transferencia suele ocultar el costo real."
  },
  {
    "id": "cloud-127",
    "module": "cloud",
    "topic": "Almacenamiento",
    "q": "Varias máquinas virtuales deben compartir el mismo sistema de archivos con protocolo tipo NFS/SMB para un legacy que espera rutas montadas. ¿Qué servicio de almacenamiento conviene usar?",
    "options": [
      "Almacenamiento de objetos con URL firmada",
      "Almacenamiento de archivos gestionado (file storage)",
      "Disco de bloque independiente por máquina",
      "Caché en memoria con TTL corto"
    ],
    "answer": 1,
    "exp": "El file storage expone sistemas de archivos compartidos compatibles con NFS/SMB; los objetos no se montan como unidades y los discos de bloque no se comparten entre instancias."
  },
  {
    "id": "cloud-128",
    "module": "cloud",
    "topic": "Migración",
    "q": "¿Qué actividad debe realizarse primero antes de decidir la estrategia de las 6R para cada aplicación?",
    "options": [
      "Contratar el circuito dedicado más caro",
      "Descubrimiento e inventario de aplicaciones, dependencias y datos",
      "Elegir las etiquetas de costos que se usarán después",
      "Crear todas las zonas de disponibilidad disponibles"
    ],
    "answer": 1,
    "exp": "Sin descubrimiento y mapa de dependencias no se puede clasificar bien cada carga; la conectividad y las etiquetas se definen después del plan."
  },
  {
    "id": "cloud-129",
    "module": "cloud",
    "topic": "Conectividad híbrida",
    "q": "Se necesita filtrar y segmentar el tráfico que entra y sale de la red de la nube hacia el data center aplicando reglas de mínimo privilegio. ¿Qué componente se configura?",
    "options": [
      "Un balanceador de carga público sin reglas",
      "Un registro DNS con TTL alto",
      "Grupos de seguridad y firewalls de red con reglas de tráfico explícitas",
      "Una política de presupuesto en la consola de costos"
    ],
    "answer": 2,
    "exp": "Los grupos de seguridad y firewalls de red controlan qué puertos y orígenes pueden comunicarse; el balanceo y el DNS no aplican control de acceso a nivel de red."
  },
  {
    "id": "cloud-130",
    "module": "cloud",
    "topic": "Seguridad en nube",
    "q": "¿Dónde deben guardarse las claves de conexión de una base de datos usadas por la aplicación?",
    "options": [
      "En el repositorio de código junto con la aplicación",
      "Dentro de la imagen del contenedor en texto plano",
      "En un gestor de secretos con control de acceso y rotación",
      "En un documento compartido por mensajería al equipo"
    ],
    "answer": 2,
    "exp": "Un gestor de secretos centraliza acceso, auditoría y rotación; el código o la imagen quedan expuestos ante cualquier fuga del repositorio."
  },
  {
    "id": "cloud-131",
    "module": "cloud",
    "topic": "Modelos de servicio",
    "q": "¿Qué caracteriza al modelo de funciones serverless (FaaS) frente a IaaS?",
    "options": [
      "El cliente administra servidores y sistema operativo",
      "Requiere compromisos de uso de tres años",
      "No permite ejecutar código personalizado",
      "Se ejecuta por eventos y se paga por ejecución, con escalado automático gestionado por el proveedor"
    ],
    "answer": 3,
    "exp": "El serverless ejecuta código por evento con escalado y facturación por uso, sin administrar servidores; a diferencia de IaaS no hay máquinas que gestionar."
  },
  {
    "id": "cloud-132",
    "module": "cloud",
    "topic": "Responsabilidad compartida",
    "q": "Sobre los datos que la empresa carga a la nube (clasificación, control de acceso y cifrado lógico de sus aplicaciones), ¿quién es responsable?",
    "options": [
      "La organización cliente",
      "El proveedor de nube en su totalidad",
      "Un organismo de certificación externo",
      "El equipo de red del proveedor"
    ],
    "answer": 0,
    "exp": "El cliente es dueño de sus datos y de cómo los clasifica, cifra y protege lógicamente; el proveedor asegura la infraestructura donde residen."
  },
  {
    "id": "cloud-133",
    "module": "cloud",
    "topic": "Regiones y zonas",
    "q": "Al replicar datos de una región a otra remota para DR, ¿qué implicación debe considerarse en el diseño?",
    "options": [
      "La latencia entre regiones implica replicación generalmente asíncrona, con un RPO mayor que entre zonas cercanas",
      "La replicación entre regiones es siempre síncrona e instantánea",
      "La latencia no afecta porque las regiones comparten red interna de baja latencia",
      "No hace falta definir RPO al usar dos regiones"
    ],
    "answer": 0,
    "exp": "La distancia entre regiones hace que la replicación suele ser asíncrona, aceptando cierta pérdida posible; entre zonas de una misma región la latencia es mucho menor."
  },
  {
    "id": "cloud-134",
    "module": "cloud",
    "topic": "Alta disponibilidad",
    "q": "¿Qué es un punto único de fallo (SPOF) en una arquitectura de nube y cómo se elimina típicamente?",
    "options": [
      "Un componente cuya caída detiene todo el servicio; se elimina eliminando redundancia para ahorrar costos",
      "Una instancia cara; se elimina renombrándola con etiquetas de gobernanza",
      "Un componente cuya caída detiene el servicio; se elimina redundándolo (por ejemplo, en varias zonas) y agregando balanceo con health checks",
      "Un backup; se elimina dejando de crear snapshots"
    ],
    "answer": 2,
    "exp": "El SPOF se mitiga duplicando componentes en dominios de fallo distintos y distribuyendo el tráfico; eliminar redundancia aumenta el riesgo, no lo reduce."
  },
  {
    "id": "cloud-135",
    "module": "cloud",
    "topic": "Migración",
    "q": "Se migra una carga con dependencias complejas entre aplicaciones. ¿Qué enfoque reduce mejor el riesgo durante el despliegue inicial en la nube?",
    "options": [
      "Migrar todo de golpe (big bang) para terminar antes",
      "Esperar a que el data center falle para obligar a la migración",
      "Migrar por fases con convivencia controlada entre entornos y planes de reversión claros",
      "Desactivar el entorno origen antes de validar la meta"
    ],
    "answer": 2,
    "exp": "La migración por fases con reversión disponible limita el impacto de los errores; el big bang concentra el riesgo y la reversión tardía es costosa."
  },
  {
    "id": "cloud-136",
    "module": "cloud",
    "topic": "Costos en nube",
    "q": "La nube genera una factura mensual impredecible que crece sin control. ¿Qué práctica conviene implementar primero?",
    "options": [
      "Eliminar todas las zonas de disponibilidad para reducir redundancia",
      "Establecer visibilidad de costos por equipo/proyecto, presupuestos con alertas y revisión periódica del gasto",
      "Suspender los backups para bajar la factura",
      "Congelar cualquier cambio de arquitectura"
    ],
    "answer": 1,
    "exp": "Sin atribución ni alertas de presupuesto el gasto se descontrola; la visibilidad y las alertas son la base del FinOps antes de optimizar."
  },
  {
    "id": "cloud-137",
    "module": "cloud",
    "topic": "RPO/RTO y DR",
    "q": "Un servicio requiere recuperarse en menos de una hora con pérdida de datos mínima. ¿Qué estrategia de recuperación en la nube se ajusta mejor?",
    "options": [
      "Standby caliente o réplica continua en otra región con conmutación automática",
      "Restaurar desde cinta mensual con retención larga",
      "Esperar a recrear las VMs manualmente cuando ocurra el desastre",
      "Depender solo del SLA del proveedor sin plan propio"
    ],
    "answer": 0,
    "exp": "Un standby caliente con replicación continua cumple RTO bajo y RPO mínimo; las cintas y la recreación manual no cumplen plazos exigidos."
  },
  {
    "id": "cloud-138",
    "module": "cloud",
    "topic": "Conectividad híbrida",
    "q": "Las instancias están en una red privada de la nube sin dirección IP pública y necesitan descargar actualizaciones salientes a internet. ¿Qué opción conviene usar?",
    "options": [
      "Un gateway de salida gestionado (NAT) que permita el tráfico saliente sin exponer las instancias",
      "Asignar una IP pública directamente a cada instancia",
      "Abrir todas las puertas de entrada para simplificar la salida",
      "Usar un registro DNS estático como vía de salida"
    ],
    "answer": 0,
    "exp": "El gateway de salida da acceso a internet desde redes privadas sin exponer las instancias; las IP públicas directas amplían la superficie de ataque."
  },
  {
    "id": "cloud-139",
    "module": "cloud",
    "topic": "Alta disponibilidad",
    "q": "Una arquitectura define un balanceador de carga que distribuye peticiones entre instancias y retira las que no pasan la verificación de salud. ¿Qué evita principalmente este diseño?",
    "options": [
      "Que un fallo en una instancia dañe los datos persistidos",
      "Que la aplicación use más memoria de la permitida",
      "Que las peticiones lleguen a instancias averiadas y provoquen errores al usuario",
      "Que se generen costos por transferencia de salida"
    ],
    "answer": 2,
    "exp": "El health check retira instancias enfermas del balanceo, evitando respuestas fallidas; la persistencia de datos y los costos no los controla el balanceador."
  },
  {
    "id": "cloud-140",
    "module": "cloud",
    "topic": "Seguridad en nube",
    "q": "¿Qué describe el modelo de seguridad Zero Trust aplicado a una arquitectura en la nube?",
    "options": [
      "Confiar en todo el tráfico que llega desde la red privada interna",
      "Permitir todo el tráfico saliente y bloquear solo la entrada",
      "Nunca confiar por la ubicación de red: verificar explícitamente cada acceso con identidad, contexto y mínimo privilegio",
      "Autenticar una sola vez al inicio de la sesión y no volver a verificar"
    ],
    "answer": 2,
    "exp": "Zero Trust elimina la confianza implícita por red y exige verificación continua de cada solicitud; la red privada por sí sola no garantiza nada."
  },
  {
    "id": "cloud-141",
    "module": "cloud",
    "topic": "Almacenamiento",
    "q": "¿Qué es el versionado de objetos y por qué es útil en una estrategia de respaldo?",
    "options": [
      "Comprimir los objetos para reducir el costo de transferencia",
      "Conservar versiones anteriores de un objeto para recuperarse de borrados o sobrescrituras accidentales",
      "Replicar cada objeto a todas las regiones disponibles",
      "Cifrar cada objeto con una clave distinta cada día"
    ],
    "answer": 1,
    "exp": "El versionado mantiene históricos recuperables ante errores humanos; complementa los snapshots, pero no sustituye las copias fuera de la región."
  },
  {
    "id": "cloud-142",
    "module": "cloud",
    "topic": "Responsabilidad compartida",
    "q": "La empresa consume un servicio administrado de contenedores en la nube. ¿Qué sigue siendo responsabilidad del cliente?",
    "options": [
      "El parcheo del plano de control del servicio administrado",
      "Las imágenes, el código, la configuración de la aplicación y los permisos de acceso",
      "La disponibilidad física del centro de datos",
      "La gestión del hipervisor de los hosts"
    ],
    "answer": 1,
    "exp": "En servicios administrados el proveedor opera la plataforma subyacente; el cliente conserva sus imágenes, configuración, datos y accesos."
  },
  {
    "id": "cloud-143",
    "module": "cloud",
    "topic": "Regiones y zonas",
    "q": "Se replica la base de datos hacia una región vecina a pocos cientos de kilómetros. ¿Qué riesgo queda cubierto de forma incompleta y por qué?",
    "options": [
      "No cumple ninguna función porque entre regiones no se puede replicar",
      "Impide cumplir con la residencia de datos del país",
      "No protege frente a un desastre que afecte a toda la zona geográfica; para eso se necesita una región remotamente separada",
      "Hace imposible definir un RPO"
    ],
    "answer": 2,
    "exp": "Una región cercana reduce la latencia de réplica pero comparte riesgos geográficos (temporal, corte eléctrico regional); para ese escenario se elige una región distante."
  },
  {
    "id": "cloud-144",
    "module": "cloud",
    "topic": "Cloud-native",
    "q": "Un equipo contenedoriza sus aplicaciones y necesita orquestar su despliegue, escalado y salud. ¿Qué componente encaja con este requisito?",
    "options": [
      "Un balanceador de capa 7 únicamente",
      "Un orquestador de contenedores (p. ej. Kubernetes)",
      "Una base de datos transaccional",
      "Un servicio de correo saliente"
    ],
    "answer": 1,
    "exp": "El orquestador gestiona ciclo de vida, escalado y salud de los contenedores; los otros componentes no administran despliegues de contenedores."
  },
  {
    "id": "cloud-145",
    "module": "cloud",
    "topic": "Costos en nube",
    "q": "La base de datos de la aplicación está al límite de su rendimiento y el equipo propone subirla de tamaño. ¿Qué conviene revisar primero?",
    "options": [
      "Contratar el nivel de soporte más caro",
      "Aumentar el número de zonas de disponibilidad",
      "Migrar toda la base a almacenamiento de objetos",
      "Los patrones de consulta, los índices y el uso de caché antes de pagar por una instancia mayor"
    ],
    "answer": 3,
    "exp": "Optimizar el uso suele rendir más que escalar ciegamente; subir de tamaño sin diagnosticar solo encarece la factura."
  },
  {
    "id": "cloud-146",
    "module": "cloud",
    "topic": "Conectividad híbrida",
    "q": "La empresa necesita que las aplicaciones en la nube y en el data center resuelvan nombres internos de forma unificada. ¿Qué solución conviene implementar?",
    "options": [
      "Un servidor DNS público con registros abiertos",
      "Eliminar el DNS local y usar solo IP públicas",
      "Un esquema de DNS híbrido con zonas privadas y resolución condicional entre redes",
      "Cambiar todos los nombres de host a direcciones IP fijas"
    ],
    "answer": 2,
    "exp": "El DNS híbrido con zonas privadas y resolución condicional unifica nombres sin exponer la infraestructura; usar IP fijas o DNS público es frágil o inseguro."
  },
  {
    "id": "cloud-147",
    "module": "cloud",
    "topic": "Migración",
    "q": "Tras inventariar la cartera, se decide mover una aplicación a un proveedor de software en la nube sin mantener código propio. ¿Qué estrategia de las 6R corresponde?",
    "options": [
      "Rehost",
      "Repurchase (comprar SaaS en lugar de mantener el producto propio)",
      "Retain",
      "Replatform"
    ],
    "answer": 1,
    "exp": "El repurchase sustituye el producto propio por uno consumido como servicio (SaaS); rehost y replatform siguen manteniendo la aplicación."
  },
  {
    "id": "cloud-148",
    "module": "cloud",
    "topic": "Gobernanza",
    "q": "¿Qué es un guardrail (valla de seguridad) en la gobernanza de nube?",
    "options": [
      "Un informe mensual de gastos",
      "Una restricción automática que impide despliegues fuera de políticas (regiones no autorizadas, cifrado ausente)",
      "Un tipo de instancia de bajo costo",
      "Un contrato de SLA con el proveedor"
    ],
    "answer": 1,
    "exp": "Los guardrails se aplican como políticas automáticas que impiden o corrigen despliegues incumplidores; los informes y SLA no bloquean nada."
  },
  {
    "id": "cloud-149",
    "module": "cloud",
    "topic": "Resiliencia y backup",
    "q": "La política 3-2-1 aplicada a backups en la nube significa:",
    "options": [
      "3 regiones, 2 zonas, 1 proveedor",
      "3 copias, 2 medios distintos, 1 copia fuera del sitio o en otra región",
      "3 snapshots diarios, 2 semanales, 1 mensual",
      "3 usuarios, 2 roles, 1 administrador"
    ],
    "answer": 1,
    "exp": "La regla 3-2-1 exige tres copias, dos soportes distintos y una copia geográficamente separada, lo que en nube se logra replicando a otra región o proveedor."
  },
  {
    "id": "cloud-150",
    "module": "cloud",
    "topic": "Alta disponibilidad",
    "q": "¿Cuál es el riesgo de diseñar la capa de datos con una sola instancia primaria sin réplica?",
    "options": [
      "Es un punto único de fallo: su caída deja la aplicación sin capacidad de lectura/escritura",
      "Genera costos excesivos por transferencia",
      "Impide el uso de etiquetas de gobernanza",
      "Obliga a usar solo almacenamiento de objetos"
    ],
    "answer": 0,
    "exp": "Una primaria única concentra todo el riesgo en un componente; añadir réplicas con conmutación elimina ese punto único de fallo."
  },
  {
    "id": "cloud-151",
    "module": "cloud",
    "topic": "RPO/RTO y DR",
    "q": "Si el RPO definido es de 15 minutos, ¿con qué frecuencia como máximo se pueden tomar snapshots o respaldos incrementales?",
    "options": [
      "Cada 15 minutos o menos",
      "Una vez al mes",
      "Solo cuando el usuario lo pida",
      "Ninguna, el RPO no depende de los respaldos"
    ],
    "answer": 0,
    "exp": "El RPO marca la pérdida máxima tolerable, así que los respaldos deben ocurrir al menos cada 15 minutos para no superarlo."
  },
  {
    "id": "cloud-152",
    "module": "cloud",
    "topic": "Modelos de servicio",
    "q": "Al pasar de IaaS a PaaS, ¿qué cambia para el equipo del cliente?",
    "options": [
      "Pierde el control de sus datos y de sus accesos",
      "Deja de administrar sistema operativo y runtime y se enfoca en su código y sus datos",
      "Debe comprar el hardware del proveedor",
      "Asume también el parcheo de la infraestructura física"
    ],
    "answer": 1,
    "exp": "PaaS traslada más operación al proveedor y libera al equipo de SO y runtime; el control de datos y accesos sigue siendo del cliente."
  },
  {
    "id": "cloud-153",
    "module": "cloud",
    "topic": "Seguridad en nube",
    "q": "Tras una reorganización, el inventario muestra usuarios y roles con permisos que ya no necesitan. ¿Qué acción corresponde?",
    "options": [
      "Ejecutar una revisión de accesos y retirar o recortar los permisos huérfanos",
      "Ampliar los permisos para cubrir cualquier necesidad futura",
      "Deshabilitar la autenticación multifactor para agilizar el trabajo",
      "Mover los usuarios a una cuenta compartida de servicio"
    ],
    "answer": 0,
    "exp": "Las revisiones periódicas de accesos eliminan privilegios residuales; ampliar permisos o compartir cuentas aumenta el riesgo."
  },
  {
    "id": "cloud-154",
    "module": "cloud",
    "topic": "Migración",
    "q": "¿Qué es la gravedad de los datos (data gravity) y cómo condiciona la migración?",
    "options": [
      "Los datos atraen aplicaciones y servicios hacia donde residen; mover datos es costoso y lento, así que conviene acercar el cómputo al dato",
      "Es la gravedad física de los centros de datos",
      "Mide el peso de las imágenes en un repositorio",
      "Indica cuántas etiquetas tiene un recurso"
    ],
    "answer": 0,
    "exp": "La gravedad de datos implica que mover grandes volúmenes tarda y cuesta (transferencia, tiempo de ventana), por lo que la arquitectura suele acercar el procesamiento a los datos."
  },
  {
    "id": "cloud-155",
    "module": "cloud",
    "topic": "Cloud-native",
    "q": "¿Qué ventaja principal aporta desplegar la infraestructura como código (IaC)?",
    "options": [
      "Elimina la necesidad de tener respaldos",
      "Garantiza 100% de disponibilidad",
      "Reproducibilidad y auditoría: entornos recreables de forma consistente y versionada",
      "Reduce a cero todos los costos"
    ],
    "answer": 2,
    "exp": "El IaC permite recrear entornos idénticos, versionar cambios y auditarlos; no sustituye backups ni garantiza disponibilidad ni elimina costos."
  },
  {
    "id": "cloud-156",
    "module": "cloud",
    "topic": "Gobernanza",
    "q": "Un desarrollador quiere modificar recursos directamente en producción sin revisión previa. ¿Qué control de gobernanza aplica en este caso?",
    "options": [
      "Permitirlo siempre que use doble factor de autenticación",
      "Separación de funciones: los cambios en producción pasan por aprobación y despliegue controlado",
      "Confiar en el desarrollador si es administrador de la cuenta",
      "Eliminar el entorno de pruebas para agilizar"
    ],
    "answer": 1,
    "exp": "La separación de funciones y el despliegue controlado evitan cambios no auditados en producción; la MFA no sustituye la aprobación del cambio."
  },
  {
    "id": "cloud-157",
    "module": "cloud",
    "topic": "Almacenamiento",
    "q": "¿Cuál es la principal diferencia entre almacenamiento de bloques y de objetos?",
    "options": [
      "Los objetos son más rápidos que los bloques en todas las cargas",
      "Los bloques no se pueden respaldar",
      "Los objetos solo sirven para bases de datos relacionales",
      "Los bloques presentan discos direccionables de baja latencia para sistemas de archivos; los objetos guardan archivos con metadatos y URL, ideales para datos no estructurados"
    ],
    "answer": 3,
    "exp": "Los bloques emulan discos para bases de datos y sistemas de archivos; los objetos optimizan escalado y acceso HTTP para datos no estructurados."
  },
  {
    "id": "cloud-158",
    "module": "cloud",
    "topic": "Conectividad híbrida",
    "q": "Se debe conectar un gran número de sedes remotas con la nube gestionando el enrutamiento de forma centralizada. ¿Qué topología suele usar la organización?",
    "options": [
      "Una malla completa en la que cada sede se conecta directamente con cada recurso por IP pública",
      "Conexiones DNS directas entre sedes sin enrutamiento",
      "Topología hub-and-spoke, con un punto central de enlace que enruta el tráfico de las sedes",
      "Un único servidor proxy instalado en cada sede sin gestión central"
    ],
    "answer": 2,
    "exp": "La topología hub-and-spoke centraliza el enlace y la política de rutas, simplificando la gestión frente a una malla completa difícil de operar."
  },
  {
    "id": "cloud-159",
    "module": "cloud",
    "topic": "Responsabilidad compartida",
    "q": "En un servicio SaaS, ¿qué sigue siendo responsabilidad del cliente?",
    "options": [
      "El parcheo de la plataforma por la que se entrega el servicio",
      "Los datos que carga, quién tiene acceso y la configuración de identidad de sus usuarios",
      "La disponibilidad física del centro de datos",
      "El runtime del proveedor"
    ],
    "answer": 1,
    "exp": "Aunque el proveedor opera todo el stack, el cliente controla sus datos, accesos e identidad; el resto corresponde al proveedor."
  },
  {
    "id": "cloud-160",
    "module": "cloud",
    "topic": "Costos en nube",
    "q": "¿Qué factor suele disparar la factura de transferencia de datos en la nube?",
    "options": [
      "Etar etiquetas en los recursos",
      "Usar más zonas de disponibilidad",
      "Egress (salida) de datos hacia internet y entre regiones",
      "Cifrar los datos en reposo"
    ],
    "answer": 2,
    "exp": "La salida de datos y los cruces entre regiones se tarifican por volumen; las etiquetas, zonas y cifrado no generan ese tipo de cargo."
  },
  {
    "id": "cloud-161",
    "module": "cloud",
    "topic": "Regiones y zonas",
    "q": "Se elige una región por su precio, pero al desplegar se descubre que un servicio necesario no está disponible allí. ¿Qué debió considerarse antes?",
    "options": [
      "Únicamente el precio del cómputo",
      "Verificar la disponibilidad del catálogo de servicios en cada región antes de comprometerse",
      "El número de etiquetas de gobernanza",
      "La marca del proveedor"
    ],
    "answer": 1,
    "exp": "Los servicios no llegan a todas las regiones al mismo tiempo; el diseño debe validar el catálogo y, si hace falta, adaptarse a alternativas equivalentes."
  },
  {
    "id": "cloud-162",
    "module": "cloud",
    "topic": "Cloud-native",
    "q": "¿Cuál es una ventaja de las funciones serverless frente a una VM gestionada para un procesamiento por eventos poco frecuente?",
    "options": [
      "Se paga por ejecución y no hay infraestructura ociosa que mantener",
      "Se tiene control total del sistema operativo subyacente",
      "Garantiza latencia cero en todo caso",
      "Permite instalar cualquier daemon de forma ilimitada"
    ],
    "answer": 0,
    "exp": "El modelo por ejecución elimina costos de capacidad ociosa en cargas esporádicas; a cambio se cede el control del sistema operativo subyacente."
  },
  {
    "id": "cloud-163",
    "module": "cloud",
    "topic": "Resiliencia y backup",
    "q": "¿Por qué no basta con tener snapshots de disco para considerar que existe un plan de backup sólido?",
    "options": [
      "Porque no se ha verificado la restauración ni su frecuencia cumple el RPO; un backup no probado puede fallar",
      "Porque los snapshots ocupan demasiado espacio siempre",
      "Porque los snapshots no funcionan en la nube",
      "Porque solo sirven para el sistema operativo"
    ],
    "answer": 0,
    "exp": "La calidad de un backup se prueba restaurando y cumpliendo RPO/RTO; tener copias sin verificar deja riesgo latente de fallo en la recuperación."
  },
  {
    "id": "cloud-164",
    "module": "cloud",
    "topic": "Seguridad en nube",
    "q": "¿Qué rol juega el cifrado en tránsito en una arquitectura en la nube?",
    "options": [
      "Protege los datos mientras viajan entre cliente, aplicaciones y servicios para evitar lecturas o manipulación en la red",
      "Reemplaza al control de acceso a los datos en reposo",
      "Elimina la necesidad de autenticación",
      "Sustituye a los grupos de seguridad"
    ],
    "answer": 0,
    "exp": "El cifrado en tránsito protege la información en movimiento; complementa, pero no sustituye, el cifrado en reposo ni los controles de acceso."
  },
  {
    "id": "cloud-165",
    "module": "cloud",
    "topic": "Alta disponibilidad",
    "q": "¿Qué es un dominio de fallo en la nube y por qué interesa al arquitecto?",
    "options": [
      "Una región donde no se pueden crear recursos",
      "El contrato de nivel de servicio del proveedor",
      "Un límite de infraestructura (zona, rack, red) cuyo fallo no debe tumbar toda la aplicación; distribuir dentro de ellos mejora la disponibilidad",
      "Un tipo de balanceador de carga"
    ],
    "answer": 2,
    "exp": "Reconocer los dominios de fallo permite repartir componentes para que un fallo aislado no afecte al servicio completo."
  },
  {
    "id": "cloud-166",
    "module": "cloud",
    "topic": "Gobernanza",
    "q": "¿Qué aporta el gobierno de identidad y acceso (IAM) desde el punto de vista de gobernanza en nube?",
    "options": [
      "Automatiza el dimensionamiento de instancias",
      "Reduce la latencia entre zonas",
      "Gestiona el ciclo de vida de los objetos de almacenamiento",
      "Control centralizado de quién accede a qué recursos, con trazabilidad de acciones"
    ],
    "answer": 3,
    "exp": "El IAM centraliza permisos y genera trazabilidad (quién hizo qué), base de auditoría y cumplimiento; no interviene en dimensionamiento ni almacenamiento."
  },
  {
    "id": "cloud-167",
    "module": "cloud",
    "topic": "Migración",
    "q": "Con una cartera grande de aplicaciones y recursos limitados, ¿qué criterio suele usarse para ordenar las olas de migración?",
    "options": [
      "Migrar primero la aplicación más crítica para validar el peor caso",
      "Ordenar las aplicaciones alfabéticamente para ser predecible",
      "Empezar por cargas de menor complejidad y mayor valor para generar aprendizaje y beneficios tempranos",
      "Esperar a que todas estén listas y migrarlas de una sola vez"
    ],
    "answer": 2,
    "exp": "Las olas tempranas de bajo riesgo generan experiencia y evidencia para las cargas complejas; el enfoque de todo de una vez concentra el riesgo."
  },
  {
    "id": "cloud-168",
    "module": "cloud",
    "topic": "Modelos de servicio",
    "q": "¿Qué significa el auto-servicio (self-service) en la nube y por qué lo valora un equipo de ingeniería?",
    "options": [
      "Provisionar recursos por cuenta propia sin trámites manuales con el proveedor, acelerando la entrega",
      "Elegir el proveedor sin revisar contratos",
      "Administrar el hardware sin ayuda del proveedor",
      "Configurar la red sin requerir permisos"
    ],
    "answer": 0,
    "exp": "El auto-servicio elimina cuellos de botella de aprovisionamiento; no significa operar hardware ni saltarse los controles de gobernanza."
  },
  {
    "id": "cloud-169",
    "module": "cloud",
    "topic": "Modelos de servicio",
    "q": "¿Qué es una nube híbrida y cuál es su motivo de negocio más habitual?",
    "options": [
      "Combinar infraestructura propia o de terceros con nube pública conectada, permitiendo mantener cargas donde mejor convenga y escalar el resto",
      "Una nube que solo funciona con un único proveedor",
      "Un data center sin conectividad externa",
      "Un tipo de almacenamiento de objetos de alta durabilidad"
    ],
    "answer": 0,
    "exp": "La nube híbrida integra entornos distintos con conectividad, dando flexibilidad de ubicación y salida controlada; no implica un solo proveedor ni falta de conectividad."
  },
  {
    "id": "cloud-170",
    "module": "cloud",
    "topic": "Alta disponibilidad",
    "q": "¿Qué diferencia hay entre alta disponibilidad (HA) y tolerancia a fallos?",
    "options": [
      "Son sinónimos exactos",
      "La HA solo aplica a redes y la tolerancia a fallos solo a aplicaciones",
      "La HA busca que el servicio siga operativo con componentes redundantes; la tolerancia a fallos evita prácticamente cualquier interrupción aunque falle un componente",
      "La tolerancia a fallos exige siempre despliegue multi-región"
    ],
    "answer": 2,
    "exp": "La HA reduce la probabilidad de interrupción con redundancia; la tolerancia a fallos exige redundancia total para que la interrupción sea prácticamente nula."
  },
  {
    "id": "cloud-171",
    "module": "cloud",
    "topic": "Alta disponibilidad",
    "q": "El SLA del balanceador declara alta disponibilidad, pero la aplicación sigue cayendo cuando falla una instancia. ¿Cuál es la causa más probable?",
    "options": [
      "El balanceador tiene muy poco ancho de banda",
      "La aplicación no tolera el fallo de una instancia (estado concentrado o sin escalado horizontal)",
      "Falta etiquetar los recursos",
      "La región tiene muy pocos servicios"
    ],
    "answer": 1,
    "exp": "El balanceador solo redistribuye tráfico; si la aplicación no puede operar sin esa instancia, el fallo persiste. La resiliencia debe diseñarse en la aplicación."
  },
  {
    "id": "cloud-172",
    "module": "cloud",
    "topic": "Costos en nube",
    "q": "Se programó el apagado de las instancias de pruebas al final del día, pero la factura mensual apenas se redujo. ¿Cuál es una causa probable que conviene revisar?",
    "options": [
      "Recursos que siguen generando gasto aunque las máquinas estén apagadas, como discos, direcciones IP y balanceadores",
      "Que el proveedor cobra por el número de zonas de disponibilidad disponibles",
      "Que las etiquetas de gobernanza aumentan el precio unitario",
      "Que apagar instancias anula automáticamente cualquier descuento existente"
    ],
    "answer": 0,
    "exp": "En la nube el gasto no vive solo en el cómputo encendido: discos, IP y balanceadores persisten y facturan; revisarlos suele explicar la factura que no baja."
  },
  {
    "id": "cloud-173",
    "module": "cloud",
    "topic": "Conectividad híbrida",
    "q": "El enlace híbrido entre el data center y la nube usa BGP. ¿Qué le aporta este protocolo al diseño de red?",
    "options": [
      "Cifrar el tráfico que circula por el enlace",
      "Anunciar y aprender rutas dinámicamente, permitiendo conmutación automática ante la caída de una ruta",
      "Balancear el tráfico entre instancias de la aplicación",
      "Aplicar políticas de presupuesto a los recursos"
    ],
    "answer": 1,
    "exp": "BGP intercambia rutas entre redes y reencamina el tráfico cuando una ruta cae; el cifrado, el balanceo y los presupuestos son funciones distintas."
  },
  {
    "id": "cloud-174",
    "module": "cloud",
    "topic": "Seguridad en nube",
    "q": "Un equipo administra decenas de servicios en la nube y mantiene un usuario administrador compartido para todos. ¿Cuál es el riesgo principal?",
    "options": [
      "La cuenta consume más almacenamiento",
      "Impide cifrar los datos",
      "Bloquea el escalado automático",
      "No hay trazabilidad por persona y un compromiso afecta a todo el entorno"
    ],
    "answer": 3,
    "exp": "Las cuentas compartidas anulan la trazabilidad y amplían el impacto de una fuga; conviene identidad individual y permisos mínimos."
  },
  {
    "id": "cloud-175",
    "module": "cloud",
    "topic": "Almacenamiento",
    "q": "¿Qué criterio conviene aplicar para mover datos antiguos a una clase de almacenamiento más económica sin afectar a las aplicaciones activas?",
    "options": [
      "Borrar todos los datos antiguos sin revisar requisitos",
      "Guardar todo en la clase más cara por seguridad",
      "Duplicar cada archivo en dos clases",
      "Definir una política de ciclo de vida que transicione objetos según antigüedad y patrón de acceso"
    ],
    "answer": 3,
    "exp": "Las políticas de ciclo de vida automatizan la transición por retención y patrón de acceso, manteniendo el acceso correcto y reduciendo costo."
  },
  {
    "id": "cloud-176",
    "module": "cloud",
    "topic": "RPO/RTO y DR",
    "q": "¿Qué diferencia hay entre RPO y RTO?",
    "options": [
      "RPO mide disponibilidad mensual y RTO mide el costo del desastre",
      "Ambos miden lo mismo con nombres distintos",
      "RPO es la pérdida máxima de datos tolerable; RTO es el tiempo máximo de inactividad aceptable",
      "RPO mide costos y RTO mide latencia"
    ],
    "answer": 2,
    "exp": "RPO define cuánta información puede perderse (datos) y RTO cuánto puede durar la interrupción (tiempo de servicio)."
  },
  {
    "id": "cloud-177",
    "module": "cloud",
    "topic": "Cloud-native",
    "q": "¿Qué aporta un pipeline de integración y despliegue continuo (CI/CD) a la entrega de software en la nube?",
    "options": [
      "Garantiza que la aplicación nunca tenga incidentes",
      "Elimina la necesidad de pruebas de regresión",
      "Sustituye al plan de recuperación ante desastres",
      "Automatiza compilación, pruebas y despliegue, reduciendo errores manuales y acortando el ciclo de entrega"
    ],
    "answer": 3,
    "exp": "El CI/CD automatiza y estandariza la entrega, detectando errores temprano; no elimina incidentes ni reemplaza pruebas ni DR."
  },
  {
    "id": "cloud-178",
    "module": "cloud",
    "topic": "Cloud-native",
    "q": "¿Qué patrón conviene usar para desacoplar una tarea de procesamiento de la carga que la origina y absorber picos?",
    "options": [
      "Cadena de llamadas síncronas anidadas",
      "Archivo compartido en disco de bloque",
      "Consulta directa a la base de datos primaria",
      "Cola de mensajes o tópico de eventos entre productor y consumidor"
    ],
    "answer": 3,
    "exp": "Las colas desacoplan productor y consumidor y amortiguan picos; el acoplamiento síncrono propaga los fallos y satura la primaria."
  },
  {
    "id": "cloud-179",
    "module": "cloud",
    "topic": "Gobernanza",
    "q": "¿Cuál es un indicador de una madura gobernanza de costos (FinOps) en la nube?",
    "options": [
      "La factura total es única y no se analiza",
      "Los costos se revisan una vez al año sin detalle",
      "Solo el área de finanzas ve la consola de costos",
      "Cada equipo conoce el costo de sus recursos y lo optimiza con datos compartidos entre finanzas, ingeniería y negocio"
    ],
    "answer": 3,
    "exp": "FinOps es colaborativo y basado en datos: visibilidad compartida y responsabilidad de cada equipo sobre su gasto."
  },
  {
    "id": "cloud-180",
    "module": "cloud",
    "topic": "Conectividad híbrida",
    "q": "¿Qué es una red privada en la nube (VPC/VNet) y para qué sirve?",
    "options": [
      "Un espacio de red aislado lógicamente donde desplegar recursos con control propio de tráfico",
      "Una conexión física dedicada al data center",
      "Un tipo de almacenamiento de alta disponibilidad",
      "Una política de presupuesto de la nube"
    ],
    "answer": 0,
    "exp": "La red privada aísla y segmenta los recursos frente a internet; su tráfico se gobierna mediante rutas y grupos de seguridad."
  },
  {
    "id": "cloud-181",
    "module": "cloud",
    "topic": "Seguridad en nube",
    "q": "¿Cuál es la mejor práctica frente a claves de acceso estáticas de larga duración en la nube?",
    "options": [
      "Duplicar las claves para tener respaldo",
      "Compartir una clave por equipo para simplificar",
      "Guardarlas también en el código fuente",
      "Usar credenciales temporales o roles con rotación automática en lugar de claves permanentes"
    ],
    "answer": 3,
    "exp": "Las credenciales temporales minimizan el impacto de una fuga y suelen rotarse solas; las claves permanentes y compartidas son un riesgo conocido."
  },
  {
    "id": "cloud-182",
    "module": "cloud",
    "topic": "Regiones y zonas",
    "q": "¿Por qué una organización puede necesitar más de una región para sus cargas críticas?",
    "options": [
      "Para reducir el número de zonas de disponibilidad",
      "Para evitar el uso de etiquetas de gobernanza",
      "Para eliminar la necesidad de backups",
      "Para acortar el tiempo de recuperación ante el fallo de una región completa y atender usuarios en distintas geografías"
    ],
    "answer": 3,
    "exp": "Multi-región protege frente a fallos de una región entera (DR) y acerca servicio a usuarios; no sustituye zonas ni elimina backups."
  },
  {
    "id": "cloud-183",
    "module": "cloud",
    "topic": "Almacenamiento",
    "q": "¿Qué es la durabilidad (durability) en un servicio de objetos y cómo influye en el diseño de respaldos?",
    "options": [
      "La velocidad máxima de lectura del objeto",
      "El número máximo de objetos por contenedor",
      "La probabilidad de que un objeto se mantenga íntegro con el tiempo; conviene combinarla con copias en otra región",
      "El costo por cada operación de escritura"
    ],
    "answer": 2,
    "exp": "La durabilidad alta reduce la pérdida interna de objetos, pero no sustituye las copias geográficamente separadas ante desastres regionales."
  },
  {
    "id": "cloud-184",
    "module": "cloud",
    "topic": "Migración",
    "q": "Se migra una aplicación con una ventana de mantenimiento muy corta. ¿Qué técnica conviene usar para minimizar la interrupción?",
    "options": [
      "Detener la aplicación una semana para exportar todo manualmente",
      "Reiniciar el entorno origen cada noche durante la migración",
      "Desactivar los backups durante la ventana",
      "Replicación en caliente de datos con conmutación corta al momento del corte"
    ],
    "answer": 3,
    "exp": "La replicación previa acerca los datos al destino y el cutover se reduce a conmutar el apuntamiento, minimizando la parada."
  },
  {
    "id": "cloud-185",
    "module": "cloud",
    "topic": "Gobernanza",
    "q": "¿Qué es una landing zone en el contexto de la nube?",
    "options": [
      "Un área geográfica de replicación de datos",
      "Una clase de almacenamiento de baja temperatura",
      "Un tipo de balanceador de carga",
      "Un entorno base preconfigurado (red, identidad, políticas y cuentas) preparado para alojar cargas de forma gobernada"
    ],
    "answer": 3,
    "exp": "La landing zone estandariza desde el inicio la base de red, identidad y gobernanza, evitando improvisar en cada proyecto."
  },
  {
    "id": "cloud-186",
    "module": "cloud",
    "topic": "Costos en nube",
    "q": "¿Cuál es un riesgo típico de la falta de gobernanza o del llamado shadow IT en la nube?",
    "options": [
      "Reducción automática de la factura",
      "Mejora del cumplimiento normativo",
      "Aumento de la disponibilidad",
      "Recursos huérfanos creados sin control que generan gasto y quedarán fuera de políticas de seguridad"
    ],
    "answer": 3,
    "exp": "Sin gobernanza aparecen recursos sin dueño ni políticas que consumen presupuesto y amplían el riesgo; no aportan cumplimiento ni disponibilidad."
  },
  {
    "id": "cloud-187",
    "module": "cloud",
    "topic": "Alta disponibilidad",
    "q": "Se necesita actualizar la aplicación sin interrumpir el servicio a los usuarios. ¿Qué patrón de despliegue conviene usar?",
    "options": [
      "Despliegue blue-green o canario: se prepara la nueva versión al lado y se conmuta el tráfico tras validarla",
      "Detener todo el servicio durante la ventana de actualización",
      "Subir los cambios directamente en las instancias en producción sin pruebas",
      "Apagar el balanceador de carga durante el despliegue"
    ],
    "answer": 0,
    "exp": "Blue-green o canario permite revertir de inmediato si algo falla, manteniendo el servicio disponible durante el cambio."
  },
  {
    "id": "cloud-188",
    "module": "cloud",
    "topic": "Seguridad en nube",
    "q": "¿Por qué se recomienda separar los entornos de producción y pruebas (cuentas o redes distintas)?",
    "options": [
      "Para reducir la latencia entre ambos entornos",
      "Para eliminar la necesidad de copias de seguridad",
      "Para limitar el impacto de un incidente en pruebas y aplicar controles distintos a producción",
      "Para aumentar el número de zonas disponibles"
    ],
    "answer": 2,
    "exp": "La separación acota el alcance de compromisos y permite controles más estrictos en producción; no mejora latencia ni sustituye backups."
  },
  {
    "id": "cloud-189",
    "module": "cloud",
    "topic": "RPO/RTO y DR",
    "q": "Un simulacro de recuperación revela que el backup restaura, pero tarda 12 horas y el RTO es de 2 horas. ¿Qué conclusión es correcta?",
    "options": [
      "El backup está bien porque el archivo se restauró",
      "Hay que aumentar el RTO del negocio a 12 horas sin analizar",
      "Basta con tener más snapshots diarios",
      "El plan de DR no cumple el RTO; hay que rediseñar la recuperación (réplicas listas, optimización de restauración)"
    ],
    "answer": 3,
    "exp": "Restaurar no es suficiente si excede el RTO; el plan debe ajustarse para cumplir el tiempo objetivo, por ejemplo con standby listo."
  },
  {
    "id": "cloud-190",
    "module": "cloud",
    "topic": "Modelos de servicio",
    "q": "¿Cuál de estas cargas es la más indicada para consumirse como SaaS en lugar de construirse internamente?",
    "options": [
      "Herramienta genérica de correo y colaboración de oficina sin necesidades diferenciadoras",
      "Núcleo transaccional propio que diferencia el negocio",
      "Aplicación con reglas de negocio únicas del sector",
      "Pipeline de datos propietario con lógica exclusiva"
    ],
    "answer": 0,
    "exp": "Las herramientas genéricas sin diferenciación se consumen como SaaS aprovechando el mantenimiento del proveedor; la lógica diferenciadora suele justificar construir."
  },
  {
    "id": "cloud-191",
    "module": "cloud",
    "topic": "Seguridad en nube",
    "q": "¿Qué es la defensa en profundidad aplicada a una arquitectura en la nube?",
    "options": [
      "Cifrar todos los datos varias veces con el mismo algoritmo",
      "Confiar en un único control muy robusto",
      "Ubicar todos los servicios en una sola zona de disponibilidad",
      "Combinar múltiples controles independientes (red, identidad, aplicación, datos) para que el fallo de uno no deje el sistema expuesto"
    ],
    "answer": 3,
    "exp": "La defensa en profundidad apila capas de control complementarias; depender de un solo control concentra el riesgo en ese punto."
  },
  {
    "id": "cloud-192",
    "module": "cloud",
    "topic": "Cloud-native",
    "q": "¿Qué característica principal diferencia a un contenedor de una máquina virtual?",
    "options": [
      "Incluye un sistema operativo completo por cada instancia",
      "No puede empaquetar dependencias de aplicación",
      "Requiere hipervisor propio para ejecutarse",
      "Comparte el kernel del host, siendo más ligero y portátil que una VM con sistema operativo completo"
    ],
    "answer": 3,
    "exp": "Los contenedores aíslan procesos sobre el kernel compartido del host, lo que los hace más ligeros; las VM incluyen su propio SO."
  },
  {
    "id": "cloud-193",
    "module": "cloud",
    "topic": "Gobernanza",
    "q": "¿Qué función cumplen las políticas (policies) de gobernanza en una cuenta de nube?",
    "options": [
      "Asignar IP privadas a las instancias",
      "Balancear automáticamente el tráfico entre zonas",
      "Evitar o corregir despliegues que incumplen estándares, como regiones no autorizadas o recursos sin cifrado",
      "Comprimir los backups"
    ],
    "answer": 2,
    "exp": "Las políticas actúan como controles automáticos de cumplimiento; el resto de opciones corresponden a redes, balanceo o almacenamiento."
  },
  {
    "id": "cloud-194",
    "module": "cloud",
    "topic": "Resiliencia y backup",
    "q": "¿Por qué conviene guardar copias de seguridad en una región distinta de la región de producción?",
    "options": [
      "Para reducir el RPO a cero automáticamente",
      "Para eliminar la necesidad de cifrar las copias",
      "Para que un fallo o incidente que afecte a la región no destruya también las copias",
      "Para mejorar el rendimiento de la base de datos"
    ],
    "answer": 2,
    "exp": "La copia geográficamente separada protege ante desastres regionales; no garantiza RPO cero ni sustituye el cifrado."
  },
  {
    "id": "cloud-195",
    "module": "cloud",
    "topic": "Costos en nube",
    "q": "¿Qué representa el TCO (costo total de propiedad) y por qué se calcula antes de migrar a la nube?",
    "options": [
      "Solo el precio de las instancias elegidas en la nube",
      "Suma infraestructura, licencias, operación y personal para comparar de forma justa el escenario on-premise frente a la nube",
      "Únicamente el costo de transferencia de datos hacia la nube",
      "El precio del nivel de soporte premium del proveedor"
    ],
    "answer": 1,
    "exp": "El TCO evita comparar solo el precio de las VMs: incluye operación, licencias y personal, que suelen cambiar de forma relevante al migrar."
  },
  {
    "id": "cloud-196",
    "module": "cloud",
    "topic": "Migración",
    "q": "Durante la migración se detectan grandes volúmenes de datos duplicados y obsoletos acumulados con los años. ¿Qué conviene hacer?",
    "options": [
      "Copiarlos igualmente para no perder nada, aunque nunca se usen",
      "Depurar los datos antes de transferirlos, reduciendo tiempo, costo y riesgo de llevar basura a la nube",
      "Borrar todos los datos sin revisar requisitos de retención",
      "Esperar a que la nube los limpie automáticamente"
    ],
    "answer": 1,
    "exp": "Depurar antes de mover acorta ventanas y costos; aún así hay que respetar las políticas de retención antes de borrar."
  },
  {
    "id": "cloud-197",
    "module": "cloud",
    "topic": "Operación en nube",
    "q": "¿Qué es un error budget y cómo se usa en la operación de servicios en la nube?",
    "options": [
      "Un límite de gasto que impide crear más recursos",
      "La tolerancia calculada de fallos derivada de un objetivo de disponibilidad, que regula cuánto se puede desplegar sin comprometer el SLO",
      "La cantidad máxima de datos que se puede perder",
      "El presupuesto destinado a contratar más personal"
    ],
    "answer": 1,
    "exp": "El error budget traduce el SLO en margen de error: si se agota, se ralentizan los despliegues para recuperar la confiabilidad."
  },
  {
    "id": "cloud-198",
    "module": "cloud",
    "topic": "Seguridad en nube",
    "q": "¿Qué aporta la segmentación de red (microsegmentación) en una arquitectura en la nube?",
    "options": [
      "Eliminar la necesidad de autenticar a los usuarios",
      "Aumentar el ancho de banda del enlace híbrido",
      "Restringir el movimiento lateral limitando qué componentes pueden comunicarse entre sí",
      "Reducir el costo de las transferencias de salida"
    ],
    "answer": 2,
    "exp": "La microsegmentación acota el tráfico permitido por componente, conteniendo incidentes; no afecta autenticación, ancho de banda ni precios de transferencia."
  },
  {
    "id": "cloud-199",
    "module": "cloud",
    "topic": "Conectividad híbrida",
    "q": "¿Qué es SD-WAN y por qué lo consideran las organizaciones con múltiples sedes conectadas a la nube?",
    "options": [
      "Una forma de gestionar y optimizar varios enlaces de red (MPLS, internet, LTE) con políticas centralizadas",
      "Un tipo de balanceador de carga en la nube",
      "Un protocolo de cifrado de datos en reposo",
      "Un servicio de respaldo automatizado"
    ],
    "answer": 0,
    "exp": "SD-WAN orquesta múltiples enlaces con políticas centrales, mejorando el uso del ancho de banda y la resiliencia de las sedes."
  },
  {
    "id": "cloud-200",
    "module": "cloud",
    "topic": "Resiliencia y backup",
    "q": "Una aplicación de mensajería debe seguir aceptando eventos aunque un servicio dependiente esté caído. ¿Qué patrón de resiliencia conviene aplicar?",
    "options": [
      "Bloquear toda la aplicación hasta que el dependiente vuelva",
      "Descartar los eventos sin registrar",
      "Duplicar el dependiente sin límite de instancias",
      "Degradación elegante con colas o reintentos acotados, procesando lo pendiente cuando el dependiente se recupere"
    ],
    "answer": 3,
    "exp": "Degradar y desacoplar con colas mantiene el servicio disponible y recupera el procesamiento después; bloquear toda la app viola los objetivos de disponibilidad."
  },
  {
    "id": "data-101",
    "module": "data",
    "topic": "Tipos de backup",
    "q": "Con un backup full los domingos e incrementales diarios, para restaurar el estado del jueves por la noche, ¿qué secuencia hace falta?",
    "options": [
      "Únicamente el incremental del jueves",
      "El full del domingo y los incrementales del lunes al jueves",
      "El full del domingo y el incremental del viernes",
      "Solo el snapshot diario del jueves"
    ],
    "answer": 1,
    "exp": "La restauración hasta un punto intermedio requiere el full base más todos los incrementales posteriores hasta el punto deseado."
  },
  {
    "id": "data-102",
    "module": "data",
    "topic": "Tipos de backup",
    "q": "¿Cuál es la principal ventaja de un backup incremental diario frente a un full diario?",
    "options": [
      "Reduce el tiempo y el ancho de banda diarios al copiar solo lo cambiado, a costa de una restauración más larga",
      "Reduce siempre el tiempo de restauración",
      "Elimina la necesidad de un backup full base",
      "Permite prescindir de la política de retención"
    ],
    "answer": 0,
    "exp": "El incremental copia solo los cambios, por eso aligera la ventana de backup, pero la restauración acumula más puntos a aplicar."
  },
  {
    "id": "data-103",
    "module": "data",
    "topic": "Tipos de backup",
    "q": "En un esquema con full semanal y diferencial diario, el backup diferencial del sábado contiene:",
    "options": [
      "Solo los cambios ocurridos desde el diferencial del viernes",
      "El contenido íntegro del full anterior",
      "Todos los cambios desde el último full",
      "Únicamente los archivos eliminados durante la semana"
    ],
    "answer": 2,
    "exp": "El diferencial acumula todos los cambios desde el último full, por lo que crece día a día y simplifica la restauración."
  },
  {
    "id": "data-104",
    "module": "data",
    "topic": "Tipos de backup",
    "q": "¿Qué riesgo principal tiene apoyarse en una cadena larga de incrementales?",
    "options": [
      "Que un punto corrupto o ausente rompa la cadena y bloquee la restauración completa",
      "Que ocupe más espacio que un full equivalente",
      "Que impida cifrar las copias",
      "Que no permita deduplicar los datos"
    ],
    "answer": 0,
    "exp": "Cada incremental depende de los anteriores: un hueco o corrupción rompe la cadena y obliga a retroceder a un full válido."
  },
  {
    "id": "data-105",
    "module": "data",
    "topic": "Tipos de backup",
    "q": "Un backup full sintético se obtiene:",
    "options": [
      "Comprimiendo el snapshot más reciente",
      "Repitiendo el full completo contra la fuente cada noche",
      "Combinando en el destino el full base con los incrementales, sin releer toda la fuente",
      "Ampliando la retención del repositorio"
    ],
    "answer": 2,
    "exp": "El full sintético se ensambla en el repositorio a partir del full base y los incrementales, liberando ventanas sin tocar la fuente."
  },
  {
    "id": "data-106",
    "module": "data",
    "topic": "Tipos de backup",
    "q": "¿Cuándo conviene reiniciar (rebase) la cadena de incrementales?",
    "options": [
      "Cuando la cadena crece tanto que la ventana de restauración o el riesgo acumulado superan el objetivo",
      "Solo cuando cambia el proveedor de red",
      "Para habilitar la deduplicación del repositorio",
      "Porque los incrementales no se pueden restaurar más de 30 días"
    ],
    "answer": 0,
    "exp": "Cadenas muy largas alargan la restauración y aumentan el impacto de un punto dañado, así que conviene recomenzar con un full nuevo."
  },
  {
    "id": "data-107",
    "module": "data",
    "topic": "Tipos de backup",
    "q": "Un backup incremental a nivel de bloque copia:",
    "options": [
      "Todos los bloques del volumen",
      "Solo los metadatos del sistema de archivos",
      "Los archivos completos que hayan cambiado, aunque sea un byte",
      "Los bloques modificados desde la última ejecución"
    ],
    "answer": 3,
    "exp": "A nivel de bloque solo se transfieren los bloques cambiados, lo que resulta mucho más eficiente que recopilar archivos completos."
  },
  {
    "id": "data-108",
    "module": "data",
    "topic": "Tipos de backup",
    "q": "¿En qué caso resulta más adecuado un backup a nivel de archivo frente a uno a nivel de bloque?",
    "options": [
      "Cuando se requiere replicación síncrona al sitio secundario",
      "Cuando solo se necesitan ciertos archivos o carpetas y no una imagen completa del volumen",
      "Cuando el objetivo es lograr un RTO de cero",
      "Cuando no hay disponibilidad de red alguna"
    ],
    "answer": 1,
    "exp": "El backup a nivel de archivo es natural cuando el alcance son rutas concretas, mientras que a nivel de bloque se protege el volumen completo."
  },
  {
    "id": "data-109",
    "module": "data",
    "topic": "Snapshot vs backup",
    "q": "¿Por qué un snapshot no debe considerarse una estrategia de backup completa?",
    "options": [
      "Porque siempre ocupa más espacio que un backup",
      "Porque no permite ninguna restauración",
      "Porque reside en el mismo sistema de origen y no protege ante fallo del almacenamiento, borrado o cifrado malicioso",
      "Porque no admite cifrado"
    ],
    "answer": 2,
    "exp": "El snapshot comparte destino con los datos originales: no sobrevive al fallo del array ni a un borrado o cifrado del sistema de origen."
  },
  {
    "id": "data-110",
    "module": "data",
    "topic": "Snapshot vs backup",
    "q": "Al crear un snapshot sobre un volumen en producción, ¿qué suele ocurrir?",
    "options": [
      "Hay un impacto de rendimiento inicial y el snapshot crece con cada modificación posterior",
      "El volumen se duplica físicamente de inmediato",
      "La aplicación se detiene automáticamente",
      "Los datos se comprimen a la mitad"
    ],
    "answer": 0,
    "exp": "Los snapshots afectan al rendimiento al tomarse y van creciendo con los cambios, por eso se plantean para puntos de corto plazo."
  },
  {
    "id": "data-111",
    "module": "data",
    "topic": "Snapshot vs backup",
    "q": "La técnica copy-on-write aplicada a un snapshot consiste en:",
    "options": [
      "Copiar todo el volumen dos veces",
      "Preservar el bloque original aparte antes de sobrescribirlo, para mantener el estado del punto",
      "Comprimir los bloques antes de escribir",
      "Replicar el volumen a otro sitio en tiempo real"
    ],
    "answer": 1,
    "exp": "Copy-on-write guarda el estado previo del bloque antes de modificarlo, lo que permite crear el punto sin duplicar todo el volumen."
  },
  {
    "id": "data-112",
    "module": "data",
    "topic": "Snapshot vs backup",
    "q": "Una estrategia basada solo en snapshots del mismo array tiene como debilidad crítica:",
    "options": [
      "Genera copias excesivamente grandes",
      "No admite restauración parcial",
      "Impide cifrar los datos",
      "No cubre el fallo del propio almacenamiento ni las acciones maliciosas que afectan al sistema de origen"
    ],
    "answer": 3,
    "exp": "Al estar en el mismo destino que la producción, un fallo del storage o un cifrado masivo afecta a datos y snapshots a la vez."
  },
  {
    "id": "data-113",
    "module": "data",
    "topic": "Snapshot vs backup",
    "q": "Los snapshots ofrecidos por un proveedor de nube suelen:",
    "options": [
      "Residir en la misma región y cuenta, por lo que no sustituyen un backup con retención propia e inmutabilidad",
      "Ser inmutables de forma predeterminada sin configuración",
      "Replicarse automáticamente a otro proveedor",
      "Garantizar un RTO de cero"
    ],
    "answer": 0,
    "exp": "Un snapshot en la nube sigue atado a la cuenta y la región, así que no cubre fallos de cuenta, pérdida lógica ni purgas accidentales."
  },
  {
    "id": "data-114",
    "module": "data",
    "topic": "Snapshot vs backup",
    "q": "Para bases de datos, la diferencia clave entre un snapshot crash-consistent y application-consistent es:",
    "options": [
      "El crash-consistent garantiza todas las transacciones completas",
      "Ambos producen el mismo resultado en cualquier caso",
      "El application-consistent coordina con la aplicación para dejar transacciones y archivos coherentes",
      "El application-consistent exige apagar la base de datos de forma permanente"
    ],
    "answer": 2,
    "exp": "El application-consistent detiene o coordina la aplicación para volcar estado coherente; el crash-consistent solo refleja el disco como quedó tras un corte abrupto."
  },
  {
    "id": "data-115",
    "module": "data",
    "topic": "Snapshot vs backup",
    "q": "En una estrategia por capas, los snapshots suelen destinarse a:",
    "options": [
      "La retención a largo plazo exigida por auditoría",
      "Puntos de restauración inmediatos a muy corto plazo, de minutos u horas",
      "Sustituir la replicación al sitio secundario",
      "El archivado legal indefinido"
    ],
    "answer": 1,
    "exp": "Por su velocidad y su naturaleza en el mismo destino, los snapshots cubren la recuperación inmediata, no la retención ni el archivado."
  },
  {
    "id": "data-116",
    "module": "data",
    "topic": "Replicación",
    "q": "La replicación síncrona garantiza que:",
    "options": [
      "El destino confirma la escritura antes de que el origen responda al cliente, con pérdida teórica cero",
      "El RPO sea siempre de 24 horas",
      "No se necesite ancho de banda",
      "Los datos viajen comprimidos por defecto"
    ],
    "answer": 0,
    "exp": "En la replicación síncrona la escritura solo se confirma cuando también está en el destino, de ahí la pérdida teórica nula."
  },
  {
    "id": "data-117",
    "module": "data",
    "topic": "Replicación",
    "q": "¿Por qué la replicación síncrona se limita normalmente a distancias cortas?",
    "options": [
      "Porque el cifrado no soporta distancias superiores a 100 km",
      "Porque los protocolos de réplica solo admiten fibra local",
      "Porque consume más espacio en el destino",
      "Porque la latencia del enlace se suma al tiempo de escritura y degrada el rendimiento de la aplicación"
    ],
    "answer": 3,
    "exp": "Cada escritura debe esperar la confirmación remota, así que la latencia se traduce directamente en menor rendimiento en el origen."
  },
  {
    "id": "data-118",
    "module": "data",
    "topic": "Replicación",
    "q": "Con replicación asincrónica, la ventana de pérdida de datos ante un fallo del origen incluye:",
    "options": [
      "La totalidad de los datos almacenados en el destino",
      "Los datos escritos en el origen que aún no se habían propagado al destino",
      "Solo los datos ya confirmados en el destino",
      "Ninguno, al igual que en la replicación síncrona"
    ],
    "answer": 1,
    "exp": "En modo asincrónico el origen responde sin esperar al destino, por lo que al caer se pierden los cambios aún en tránsito."
  },
  {
    "id": "data-119",
    "module": "data",
    "topic": "Replicación",
    "q": "¿Cuál es la diferencia fundamental entre replicación y backup?",
    "options": [
      "La replicación refleja el estado actual sin puntos históricos, de modo que un borrado o cifrado se propaga al destino",
      "El backup no necesita red",
      "La replicación guarda puntos en el tiempo con retención",
      "El backup se aplica en tiempo real a cada escritura"
    ],
    "answer": 0,
    "exp": "La réplica no conserva versiones anteriores, por eso no sirve por sí sola para revertir un borrado o un cifrado masivo."
  },
  {
    "id": "data-120",
    "module": "data",
    "topic": "Replicación",
    "q": "En una réplica activo-activa entre dos sitios, el punto a planificar es:",
    "options": [
      "La compresión de los snapshots",
      "El inventario de cintas",
      "La resolución de conflictos de escritura simultánea en ambos sitios",
      "La expiración de los catálogos"
    ],
    "answer": 2,
    "exp": "Con escrituras en ambos lados pueden surgir divergencias que exigen reglas explícitas de resolución de conflictos."
  },
  {
    "id": "data-121",
    "module": "data",
    "topic": "Replicación",
    "q": "Replicar el repositorio de backup a otra región permite:",
    "options": [
      "Eliminar la necesidad de deduplicar",
      "Disponer de una copia remota sin re-ejecutar el backup contra la fuente",
      "Reducir el RTO a cero automáticamente",
      "Evitar por completo el cifrado de las copias"
    ],
    "answer": 1,
    "exp": "La replicación de repositorios traslada datos ya copiados, añadiendo una copia remota sin cargar de nuevo la fuente."
  },
  {
    "id": "data-122",
    "module": "data",
    "topic": "Replicación",
    "q": "En replicación asincrónica por intervalos, el RPO quedará determinado por:",
    "options": [
      "La longitud del intervalo de propagación configurado",
      "El tamaño del disco de origen únicamente",
      "La cantidad de snapshots existentes",
      "El plazo de retención legal"
    ],
    "answer": 0,
    "exp": "Si los cambios se propagan cada N minutos, la pérdida máxima posible ronda ese intervalo configurado."
  },
  {
    "id": "data-123",
    "module": "data",
    "topic": "Replicación",
    "q": "Si el origen se infecta de ransomware y hay replicación asincrónica en marcha, la réplica:",
    "options": [
      "Detenerse sola automáticamente",
      "Quedar inmune porque está en otro sitio",
      "Borrar los datos maliciosos al replicarlos",
      "Recibirá también los datos cifrados, por lo que debe poder revertirse a un punto previo o protegerse con copias inmutables"
    ],
    "answer": 3,
    "exp": "La réplica copia cambios sin juzgar su contenido, por eso necesita puntos reversibles y copias inmutables para no heredar el cifrado."
  },
  {
    "id": "data-124",
    "module": "data",
    "topic": "Inmutabilidad y air-gap",
    "q": "¿Qué garantiza exactamente una política de inmutabilidad sobre las copias?",
    "options": [
      "Que los datos viajen cifrados en tránsito",
      "Que el backup se ejecute más rápido",
      "Que durante la ventana configurada nadie pueda modificar ni eliminar los objetos, incluidos los administradores",
      "Que el catálogo se verifique de forma automática"
    ],
    "answer": 2,
    "exp": "La inmutabilidad bloquea cambios y borrados durante la retención definida, incluso para cuentas con privilegios elevados."
  },
  {
    "id": "data-125",
    "module": "data",
    "topic": "Inmutabilidad y air-gap",
    "q": "¿Cuál es el riesgo residual más importante de las copias inmutables?",
    "options": [
      "Que una cuenta privilegiada pueda acortar o desactivar la retención antes de que venza",
      "Que ocupen más espacio que las copias normales",
      "Que no admitan cifrado",
      "Que impidan la deduplicación"
    ],
    "answer": 0,
    "exp": "Si un atacante toma el control de la administración, puede alterar la política antes de que venza la ventana de protección."
  },
  {
    "id": "data-126",
    "module": "data",
    "topic": "Inmutabilidad y air-gap",
    "q": "Un backup air-gapped (aislado) se caracteriza por:",
    "options": [
      "Estar siempre en línea y replicado en tiempo real",
      "Estar separado de la red principal, de forma lógica o física, hasta el momento de utilizarlo",
      "Usar exclusivamente cinta sin inventario",
      "Estar cifrado con una única clave compartida"
    ],
    "answer": 1,
    "exp": "El aislamiento impide que un atacante con acceso a la red alcance la copia, ya sea por corte físico o por separación lógica."
  },
  {
    "id": "data-127",
    "module": "data",
    "topic": "Inmutabilidad y air-gap",
    "q": "¿En qué se diferencian la inmutabilidad a nivel de objeto y a nivel de repositorio?",
    "options": [
      "Que a nivel de repositorio se protege todo el conjunto, incluidos índices y metadatos, durante la ventana",
      "Que a nivel de objeto impide leer los datos",
      "Que no existe inmutabilidad a nivel de repositorio",
      "Que a nivel de objeto vale para siempre sin configuración"
    ],
    "answer": 0,
    "exp": "Bloquear el repositorio completo protege también el índice y los metadatos, mientras que el bloqueo por objeto es más selectivo."
  },
  {
    "id": "data-128",
    "module": "data",
    "topic": "Inmutabilidad y air-gap",
    "q": "En unidades de cinta, la tecnología WORM implica:",
    "options": [
      "Que la cinta se cifra automáticamente",
      "Que la cinta se replica en tiempo real",
      "Que la cinta no necesita inventario",
      "Que la unidad impide sobrescribir o borrar el medio durante la retención configurada"
    ],
    "answer": 3,
    "exp": "WORM (write once, read many) impide sobrescribir el medio mientras dure la retención, lo que lo hace apto para copias de cumplimiento."
  },
  {
    "id": "data-129",
    "module": "data",
    "topic": "Inmutabilidad y air-gap",
    "q": "¿Cómo se debe manejar la necesidad de purgar una copia protegida por inmutabilidad antes de tiempo?",
    "options": [
      "Desactivando la política sin dejar rastro",
      "Mediante un procedimiento excepcional documentado, con aprobación y registro de auditoría",
      "Borrando los archivos directamente desde el sistema de archivos",
      "No es posible bajo ninguna circunstancia y hay que esperar siempre"
    ],
    "answer": 1,
    "exp": "Toda excepción debe quedar controlada y trazable; el borrado directo o silencioso anularía el valor de la inmutabilidad."
  },
  {
    "id": "data-130",
    "module": "data",
    "topic": "Inmutabilidad y air-gap",
    "q": "Un ataque cifró los datos de producción el día 10 y existe una copia inmutable con retención de 30 días. ¿Cuál es la acción correcta?",
    "options": [
      "Restaurar desde un punto anterior al compromiso que el atacante no pudo alterar",
      "Restaurar el snapshot del día 10, ya cifrado",
      "Esperar a que expire la inmutabilidad",
      "Desactivar la retención para acelerar la recuperación"
    ],
    "answer": 0,
    "exp": "La inmutabilidad preserva puntos previos al incidente, que son los únicos con garantía de no haber sido tocados."
  },
  {
    "id": "data-131",
    "module": "data",
    "topic": "Inmutabilidad y air-gap",
    "q": "Para blindar las políticas de inmutabilidad conviene:",
    "options": [
      "Usar una única cuenta compartida por todo el equipo",
      "Deshabilitar los registros de auditoría por rendimiento",
      "Exigir MFA, roles separados y auditoría de cambios sobre las cuentas que pueden modificar la retención",
      "Aumentar el nivel de compresión de las copias"
    ],
    "answer": 2,
    "exp": "Separar roles, exigir MFA y auditar cambios reduce la probabilidad de que un atacante altere la política de protección."
  },
  {
    "id": "data-132",
    "module": "data",
    "topic": "Ransomware y recuperación",
    "q": "Ante un incidente de ransomware confirmado, ¿cuál es el primer paso sobre las copias?",
    "options": [
      "Restaurar la copia más reciente sin verificarla",
      "Aislar el entorno, identificar el punto de infección y restaurar desde una copia inmutable verificada anterior al incidente",
      "Pagar el rescate para obtener la clave",
      "Reinstalar el sistema y confiar en los datos en disco"
    ],
    "answer": 1,
    "exp": "Primero se contiene el incidente y se determina hasta dónde llegó, para restaurar desde un punto limpio y verificado."
  },
  {
    "id": "data-133",
    "module": "data",
    "topic": "Ransomware y recuperación",
    "q": "¿Por qué conviene restaurar primero en un entorno aislado antes de volver a producción?",
    "options": [
      "Para comprobar que la copia está limpia y que el entorno no se vuelve a infectar de inmediato",
      "Porque ahorra espacio en el repositorio",
      "Porque la restauración en producción no está permitida",
      "Para cumplir el tamaño máximo de los snapshots"
    ],
    "answer": 0,
    "exp": "La restauración aislada permite validar integridad y limpieza sin arriesgar a reinfectar el entorno productivo."
  },
  {
    "id": "data-134",
    "module": "data",
    "topic": "Ransomware y recuperación",
    "q": "El ransomware cifra también las copias cuando comparten credenciales y destino con la producción. La medida preventiva esencial es:",
    "options": [
      "Usar el mismo usuario de dominio para todo",
      "Deshabilitar el cifrado de las copias",
      "Aumentar la frecuencia del backup en el mismo destino",
      "Separar identidades y destinos, con privilegios mínimos y sin que el usuario de producción pueda tocar las copias"
    ],
    "answer": 3,
    "exp": "Con privilegios mínimos y separación de credenciales, el atacante no puede alcanzar ni alterar las copias de seguridad."
  },
  {
    "id": "data-135",
    "module": "data",
    "topic": "Ransomware y recuperación",
    "q": "Como mecanismo temprano de detección de cifrado masivo, una técnica habitual es:",
    "options": [
      "Aumentar la retención a diez años",
      "Deshabilitar el registro de eventos",
      "Colocar archivos señuelo (canaries) cuya modificación delata una cifración no autorizada",
      "Replicar todo en tiempo real sin copias inmutables"
    ],
    "answer": 2,
    "exp": "Los archivos canary no tienen uso legítimo: si alguien los modifica, señala cifrado o manipulación masiva en curso."
  },
  {
    "id": "data-136",
    "module": "data",
    "topic": "Ransomware y recuperación",
    "q": "Si una infección permanece sin detectarse varios días, ¿qué impacto tiene sobre la recuperación?",
    "options": [
      "Ninguno: la última copia siempre resulta válida",
      "Hay que retroceder más atrás en el tiempo, por lo que se necesitan puntos previos verificados y retención suficiente",
      "Se reduce el RTO automáticamente",
      "Los snapshots se purgan solos al detectar el malware"
    ],
    "answer": 1,
    "exp": "Cuanto más larga la infección no detectada, más atrás hay que volver para encontrar un punto limpio, lo que exige retención y verificación adecuadas."
  },
  {
    "id": "data-137",
    "module": "data",
    "topic": "Ransomware y recuperación",
    "q": "En el plan de defensa, el servidor de backup debe tratarse como:",
    "options": [
      "Un activo crítico endurecido, con segmentación, mínimo privilegio y monitoreo, al ser un objetivo prioritario",
      "Un servidor más sin importancia especial",
      "Un equipo que no requiere parches",
      "Un destino compartido con toda la plantilla"
    ],
    "answer": 0,
    "exp": "Quien controla el backup controla la recuperación, así que el servidor de respaldo se endurece y segmenta como un activo crítico."
  },
  {
    "id": "data-138",
    "module": "data",
    "topic": "Ransomware y recuperación",
    "q": "Respecto a los datos restaurados tras un incidente, la postura recomendada es:",
    "options": [
      "Asumir que, si el backup terminó bien, están íntegros",
      "Borrar todas las copias anteriores por seguridad",
      "Desactivar la inmutabilidad para revisar más rápido",
      "No darlos por válidos hasta verificar su integridad y funcionalidad, porque pudieron alterarse antes de cifrarse"
    ],
    "answer": 3,
    "exp": "La corrupción o el cifrado previos pueden no ser visibles a simple vista, por eso se verifica antes de dar el servicio por recuperado."
  },
  {
    "id": "data-139",
    "module": "data",
    "topic": "Retención y cumplimiento",
    "q": "Si el negocio debe conservar registros durante siete años por obligación normativa, la política de backup debe:",
    "options": [
      "Incluir una capa de retención mínima de siete años en un medio adecuado, con verificación periódica",
      "Conservar solo 30 días para ahorrar costes",
      "Aplicarse únicamente a los snapshots",
      "Eliminar los datos al cumplir un año"
    ],
    "answer": 0,
    "exp": "La retención mínima debe cubrir el plazo legal en un medio apto para archivado, no solo en el tier de restauración rápida."
  },
  {
    "id": "data-140",
    "module": "data",
    "topic": "Retención y cumplimiento",
    "q": "Un hold legal (retención por litigio o investigación) implica que:",
    "options": [
      "Se acortan los plazos de retención",
      "Se suspende la expiración automática de los datos relevantes hasta que se levante el hold",
      "Se eliminan las copias más antiguas",
      "Se duplica la frecuencia de backup"
    ],
    "answer": 1,
    "exp": "El bloqueo legal impide la purga automática de lo relevante hasta que la autoridad o el equipo legal levante la retención."
  },
  {
    "id": "data-141",
    "module": "data",
    "topic": "Retención y cumplimiento",
    "q": "Cuando la normativa exige un mínimo y la política interna es más corta, procede:",
    "options": [
      "Aplicar el más corto por eficiencia",
      "Aplicar el que decida el administrador",
      "Aplicar el plazo más exigente, es decir el más largo, para no incumplir",
      "No aplicar ninguno hasta que haya una auditoría"
    ],
    "answer": 2,
    "exp": "Prevalece siempre el requisito más estricto: incumplir el mínimo legal expone a sanciones, así que se adopta el plazo más largo."
  },
  {
    "id": "data-142",
    "module": "data",
    "topic": "Retención y cumplimiento",
    "q": "¿Qué riesgo conlleva una retención excesiva de copias?",
    "options": [
      "Mayor superficie de ataque, más coste y más complejidad para localizar datos ante una petición legal",
      "Menor riesgo al haber más copias disponibles",
      "Mejora automática del RTO",
      "Elimina la necesidad de cifrar"
    ],
    "answer": 0,
    "exp": "Retener más de lo necesario encarece el storage, amplía el objetivo de ataque y dificulta responder a solicitudes de supresión o búsqueda."
  },
  {
    "id": "data-143",
    "module": "data",
    "topic": "Retención y cumplimiento",
    "q": "Un derecho de supresión de datos personales en una plataforma de correo afecta a las copias porque:",
    "options": [
      "Las copias quedan exentas de cualquier normativa",
      "Solo aplica al correo en vivo",
      "Prohíbe mantener backup del correo",
      "Las copias también deben poder localizarse y purgarse conforme al plazo legal aplicable"
    ],
    "answer": 3,
    "exp": "La obligación alcanza cualquier soporte que contenga el dato, incluidas las copias de seguridad y sus réplicas."
  },
  {
    "id": "data-144",
    "module": "data",
    "topic": "Retención y cumplimiento",
    "q": "Al definir la retención por tipo de dato, el enfoque más adecuado es:",
    "options": [
      "Usar el mismo plazo de 30 días para todos los datos",
      "Asignar plazos según criticidad, obligación legal y coste de conservación, en vez de un plazo único para todo",
      "Retener todo indefinidamente",
      "Conservar solo el backup más reciente"
    ],
    "answer": 1,
    "exp": "Una retención segmentada equilibra cumplimiento, coste y necesidades de restauración según la criticidad de cada conjunto de datos."
  },
  {
    "id": "data-145",
    "module": "data",
    "topic": "Retención y cumplimiento",
    "q": "Purgar datos al vencer la retención debe hacerse:",
    "options": [
      "De forma automatizada y trazable, verificando que desaparecen también copias, réplicas e índices asociados",
      "Borrando manualmente carpetas al azar",
      "Sin dejar registro alguno",
      "Solo en el sitio primario"
    ],
    "answer": 0,
    "exp": "La purga debe ser controlada y auditable, y alcanzar todas las copias y derivados para que sea realmente efectiva."
  },
  {
    "id": "data-146",
    "module": "data",
    "topic": "Retención y cumplimiento",
    "q": "En un esquema de retención por capas, lo habitual es:",
    "options": [
      "Mantener todo en el tier más rápido",
      "Eliminar las copias antiguas sin trasladarlas a ningún tier",
      "Conservar copias recientes en un tier de restauración rápida y mover las antiguas a un tier económico de archivado",
      "Mezclar los datos sin registro para ahorrar catálogos"
    ],
    "answer": 2,
    "exp": "El tiering mantiene lo reciente accesible para cumplir el RTO y archiva lo antiguo en medios baratos dentro de la retención exigida."
  },
  {
    "id": "data-147",
    "module": "data",
    "topic": "Deduplicación y compresión",
    "q": "La deduplicación de backups reduce el espacio al:",
    "options": [
      "Guardar solo la primera instancia única de cada bloque o archivo y referir el resto a ella",
      "Comprimir dos veces cada archivo",
      "Eliminar los metadatos del sistema",
      "Replicar los datos a otra región"
    ],
    "answer": 0,
    "exp": "La deduplicación detecta bloques idénticos y guarda una sola copia, referenciando el resto en lugar de duplicarlos."
  },
  {
    "id": "data-148",
    "module": "data",
    "topic": "Deduplicación y compresión",
    "q": "La deduplicación a nivel de bloque resulta más efectiva que la de nivel de archivo cuando:",
    "options": [
      "Los archivos son idénticos byte a byte",
      "No hay red disponible",
      "Se utilizan únicamente snapshots",
      "Hay archivos grandes con pequeñas modificaciones o datos similares entre máquinas distintas"
    ],
    "answer": 3,
    "exp": "A nivel de bloque se detectan duplicados incluso dentro del mismo archivo y entre equipos con sistemas base similares."
  },
  {
    "id": "data-149",
    "module": "data",
    "topic": "Deduplicación y compresión",
    "q": "¿Por qué se deduplica antes de cifrar?",
    "options": [
      "Porque el cifrado aumenta el ratio de deduplicación",
      "Porque el cifrado vuelve irreconocibles los bloques y anula la detección de duplicados",
      "Porque la deduplicación exige texto plano por normativa",
      "Porque el orden de los procesos no tiene importancia"
    ],
    "answer": 1,
    "exp": "Cifrar produce salidas distintas para el mismo contenido, así que hay que deduplicar mientras los datos aún son comparables."
  },
  {
    "id": "data-150",
    "module": "data",
    "topic": "Deduplicación y compresión",
    "q": "El coste oculto habitual de la deduplicación es:",
    "options": [
      "Pérdida de integridad de los datos",
      "Imposibilidad de cifrar los backups",
      "Consumo de CPU y memoria y la necesidad de proteger el índice que relaciona bloques y backups",
      "Aumento obligatorio del RTO en todos los casos"
    ],
    "answer": 2,
    "exp": "Calcular y mantener el índice de deduplicación consume recursos y ese índice se vuelve un componente crítico a proteger."
  },
  {
    "id": "data-151",
    "module": "data",
    "topic": "Deduplicación y compresión",
    "q": "En cuanto a la relación entre compresión y cifrado, lo correcto es:",
    "options": [
      "Comprimir antes de cifrar para aprovechar la redundancia y reducir los datos en tránsito",
      "Cifrar antes de comprimir siempre",
      "Comprimir después de cifrar para obtener el mejor ratio",
      "No conviene comprimir las copias de seguridad"
    ],
    "answer": 0,
    "exp": "La compresión necesita redundancia, que el cifrado elimina, así que se comprime primero para reducir tamaño y tráfico."
  },
  {
    "id": "data-152",
    "module": "data",
    "topic": "Deduplicación y compresión",
    "q": "Un backup a nivel de imagen frente a uno de archivos sueltos:",
    "options": [
      "Es siempre más ligero que respaldar archivos sueltos",
      "Permite restaurar el sistema completo con arranque, pero pesa más que respaldar solo los datos",
      "No permite restaurar las aplicaciones",
      "Es incompatible con la deduplicación"
    ],
    "answer": 1,
    "exp": "La imagen captura sistema y datos para recuperar el equipo tal cual, a cambio de un volumen mayor que respaldar solo ficheros."
  },
  {
    "id": "data-153",
    "module": "data",
    "topic": "Deduplicación y compresión",
    "q": "En entornos con muchas máquinas virtuales similares, la deduplicación entre fuentes (cross-source) suele:",
    "options": [
      "Reducir el ratio de deduplicación",
      "Impedir el cifrado de las copias",
      "Elevar el ratio al detectar bloques comunes entre máquinas con la misma base de sistema",
      "Requerir apagar las máquinas antes de cada backup"
    ],
    "answer": 2,
    "exp": "Al comparar entre orígenes se detectan bloques comunes de sistemas base idénticos, lo que reduce bastante el espacio total."
  },
  {
    "id": "data-154",
    "module": "data",
    "topic": "Tiering de copias",
    "q": "En un esquema de tiering de copias, primero se traslada a un tier de menor coste:",
    "options": [
      "Las copias antiguas que ya no son candidatas a restauración operativa pero siguen dentro de la retención",
      "Los puntos más recientes de los sistemas críticos",
      "El catálogo en curso",
      "Las copias que están en tránsito"
    ],
    "answer": 0,
    "exp": "Se archive primero lo que ya no se usa para recuperación diaria pero debe seguir disponible por retención o auditoría."
  },
  {
    "id": "data-155",
    "module": "data",
    "topic": "Tiering de copias",
    "q": "La cinta como tier final de archivado es interesante porque:",
    "options": [
      "Es el medio de restauración más rápido",
      "No requiere inventario ni gestión",
      "Elimina la necesidad de cifrar",
      "Ofrece un coste por unidad muy bajo y buena aptitud para retención larga, con acceso más lento"
    ],
    "answer": 3,
    "exp": "La cinta es muy económica por terabyte para retenciones largas, aunque su acceso es más lento que los tiers en línea."
  },
  {
    "id": "data-156",
    "module": "data",
    "topic": "Tiering de copias",
    "q": "En almacenamiento de objetos en nube, las reglas de ciclo de vida permiten:",
    "options": [
      "Acelerar el RTO de la restauración",
      "Mover automáticamente los objetos a clases de menor coste y aplicar la retención definida",
      "Volver inmutables los objetos sin configuración",
      "Evitar los costes de salida sin necesidad de planificarlos"
    ],
    "answer": 1,
    "exp": "Las políticas de ciclo de vida trasladan objetos a clases más baratas y aplican expiración según la retención configurada."
  },
  {
    "id": "data-157",
    "module": "data",
    "topic": "Tiering de copias",
    "q": "¿Qué debe considerarse al restaurar desde un tier frío o de archivo?",
    "options": [
      "Que siempre será instantáneo",
      "Que el dato ya no es restaurable",
      "Que puede haber costes de salida y tiempos de deshielo o recuperación que afectan al RTO",
      "Que no necesita ninguna verificación"
    ],
    "answer": 2,
    "exp": "Los tiers fríos añaden latencia y posibles cargos de salida, así que hay que contemplarlos al estimar el tiempo de recuperación."
  },
  {
    "id": "data-158",
    "module": "data",
    "topic": "Tiering de copias",
    "q": "Para cumplir un RTO exigente con datos voluminosos, el diseño habitual es:",
    "options": [
      "Mantener en un tier rápido una copia o réplica de lo crítico y rehidratar el resto de forma escalonada",
      "Moverlo todo al tier más barato",
      "Depender únicamente del archivo en cinta",
      "Reducir la retención a un día"
    ],
    "answer": 0,
    "exp": "Se prioriza lo crítico en un tier veloz y el resto se recupera por partes mientras el servicio ya está operativo."
  },
  {
    "id": "data-159",
    "module": "data",
    "topic": "Tiering de copias",
    "q": "Al mover copias entre tiers, es fundamental:",
    "options": [
      "Borrar el catálogo para ahorrar espacio",
      "Desactivar la inmutabilidad durante la copia",
      "Cambiar la política de cifrado",
      "Actualizar el catálogo para que siga reflejando la ubicación real de cada punto"
    ],
    "answer": 3,
    "exp": "Si el catálogo no registra la nueva ubicación, esos puntos dejan de ser localizables aunque los datos sigan existiendo."
  },
  {
    "id": "data-160",
    "module": "data",
    "topic": "Verificación y pruebas",
    "q": "La verificación automática de integridad de un backup consiste en:",
    "options": [
      "Repetir el backup dos veces la misma noche",
      "Leer los datos guardados y comprobar mediante hashes o checksums que coinciden con lo esperado",
      "Replicar el backup a otra región",
      "Comprimir el repositorio de destino"
    ],
    "answer": 1,
    "exp": "La verificación relea y contrasta hashes para detectar corrupción silenciosa antes de necesitar restaurar."
  },
  {
    "id": "data-161",
    "module": "data",
    "topic": "Verificación y pruebas",
    "q": "¿Por qué un backup reportado como exitoso puede no ser restaurable?",
    "options": [
      "Porque los registros siempre mienten",
      "Porque el cifrado impide la restauración",
      "Porque puede haber corrupción silenciosa, dependencias ausentes o incompatibilidad con el software de restauración",
      "Porque la retención es demasiado larga"
    ],
    "answer": 2,
    "exp": "Un trabajo completado solo indica que la copia se escribió; no garantiza legibilidad, dependencias ni compatibilidad del entorno destino."
  },
  {
    "id": "data-162",
    "module": "data",
    "topic": "Verificación y pruebas",
    "q": "La prueba de restauración más completa a la hora de validar la recuperabilidad es:",
    "options": [
      "Restaurar por completo en un entorno aislado y arrancar la aplicación con sus dependencias",
      "Comprobar que el archivo de backup existe",
      "Revisar que el registro diga completado",
      "Validar el tamaño del repositorio"
    ],
    "answer": 0,
    "exp": "Solo una restauración integral con arranque de la aplicación demuestra que el proceso de recuperación funciona de verdad."
  },
  {
    "id": "data-163",
    "module": "data",
    "topic": "Verificación y pruebas",
    "q": "Si las pruebas solo consisten en restaurar archivos sueltos, ¿qué queda sin validar?",
    "options": [
      "La compresión de los datos",
      "El proceso integral de recuperación de sistema y aplicaciones, incluidos arranque, dependencias y configuración",
      "El cifrado en reposo",
      "La expiración de los catálogos"
    ],
    "answer": 1,
    "exp": "Recuperar ficheros aislados no prueba el arranque del sistema ni la puesta en marcha de las aplicaciones con su configuración."
  },
  {
    "id": "data-164",
    "module": "data",
    "topic": "Verificación y pruebas",
    "q": "Un buen indicador de la eficacia del plan de recuperación es:",
    "options": [
      "Contar los backups diarios completados",
      "Medir el ratio de deduplicación",
      "Registrar cuántos snapshots se crean por semana",
      "Comparar el tiempo real medido en las pruebas de restauración con el objetivo y corregir desviaciones"
    ],
    "answer": 3,
    "exp": "El objetivo solo se cumple si las pruebas demuestran un tiempo real de recuperación acorde con lo prometido al negocio."
  },
  {
    "id": "data-165",
    "module": "data",
    "topic": "Verificación y pruebas",
    "q": "Ejecutar las pruebas de recuperación en un clon aislado tiene la ventaja de:",
    "options": [
      "Validar el proceso sin afectar ni arriesgar el entorno de producción",
      "Aumentar el RPO del sistema",
      "Reducir la necesidad de retención",
      "Eliminar la necesidad de un plan de recuperación"
    ],
    "answer": 0,
    "exp": "El clon aislado permite probar el flujo completo sin tocar la operativa ni arriesgar datos vivos."
  },
  {
    "id": "data-166",
    "module": "data",
    "topic": "Verificación y pruebas",
    "q": "Una prueba de restauración fallida debe conducir a:",
    "options": [
      "Archivar el resultado sin actuar",
      "Eliminar el backup que falló",
      "Documentar la causa, corregir el procedimiento o la política y repetir la prueba hasta que sea reproducible",
      "Ampliar la retención como única acción"
    ],
    "answer": 2,
    "exp": "El valor de la prueba está en corregir lo que falló y demostrar después que la recuperación es reproducible."
  },
  {
    "id": "data-167",
    "module": "data",
    "topic": "Verificación y pruebas",
    "q": "¿Por qué el catálogo de copias también debe someterse a verificación?",
    "options": [
      "Porque es un requisito estético de los informes",
      "Porque un catálogo dañado o desincronizado hace que existan datos que no pueden localizarse ni restaurarse",
      "Porque su tamaño condiciona el cifrado",
      "Porque determina el ratio de compresión"
    ],
    "answer": 1,
    "exp": "Sin un índice consistente, los datos pueden estar íntegros pero inlocalizables, lo que anula la capacidad de restaurarlos."
  },
  {
    "id": "data-168",
    "module": "data",
    "topic": "Backup multinube y SaaS",
    "q": "En una suite de correo y documentos en la nube (SaaS), ¿qué suele cubrir el proveedor?",
    "options": [
      "La infraestructura y la disponibilidad del servicio, no la pérdida lógica de datos o los errores de los usuarios",
      "También la eliminación accidental realizada por el usuario",
      "La protección frente a ransomware de las copias",
      "La retención legal de siete años"
    ],
    "answer": 0,
    "exp": "El proveedor garantiza la plataforma, mientras que los borrados, sobrescritos y errores del usuario quedan normalmente fuera de su alcance."
  },
  {
    "id": "data-169",
    "module": "data",
    "topic": "Backup multinube y SaaS",
    "q": "Una baja o una purga realizada en el propio servicio SaaS suele ser:",
    "options": [
      "Reversible durante 30 días de forma garantizada",
      "Replicada automáticamente a otra nube",
      "Definitiva desde la perspectiva del usuario, por lo que conviene mantener una copia externa independiente",
      "Inmutable en el propio servicio"
    ],
    "answer": 2,
    "exp": "Sin una copia externa, una eliminación en el servicio puede no tener vuelta atrás, de ahí la copia independiente del proveedor."
  },
  {
    "id": "data-170",
    "module": "data",
    "topic": "Backup multinube y SaaS",
    "q": "Aunque exista replicación o snapshot en la nube, protegerse frente al fallo de la cuenta o del proveedor exige:",
    "options": [
      "Confiar en la replicación dentro de la misma cuenta",
      "Mantener copias en un destino independiente de esa cuenta y, si procede, de otro proveedor",
      "Usar la misma cuenta para todos los sistemas",
      "Deshabilitar el MFA para agilizar la recuperación"
    ],
    "answer": 1,
    "exp": "La copia debe residir en un ámbito de confianza distinto: si cae la cuenta o el proveedor, la copia en la misma esquina no sirve."
  },
  {
    "id": "data-171",
    "module": "data",
    "topic": "Backup multinube y SaaS",
    "q": "En un diseño multinube, las credenciales de backup deben:",
    "options": [
      "Ser las mismas que utiliza la aplicación en producción",
      "Compartirse entre todos los proveedores",
      "No tener MFA por compatibilidad",
      "Ser identidades dedicadas con mínimo privilegio, separadas de las del entorno productivo"
    ],
    "answer": 3,
    "exp": "Identidades dedicadas con mínimo privilegio limitan el daño si el plan de copias o la nube se ven comprometidos."
  },
  {
    "id": "data-172",
    "module": "data",
    "topic": "Backup multinube y SaaS",
    "q": "Para obtener puntos coherentes entre sistemas que viven en nubes distintas, es necesario:",
    "options": [
      "Coordinar ventanas y puntos de captura entre servicios para alinear el estado de los datos relacionados",
      "Dejar que cada nube trabaje sin coordinación alguna",
      "Usar siempre replicación síncrona",
      "Aumentar la compresión de las copias"
    ],
    "answer": 0,
    "exp": "Si cada servicio captura por separado, los puntos relacionados no coinciden en el tiempo y la restauración conjunta pierde coherencia."
  },
  {
    "id": "data-173",
    "module": "data",
    "topic": "Backup multinube y SaaS",
    "q": "Conservar exportaciones periódicas de los datos de SaaS en formato portable sirve para:",
    "options": [
      "Mejorar el RTO del proveedor",
      "Evitar el cifrado de las copias",
      "Reducir la dependencia del proveedor y poder recuperar información si el servicio cambia o se da de baja",
      "Eliminar la política de retención"
    ],
    "answer": 2,
    "exp": "Una exportación portable permite recuperar la información incluso si el contrato, el producto o el proveedor desaparecen."
  },
  {
    "id": "data-174",
    "module": "data",
    "topic": "Backup multinube y SaaS",
    "q": "Replicar copias de un proveedor de nube a otro (cloud-to-cloud), su principal valor es:",
    "options": [
      "Reducir siempre el coste de almacenamiento",
      "Evitar que un incidente de cuenta, región o proveedor deje sin copias",
      "Eliminar la necesidad de verificar restauraciones",
      "Sustituir al equipo de seguridad"
    ],
    "answer": 1,
    "exp": "La copia en un segundo proveedor aísla el riesgo de un incidente que afecte a la cuenta o a la región origen."
  },
  {
    "id": "data-175",
    "module": "data",
    "topic": "Continuidad y recuperación",
    "q": "¿En qué se diferencian el BCP y el DRP?",
    "options": [
      "El BCP abarca la continuidad de todo el negocio mientras el DRP detalla la recuperación de los sistemas de TI ante desastres",
      "Son sinónimos exactos",
      "El DRP se ocupa solo de las comunicaciones",
      "El BCP se ocupa únicamente de los backups"
    ],
    "answer": 0,
    "exp": "El plan de continuidad cubre el negocio completo; el plan de recuperación ante desastres concreta cómo restaurar la tecnología."
  },
  {
    "id": "data-176",
    "module": "data",
    "topic": "Continuidad y recuperación",
    "q": "Para definir qué sistemas priorizar en un plan de recuperación, la herramienta de partida es:",
    "options": [
      "El inventario de discos disponibles",
      "El informe de coste de la nube",
      "La lista de proveedores de red",
      "Un análisis de impacto al negocio que identifica procesos críticos y sus requisitos de recuperación"
    ],
    "answer": 3,
    "exp": "El análisis de impacto determina qué procesos no pueden detenerse y con qué objetivos, y de ahí se prioriza la inversión en respaldo."
  },
  {
    "id": "data-177",
    "module": "data",
    "topic": "Continuidad y recuperación",
    "q": "Un sitio de recuperación en frío se caracteriza por:",
    "options": [
      "Tener la aplicación siempre arrancada y lista",
      "Estar poco o nada preparado, con mayor tiempo de puesta en marcha y menor coste",
      "No requerir datos alguna",
      "Ser siempre un proveedor externo"
    ],
    "answer": 1,
    "exp": "El sitio frío prioriza el coste bajo a cambio de un tiempo de activación largo; los sitios templados y calientes invierten más en preparación."
  },
  {
    "id": "data-178",
    "module": "data",
    "topic": "Continuidad y recuperación",
    "q": "Contar con dos datacenters no protege de un desastre regional cuando:",
    "options": [
      "Cada uno tiene discos independientes",
      "Se replican de forma síncrona",
      "Ambos comparten la misma zona geográfica o infraestructuras comunes como energía o red",
      "Están debidamente segmentados"
    ],
    "answer": 2,
    "exp": "El riesgo compartido (misma ciudad, misma red o energía) hace que un solo evento afecte a ambos a la vez."
  },
  {
    "id": "data-179",
    "module": "data",
    "topic": "Continuidad y recuperación",
    "q": "El objetivo principal de un runbook de recuperación es:",
    "options": [
      "Documentar pasos, responsables y contactos para que la restauración no dependa de una sola persona",
      "Registrar los costes de las licencias",
      "Sustituir las pruebas de restauración",
      "Definir la compresión de las copias"
    ],
    "answer": 0,
    "exp": "Un runbook hace el proceso repetible y transferible, evitando que la recuperación se resienta con la ausencia de un experto."
  },
  {
    "id": "data-180",
    "module": "data",
    "topic": "Continuidad y recuperación",
    "q": "Ante la caída total del sistema de correo corporativo, un componente de continuidad habitual es:",
    "options": [
      "Suspender todas las comunicaciones hasta el RTO",
      "Depender exclusivamente de la mensajería sin plan previo",
      "Esperar al siguiente ciclo de backup diario",
      "Un procedimiento alternativo de comunicación para que el negocio siga operando durante la recuperación"
    ],
    "answer": 3,
    "exp": "La continuidad exige un canal alternativo para seguir operando mientras se restaura el servicio principal."
  },
  {
    "id": "data-181",
    "module": "data",
    "topic": "Cifrado de copias",
    "q": "Cifrar las copias en reposo y en tránsito protege frente a:",
    "options": [
      "El ransomware que usa credenciales válidas",
      "El acceso no autorizado al robar o interceptar el medio o el enlace de réplica",
      "La pérdida de disponibilidad del destino",
      "Los errores humanos de borrado"
    ],
    "answer": 1,
    "exp": "El cifrado protege la confidencialidad ante robo de medios o intercepción; no evita borrados ni cifrado malicioso con credenciales."
  },
  {
    "id": "data-182",
    "module": "data",
    "topic": "Cifrado de copias",
    "q": "En la gestión de claves de las copias, una buena práctica es:",
    "options": [
      "Separar quién administra el backup de quién controla las claves, para que un atacante no obtenga ambos",
      "Guardar la clave junto al backup",
      "Compartir una única clave global sin rotación",
      "Custodiar las claves en el mismo servidor de backup"
    ],
    "answer": 0,
    "exp": "Separar responsabilidades evita que la toma de un único sistema entregue a la vez los datos y las claves para descifrarlos."
  },
  {
    "id": "data-183",
    "module": "data",
    "topic": "Cifrado de copias",
    "q": "¿Qué NO resuelve el cifrado de las copias?",
    "options": [
      "La confidencialidad si el medio resulta extraviado",
      "La interceptación en tránsito",
      "La disponibilidad ante un atacante con credenciales legítimas que borra o cifra el destino",
      "El acceso no autorizado al repositorio"
    ],
    "answer": 2,
    "exp": "Con credenciales válidas el atacante puede destruir el destino: para eso sirven la separación de privilegios y las copias inmutables."
  },
  {
    "id": "data-184",
    "module": "data",
    "topic": "Cifrado de copias",
    "q": "Sobre el impacto operativo del cifrado de copias, es correcto afirmar que:",
    "options": [
      "No tiene ningún efecto sobre el rendimiento",
      "Elimina la necesidad de verificar",
      "Reduce el RTO automáticamente",
      "Puede consumir CPU y alargar la ventana de backup, por lo que se dimensiona en el diseño"
    ],
    "answer": 3,
    "exp": "Cifrar y descifrar consume recursos, así que la capacidad y la ventana de backup se dimensionan con ese sobrecoste en mente."
  },
  {
    "id": "data-185",
    "module": "data",
    "topic": "Cifrado de copias",
    "q": "Al elegir algoritmos para cifrar copias, el criterio correcto es:",
    "options": [
      "Diseñar un algoritmo propio para mayor seguridad",
      "Usar algoritmos ampliamente revisados y adoptados por la industria, con gestión y rotación de claves",
      "Usar cifrado débil en las copias internas",
      "Cifrar únicamente los nombres de archivo"
    ],
    "answer": 1,
    "exp": "Se emplean cifrados estándar y revisados con rotación de claves; los algoritmos caseros no ofrecen garantías de seguridad."
  },
  {
    "id": "data-186",
    "module": "data",
    "topic": "Catálogos y expiración",
    "q": "El catálogo de backup cumple la función de:",
    "options": [
      "Índice de metadatos que permite localizar cada punto de restauración y sus componentes",
      "Almacenar los propios datos de backup",
      "Replicar los datos a otra región",
      "Cifrar las copias de seguridad"
    ],
    "answer": 0,
    "exp": "El catálogo es el índice que permite saber qué puntos existen, dónde están y qué se necesita para restaurarlos."
  },
  {
    "id": "data-187",
    "module": "data",
    "topic": "Catálogos y expiración",
    "q": "Si el catálogo se pierde pero los datos siguen en el repositorio:",
    "options": [
      "Nada cambia y la restauración es igual de rápida",
      "Los datos se autocifran",
      "La restauración se complica o se vuelve inviable hasta que se reconstruye el índice",
      "Se purgan automáticamente por retención"
    ],
    "answer": 2,
    "exp": "Sin índice, localizar y reconstruir los puntos manualmente es lento y propenso a errores, aunque los datos existan."
  },
  {
    "id": "data-188",
    "module": "data",
    "topic": "Catálogos y expiración",
    "q": "La expiración automática de copias debe:",
    "options": [
      "Borrar siempre el punto más reciente",
      "Ejecutarse según la retención configurada y respetar cualquier hold o bloqueo de inmutabilidad vigente",
      "Ignorar las retenciones legales",
      "Ejecutarse sin dejar registro"
    ],
    "answer": 1,
    "exp": "La purga automática obedece a la retención y no puede saltarse bloqueos legales ni ventanas de inmutabilidad."
  },
  {
    "id": "data-189",
    "module": "data",
    "topic": "Catálogos y expiración",
    "q": "En el esquema de rotación grandfather-father-son (GFS):",
    "options": [
      "Se guarda solo el backup del día anterior",
      "Es un método de cifrado",
      "Significa replicar a tres sitios",
      "Se combinan varios niveles, por ejemplo diario, semanal y mensual, para retener puntos de más edades sin multiplicar el espacio"
    ],
    "answer": 3,
    "exp": "GFS mezcla rotaciones cortas y largas para conservar puntos antiguos a un coste mucho menor que retener todos los diarios."
  },
  {
    "id": "data-190",
    "module": "data",
    "topic": "Catálogos y expiración",
    "q": "Si se purga un backup full del que dependen incrementales posteriores sin planificarlo:",
    "options": [
      "Se rompe la cadena y esos incrementales dejan de ser restaurables",
      "No ocurre nada relevante",
      "Los incrementales se convierten en full automáticamente",
      "El catálogo los reindexa solo"
    ],
    "answer": 0,
    "exp": "Al expirar el full base se pierde la referencia de la cadena, así que la purga debe respetar la dependencia entre puntos."
  },
  {
    "id": "data-191",
    "module": "data",
    "topic": "Objetivos de recuperación",
    "q": "El negocio fija un RPO de 15 minutos para un sistema transaccional. La configuración mínima coherente es:",
    "options": [
      "Un backup completo semanal",
      "Un snapshot mensual",
      "Capturar y propagar cambios cada 15 minutos o menos mediante CDP, replicación frecuente o snapshots cortos",
      "Una copia en cinta al cierre del mes"
    ],
    "answer": 2,
    "exp": "La pérdida aceptable de datos marca la frecuencia de captura: con 15 minutos hace falta captura casi continua o replicación muy frecuente."
  },
  {
    "id": "data-192",
    "module": "data",
    "topic": "Objetivos de recuperación",
    "q": "Si el RTO objetivo es de 4 horas pero la restauración desde backup tarda 8 horas, el plan:",
    "options": [
      "Cumple porque el backup terminó bien",
      "No cumple el objetivo y debe rediseñarse con réplica caliente, restauración parcial o capas de recuperación",
      "Se soluciona ampliando la retención",
      "Se soluciona aumentando la compresión"
    ],
    "answer": 1,
    "exp": "Hay una brecha entre lo que exige el negocio y lo que permite la infraestructura: toca rediseñar la estrategia de recuperación."
  },
  {
    "id": "data-193",
    "module": "data",
    "topic": "Objetivos de recuperación",
    "q": "MTTR en el contexto de operaciones de respaldo se refiere al:",
    "options": [
      "Tiempo medio de retención de datos",
      "Ancho de banda medio de la réplica",
      "Espacio medio ocupado por las copias",
      "Tiempo medio transcurrido hasta completar una reparación o una restauración"
    ],
    "answer": 3,
    "exp": "El tiempo medio de reparación o restauración es la métrica que resume cuánto tarda realmente devolver el servicio."
  },
  {
    "id": "data-194",
    "module": "data",
    "topic": "Objetivos de recuperación",
    "q": "Frente a datos con necesidades de recuperación muy distintas dentro de la misma organización, el enfoque acertado es:",
    "options": [
      "Segmentar por criticidad y definir capas de recuperación distintas para cada grupo",
      "Aplicar un único backup idéntico para todo",
      "Priorizar los sistemas de mayor tamaño",
      "Igualar todos los objetivos al más laxo"
    ],
    "answer": 0,
    "exp": "Segmentar evita pagar por igual lo crítico y lo prescindible, y permite fijar objetivos realistas por tipo de servicio."
  },
  {
    "id": "data-195",
    "module": "data",
    "topic": "Objetivos de recuperación",
    "q": "La captura continua de datos (CDP) frente al backup periódico ofrece:",
    "options": [
      "Un RTO siempre menor",
      "Menor necesidad de retención",
      "Un RPO muy fino hasta el instante del fallo, a cambio de mayor complejidad y coste de operación",
      "Eliminación de las pruebas de restauración"
    ],
    "answer": 2,
    "exp": "El CDP registra cada cambio para poder volver al instante exacto, pero añade complejidad operativa y de almacenamiento."
  },
  {
    "id": "data-196",
    "module": "data",
    "topic": "Objetivos de recuperación",
    "q": "Con datos de gran volumen y un RTO exigente, una técnica habitual es:",
    "options": [
      "Restaurar siempre el backup completo antes de arrancar",
      "Restaurar primero lo crítico y rehidratar el resto de forma escalonada mientras el servicio ya opera",
      "Esperar a la siguiente ventana de backup",
      "Reducir el número de puntos de restauración"
    ],
    "answer": 1,
    "exp": "La recuperación priorizada devuelve lo esencial rápido y recupera el resto por partes sin bloquear el arranque del servicio."
  },
  {
    "id": "data-197",
    "module": "data",
    "topic": "Objetivos de recuperación",
    "q": "Un sistema declara una pérdida aceptable de datos de 15 minutos, pero solo recibe un backup diario. ¿Qué conclusión es correcta?",
    "options": [
      "El diseño cumple porque el backup diario termina sin errores",
      "La pérdida aceptable se reduce automáticamente al comprimir",
      "Con un backup diario siempre se pierde como máximo 15 minutos",
      "El diseño no está alineado: la pérdida potencial puede alcanzar las 24 horas"
    ],
    "answer": 3,
    "exp": "La frecuencia de captura debe ser al menos tan fina como el objetivo; un backup diario permite perder hasta un día completo de cambios."
  },
  {
    "id": "data-198",
    "module": "data",
    "topic": "Objetivos de recuperación",
    "q": "Documentar y comunicar los objetivos de recuperación por servicio sirve principalmente para:",
    "options": [
      "Alinear las expectativas con negocio y priorizar la inversión donde el impacto es mayor",
      "Reducir el coste de la nube automáticamente",
      "Sustituir el análisis de riesgos",
      "Evitar las pruebas de restauración"
    ],
    "answer": 0,
    "exp": "Con objetivos explícitos por servicio, negocio y tecnología acuerdan prioridades y justifican dónde invertir en resiliencia."
  },
  {
    "id": "data-199",
    "module": "data",
    "topic": "Estrategia de respaldo",
    "q": "Ante la petición diseñe la estrategia de respaldo de una plataforma crítica, el primer paso es:",
    "options": [
      "Elegir el proveedor de nube más barato",
      "Activar los snapshots por defecto",
      "Recoger requisitos: criticidad, pérdida aceptable de datos, tiempo objetivo de recuperación, retención y presupuesto",
      "Copiar todos los datos diariamente sin segmentar"
    ],
    "answer": 2,
    "exp": "Sin requisitos claros de criticidad, objetivos, retención y presupuesto, cualquier diseño de respaldo queda adivinado."
  },
  {
    "id": "data-200",
    "module": "data",
    "topic": "Estrategia de respaldo",
    "q": "Al revisar una estrategia de respaldo existente, una señal de alarma habitual es:",
    "options": [
      "Que haya más de un backup al día",
      "Que nadie pueda recordar cuándo se restauró con éxito algo completo por última vez",
      "Que el repositorio esté cifrado",
      "Que exista documentación de retención"
    ],
    "answer": 1,
    "exp": "La prueba definitiva de una estrategia es la recuperación real: si nadie la ha ejecutado con éxito, la confianza en ella no está justificada."
  },
  {
    "id": "dc-101",
    "module": "dc",
    "topic": "Energía",
    "q": "En un salón con equipos de misión crítica se evalúa un UPS de doble conversión frente a uno en modo interactivo. ¿Cuál es la razón principal para elegir el modo online?",
    "options": [
      "La carga está siempre alimentada por el inversor, de modo que los microcortes se cubren sin tiempo de transferencia",
      "Solo consume batería cuando hay un corte largo, lo que alarga su vida útil",
      "Elimina la necesidad de distribuidores de energía (PDU) en el rack",
      "Permite conectarlo al grupo electrógeno sin ninguna sincronización"
    ],
    "answer": 0,
    "exp": "En un UPS online la conversión es permanente: no hay transferencia ante microcortes, lo que protege a los equipos sensibles de cualquier variación de la red."
  },
  {
    "id": "dc-102",
    "module": "dc",
    "topic": "Energía",
    "q": "¿Por qué la autonomía de un UPS debe dimensionarse en función del tiempo de arranque del grupo electrógeno?",
    "options": [
      "Porque el grupo electrógeno arranca en menos de un segundo y no necesita apoyo de baterías",
      "Porque las baterías solo deben cubrir el hueco hasta que el grupo esté estabilizado y tome la carga",
      "Porque la autonomía depende del número de racks instalados",
      "Porque el grupo reemplaza al UPS y este queda permanentemente en standby"
    ],
    "answer": 1,
    "exp": "Las baterías solo han de salvar el intervalo entre el corte y la puesta en servicio del grupo; dimensionarlas a ese tiempo evita caídas por autonomía insuficiente o sobrecostos por exceso."
  },
  {
    "id": "dc-103",
    "module": "dc",
    "topic": "Energía",
    "q": "Al dimensionar la potencia de un rack de alta densidad, ¿qué parámetro de la PDU hay que revisar además de la corriente nominal?",
    "options": [
      "El número de puertos USB del módulo de monitorización",
      "El peso de la PDU en kilogramos",
      "La corriente por fase y el factor de potencia, porque el consumo real puede superar el nominal",
      "La longitud del cable de alimentación del rack"
    ],
    "answer": 2,
    "exp": "La corriente por fase y el factor de potencia determinan cuánta potencia útil llega realmente a los equipos y ayudan a evitar sobrecargar el circuito."
  },
  {
    "id": "dc-104",
    "module": "dc",
    "topic": "Energía",
    "q": "¿Cuál es la principal razón de realizar pruebas periódicas a las baterías de un UPS?",
    "options": [
      "Para recargarlas a la máxima velocidad permitida",
      "Para sustituirlas automáticamente cuando las detecta el fabricante",
      "Para cumplir con el color del cableado de puesta a tierra",
      "Porque la capacidad decae con la edad y el test detecta celdas defectuosas antes del corte real"
    ],
    "answer": 3,
    "exp": "Las baterías pierden capacidad con el tiempo y pueden fallar celda a celda; el test permite anticipar esa degradación antes de que se necesiten."
  },
  {
    "id": "dc-105",
    "module": "dc",
    "topic": "Energía",
    "q": "Si la suma de la demanda de los racks supera la capacidad del circuito que los alimenta, ¿cuál es la medida correcta?",
    "options": [
      "Bajar la tensión de servicio del salón para reducir el consumo",
      "Alimentar en paralelo dos PDU conectadas al mismo circuito",
      "Reequilibrar la carga entre circuitos y evitar concentrar equipos de alta demanda en la misma ruta",
      "Subir la temperatura del salón para bajar la potencia de los equipos"
    ],
    "answer": 2,
    "exp": "Conviene distribuir la demanda entre varios circuitos y PDUs respetando su capacidad por fase; forzar el circuito provoca disparos y paradas inesperadas."
  },
  {
    "id": "dc-106",
    "module": "dc",
    "topic": "Enfriamiento",
    "q": "En el diseño de pasillos de un salón de servidores, ¿qué regla evita la recirculación de aire caliente hacia la admisión de los equipos?",
    "options": [
      "Colocar admisión y extracción de todos los equipos en el mismo pasillo",
      "Separar admisión y extracción en pasillos alternos y sellar los huecos que no deben dejar pasar aire",
      "Abrir todos los paneles del piso elevado en ambos pasillos",
      "Orientar los servidores con el frente hacia el pasillo caliente"
    ],
    "answer": 1,
    "exp": "La separación en pasillos calientes y fríos, junto con el sellado, impide que el aire caliente expulsado vuelva a entrar por el frente de otros equipos."
  },
  {
    "id": "dc-107",
    "module": "dc",
    "topic": "Enfriamiento",
    "q": "¿En qué consiste la economización libre (free cooling) en un datacenter?",
    "options": [
      "Reducir la frecuencia de los discos para que el salón baje de temperatura",
      "Desconectar el UPS durante la noche para ahorrar energía",
      "Aprovechar el aire exterior cuando temperatura y humedad lo permiten, sin activar la compresión",
      "Sustituir el equipo de climatización por ventiladores de techo"
    ],
    "answer": 2,
    "exp": "La economización libre enfría con aire del exterior cuando las condiciones lo permiten, reduciendo el tiempo de trabajo de la compresión y el consumo de energía."
  },
  {
    "id": "dc-108",
    "module": "dc",
    "topic": "Enfriamiento",
    "q": "Un salón presenta puntos calientes localizados en algunos racks. ¿Qué actuación es más eficaz que bajar en general la temperatura de consigna?",
    "options": [
      "Instalar más racks de reserva en las zonas frías",
      "Concentrar todos los equipos en una sola PDU",
      "Reducir la ventilación de los servidores",
      "Contener el pasillo caliente y guiar el aire, lo que permite subir la temperatura de consigna"
    ],
    "answer": 3,
    "exp": "Contener el aire caliente evita su mezcla y permite operar a mayor temperatura de consigna, corrigiendo los puntos calientes con menor consumo."
  },
  {
    "id": "dc-109",
    "module": "dc",
    "topic": "Enfriamiento",
    "q": "¿Cuál es el riesgo de instalar en el mismo rack servidores con la extracción de aire en direcciones opuestas?",
    "options": [
      "Que el aire caliente expulsado por unos entre en la admisión de otros y eleve su temperatura",
      "Que la PDU pierda capacidad de corriente",
      "Que los discos entren en modo degradado",
      "Que la red LAN deje de segmentar el tráfico"
    ],
    "answer": 0,
    "exp": "Se generan cortocircuitos térmicos dentro del rack; conviene homogeneizar el sentido del flujo de aire o separar equipos por zonas."
  },
  {
    "id": "dc-110",
    "module": "dc",
    "topic": "Cableado",
    "q": "Para un enlace entre edificios a varias centenas de metros, ¿qué tipo de fibra óptica es la elección habitual?",
    "options": [
      "Multimodo, porque admite más canales de datos en la misma fibra",
      "Monomodo, porque su menor dispersión permite distancias mucho mayores",
      "Cobre categoría 6A, porque la fibra no admite esas distancias",
      "Multimodo, porque ya no se fabrica fibra monomodo"
    ],
    "answer": 1,
    "exp": "La fibra monomodo admite enlaces de largo alcance con baja atenuación; la multimodo se reserva para distancias cortas dentro del edificio."
  },
  {
    "id": "dc-111",
    "module": "dc",
    "topic": "Cableado",
    "q": "¿Por qué conviene certificar el cableado estructurado con un certificador de categoría canal?",
    "options": [
      "Porque la certificación cambia la categoría de los cables instalados",
      "Porque es un requisito de los fabricantes de servidores",
      "Porque solo así se comprueban longitud, atenuación y par crosstalk según la categoría declarada",
      "Porque mide el rendimiento lógico que verán los usuarios"
    ],
    "answer": 2,
    "exp": "El certificador valida los parámetros físicos del canal completo; sin esa evidencia pueden quedar defectos que después aparecen como fallos intermitentes."
  },
  {
    "id": "dc-112",
    "module": "dc",
    "topic": "Cableado",
    "q": "En la organización del cableado horizontal de un datacenter, ¿qué práctica mejora más el mantenimiento?",
    "options": [
      "Etiquetado normalizado en ambos extremos y rutas separadas para cobre y fibra",
      "Usar un único color para todo y anotar los cambios solo en el armario",
      "Dejar largas holguras de cable sin ordenar en el panel",
      "Pasar todos los cables por el mismo pasillo de servicio"
    ],
    "answer": 0,
    "exp": "El etiquetado y la separación de medios agilizan localizar y sustituir enlaces y evitan daños al manipular grandes manojos de cables."
  },
  {
    "id": "dc-113",
    "module": "dc",
    "topic": "Cableado",
    "q": "¿Qué puede ocurrir si se curva una fibra óptica por debajo de su radio mínimo?",
    "options": [
      "Que la fibra cambie de categoría de rendimiento",
      "Que el enlace aumente su ancho de banda disponible",
      "Que los conectores se suelten de forma automática",
      "Que se produzcan microfracturas que elevan la atenuación y degradan el enlace"
    ],
    "answer": 3,
    "exp": "Una curvatura excesiva provoca pérdidas por curvatura y microfracturas; hay que respetar el radio mínimo indicado por el fabricante."
  },
  {
    "id": "dc-114",
    "module": "dc",
    "topic": "Red LAN",
    "q": "Se activan tramas jumbo (MTU 9000) en la red dedicada al almacenamiento iSCSI. ¿Qué hay que verificar?",
    "options": [
      "Que el MTU se ajuste solo en el switch, el resto se adapta automáticamente",
      "Que todos los dispositivos del camino soporten el mismo MTU, porque una trama que no cabe se fragmenta o se descarta",
      "Que se sustituya TCP por UDP en las sesiones iSCSI",
      "Que la distancia entre equipos no supere los 100 metros"
    ],
    "answer": 1,
    "exp": "El MTU debe coincidir en servidores, switches y gateways; si algún salto admite menos, se producen fragmentaciones costosas o pérdidas de tramas."
  },
  {
    "id": "dc-115",
    "module": "dc",
    "topic": "Red LAN",
    "q": "En un switch de acceso con una relación de sobrecompra de 4:1, ¿qué significa ese valor?",
    "options": [
      "Que el switch admite cuatro veces más equipos que la competencia",
      "Que la latencia del switch se multiplica por cuatro",
      "Que la suma de los enlaces ascendentes es una cuarta parte de los enlaces de acceso, con riesgo de congestión en picos simultáneos",
      "Que el ancho de banda garantizado a cada puerto es el doble"
    ],
    "answer": 2,
    "exp": "La sobrecompra indica cuánto se comparte el camino hacia arriba; si todos los puertos de acceso transmiten a la vez puede haber cuellos de botella."
  },
  {
    "id": "dc-116",
    "module": "dc",
    "topic": "Red LAN",
    "q": "Para evitar que la falla de un switch de acceso deje aislados a los servidores conectados, ¿qué diseño se usa habitualmente?",
    "options": [
      "Conectar cada servidor a dos switches mediante enlaces LACP o MLAG",
      "Conectar todos los servidores al mismo switch más potente",
      "Usar un único enlace por servidor con una VLAN de respaldo",
      "Desactivar el Spanning Tree para ganar ancho de banda"
    ],
    "answer": 0,
    "exp": "El doble anclaje con LACP o MLAG mantiene la conectividad si falla un switch y además reparte la carga entre ambos."
  },
  {
    "id": "dc-117",
    "module": "dc",
    "topic": "Red LAN",
    "q": "¿Cuál es el motivo principal para segmentar en VLANs distintas el tráfico de gestión y el tráfico de datos del datacenter?",
    "options": [
      "Aumentar la velocidad nominal de los enlaces",
      "Evitar la necesidad de direccionamiento IP",
      "Eliminar la necesidad de switches en el diseño",
      "Limitar el dominio de broadcast y aislar el tráfico sensible, reduciendo el impacto de un incidente"
    ],
    "answer": 3,
    "exp": "La segmentación acota los dominios de broadcast y separa lo crítico de lo menos sensible, facilitando también el control de acceso."
  },
  {
    "id": "dc-118",
    "module": "dc",
    "topic": "Red LAN",
    "q": "¿Qué problema resuelve el Spanning Tree Protocol en una red LAN con enlaces redundantes?",
    "options": [
      "Balancea la carga de forma activa entre todos los enlaces",
      "Cifra el tráfico entre switches",
      "Evita bucles de nivel 2 que duplicarían y saturarían el tramo",
      "Asigna direcciones IP a los servidores"
    ],
    "answer": 2,
    "exp": "STP bloquea enlaces redundantes para que solo exista un camino activo a nivel 2, eliminando bucles y tormentas de difusión."
  },
  {
    "id": "dc-119",
    "module": "dc",
    "topic": "Red LAN",
    "q": "Al dimensionar el ancho de banda de un switch de acceso, ¿qué conviene evaluar?",
    "options": [
      "Solo el número de puertos libres que quedarán",
      "La capacidad de los enlaces ascendentes frente a la suma de los puertos de acceso y el tráfico entre servidores esperado",
      "La suma del ancho de banda de todos los puertos sin mirar la subida",
      "El consumo máximo de energía del switch"
    ],
    "answer": 1,
    "exp": "El cuello de botella habitual está en la subida: hay que comparar la capacidad de los uplinks con la demanda agregada de los puertos."
  },
  {
    "id": "dc-120",
    "module": "dc",
    "topic": "SAN FC",
    "q": "Se conectan dos fabrics de SAN mediante un enlace ISL (inter-switch link). ¿Qué efecto produce?",
    "options": [
      "Extiende el dominio de fabric para que los puertos de ambos switches se comuniquen, consumiendo ancho de banda compartido en el enlace",
      "Aísla por completo los dos fabrics, impidiendo cualquier comunicación",
      "Convierte el tráfico de Fibre Channel en iSCSI",
      "Sustituye el zonado por una tabla de rutas estática"
    ],
    "answer": 0,
    "exp": "El ISL unifica ambos switches en un mismo fabric y, al mismo tiempo, todo el tráfico cruzado pasa por ese enlace, por lo que hay que dimensionarlo."
  },
  {
    "id": "dc-121",
    "module": "dc",
    "topic": "SAN FC",
    "q": "¿Por qué el control de acceso en Fibre Channel se basa en WWPN y no en direcciones IP?",
    "options": [
      "Porque los WWPN son direcciones IP especiales del fabric",
      "Porque las HBA no tienen ninguna identificación única",
      "Porque el WWPN identifica de forma única cada puerto a nivel de fabric, al margen de la capa 3",
      "Porque Fibre Channel solo funciona sobre redes iSCSI"
    ],
    "answer": 2,
    "exp": "El WWPN es un identificador de puerto propio de FC, estable y único, ideal para definir quién puede comunicarse con quién."
  },
  {
    "id": "dc-122",
    "module": "dc",
    "topic": "SAN FC",
    "q": "Un servidor se conecta a la SAN con dos HBA. ¿Qué conviene configurar en el host?",
    "options": [
      "Dos volúmenes independientes, uno por cada HBA",
      "Un software de multipath que reparta cargas y aísle rutas para que un fallo no interrumpa el acceso",
      "Un único driver que use solo la primera ruta detectada",
      "Desactivar la HBA secundaria para evitar conflictos"
    ],
    "answer": 1,
    "exp": "El multipath equilibra el uso de rutas y conmuta automáticamente ante fallos de HBA, enlace o switch."
  },
  {
    "id": "dc-123",
    "module": "dc",
    "topic": "SAN FC",
    "q": "Varios hosts realizan copias simultáneas por el mismo ISL de la SAN y aparecen congestiones. ¿Cuál es la actuación más adecuada?",
    "options": [
      "Desactivar el zonado para aprovechar todos los caminos",
      "Aumentar el número de LUNs presentados al mismo target",
      "Reducir el tamaño de los LUNs",
      "Dimensionar los ISL con más enlaces o mayor capacidad y distribuir el tráfico de copias por varias rutas"
    ],
    "answer": 3,
    "exp": "La congestión en un ISL se resuelve con más capacidad y reparto de carga; el número de LUNs o el zonado no aumentan el ancho de banda del enlace."
  },
  {
    "id": "dc-124",
    "module": "dc",
    "topic": "SAN FC",
    "q": "Además del zonado, ¿qué función cumple el LUN masking en el array de almacenamiento?",
    "options": [
      "Restringir qué volumen lógico puede ver cada host, para que solo acceda a lo asignado",
      "Segmentar el tráfico de Fibre Channel por VLAN",
      "Comprimir los datos antes de escribirlos",
      "Crear réplicas entre datacenters"
    ],
    "answer": 0,
    "exp": "El masking es una segunda barrera en el propio array: aunque un host alcance un LUN, no podrá usarlo si no está en su lista de permitidos."
  },
  {
    "id": "dc-125",
    "module": "dc",
    "topic": "SAN FC",
    "q": "¿Qué ventaja aporta una HBA frente a una NIC convencional para conectarse a una SAN de Fibre Channel?",
    "options": [
      "Permite usar cables de cobre categoría 6A",
      "Es una NIC con más direcciones MAC",
      "Descarga a la CPU el procesamiento de Fibre Channel y aporta drivers dedicados y estables",
      "Admite tramas jumbo sin ninguna configuración"
    ],
    "answer": 2,
    "exp": "La HBA implementa el stack de FC en hardware y con software propio, reduciendo carga de CPU y aportando mayor fiabilidad que una NIC genérica."
  },
  {
    "id": "dc-126",
    "module": "dc",
    "topic": "SAN FC",
    "q": "En una SAN, ¿qué caracteriza a un director frente a un switch de Fibre Channel convencional?",
    "options": [
      "Es un switch de pocos puertos sin software de gestión",
      "Ofrece alta densidad de puertos, conmutación de alta capacidad y redundancia interna, orientado al núcleo del fabric",
      "Es un dispositivo que convierte Fibre Channel en iSCSI",
      "Es una herramienta para crear zonas automáticamente"
    ],
    "answer": 1,
    "exp": "Los directores están pensados para el núcleo: más puertos, componentes redundantes y funciones avanzadas de gestión del fabric."
  },
  {
    "id": "dc-127",
    "module": "dc",
    "topic": "SAN IP",
    "q": "En una SAN iSCSI, ¿qué aporta la autenticación CHAP?",
    "options": [
      "Verifica la identidad de iniciador y target con credenciales, evitando conexiones no autorizadas al volumen",
      "Cifra el contenido de los LUN",
      "Comprime el tráfico iSCSI",
      "Sustituye al zonado de Fibre Channel"
    ],
    "answer": 0,
    "exp": "CHAP añade autenticación de extremo a extremo en la sesión iSCSI; sin ella, cualquier iniciador podría intentar conectarse al target."
  },
  {
    "id": "dc-128",
    "module": "dc",
    "topic": "SAN IP",
    "q": "¿Cuál es una buena práctica al diseñar una SAN iSCSI sobre la red existente?",
    "options": [
      "Compartir la misma VLAN que el tráfico de oficina, ya que iSCSI no se ve afectado por la congestión",
      "Desactivar TCP para reducir la latencia",
      "Usar enlaces de 1 Gb compartidos con el tráfico de copias de seguridad",
      "Segmentar el tráfico de almacenamiento en VLAN dedicada y garantizar ancho de banda y latencia estables"
    ],
    "answer": 3,
    "exp": "El iSCSI compite por la red con el resto del tráfico; aislarlo y dimensionarlo evita que la congestión se traduzca en lentitud del almacenamiento."
  },
  {
    "id": "dc-129",
    "module": "dc",
    "topic": "SAN IP",
    "q": "¿Qué aporta un adaptador con offload de iSCSI frente a un iniciador de software?",
    "options": [
      "Permite conectarse sin cable de red",
      "Convierte el tráfico iSCSI en Fibre Channel",
      "Descarga al procesador del host la gestión de sesiones y del protocolo, reduciendo su uso de CPU",
      "Elimina la necesidad de direcciones IP"
    ],
    "answer": 2,
    "exp": "El offload ejecuta el apilado iSCSI en el propio adaptador, liberando CPU para la aplicación y mejorando la estabilidad bajo carga."
  },
  {
    "id": "dc-130",
    "module": "dc",
    "topic": "NAS",
    "q": "¿Qué protocolo se usa habitualmente para compartir archivos con equipos Windows desde un NAS?",
    "options": [
      "FCoE",
      "SMB/CIFS",
      "iSCSI",
      "LLDP"
    ],
    "answer": 1,
    "exp": "SMB/CIFS es el protocolo de archivos propio de Windows; iSCSI y FCoE transportan bloques, no sistemas de archivos compartidos."
  },
  {
    "id": "dc-131",
    "module": "dc",
    "topic": "NAS",
    "q": "Un clúster de servidores Linux monta un directorio compartido por un NAS. ¿Qué protocolo es el habitual y qué conviene vigilar?",
    "options": [
      "SMB, y desactivar los permisos para simplificar",
      "iSCSI, porque monta sistemas de archivos remotos",
      "Fibre Channel, ya que NFS solo sirve para Windows",
      "NFS, prestando atención a los accesos concurrentes y al bloqueo de archivos"
    ],
    "answer": 3,
    "exp": "NFS es el protocolo de archivos habitual en Linux; con varios clientes conviene controlar bloqueos y consistencia de las escrituras."
  },
  {
    "id": "dc-132",
    "module": "dc",
    "topic": "NAS",
    "q": "En un NAS usado como destino de copias de seguridad, ¿qué aspecto es crítico dimensionar?",
    "options": [
      "El rendimiento sostenido de escritura y la capacidad de retención, en función de la ventana de backup",
      "El número máximo de carpetas creadas",
      "La versión del navegador web de los usuarios",
      "El número de VLANs de gestión del datacenter"
    ],
    "answer": 0,
    "exp": "Si la velocidad de escritura o la capacidad no alcanzan, la copia no termina dentro de la ventana prevista y queda incompleta."
  },
  {
    "id": "dc-133",
    "module": "dc",
    "topic": "RAID",
    "q": "Se forma un RAID 0 con cuatro discos del mismo tamaño. ¿Qué lo caracteriza?",
    "options": [
      "Tolerancia de fallos con paridad distribuida",
      "Espejo completo de los datos en todos los discos",
      "Distribuye los datos en bandas sin paridad: aporta capacidad útil total y rendimiento, pero un fallo destruye el conjunto",
      "Agrupa los discos en pares espejo independientes"
    ],
    "answer": 2,
    "exp": "El RAID 0 no tiene redundancia alguna; se usa cuando se prioriza el rendimiento y la capacidad y el dato no es crítico."
  },
  {
    "id": "dc-134",
    "module": "dc",
    "topic": "RAID",
    "q": "¿Cuál es la función de un disco de recambio (hot spare) en una matriz RAID?",
    "options": [
      "Ampliar la capacidad útil del conjunto como espacio de trabajo",
      "Sustituir automáticamente a un disco defectuoso para iniciar la reconstrucción sin intervención manual",
      "Actuar como caché de escritura del controlador",
      "Almacenar los snapshots del volumen"
    ],
    "answer": 1,
    "exp": "El disco de recambio entra solo en cuanto el array detecta el fallo, acortando el tiempo en que el conjunto queda expuesto."
  },
  {
    "id": "dc-135",
    "module": "dc",
    "topic": "RAID",
    "q": "En un RAID 5 formado por cinco discos del mismo tamaño, ¿cuánta capacidad útil se obtiene aproximadamente?",
    "options": [
      "El equivalente a cuatro discos, porque la paridad ocupa el espacio de uno",
      "El equivalente a cinco discos, porque la paridad se guarda fuera de la matriz",
      "La mitad de la capacidad, porque siempre se duplican los datos",
      "El equivalente a tres discos, porque se reservan dos para paridad"
    ],
    "answer": 0,
    "exp": "En RAID 5 la paridad se distribuye entre los discos y ocupa el espacio equivalente a uno, de modo que la capacidad útil es de n-1 discos."
  },
  {
    "id": "dc-136",
    "module": "dc",
    "topic": "RAID",
    "q": "Tras el fallo de un disco en un RAID 5, ¿por qué es tan importante que la reconstrucción se realice cuanto antes?",
    "options": [
      "Porque la reconstrucción acelera el rendimiento de los discos buenos",
      "Porque el disco de recambio aumenta la capacidad útil del conjunto",
      "Porque el conjunto queda vulnerable durante la reconstrucción y una segunda incidencia puede provocar la pérdida de datos",
      "Porque sin disco de recambio el controlador deja de aceptar escrituras"
    ],
    "answer": 2,
    "exp": "Mientras se reconstruye, el RAID depende de la paridad para sobrevivir a otro fallo; alargar el proceso amplía la ventana de riesgo."
  },
  {
    "id": "dc-137",
    "module": "dc",
    "topic": "RAID",
    "q": "Para una carga con mucha escritura aleatoria y alta exigencia de rendimiento, ¿qué nivel suele elegirse y por qué?",
    "options": [
      "RAID 5, porque la paridad protege sin penalizar las escrituras",
      "RAID 10, porque combina espejos y bandas: tolera fallos por par y su reconstrucción es más rápida",
      "RAID 0, porque añade paridad distribuida",
      "RAID 6, porque espeja los datos en todos los discos"
    ],
    "answer": 1,
    "exp": "El RAID 10 evita el cálculo de paridad, tolera varios fallos (uno por par) y reconstruye más rápido, ideal para E/S intensivas."
  },
  {
    "id": "dc-138",
    "module": "dc",
    "topic": "RAID",
    "q": "¿Cómo influye el tamaño de banda (stripe) en el rendimiento de una matriz RAID?",
    "options": [
      "No influye, solo cambia el aspecto del volumen",
      "Cuanto mayor es, mejor va para cualquier tipo de carga",
      "Solo afecta a la capacidad útil, no al rendimiento",
      "Las bandas pequeñas favorecen E/S pequeñas y aleatorias y las grandes, las transferencias secuenciales grandes"
    ],
    "answer": 3,
    "exp": "Hay que ajustar el stripe al tamaño de las E/S habituales; un tamaño desajustado penaliza el rendimiento de la carga."
  },
  {
    "id": "dc-139",
    "module": "dc",
    "topic": "RAID",
    "q": "¿Por qué los controladores de RAID usan caché con batería o supercondensador?",
    "options": [
      "Para conservar las escrituras pendientes en memoria y protegerlas ante un corte de energía",
      "Para aumentar la capacidad útil del volumen",
      "Para sustituir al disco de recambio",
      "Para comprimir los datos en memoria"
    ],
    "answer": 0,
    "exp": "La caché acelera las escrituras y la batería garantiza que, si se corta la energía, esas escrituras pendientes no se pierdan."
  },
  {
    "id": "dc-140",
    "module": "dc",
    "topic": "RAID",
    "q": "En un servidor con controlador RAID por software, ¿qué inconveniente principal tiene frente a un controlador dedicado con caché?",
    "options": [
      "No permite crear volúmenes RAID 5",
      "No admite discos de las interfaces habituales",
      "Consume CPU del host y no ofrece caché protegida ni gestión avanzada de reconstrucción",
      "Impide el uso de discos de recambio"
    ],
    "answer": 2,
    "exp": "El RAID por software desplaza el trabajo al procesador y carece de caché protegida, por lo que rinde menos y es menos robusto ante cortes."
  },
  {
    "id": "dc-141",
    "module": "dc",
    "topic": "Almacenamiento",
    "q": "En una política de tiering automático de almacenamiento, ¿qué criterio suele usarse para mover datos entre capas?",
    "options": [
      "El color del volumen asignado por el administrador",
      "La frecuencia de acceso y la edad del dato, llevando lo más caliente a la capa más rápida",
      "El número de usuarios del dominio",
      "La fecha de instalación del array"
    ],
    "answer": 1,
    "exp": "Los motores de tiering analizan el calor de los datos: lo más accedido sube de capa y lo poco usado baja, optimizando capacidad y rendimiento."
  },
  {
    "id": "dc-142",
    "module": "dc",
    "topic": "Almacenamiento",
    "q": "¿Qué técnica suele emplear un snapshot basado en copy-on-write y cómo afecta su espacio?",
    "options": [
      "Copia las modificaciones originales antes de sobrescribirlas; el snapshot solo guarda los cambios, por lo que su espacio crece con las escrituras posteriores",
      "Duplica el volumen completo en el momento de crearlo y siempre ocupa el doble",
      "Comprime el volumen para que no ocupe espacio adicional",
      "Envía los cambios a una cinta de respaldo"
    ],
    "answer": 0,
    "exp": "Con copy-on-write se conserva solo el estado previo de los bloques modificados, así que el espacio consumido depende del volumen de cambios."
  },
  {
    "id": "dc-143",
    "module": "dc",
    "topic": "Almacenamiento",
    "q": "Sobre un volumen de bases de datos se crean snapshots frecuentes y el rendimiento decae. ¿Qué conviene revisar?",
    "options": [
      "La resolución de la consola de gestión",
      "El número de snapshots retenidos y la profundidad de la cadena, reduciéndolos si generan impacto",
      "La dirección IP de los hosts",
      "El color del panel frontal del array"
    ],
    "answer": 1,
    "exp": "Cada snapshot añade sobrecosto de gestión y una cadena larga penaliza las E/S; conviene limitar su cantidad y duración."
  },
  {
    "id": "dc-144",
    "module": "dc",
    "topic": "Almacenamiento",
    "q": "¿Qué implica aceptar un RPO no nulo en una réplica asíncrona entre datacenters?",
    "options": [
      "Que el sitio réplica nunca podrá arrancar",
      "Que la réplica consume el doble de ancho de banda en todo momento",
      "Que no hace falta monitorizar la réplica",
      "Que en un fallo se perderán los cambios realizados en el intervalo entre réplicas, a cambio de menor impacto en el sitio origen"
    ],
    "answer": 3,
    "exp": "La réplica asíncrona no espera la confirmación remota: es más ligera para el origen pero deja un hueco de datos por perder que hay que aceptar."
  },
  {
    "id": "dc-145",
    "module": "dc",
    "topic": "Almacenamiento",
    "q": "¿Cuál es el efecto de una réplica síncrona sobre la latencia de escritura?",
    "options": [
      "Ninguno: la escritura es igual en cualquier distancia entre sitios",
      "La escritura no se confirma hasta que el sitio remoto la confirma, por lo que la distancia condiciona el diseño",
      "Reduce la latencia porque comprime los datos",
      "Solo afecta a las lecturas del sitio primario"
    ],
    "answer": 1,
    "exp": "Al exigir confirmación remota, la latencia de ida y vuelta se suma a cada escritura; por eso la síncrona se limita a distancias cortas."
  },
  {
    "id": "dc-146",
    "module": "dc",
    "topic": "Almacenamiento",
    "q": "En el aprovisionamiento fino (thin provisioning) de un array, ¿qué riesgo hay que vigilar?",
    "options": [
      "Que los volúmenes prometidos superen el espacio físico real y el pool se llene de golpe",
      "Que los discos físicos aumenten de tamaño automáticamente",
      "Que el rendimiento se multiplique por dos",
      "Que deje de ser posible crear snapshots"
    ],
    "answer": 0,
    "exp": "El thin provisioning promete más espacio del que hay: sin control de uso y previsión de crecimiento, el pool puede quedarse sin espacio."
  },
  {
    "id": "dc-147",
    "module": "dc",
    "topic": "Almacenamiento",
    "q": "Al comunicar la capacidad de una matriz, ¿por qué la capacidad útil tras formatear es menor que la suma bruta de los discos?",
    "options": [
      "Porque los fabricantes redondean hacia abajo el tamaño de los discos",
      "Porque el sistema de archivos duplica los datos al formatear",
      "Porque se reserva espacio para paridad, metadatos y estructuras del propio sistema",
      "Porque la capacidad bruta incluye la caché de memoria del array"
    ],
    "answer": 2,
    "exp": "La paridad, las cabeceras y los metadatos consumen parte del espacio, por lo que conviene planificar sobre la capacidad útil real."
  },
  {
    "id": "dc-148",
    "module": "dc",
    "topic": "Virtualización",
    "q": "¿Qué es el balón de memoria (ballooning) en un entorno virtualizado?",
    "options": [
      "Una técnica que comprime el disco del huésped",
      "Un driver que reclama memoria del huésped y la devuelve al hipervisor para redistribuirla cuando hay presión",
      "Un método para clonar máquinas en caliente",
      "Un tipo de snapshot incremental"
    ],
    "answer": 1,
    "exp": "El balón deja al hipervisor recuperar memoria sin apagar la VM, aunque con presión extrema puede aumentar el uso de swap."
  },
  {
    "id": "dc-149",
    "module": "dc",
    "topic": "Virtualización",
    "q": "En un host con dos sockets, ¿por qué conviene mantener las vCPU de una VM dentro del mismo nodo NUMA?",
    "options": [
      "Para que la memoria asignada pertenezca al mismo socket y se eviten accesos remotos con mayor latencia",
      "Porque las vCPU solo existen en el segundo socket",
      "Para reducir el número de tarjetas de red",
      "Porque el hipervisor no admite más de dos sockets"
    ],
    "answer": 0,
    "exp": "Cuando la memoria está en el socket remoto, cada acceso cruza el interconnect y penaliza el rendimiento; la afinidad NUMA evita eso."
  },
  {
    "id": "dc-150",
    "module": "dc",
    "topic": "Virtualización",
    "q": "Se habilita el reinicio automático (HA) de las VMs de un clúster. ¿Cuál es la principal consideración al dimensionarla?",
    "options": [
      "Que todas las VMs estén siempre apagadas",
      "Que se desactive el balanceo de carga",
      "Que el clúster tenga recursos suficientes para reubicar o arrancar las VMs tras el fallo de un host",
      "Que las VMs usen solo una vCPU"
    ],
    "answer": 2,
    "exp": "Si tras el fallo no queda capacidad, las máquinas no podrán reubicarse; la reserva del clúster es la clave de la disponibilidad automática."
  },
  {
    "id": "dc-151",
    "module": "dc",
    "topic": "Virtualización",
    "q": "¿Qué requisito habitual tiene una migración en caliente entre hosts?",
    "options": [
      "Que la VM esté apagada durante la migración",
      "Red y almacenamiento accesibles desde ambos hosts, con ancho de banda suficiente y baja latencia",
      "Que ambos hosts compartan el mismo socket físico",
      "Que se desactive el almacenamiento SAN"
    ],
    "answer": 1,
    "exp": "La migración traslada el estado de la VM por la red y requiere que el destino vea el mismo almacenamiento, todo ello con una red adecuada."
  },
  {
    "id": "dc-152",
    "module": "dc",
    "topic": "Virtualización",
    "q": "Al consolidar servidores en un host para una carga de base de datos, ¿qué recurso suele agotarse primero?",
    "options": [
      "La memoria y las E/S de almacenamiento, antes que el número de vCPU",
      "El número de puertos de red del chasis",
      "El espacio disponible en el rack",
      "La versión del hipervisor instalada"
    ],
    "answer": 0,
    "exp": "Las bases de datos consumen mucha memoria caché y presionan el subsistema de E/S; el cómputo suele ser lo menos limitante."
  },
  {
    "id": "dc-153",
    "module": "dc",
    "topic": "Virtualización",
    "q": "Si se asigna a las VMs más memoria de la que tiene el host (sobreasignación de memoria), ¿qué condición debe cumplirse?",
    "options": [
      "Que todas las VMs usen exactamente la memoria asignada en todo momento",
      "Que el almacenamiento sea siempre de estado sólido",
      "Que no existan snapshots en el host",
      "Que haya controles de presión (ballooning, swap) y margen suficiente para no dejar el host sin memoria"
    ],
    "answer": 3,
    "exp": "La sobreasignación solo es sostenible con mecanismos que devuelvan memoria y con margen; si no, el host se queda sin ella y entra en crisis."
  },
  {
    "id": "dc-154",
    "module": "dc",
    "topic": "Virtualización",
    "q": "¿Qué permite el alta en caliente de recursos (hot-add) en una VM?",
    "options": [
      "Sustituir el disco en caliente sin controlador",
      "Añadir vCPU o memoria a una máquina en funcionamiento, sin apagarla, si el sistema operativo lo soporta",
      "Migrar la VM a otro datacenter sin red",
      "Ampliar la capacidad del array sin tocar los volúmenes"
    ],
    "answer": 1,
    "exp": "El alta en caliente evita ventanas de parada para crecer en CPU o memoria, una ventaja propia del entorno virtualizado."
  },
  {
    "id": "dc-155",
    "module": "dc",
    "topic": "Virtualización",
    "q": "¿Para qué sirven las reservas de CPU y memoria en un clúster virtual?",
    "options": [
      "Limitar el número de VMs por datastore",
      "Evitar que se creen snapshots",
      "Garantizar un mínimo de recursos a las VMs críticas aunque otros consuman más",
      "Sustituir a la redundancia de los hosts"
    ],
    "answer": 2,
    "exp": "Las reservas aseguran que las máquinas prioritarias tengan recursos garantizados incluso en situaciones de presión."
  },
  {
    "id": "dc-156",
    "module": "dc",
    "topic": "Virtualización",
    "q": "Al diseñar la red virtual de un host, ¿qué práctica es habitual para aislar los distintos tráficos?",
    "options": [
      "Usar un único puerto de grupo en una sola VLAN para simplificar el cableado",
      "Crear vSwitches o puertos de grupo con VLAN separadas (producción, gestión, migración) y limitación de tráfico",
      "Desactivar el filtrado de tramas del hipervisor",
      "Conectar todas las VMs a una única tarjeta física sin redundancia"
    ],
    "answer": 1,
    "exp": "Separar los flujos en VLANs distintas con limitación evita que la migración o la gestión compitan con la producción."
  },
  {
    "id": "dc-157",
    "module": "dc",
    "topic": "Dimensionamiento",
    "q": "¿Qué métricas conviene usar para dimensionar el almacenamiento de una carga de E/S aleatoria?",
    "options": [
      "El número de LUNs creados",
      "IOPS y latencia por percentil, junto con el rendimiento sostenido en escritura",
      "La suma del ancho de banda de los discos en reposo",
      "El número de carpetas del sistema de archivos"
    ],
    "answer": 1,
    "exp": "Las E/S aleatorias se miden en operaciones por segundo y en latencia; sin esos datos, la capacidad de espacio no dice nada del rendimiento."
  },
  {
    "id": "dc-158",
    "module": "dc",
    "topic": "Dimensionamiento",
    "q": "Un host presenta una cola de E/S creciente mientras la CPU está al 30 %. ¿Dónde está el probable cuello de botella?",
    "options": [
      "En la memoria del usuario remoto",
      "En el número de usuarios conectados al dominio",
      "En el camino de E/S (adaptador, red o almacenamiento), no en el procesador",
      "En la resolución de la consola de monitorización"
    ],
    "answer": 2,
    "exp": "CPU ociosa con E/S encoladas señala que el cuello de botella está aguas abajo, en la red o en el almacenamiento."
  },
  {
    "id": "dc-159",
    "module": "dc",
    "topic": "Dimensionamiento",
    "q": "¿Por qué conviene dimensionar potencia y refrigeración con margen frente a la carga actual?",
    "options": [
      "Porque la potencia nominal de los equipos siempre coincide con la real",
      "Porque añadir equipos en el futuro superaría rápido la capacidad instalada de energía y enfriamiento",
      "Porque a mayor potencia instalada menor consumo total",
      "Porque la normativa prohíbe usar más del 50 % de la capacidad"
    ],
    "answer": 1,
    "exp": "El espacio, la energía y el frío son los recursos que más rápido se agotan; prever margen evita rehacer la instalación al crecer."
  },
  {
    "id": "dc-160",
    "module": "dc",
    "topic": "Dimensionamiento",
    "q": "Se instalan varios servidores idénticos para una aplicación distribuida. ¿Qué criterio de distribución reduce mejor el riesgo?",
    "options": [
      "Agruparlos todos en el mismo rack para facilitar el cableado",
      "Conectarlos todos a la misma PDU",
      "Conectarlos todos al mismo switch de acceso",
      "Repartirlos entre dominios de fallo, switches y circuitos eléctricos distintos"
    ],
    "answer": 3,
    "exp": "Repartir por dominios de fallo evita que un solo incidente (switch, circuito o zona) deje la aplicación entera caída."
  },
  {
    "id": "dc-161",
    "module": "dc",
    "topic": "Dimensionamiento",
    "q": "¿Qué factores dominan el dimensionamiento del enlace de replicación entre datacenters?",
    "options": [
      "El número de VLANs del datacenter origen",
      "El volumen de datos a enviar y la ventana disponible, más margen para picos y reintentos",
      "La latencia de teclado y ratón de los usuarios",
      "El número de snapshots locales del array"
    ],
    "answer": 1,
    "exp": "La replicación depende de cuánto dato hay que mover y en cuánto tiempo; el ancho de banda debe cubrirlo con holgura."
  },
  {
    "id": "dc-162",
    "module": "dc",
    "topic": "Redundancia",
    "q": "¿Qué implica un diseño de alimentación 2N en un datacenter?",
    "options": [
      "Dos cadenas de suministro completamente independientes hasta la carga: si falla una, la otra sigue alimentando",
      "Tener dos UPS en paralelo con el mismo cableado",
      "Duplicar solo los discos del almacenamiento",
      "Alimentar dos fases por el mismo cable de la PDU"
    ],
    "answer": 0,
    "exp": "En 2N no hay elementos compartidos entre las dos cadenas, con lo que se elimina cualquier punto único en el camino de energía."
  },
  {
    "id": "dc-163",
    "module": "dc",
    "topic": "Redundancia",
    "q": "¿Cómo se puede mantener un UPS o un módulo de energía sin interrumpir la carga?",
    "options": [
      "Cortando la alimentación principal durante el trabajo",
      "Apagando todos los servidores del rack",
      "Mediante bypass estático o manual y módulos redundantes que permiten sacar el elemento del camino de energía",
      "Desconectando el cable de puesta a tierra"
    ],
    "answer": 2,
    "exp": "El bypass y los módulos redundantes permiten intervenir el equipo mientras la carga sigue alimentada por la ruta alternativa."
  },
  {
    "id": "dc-164",
    "module": "dc",
    "topic": "Redundancia",
    "q": "¿Qué significa dominio de fallo en el diseño de redundancia?",
    "options": [
      "El conjunto de componentes que pueden fallar a la vez",
      "El grupo de usuarios que comparten credenciales",
      "El rack con más equipos del salón",
      "La ventana de mantenimiento programada"
    ],
    "answer": 0,
    "exp": "Conviene que los caminos redundantes pertenezcan a dominios de fallo distintos, de modo que un solo suceso no los afecte a todos."
  },
  {
    "id": "dc-165",
    "module": "dc",
    "topic": "Redundancia",
    "q": "Un diseño cuenta con un único switch de núcleo y un único enlace hacia el almacenamiento. ¿Qué propuesta es la correcta?",
    "options": [
      "Aumentar la velocidad del enlace único",
      "Documentarlo y mantenerlo sin cambios",
      "Añadir más discos al mismo controlador",
      "Eliminar los puntos únicos de fallo con redundancia de caminos y conmutación automática, probándola"
    ],
    "answer": 3,
    "exp": "Un solo componente en el camino crítico es un punto único de fallo; hay que duplicarlo y validar que la conmutación funciona."
  },
  {
    "id": "dc-166",
    "module": "dc",
    "topic": "Redundancia",
    "q": "En la distribución eléctrica, ¿por qué conviene repartir la carga entre varios circuitos y PDUs en lugar de concentrarla?",
    "options": [
      "Para que el fallo de un circuito no deje sin energía a todos los equipos y para respetar los márgenes de cada ruta",
      "Para poder usar cables de menor sección",
      "Para reducir el número de interruptores necesarios",
      "Porque las PDU no admiten más de un circuito"
    ],
    "answer": 0,
    "exp": "El reparto evita un punto único de fallo y deja margen por fase; concentrar la demanda en un solo circuito invita a sobrecargas."
  },
  {
    "id": "dc-167",
    "module": "dc",
    "topic": "Redundancia",
    "q": "¿Por qué es importante probar periódicamente la conmutación a fuentes alternativas?",
    "options": [
      "Para cumplir con el color del cableado",
      "Porque las pruebas aumentan la capacidad de los UPS",
      "Porque la redundancia no probada puede fallar en el momento crítico; la prueba valida tiempos y dependencias",
      "Porque el fabricante exige reiniciar las VMs"
    ],
    "answer": 2,
    "exp": "Muchos planes de contingencia fallan por dependencias no documentadas; solo una prueba real demuestra que la conmutación opera como se espera."
  },
  {
    "id": "dc-168",
    "module": "dc",
    "topic": "Monitoreo",
    "q": "¿Cómo se calcula el PUE de un datacenter?",
    "options": [
      "Consumo de TI dividido entre el consumo total",
      "Consumo total del datacenter dividido entre el consumo de los equipos de TI",
      "Temperatura de entrada dividida entre la de salida",
      "Ancho de banda total dividido entre el de los equipos de TI"
    ],
    "answer": 1,
    "exp": "El PUE relaciona el consumo total con el de TI: cuanto más cercano a 1, menos energía se destina a la infraestructura de apoyo."
  },
  {
    "id": "dc-169",
    "module": "dc",
    "topic": "Monitoreo",
    "q": "¿Qué característica debe tener un sistema de alertas de monitorización fiable?",
    "options": [
      "Distinguir síntoma de causa y escalar con umbrales, evitando tormentas de alertas que oculten el problema real",
      "Enviar todos los eventos en tiempo real a todos los técnicos",
      "Alertar solo a través del soporte del fabricante",
      "Registrar únicamente los errores del sistema operativo"
    ],
    "answer": 0,
    "exp": "Un buen sistema reduce el ruido y presenta el evento con contexto, para que el equipo ataque la causa y no los síntomas."
  },
  {
    "id": "dc-170",
    "module": "dc",
    "topic": "Monitoreo",
    "q": "¿Qué datos conviene recoger de los sensores ambientales y de energía?",
    "options": [
      "Solo la temperatura media del edificio",
      "El número de puertos activos del switch",
      "Temperatura y humedad por zonas, corriente y potencia por PDU y estado de baterías, con histórico",
      "Las versiones de firmware de todos los equipos"
    ],
    "answer": 2,
    "exp": "Esos datos permiten detectar tendencias, anticipar sobrecargas y verificar que el enfriamiento se mantiene dentro de rango."
  },
  {
    "id": "dc-171",
    "module": "dc",
    "topic": "Monitoreo",
    "q": "¿Para qué sirve la interfaz de gestión fuera de banda de un servidor?",
    "options": [
      "Acelerar las transferencias de datos entre racks",
      "Sustituir al controlador RAID",
      "Crear VLANs de almacenamiento",
      "Gestionar el servidor aunque esté apagado o la red de datos falle: encendido remoto, consola y sensores"
    ],
    "answer": 3,
    "exp": "La gestión fuera de banda trabaja por una red propia, por lo que permite recuperar un servidor cuando el sistema o la red principal no responden."
  },
  {
    "id": "dc-172",
    "module": "dc",
    "topic": "Monitoreo",
    "q": "¿Qué aporta la planificación de capacidad en la operación de un datacenter?",
    "options": [
      "Permite evitar cualquier mantenimiento programado",
      "Anticipar cuándo se agotarán espacio, energía, refrigeración y ancho de banda para invertir con tiempo",
      "Sustituye a la monitorización del rendimiento",
      "Garantiza que no habrá interrupciones"
    ],
    "answer": 1,
    "exp": "Con métricas históricas se proyecta el agotamiento de recursos y se planifican ampliaciones antes de que el problema se produzca."
  },
  {
    "id": "dc-173",
    "module": "dc",
    "topic": "Estructura física",
    "q": "Al distribuir racks en el salón de servidores, ¿qué condición física hay que comprobar?",
    "options": [
      "La capacidad de carga del piso por metro cuadrado y la distribución de pesos",
      "El color del techo y la iluminación",
      "El número de ventanas del edificio",
      "La marca de los racks instalados"
    ],
    "answer": 0,
    "exp": "Los racks de alta densidad superan con facilidad la carga admisible del piso, por lo que hay que verificarla y repartir bien el peso."
  },
  {
    "id": "dc-174",
    "module": "dc",
    "topic": "Estructura física",
    "q": "¿Qué función cumple el piso elevado en un datacenter?",
    "options": [
      "Aislamiento acústico frente al ruido de los servidores",
      "Sustituye al sistema de puesta a tierra",
      "Ruta por debajo el cableado y el distribuidor de aire, facilitando mantenimiento y refrigeración",
      "Aumenta la capacidad de carga de los racks"
    ],
    "answer": 2,
    "exp": "El piso elevado crea un espacio para distribuir el aire y los cables de forma ordenada y accesible."
  },
  {
    "id": "dc-175",
    "module": "dc",
    "topic": "Estructura física",
    "q": "¿Qué es la contención de pasillos y por qué mejora la eficiencia?",
    "options": [
      "Un sistema que apaga los servidores durante la noche",
      "Cerrar físicamente el pasillo de admisión o de extracción para evitar la mezcla de aire caliente y frío y poder subir la consigna",
      "Una barrera de seguridad para el paso de personas",
      "Un método de etiquetado de racks"
    ],
    "answer": 1,
    "exp": "Al impedir la mezcla de aires, el equipo de climatización trabaja menos y el salón puede operar a temperatura más alta."
  },
  {
    "id": "dc-176",
    "module": "dc",
    "topic": "Estructura física",
    "q": "¿Por qué es importante un correcto sistema de puesta a tierra en el datacenter?",
    "options": [
      "Porque alimenta los servidores cuando se corta la energía",
      "Para aumentar la potencia de los UPS",
      "Porque es requisito exclusivo del cableado de red",
      "Para derivar corrientes de falla y sobretensiones, protegiendo equipos y personal y reduciendo el ruido en las comunicaciones"
    ],
    "answer": 3,
    "exp": "Una buena tierra limita las tensiones peligrosas y estabiliza las comunicaciones; es un requisito de seguridad y de fiabilidad."
  },
  {
    "id": "dc-177",
    "module": "dc",
    "topic": "Estructura física",
    "q": "¿Qué controles físicos suelen combinarse para proteger el salón de servidores?",
    "options": [
      "Control de acceso con registro y videovigilancia, limitando el paso al personal autorizado",
      "Un candado compartido por todo el equipo",
      "La contraseña del hipervisor",
      "La segmentación de VLANs"
    ],
    "answer": 0,
    "exp": "La seguridad física combina un control de acceso identificable con monitorización, y es complementaria a las medidas lógicas."
  },
  {
    "id": "dc-178",
    "module": "dc",
    "topic": "Estructura física",
    "q": "¿Por qué conviene dejar pasillos de servicio frente y detrás de los racks?",
    "options": [
      "Para aumentar el número de racks instalables",
      "Para reducir la necesidad de UPS",
      "Para poder extraer y mantener equipos sin obstruir la circulación ni el flujo de aire",
      "Porque los fabricantes no permiten el acceso trasero"
    ],
    "answer": 2,
    "exp": "Sin espacio de servicio no se pueden sacar discos, fuentes o tarjetas con seguridad, y se estorba el paso y el aire."
  },
  {
    "id": "dc-179",
    "module": "dc",
    "topic": "Convergencia",
    "q": "¿Qué es la convergencia de redes en un datacenter?",
    "options": [
      "Unir todos los servidores en un solo chasis",
      "Transportar datos, almacenamiento y gestión sobre una misma infraestructura o plataforma unificada",
      "Sustituir todo el cableado de cobre por fibra",
      "Eliminar la necesidad de switches"
    ],
    "answer": 1,
    "exp": "La convergencia unifica transportes que antes iban por redes separadas, simplificando el diseño y la operación."
  },
  {
    "id": "dc-180",
    "module": "dc",
    "topic": "Convergencia",
    "q": "¿Qué conviene evaluar antes de converger SAN y LAN en la misma infraestructura?",
    "options": [
      "Únicamente el ahorro en cables",
      "La marca de los switches",
      "El número de unidades de rack disponibles",
      "El impacto en segmentación, calidad de servicio y operación, porque una mala mezcla puede afectar al almacenamiento"
    ],
    "answer": 3,
    "exp": "Compartir infraestructura exige controlar prioridades y aislamiento; sin ello, el tráfico de datos puede degradar el acceso a los datos."
  },
  {
    "id": "dc-181",
    "module": "dc",
    "topic": "Convergencia",
    "q": "¿Qué caracteriza a una plataforma hiperconvergida?",
    "options": [
      "Combina cómputo, almacenamiento y red en servidores de propósito general con software que gestiona el conjunto y escala por nodos",
      "Una SAN tradicional con discos conectados directamente",
      "Un switch con funciones de almacenamiento",
      "Un rack con más equipos de refrigeración"
    ],
    "answer": 0,
    "exp": "La hiperconvergencia resuelve todo en software sobre hardware estándar, ampliando la capacidad añadiendo nodos."
  },
  {
    "id": "dc-182",
    "module": "dc",
    "topic": "Convergencia",
    "q": "¿Cuál es una ventaja habitual de una infraestructura convergida frente a componentes aislados?",
    "options": [
      "Elimina la necesidad de dimensionar",
      "Permite usar cableado sin certificar",
      "Un diseño validado de extremo a extremo que simplifica el soporte y acelera el despliegue",
      "Reduce la latencia a cero"
    ],
    "answer": 2,
    "exp": "Al venir validada como conjunto, se reducen las incompatibilidades y los tiempos de puesta en marcha."
  },
  {
    "id": "dc-183",
    "module": "dc",
    "topic": "Convergencia",
    "q": "¿Qué riesgo principal conlleva depender de un único proveedor en una infraestructura convergida?",
    "options": [
      "Aumenta la redundancia de caminos",
      "Dificulta la interoperabilidad y la negociación futura, acoplando el diseño a una plataforma concreta",
      "Impide monitorizar el sistema",
      "Obliga a usar únicamente RAID 5"
    ],
    "answer": 1,
    "exp": "La dependencia reduce opciones de sustitución y expansión y encarece las renovaciones futuras."
  },
  {
    "id": "dc-184",
    "module": "dc",
    "topic": "Red LAN",
    "q": "¿Por qué el tráfico entre servidores (este-oeste) ha ganado importancia en los datacenters modernos?",
    "options": [
      "Porque las aplicaciones distribuidas y la replicación hacen que los servidores se comuniquen entre sí dentro del salón",
      "Porque los usuarios acceden desde el exterior con más frecuencia",
      "Porque el tráfico externo se cifra automáticamente",
      "Porque los racks se han colocado en línea recta"
    ],
    "answer": 0,
    "exp": "Antes el flujo mayor era del usuario al servidor; hoy buena parte del tráfico viaja entre servidores dentro del propio centro."
  },
  {
    "id": "dc-185",
    "module": "dc",
    "topic": "Red LAN",
    "q": "¿Qué aporta el enlace agregado entre un servidor y dos puertos de switch?",
    "options": [
      "Cifra el tráfico entre el servidor y el switch",
      "Sustituye a las VLANs",
      "Suma la capacidad de los puertos y permite que el fallo de uno no corte la comunicación",
      "Aumenta la latencia de forma controlada"
    ],
    "answer": 2,
    "exp": "El agrupamiento de enlaces aporta más ancho de banda y resiliencia, siempre que el switch y el host lo soporten y esté bien configurado."
  },
  {
    "id": "dc-186",
    "module": "dc",
    "topic": "Red LAN",
    "q": "En una red donde conviven datos de producción y tráfico de copias de seguridad, ¿qué conviene aplicar?",
    "options": [
      "Desactivar las copias durante el día sin más control",
      "Subir el MTU a valores extremos",
      "Priorización y limitación de ancho de banda para que las copias no saturen la producción",
      "Concentrar todo el tráfico en una única VLAN"
    ],
    "answer": 2,
    "exp": "Con calidad de servicio y límites, las copias aprovechan el ancho de banda que sobra sin perjudicar el servicio en horas pico."
  },
  {
    "id": "dc-187",
    "module": "dc",
    "topic": "SAN FC",
    "q": "¿Qué es el fabric en una SAN de Fibre Channel?",
    "options": [
      "Un volumen lógico compartido entre hosts",
      "Un protocolo de respaldo automático",
      "Una tarjeta de red de servidor",
      "El conjunto de switches y enlaces interconectados que forman un dominio único entre hosts y almacenamiento"
    ],
    "answer": 3,
    "exp": "El fabric es la red completa de Fibre Channel: todos los elementos conectados comparten un mismo dominio de comunicación."
  },
  {
    "id": "dc-188",
    "module": "dc",
    "topic": "SAN FC",
    "q": "¿Cuál es un motivo habitual para mantener la SAN en una red propia, separada de la LAN de datos?",
    "options": [
      "Para reducir el número de direcciones IP disponibles",
      "Aislar el tráfico de almacenamiento y garantizar latencia, ancho de banda y seguridad predecibles",
      "Para evitar el uso de switches",
      "Porque la LAN no admite tramas de más de 1500 bytes"
    ],
    "answer": 1,
    "exp": "Separar la red de almacenamiento evita que la competencia con el tráfico ordinario degrade el acceso a los datos."
  },
  {
    "id": "dc-189",
    "module": "dc",
    "topic": "SAN IP",
    "q": "¿Para qué sirve un gateway iSCSI?",
    "options": [
      "Convertir una SAN de Fibre Channel en una red de archivos NAS",
      "Permitir que hosts iSCSI accedan a volúmenes de una SAN existente mediante un puente entre protocolos",
      "Comprimir el tráfico de almacenamiento antes de enviarlo",
      "Sustituir al switch de acceso de la red LAN"
    ],
    "answer": 1,
    "exp": "El gateway actúa de traductor entre iSCSI sobre IP y el fabric existente, evitando tener que rehacer la infraestructura."
  },
  {
    "id": "dc-190",
    "module": "dc",
    "topic": "NAS",
    "q": "En un NAS configurado en clúster activo-activo, ¿qué aspecto es clave para la consistencia?",
    "options": [
      "Que todos los discos sean del mismo modelo",
      "Que el sistema de archivos soporte accesos concurrentes y bloqueo entre nodos",
      "Que use exclusivamente Fibre Channel",
      "Que disponga de una sola ruta de red"
    ],
    "answer": 1,
    "exp": "Con dos nodos escribiendo a la vez, hace falta un sistema de archivos que coordine los accesos o se producirán corrupciones."
  },
  {
    "id": "dc-191",
    "module": "dc",
    "topic": "RAID",
    "q": "En un array, la caché de escritura se desactiva por carga baja de la batería. ¿Qué ocurre?",
    "options": [
      "El controlador pasa a escritura directa, con menor rendimiento hasta que se recupere",
      "Se pierden los datos ya escritos",
      "El volumen se desmonta automáticamente",
      "El array cambia a RAID 0"
    ],
    "answer": 0,
    "exp": "Sin batería, el array no se arriesga a perder la caché ante un corte y escribe directamente a disco, penalizando el rendimiento."
  },
  {
    "id": "dc-192",
    "module": "dc",
    "topic": "Almacenamiento",
    "q": "¿Cuál es el beneficio y el riesgo principal de la deduplicación en un almacenamiento?",
    "options": [
      "Acelera las escrituras sin coste de CPU",
      "Elimina la necesidad de copias de seguridad",
      "Ahorra capacidad al eliminar bloques repetidos, pero añade procesamiento y puede degradar la escritura",
      "Garantiza cero pérdida de datos"
    ],
    "answer": 2,
    "exp": "La deduplicación libera espacio notable cuando hay datos repetidos, a cambio de coste de cómputo en el camino de escritura."
  },
  {
    "id": "dc-193",
    "module": "dc",
    "topic": "Almacenamiento",
    "q": "¿Cuál es la diferencia esencial entre un snapshot y una réplica?",
    "options": [
      "Ambos protegen por igual ante el fallo total del sistema de origen",
      "El snapshot es una imagen puntual en el propio sistema; la réplica mantiene una copia en otro dispositivo o sitio",
      "El snapshot es siempre incremental y la réplica nunca",
      "La réplica solo sirve para datos en bloque y el snapshot solo para archivos"
    ],
    "answer": 1,
    "exp": "El snapshot convive con el origen y no aísla el dato de su infraestructura, mientras que la réplica lo mantiene en un elemento separado."
  },
  {
    "id": "dc-194",
    "module": "dc",
    "topic": "Almacenamiento",
    "q": "Al formar un pool de almacenamiento con varias cargas, ¿qué conviene evitar?",
    "options": [
      "Mezclar volúmenes con perfiles de E/S muy distintos sin control, para que una carga no degrade a las demás",
      "Tener discos de recambio disponibles",
      "Dejar capacidad libre para snapshots",
      "Monitorizar el uso del pool"
    ],
    "answer": 0,
    "exp": "Sin separar perfiles, una carga intensiva puede saturar el pool y arrastrar al resto; conviene aislar por volumen o por política."
  },
  {
    "id": "dc-195",
    "module": "dc",
    "topic": "Virtualización",
    "q": "¿Qué ventaja de aislamiento ofrece el entorno virtual frente a un servidor físico tradicional?",
    "options": [
      "Que no necesitan sistema operativo",
      "Que eliminan la necesidad de discos",
      "Que funcionan sin memoria",
      "Que una falla del sistema operativo de una VM no afecta a las demás que comparten el host"
    ],
    "answer": 3,
    "exp": "Cada VM es independiente a nivel de sistema, de modo que un incidente en una no se propaga a las vecinas."
  },
  {
    "id": "dc-196",
    "module": "dc",
    "topic": "Virtualización",
    "q": "¿Para qué sirve la consola de emergencia del hipervisor cuando el sistema operativo de la VM no responde?",
    "options": [
      "Aumentar automáticamente los recursos de la VM",
      "Acceder a la máquina para diagnosticarla o apagarla cuando la red y el sistema no responden",
      "Crear un snapshot del host",
      "Migrar la VM a otro datacenter"
    ],
    "answer": 1,
    "exp": "La consola del hipervisor es la vía de acceso directa cuando el huésped ha dejado de responder por la red o por su propio sistema."
  },
  {
    "id": "dc-197",
    "module": "dc",
    "topic": "Virtualización",
    "q": "En un clúster con dos VMs críticas de la misma aplicación, ¿qué regla de colocación conviene definir?",
    "options": [
      "Afinidad estricta para que siempre estén en el mismo host",
      "Que permanezcan apagadas en espera",
      "Anti-affinity para que no se ejecuten en el mismo host y un fallo no deje la aplicación sin ninguna instancia",
      "Que compartan el mismo disco de arranque"
    ],
    "answer": 2,
    "exp": "La anti-affinity separa las instancias entre hosts distintos, preservando la disponibilidad si un host cae."
  },
  {
    "id": "dc-198",
    "module": "dc",
    "topic": "Dimensionamiento",
    "q": "¿Qué método es más fiable para estimar la potencia real que consumirá un rack?",
    "options": [
      "Sumar las potencias nominales de todos los equipos y usar ese valor",
      "Medir el consumo con PDUs inteligentes y compararlo con la suma nominal, que suele ser un tope poco realista",
      "Contar los servidores y multiplicar por una constante fija",
      "Usar el peso del rack como referencia"
    ],
    "answer": 1,
    "exp": "El consumo real suele quedar por debajo de la suma de nominales; medirlo con PDUs permite planificar con precisión."
  },
  {
    "id": "dc-199",
    "module": "dc",
    "topic": "Continuidad",
    "q": "¿Qué es un simulacro de recuperación y por qué debe programarse?",
    "options": [
      "Un backup automático diario",
      "Un cambio de VLAN en producción",
      "Una actualización de firmware de los switches",
      "Una prueba controlada de los planes de contingencia que valida los tiempos reales de recuperación y detecta dependencias no documentadas"
    ],
    "answer": 3,
    "exp": "Solo una prueba real demuestra que se cumplen los objetivos de tiempo; la documentación por sí sola no garantiza la continuidad."
  },
  {
    "id": "dc-200",
    "module": "dc",
    "topic": "Enfriamiento",
    "q": "¿Por qué puede ser positivo subir la temperatura de consigna del salón de servidores?",
    "options": [
      "Porque amplía el rango de horas de economización libre y reduce el consumo de refrigeración, siempre controlando humedad y punto de rocío",
      "Porque los equipos rinden mejor a 40 grados",
      "Porque elimina la necesidad de contención de pasillos",
      "Porque reduce la latencia de la red"
    ],
    "answer": 0,
    "exp": "Operar más caliente aprovecha el aire exterior más tiempo y ahorra energía, manteniendo los límites de humedad para evitar condensaciones."
  },
  {
    "id": "pm-101",
    "module": "pm",
    "topic": "Integración",
    "q": "Te incorporas como gestor de proyecto de una migración a la nube. Antes de comprometer recursos, ¿qué documento formaliza la autorización del proyecto y nombra al gestor?",
    "options": [
      "El acta de constitución del proyecto",
      "El plan para la dirección del proyecto",
      "La declaración de alcance del producto",
      "El informe de estado semanal"
    ],
    "answer": 0,
    "exp": "El acta de constitución lo emite el patrocinador o la alta dirección y autoriza formalmente el proyecto, asignando al gestor y definiendo objetivos de alto nivel."
  },
  {
    "id": "pm-102",
    "module": "pm",
    "topic": "Integración",
    "q": "El patrocinador modifica los objetivos del programa durante el ciclo de vida. ¿Qué documento debes actualizar para que el proyecto siga alineado?",
    "options": [
      "El libro de riesgos",
      "El cronograma de actividades del equipo",
      "El acta de constitución y los planes de gestión afectados",
      "El informe de calidad"
    ],
    "answer": 2,
    "exp": "Los cambios en los objetivos de alto nivel impactan el acta de constitución y, por extensión, los planes de gestión que se derivan de él."
  },
  {
    "id": "pm-103",
    "module": "pm",
    "topic": "Integración",
    "q": "Durante la implementación de un datacenter aparece un trabajo no previsto en ningún plan. ¿Dónde se integra para no perder el control del proyecto?",
    "options": [
      "Se ignora hasta la retrospectiva final",
      "Se incorpora a través de una solicitud de cambio evaluada en el control de cambios",
      "Se agrega directamente a la lista de tareas del equipo",
      "Se registra solo en el acta de reunión"
    ],
    "answer": 1,
    "exp": "Todo trabajo no previsto debe pasar por el proceso de control de cambios para evaluar su impacto e integrarlo formalmente al plan."
  },
  {
    "id": "pm-104",
    "module": "pm",
    "topic": "Alcance",
    "q": "Para una plataforma de seguridad necesitas descomponer las entregas en componentes manejables y estimables. ¿Qué herramienta usas?",
    "options": [
      "La matriz de trazabilidad de requisitos",
      "La curva de avance",
      "El diagrama de flujo de comunicaciones",
      "La estructura de desglose del trabajo (WBS)"
    ],
    "answer": 3,
    "exp": "La WBS descompone el trabajo del proyecto en entregas y paquetes de trabajo hasta un nivel estimable y controlable."
  },
  {
    "id": "pm-105",
    "module": "pm",
    "topic": "Alcance",
    "q": "El alcance del producto se define de forma ambigua. ¿Qué artefacto describe de manera inequívoca lo que el proyecto entregará?",
    "options": [
      "La declaración de alcance",
      "El cronograma de actividades",
      "El presupuesto de proyecto",
      "El informe de estado"
    ],
    "answer": 0,
    "exp": "La declaración de alcance documenta de forma clara las entregas, sus requisitos y los límites de lo que se entregará."
  },
  {
    "id": "pm-106",
    "module": "pm",
    "topic": "Alcance",
    "q": "El cliente debe dar el visto bueno a un entregable de conectividad antes de continuar. ¿Qué proceso formaliza esa aceptación?",
    "options": [
      "Control del alcance",
      "Verificación del alcance",
      "Control de calidad",
      "Control integrado de cambios"
    ],
    "answer": 1,
    "exp": "La verificación del alcance consiste en la aceptación formal de los entregables completados por parte del cliente o patrocinador."
  },
  {
    "id": "pm-107",
    "module": "pm",
    "topic": "Cronograma",
    "q": "No existe histórico propio para estimar la duración de la migración de un nuevo tipo de carga. ¿Qué técnica usas como primera aproximación?",
    "options": [
      "Estimación de tres valores con el equipo",
      "Estimación paramétrica por línea base",
      "Estimación análoga basada en proyectos similares",
      "Estimación por reserva de contingencia"
    ],
    "answer": 2,
    "exp": "La estimación análoga aprovecha datos de proyectos parecidos cuando falta información detallada del actual."
  },
  {
    "id": "pm-108",
    "module": "pm",
    "topic": "Cronograma",
    "q": "Para recuperar atrasos añades ingenieros a una actividad con holgura. ¿Qué técnica de compresión del cronograma estás usando?",
    "options": [
      "Aceleración (crashing)",
      "Ejecución en paralelo (fast tracking)",
      "Reestimación análoga",
      "Reducción del alcance"
    ],
    "answer": 0,
    "exp": "La aceleración agrega recursos a una actividad para acortarla, con un costo adicional; el fast tracking, en cambio, solapa actividades."
  },
  {
    "id": "pm-109",
    "module": "pm",
    "topic": "Cronograma",
    "q": "Una actividad de configuración de balanceadores no puede iniciar hasta que la red esté certificada. ¿Qué tipo de relación describe esto?",
    "options": [
      "Inicio a inicio (SS)",
      "Fin a fin (FF)",
      "Dependencia de recursos",
      "Fin a inicio (FS)"
    ],
    "answer": 3,
    "exp": "La relación fin a inicio es la más común: la sucesora arranca cuando termina la predecesora."
  },
  {
    "id": "pm-110",
    "module": "pm",
    "topic": "Costo",
    "q": "En el proyecto, el valor planeado supera al valor ganado al cierre del periodo. ¿Qué indica?",
    "options": [
      "Se está trabajando menos de lo programado (desviación negativa)",
      "El costo real es menor que el presupuesto",
      "El proyecto terminará con ahorro",
      "La calidad del entregable mejoró"
    ],
    "answer": 0,
    "exp": "Cuando el valor planeado es mayor que el valor ganado, el cronograma muestra retraso: se ha completado menos trabajo del planificado."
  },
  {
    "id": "pm-111",
    "module": "pm",
    "topic": "Costo",
    "q": "Para presupuestar la migración usas estimaciones optimista, probable y pesimista ponderadas. ¿Qué técnica es?",
    "options": [
      "Estimación de tres valores (PERT)",
      "Estimación análoga",
      "Estimación por línea base fija",
      "Estimación por reserva de contingencia"
    ],
    "answer": 0,
    "exp": "La estimación de tres valores pondera escenarios para reflejar la incertidumbre en la duración o el costo."
  },
  {
    "id": "pm-112",
    "module": "pm",
    "topic": "Costo",
    "q": "Si el índice de desempeño de costos es menor que uno, ¿qué significa para el proyecto?",
    "options": [
      "Cada unidad de valor se está pagando por encima de lo presupuestado",
      "El proyecto está por debajo del presupuesto",
      "El trabajo avanza más rápido de lo planeado",
      "Los riesgos se han materializado"
    ],
    "answer": 0,
    "exp": "Un CPI menor que 1 indica que el costo real supera al valor ganado: se gasta más de lo planificado por el trabajo logrado."
  },
  {
    "id": "pm-113",
    "module": "pm",
    "topic": "Calidad",
    "q": "¿Cuál es la diferencia entre calidad y grado en un proyecto de infraestructura?",
    "options": [
      "Son sinónimos",
      "El grado es una categoría jerárquica; la calidad es cumplir los requisitos",
      "La calidad aplica solo a software",
      "El grado lo define el proveedor"
    ],
    "answer": 1,
    "exp": "Un mismo grado puede tener distinta calidad; la calidad consiste en satisfacer los requisitos establecidos del proyecto."
  },
  {
    "id": "pm-114",
    "module": "pm",
    "topic": "Calidad",
    "q": "Los despliegues fallan por causas repetidas difíciles de ver. ¿Qué herramienta ayuda a estructurar las causas raíz?",
    "options": [
      "El diagrama de control",
      "El histograma de defectos",
      "El benchmarking",
      "El diagrama de causa y efecto (Ishikawa)"
    ],
    "answer": 3,
    "exp": "El diagrama de Ishikawa agrupa las causas potenciales (método, máquina, mano de obra, materiales) para atacar la raíz del problema."
  },
  {
    "id": "pm-115",
    "module": "pm",
    "topic": "Calidad",
    "q": "¿Cuál es el objetivo principal del control de calidad?",
    "options": [
      "Inspeccionar los resultados para detectar defectos",
      "Contratar más ingenieros",
      "Aprobar los cambios de alcance",
      "Definir la estructura del proyecto"
    ],
    "answer": 0,
    "exp": "El control de calidad inspecciona y verifica que los entregables cumplan los requisitos y estándares, detectando defectos."
  },
  {
    "id": "pm-116",
    "module": "pm",
    "topic": "Recursos",
    "q": "¿Qué herramienta muestra la utilización de cada recurso por periodo para detectar sobrecarga?",
    "options": [
      "El diagrama de Ishikawa",
      "El histograma de recursos",
      "El libro de riesgos",
      "El acta de constitución"
    ],
    "answer": 1,
    "exp": "El histograma revela picos de asignación que exigen reasignar o nivelar la carga de trabajo del equipo."
  },
  {
    "id": "pm-117",
    "module": "pm",
    "topic": "Recursos",
    "q": "Un ingeniero clave se va a mitad del proyecto. ¿Qué estrategia reduce el impacto en el futuro inmediato?",
    "options": [
      "Desarrollar al equipo para ampliar las competencias disponibles",
      "Ignorar el riesgo hasta que se repita",
      "Duplicar todos los roles del proyecto",
      "Externalizar todo el proyecto"
    ],
    "answer": 0,
    "exp": "El desarrollo del equipo (capacitación y entrenamiento) amplía las habilidades y evita dependencias de una sola persona."
  },
  {
    "id": "pm-118",
    "module": "pm",
    "topic": "Recursos",
    "q": "El equipo no logra acuerdo en la arquitectura de red. ¿Qué técnica de decisión busca el respaldo de la mayoría?",
    "options": [
      "Votación por mayoría",
      "Imposición por parte del patrocinador",
      "Análisis coste-beneficio individual",
      "Delegación automática al proveedor"
    ],
    "answer": 0,
    "exp": "La votación por mayoría permite decidir de forma ágil cuando el consenso completo entre todas las partes no es viable."
  },
  {
    "id": "pm-119",
    "module": "pm",
    "topic": "Comunicaciones",
    "q": "¿Qué fórmula determina el número de canales de comunicación con n participantes?",
    "options": [
      "n + 1",
      "2n",
      "n / 3",
      "n × (n − 1) / 2"
    ],
    "answer": 3,
    "exp": "La fórmula n(n−1)/2 cuenta los pares posibles; añadir personas crece de forma acelerada la complejidad comunicacional."
  },
  {
    "id": "pm-120",
    "module": "pm",
    "topic": "Comunicaciones",
    "q": "El comité ejecutivo quiere resúmenes y el equipo técnico, detalle. ¿Cómo abordas la comunicación?",
    "options": [
      "Adapto el nivel de detalle y el medio a las necesidades de cada audiencia",
      "Envío el mismo informe detallado a todos",
      "Reduzco la información para no saturar",
      "Dejo de reportar hasta el cierre"
    ],
    "answer": 0,
    "exp": "La comunicación eficaz segmenta mensaje, formato y frecuencia según lo que cada destinatario necesita para decidir."
  },
  {
    "id": "pm-121",
    "module": "pm",
    "topic": "Comunicaciones",
    "q": "Un informe de estado con número de versión, aprobado y distribuido formalmente es un ejemplo de...",
    "options": [
      "Comunicación formal escrita",
      "Comunicación informal verbal",
      "Comunicación no verbal",
      "Ruido en el canal"
    ],
    "answer": 0,
    "exp": "Las comunicaciones formales siguen canales oficiales y documentados; las informales son espontáneas y no registradas."
  },
  {
    "id": "pm-122",
    "module": "pm",
    "topic": "Riesgos",
    "q": "Durante la identificación de riesgos del proyecto de datacenter, ¿qué artefacto centraliza todos los riesgos identificados?",
    "options": [
      "El plan de comunicaciones",
      "La WBS",
      "El registro de riesgos",
      "El libro de cambios"
    ],
    "answer": 2,
    "exp": "El registro de riesgos contiene la lista maestra con descripción, causas, impactos y responsables de cada riesgo."
  },
  {
    "id": "pm-123",
    "module": "pm",
    "topic": "Riesgos",
    "q": "El proveedor detiene el servicio porque la licencia venció y ya no hay incertidumbre. ¿Qué es ahora?",
    "options": [
      "Un problema (issue) que debe gestionarse",
      "Un riesgo futuro",
      "Una oportunidad",
      "Una reserva de contingencia"
    ],
    "answer": 0,
    "exp": "Cuando un riesgo se materializa pierde la incertidumbre y pasa a gestionarse como un problema o incidencia."
  },
  {
    "id": "pm-124",
    "module": "pm",
    "topic": "Riesgos",
    "q": "Para responder a la caída del datacenter principal se configura failover al sitio secundario. ¿Qué estrategia de respuesta es?",
    "options": [
      "Transferencia",
      "Aceptación pasiva",
      "Explotación",
      "Mitigación"
    ],
    "answer": 3,
    "exp": "La mitigación reduce la probabilidad o el impacto del riesgo mediante acciones como la redundancia y el failover."
  },
  {
    "id": "pm-125",
    "module": "pm",
    "topic": "Adquisiciones",
    "q": "El proveedor de almacenamiento entrega fuera del plazo y con defectos. ¿Qué proceso gestiona esta situación?",
    "options": [
      "Control de las adquisiciones",
      "Gestión de la calidad",
      "Planificación del alcance",
      "Identificación de riesgos"
    ],
    "answer": 0,
    "exp": "El control de las adquisiciones supervisa el desempeño del proveedor, gestiona reclamaciones y resuelve incumplimientos."
  },
  {
    "id": "pm-126",
    "module": "pm",
    "topic": "Adquisiciones",
    "q": "El alcance del suministro de switches está perfectamente definido. ¿Qué tipo de contrato conviene?",
    "options": [
      "Precio fijo total",
      "Costo reembolsable con honorario",
      "Tarifa por tiempo y materiales",
      "Costo más incentivo variable"
    ],
    "answer": 0,
    "exp": "Con alcance claro, el precio fijo total traslada el riesgo de costo al proveedor y da certeza al comprador."
  },
  {
    "id": "pm-127",
    "module": "pm",
    "topic": "Adquisiciones",
    "q": "Antes de buscar proveedores, necesitas documentar con precisión el trabajo por contratar. ¿Qué artefacto preparas?",
    "options": [
      "El informe de estado",
      "La declaración de trabajo para adquisiciones",
      "El registro de partes interesadas",
      "El cronograma del equipo"
    ],
    "answer": 1,
    "exp": "La declaración de trabajo (SOW) define alcance, entregables y requisitos del contrato para que las ofertas sean comparables."
  },
  {
    "id": "pm-128",
    "module": "pm",
    "topic": "Partes interesadas",
    "q": "El gerente de operaciones tiene mucho poder pero poca implicación en la migración. ¿Qué estrategia aplicas?",
    "options": [
      "Mantenerlo satisfecho con información breve",
      "Gestionarlo de cerca con involucramiento continuo",
      "Monitorearlo con esfuerzo mínimo",
      "Clasificarlo como impedido y excluirlo"
    ],
    "answer": 0,
    "exp": "En la matriz de poder e interés, alto poder con bajo interés exige mantener satisfecho al interesado con comunicación selectiva."
  },
  {
    "id": "pm-129",
    "module": "pm",
    "topic": "Partes interesadas",
    "q": "¿Qué artefacto mantiene la lista de partes interesadas con sus expectativas, influencia y estrategia de involucramiento?",
    "options": [
      "El plan de gestión de riesgos",
      "El diccionario de la WBS",
      "El libro de registros de cambios",
      "El registro de partes interesadas"
    ],
    "answer": 3,
    "exp": "El registro documenta quiénes son, qué necesitan y cómo se interactúa con cada uno; se actualiza de forma continua."
  },
  {
    "id": "pm-130",
    "module": "pm",
    "topic": "Cierre",
    "q": "Al cerrar el proyecto quedan equipos de red sin usar y documentación en el repositorio. ¿Qué haces?",
    "options": [
      "Los descarto sin registrar",
      "Transfiero los activos y documentación según el plan de gestión de recursos y los archivo",
      "Los dejo en el área hasta el próximo proyecto sin inventario",
      "Los vendo sin autorización"
    ],
    "answer": 1,
    "exp": "El cierre implica archivar registros y entregar activos según lo planificado para su reutilización o disposición final."
  },
  {
    "id": "pm-131",
    "module": "pm",
    "topic": "Cierre",
    "q": "¿Qué documento formal confirma la aceptación final del proyecto y autoriza su cierre?",
    "options": [
      "El contrato inicial",
      "La solicitud de cambio rechazada",
      "El acta de cierre del proyecto",
      "El informe semanal"
    ],
    "answer": 2,
    "exp": "El acta de cierre documenta la aceptación formal del producto y el fin de las obligaciones del proyecto."
  },
  {
    "id": "pm-132",
    "module": "pm",
    "topic": "Control de cambios",
    "q": "¿Dónde se registran todas las solicitudes de cambio y su estado a lo largo del proyecto?",
    "options": [
      "En el libro de registros de cambios",
      "En el acta de constitución",
      "En el registro de riesgos",
      "En el informe de calidad"
    ],
    "answer": 0,
    "exp": "El libro de registros de cambios centraliza cada solicitud, su evaluación, decisión y seguimiento."
  },
  {
    "id": "pm-133",
    "module": "pm",
    "topic": "Control de cambios",
    "q": "Llega una solicitud de cambio de la dirección. ¿Cuál es el primer paso antes de aplicarla?",
    "options": [
      "Implementarla de inmediato para no frenar",
      "Rechazarla por defecto",
      "Archivarla hasta el cierre",
      "Evaluar su impacto en alcance, tiempo, costo, calidad y riesgos"
    ],
    "answer": 3,
    "exp": "Toda solicitud debe evaluarse primero; solo después se decide si se aprueba o se rechaza, con trazabilidad."
  },
  {
    "id": "pm-134",
    "module": "pm",
    "topic": "Control de cambios",
    "q": "Tras aprobar un cambio mayor, ¿qué debes actualizar necesariamente?",
    "options": [
      "Las líneas base y los planes afectados, dejando constancia en el libro de cambios",
      "Solo el correo de notificación",
      "El logo del informe",
      "La lista de asistencia a reuniones"
    ],
    "answer": 0,
    "exp": "Los cambios aprobados actualizan las bases pertinentes y sus planes derivados, registrando el impacto para mantener la trazabilidad."
  },
  {
    "id": "pm-135",
    "module": "pm",
    "topic": "Integración",
    "q": "¿Qué proceso del PMBOK se encarga de mantener coherentes todas las áreas del proyecto y de producir actualizaciones de estado?",
    "options": [
      "Gestionar el alcance",
      "Gestionar la integración",
      "Gestionar las adquisiciones",
      "Gestionar la calidad"
    ],
    "answer": 1,
    "exp": "Gestionar la integración combina los resultados de las demás áreas de conocimiento y mantiene el proyecto alineado con el plan."
  },
  {
    "id": "pm-136",
    "module": "pm",
    "topic": "Integración",
    "q": "Dos gerentes de área priorizan actividades contradictorias para la misma ventana de mantenimiento. ¿Qué herramienta estructura la decisión?",
    "options": [
      "El desglose estructural del alcance (WBS)",
      "Los criterios de decisión definidos para el proyecto",
      "El diagrama de Gantt",
      "El registro de partes interesadas"
    ],
    "answer": 1,
    "exp": "Los criterios de decisión permiten resolver conflictos de forma estructurada y trazable, aplicando prioridades acordadas previamente."
  },
  {
    "id": "pm-137",
    "module": "pm",
    "topic": "Integración",
    "q": "¿Qué documento reúne todos los planes de gestión del proyecto, las líneas base y otros documentos de apoyo en un solo lugar?",
    "options": [
      "El plan para la dirección del proyecto",
      "El acta de constitución",
      "La solicitud de cambio aprobada",
      "El contrato con el proveedor"
    ],
    "answer": 0,
    "exp": "El plan para la dirección integra todos los planes de gestión y sirve como referencia maestra para la ejecución y el control."
  },
  {
    "id": "pm-138",
    "module": "pm",
    "topic": "Alcance",
    "q": "El usuario pide que la plataforma sea escalable, sin concretar más. ¿Qué técnica ayuda a materializar ese requisito?",
    "options": [
      "Aumentar el presupuesto preventivamente",
      "Añadir una reserva de gestión",
      "Reprogramar la fecha de entrega",
      "Prototipado para concretar requisitos"
    ],
    "answer": 3,
    "exp": "Los prototipos convierten requisitos vagos en ejemplos concretos que el usuario puede validar antes de construir."
  },
  {
    "id": "pm-139",
    "module": "pm",
    "topic": "Alcance",
    "q": "¿Qué es un paquete de trabajo dentro de la WBS?",
    "options": [
      "El nivel más bajo donde se estima costo y duración y se asigna responsabilidad",
      "Un hito de una jornada",
      "Un contrato con un proveedor",
      "Un riesgo con impacto alto"
    ],
    "answer": 0,
    "exp": "El paquete es el nivel de la WBS en el que se planifica, estima, ejecuta y controla el trabajo de forma concreta."
  },
  {
    "id": "pm-140",
    "module": "pm",
    "topic": "Alcance",
    "q": "Para garantizar que cada requisito esté vinculado a una entrega y a una prueba, ¿qué herramienta empleas?",
    "options": [
      "Matriz de trazabilidad de requisitos",
      "Curva S de avance",
      "Registro de incidentes",
      "Diagrama de red"
    ],
    "answer": 0,
    "exp": "La matriz de trazabilidad enlaza requisitos con entregables, diseño y pruebas, facilitando detectar alcance no cubierto o sobrante."
  },
  {
    "id": "pm-141",
    "module": "pm",
    "topic": "Cronograma",
    "q": "¿Qué representa un hito en el cronograma?",
    "options": [
      "Un evento significativo de control sin duración",
      "Una actividad con duración de un día",
      "Un recurso asignado a tiempo completo",
      "Un riesgo con fecha de respuesta"
    ],
    "answer": 0,
    "exp": "Los hitos marcan puntos de referencia (aprobaciones, entregas) y se usan para reportar el progreso a los interesados."
  },
  {
    "id": "pm-142",
    "module": "pm",
    "topic": "Cronograma",
    "q": "La certificación de un dispositivo depende de que un laboratorio externo emita el informe. ¿Qué tipo de dependencia es?",
    "options": [
      "Dependencia externa",
      "Dependencia interna",
      "Relación SS",
      "Relación FF"
    ],
    "answer": 0,
    "exp": "Las dependencias externas implican factores fuera del control del equipo, como proveedores o entes reguladores."
  },
  {
    "id": "pm-143",
    "module": "pm",
    "topic": "Cronograma",
    "q": "El patrocinador quiere ver valor entregado pronto en lugar de esperar al final del proyecto de datacenter. ¿Qué enfoque aplicas?",
    "options": [
      "Un único hito de entrega al final",
      "Una fase de documentación exclusiva",
      "Divisiones incrementales con entregas frecuentes",
      "Un presupuesto único sin desglose"
    ],
    "answer": 2,
    "exp": "Entregar en incrementos cortos permite validar valor temprano y detectar desviaciones antes de comprometer todo el proyecto."
  },
  {
    "id": "pm-144",
    "module": "pm",
    "topic": "Costo",
    "q": "El costo real acumulado supera al valor ganado de forma sostenida. ¿Qué conclusión aplica?",
    "options": [
      "El desempeño de costos es ineficiente",
      "El índice de cronograma mejora",
      "El alcance se redujo automáticamente",
      "La línea base de costos está obsoleta"
    ],
    "answer": 0,
    "exp": "Un costo real por encima del valor ganado da un índice de desempeño de costos menor que 1, señal de ineficiencia que exige acciones correctivas."
  },
  {
    "id": "pm-145",
    "module": "pm",
    "topic": "Costo",
    "q": "En el método de valor ganado, ¿dónde se acumulan y comparan los costos reales contra los presupuestados por el trabajo?",
    "options": [
      "En las cuentas de control del presupuesto",
      "En el acta de constitución",
      "En el registro de riesgos",
      "En el contrato de adquisición"
    ],
    "answer": 0,
    "exp": "Las cuentas de control vinculan el trabajo con el presupuesto y permiten medir el desempeño por unidad organizativa."
  },
  {
    "id": "pm-146",
    "module": "pm",
    "topic": "Costo",
    "q": "¿Qué representa el valor planeado en gestión de valor ganado?",
    "options": [
      "El valor del trabajo programado hasta una fecha determinada",
      "El costo efectivamente incurrido",
      "El trabajo completado valorado a precio real",
      "El presupuesto total del proyecto"
    ],
    "answer": 0,
    "exp": "El valor planeado (PV) mide lo que debería haberse ejecutado según la línea base hasta el momento de análisis."
  },
  {
    "id": "pm-147",
    "module": "pm",
    "topic": "Calidad",
    "q": "Se realiza una revisión independiente de los procesos del proyecto para identificar mejoras. ¿Qué es?",
    "options": [
      "Una auditoría de calidad",
      "Una solicitud de cambio",
      "Un hito de aceptación",
      "Una retrospectiva de riesgos"
    ],
    "answer": 0,
    "exp": "Las auditorías revisan de forma independiente procesos y productos para determinar si cumplen y qué mejoras aportan."
  },
  {
    "id": "pm-148",
    "module": "pm",
    "topic": "Calidad",
    "q": "Un proceso de respaldo genera resultados fuera de límites aceptados de forma recurrente. ¿Qué herramienta detecta el estado fuera de control?",
    "options": [
      "El gráfico de control",
      "El diagrama de Ishikawa",
      "El análisis de Pareto",
      "El prototipo"
    ],
    "answer": 0,
    "exp": "El gráfico de control identifica variaciones especiales que sacan al proceso de sus límites estadísticos esperados."
  },
  {
    "id": "pm-149",
    "module": "pm",
    "topic": "Calidad",
    "q": "¿Cuál es el enfoque de la garantía de calidad (aseguramiento)?",
    "options": [
      "Prevenir defectos mediante procesos bien definidos",
      "Inspeccionar el producto final",
      "Aprobar los entregables del cliente",
      "Reducir el alcance del proyecto"
    ],
    "answer": 0,
    "exp": "El aseguramiento se centra en prevenir defectos mejorando procesos, mientras el control de calidad los detecta en los resultados."
  },
  {
    "id": "pm-150",
    "module": "pm",
    "topic": "Recursos",
    "q": "El equipo está repartido en tres zonas horarias. ¿Qué estrategia mejora su coordinación?",
    "options": [
      "Acordar ventanas de solapamiento y reglas de comunicación escrita",
      "Eliminar los informes de estado",
      "Reducir el número de entregables",
      "Trabajar solo de forma presencial"
    ],
    "answer": 0,
    "exp": "Definir horarios comunes y canales escritos claros compensa la dispersión geográfica y evita pérdidas de información."
  },
  {
    "id": "pm-151",
    "module": "pm",
    "topic": "Recursos",
    "q": "Un recurso especialista limita el avance de varias tareas. ¿Qué enfoque de la teoría de restricciones aplicas?",
    "options": [
      "Gestionar el cuello de botella: explotarlo y subordinar el resto",
      "Repartir el trabajo por igual entre todos",
      "Contratar más gestores de proyecto",
      "Eliminar el recurso del organigrama"
    ],
    "answer": 0,
    "exp": "La teoría de restricciones identifica el recurso limitante y organiza el resto del trabajo para que no espere en vano."
  },
  {
    "id": "pm-152",
    "module": "pm",
    "topic": "Comunicaciones",
    "q": "Debes transmitir arquitectura de red confidencial entre sedes. ¿Qué consideras primero?",
    "options": [
      "La seguridad del canal: cifrado y acceso restringido",
      "La velocidad de respuesta del equipo",
      "El color de la plantilla del informe",
      "La cantidad de adjuntos"
    ],
    "answer": 0,
    "exp": "La información sensible exige canales seguros, cifrado y control de acceso; el medio debe preservar la confidencialidad."
  },
  {
    "id": "pm-153",
    "module": "pm",
    "topic": "Comunicaciones",
    "q": "¿Quién asume la responsabilidad final de que la información del proyecto fluya correctamente?",
    "options": [
      "El gestor de proyecto",
      "El proveedor de nube",
      "El miembro más junior",
      "El comité de auditoría"
    ],
    "answer": 0,
    "exp": "El gestor de proyecto es responsable de garantizar que la información adecuada llegue a las personas adecuadas en tiempo oportuno."
  },
  {
    "id": "pm-154",
    "module": "pm",
    "topic": "Riesgos",
    "q": "Descubres que la automatización reducirá costos por encima de lo esperado. ¿Qué tipo de riesgo es?",
    "options": [
      "Una oportunidad (riesgo positivo)",
      "Una amenaza (riesgo negativo)",
      "Un problema activo",
      "Un supuesto invalidado"
    ],
    "answer": 0,
    "exp": "El registro de riesgos incluye eventos positivos: las oportunidades se gestionan con estrategias como aprovechar o potenciar."
  },
  {
    "id": "pm-155",
    "module": "pm",
    "topic": "Riesgos",
    "q": "¿Qué define el umbral de riesgo en el plan de gestión de riesgos?",
    "options": [
      "El nivel más allá del cual un riesgo es inaceptable y debe escalarse",
      "La fecha exacta de respuesta",
      "El nombre del responsable",
      "El costo de cada respuesta"
    ],
    "answer": 0,
    "exp": "Los umbrales fijan tolerancias claras: si la probabilidad o el impacto los superan, el riesgo se escala a la dirección."
  },
  {
    "id": "pm-156",
    "module": "pm",
    "topic": "Riesgos",
    "q": "Después de aplicar respuestas, persiste cierto nivel de probabilidad e impacto. ¿Qué es?",
    "options": [
      "Riesgo residual",
      "Riesgo secundario nuevo",
      "Problema cerrado",
      "Oportunidad rechazada"
    ],
    "answer": 0,
    "exp": "El riesgo residual es el que queda tras las respuestas; si supera el umbral, debe responderse de nuevo."
  },
  {
    "id": "pm-157",
    "module": "pm",
    "topic": "Adquisiciones",
    "q": "Envías a los proveedores una carta de intención no vinculante antes del contrato. ¿Qué es?",
    "options": [
      "Una carta de encargo (LOI)",
      "Un contrato de precio fijo",
      "Una solicitud de cambio",
      "Un acta de cierre"
    ],
    "answer": 0,
    "exp": "La LOI documenta intenciones y términos preliminares sin obligación contractual firme hasta firmar el acuerdo definitivo."
  },
  {
    "id": "pm-158",
    "module": "pm",
    "topic": "Adquisiciones",
    "q": "El proveedor propone añadir módulos de monitoreo al contrato vigente. ¿Cómo procedes?",
    "options": [
      "Formaliza la modificación a través del control de las adquisiciones",
      "Acepta verbalmente para no frenar el proyecto",
      "Rechaza siempre cualquier modificación",
      "Amplía el alcance del proyecto sin tocar el contrato"
    ],
    "answer": 0,
    "exp": "Las modificaciones contractuales se negocian y formalizan por escrito en el proceso de control de adquisiciones."
  },
  {
    "id": "pm-159",
    "module": "pm",
    "topic": "Adquisiciones",
    "q": "El alcance de los servicios de soporte 24/7 es difícil de definir con exactitud. ¿Qué modelo de contrato se ajusta mejor?",
    "options": [
      "Precio fijo total",
      "Tarifa por tiempo y materiales",
      "Precio fijo con hitos",
      "Precio global unitario por dispositivo"
    ],
    "answer": 1,
    "exp": "Cuando el alcance es incierto, la tarifa por tiempo y materiales permite pagar por el esfuerzo efectivo, con riesgo de costo para el comprador."
  },
  {
    "id": "pm-160",
    "module": "pm",
    "topic": "Partes interesadas",
    "q": "Una parte interesada con alto poder y alto interés cuestiona públicamente el proyecto. ¿Cuál es la estrategia adecuada?",
    "options": [
      "Gestionar de cerca, involucrándola activamente",
      "Mantener satisfecho con información mínima",
      "Monitorear sin acción",
      "Comunicar solo al cierre"
    ],
    "answer": 0,
    "exp": "Alto poder y alto interés exige gestionar de cerca: participación activa, resolución de dudas y alineación constante."
  },
  {
    "id": "pm-161",
    "module": "pm",
    "topic": "Partes interesadas",
    "q": "¿Qué herramienta representa el apoyo actual y el nivel deseado de cada parte interesada?",
    "options": [
      "La matriz de involucramiento (actual vs deseado)",
      "El diagrama de Ishikawa",
      "La curva S",
      "El gráfico de control"
    ],
    "answer": 0,
    "exp": "Comparar el estado actual con el deseado muestra qué interesados requieren más trabajo de involucramiento."
  },
  {
    "id": "pm-162",
    "module": "pm",
    "topic": "Partes interesadas",
    "q": "¿Por qué conviene identificar a las partes interesadas en las fases iniciales?",
    "options": [
      "Para diseñar desde el inicio estrategias de involucramiento y anticipar resistencias",
      "Porque el registro nunca vuelve a cambiar",
      "Para reducir el número de entregables",
      "Para evitar la aprobación del patrocinador"
    ],
    "answer": 0,
    "exp": "Identificar temprano permite anticipar necesidades, alinear expectativas y evitar sorpresas durante la ejecución."
  },
  {
    "id": "pm-163",
    "module": "pm",
    "topic": "Cierre",
    "q": "La dirección decide cancelar el proyecto de datacenter a mitad de camino. ¿Qué corresponde?",
    "options": [
      "Cerrar el proyecto documentando el motivo y transfiriendo el trabajo realizado",
      "Continuar en secreto hasta terminar",
      "Borrar el expediente sin informar",
      "Aprobar todos los cambios pendientes"
    ],
    "answer": 0,
    "exp": "Un cierre anticipado debe formalizarse: se documenta la decisión, se transfieren entregas parciales y se liberan recursos."
  },
  {
    "id": "pm-164",
    "module": "pm",
    "topic": "Cierre",
    "q": "Al cierre quedan contratos activos con proveedores. ¿Cómo se gestionan?",
    "options": [
      "Se resuelven o transfieren según las cláusulas contractuales antes de cerrar el proyecto",
      "Se dejan vigentes sin avisar",
      "Se cancelan unilateralmente sin registro",
      "Se duplican para cubrir el cierre"
    ],
    "answer": 0,
    "exp": "La verificación final asegura que las obligaciones contractuales estén resueltas, documentadas y aceptadas por las partes."
  },
  {
    "id": "pm-165",
    "module": "pm",
    "topic": "Cierre",
    "q": "¿Quién da la aceptación formal del producto final según lo definido al inicio?",
    "options": [
      "El cliente o patrocinador indicado en el acta de constitución y el contrato",
      "El equipo técnico más experimentado",
      "El proveedor de nube",
      "El comité de calidad automático"
    ],
    "answer": 0,
    "exp": "La aceptación la otorga la autoridad definida en el acta de constitución o el contrato, verificando los criterios acordados."
  },
  {
    "id": "pm-166",
    "module": "pm",
    "topic": "Control de cambios",
    "q": "¿Qué es una solicitud de cambio en el proyecto?",
    "options": [
      "Una propuesta documentada para modificar cualquier elemento del proyecto",
      "Un error del sistema de la herramienta",
      "Una incidencia técnica ya resuelta",
      "Un informe de estado regular"
    ],
    "answer": 0,
    "exp": "Las solicitudes pueden surgir de cualquier área y deben documentarse y evaluarse por el proceso de control de cambios."
  },
  {
    "id": "pm-167",
    "module": "pm",
    "topic": "Control de cambios",
    "q": "El comité rechaza una solicitud de cambio del cliente. ¿Qué haces?",
    "options": [
      "La aplico a futuro sin informar",
      "Registro la decisión y la comunico a los interesados afectados",
      "La borro del registro",
      "La apruebo en la siguiente reunión sin evaluar"
    ],
    "answer": 1,
    "exp": "Las decisiones, incluidos los rechazos, se documentan y se comunican para evitar expectativas erróneas en el cliente."
  },
  {
    "id": "pm-168",
    "module": "pm",
    "topic": "Integración",
    "q": "Cada gerente de área optimiza su propio área y el conjunto sufre. ¿Qué actitud debe prevalecer según la integración de proyectos?",
    "options": [
      "Maximizar el resultado de cada área por separado",
      "Delegar todos los conflictos al patrocinador",
      "Priorizar el éxito global del proyecto sobre la optimización parcial",
      "Suspender el proyecto hasta que las áreas se pongan de acuerdo"
    ],
    "answer": 2,
    "exp": "El gestor de proyecto debe equilibrar las necesidades parciales en favor del resultado integral del proyecto."
  },
  {
    "id": "pm-169",
    "module": "pm",
    "topic": "Integración",
    "q": "¿Quién emite normalmente el acta de constitución que autoriza el proyecto?",
    "options": [
      "El patrocinador o la alta dirección",
      "El equipo técnico que ejecutará el trabajo",
      "El proveedor seleccionado",
      "El comité de control de cambios"
    ],
    "answer": 0,
    "exp": "La autoridad que financia o respalda el proyecto emite el acta; el gestor recibe así su mandato formal."
  },
  {
    "id": "pm-170",
    "module": "pm",
    "topic": "Integración",
    "q": "La dirección pide un resumen periódico del progreso, costos y tendencias para tomar decisiones. ¿Qué informe satisface esa necesidad?",
    "options": [
      "El informe de información del trabajo del proyecto",
      "El informe de resultados de control de calidad",
      "La carta de encargo del proveedor",
      "El plan de respuestas a riesgos"
    ],
    "answer": 0,
    "exp": "El informe de información del trabajo del proyecto comunica avance, consumo de recursos y pronósticos alineados con el plan."
  },
  {
    "id": "pm-171",
    "module": "pm",
    "topic": "Alcance",
    "q": "¿En qué se diferencia el alcance del proyecto del alcance del producto?",
    "options": [
      "Son idénticos siempre",
      "El alcance del proyecto incluye el trabajo necesario para entregar el producto, que puede ser más amplio",
      "El alcance del producto incluye el trabajo de gestión del proyecto",
      "El alcance del proyecto solo incluye el producto"
    ],
    "answer": 1,
    "exp": "El alcance del producto describe lo que se construye; el alcance del proyecto incluye además todo el trabajo de gestión y entregas asociadas."
  },
  {
    "id": "pm-172",
    "module": "pm",
    "topic": "Alcance",
    "q": "¿Qué documento describe en detalle cada elemento de la WBS, como fechas, costos y criterios de aceptación?",
    "options": [
      "El diccionario de la WBS",
      "El acta de constitución",
      "El plan de adquisiciones",
      "El informe de desempeño"
    ],
    "answer": 0,
    "exp": "El diccionario de la WBS complementa la estructura con información detallada de cada paquete y elemento de trabajo."
  },
  {
    "id": "pm-173",
    "module": "pm",
    "topic": "Alcance",
    "q": "Los usuarios van pidiendo funcionalidades extra sin autorización. ¿Qué proceso debes ejercer para evitar el alcance creciente?",
    "options": [
      "Control del alcance",
      "Planificación del alcance",
      "Verificación del alcance",
      "Gestión de la calidad"
    ],
    "answer": 0,
    "exp": "El control del alcance supervisa que los cambios de alcance pasen por el control de cambios y actualice las bases correspondientes."
  },
  {
    "id": "pm-174",
    "module": "pm",
    "topic": "Cronograma",
    "q": "Para cumplir la fecha sin ampliar recursos, solapas dos fases que normalmente irían en secuencia. ¿Qué técnica es?",
    "options": [
      "Ejecución en paralelo (fast tracking)",
      "Aceleración (crashing)",
      "Estimación paramétrica",
      "Replanificación por reserva"
    ],
    "answer": 0,
    "exp": "El fast tracking solapa actividades secuenciales, aceptando un mayor riesgo de rehacer trabajo."
  },
  {
    "id": "pm-175",
    "module": "pm",
    "topic": "Cronograma",
    "q": "El cálculo inverso desde la fecha de entrega más tardía define, para cada actividad, sus...",
    "options": [
      "Fechas más tardías de inicio y fin",
      "Fechas de hito del patrocinador",
      "Costos presupuestados acumulados",
      "Niveles de prioridad de los interesados"
    ],
    "answer": 0,
    "exp": "El recorrido hacia atrás (backward pass) obtiene las fechas tardías y permite calcular la holgura de cada actividad."
  },
  {
    "id": "pm-176",
    "module": "pm",
    "topic": "Cronograma",
    "q": "¿Qué calendario considera los días festivos, turnos y restricciones de mantenimiento al programar actividades?",
    "options": [
      "El calendario del proyecto",
      "El calendario de recursos del patrocinador",
      "El calendario fiscal de la empresa",
      "El calendario de riesgos"
    ],
    "answer": 0,
    "exp": "El calendario del proyecto define los periodos laborables y no laborables aplicables a las actividades del cronograma."
  },
  {
    "id": "pm-177",
    "module": "pm",
    "topic": "Costo",
    "q": "El patrocinador pregunta cuánto costará el proyecto al final. ¿Qué métrica de valor ganado proyecta el costo total?",
    "options": [
      "Estimación en el momento del análisis (EAC)",
      "El valor planeado acumulado",
      "El presupuesto por línea base",
      "El costo hundido"
    ],
    "answer": 0,
    "exp": "El EAC proyecta el costo total esperado según el desempeño actual y el trabajo restante por ejecutar."
  },
  {
    "id": "pm-178",
    "module": "pm",
    "topic": "Costo",
    "q": "El costo de licencias de seguridad varía según la cantidad de firewalls gestionados. ¿Qué tipo de costo es?",
    "options": [
      "Costo variable",
      "Costo fijo",
      "Costo hundido",
      "Costo indirecto de dirección"
    ],
    "answer": 0,
    "exp": "Los costos variables cambian en proporción al volumen de trabajo; los fijos se mantienen constantes en el periodo."
  },
  {
    "id": "pm-179",
    "module": "pm",
    "topic": "Costo",
    "q": "Ya se gastó el presupuesto de una herramienta descartada. ¿Cómo debe influir ese gasto en la decisión futura?",
    "options": [
      "No debe influir: es un costo hundido",
      "Debe duplicarse para justificar la inversión",
      "Debe revertirse del presupuesto de riesgos",
      "Debe aprobarse por el comité de cambios"
    ],
    "answer": 0,
    "exp": "Los costos hundidos ya no se recuperan; las decisiones deben basarse en costos y beneficios futuros."
  },
  {
    "id": "pm-180",
    "module": "pm",
    "topic": "Calidad",
    "q": "Tras contabilizar defectos, descubres que pocas causas explican la mayoría. ¿Qué herramienta prioriza el ataque?",
    "options": [
      "El diagrama de Pareto",
      "El gráfico de Gantt",
      "El diagrama de red",
      "La matriz de trazabilidad"
    ],
    "answer": 0,
    "exp": "El análisis de Pareto ordena las causas por frecuencia para concentrar el esfuerzo en las causas vitales."
  },
  {
    "id": "pm-181",
    "module": "pm",
    "topic": "Calidad",
    "q": "Detectar un defecto en producción resulta muy caro frente a corregirlo en diseño. ¿Qué principio ilustra esto?",
    "options": [
      "El costo de la calidad: prevenir es más barato que corregir",
      "La inspección total es siempre obligatoria",
      "Los grados altos eliminan la necesidad de pruebas",
      "La calidad depende del proveedor"
    ],
    "answer": 0,
    "exp": "Invertir en prevención reduce el costo total de la calidad, ya que los fallos tardíos son mucho más costosos de corregir."
  },
  {
    "id": "pm-182",
    "module": "pm",
    "topic": "Recursos",
    "q": "¿Qué acción fomenta la confianza en un equipo de proyecto distribuido?",
    "options": [
      "Crear un entorno de trabajo colaborativo con reglas claras de participación",
      "Evitar las reuniones cara a cara",
      "Centralizar todas las decisiones en el patrocinador",
      "Limitar la documentación a un solo miembro"
    ],
    "answer": 0,
    "exp": "El trabajo en equipo se fortalece con entornos de confianza, comunicación transparente y responsabilidades claras."
  },
  {
    "id": "pm-183",
    "module": "pm",
    "topic": "Recursos",
    "q": "Necesitas temporalmente a un ingeniero de ciberseguridad que pertenece a otra unidad. ¿Qué técnica de asignación usas?",
    "options": [
      "Negociar su asignación con el gerente responsable",
      "Esperar a que esté disponible por casualidad",
      "Eliminar la tarea que lo requería",
      "Subcontratar todo el módulo sin evaluar"
    ],
    "answer": 0,
    "exp": "La negociación es clave para obtener recursos compartidos, sopesando prioridades entre proyectos de la organización."
  },
  {
    "id": "pm-184",
    "module": "pm",
    "topic": "Recursos",
    "q": "El proyecto requiere una habilidad de automatización que el equipo no tiene y no da tiempo de capacitar. ¿Qué opción aplicas?",
    "options": [
      "Adquirir recursos externos (contratación o proveedor)",
      "Reducir la calidad de las entregas",
      "Extender el cronograma indefinidamente",
      "Asignar el trabajo a un solo generalista"
    ],
    "answer": 0,
    "exp": "La adquisición de recursos cubre brechas de habilidades mediante contratación temporal o apoyo externo especializado."
  },
  {
    "id": "pm-185",
    "module": "pm",
    "topic": "Comunicaciones",
    "q": "Para que la dirección vea el estado de un vistazo, ¿qué recurso visual resulta más eficaz?",
    "options": [
      "Un tablero con indicadores clave y semáforos",
      "Un documento narrativo de veinte páginas",
      "La lista completa de tareas técnicas",
      "El cronograma detallado de actividades"
    ],
    "answer": 0,
    "exp": "Los tableros con indicadores condensan el estado y facilitan decisiones rápidas de la dirección."
  },
  {
    "id": "pm-186",
    "module": "pm",
    "topic": "Comunicaciones",
    "q": "El receptor interpreta el mensaje según su contexto cultural y sus sesgos. ¿Qué factor describe esto?",
    "options": [
      "Filtros perceptivos del receptor",
      "Ruido físico del canal",
      "Fallo del emisor",
      "Falta de canal escrito"
    ],
    "answer": 0,
    "exp": "Las percepciones, experiencias y contexto cultural actúan como filtros que alteran la interpretación del mensaje."
  },
  {
    "id": "pm-187",
    "module": "pm",
    "topic": "Comunicaciones",
    "q": "Los informes semanales se envían pero nadie responde ni los lee. ¿Qué acción mejora la comunicación?",
    "options": [
      "Solicitar retroalimentación y ajustar método y frecuencia",
      "Aumentar el volumen de correos",
      "Mandar los mismos informes con más frecuencia",
      "Suspender toda comunicación"
    ],
    "answer": 0,
    "exp": "Sin retroalimentación no hay comunicación efectiva: hay que verificar la recepción y adaptar el enfoque a la audiencia."
  },
  {
    "id": "pm-188",
    "module": "pm",
    "topic": "Riesgos",
    "q": "¿Qué es un disparador de riesgo en el registro?",
    "options": [
      "Una señal observable de que el riesgo está a punto de ocurrir",
      "La fecha de cierre del proyecto",
      "El aprobador de la respuesta",
      "El presupuesto reservado"
    ],
    "answer": 0,
    "exp": "Los disparadores (triggers) indican que el riesgo se está materializando y permiten ejecutar la respuesta a tiempo."
  },
  {
    "id": "pm-189",
    "module": "pm",
    "topic": "Riesgos",
    "q": "Contratas un servicio externo con cláusula penal y un seguro para una caída del datacenter. ¿Qué estrategia es?",
    "options": [
      "Transferencia",
      "Mitigación",
      "Aceptación",
      "Explotación"
    ],
    "answer": 0,
    "exp": "La transferencia traslada el impacto financiero a un tercero, como ocurre con los seguros y los contratos con penalidades."
  },
  {
    "id": "pm-190",
    "module": "pm",
    "topic": "Riesgos",
    "q": "¿Con qué frecuencia conviene revisar el registro de riesgos durante el proyecto?",
    "options": [
      "De forma periódica durante todo el ciclo de vida, no solo al inicio",
      "Únicamente al inicio del proyecto",
      "Solo cuando ocurre un incidente grave",
      "Únicamente en el cierre"
    ],
    "answer": 0,
    "exp": "Los riesgos se revisan de forma continua para identificar nuevos, cerrar los resueltos y actualizar las respuestas."
  },
  {
    "id": "pm-191",
    "module": "pm",
    "topic": "Riesgos",
    "q": "¿Qué técnica de identificación reúne al equipo para generar ideas de riesgos sin criticar durante la sesión?",
    "options": [
      "Tormenta de ideas",
      "Benchmarking",
      "Análisis de reservas",
      "Revisión de contratos"
    ],
    "answer": 0,
    "exp": "La tormenta de ideas (brainstorming) convoca al equipo para listar riesgos de forma abierta y estructurada."
  },
  {
    "id": "pm-192",
    "module": "pm",
    "topic": "Adquisiciones",
    "q": "¿Qué documento envías a proveedores para que presenten ofertas comparables bajo condiciones homogéneas?",
    "options": [
      "La solicitud de propuestas (RFP)",
      "El informe de lecciones aprendidas",
      "El acta de constitución",
      "El mapa de calor de interesados"
    ],
    "answer": 0,
    "exp": "La RFP describe requisitos, criterios de evaluación y condiciones para que las propuestas sean evaluables de forma uniforme."
  },
  {
    "id": "pm-193",
    "module": "pm",
    "topic": "Adquisiciones",
    "q": "El proveedor incumple los plazos acordados reiteradamente. ¿Qué acción corresponde?",
    "options": [
      "Aplicar las sanciones y remedios previstos en el contrato",
      "Ignorar el retraso hasta el cierre",
      "Aumentar el precio pagado preventivamente",
      "Rescindir sin registrar nada"
    ],
    "answer": 0,
    "exp": "El contrato define penalidades y remedios; el control de adquisiciones los aplica y documenta el incumplimiento."
  },
  {
    "id": "pm-194",
    "module": "pm",
    "topic": "Partes interesadas",
    "q": "Una área con poco poder y poco interés en el proyecto de respaldo. ¿Qué nivel de esfuerzo dedicas?",
    "options": [
      "Monitoreo con esfuerzo mínimo",
      "Gestión de cerca",
      "Mantener satisfecho con informes semanales",
      "Empoderar para que decida"
    ],
    "answer": 0,
    "exp": "Bajo poder y bajo interés se vigila con esfuerzo mínimo; solo se reevalúa si cambia su posición en el proyecto."
  },
  {
    "id": "pm-195",
    "module": "pm",
    "topic": "Partes interesadas",
    "q": "Durante la ejecución aparece un nuevo ente regulador con requisitos de cumplimiento. ¿Qué haces?",
    "options": [
      "Lo ignoro por llegar tarde",
      "Lo añado solo al cierre del proyecto",
      "Delego su comunicación en el proveedor",
      "Actualizo el registro de partes interesadas y su estrategia de involucramiento"
    ],
    "answer": 3,
    "exp": "Identificar interesados es un proceso recurrente: las nuevas partes se registran y se adapta el plan de involucramiento."
  },
  {
    "id": "pm-196",
    "module": "pm",
    "topic": "Partes interesadas",
    "q": "El jefe escucha las opiniones del grupo y luego decide solo. ¿Qué técnica de decisión describe ese patrón?",
    "options": [
      "Consultiva",
      "Por consenso",
      "Por mayoría",
      "Impositiva sin escuchar"
    ],
    "answer": 0,
    "exp": "En la consultiva se recogen las opiniones pero la decisión final la asume una sola autoridad; el consenso exige acuerdo total."
  },
  {
    "id": "pm-197",
    "module": "pm",
    "topic": "Cierre",
    "q": "El proyecto termina y el equipo se disuelve. ¿Qué gestión corresponde con las personas?",
    "options": [
      "Reconocer el desempeño y liberar al equipo según el plan de gestión de recursos",
      "Despedir a todos sin evaluación",
      "Mantener el equipo sin proyecto hasta el siguiente",
      "Transferir al equipo sin informar"
    ],
    "answer": 0,
    "exp": "El cierre incluye liberar recursos de forma ordenada y reconocer la contribución del equipo, evitando el abandono abrupto."
  },
  {
    "id": "pm-198",
    "module": "pm",
    "topic": "Cierre",
    "q": "¿Qué debe lograrse con los contratos antes de declarar cerrado el proyecto?",
    "options": [
      "Que todos los entregables contractuales estén verificados y los contratos terminados",
      "Que todos los proveedores renueven sus ofertas",
      "Que el presupuesto quede sin ejecutar",
      "Que las solicitudes de cambio queden abiertas"
    ],
    "answer": 0,
    "exp": "El cierre administrativo de adquisiciones confirma entregas, resuelve reclamaciones y cierra los contratos de forma documentada."
  },
  {
    "id": "pm-199",
    "module": "pm",
    "topic": "Control de cambios",
    "q": "¿Cuál es el propósito del control integrado de cambios?",
    "options": [
      "Revisar y decidir todas las solicitudes de cambio de forma coordinada y trazable",
      "Aplicar todos los cambios sin evaluar",
      "Evitar que el equipo proponga mejoras",
      "Reemplazar la planificación inicial"
    ],
    "answer": 0,
    "exp": "El control integrado de cambios garantiza que ningún cambio se aplique sin revisión del impacto conjunto en el proyecto."
  },
  {
    "id": "pm-200",
    "module": "pm",
    "topic": "Control de cambios",
    "q": "Fuera del ciclo ordinario llega una exigencia urgente de seguridad. ¿Cómo procedes?",
    "options": [
      "Espero al cierre del proyecto",
      "Lo niego siempre por estar fuera de ciclo",
      "Aplico solo la acción de emergencia autorizada por la autoridad definida y documento el cambio retroactivamente",
      "Lo aplico sin registrar para cumplir el plazo"
    ],
    "answer": 2,
    "exp": "Las urgencias siguen la vía de autorización prevista en el plan de gestión de cambios y quedan registradas con posterioridad."
  },
  {
    "id": "seg-101",
    "module": "seg",
    "topic": "Identidad",
    "q": "El equipo quiere reducir la fricción de acceso a decenas de aplicaciones internas sin multiplicar contraseñas ni reutilización de credenciales. ¿Qué arquitectura de acceso aplicarías y por qué?",
    "options": [
      "Implementar inicio de sesión único (SSO) con un proveedor de identidad corporativo, de modo que la autenticación se gestiona en un solo punto y las aplicaciones confían en él.",
      "Pedir a cada usuario una contraseña distinta y única por aplicación, anotada en un cuaderno para recordarla fácilmente.",
      "Autenticar cada aplicación de forma independiente y exigir la misma contraseña en todas para simplificar el soporte.",
      "Permitir un acceso abierto a la red interna y confiar en que ningún usuario malicioso llegará a las aplicaciones."
    ],
    "answer": 0,
    "exp": "El SSO centraliza la autenticación en un proveedor de identidad, reduce la reutilización de contraseñas y mejora la experiencia sin eliminar el control de acceso. Las demás opciones multiplican el riesgo de credenciales o eliminan el control por completo."
  },
  {
    "id": "seg-102",
    "module": "seg",
    "topic": "Identidad",
    "q": "Un servicio automatizado necesita llamadas recurrentes a una API interna. ¿Cómo gestionarías sus credenciales?",
    "options": [
      "Usar la cuenta personal de un administrador para que sea fácil atribuir cualquier acción al equipo.",
      "Publicar la clave en el repositorio de código para que todo el equipo disponga de ella sin pedirla.",
      "Crear una cuenta de servicio dedicada con privilegios mínimos, rotación periódica de la clave y almacenamiento fuera del código.",
      "Desactivar la autenticación de la API porque el tráfico proviene de la red interna."
    ],
    "answer": 2,
    "exp": "Una cuenta de servicio propia con privilegios mínimos y rotación de claves limita el impacto de una fuga y mantiene la trazabilidad. Las otras opciones exponen credenciales elevadas o eliminan el control de acceso."
  },
  {
    "id": "seg-103",
    "module": "seg",
    "topic": "Identidad",
    "q": "Un administrador solo necesita privilegios elevados para ejecutar una tarea puntual de mantenimiento. ¿Qué modelo de acceso adoptarías?",
    "options": [
      "Conceder privilegios de administrador de forma permanente para evitar retrasos futuros en las tareas del equipo.",
      "Compartir una única cuenta de administrador entre todo el equipo para simplificar la gestión.",
      "Eliminar los privilegios elevados por completo y que cada acción se realice con permisos de solo lectura.",
      "Aplicar elevación de privilegios just-in-time: conceder los permisos elevados solo durante la ventana de trabajo y retirarlos al terminar."
    ],
    "answer": 3,
    "exp": "La elevación just-in-time reduce el tiempo de exposición de las cuentas privilegiadas y mantiene la trazabilidad de su uso. Las opciones de privilegio permanente o compartido aumentan innecesariamente el riesgo."
  },
  {
    "id": "seg-104",
    "module": "seg",
    "topic": "Identidad",
    "q": "Tras desplegar MFA, algunos usuarios se quejan de la frecuencia de los desafíos. ¿Cómo equilibrarías seguridad y experiencia?",
    "options": [
      "Desactivar MFA en las aplicaciones de menor riesgo para reducir la molestia de los usuarios.",
      "Mantener MFA pero adaptar el desafío al contexto y el riesgo de la sesión, solicitando verificación adicional solo cuando el acceso sea inusual.",
      "Sustituir MFA por preguntas de seguridad, que son menos intrusivas para el usuario.",
      "Permitir que los usuarios recuerden el dispositivo indefinidamente sin ningún tipo de renovación del desafío."
    ],
    "answer": 1,
    "exp": "El MFA adaptativo mantiene el segundo factor pero lo exige según el riesgo del contexto, equilibrando seguridad y experiencia. Desactivar el control o eliminarlo por completo reduce la protección frente a credenciales comprometidas."
  },
  {
    "id": "seg-105",
    "module": "seg",
    "topic": "Identidad",
    "q": "Una persona deja la empresa y aún tiene sesiones abiertas en varias aplicaciones. ¿Qué deberías hacer de forma inmediata?",
    "options": [
      "Desactivar su cuenta y revocar las sesiones y tokens vigentes para cortar cualquier acceso residual.",
      "Esperar a que las sesiones expiren por tiempo de inactividad para no interrumpir el trabajo de otros.",
      "Cambiar solo la contraseña y dejar las sesiones abiertas hasta el final del día laboral.",
      "Mantener la cuenta activa durante un mes por si necesita completar tareas pendientes."
    ],
    "answer": 0,
    "exp": "Revocar la cuenta y las sesiones activas corta de inmediato todo acceso residual, incluidos los tokens ya emitidos. Esperar o limitarse a cambiar la contraseña deja ventanas de acceso tras la baja."
  },
  {
    "id": "seg-106",
    "module": "seg",
    "topic": "Identidad",
    "q": "¿Qué práctica te permite detectar y corregir permisos que ya no corresponden a los roles actuales de los usuarios?",
    "options": [
      "Confiar en que los administradores recordarán revocar los accesos cuando cambie el organigrama.",
      "Eliminar todos los accesos cada fin de semana y volver a otorgarlos manualmente.",
      "Realizar revisiones periódicas de accesos (recertificación) en las que cada responsable confirma o retira los permisos de su equipo.",
      "Otorgar el mismo conjunto de permisos a todos los empleados para que las revisiones sean más rápidas."
    ],
    "answer": 2,
    "exp": "La recertificación periódica hace responsable al dueño de cada conjunto de accesos de confirmarlos o retirarlos, corrigiendo la deriva de permisos. Confiar en la memoria o uniformizar permisos no detecta acumulación de privilegios."
  },
  {
    "id": "seg-107",
    "module": "seg",
    "topic": "Identidad",
    "q": "El equipo evalúa eliminar las contraseñas en favor de passkeys o llaves de seguridad. ¿Cuál es el principal argumento a favor?",
    "options": [
      "Las llaves de seguridad eliminan la necesidad de cualquier factor de autenticación adicional.",
      "Se eliminan los ataques de phishing y de fuerza bruta contra contraseñas, ya que la credencial no es un secreto que el usuario pueda entregar a un sitio falsificado.",
      "Permiten iniciar sesión sin identificar al usuario, lo que agiliza el acceso.",
      "No requieren infraestructura de identidad ni confianza en ningún proveedor."
    ],
    "answer": 1,
    "exp": "Las passkeys y llaves FIDO están vinculadas al dominio verificado, por lo que no pueden entregarse a un sitio de phishing y resisten la fuerza bruta. Las demás opciones describen ventajas inexistentes o contrarias a la seguridad."
  },
  {
    "id": "seg-108",
    "module": "seg",
    "topic": "Identidad",
    "q": "¿Por qué conviene separar la cuenta diaria de un administrador de su cuenta con privilegios elevados?",
    "options": [
      "Para que las dos contraseñas sean idénticas y sea más fácil recordarlas.",
      "Para poder eliminar por completo la autenticación en la cuenta diaria.",
      "Porque los privilegios elevados mejoran el rendimiento de las aplicaciones que usa a diario.",
      "Para que una sesión comprometida en tareas cotidianas no arrastre privilegios de administración, elevando solo cuando sea necesario."
    ],
    "answer": 3,
    "exp": "Separar las cuentas limita el daño si la sesión diaria se ve comprometida: el atacante no obtiene privilegios de administración automáticamente. Las demás opciones no aportan seguridad."
  },
  {
    "id": "seg-109",
    "module": "seg",
    "topic": "Identidad",
    "q": "¿Qué control reduce el riesgo de que una sesión abandonada en un equipo compartido sea reutilizada por otra persona?",
    "options": [
      "Aumentar el tiempo de sesión indefinidamente para evitar molestias.",
      "Permitir múltiples sesiones simultáneas con la misma cuenta en distintos equipos.",
      "Aplicar cierre de sesión por inactividad y expiración de la sesión, junto con la revocación efectiva de la sesión al cerrar.",
      "Eliminar el identificador de sesión y confiar solo en la red interna."
    ],
    "answer": 2,
    "exp": "Los límites de inactividad y expiración, más la revocación real de la sesión, impiden que una sesión olvidada siga siendo válida. Los demás planteamientos amplían la ventana de riesgo o no aportan control."
  },
  {
    "id": "seg-110",
    "module": "seg",
    "topic": "Identidad",
    "q": "Un contratista necesitará acceso a un entorno durante unas semanas. ¿Cómo estructurarías ese acceso?",
    "options": [
      "Darle una cuenta permanente con los mismos permisos que un empleado interno para simplificar futuras colaboraciones.",
      "Crear una cuenta temporal con alcance limitado, expiración definida y permisos mínimos para su tarea.",
      "Pedirle que use la cuenta de un empleado mientras dure el contrato.",
      "Concederle acceso administrador para evitar limitaciones en su trabajo."
    ],
    "answer": 1,
    "exp": "Una cuenta temporal, acotada y con expiración asegura el acceso necesario sin dejar credenciales vigentes más allá de la relación contractual. Las demás opciones generan accesos permanentes o compartidos difíciles de atribuir."
  },
  {
    "id": "seg-111",
    "module": "seg",
    "topic": "Perímetro",
    "q": "¿Dónde deberías desplegar firewalls en una red corporativa para que los controles sean efectivos?",
    "options": [
      "En los puntos de tránsito entre zonas de distinto nivel de confianza, controlando el flujo entre ellas.",
      "Únicamente en la entrada de Internet, porque el tráfico interno siempre es fiable.",
      "En cada puesto de trabajo para reemplazar el control perimetral.",
      "Solo en la red inalámbrica de invitados."
    ],
    "answer": 0,
    "exp": "Los controles deben estar donde el tráfico cambia de nivel de confianza, no solo en el borde externo. Confiar solo en la entrada de Internet ignora el riesgo interno."
  },
  {
    "id": "seg-112",
    "module": "seg",
    "topic": "Perímetro",
    "q": "¿Por qué filtrar también el tráfico saliente (egress) en lugar de controlar solo lo que entra?",
    "options": [
      "Porque el tráfico saliente consume más ancho de banda que el entrante.",
      "Para que los usuarios no descarguen actualizaciones de software.",
      "Porque limita la exfiltración de datos y el contacto con infraestructura de atacantes, reduciendo el impacto de una compromisión.",
      "Porque el filtrado saliente sustituye a la necesidad de parchear sistemas."
    ],
    "answer": 2,
    "exp": "Si un sistema se compromete, el filtrado de salida dificulta la salida de datos y el contacto con servidores de control del atacante. Las demás opciones no justifican correctamente el control de egress."
  },
  {
    "id": "seg-113",
    "module": "seg",
    "topic": "Perímetro",
    "q": "¿Qué aporta un firewall con inspección de estado frente a uno que solo evalúa paquetes aislados?",
    "options": [
      "Permite bloquear el tráfico solo después de que la conexión haya terminado.",
      "Puede decidir en función de la sesión: distingue conexiones establecidas y el tráfico que pertenece a ellas.",
      "No necesita reglas de filtrado porque conoce el estado del sistema.",
      "Cifra automáticamente todas las conexiones que atraviesan."
    ],
    "answer": 1,
    "exp": "La inspección de estado mantiene el contexto de las conexiones, lo que permite aceptar el tráfico legítimo de respuestas y bloquear lo no solicitado. Las demás opciones describen capacidades inexistentes."
  },
  {
    "id": "seg-114",
    "module": "seg",
    "topic": "Perímetro",
    "q": "Una aplicación web pública sufre intentos de inyección de código en sus formularios. ¿Qué control encaja mejor?",
    "options": [
      "Un firewall de red que filtra únicamente por puerto y cierra conexiones inactivas.",
      "Un antivirus corporativo instalado en el servidor de la base de datos.",
      "Un sistema de detección de intrusos en la red interna sin visibilidad de las peticiones HTTP.",
      "Un cortafuegos de aplicaciones web (WAF) que inspecciona el tráfico HTTP y bloquea patrones de ataque."
    ],
    "answer": 3,
    "exp": "El WAF inspecciona el contenido de las peticiones web y bloquea ataques como inyección o scripting entre sitios. Los demás controles no ven ni evalúan el contenido HTTP aplicable a la amenaza."
  },
  {
    "id": "seg-115",
    "module": "seg",
    "topic": "Perímetro",
    "q": "Los usuarios necesitan salir a Internet a través de un punto de control corporativo. ¿Qué componente se encarga y qué ventaja aporta?",
    "options": [
      "Un proxy corporativo que centraliza la salida, permite aplicar políticas, registrar el uso y controlar el contenido al que se accede.",
      "Un switch de capa 2 que reenvía tráfico sin inspección alguna.",
      "Un router que cambia las direcciones sin aplicar ninguna política.",
      "Un balanceador de carga que distribuye las peticiones entre servidores web."
    ],
    "answer": 0,
    "exp": "El proxy centraliza la salida y permite aplicar políticas, inspeccionar y registrar el acceso. Un switch o un router sin políticas no aportan control sobre el contenido."
  },
  {
    "id": "seg-116",
    "module": "seg",
    "topic": "Perímetro",
    "q": "¿Dónde colocarías un IPS y por qué?",
    "options": [
      "En modo pasivo fuera del camino del tráfico, para no añadir latencia alguna.",
      "En línea (inline) en el camino del tráfico, de modo que pueda bloquear el ataque en el momento en que lo detecta.",
      "Solo después del firewall, descartando la posibilidad de bloquear porque el tráfico ya llegó al destino.",
      "En el equipo de cada usuario, sin visibilidad del tráfico de la red."
    ],
    "answer": 1,
    "exp": "Un IPS debe estar en línea para detener el tráfico malicioso en tiempo real; en modo pasivo solo detectaría, como un IDS. Las demás opciones impiden el bloqueo efectivo."
  },
  {
    "id": "seg-117",
    "module": "seg",
    "topic": "Perímetro",
    "q": "¿Cómo deberían conectarse los administradores a los servidores críticos desde una red no confiable?",
    "options": [
      "Abriendo directamente las puertas de administración a Internet para agilizar el acceso.",
      "Conectándose a la red de usuarios y saltando al servidor crítico por confianza implícita.",
      "A través de un salto o bastión restringido, con autenticación fuerte, registro y limitación de qué servidores se pueden alcanzar.",
      "Desactivando temporalmente el firewall durante la ventana de administración."
    ],
    "answer": 2,
    "exp": "El bastión concentra y controla el acceso administrativo con fuerte autenticación y trazabilidad, exponiendo un solo punto restringido. Abrir puertas de administración directamente amplía la superficie de ataque innecesariamente."
  },
  {
    "id": "seg-118",
    "module": "seg",
    "topic": "Perímetro",
    "q": "Un colega afirma que usar NAT ya protege la red porque oculta las direcciones internas. ¿Cómo le responderías?",
    "options": [
      "Tienes razón: NAT sustituye a un firewall porque el tráfico entrante no puede identificar los equipos internos.",
      "NAT cifra el tráfico, por lo que aporta confidencialidad equivalente a la de un firewall.",
      "NAT es suficiente si además se usa una VLAN para los servidores.",
      "NAT solo oculta direcciones, pero no inspecciona ni aplica políticas sobre el contenido del tráfico, así que no sustituye a un firewall."
    ],
    "answer": 3,
    "exp": "Ocultar direcciones no es filtrado: NAT no evalúa sesiones ni aplica reglas de acceso. Solo un firewall (u otro control equivalente) aplica políticas sobre el tráfico."
  },
  {
    "id": "seg-119",
    "module": "seg",
    "topic": "Perímetro",
    "q": "¿Qué arquitectura ayuda a mitigar denegaciones de servicio que saturan el ancho de banda de un sitio?",
    "options": [
      "Depender únicamente del cortafuegos interno, que filtra el tráfico una vez llegado al servidor.",
      "Contar con capacidad y filtrado en el borde de la red, con redundancia para absorber el volumen antes de que alcance los sistemas internos.",
      "Subir el límite de CPU del servidor web, que es donde se manifiesta el problema.",
      "Apagar temporalmente el sitio para que el ataque no tenga efecto."
    ],
    "answer": 1,
    "exp": "Mitigar en el borde, con capacidad de absorción y filtrado distribuido, evita que el volumen sature el enlace y los sistemas internos. Un control solo en el servidor llega tarde si el enlace está saturado."
  },
  {
    "id": "seg-120",
    "module": "seg",
    "topic": "Perímetro",
    "q": "¿Por qué separar la red de administración de la red de usuarios?",
    "options": [
      "Porque la red de administración necesita mayor ancho de banda que la de usuarios.",
      "Para que los usuarios no puedan ver el tráfico cifrado de Internet.",
      "Para que una compromisión en la red de usuarios no permita alcanzar directamente los sistemas de gestión y administración.",
      "Porque los protocolos de gestión no funcionan junto al tráfico de usuarios."
    ],
    "answer": 2,
    "exp": "Separar las redes limita el movimiento desde una red de usuario comprometida hacia sistemas de gestión sensibles. Las demás justificaciones no se corresponden con motivos de seguridad reales."
  },
  {
    "id": "seg-121",
    "module": "seg",
    "topic": "Detección",
    "q": "¿Qué aporta un EDR frente a un antivirus tradicional?",
    "options": [
      "Telemetría continua del endpoint, detección basada en comportamiento y capacidad de responder o contener procesos sospechosos en el equipo.",
      "Un simple listado de firmas conocidas que se comprueba al abrir archivos.",
      "Bloqueo perimetral del tráfico saliente desde el equipo.",
      "Sustituye la necesidad de aplicar parches al sistema."
    ],
    "answer": 0,
    "exp": "El EDR observa el comportamiento en tiempo real, correlaciona señales y permite contener incidentes en el propio equipo. El antivirus clásico se basa sobre todo en firmas conocidas."
  },
  {
    "id": "seg-122",
    "module": "seg",
    "topic": "Detección",
    "q": "¿Cuál es el valor principal de una herramienta de detección de red (NDR)?",
    "options": [
      "Reemplazar la autenticación de los usuarios en la red.",
      "Cifrar automáticamente el tráfico entre segmentos de red.",
      "Instalar software en todos los servidores para monitorizarlos.",
      "Observar el comportamiento del tráfico de red y señalar patrones anómalos o sospechosos, incluso sin agentes en los equipos."
    ],
    "answer": 3,
    "exp": "El NDR analiza el flujo de tráfico para detectar comportamientos anómalos sin necesidad de instalar agentes en cada activo. No sustituye la autenticación ni aporta cifrado."
  },
  {
    "id": "seg-123",
    "module": "seg",
    "topic": "Detección",
    "q": "¿Qué conjunto de fuentes de registro deberías priorizar para detectar accesos indebidos?",
    "options": [
      "Solo los registros del antivirus de los puestos de usuario.",
      "Registros de autenticación y autorización, cortafuegos y aplicaciones críticas, que muestran quién accede y a qué.",
      "Registros de las impresoras y del inventario de activos.",
      "Únicamente los registros de la web corporativa, que es la fuente más grande."
    ],
    "answer": 1,
    "exp": "Autenticación, cortafuegos y aplicaciones críticas muestran quién intentó acceder, desde dónde y a qué recurso, que es la base para detectar accesos indebidos. Las demás fuentes no responden a esa pregunta."
  },
  {
    "id": "seg-124",
    "module": "seg",
    "topic": "Detección",
    "q": "El equipo de seguridad está saturado de alertas falsas. ¿Cuál es la mejor respuesta inicial?",
    "options": [
      "Desactivar las reglas más ruidosas hasta que el volumen sea soportable.",
      "Eliminar la plataforma de detección y volver a revisar los registros manualmente.",
      "Ajustar y afinar las reglas con contexto y supresiones acotadas, manteniendo la cobertura de los escenarios críticos.",
      "Ignorar todas las alertas por debajo del nivel crítico sin revisión alguna."
    ],
    "answer": 2,
    "exp": "Afinar reglas con contexto reduce el ruido sin perder cobertura sobre los escenarios importantes. Desactivar controles o ignorar alertas deja la organización sin detección efectiva."
  },
  {
    "id": "seg-125",
    "module": "seg",
    "topic": "Detección",
    "q": "¿Por qué centralizar los registros de los distintos sistemas en una plataforma única?",
    "options": [
      "Para poder correlacionar eventos de diferentes fuentes, protegerlos de manipulación local y tener una visión única del incidente.",
      "Para reducir el consumo de disco de cada servidor, ya que los registros se borran al centralizarse.",
      "Para que cada equipo administre sus propios registros de forma aislada.",
      "Porque los registros centralizados dejan de ocupar espacio en los sistemas de origen."
    ],
    "answer": 0,
    "exp": "La centralización permite correlacionar eventos entre fuentes y evita que un atacante altere localmente las pruebas. Las demás opciones no describen ventajas reales de la centralización."
  },
  {
    "id": "seg-126",
    "module": "seg",
    "topic": "Detección",
    "q": "¿Por qué complementar la detección basada en indicadores de compromiso (IOC) con detección de comportamiento?",
    "options": [
      "Porque los IOC son más fáciles de implementar y la detección de comportamiento no aporta nada adicional.",
      "Porque el comportamiento no tiene relación con las amenazas reales.",
      "Porque los indicadores son secretos que no deben compartirse con los equipos de defensa.",
      "Porque los indicadores describen amenazas ya conocidas y caducan, mientras que el análisis de comportamiento detecta actividad anómala propia de amenazas nuevas."
    ],
    "answer": 3,
    "exp": "Los IOC permiten detectar amenazas conocidas de forma rápida, pero se desactualizan; el análisis de comportamiento identifica desviaciones incluso sin indicadores previos. Combinarlos amplía la cobertura."
  },
  {
    "id": "seg-127",
    "module": "seg",
    "topic": "Detección",
    "q": "¿Qué representa la línea base (baseline) en un sistema de detección?",
    "options": [
      "La lista de todas las vulnerabilidades conocidas del sistema.",
      "El patrón de actividad normal contra el que se comparan los eventos para identificar desviaciones.",
      "El registro completo de todos los usuarios del sistema.",
      "La configuración mínima de hardware necesaria para ejecutar la herramienta."
    ],
    "answer": 1,
    "exp": "La línea base describe el comportamiento esperado, de modo que las desviaciones frente a ella generan alertas. Las demás opciones no describen el concepto de baseline de detección."
  },
  {
    "id": "seg-128",
    "module": "seg",
    "topic": "Detección",
    "q": "¿Cómo deberías utilizar inteligencia de amenazas en tu organización?",
    "options": [
      "Bloquear automáticamente cualquier indicador que llegue de un tercero, sin revisión, para ser más rápido.",
      "Usarla solo como material de formación, sin relación con la operación diaria.",
      "Integrarla con tus fuentes de eventos para correlacionar indicadores y tácticas con la actividad propia y priorizar la investigación.",
      "Sustituir la monitorización interna porque la inteligencia externa ya cubre todos los escenarios."
    ],
    "answer": 2,
    "exp": "La inteligencia de amenazas gana valor al correlacionarse con los eventos propios para priorizar investigaciones relevantes. Usarla a ciegas o sustituir la monitorización genera falsa seguridad."
  },
  {
    "id": "seg-129",
    "module": "seg",
    "topic": "Detección",
    "q": "¿Qué aporta un honeypot en una arquitectura de detección?",
    "options": [
      "Señal de alta fidelidad: cualquier interacción con él es sospechosa, lo que ayuda a detectar exploraciones y movimiento de atacantes.",
      "Prevención activa de todos los ataques de denegación de servicio.",
      "Sustituye al firewall como control de acceso perimetral.",
      "Cifrado del tráfico de red entre segmentos."
    ],
    "answer": 0,
    "exp": "Al no ser un recurso legítimo, cualquier contacto con el honeypot es anómalo y genera alertas de alta confianza. No previene ataques ni sustituye los controles de acceso."
  },
  {
    "id": "seg-130",
    "module": "seg",
    "topic": "Detección",
    "q": "Quieres saber si tu detección funciona realmente frente a un atacante. ¿Qué práctica te da esa evidencia?",
    "options": [
      "Aumentar el número de conectores de datos hacia la plataforma de detección.",
      "Contratar más analistas para revisar más alertas al día.",
      "Ejecutar escenarios de ataque simulados y comprobar si las reglas y el equipo detectan, escalan y contienen correctamente.",
      "Archivar todos los registros durante un año para tener más material disponible."
    ],
    "answer": 2,
    "exp": "Los ejercicios de simulación ponen a prueba de extremo a extremo la cobertura de detección y la respuesta del equipo. Más conectores o más analistas no demuestran que la detección funcione."
  },
  {
    "id": "seg-131",
    "module": "seg",
    "topic": "Respuesta a incidentes",
    "q": "Tras confirmar un incidente activo, ¿cuál es la prioridad inmediata?",
    "options": [
      "Reinstalar el sistema afectado desde cero para eliminar cualquier rastro.",
      "Contener el incidente para limitar su propagación, preservando al mismo tiempo la evidencia necesaria.",
      "Publicar un comunicado a toda la organización detallando lo ocurrido.",
      "Revisar el contrato con el proveedor de seguridad para determinar responsabilidades."
    ],
    "answer": 1,
    "exp": "Contener acota el daño mientras la preservación de evidencia permite investigar el origen y el alcance. Reinstalar o comunicar antes de contener compromete la investigación y la estabilización."
  },
  {
    "id": "seg-132",
    "module": "seg",
    "topic": "Respuesta a incidentes",
    "q": "¿Cuál es el orden correcto al recopilar evidencia digital durante una investigación?",
    "options": [
      "Primero los archivos de usuarios, después el disco y por último la memoria.",
      "No hace falta orden: todo se recoge al final, cuando el incidente esté cerrado.",
      "Primero el almacenamiento de respaldo, ya que es la fuente más estable.",
      "Atendiendo al orden de volatilidad: la memoria y el estado en ejecución primero, y después los medios persistentes."
    ],
    "answer": 3,
    "exp": "Lo más volátil (memoria, procesos, conexiones) se pierde al apagar o reiniciar, por lo que debe recogerse primero. El orden inverso o diferido provoca pérdida de pruebas."
  },
  {
    "id": "seg-133",
    "module": "seg",
    "topic": "Respuesta a incidentes",
    "q": "¿Cómo deberías gestionar la comunicación sobre un incidente en curso?",
    "options": [
      "Seguir el plan de comunicación definido, con roles y canales establecidos, y comunicar únicamente hechos verificados a los interesados correspondientes.",
      "Dejar que cada miembro del equipo informe por su cuenta en los canales que prefiera para mayor rapidez.",
      "Esperar a terminar la erradicación y comunicar todo de una vez a todo el mundo, incluidos medios de comunicación.",
      "No comunicar nada hasta tener la certeza absoluta de que no hay ningún impacto."
    ],
    "answer": 0,
    "exp": "Un plan de comunicación con roles y canales evita mensajes contradictorios y desinformación, comunicando solo hechos verificados. La comunicación improvisada o la opacidad total perjudican la respuesta."
  },
  {
    "id": "seg-134",
    "module": "seg",
    "topic": "Respuesta a incidentes",
    "q": "¿En qué se diferencian la erradicación y la recuperación?",
    "options": [
      "Son sinónimos y pueden usarse indistintamente en el informe del incidente.",
      "La recuperación elimina la causa del incidente; la erradicación devuelve los sistemas al servicio con monitorización reforzada.",
      "La erradicación elimina la causa y las condiciones que permitieron el incidente; la recuperación restaura y valida los sistemas, con monitorización adicional.",
      "Ninguna de las dos implica restaurar los sistemas afectados."
    ],
    "answer": 2,
    "exp": "La erradicación ataca la causa raíz (malware, credencial comprometida) y la recuperación devuelve los sistemas a producción con validación y vigilancia reforzada. No son sinónimos."
  },
  {
    "id": "seg-135",
    "module": "seg",
    "topic": "Respuesta a incidentes",
    "q": "Después de resolver un incidente, ¿qué paso aporta más valor para evitar su repetición?",
    "options": [
      "Culpar al responsable de la configuración para que no vuelva a ocurrir.",
      "Realizar una revisión sin culpar que identifique lecciones aprendidas y acciones de mejora concretas, con responsables asignados.",
      "Archivar el informe sin compartir las lecciones aprendidas para evitar una sensación de alarma en la organización.",
      "Cambiar todas las contraseñas de la organización y dar el asunto por cerrado."
    ],
    "answer": 1,
    "exp": "La revisión posterior identifica causas y acciones de mejora concretas que evitan la reincidencia. Culpar o archivar sin aprender no corrige las debilidades que permitieron el incidente."
  },
  {
    "id": "seg-136",
    "module": "seg",
    "topic": "Respuesta a incidentes",
    "q": "¿Por qué conviene tener playbooks de respuesta antes de que ocurra un incidente?",
    "options": [
      "Porque los playbooks sustituyen la necesidad de un equipo de respuesta.",
      "Para poder ejecutar la respuesta sin registrar ninguna evidencia, ganando velocidad.",
      "Porque garantizan que el incidente se resuelva sin necesidad de escalado alguno.",
      "Porque definen pasos, roles y decisiones con antelación, reduciendo el tiempo de reacción y la improvisación bajo presión."
    ],
    "answer": 3,
    "exp": "Tener el procedimiento definido permite actuar rápido y de forma consistente cuando el equipo está bajo presión. Un playbook no sustituye al equipo ni elimina el registro de evidencias."
  },
  {
    "id": "seg-137",
    "module": "seg",
    "topic": "Respuesta a incidentes",
    "q": "¿Cuál es el principal beneficio de realizar ejercicios de mesa (tabletop) periódicos?",
    "options": [
      "Practicar la coordinación y los roles del equipo ante escenarios realistas, detectando huecos del plan antes de una emergencia real.",
      "Sustituir la monitorización continua del entorno durante la duración del ejercicio.",
      "Eliminar la necesidad de playbooks escritos.",
      "Certificar que el equipo no cometerá errores durante un incidente."
    ],
    "answer": 0,
    "exp": "Los tabletop ejercitan roles, decisiones y comunicación en un entorno seguro, revelando fallas del plan antes de una crisis. No sustituyen la monitorización ni garantizan la ausencia de errores."
  },
  {
    "id": "seg-138",
    "module": "seg",
    "topic": "Respuesta a incidentes",
    "q": "Ante un posible ransomware, ¿por qué podría ser un error apagar inmediatamente el equipo afectado?",
    "options": [
      "Porque apagar el equipo provoca que el cifrado se complete más rápido.",
      "Porque el equipo dejará de generar registros, perdiéndose información para el análisis.",
      "Porque se perderían artefactos en memoria (procesos, conexiones, claves) que son clave para entender el alcance; primero se contiene y se preserva la evidencia.",
      "Porque el antivirus no puede ejecutarse con el equipo apagado."
    ],
    "answer": 2,
    "exp": "La memoria en ejecución contiene indicios valiosos que desaparecen al apagar; lo primero es contener y preservar. Las demás justificaciones son incorrectas."
  },
  {
    "id": "seg-139",
    "module": "seg",
    "topic": "Respuesta a incidentes",
    "q": "En un incidente que afecta a varios equipos, ¿qué estructura ayuda a que la respuesta sea ordenada?",
    "options": [
      "Que cada técnico actúe por su cuenta para multiplicar las acciones en paralelo.",
      "Definir un mando de incidente con roles claros (coordinación, análisis, comunicación) y una única vía de decisión.",
      "Turnarse cada hora en el mando para que todos aporten igualmente.",
      "Delegar la decisión final en el proveedor externo de seguridad."
    ],
    "answer": 1,
    "exp": "Un mando de incidente con roles y una vía de decisión única evita acciones contradictorias y acelera la coordinación. La actuación dispersa o el mando rotativo sin control generan caos."
  },
  {
    "id": "seg-140",
    "module": "seg",
    "topic": "Respuesta a incidentes",
    "q": "¿Cuándo y cómo deberías comunicar un incidente a clientes o socios afectados?",
    "options": [
      "Tan rápido como sea posible, aunque aún no se conozca el alcance, para cumplir con la transparencia.",
      "Nunca, porque comunicarlo afectaría la reputación de la empresa.",
      "Solo si el incidente se origina en un equipo del proveedor, nunca si nace internamente.",
      "Siguiendo el plan de comunicación y con información verificada sobre el alcance, el impacto y las medidas tomadas, según las obligaciones aplicables."
    ],
    "answer": 3,
    "exp": "La comunicación a terceros debe seguir el plan y basarse en hechos verificados, cumpliendo las obligaciones de notificación aplicables. Informar sin datos o callar por completo son enfoques incorrectos."
  },
  {
    "id": "seg-141",
    "module": "seg",
    "topic": "Criptografía",
    "q": "Necesitas verificar que un archivo no ha sido modificado desde que se publicó. ¿Qué mecanismo usarías?",
    "options": [
      "Cifrar el archivo con una contraseña compartida con todos los usuarios.",
      "Guardar una copia del archivo en otro servidor como respaldo.",
      "Aplicar una función hash criptográfica y comparar el resultado con el publicado por la fuente.",
      "Convertir el archivo a base64 y comparar el tamaño resultante."
    ],
    "answer": 2,
    "exp": "El hash produce una huella determinista del contenido: cualquier modificación cambia el resultado y delata la alteración. Cifrar o copiar no comprueba integridad de forma directa."
  },
  {
    "id": "seg-142",
    "module": "seg",
    "topic": "Criptografía",
    "q": "¿Por qué los sistemas de comunicación modernos combinan cifrado asimétrico y simétrico?",
    "options": [
      "El asimétrico resuelve el intercambio seguro de claves y la autenticación, y el simétrico cifra los datos con mejor rendimiento.",
      "Porque el simétrico no puede usar claves largas y el asimétrico solo sirve para texto corto.",
      "Porque el asimétrico es más rápido para grandes volúmenes de datos.",
      "Porque el simétrico solo autentica y el asimétrico solo cifra."
    ],
    "answer": 0,
    "exp": "El cifrado asimétrico es adecuado para intercambiar claves y autenticar, pero es más lento; el simétrico cifra grandes volúmenes con mejor rendimiento. Por eso se combinan."
  },
  {
    "id": "seg-143",
    "module": "seg",
    "topic": "Criptografía",
    "q": "¿Qué garantiza una firma digital sobre un mensaje?",
    "options": [
      "Que el mensaje esté cifrado y solo el emisor pueda leerlo.",
      "La integridad del mensaje y la autenticidad de quien lo firmó, sin que la firma cifre su contenido.",
      "Que el mensaje no pueda enviarse más de una vez.",
      "La confidencialidad del mensaje frente a la red."
    ],
    "answer": 1,
    "exp": "La firma digital prueba que el contenido no se alteró y que proviene del titular de la clave privada, pero no cifra el mensaje. Las demás opciones describen propiedades distintas."
  },
  {
    "id": "seg-144",
    "module": "seg",
    "topic": "Criptografía",
    "q": "¿Por qué conviene rotar periódicamente las claves criptográficas?",
    "options": [
      "Porque las claves pierden rendimiento con el uso y necesitan renovarse técnicamente.",
      "Para que los algoritmos antiguos sigan siendo compatibles con los sistemas.",
      "Porque las claves sin rotar ocupan más espacio en el almacén de secretos.",
      "Para limitar el impacto de una posible compromisión y acotar el periodo de datos descifrables con una clave concreta."
    ],
    "answer": 3,
    "exp": "La rotación reduce la ventana de datos descifrables si una clave se ve comprometida. Las demás justificaciones no corresponden a razones de seguridad reales."
  },
  {
    "id": "seg-145",
    "module": "seg",
    "topic": "Criptografía",
    "q": "¿Dónde deberías almacenar las claves de acceso a servicios externos usadas por tu aplicación?",
    "options": [
      "En un gestor de secretos o cofre de claves con acceso controlado y auditoría, nunca en el código ni en el repositorio.",
      "En un archivo de configuración versionado junto al código, para que sea fácil de encontrar.",
      "En un comentario del código fuente para que el equipo no las pierda.",
      "Enviarlas por correo al equipo de desarrollo la primera vez que se necesiten."
    ],
    "answer": 0,
    "exp": "Los gestores de secretos permiten controlar el acceso, rotar y auditar el uso de las claves sin exponerlas en el código. Versionarlas o enviarlas por correo las deja expuestas a cualquiera con acceso a esos canales."
  },
  {
    "id": "seg-146",
    "module": "seg",
    "topic": "Criptografía",
    "q": "¿Qué aporta cifrar en reposo los datos sensibles de una base de datos?",
    "options": [
      "Impide que los usuarios legítimos accedan a los datos sin un proceso de descifrado manual en cada consulta.",
      "Elimina la necesidad de controlar los accesos a la base de datos.",
      "Protege los datos si el soporte de almacenamiento es extraído o accesado fuera de los controles habituales.",
      "Evita que los datos se pierdan en caso de fallo del servidor."
    ],
    "answer": 2,
    "exp": "El cifrado en reposo protege la confidencialidad si el medio de almacenamiento es accesado fuera de los controles normales. No sustituye los controles de acceso ni aporta disponibilidad."
  },
  {
    "id": "seg-147",
    "module": "seg",
    "topic": "Criptografía",
    "q": "¿Qué papel juega la autoridad de certificación (CA) en la confianza digital?",
    "options": [
      "Guarda los datos personales de los usuarios para emitir sus certificados.",
      "Emite certificados digitales que vinculan una identidad o dominio con una clave pública, y los demás actores confían en ella mediante la cadena de confianza.",
      "Cifra el tráfico entre cliente y servidor en lugar del propio protocolo.",
      "Genera las claves privadas de todos los usuarios de Internet."
    ],
    "answer": 1,
    "exp": "La CA certifica la vinculación entre una identidad y una clave pública, y su confianza se extiende por la cadena de certificados. No guarda datos personales ni genera claves privadas de los usuarios."
  },
  {
    "id": "seg-148",
    "module": "seg",
    "topic": "Criptografía",
    "q": "¿Por qué no basta con una función hash no criptográfica para proteger contraseñas o integridad sensible?",
    "options": [
      "Porque las funciones hash no criptográficas son más lentas que las criptográficas.",
      "Porque no pueden procesar texto, solo números.",
      "Porque producen resultados más largos y ocupan más espacio.",
      "Porque están diseñadas para rendimiento y detección accidental de cambios, no para resistir ataques deliberados de colisión o preimagen."
    ],
    "answer": 3,
    "exp": "Las funciones no criptográficas priorizan la velocidad y no están construidas para resistir ataques dirigidos. Para seguridad se usan funciones criptográficas con esas propiedades garantizadas."
  },
  {
    "id": "seg-149",
    "module": "seg",
    "topic": "Criptografía",
    "q": "¿Qué problema resuelve el secreto hacia adelante (forward secrecy) en un intercambio de claves?",
    "options": [
      "Que la compromisión posterior de la clave privada a largo plazo no permita descifrar sesiones ya capturadas del pasado.",
      "Que las claves nunca deban rotarse para mantener la compatibilidad.",
      "Que el intercambio de claves se realice sin autenticación alguna.",
      "Que los datos cifrados no necesiten clave para ser leídos por el destinatario."
    ],
    "answer": 0,
    "exp": "Con forward secrecy cada sesión usa claves efímeras, de modo que la caída de la clave de largo plazo no revela tráfico histórico. Las demás opciones describen propiedades falsas o indeseables."
  },
  {
    "id": "seg-150",
    "module": "seg",
    "topic": "Criptografía",
    "q": "Para cifrar grandes volúmenes de datos con buen rendimiento, ¿qué tipo de cifrado usarías como mecanismo principal?",
    "options": [
      "Un cifrado asimétrico de claves públicas aplicado directamente a cada bloque de datos.",
      "Una función hash, que transforma los datos de forma reversible.",
      "Un cifrado simétrico de bloques, como AES, con una clave gestionada de forma segura.",
      "Codificación base64, que ya modifica la representación de los datos."
    ],
    "answer": 2,
    "exp": "Los cifrados simétricos de bloques como AES ofrecen buen rendimiento para grandes volúmenes con claves bien gestionadas. El asimétrico es demasiado lento para eso y el hash no cifra."
  },
  {
    "id": "seg-151",
    "module": "seg",
    "topic": "Segmentación",
    "q": "Estás diseñando la red de una aplicación con front-end público, capa de aplicación y base de datos interna. ¿Cómo las ubicarías?",
    "options": [
      "Todas en la misma subred para simplificar la conectividad y el rendimiento.",
      "En zonas separadas, con la base de datos en una zona de mayor confianza sin exposición directa y con controles entre zonas.",
      "En la misma zona que los puestos de usuarios, para que los equipos de soporte tengan acceso directo.",
      "En la red de gestión administrativa, que es la más controlada."
    ],
    "answer": 1,
    "exp": "Separar las capas en zonas de distinta confianza limita el acceso a la base de datos y facilita aplicar controles entre ellas. Una sola subred amplía el impacto de cualquier compromiso."
  },
  {
    "id": "seg-152",
    "module": "seg",
    "topic": "Segmentación",
    "q": "¿Qué principio debería gobernar el tráfico este-oeste entre zonas de una misma red interna?",
    "options": [
      "Permitir todo el tráfico interno porque el perímetro ya filtra lo externo.",
      "Permitir únicamente el tráfico saliente desde la zona interna.",
      "Bloquear solo el tráfico hacia Internet, dejando el interno libre.",
      "Aplicar políticas explícitas entre zonas: permitir solo los flujos necesarios y denegar el resto."
    ],
    "answer": 3,
    "exp": "Entre zonas se debe permitir solo lo estrictamente necesario y denegar todo lo demás, manteniendo el tráfico bajo control. Confiar en el perímetro o permitirlo todo deja el tráfico interno sin gobernar."
  },
  {
    "id": "seg-153",
    "module": "seg",
    "topic": "Segmentación",
    "q": "¿Qué afirmación sobre las VLANs es correcta?",
    "options": [
      "Una VLAN por sí sola aísla completamente el tráfico sin necesidad de controles adicionales.",
      "Las VLANs sustituyen a los firewalls porque separan dominios de broadcast.",
      "Una VLAN segmenta dominios de broadcast, pero el control de acceso entre VLANs requiere dispositivos y políticas adicionales.",
      "Las VLANs cifran el tráfico que circula entre sus miembros."
    ],
    "answer": 2,
    "exp": "Las VLANs separan dominios de broadcast, pero el tráfico entre ellas necesita controles explícitos (firewall, ACL) para estar gobernado. No cifran ni sustituyen los cortafuegos."
  },
  {
    "id": "seg-154",
    "module": "seg",
    "topic": "Segmentación",
    "q": "¿Cuál es la práctica recomendada al diseñar listas de control de acceso (ACL) en la red?",
    "options": [
      "Definir permisos explícitos para los flujos necesarios y denegar por defecto todo lo no autorizado, documentando cada regla.",
      "Abrir todas las puertas entre subredes para evitar incidencias de conectividad.",
      "Permitir todo salvo las puertas que se usen rara vez.",
      "Colocar las reglas más permisivas al principio y revisarlas solo cuando haya un incidente."
    ],
    "answer": 0,
    "exp": "Permitir solo lo necesario y denegar por defecto, con documentación, mantiene las ACLs verificables y seguras. Abrir todo o revisar solo tras incidentes deja reglas indeterminadas y excesivas."
  },
  {
    "id": "seg-155",
    "module": "seg",
    "topic": "Segmentación",
    "q": "Dos cargas de trabajo con niveles de sensibilidad distintos comparten el mismo entorno. ¿Qué diseño de tráfico les conviene?",
    "options": [
      "Unificar todas las políticas en una sola regla para simplificar su mantenimiento.",
      "Aplicar políticas de tráfico por cada carga de trabajo, de modo que el compromiso de una no le permita comunicarse libremente con la otra.",
      "Dejar el tráfico libre entre ellas, ya que comparten el mismo equipo físico.",
      "Conceder a ambas los mismos permisos para que ningún cambio rompa la funcionalidad."
    ],
    "answer": 1,
    "exp": "Las políticas por carga de trabajo acotan el alcance de un compromiso sin bloquear los flujos legítimos de cada servicio. Unificar o liberar el tráfico ignora la distinta sensibilidad de cada carga."
  },
  {
    "id": "seg-156",
    "module": "seg",
    "topic": "Segmentación",
    "q": "Un proveedor externo necesita conectarse para dar soporte a un sistema. ¿Cómo segmentarías su acceso?",
    "options": [
      "Concederle acceso a la red interna completa mientras dure el contrato para que pueda resolver cualquier incidencia.",
      "Pedirle que use una VPN corporativa idéntica a la de los empleados.",
      "Darle la cuenta de un administrador interno para evitar la gestión de permisos.",
      "Proporcionar un acceso acotado a los sistemas necesarios, con autenticación fuerte, trazabilidad y expiración definida."
    ],
    "answer": 3,
    "exp": "Un acceso acotado, trazable y temporal cumple la necesidad de soporte sin exponer la red interna. Los accesos amplios o compartidos amplían el riesgo innecesariamente."
  },
  {
    "id": "seg-157",
    "module": "seg",
    "topic": "Segmentación",
    "q": "En una red que mezcla equipos industriales (OT) y de oficina (IT), ¿qué deberías priorizar?",
    "options": [
      "Separar ambos entornos con controles entre ellos y limitar los flujos imprescindibles, porque sus niveles de riesgo y disponibilidad difieren.",
      "Conectarlos en la misma subred para unificar la monitorización.",
      "Desactivar los controles en el entorno industrial para no interrumpir la producción.",
      "Permitir acceso directo de todos los equipos OT a Internet para su actualización automática."
    ],
    "answer": 0,
    "exp": "La separación con flujos mínimos entre OT e IT protege la producción sin bloquear lo necesario, respetando sus prioridades distintas. Conectarlos libremente expone la operación industrial."
  },
  {
    "id": "seg-158",
    "module": "seg",
    "topic": "Segmentación",
    "q": "¿Qué control evita que cualquier persona conecte un equipo no autorizado a un puerto libre del switch?",
    "options": [
      "Cambiar el nombre de la red inalámbrica para que no sea visible.",
      "Aumentar la velocidad negociada en el puerto.",
      "Autenticación en el puerto de acceso (802.1X) combinada con control de acceso de red que solo admite dispositivos autorizados.",
      "Etiquetar físicamente los puertos utilizados."
    ],
    "answer": 2,
    "exp": "El 802.1X exige autenticación antes de conceder acceso a la red en el propio puerto, rechazando equipos no autorizados. Renombrar redes o etiquetar puertos no impide la conexión."
  },
  {
    "id": "seg-159",
    "module": "seg",
    "topic": "Segmentación",
    "q": "¿Cómo aislarías la red de invitados respecto a la red corporativa?",
    "options": [
      "Darles una IP de la misma subred con un comentario en el firewall para identificarlos.",
      "Ubicarlos en una zona o subred propia con políticas que solo permitan lo necesario (por ejemplo, salida a Internet) y sin acceso a redes internas.",
      "Permitirles acceso completo a la red interna con una contraseña compartida.",
      "Conectarlos directamente a la red de gestión para simplificar el soporte."
    ],
    "answer": 1,
    "exp": "Una zona propia con salida acotada permite que los invitados usen Internet sin tocar la red corporativa. Compartir subred o dar acceso completo elimina el aislamiento."
  },
  {
    "id": "seg-160",
    "module": "seg",
    "topic": "Segmentación",
    "q": "Al revisar las reglas del cortafuegos entre zonas encuentras una que permite desde la red de usuarios todo el tráfico a la base de datos. ¿Qué acción es la más adecuada?",
    "options": [
      "Mantenerla, porque la base de datos necesita recibir consultas de los usuarios.",
      "Duplicarla para tener redundancia en caso de fallo.",
      "Eliminar todas las reglas y empezar de cero sin documentar el cambio.",
      "Restringirla a los flujos y orígenes realmente necesarios, documentando y probando el cambio en una ventana controlada."
    ],
    "answer": 3,
    "exp": "La regla demasiado abierta debe estrecharse a lo necesario, con documentación y prueba para no romper servicios. Duplicarla o borrar todo sin control empeora el problema."
  },
  {
    "id": "seg-161",
    "module": "seg",
    "topic": "Gestión de vulnerabilidades",
    "q": "¿Por qué el escaneo de vulnerabilidades debe ser continuo y no una tarea anual?",
    "options": [
      "Porque aparecen vulnerabilidades y cambios de configuración de forma constante; una medición puntual deja de reflejar el riesgo real muy pronto.",
      "Porque los escaneos anuales consumen demasiado tiempo de la herramienta.",
      "Porque la normativa exige escanear exactamente cada semana.",
      "Porque el escaneo continuo sustituye a la necesidad de instalar parches."
    ],
    "answer": 0,
    "exp": "El riesgo cambia cada día con nuevas vulnerabilidades y cambios de configuración; una foto anual queda rápidamente obsoleta. El escaneo no sustituye la remediación."
  },
  {
    "id": "seg-162",
    "module": "seg",
    "topic": "Gestión de vulnerabilidades",
    "q": "Tienes una lista de vulnerabilidades con distinta severidad. ¿Cómo priorizas la remediación?",
    "options": [
      "Atender siempre de mayor a menor severidad teórica, ignorando la exposición del sistema.",
      "Dejarlas todas en espera hasta tener todas las correcciones del proveedor en un mismo cambio.",
      "Considerando la explotabilidad, el impacto y la exposición real del activo: lo explotado o expuesto primero.",
      "Ordenarlas alfabéticamente por identificador para llevar un control uniforme."
    ],
    "answer": 2,
    "exp": "La prioridad debe reflejar el riesgo real, que combina explotabilidad, impacto y exposición, no solo la puntuación teórica. Esperar o ordenar por criterios arbitrarios retrasa lo verdaderamente urgente."
  },
  {
    "id": "seg-163",
    "module": "seg",
    "topic": "Gestión de vulnerabilidades",
    "q": "¿Qué enfoque reduce el riesgo al aplicar parches críticos en producción?",
    "options": [
      "Aplicar directamente en producción sin probar, porque el parche es oficial del proveedor.",
      "Probar en un entorno equivalente, planificar una ventana de mantenimiento y tener un plan de reversión.",
      "Esperar a que el proveedor confirme que ningún cliente ha tenido incidencias con el parche.",
      "Dejar el parche para el próximo ciclo anual de mantenimiento, aunque la vulnerabilidad sea crítica."
    ],
    "answer": 1,
    "exp": "Probar, planificar la ventana y prever la reversión evita que el parche interrumpa el servicio sin dejar de corregir la vulnerabilidad. Aplicar a ciegas o posponer un parche crítico incrementa el riesgo."
  },
  {
    "id": "seg-164",
    "module": "seg",
    "topic": "Gestión de vulnerabilidades",
    "q": "¿Qué acciones forman parte del hardening de un servidor recién instalado?",
    "options": [
      "Instalar todas las aplicaciones disponibles por si se necesitan más adelante.",
      "Mantener las cuentas por defecto y sus contraseñas originales para poder reacceder si olvidamos las nuevas.",
      "Habilitar todos los servicios y puertos para anticiparse a futuras necesidades.",
      "Eliminar servicios y puertos innecesarios, cambiar credenciales por defecto y aplicar la configuración mínima requerida."
    ],
    "answer": 3,
    "exp": "El hardening reduce la superficie de ataque retirando lo superfluo y cambiando credenciales por defecto. Habilitar de más o conservar credenciales por defecto hace justo lo contrario."
  },
  {
    "id": "seg-165",
    "module": "seg",
    "topic": "Gestión de vulnerabilidades",
    "q": "¿Qué aporta una prueba de penetración frente a un escaneo automatizado de vulnerabilidades?",
    "options": [
      "La validación humana de la explotabilidad real y la combinación de hallazgos en una ruta de ataque concreta.",
      "Cobertura automática de todas las vulnerabilidades conocidas en pocos minutos.",
      "La capacidad de corregir automáticamente las vulnerabilidades detectadas.",
      "Sustituye la necesidad de escanear el entorno de forma periódica."
    ],
    "answer": 0,
    "exp": "El escaneo automatizado detecta señales conocidas, mientras que la prueba de penetración valida con criterio humano qué es realmente explotable y cómo se encadenan los hallazgos. No sustituye el escaneo periódico."
  },
  {
    "id": "seg-166",
    "module": "seg",
    "topic": "Gestión de vulnerabilidades",
    "q": "Detectas que un servidor de producción tiene servicios abiertos que no corresponden al baseline. ¿Qué representa esto?",
    "options": [
      "Una señal de que el baseline estaba completo desde el inicio y no requiere cambios.",
      "Un problema de rendimiento de la red, no de seguridad.",
      "Desviación de configuración (drift): el entorno se ha alejado del estándar, lo que amplía la superficie de ataque y debe corregirse.",
      "Que el escaneo de vulnerabilidades ha generado falsos positivos."
    ],
    "answer": 2,
    "exp": "La desviación del baseline indica que se expone superficie de ataque no prevista y debe corregirse y reforzarse la vigilancia. No es un problema de rendimiento ni una señal positiva."
  },
  {
    "id": "seg-167",
    "module": "seg",
    "topic": "Gestión de vulnerabilidades",
    "q": "¿Cuál es una forma efectiva de reducir la superficie de ataque?",
    "options": [
      "Instalar más agentes de seguridad en cada servidor para compensar los servicios abiertos.",
      "Eliminar o deshabilitar servicios, puertos y funcionalidades que no se usan.",
      "Ampliar los accesos para que los equipos de soporte resuelvan más rápido.",
      "Mantener todas las tecnologías antiguas compatibles para no romper integraciones."
    ],
    "answer": 1,
    "exp": "Menos superficie expuesta significa menos vectores de ataque posibles, por lo que retirar lo no necesario es la medida más directa. Añadir agentes o ampliar accesos no reduce la exposición."
  },
  {
    "id": "seg-168",
    "module": "seg",
    "topic": "Gestión de vulnerabilidades",
    "q": "Migras una aplicación que usa librerías de terceros. ¿Qué deberías revisar desde el punto de vista de vulnerabilidades?",
    "options": [
      "Únicamente el sistema operativo del servidor, porque las librerías son responsabilidad del lenguaje.",
      "Solo el tamaño de la imagen desplegada, para optimizar el almacenamiento.",
      "Nada, ya que las librerías de código abierto no presentan vulnerabilidades conocidas.",
      "El inventario de componentes y dependencias utilizadas para identificar versiones afectadas y actualizarlas."
    ],
    "answer": 3,
    "exp": "Las dependencias de terceros son una fuente frecuente de vulnerabilidades, por lo que deben inventariarse y mantenerse actualizadas. Ignorarlas deja la aplicación expuesta sin que el escaneo del sistema lo revele."
  },
  {
    "id": "seg-169",
    "module": "seg",
    "topic": "Gestión de vulnerabilidades",
    "q": "¿Por qué es fundamental inventariar los activos antes de planificar el escaneo de vulnerabilidades?",
    "options": [
      "Sin un inventario completo no puedes saber qué debe escanearse, y los activos no catalogados quedarían fuera de la cobertura.",
      "Porque el inventario permite desactivar el escaneo automático.",
      "Porque el escaneo solo funciona contra equipos con etiquetas físicas.",
      "Porque el inventario sustituye a la gestión de parches."
    ],
    "answer": 0,
    "exp": "No se puede proteger lo que no se conoce: sin inventario, los activos no catalogados escapan a la cobertura del escaneo. El inventario no sustituye ni desactiva el resto de controles."
  },
  {
    "id": "seg-170",
    "module": "seg",
    "topic": "Gestión de vulnerabilidades",
    "q": "Una vulnerabilidad crítica afecta a un sistema crítico y todavía no hay parche disponible. ¿Qué opción es la más razonable?",
    "options": [
      "Ignorarla hasta que el proveedor lance el parche, sin medidas adicionales.",
      "Apagar el sistema indefinidamente y esperar una versión nueva del proveedor.",
      "Aplicar mitigaciones compensatorias (restringir accesos, aislar el sistema y reforzar la monitorización) hasta disponer de la corrección.",
      "Eliminar el registro de la vulnerabilidad para que no aparezca en los informes."
    ],
    "answer": 2,
    "exp": "Las mitigaciones compensatorias reducen el riesgo mientras no existe el parche, manteniendo el servicio con protección reforzada. Ignorarla, apagarla o ocultarla no gestiona el riesgo."
  },
  {
    "id": "seg-171",
    "module": "seg",
    "topic": "Respaldo y continuidad",
    "q": "¿Qué describe la regla 3-2-1 en copias de seguridad?",
    "options": [
      "Tres aplicaciones de respaldo, dos usuarios de administración y un informe mensual.",
      "Tres copias de los datos, en dos tipos de medios distintos, con una copia fuera de las instalaciones.",
      "Tres administradores responsables, dos ventanas de respaldo y una verificación mensual.",
      "Tres días de retención, dos verificaciones al año y una restauración anual."
    ],
    "answer": 1,
    "exp": "La regla 3-2-1 exige tres copias, en dos medios distintos y una fuera de las instalaciones, diversificando el riesgo de pérdida. Las demás combinaciones no describen ese principio."
  },
  {
    "id": "seg-172",
    "module": "seg",
    "topic": "Respaldo y continuidad",
    "q": "¿Por qué es esencial probar periódicamente la restauración de los respaldos?",
    "options": [
      "Para ocupar el almacenamiento de respaldo y validar su capacidad real.",
      "Porque probar la restauración reduce el tamaño de los respaldos.",
      "No es esencial si el trabajo de respaldo termina correctamente cada día.",
      "Porque un respaldo que no se puede restaurar no protege nada: solo la prueba real demuestra que los datos son recuperables."
    ],
    "answer": 3,
    "exp": "Que un respaldo termine sin errores no garantiza que sea restaurable; solo una prueba lo demuestra. Las demás opciones no justifican la verificación."
  },
  {
    "id": "seg-173",
    "module": "seg",
    "topic": "Respaldo y continuidad",
    "q": "Ante el riesgo de ransomware, ¿qué característica en los respaldos aporta mayor resiliencia?",
    "options": [
      "Copias inmutables o aisladas, que el atacante no pueda modificar ni eliminar desde el entorno comprometido.",
      "Respaldos cifrados con la misma clave guardada en el servidor de producción.",
      "Un único respaldo diario en el mismo dominio de red que los sistemas productivos.",
      "Respaldos ejecutados por una cuenta de administrador compartida por todo el equipo."
    ],
    "answer": 0,
    "exp": "Las copias inmutables o aisladas impiden que un atacante las cifre o borre junto con los sistemas originales. Guardar la clave junto al origen o respaldar en el mismo dominio deja las copias al alcance del atacante."
  },
  {
    "id": "seg-174",
    "module": "seg",
    "topic": "Respaldo y continuidad",
    "q": "¿Qué aporta cifrar las copias de seguridad?",
    "options": [
      "Acelerar la restauración porque los datos están comprimidos.",
      "Evitar que los datos se pierdan si falla el medio de almacenamiento.",
      "Proteger la confidencialidad de los datos si la copia es extraída o accesada fuera de los controles habituales.",
      "Sustituir la necesidad de controlar quién puede lanzar los respaldos."
    ],
    "answer": 2,
    "exp": "El cifrado protege la confidencialidad de la copia si el medio sale de los controles normales, pero no evita pérdidas ni sustituye el control de acceso a los respaldos."
  },
  {
    "id": "seg-175",
    "module": "seg",
    "topic": "Respaldo y continuidad",
    "q": "¿Por qué las credenciales utilizadas para ejecutar respaldos deben gestionarse de forma especial?",
    "options": [
      "Porque los respaldos no necesitan autenticación, basta con la red.",
      "Porque son credenciales de gran alcance: si se comprometen permiten acceder o manipular muchas copias, así que deben ser propias, mínimas y rotadas.",
      "Para que todos los equipos de TI puedan usarlas indistintamente en sus tareas diarias.",
      "Porque los respaldos usan siempre la misma contraseña para simplificar la restauración de urgencia."
    ],
    "answer": 1,
    "exp": "Una credencial de respaldo comprometida da acceso a copias de datos de toda la organización, por lo que debe ser propia, mínima y rotada. Compartirla o no controlarla amplía el impacto de una fuga."
  },
  {
    "id": "seg-176",
    "module": "seg",
    "topic": "Respaldo y continuidad",
    "q": "El negocio define que el sistema debe volver a estar disponible en unas horas tras un desastre y que solo se tolera perder como máximo la actividad de los últimos minutos. ¿Qué conceptos expresan esos dos requisitos?",
    "options": [
      "RTO define el tiempo máximo de indisponibilidad y RPO la pérdida máxima de datos aceptable.",
      "RPO define el tiempo de indisponibilidad y RTO la pérdida de datos.",
      "Ambos definen únicamente el coste del plan de recuperación.",
      "RTO y RPO miden el rendimiento normal del servicio en producción."
    ],
    "answer": 0,
    "exp": "El RTO fija cuánto tiempo puede estar caído el servicio y el RPO cuánta pérdida de datos se tolera; son requisitos distintos. Las demás opciones confunden ambos conceptos."
  },
  {
    "id": "seg-177",
    "module": "seg",
    "topic": "Respaldo y continuidad",
    "q": "En la restauración tras un desastre, ¿qué criterio debería guiar el orden?",
    "options": [
      "El orden alfabético de los nombres de los sistemas.",
      "El tamaño del respaldo, restaurando primero los archivos más grandes.",
      "La antigüedad de los sistemas, empezando por los más antiguos.",
      "La criticidad del negocio: primero los sistemas críticos y sus dependencias."
    ],
    "answer": 3,
    "exp": "Restaurar por criticidad devuelve al negocio antes sus capacidades esenciales y respeta las dependencias entre sistemas. Los demás criterios ignoran el impacto real de la indisponibilidad."
  },
  {
    "id": "seg-178",
    "module": "seg",
    "topic": "Respaldo y continuidad",
    "q": "¿Qué diferencia importante hay entre respaldo y replicación?",
    "options": [
      "La replicación es gratuita y el respaldo siempre tiene coste de licencia.",
      "La replicación suele mantener copias en tiempo real que pueden heredar la corrupción o el cifrado del origen, mientras que el respaldo versionado permite volver a un estado previo.",
      "El respaldo no permite recuperar datos perdidos.",
      "No hay diferencias relevantes; son términos intercambiables."
    ],
    "answer": 1,
    "exp": "La replicación refleja los cambios al momento, incluidos los destructivos, mientras que el respaldo versionado conserva estados anteriores recuperables. Por eso son complementarias, no sinónimas."
  },
  {
    "id": "seg-179",
    "module": "seg",
    "topic": "Respaldo y continuidad",
    "q": "¿Por qué mantener una copia de los respaldos fuera de las instalaciones principales?",
    "options": [
      "Para que el equipo de soporte tenga acceso más rápido en horario nocturno.",
      "Para reducir el uso del disco local de los servidores productivos.",
      "Para que un incidente físico o local (fuego, robo, cifrado masivo) no destruya simultáneamente los datos y sus copias.",
      "Porque la normativa prohíbe guardar copias en el mismo centro de datos."
    ],
    "answer": 2,
    "exp": "Mantener una copia fuera de las instalaciones evita que un único evento local destruya a la vez el origen y las copias. Las demás justificaciones no son razones de continuidad reales."
  },
  {
    "id": "seg-180",
    "module": "seg",
    "topic": "Respaldo y continuidad",
    "q": "¿Qué criterio deberías aplicar para definir la retención de los respaldos?",
    "options": [
      "Los requisitos de negocio y cumplimiento, manteniendo versiones que permitan volver al estado necesario según lo que se deba conservar.",
      "Retener siempre el máximo posible para tener todas las opciones disponibles.",
      "Retener solo la última copia para simplificar la gestión del almacén.",
      "Fijar la retención a un valor arbitrario y no revisarla nunca."
    ],
    "answer": 0,
    "exp": "La retención debe responder a lo que el negocio y las obligaciones exigen conservar, equilibrando recuperación y coste. Retenerlo todo o solo lo último sin criterio deja huecos de recuperación o gasto inútil."
  },
  {
    "id": "seg-181",
    "module": "seg",
    "topic": "Protección de datos",
    "q": "Antes de aplicar controles de protección, ¿qué paso es imprescindible?",
    "options": [
      "Cifrar todos los datos de la organización por igual, independientemente de su naturaleza.",
      "Clasificar los datos según su sensibilidad e impacto, para aplicar controles proporcionales a cada categoría.",
      "Eliminar todos los datos que no estén cifrados.",
      "Tratar todos los datos como si fueran públicos para simplificar los procesos."
    ],
    "answer": 1,
    "exp": "Sin clasificación no se puede graduar el esfuerzo de protección y los controles no se aplican de forma proporcional. Proteger todo por igual o tratarlo como público ignora la sensibilidad real."
  },
  {
    "id": "seg-182",
    "module": "seg",
    "topic": "Protección de datos",
    "q": "¿Qué protege el cifrado en reposo y qué no?",
    "options": [
      "Protege los datos mientras viajan por la red entre sistemas.",
      "Protege contra la mala intención de los propios usuarios legítimos una vez autenticados.",
      "Impide por completo el acceso de los administradores a los datos cifrados.",
      "Protege los datos almacenados si el soporte es comprometido, pero no sustituye los controles de acceso para los usuarios ya autenticados."
    ],
    "answer": 3,
    "exp": "El cifrado en reposo protege frente a la extracción del medio, no frente a quien ya está autenticado dentro de la aplicación. Las demás opciones describen protecciones que no aporta."
  },
  {
    "id": "seg-183",
    "module": "seg",
    "topic": "Protección de datos",
    "q": "¿Cómo podrías usar datos de producción en un entorno de desarrollo sin exponer información sensible?",
    "options": [
      "Aplicar enmascaramiento o tokenización para que los valores reales no aparezcan en desarrollo.",
      "Copiar los datos completos y confiar en que nadie los utilizará fuera de contexto.",
      "Permitir acceso directo a la base de producción desde el entorno de desarrollo.",
      "Sustituir todos los datos por valores vacíos, lo que impide probar la aplicación."
    ],
    "answer": 0,
    "exp": "El enmascaramiento o la tokenización conservan la forma de los datos para probar sin exponer valores reales. Copiar todo o acceder a producción elimina el aislamiento de los entornos."
  },
  {
    "id": "seg-184",
    "module": "seg",
    "topic": "Protección de datos",
    "q": "¿Cuál es el propósito de una solución de prevención de pérdida de datos (DLP)?",
    "options": [
      "Comprimir los archivos para reducir el volumen almacenado.",
      "Acelerar la transferencia de archivos grandes entre oficinas.",
      "Detectar y bloquear la salida no autorizada de información sensible por canales como correo, web o dispositivos.",
      "Cifrar automáticamente todos los discos de los puestos de usuario."
    ],
    "answer": 2,
    "exp": "El DLP vigila y frena la exfiltración de información sensible por sus canales de salida. Comprimir o acelerar transferencias no son funciones de prevención de pérdida de datos."
  },
  {
    "id": "seg-185",
    "module": "seg",
    "topic": "Protección de datos",
    "q": "Al dar de baja un disco que contenía información confidencial, ¿qué deberías garantizar?",
    "options": [
      "Que el disco se entregue al usuario final para que lo reutilice como respaldo.",
      "Que se aplique un borrado o sanitización adecuado (y se documente) para que los datos no sean recuperables.",
      "Que el disco se formatee una sola vez con el sistema de archivos por defecto.",
      "Que el disco quede encendido y conectado para poder auditarlo después."
    ],
    "answer": 1,
    "exp": "La sanitización verificable asegura que los datos confidenciales no sean recuperables del medio dado de baja. Un simple formato o entrega del disco deja los datos expuestos."
  },
  {
    "id": "seg-186",
    "module": "seg",
    "topic": "Protección de datos",
    "q": "¿Qué significa la minimización de datos en arquitectura?",
    "options": [
      "Reducir el número de administradores con acceso a los datos.",
      "Comprimir los datos para que ocupen menos espacio.",
      "Conservar los datos indefinidamente por si se necesitan en el futuro.",
      "Recopilar y conservar solo los datos necesarios para la finalidad concreta, limitando el impacto de una posible fuga."
    ],
    "answer": 3,
    "exp": "Minimizar implica recolectar y retener solo lo necesario, de modo que una fuga afecte a menos información. Comprimir o conservarlo todo no reduce el riesgo."
  },
  {
    "id": "seg-187",
    "module": "seg",
    "topic": "Protección de datos",
    "q": "Necesitas saber qué usuarios han accedido a la información confidencial de una base de datos. ¿Qué control te lo proporciona?",
    "options": [
      "La auditoría de acceso a la base de datos, que registra quién consultó qué y cuándo.",
      "El cifrado de la base de datos en reposo, que genera un registro automático de accesos.",
      "El balanceador de carga situado delante de la base de datos.",
      "La segmentación de red, que impide el acceso a la base de datos."
    ],
    "answer": 0,
    "exp": "La auditoría de acceso registra las consultas y sus responsables, permitiendo reconstruir quién accedió a qué. Cifrado, balanceo o segmentación no producen ese registro de actividad."
  },
  {
    "id": "seg-188",
    "module": "seg",
    "topic": "Protección de datos",
    "q": "¿Cuál es una limitación importante del cifrado a nivel de disco?",
    "options": [
      "No puede utilizarse en sistemas en producción.",
      "No permite descifrar los datos cuando el sistema está encendido.",
      "Una vez el volumen está montado y autenticado, la aplicación y los procesos con privilegios acceden a los datos en claro.",
      "Ocupa demasiado espacio en disco para ser práctico."
    ],
    "answer": 2,
    "exp": "El cifrado de disco protege el medio, pero no la información en uso dentro del sistema ya iniciado; por eso se complementa con cifrado de datos y controles de acceso. Las demás opciones son falsas."
  },
  {
    "id": "seg-189",
    "module": "seg",
    "topic": "Protección de datos",
    "q": "¿Por qué la ofuscación no debe considerarse una forma de protección de datos equivalente al cifrado?",
    "options": [
      "Porque la ofuscación es más rápida de ejecutar que el cifrado.",
      "Porque busca dificultar la lectura o comprensión directa, pero está diseñada para ocultar el funcionamiento, no para resistir a un atacante con tiempo y motivación.",
      "Porque la ofuscación solo sirve para código, nunca para datos.",
      "Porque la ofuscación no puede aplicarse a datos almacenados."
    ],
    "answer": 1,
    "exp": "La ofuscación disuade la lectura casual, pero no garantiza la confidencialidad frente a un atacante dedicado; solo el cifrado con claves bien gestionadas lo hace. Las demás afirmaciones son incorrectas."
  },
  {
    "id": "seg-190",
    "module": "seg",
    "topic": "Protección de datos",
    "q": "¿Cómo deberías compartir un documento confidencial con un socio externo?",
    "options": [
      "Adjuntarlo en un correo sin protección para agilizar el intercambio.",
      "Subirlo a un enlace público sin caducidad ni control de accesos.",
      "Pegar el contenido en un chat interno y pedir que lo reenvíen al contacto.",
      "Usar un canal controlado con autenticación, permisos mínimos para el destinatario y expiración del acceso."
    ],
    "answer": 3,
    "exp": "Un canal controlado con autenticación, permisos mínimos y caducidad mantiene el documento accesible solo para quien corresponde y solo mientras sea necesario. Los demás métodos dejan el contenido sin control."
  },
  {
    "id": "seg-191",
    "module": "seg",
    "topic": "Nube",
    "q": "En el modelo de responsabilidad compartida de la nube, ¿qué corresponde normalmente al cliente?",
    "options": [
      "Sus datos, su configuración, la gestión de accesos y la seguridad de lo que despliega en la plataforma.",
      "El hardware físico de los centros de datos y la seguridad perimetral del proveedor.",
      "La red del proveedor y la disponibilidad de la infraestructura física.",
      "Los parches del hipervisor y la seguridad física de las salas de servidores."
    ],
    "answer": 0,
    "exp": "El cliente es responsable de sus datos, su configuración y sus accesos dentro de la plataforma; el proveedor cubre la infraestructura subyacente. Las demás opciones corresponden al proveedor."
  },
  {
    "id": "seg-192",
    "module": "seg",
    "topic": "Nube",
    "q": "¿Qué componente controla normalmente el tráfico permitido a las instancias dentro de una red privada en la nube?",
    "options": [
      "El balanceador de carga, que solo distribuye peticiones entrantes.",
      "El sistema de archivos compartido de la cuenta.",
      "Grupos de seguridad o listas de control de acceso de red con reglas de tráfico entrante y saliente.",
      "El plan de facturación, que habilita o deshabilita puertos según el consumo."
    ],
    "answer": 2,
    "exp": "Los grupos de seguridad y las ACL de red aplican reglas explícitas de entrada y salida sobre las instancias. El balanceador distribuye tráfico, pero no es el control de filtrado principal."
  },
  {
    "id": "seg-193",
    "module": "seg",
    "topic": "Nube",
    "q": "¿Cuál es la buena práctica al trabajar con la cuenta principal de un proveedor de nube?",
    "options": [
      "Usarla a diario para todas las tareas, ya que es la más completa.",
      "Evitar su uso operativo, creando cuentas o roles con privilegios mínimos para las tareas concretas y protegiéndola con MFA.",
      "Compartirla con el equipo para agilizar los despliegues.",
      "Desactivar la MFA en ella para que los despliegues automatizados no fallen."
    ],
    "answer": 1,
    "exp": "La cuenta principal tiene alcance total, por lo que se reserva para tareas excepcionales y se usan roles mínimos con MFA para el día a día. Usarla o compartirla expone el máximo privilegio."
  },
  {
    "id": "seg-194",
    "module": "seg",
    "topic": "Nube",
    "q": "¿Por qué activar el registro (logging) de la plataforma de nube?",
    "options": [
      "Porque consume el presupuesto disponible y evita usos indebidos de recursos.",
      "Para poder desactivar los firewalls de la cuenta sin registros.",
      "Porque el registro sustituye a las copias de seguridad en la nube.",
      "Para registrar las llamadas a la API y los cambios realizados, permitiendo auditar quién hizo qué y detectar actividad no autorizada."
    ],
    "answer": 3,
    "exp": "El registro de la plataforma deja constancia de quién ejecutó cada llamada o cambio, base de la auditoría y la detección. No consume presupuesto como función de control ni sustituye los respaldos."
  },
  {
    "id": "seg-195",
    "module": "seg",
    "topic": "Nube",
    "q": "¿Qué riesgo principal presenta un depósito de objetos configurado como público?",
    "options": [
      "Cualquier persona de Internet puede listar o descargar su contenido, exponiendo datos.",
      "El depósito deja de aceptar escrituras del propietario.",
      "La cuenta de nube se bloquea automáticamente por incumplimiento de la política.",
      "Los objetos se cifran de forma obligatoria y dejan de ser legibles."
    ],
    "answer": 0,
    "exp": "Un depósito público permite el acceso anónimo al contenido, lo que expone datos si contiene información sensible. Las demás opciones no son consecuencias reales de esa configuración."
  },
  {
    "id": "seg-196",
    "module": "seg",
    "topic": "Nube",
    "q": "¿Qué deberías hacer con las imágenes de contenedor usadas en producción?",
    "options": [
      "Usar siempre la etiqueta más reciente sin registrar versiones, para tener siempre lo último.",
      "Publicarlas en repositorios públicos para agilizar su distribución.",
      "Construirlas desde bases mínimas y necesarias, escanearlas por vulnerabilidades y controlar de dónde proceden.",
      "Incluir en ellas todas las herramientas y utilidades que puedan ser útiles en un incidente."
    ],
    "answer": 2,
    "exp": "Imágenes mínimas, escaneadas y de origen controlado reducen superficie de ataque y permiten trazabilidad. Etiquetas sin control o imágenes públicas y sobrecargadas aumentan el riesgo."
  },
  {
    "id": "seg-197",
    "module": "seg",
    "topic": "Nube",
    "q": "En un clúster de orquestación de contenedores, ¿qué principio debe gobernar los permisos de acceso?",
    "options": [
      "Asignar privilegios elevados a todos los pods para evitar errores por falta de permisos.",
      "Aplicar control de acceso basado en roles (RBAC) con permisos mínimos por usuario y servicio.",
      "Permitir que cualquier pod se comunique con el plano de control sin restricciones.",
      "Usar una única cuenta administradora compartida por todos los operadores."
    ],
    "answer": 1,
    "exp": "El RBAC con permisos mínimos limita cada identidad a lo que necesita, reduciendo el impacto de una compromisión. Privilegios globales o cuentas compartidas eliminan esa separación."
  },
  {
    "id": "seg-198",
    "module": "seg",
    "topic": "Nube",
    "q": "¿Cuál es el problema de desplegar contenedores usando siempre la etiqueta latest del repositorio?",
    "options": [
      "Las imágenes con esa etiqueta no pueden utilizarse en entornos de producción por los proveedores.",
      "Las imágenes con esa etiqueta no se pueden escanear por vulnerabilidades.",
      "La etiqueta latest cifra automáticamente los datos dentro del contenedor.",
      "No hay trazabilidad de qué versión exacta se está ejecutando, lo que dificulta la reproducción, la auditoría y la respuesta a incidentes."
    ],
    "answer": 3,
    "exp": "latest cambia con el tiempo, así que no permite saber qué construcción se ejecuta ni volver a una versión concreta. Las demás opciones describen restricciones inexistentes."
  },
  {
    "id": "seg-199",
    "module": "seg",
    "topic": "Nube",
    "q": "¿Qué implica el aislamiento entre clientes en un servicio de nube pública?",
    "options": [
      "Que cada cliente administra el hipervisor y la red física del proveedor.",
      "Que los datos de todos los clientes se almacenan en un mismo archivo compartido sin separación.",
      "Que las cargas de cada cliente deben estar separadas lógicamente para que un fallo o compromiso de uno no afecte a los demás.",
      "Que el proveedor nunca puede aplicar parches de seguridad a su infraestructura."
    ],
    "answer": 2,
    "exp": "El aislamiento lógico entre clientes evita que un incidente en una carga se propague a las demás dentro de la plataforma. El cliente no gestiona la infraestructura física del proveedor."
  },
  {
    "id": "seg-200",
    "module": "seg",
    "topic": "Nube",
    "q": "Antes de migrar datos sensibles a la nube, ¿qué debes evaluar principalmente?",
    "options": [
      "Dónde se alojan los datos, qué controles aplica el proveedor y qué responsabilidades asumes tú en la configuración y el acceso.",
      "El número de regiones disponibles en el plan contratado.",
      "El número máximo de usuarios simultáneos que permite el plan.",
      "La popularidad del proveedor en las redes sociales."
    ],
    "answer": 0,
    "exp": "La evaluación debe cubrir ubicación de los datos, controles del proveedor y las responsabilidades que recaen en el cliente según el modelo compartido. Las demás opciones no son criterios de seguridad."
  },
  {
    "id": "uc-101",
    "module": "uc",
    "topic": "SIP",
    "q": "Un teléfono IP se conecta a la red y necesita empezar a recibir llamadas. ¿Qué mensaje SIP envía al servidor y con qué objetivo?",
    "options": [
      "INVITE para anunciar que está disponible para llamadas",
      "SUBSCRIBE para suscribirse al buzón de voz",
      "REGISTER para asociar su URI de usuario con su dirección IP y puerto actuales",
      "OPTIONS para reservar ancho de banda en la red"
    ],
    "answer": 2,
    "exp": "El REGISTER informa al servidor de la ubicación actual del usuario; se actualiza la asociación entre su URI y su IP:puerto para poder enrutarle las llamadas."
  },
  {
    "id": "uc-102",
    "module": "uc",
    "topic": "SIP",
    "q": "Tras enviar un REGISTER, el teléfono recibe un 401 Unauthorized. ¿Qué significa este código y qué debe hacer el equipo?",
    "options": [
      "Que el servidor exige autenticación: el terminal debe reenviar el REGISTER con sus credenciales",
      "Que el número solicitado no existe en el dominio",
      "Que la sesión de voz ya está establecida",
      "Que la red está congestionada y debe esperar 30 segundos antes de reintentar"
    ],
    "answer": 0,
    "exp": "El 401 es un desafío de autenticación: el cliente reintenta el mismo REGISTER incluyendo la cabecera Authorization con el nonce y sus credenciales."
  },
  {
    "id": "uc-103",
    "module": "uc",
    "topic": "SIP",
    "q": "Durante el establecimiento de una llamada, el servidor devuelve 486 Busy Here. ¿Qué representa este código?",
    "options": [
      "Que el destino no tiene cobertura temporal",
      "Que el servidor SIP no está disponible para enrutar",
      "Que la llamada fue desviada automáticamente al buzón de voz",
      "Que el usuario llamado está ocupado en este momento"
    ],
    "answer": 3,
    "exp": "486 indica ocupación del usuario destino; el originador puede optar por dejar un mensaje, reintentar más tarde o consultar el estado de presencia."
  },
  {
    "id": "uc-104",
    "module": "uc",
    "topic": "SIP",
    "q": "El terminal destino responde 180 Ringing durante la señalización. ¿Qué información aporta este código al originador?",
    "options": [
      "Que la llamada ya fue contestada y está facturada",
      "Que el destino está sonando, aunque aún no se haya contestado",
      "Que hubo un error de autenticación en el destino",
      "Que el destino rechazó la llamada definitivamente"
    ],
    "answer": 1,
    "exp": "180 es una respuesta provisional que permite al originador generar tonos de espera localmente mientras el usuario final decide contestar."
  },
  {
    "id": "uc-105",
    "module": "uc",
    "topic": "SIP",
    "q": "El usuario origina una llamada y nadie contesta todavía; decide abortar el proceso antes de que se establezca el diálogo. ¿Qué método SIP debe enviar?",
    "options": [
      "BYE, porque es el método normal para colgar",
      "CANCEL, porque aún no hay diálogo establecido",
      "NOTIFY, para informar al destino del abandono",
      "UPDATE, para modificar la sesión en curso"
    ],
    "answer": 1,
    "exp": "CANCEL elimina la transacción de INVITE todavía en curso; BYE solo es válido una vez que la llamada ya está establecida."
  },
  {
    "id": "uc-106",
    "module": "uc",
    "topic": "SIP",
    "q": "En el flujo básico de una llamada SIP con INVITE, ¿en qué momento se envía el mensaje ACK?",
    "options": [
      "Antes de enviar el INVITE, como saludo al servidor",
      "Después de colgar, junto con el BYE",
      "En paralelo con el REGISTER periódico del terminal",
      "Tras recibir la respuesta final (por ejemplo, 200 OK) al INVITE, completando el intercambio de tres vías"
    ],
    "answer": 3,
    "exp": "El ACK confirma la recepción de la respuesta final al INVITE; con INVITE, 200 OK y ACK el handshake de establecimiento queda completado."
  },
  {
    "id": "uc-107",
    "module": "uc",
    "topic": "SIP",
    "q": "Un administrador quiere comprobar si un servidor SIP responde y qué métodos soporta, sin iniciar ninguna llamada. ¿Qué mensaje utiliza?",
    "options": [
      "OPTIONS, que actúa como sondeo de capacidad y disponibilidad",
      "REFER, porque sondea la transferencia de llamadas",
      "PUBLISH, para consultar el buzón de voz",
      "INFO, que consulta el estado de la sesión de medios"
    ],
    "answer": 0,
    "exp": "OPTIONS se emplea para descubrir capacidades (métodos, códecs soportados) y para sondear la disponibilidad del servidor sin establecer diálogo."
  },
  {
    "id": "uc-108",
    "module": "uc",
    "topic": "SIP",
    "q": "Un usuario se va de la oficina y apaga su teléfono IP. ¿Qué debe hacer el equipo para que el servidor deje de intentar enrutarle llamadas a esa ubicación?",
    "options": [
      "Enviar un BYE a todos los contactos activos",
      "Emitir un NOTIFY de presencia hacia todos los grupos",
      "Enviarse un registro con expiración cero (unregister)",
      "Renovar el registro con un intervalo más largo"
    ],
    "answer": 2,
    "exp": "El desregistro se realiza con un REGISTER cuyo Expires es 0; así el servidor elimina la asociación usuario–dirección y no envía más llamadas al endpoint apagado."
  },
  {
    "id": "uc-109",
    "module": "uc",
    "topic": "SIP",
    "q": "Un teléfono detrás de un NAT deja de recibir mensajes del servidor SIP después de unos minutos de inactividad. ¿Cuál es la causa más probable?",
    "options": [
      "El códec G.711 está deshabilitado en el teléfono",
      "La cámara IP de la misma VLAN consumió todo el presupuesto PoE",
      "La grabadora de video está en modo degradado por RAID",
      "El mapeo del NAT expiró por falta de tráfico: faltan keepalives o re-registros periódicos"
    ],
    "answer": 3,
    "exp": "Los mapeos NAT tienen un tiempo de vida: sin keepalives (re-REGISTER periódicos o keepalive UDP/SIP) el puerto deja de estar mapeado y los mensajes entrantes no llegan."
  },
  {
    "id": "uc-110",
    "module": "uc",
    "topic": "SIP",
    "q": "En una transferencia de llamada, ¿qué método SIP utiliza el agente para pedir al endpoint receptor que establezca una nueva sesión con un tercero?",
    "options": [
      "SUBSCRIBE, que solicita el estado de disponibilidad del tercero",
      "MESSAGE, que envía el número por mensajería instantánea",
      "REFER, que indica al destino que coloque una nueva petición INVITE al tercero",
      "REGISTER, que da de alta al tercero en el servidor"
    ],
    "answer": 2,
    "exp": "En la transferencia ciega se envía un REFER con la URI del tercero; el endpoint receptor inicia el INVITE hacia ese destino."
  },
  {
    "id": "uc-111",
    "module": "uc",
    "topic": "SIP",
    "q": "El servidor SIP responde 404 Not Found al intentar llamar a un usuario. ¿Qué indica esta respuesta?",
    "options": [
      "Que el usuario destino está ocupado",
      "Que la dirección solicitada no existe o no es conocida en el sistema",
      "Que el servidor no tiene capacidad y conviene reintentar más tarde",
      "Que la red de acceso está caída"
    ],
    "answer": 1,
    "exp": "404 significa que la URI solicitada no corresponde a ningún usuario registrado o conocido; a diferencia del 486, no hay ocupación sino inexistencia del destino."
  },
  {
    "id": "uc-112",
    "module": "uc",
    "topic": "Medios RTP",
    "q": "En una llamada VoIP, ¿qué protocolo transporta los paquetes de audio en tiempo real entre ambos extremos?",
    "options": [
      "RTP, que transporta los paquetes de medios sobre UDP",
      "SIP, que transporta directamente el audio codificado",
      "DNS, que resuelve la dirección del remitente",
      "TLS, que transporta el audio en lugar de RTP"
    ],
    "answer": 0,
    "exp": "RTP (sobre UDP) transporta los medios; SIP solo se ocupa de la señalización para establecer la sesión."
  },
  {
    "id": "uc-113",
    "module": "uc",
    "topic": "Medios RTP",
    "q": "¿Cuál es la función principal de RTCP en una sesión de audio en tiempo real?",
    "options": [
      "Informar sobre la calidad del canal (jitter, pérdidas, retardo) y sincronizar los flujos",
      "Comprimir el audio antes de enviarlo",
      "Asignar direcciones IP a los terminales",
      "Establecer la llamada en lugar de SIP"
    ],
    "answer": 0,
    "exp": "RTCP no transporta medios: envía informes periódicos con métricas que permiten monitorizar la calidad y ajustar parámetros de la sesión."
  },
  {
    "id": "uc-114",
    "module": "uc",
    "topic": "Medios RTP",
    "q": "¿Qué hace el jitter buffer en un teléfono IP?",
    "options": [
      "Marca los paquetes con prioridad DSCP",
      "Comprime la voz para reducir el bitrate",
      "Descubre la clase de potencia del switch PoE",
      "Absorbe la variación en la llegada de los paquetes y los reproduce con cadencia uniforme"
    ],
    "answer": 3,
    "exp": "El jitter buffer retiene brevemente los paquetes para compensar su variación de retardo; un tamaño adecuado reduce los cortes de audio sin añadir latencia excesiva."
  },
  {
    "id": "uc-115",
    "module": "uc",
    "topic": "Medios RTP",
    "q": "Si el jitter buffer de un teléfono está configurado demasiado pequeño, ¿qué efecto se observa en la conversación?",
    "options": [
      "Aumenta notablemente la latencia total de la llamada",
      "Se incrementa el ancho de banda consumido por la llamada",
      "Los paquetes que llegan tarde no entran a tiempo y aparecen cortes o saltos en el audio",
      "El servidor SIP deja de responder al REGISTER"
    ],
    "answer": 2,
    "exp": "Un buffer pequeño no cubre la variación del retardo: los paquetes tardíos se descartan o llegan fuera de secuencia y el oyente percibe recortes."
  },
  {
    "id": "uc-116",
    "module": "uc",
    "topic": "Medios RTP",
    "q": "En una implementación típica, ¿cuál es la relación entre los puertos RTP y RTCP de un flujo de medios?",
    "options": [
      "RTCP usa siempre el puerto fijo 5060",
      "RTCP usa el número de puerto siguiente al de RTP (par impar si RTP es par)",
      "Ambos protocolos comparten exactamente el mismo puerto",
      "RTCP utiliza un puerto TCP registrado distinto de RTP"
    ],
    "answer": 1,
    "exp": "RTP se asigna normalmente en un puerto par y RTCP en el siguiente impar, de modo que ambos se gestionan como un flujo coordinado."
  },
  {
    "id": "uc-117",
    "module": "uc",
    "topic": "Medios RTP",
    "q": "Durante una llamada, el audio se escucha entrecortado con huecos. La latencia medida es aceptable. ¿Qué métrica se correlaciona más directamente con este síntoma?",
    "options": [
      "El número de VLANs configuradas en el switch",
      "La resolución de las cámaras de videovigilancia",
      "La pérdida de paquetes (packet loss) en el trayecto",
      "El tipo de fibra usado en el backbone"
    ],
    "answer": 2,
    "exp": "Los paquetes perdidos dejan huecos en la secuencia de voz: el receptor puede ocultarlos parcialmente o se percibe audio roto; debe buscarse la causa de la pérdida (congestión, errores, colas)."
  },
  {
    "id": "uc-118",
    "module": "uc",
    "topic": "Medios RTP",
    "q": "RTP no garantiza entrega ni orden de los paquetes. ¿Qué se hace habitualmente con un paquete de voz que llega demasiado tarde para ser reproducido?",
    "options": [
      "Se solicita su reenvío al servidor SIP hasta que llegue completo",
      "Se descarta, porque reproducirlo tarde desincronizaría el audio sin aportar calidad",
      "Se reordena indefinidamente y se reproduce al final de la conversación",
      "Se comprime de nuevo para reducir su tamaño"
    ],
    "answer": 1,
    "exp": "En tiempo real no hay retransmisiones útiles: el jitter buffer define una ventana de reproducción y lo que llega fuera de ella se descarta, priorizando la continuidad."
  },
  {
    "id": "uc-119",
    "module": "uc",
    "topic": "Codecs de voz",
    "q": "¿Cuál de estos códecs de voz utiliza muestreo PCM sin compresión con pérdida, lo que le otorga alta interoperabilidad a costa de mayor capacidad por flujo?",
    "options": [
      "G.729",
      "G.722",
      "H.264",
      "G.711"
    ],
    "answer": 3,
    "exp": "G.711 codifica PCM sin compresión con pérdida: es el códec base de interoperabilidad telefónica, con buena calidad y mayor consumo de capacidad por flujo."
  },
  {
    "id": "uc-120",
    "module": "uc",
    "topic": "Codecs de voz",
    "q": "En un enlace de capacidad limitada, el equipo de diseño prefiere G.729 frente a G.711. ¿Cuál es la razón técnica?",
    "options": [
      "G.729 comprime la voz con pérdida y ocupa mucho menos por flujo, adaptándose mejor a la capacidad disponible",
      "G.729 no necesita UDP ni señalización SIP",
      "G.729 cifra la llamada y evita aplicar QoS",
      "G.729 es un códec de vídeo compatible con las cámaras"
    ],
    "answer": 0,
    "exp": "G.729 usa compresión con pérdida para reducir drásticamente la tasa por flujo, adecuándose a enlaces estrechos; el trade-off es una fidelidad menor que la de G.711."
  },
  {
    "id": "uc-121",
    "module": "uc",
    "topic": "Codecs de voz",
    "q": "En una llamada VoIP con códec de baja tasa, los dígitos marcados se distorsionan y el IVR no los interpreta. ¿Cuál es la solución habitual?",
    "options": [
      "Subir el volumen del micrófono para que los tonos se escuchen con más fuerza",
      "Enviar los dígitos como eventos DTMF fuera de banda (relé de tonos telefónicos) en paralelo al audio",
      "Cambiar toda la llamada a H.264 para conservar los tonos",
      "Deshabilitar la VLAN de voz para que los tonos viajen sin compresión"
    ],
    "answer": 1,
    "exp": "Los códecs de baja tasa destruyen los tonos DTMF; por eso se transportan out-of-band como eventos telefónicos, que el IVR o el gateway reconstruye sin depender del audio codificado."
  },
  {
    "id": "uc-122",
    "module": "uc",
    "topic": "Codecs de voz",
    "q": "Dos extremos de una llamada no coinciden en el códec soportado y un elemento intermedio debe decodificar y volver a codificar el audio. ¿Qué está ocurriendo y qué implica?",
    "options": [
      "Se está realizando transcodificación, que consume CPU y añade retardo en el elemento multimedia",
      "Se está aplicando QoS de prioridad estricta al tráfico de voz",
      "Se está negociando la transferencia de llamada con REFER",
      "Se está renovando el registro SIP del usuario"
    ],
    "answer": 0,
    "exp": "La transcodificación resuelve la incompatibilidad de códecs, pero añade latencia y carga al SBC o media gateway; conviene alinear códecs para evitarla cuando sea posible."
  },
  {
    "id": "uc-123",
    "module": "uc",
    "topic": "Codecs de voz",
    "q": "¿Dónde se acuerda entre los extremos qué códec se usará en una llamada SIP?",
    "options": [
      "En el mensaje RTP de audio, que incluye el códec en cada paquete",
      "En la respuesta al DHCP que recibe el teléfono",
      "En la oferta y respuesta SDP intercambiadas dentro de los mensajes SIP",
      "En las tramas LLDP que intercambian los switches"
    ],
    "answer": 2,
    "exp": "El SDP viaja dentro de SIP (por ejemplo en INVITE y 200 OK) y describe los códecs y parámetros de medios que cada parte está dispuesta a usar."
  },
  {
    "id": "uc-124",
    "module": "uc",
    "topic": "Codecs de voz",
    "q": "¿Qué distingue al códec G.722 respecto a los códecs de voz de banda estrecha como G.711?",
    "options": [
      "Es un protocolo de señalización telefónica, no un códec",
      "Es un códec de vídeo para las cámaras de seguridad",
      "Es obligatorio solo en redes sin PoE",
      "Ofrece banda ancha, con más rango de frecuencias y mejor fidelidad que la voz tradicional"
    ],
    "answer": 3,
    "exp": "G.722 es un códec de voz de banda ancha: captura más rango de frecuencias que G.711 (banda estrecha) y mejora la inteligibilidad sin ser un códec de vídeo."
  },
  {
    "id": "uc-125",
    "module": "uc",
    "topic": "Codecs de voz",
    "q": "En un despliegue con un elemento de señalización (proxy o SBC), los paquetes de voz viajan directamente entre los terminales sin atravesar dicho elemento. ¿Qué ventaja principal aporta esto?",
    "options": [
      "Permite eliminar la VLAN de voz de la red",
      "Aumenta el número de códecs disponibles en la llamada",
      "Reduce la latencia de los medios y la carga del servidor, al evitar el desvío innecesario",
      "Garantiza que no haya ninguna pérdida de paquetes"
    ],
    "answer": 2,
    "exp": "Cuando los medios no se desvían por el servidor (media bypass), el trayecto es más corto: menos retardo y menos consumo de CPU, sin perder el control de señalización."
  },
  {
    "id": "uc-126",
    "module": "uc",
    "topic": "Codecs de voz",
    "q": "Una llamada SIP se establece correctamente (el teléfono suena y se contesta), pero solo se oye audio en un sentido. ¿Cuál es una causa habitual de este síntoma?",
    "options": [
      "El flujo de medios no puede atravesar el firewall o el NAT en una dirección (puertos RTP no permitidos o mapeo ausente)",
      "El servidor DHCP no asignó dirección IP al teléfono",
      "El número de origen no existe en el dominio",
      "El switch no tiene habilitado LLDP en el puerto"
    ],
    "answer": 0,
    "exp": "La señalización puede fluir mientras los puertos de medios quedan bloqueados o mal mapeados: es la clásica causa de audio unidireccional y debe revisarse el path de RTP y el NAT/firewall."
  },
  {
    "id": "uc-127",
    "module": "uc",
    "topic": "Codecs de voz",
    "q": "Durante las pruebas de aceptación se informa que la calidad de voz obtuvo un MOS de 4,2. ¿Qué representa esta métrica?",
    "options": [
      "El porcentaje de paquetes perdidos en la llamada",
      "El número máximo de llamadas simultáneas del servidor",
      "La resolución efectiva del vídeo grabado",
      "Una puntuación de calidad de voz percibida en una escala aproximada de 1 a 5"
    ],
    "answer": 3,
    "exp": "MOS estima la calidad subjetiva del audio: valores cercanos a 5 indican calidad excelente y por debajo de 4 empieza a percibirse degradación."
  },
  {
    "id": "uc-128",
    "module": "uc",
    "topic": "Calidad de voz",
    "q": "¿Qué rango de retardo de ida y vuelta (boca a boca) se considera generalmente aceptable para una conversación telefónica natural?",
    "options": [
      "Cualquier valor inferior a 1 segundo, porque el oído humano no nota nada por debajo de ese umbral",
      "Hasta cerca de 150 ms por trayecto; por encima se percibe entrecortado o con respuestas encimadas",
      "Solo por debajo de 5 ms, ya que por encima la llamada se corta",
      "Más de 500 ms, porque el eco compensa el retardo"
    ],
    "answer": 1,
    "exp": "Referencias ampliamente aceptadas indican que hasta unos 150 ms de retardo total son tolerables; por encima de ese nivel la conversación pierde fluidez."
  },
  {
    "id": "uc-129",
    "module": "uc",
    "topic": "Calidad de voz",
    "q": "En ingeniería de redes, ¿qué se entiende por jitter?",
    "options": [
      "La variación del ancho de banda disponible en un enlace",
      "La variación del retardo de llegada entre paquetes consecutivos",
      "El número de saltos entre routers del trayecto",
      "La pérdida total acumulada de tramas Ethernet"
    ],
    "answer": 1,
    "exp": "Jitter es la fluctuación del retardo entre paquetes: obliga a dimensionar el jitter buffer y es una métrica clave de calidad en voz y vídeo en tiempo real."
  },
  {
    "id": "uc-130",
    "module": "uc",
    "topic": "Calidad de voz",
    "q": "En una red conmutada, ¿cuál es la causa más habitual de que aparezca jitter en el tráfico de voz?",
    "options": [
      "El uso de cables de par trenzado en lugar de fibra multimodo",
      "La ausencia de iluminadores IR en las cámaras",
      "La configuración de RAID en la grabadora",
      "La congestión y el encolamiento variable cuando otras clases de tráfico compiten por el ancho de banda"
    ],
    "answer": 3,
    "exp": "Los retardos variables surgen al llenarse y vaciarse las colas; por eso el tráfico de tiempo real debe marcarse y priorizarse para minimizar su espera."
  },
  {
    "id": "uc-131",
    "module": "uc",
    "topic": "Calidad de voz",
    "q": "La red está poco utilizada en promedio, pero en horario pico la voz se degrada. ¿Qué acción de diseño ataca directamente la causa?",
    "options": [
      "Marcar el tráfico de tiempo real y asignarlo a una cola con prioridad estricta acotada",
      "Subir la resolución de todas las cámaras para aprovechar el enlace",
      "Eliminar las VLANs para reducir la segmentación de tráfico",
      "Deshabilitar LLDP para evitar tráfico de control"
    ],
    "answer": 0,
    "exp": "El problema es la competencia en momentos de carga: con marcado y colas de prioridad la voz espera muy poco incluso cuando el enlace se satura."
  },
  {
    "id": "uc-132",
    "module": "uc",
    "topic": "Calidad de voz",
    "q": "¿Qué es un policer en el contexto de QoS?",
    "options": [
      "Un protocolo que asigna direcciones IP a los terminales VoIP",
      "Un mecanismo que encola y suaviza los picos para no descartar tráfico",
      "Un elemento que limita la tasa de tráfico y marca o descarta lo que excede el perfil",
      "Un sensor de PoE que mide la potencia de los puertos"
    ],
    "answer": 2,
    "exp": "El policer aplica un límite de tasa: el exceso se marca o se descarta de inmediato, a diferencia del shaper, que encola temporalmente para suavizar el pico."
  },
  {
    "id": "uc-133",
    "module": "uc",
    "topic": "Calidad de voz",
    "q": "En un diseño de QoS se marca con la máxima prioridad (clase EF) todo el tráfico de una VLAN completa. ¿Qué riesgo se introduce?",
    "options": [
      "El tráfico pierde la marca DSCP y viaja como mejor esfuerzo",
      "El switch deja de entregar PoE en los puertos afectados",
      "El servidor SIP deja de aceptar registros",
      "El tráfico excesivamente marcado compite en la misma cola prioritaria y desplaza a la voz real, que deja de estar protegida"
    ],
    "answer": 3,
    "exp": "La prioridad estricta debe ser acotada y reservada al tiempo real; marcar de más en la misma clase anula la ventaja y hace que la voz compita consigo misma."
  },
  {
    "id": "uc-134",
    "module": "uc",
    "topic": "Calidad de voz",
    "q": "En una red con voz, vídeo interactivo y datos, ¿qué clase DSCP se reserva habitualmente para el tráfico de vídeo en tiempo real (videollamadas)?",
    "options": [
      "EF, que está reservada para la conversación de voz",
      "CS0, que corresponde al mejor esfuerzo sin prioridad",
      "AF41, que representa tráfico de vídeo interactivo",
      "CS6, reservada al tráfico de enrutamiento"
    ],
    "answer": 2,
    "exp": "Existe una jerarquía de clases: la voz se asocia a la prioridad estricta y el vídeo interactivo a AF41, con menor prioridad pero con garantías; CS0 es mejor esfuerzo y CS6 es para control de red."
  },
  {
    "id": "uc-135",
    "module": "uc",
    "topic": "QoS",
    "q": "En arquitectura DiffServ, ¿dónde se codifica la clase de servicio de un paquete IP para que los dispositivos puedan priorizarlo?",
    "options": [
      "En el identificador de VLAN de la trama Ethernet",
      "En el campo DSCP, dentro de la cabecera IP (campo ToS)",
      "En la cabecera LLDP que intercambian los switches",
      "En la opción de subnet mask del DHCP"
    ],
    "answer": 1,
    "exp": "DiffServ define el DSCP (6 bits) en la cabecera IP: cada salto lo lee para seleccionar la cola y el tratamiento de reenvío."
  },
  {
    "id": "uc-136",
    "module": "uc",
    "topic": "QoS",
    "q": "¿Cuántos bits ocupa el campo DSCP en la cabecera IPv4?",
    "options": [
      "6 bits, heredados de los bits más significativos del campo ToS",
      "8 bits, coincidentes con todo el byte del campo ToS",
      "4 bits, compartidos con el TTL",
      "16 bits, repartidos entre las dos cabeceras"
    ],
    "answer": 0,
    "exp": "El DSCP son 6 bits; conservan compatibilidad con el campo ToS de 8 bits del que proceden."
  },
  {
    "id": "uc-137",
    "module": "uc",
    "topic": "QoS",
    "q": "¿En qué punto de la red conviene marcar el tráfico de voz generado por los teléfonos IP?",
    "options": [
      "En el acceso (puerto del switch donde se conecta el teléfono), antes de que entre a la red",
      "Únicamente en el router de borde hacia Internet",
      "En el servidor SIP, después de comprimir el audio",
      "En la grabadora de video, ya que comparte infraestructura con la voz"
    ],
    "answer": 0,
    "exp": "Marcar en el origen (puerto de acceso de confianza) garantiza que toda la red interna conozca la clase del tráfico desde el primer salto; si se marca tarde, los tramos previos ya la trataron como mejor esfuerzo."
  },
  {
    "id": "uc-138",
    "module": "uc",
    "topic": "QoS",
    "q": "¿Qué es un 'trust boundary' (frontera de confianza) en un diseño de QoS?",
    "options": [
      "El punto donde se aplica la potencia PoE a las cámaras",
      "El servidor donde se almacenan las políticas de retención de video",
      "El enlace cifrado entre dos sedes mediante VPN",
      "El punto de la red donde se decide si se acepta o se re-mmarca el DSCP que llega desde los equipos"
    ],
    "answer": 3,
    "exp": "En la frontera de confianza se decide confiar en la marca entrante o re-marcasla: normalmente el primer switch de acceso, para que todo lo que siga reciba el tratamiento correcto."
  },
  {
    "id": "uc-139",
    "module": "uc",
    "topic": "QoS",
    "q": "El tráfico de voz viaja por una VPN sit-to-site hacia la sede central. ¿Por qué puede perder eficacia el marcado DSCP aplicado en la LAN?",
    "options": [
      "Porque el DSCP no existe en el protocolo IPv4",
      "Porque UDP no permite enviar marcas de servicio",
      "Porque el proveedor de tránsito puede ignorar o reescribir las marcas, y el túnel agrupa el tráfico en una sola clase",
      "Porque la VLAN de voz se elimina al encapsular y sin ella no hay DSCP"
    ],
    "answer": 2,
    "exp": "La prioridad es extremo a extremo: si el operador no respeta las clases o el túnel trata todo por igual, hay que negociar QoS en el tramo o re-marcas en el borde."
  },
  {
    "id": "uc-140",
    "module": "uc",
    "topic": "QoS",
    "q": "En el diseño de colas de un router, ¿qué característica define a la prioridad estricta (por ejemplo, LLQ) y cuál es su riesgo?",
    "options": [
      "Reparte el ancho de banda proporcionalmente entre todas las clases, sin riesgo alguno",
      "Otorga atención inmediata a una cola, pero sin acotar su tasa puede ahogar al resto del tráfico",
      "Señala los paquetes sin encolarlos, por lo que no añade retardo",
      "Es un mecanismo de cifrado que prioriza los flujos VPN"
    ],
    "answer": 1,
    "exp": "La cola prioritaria debe ir acompañada de un límite de tasa: así la voz espera casi nada y el resto del tráfico sigue recibiendo ancho de banda."
  },
  {
    "id": "uc-141",
    "module": "uc",
    "topic": "QoS",
    "q": "Quieres evitar que los picos de tráfico de datos provoquen descartes bruscos en un enlace, aunque eso signifique retener temporalmente los paquetes. ¿Qué mecanismo aplicas?",
    "options": [
      "Policing, que descarta al instante todo lo que exceda la tasa",
      "Deshabilitar el marcado DSCP en el enlace",
      "Shaping, que encola el exceso y suaviza la salida al ritmo configurado",
      "Aumentar el MTU para que quepan más bytes sin cola"
    ],
    "answer": 2,
    "exp": "El shaping encola y difiere el exceso, suavizando el pico; el policing es más agresivo porque marca o descarta en el momento."
  },
  {
    "id": "uc-142",
    "module": "uc",
    "topic": "QoS",
    "q": "Un enlace de acceso presenta latencia muy alta y variable incluso con poca carga. ¿Qué problema típico de los equipos puede explicarlo?",
    "options": [
      "Errores CRC masivos por un cable mal terminado",
      "Buffers demasiado grandes que retienen paquetes (buffer bloat), inflando el retardo",
      "Puertos PoE sin clasificación de potencia",
      "Falta de registros SIP en el servidor"
    ],
    "answer": 1,
    "exp": "Los buffers sin control acumulan tráfico y elevan la latencia; la solución es limitar colas y ajustar la QoS, no ampliar el ancho de banda a ciegas."
  },
  {
    "id": "uc-143",
    "module": "uc",
    "topic": "QoS",
    "q": "En un puerto de acceso de un switch, ¿qué configuración permite garantizar un ancho de banda mínimo a la cola donde circula la voz?",
    "options": [
      "Activar Spanning Tree en modo rápido",
      "Definir la VLAN nativa como la VLAN de voz",
      "Deshabilitar LLDP para liberar ancho de banda de control",
      "Reservar (garantizar) ancho de banda por cola y limitar las demás en ese puerto"
    ],
    "answer": 3,
    "exp": "Las colas de salida del puerto admiten reservas y límites: así la cola de tiempo real tiene capacidad garantizada aunque el resto del enlace esté ocupado."
  },
  {
    "id": "uc-144",
    "module": "uc",
    "topic": "QoS",
    "q": "¿Por qué el tráfico de voz sobre Wi-Fi requiere mecanismos de prioridad específicos (por ejemplo, WMM/802.11e)?",
    "options": [
      "Porque en el medio inalámbrico compartido, sin prioridad de acceso, los reintentos y la contención retrasan los paquetes de voz",
      "Porque el SSID debe estar en WPA2 para que la voz funcione",
      "Porque el DSCP no puede viajar en tramas inalámbricas y hay que sustituirlo",
      "Porque el DHCP no funciona en redes Wi-Fi"
    ],
    "answer": 0,
    "exp": "En 802.11 todos los equipos compiten por el medio: WMM asigna categorías de acceso prioritarias para que la voz espere menos que las descargas."
  },
  {
    "id": "uc-145",
    "module": "uc",
    "topic": "QoS",
    "q": "Se ha configurado QoS en toda la LAN de la sede, pero la voz se degrada al salir hacia Internet. ¿Por qué no basta la configuración interna?",
    "options": [
      "Porque el DSCP solo se puede marcar en redes con fibra",
      "Porque el operador puede no respetar las marcas: la política debe extenderse o negociarse en todo el trayecto",
      "Porque UDP ignora las colas en cualquier red",
      "Porque el tráfico de voz siempre viaja sin compresión al exterior"
    ],
    "answer": 1,
    "exp": "QoS es extremo a extremo: si el proveedor no continúa el tratamiento de las clases, hay que negociar acuerdos de clase o aplicar políticas en el borde de salida."
  },
  {
    "id": "uc-146",
    "module": "uc",
    "topic": "PoE",
    "q": "En un despliegue PoE 802.3af, ¿qué potencia máxima aproximada recibe el equipo (PD) en el extremo del cable?",
    "options": [
      "Alrededor de 12,95 W por puerto",
      "Alrededor de 60 W por puerto",
      "Alrededor de 100 W por puerto",
      "Exactamente 0 W, porque af solo detecta dispositivos"
    ],
    "answer": 0,
    "exp": "802.3af entrega hasta unos 15,4 W en el origen y hasta unos 12,95 W en el dispositivo tras las pérdidas del cable."
  },
  {
    "id": "uc-147",
    "module": "uc",
    "topic": "PoE",
    "q": "Una cámara exterior con calefactor, ventilador y zoom supera los 15 W. ¿Qué estándar PoE es el adecuado para alimentarla?",
    "options": [
      "802.3af, que entrega la potencia suficiente",
      "802.3az, diseñado para ahorro energético",
      "802.3at (PoE+), que permite hasta unos 30 W por puerto",
      "802.3ad, que agrega enlaces"
    ],
    "answer": 2,
    "exp": "802.3at amplía la potencia por puerto hasta unos 30 W (unos 25,5 W en el PD), la gama intermedia que necesita el equipo exigente."
  },
  {
    "id": "uc-148",
    "module": "uc",
    "topic": "PoE",
    "q": "¿Qué distingue al estándar 802.3bt (PoE++) respecto al 802.3at?",
    "options": [
      "Solo usa dos pares de cobre y limita la entrega a 15 W",
      "Es un protocolo de descubrimiento de topología, no de potencia",
      "Requiere que los equipos sean inalámbricos",
      "Utiliza los cuatro pares de cable y permite potencias notables por puerto, hasta unos 90 W en sus clases superiores"
    ],
    "answer": 3,
    "exp": "802.3bt emplea los 4 pares y sube la potencia por puerto (tipos 3 y 4, hasta unos 60 y 90 W respectivamente) para equipos como cámaras PTZ con calefactor o displays."
  },
  {
    "id": "uc-149",
    "module": "uc",
    "topic": "PoE",
    "q": "Un switch PoE declara un presupuesto de potencia total de 370 W. ¿Qué significa en la práctica?",
    "options": [
      "Que cada uno de sus puertos puede entregar 370 W simultáneamente",
      "Que 370 W es la distancia máxima en metros del enlace PoE",
      "Que la suma de la potencia entregada a todos los puertos no debe superar ese total",
      "Que el switch ignora la potencia de los equipos conectados"
    ],
    "answer": 2,
    "exp": "El presupuesto es global: aunque cada puerto tenga su propio máximo, si la suma de los PD excede el total, los puertos adicionales quedan sin energía."
  },
  {
    "id": "uc-150",
    "module": "uc",
    "topic": "PoE",
    "q": "Al conectar un dispositivo, el switch mide la presencia de una resistencia característica antes de aplicar voltaje. ¿A qué fase del PoE corresponde?",
    "options": [
      "Detección, que identifica si hay un equipo PD conectado",
      "Clasificación, donde se determina la clase de potencia requerida",
      "Negociación de velocidad y duplex del puerto",
      "Registro del dispositivo en el servidor SIP"
    ],
    "answer": 0,
    "exp": "Primero se detecta la firma del PD (resistencia de referencia); después, en su caso, viene la clasificación para conocer la clase de potencia y asignar energía de forma acorde."
  },
  {
    "id": "uc-151",
    "module": "uc",
    "topic": "PoE",
    "q": "Un administrador pregunta si es seguro conectar un ordenador de oficina a un puerto de switch con PoE habilitado. ¿Cuál es la respuesta correcta?",
    "options": [
      "No, el voltaje PoE quemaría la tarjeta de red del ordenador",
      "Sí, pero el puerto queda sin conectividad de red",
      "Solo si el puerto está en modo trunk; en caso contrario no funciona",
      "Sí, porque el switch solo aplica voltaje tras detectar la firma de un equipo PD"
    ],
    "answer": 3,
    "exp": "El PSE no inyecta energía a ciegas: solo tras detectar (y clasificar) un PD legítimo, por lo que un equipo no PoE simplemente opera con normalidad."
  },
  {
    "id": "uc-152",
    "module": "uc",
    "topic": "PoE",
    "q": "¿Cuál es la distancia máxima habitual de un enlace PoE sobre cobre estructurado en una instalación tipo?",
    "options": [
      "Hasta unos 500 m con cable de categoría 5",
      "Hasta unos 100 m, igual que cualquier enlace Ethernet sobre par trenzado",
      "Hasta 300 m si se usa cable de categoría 6",
      "Sin límite, porque la potencia no se degrada con la distancia"
    ],
    "answer": 1,
    "exp": "PoE respeta el límite clásico de 100 m del cableado de acceso; para mayor distancia se usan extensores o soluciones sobre fibra con inyectores remotos."
  },
  {
    "id": "uc-153",
    "module": "uc",
    "topic": "PoE",
    "q": "En un despliegue VoIP, ¿qué información útil intercambia LLDP-MED entre el teléfono y el switch?",
    "options": [
      "Las claves de cifrado del flujo RTP",
      "Clase de potencia requerida, VLAN de voz y parámetros de configuración del terminal",
      "El número de serie y el RAID de la grabadora",
      "Los códecs soportados por el servidor SIP"
    ],
    "answer": 1,
    "exp": "LLDP-MED extiende LLDP para equipos de telecomunicaciones: permite al switch conocer la clase de energía del teléfono y al terminal aprender la VLAN de voz, agilizando el aprovisionamiento."
  },
  {
    "id": "uc-154",
    "module": "uc",
    "topic": "PoE",
    "q": "Además de la topología, ¿qué permite descubrir LLDP entre un switch y un teléfono IP en una red con voz?",
    "options": [
      "El retén de grabación de las cámaras asociadas",
      "La clave de autenticación del usuario SIP",
      "El presupuesto total de energía del edificio",
      "La VLAN de voz y parámetros de configuración del terminal, además de la identidad del vecino"
    ],
    "answer": 3,
    "exp": "Con LLDP el puerto conoce qué dispositivo hay al otro lado y sus atributos (como la VLAN de voz en LLDP-MED), lo que agiliza el aprovisionamiento y el troubleshooting."
  },
  {
    "id": "uc-155",
    "module": "uc",
    "topic": "PoE",
    "q": "En un switch PoE se conectan más cámaras de las que permite su presupuesto de potencia. ¿Qué suele ocurrir?",
    "options": [
      "Los puertos excedentes no entregan energía o el equipo emite alerta por falta de potencia",
      "El switch amplía automáticamente su presupuesto",
      "Las cámaras reciben un voltaje mayor que el especificado",
      "Se amplía la distancia máxima de los enlaces a 300 m"
    ],
    "answer": 0,
    "exp": "El presupuesto es un límite físico: al superarlo, los puertos adicionales no energizan sus PD (o el switch emite aviso), por lo que hay que planificar cámaras y clases de potencia."
  },
  {
    "id": "uc-156",
    "module": "uc",
    "topic": "PoE",
    "q": "¿Qué es un inyector PoE midspan?",
    "options": [
      "Un switch que solo enruta tráfico de datos sin entregar potencia",
      "Un router de acceso con cortafuegos integrado",
      "Un dispositivo que inyecta energía en un enlace existente, permitiendo dar PoE sin sustituir el switch",
      "Un repetidor de fibra para superar los 100 m"
    ],
    "answer": 2,
    "exp": "El midspan se coloca entre el switch y el equipo y añade la alimentación al cable, útil para dar PoE a cámaras o teléfonos en instalaciones con switches ya existentes."
  },
  {
    "id": "uc-157",
    "module": "uc",
    "topic": "Cámaras IP",
    "q": "Una cámara anunciada como de 2 megapíxeles produce habitualmente una imagen equivalente a...",
    "options": [
      "4K (3840×2160)",
      "VGA (640×480)",
      "SVGA (800×600)",
      "Full HD (1920×1080)"
    ],
    "answer": 3,
    "exp": "2 MP ≈ 2 millones de píxeles, que corresponde a la resolución Full HD 1080p; 4K ronda los 8 MP y VGA apenas 0,3 MP."
  },
  {
    "id": "uc-158",
    "module": "uc",
    "topic": "Cámaras IP",
    "q": "Para identificar rostros o matrículas en un acceso, el equipo de diseño pregunta si basta con comprar la cámara de más megapíxeles. ¿Qué respuesta es la correcta?",
    "options": [
      "Sí: a mayor número de megapíxeles siempre se ve mejor, sin importar nada más",
      "Sí, pero solo si la cámara usa H.265 y PoE 802.3at",
      "No: determinan la distancia de trabajo, la longitud focal y el ángulo, que fijan los píxeles disponibles sobre el objetivo",
      "No: lo decisivo es el presupuesto de potencia del switch"
    ],
    "answer": 2,
    "exp": "La resolución efectiva depende de cuántos píxeles caen sobre el objetivo en su distancia: con la focal y la distancia adecuadas se maximiza el detalle útil."
  },
  {
    "id": "uc-159",
    "module": "uc",
    "topic": "Cámaras IP",
    "q": "En una zona de paso rápido, se pasa la cámara de 15 a 30 fps. ¿Qué efecto combinado se espera?",
    "options": [
      "Mejora la resolución del sensor y reduce el consumo PoE",
      "El movimiento se ve más fluido y es menos probable perder el instante clave, a cambio de mayor bitrate y más almacenamiento",
      "Se elimina la necesidad de enfoque automático",
      "La cámara deja de necesitar iluminación IR por la noche"
    ],
    "answer": 1,
    "exp": "Subir los fotogramas mejora la captura de movimiento, pero incrementa la tasa de datos y el volumen a grabar: hay que sopesarlo con la retención disponible."
  },
  {
    "id": "uc-160",
    "module": "uc",
    "topic": "Cámaras IP",
    "q": "Una cámara instalada frente a una puerta con mucha luz exterior muestra a la persona totalmente a contraluz y oscura. ¿Qué tecnología ayuda a resolverlo?",
    "options": [
      "WDR (rango dinámico amplio), que combina exposiciones para conservar detalle en escenas con gran contraste",
      "El códec H.265, que realza las sombras",
      "El protocolo RTSP, que corrige la exposición",
      "La potencia PoE 802.3bt, que mejora el sensor"
    ],
    "answer": 0,
    "exp": "El WDR combina imágenes de distinta exposición para ver detalle tanto en zonas oscuras como muy iluminadas, típico en accesos con contraluz."
  },
  {
    "id": "uc-161",
    "module": "uc",
    "topic": "Cámaras IP",
    "q": "¿Por qué una cámara con visión nocturna por infrarrojos puede grabar en oscuridad total sin luz visible?",
    "options": [
      "Emite luz infrarroja invisible y el sensor capta esa banda del espectro",
      "Porque usa radar de ondas cortas en lugar de un sensor óptico",
      "Porque amplifica el DSCP del flujo de video",
      "Porque el NVR añade luz durante la grabación"
    ],
    "answer": 0,
    "exp": "El iluminador IR ilumina con longitudes de onda no visibles para el ojo humano; el sensor, con el filtro de día/noche retirado, capta ese reflejo."
  },
  {
    "id": "uc-162",
    "module": "uc",
    "topic": "Cámaras IP",
    "q": "Durante el día, ¿por qué una cámara de seguridad mantiene activo su filtro de corte de infrarrojos (ICR)?",
    "options": [
      "Para reducir el consumo de energía PoE del puerto",
      "Para cifrar el vídeo antes de enviarlo al VMS",
      "Para evitar que la cámara envía tráfico multicast",
      "Para bloquear el infrarrojo ambiental que descolorearía la imagen a plena luz"
    ],
    "answer": 3,
    "exp": "Con luz solar abundante el infrarrojo saturaría y alteraría los colores; el filtro lo corta, y por la noche se retira para dejar paso al espectro IR del iluminador."
  },
  {
    "id": "uc-163",
    "module": "uc",
    "topic": "Cámaras IP",
    "q": "¿Qué característica de una cámara PTZ debe revisarse especialmente en el diseño de potencia?",
    "options": [
      "Que solo puede funcionar mediante alimentación por fibra",
      "Que no puede grabar eventos de movimiento",
      "Que su mecanismo de movimiento y zoom suele requerir más energía que una cámara fija, por lo que hay que verificar la clase PoE disponible",
      "Que exige un servidor SIP para el control"
    ],
    "answer": 2,
    "exp": "PTZ (pan, tilt y zoom) mueve motores: se debe comprobar que el puerto o inyector cubra su clase de potencia, sobre todo con calefactadores o ventiladores añadidos."
  },
  {
    "id": "uc-164",
    "module": "uc",
    "topic": "Cámaras IP",
    "q": "En la ficha de una cámara para exterior se indica clasificación IP67. ¿Qué significa?",
    "options": [
      "Soporta hasta 67 Mbps de ancho de banda",
      "Protección total contra polvo y contra la inmersión temporal en agua",
      "Dispone de 67 LEDs infrarrojos",
      "Admite hasta 67 cámaras conectadas al NVR"
    ],
    "answer": 1,
    "exp": "La primera cifra es la protección frente a cuerpos sólidos (6 = polvo) y la segunda frente al agua (7 = inmersión temporal), clave para cámaras a la intemperie."
  },
  {
    "id": "uc-165",
    "module": "uc",
    "topic": "Cámaras IP",
    "q": "¿Por qué conviene configurar la detección de movimiento en la propia cámara además de en el VMS?",
    "options": [
      "Porque el VMS no es capaz de analizar vídeo bajo ninguna circunstancia",
      "Porque el PoE no permite que el VMS reciba eventos",
      "Porque filtra en origen: se reducen falsos avisos y el consumo de red y almacenamiento desde el primer salto",
      "Porque RTSP impide enviar alertas al servidor"
    ],
    "answer": 2,
    "exp": "La analítica en el borde reduce el flujo constante a eventos relevantes y permite configurar zonas y sensibilidad donde se capta la escena."
  },
  {
    "id": "uc-166",
    "module": "uc",
    "topic": "Compresión de video",
    "q": "En la configuración de una cámara se reduce mucho la frecuencia de fotogramas clave (I). ¿Qué consecuencia técnica se produce?",
    "options": [
      "La resolución de la imagen aumenta automáticamente",
      "Menor tasa de datos, pero ante pérdidas la imagen tarda más en recuperarse y degrada más rápido",
      "La cámara deja de necesitar el switch PoE",
      "Se eliminan las necesidades de segmentación de red"
    ],
    "answer": 1,
    "exp": "Los I-frames son puntos de reconstrucción completos: espaciarlos ahorra bitrate, pero una pérdida afecta a más fotogramas dependientes y retrasa la recuperación."
  },
  {
    "id": "uc-167",
    "module": "uc",
    "topic": "Compresión de video",
    "q": "Al configurar una cámara IP, el parámetro GOP (Key Frame Interval) define...",
    "options": [
      "El número de puertos PoE que consume la cámara",
      "La duración de la retención de grabación en días",
      "La VLAN asignada al flujo de vídeo",
      "La distancia, en fotogramas, entre dos fotogramas clave (I)"
    ],
    "answer": 3,
    "exp": "El GOP determina cada cuántos fotogramas aparece una imagen I; de él dependen el pico de bitrate, la latencia de entrada en directo y la robustez ante pérdidas."
  },
  {
    "id": "uc-168",
    "module": "uc",
    "topic": "Compresión de video",
    "q": "En un proyecto donde es crítico predecir el consumo de red y de almacenamiento del vídeo, ¿qué modo de tasa conviene preferir en las cámaras?",
    "options": [
      "CBR, que mantiene una tasa predecible aunque la escena cambie",
      "VBR sin límite, para dar máxima calidad en cualquier escena",
      "Codificación sin fotogramas I, para eliminar los picos de bitrate",
      "Modo sin compresión, para no perder ningún detalle"
    ],
    "answer": 0,
    "exp": "El modo de tasa fija facilita dimensionar enlaces y planificar almacenamiento; el VBR da mejor calidad por bit pero genera picos difíciles de prever."
  },
  {
    "id": "uc-169",
    "module": "uc",
    "topic": "Compresión de video",
    "q": "En H.264/H.265, ¿qué información guardan los fotogramas P respecto a la imagen completa?",
    "options": [
      "La imagen completa, igual que un fotograma I",
      "Solo las diferencias respecto a fotogramas anteriores ya referenciados",
      "Los metadatos de potencia PoE del puerto",
      "El audio asociado en formato G.711"
    ],
    "answer": 1,
    "exp": "Los fotogramas P (y B) codifican cambios respecto a imágenes previas: eso es la redundancia temporal, la base del ahorro frente a fotogramas I completos."
  },
  {
    "id": "uc-170",
    "module": "uc",
    "topic": "Compresión de video",
    "q": "Una cámara está capturando a 4 MP pero el proyecto solo necesita visión general de un pasillo. ¿Qué se gana al bajar la resolución a la necesaria?",
    "options": [
      "Se reduce la tasa de datos y el volumen de almacenamiento, y se alivia el procesamiento del VMS",
      "Se amplía el ángulo de visión del objetivo",
      "Se mejora la iluminación nocturna de la escena",
      "Se habilitan más puertos PoE en el switch"
    ],
    "answer": 0,
    "exp": "Dimensionar la resolución al uso real ahorra bitrate, disco y carga de CPU sin perder información útil, dejando margen de mejora si se necesita más detalle."
  },
  {
    "id": "uc-171",
    "module": "uc",
    "topic": "Compresión de video",
    "q": "¿Para qué aprovecha la compresión de vídeo la redundancia temporal?",
    "options": [
      "Para aumentar la tasa fija de bits del flujo",
      "Para clasificar los paquetes en colas de prioridad",
      "Para codificar únicamente los cambios entre fotogramas consecutivos",
      "Para sincronizar el audio G.711 con el vídeo"
    ],
    "answer": 2,
    "exp": "Al diferir entre fotogramas se envía mucha menos información que repitiendo imágenes completas: es el principio que permite grabar muchas cámaras con ancho de banda limitado."
  },
  {
    "id": "uc-172",
    "module": "uc",
    "topic": "Compresión de video",
    "q": "¿Cuál es la función habitual del substream (flujo secundario) de una cámara?",
    "options": [
      "Grabar la copia principal en el NVR con más calidad",
      "Sustituir al stream principal cuando falla el PoE",
      "Transportar la señalización SIP del sistema de voz",
      "Ofrecer un flujo de baja resolución para visualización remota o varias vistas, ahorrando ancho de banda frente al stream principal"
    ],
    "answer": 3,
    "exp": "El stream principal se reserva para grabación y detalle; el substream permite ver muchas cámaras en pantalla o en móviles sin saturar el enlace."
  },
  {
    "id": "uc-173",
    "module": "uc",
    "topic": "Compresión de video",
    "q": "Para detectar intrusos en un perímetro y recibir alertas tempranas, ¿qué arquitectura de analítica de vídeo es habitual?",
    "options": [
      "Ejecutarla en el switch PoE, que dispone siempre de capacidad de vídeo",
      "Ejecutarla en el teléfono VoIP, que comparte la VLAN de voz",
      "Ejecutar la analítica en la propia cámara (edge) y enviar eventos al VMS, o en servidor cuando el análisis es complejo",
      "Ejecutarla en el router de borde, que conoce todas las rutas"
    ],
    "answer": 2,
    "exp": "La analítica en el borde filtra en origen y reduce tráfico; los escenarios complejos se resuelven en servidor con el VMS, manteniendo los eventos centralizados."
  },
  {
    "id": "uc-174",
    "module": "uc",
    "topic": "VMS/NVR",
    "q": "En un proyecto con cámaras de varios fabricantes, ¿qué se menciona habitualmente para garantizar que funcionen con el VMS elegido?",
    "options": [
      "El estándar ONVIF, que define interfaces abiertas de vídeo y control entre cámaras y software",
      "El códec G.711, obligatorio para las cámaras",
      "El protocolo SIP, usado por el VMS para suscribirse a los eventos",
      "La clase de potencia 802.3bt, requisito de interoperabilidad"
    ],
    "answer": 0,
    "exp": "ONVIF estandariza streaming, configuración y eventos (perfiles como Profile S), permitiendo combinar cámaras y VMS de distintos fabricantes con pruebas de interoperabilidad."
  },
  {
    "id": "uc-175",
    "module": "uc",
    "topic": "VMS/NVR",
    "q": "¿Qué combinación es la que realmente asegura la interoperabilidad entre una cámara y un VMS de fabricantes distintos?",
    "options": [
      "Que ambos usen el mismo switch PoE y la misma categoría de cable",
      "Que ambos tengan el mismo modelo de almacenamiento en RAID",
      "Que ambos se alimenten por la misma clase de potencia",
      "Que ambos soporten el mismo perfil ONVIF y que la integración se haya probado en laboratorio"
    ],
    "answer": 3,
    "exp": "El perfil ONVIF común es la base; aun así, la validación en pruebas es lo que confirma funcionalidades concretas (eventos, PTZ, compresión) antes del despliegue."
  },
  {
    "id": "uc-176",
    "module": "uc",
    "topic": "VMS/NVR",
    "q": "¿Para qué se utiliza RTSP en un sistema de videovigilancia IP?",
    "options": [
      "Para asignar direcciones IP a las cámaras mediante el servidor de red",
      "Para controlar la sesión de reproducción del flujo de vídeo entre la cámara y el cliente o VMS",
      "Para la señalización de llamadas del sistema de voz unificada",
      "Para descubrir la clase de potencia PoE del puerto"
    ],
    "answer": 1,
    "exp": "RTSP establece y controla los canales de reproducción (play, pause, descripción del flujo), habitualmente junto a RTP para transportar los datos de vídeo."
  },
  {
    "id": "uc-177",
    "module": "uc",
    "topic": "VMS/NVR",
    "q": "En un almacén con pocas horas de actividad, el responsable quiere reducir el uso de disco sin perder evidencia de lo que ocurre. ¿Qué modo de grabación es el más indicado?",
    "options": [
      "Grabación continua a máxima resolución y fps las 24 horas",
      "Grabación por evento (movimiento o analítica) con búfer previo al disparo",
      "Grabación solo mientras un operador está mirando el directo",
      "Grabación exclusivamente en el teléfono del vigilante"
    ],
    "answer": 1,
    "exp": "La grabación por evento conserva solo los momentos relevantes (con pre-alarma), ahorrando espacio manteniendo la evidencia; la continua se reserva a puntos críticos."
  },
  {
    "id": "uc-178",
    "module": "uc",
    "topic": "VMS/NVR",
    "q": "¿Qué aporta la grabación en el borde (tarjeta local en la cámara) en una instalación con VMS centralizado?",
    "options": [
      "Sustituye la necesidad de cámaras en la red",
      "Permite señalar las llamadas SIP de la sede",
      "Elimina el consumo de potencia PoE",
      "Un respaldo local que sigue grabando si la red o el servidor falla, hasta restablecer el enlace"
    ],
    "answer": 3,
    "exp": "El almacenamiento en la cámara mantiene continuidad ante caídas de red (failover) y se sincroniza después con el VMS, mejorando la resiliencia del sistema."
  },
  {
    "id": "uc-179",
    "module": "uc",
    "topic": "VMS/NVR",
    "q": "Se necesita exportar un fragmento de vídeo como evidencia de un incidente. ¿Qué práctica es correcta?",
    "options": [
      "Exportarlo conservando las marcas de tiempo y los metadatos, registrando la exportación para mantener la cadena de custodia",
      "Exportarlo en el formato más comprimido posible descartando las marcas de tiempo",
      "Regrabar la pantalla del monitor con un teléfono móvil",
      "Enviarlo directamente por mensajería sin registrar quién lo exportó"
    ],
    "answer": 0,
    "exp": "La integridad de la evidencia exige conservar fecha, hora y origen del clip y trazar quién lo extrajo; sin metadatos o sin registro, el material pierde valor probatorio."
  },
  {
    "id": "uc-180",
    "module": "uc",
    "topic": "VMS/NVR",
    "q": "Varios operadores usan el VMS a diario. ¿Qué principio de configuración conviene aplicar en las cuentas?",
    "options": [
      "Dar permisos de administrador a todos los operadores para que no haya bloqueos",
      "Usar una única cuenta compartida para simplificar la gestión",
      "Aplicar mínimo privilegio: cada rol solo ve, graba o exporta lo que necesita",
      "Deshabilitar las contraseñas y confiar en la red interna"
    ],
    "answer": 2,
    "exp": "El mínimo privilegio limita el impacto de un error o abuso: consultas, exportaciones y cambios se restringen por rol, con auditoría de quién hizo qué."
  },
  {
    "id": "uc-181",
    "module": "uc",
    "topic": "VMS/NVR",
    "q": "¿Por qué el tráfico de las cámaras suele vivir en una VLAN de video dedicada?",
    "options": [
      "Porque el vídeo necesita señalización SIP para funcionar",
      "Porque PoE solo entrega energía si el puerto pertenece a una VLAN específica",
      "Porque el RAID de la grabadora exige una subred propia",
      "Para aislar un tráfico de gran volumen, controlar su acceso y evitar que un incidente en una cámara se propague a otras redes"
    ],
    "answer": 3,
    "exp": "La segmentación facilita políticas de QoS, control de acceso y auditoría, y reduce la superficie de exposición de la infraestructura de videovigilancia."
  },
  {
    "id": "uc-182",
    "module": "uc",
    "topic": "VMS/NVR",
    "q": "Se integra el VMS con el sistema de control de accesos. ¿Qué aportación principal tiene esa integración?",
    "options": [
      "Reducir la resolución de las cámaras automáticamente",
      "Aumentar la potencia PoE entregada a cada puerto",
      "Correlacionar eventos, como abrir una puerta con el vídeo del momento, y disparar respuestas automáticas",
      "Sustituir al códec H.265 por uno más simple"
    ],
    "answer": 2,
    "exp": "La correlación entre sistemas convierte eventos aislados en contexto útil (quién abrió, qué ocurrió) y permite automatizaciones como grabar o alertar ante accesos anómalos."
  },
  {
    "id": "uc-183",
    "module": "uc",
    "topic": "Red de video",
    "q": "Cinco operadores quieren ver en directo la misma cámara simultáneamente. ¿Qué método de entrega evita que se transporten cinco copias independientes del flujo?",
    "options": [
      "Unicast a cada receptor, generando una copia por destino",
      "Multicast, donde la fuente envía una sola copia y los switches la reenvían solo donde hay receptores",
      "Grabación única en el NVR con visión simultánea forzada",
      "Transmisión por broadcast a toda la VLAN, sin control"
    ],
    "answer": 1,
    "exp": "Con multicast el flujo se envía una vez: IGMP y el snooping del switch se encargan de replicarlo únicamente en los puertos con receptores suscritos."
  },
  {
    "id": "uc-184",
    "module": "uc",
    "topic": "Red de video",
    "q": "Si se usa multicast para distribuir vídeo en directo, ¿por qué es necesario IGMP (y su snooping en los switches)?",
    "options": [
      "Para gestionar quién pertenece a cada grupo multicast y reenviar el flujo solo hacia donde hay receptores",
      "Para asignar direcciones IP a las cámaras en la VLAN de video",
      "Para cifrar el flujo de vídeo antes de reenviarlo",
      "Para habilitar la potencia PoE en los puertos receptores"
    ],
    "answer": 0,
    "exp": "Sin IGMP el switch no sabe dónde hay oyentes y acabaría replicando el flujo por todas partes; el snooping limita la replicación a los puertos suscritos."
  },
  {
    "id": "uc-185",
    "module": "uc",
    "topic": "Red de video",
    "q": "En el switch donde se conectan las cámaras de la VLAN de video, ¿qué configuración de puerto corresponde a los puertos de acceso a las cámaras?",
    "options": [
      "Puertos de acceso (access) en la VLAN de video, sin dejarlos troncales",
      "Puertos trunk con todas las VLANs del edificio",
      "Puertos en modo promiscuo para captura permanente",
      "Puertos deshabilitados que solo entregan potencia"
    ],
    "answer": 0,
    "exp": "Los puertos de acceso mantienen a la cámara en su VLAN y limitan su alcance; los trunks se reservan para los enlaces hacia el resto de la infraestructura."
  },
  {
    "id": "uc-186",
    "module": "uc",
    "topic": "Red de video",
    "q": "¿Por qué no conviene que las cámaras compartan VLAN y segmento con los equipos de gestión del datacenter?",
    "options": [
      "Porque el vídeo no puede viajar sobre IP en la misma red que la gestión",
      "Porque PoE solo funciona en segmentos separados del datacenter",
      "Porque el VMS exige que las cámaras estén en la VLAN de voz",
      "Porque reduce la superficie de riesgo: una cámara comprometida no debe poder alcanzar sistemas críticos de gestión"
    ],
    "answer": 3,
    "exp": "La separación limita el movimiento lateral ante el compromiso de un dispositivo periférico y permite políticas distintas de QoS, acceso y monitorización."
  },
  {
    "id": "uc-187",
    "module": "uc",
    "topic": "Red de video",
    "q": "Para un punto de videovigilancia crítico, ¿qué diseño de red reduce el riesgo de quedar a ciegas ante un fallo de enlace o puerto?",
    "options": [
      "Un único enlace directo sin ninguna vía alternativa",
      "Deshabilitar Spanning Tree y el snooping multicast en todos los puertos",
      "Enlaces redundantes con rutas alternativas (por ejemplo, agregación o topología con respaldo) y monitorización del estado",
      "Conectar la cámara al puerto de gestión del switch"
    ],
    "answer": 2,
    "exp": "La redundancia (enlaces, puertos o rutas) junto con la monitorización evita que un punto único de fallo deje sin cobertura una zona durante la reparación."
  },
  {
    "id": "uc-188",
    "module": "uc",
    "topic": "Red de video",
    "q": "¿Por qué conviene aplicar control de acceso a puerto (802.1X o validación de MAC) en los puertos donde se conectan cámaras?",
    "options": [
      "Porque mejora la resolución efectiva de la cámara al autenticar el enlace",
      "Para impedir que se conecten equipos no autorizados que puedan suplantar o inyectar tráfico en la red de vídeo",
      "Porque H.265 no funciona sin intercambio de claves en el puerto",
      "Porque el PoE 802.3af exige autenticación previa para entregar energía"
    ],
    "answer": 1,
    "exp": "Los puertos de acceso son puntos físicamente vulnerables: la autenticación evita que un desconectado o un intruso se incorpore a la VLAN de video."
  },
  {
    "id": "uc-189",
    "module": "uc",
    "topic": "Red de video",
    "q": "¿Por qué es importante sincronizar la hora de las cámaras y del VMS con una fuente NTP fiable?",
    "options": [
      "Porque la resolución del sensor depende del reloj interno de la cámara",
      "Porque los códecs H.264/H.265 no funcionan sin sincronía",
      "Para que las marcas de tiempo sean coherentes entre cámaras y permitan correlacionar eventos con precisión",
      "Porque la potencia PoE varía con la hora del sistema"
    ],
    "answer": 2,
    "exp": "La evidencia y la correlación entre fuentes exigen relojes alineados; sin sincronía, reconstruir la secuencia de un incidente resulta poco fiable."
  },
  {
    "id": "uc-190",
    "module": "uc",
    "topic": "Colaboración",
    "q": "¿Qué permite la funcionalidad de presencia en una plataforma de comunicaciones unificadas?",
    "options": [
      "Comprimir el audio de las llamadas para reducir el bitrate",
      "Consultar la disponibilidad de los usuarios (disponible, ocupado, ausente) y elegir el canal más adecuado para contactar",
      "Asignar direcciones IP a los terminales de la sede",
      "Grabar automáticamente el vídeo de las cámaras asociadas"
    ],
    "answer": 1,
    "exp": "La presencia combina estados publicados por los clientes y reglas de usuario para orientar la comunicación (llamada, mensaje o correo) según la disponibilidad real."
  },
  {
    "id": "uc-191",
    "module": "uc",
    "topic": "Colaboración",
    "q": "En una videollamada basada en WebRTC, ¿qué papel cumple la capa de señalización (signaling)?",
    "options": [
      "Comprimir el audio y el vídeo antes de enviarlos",
      "Transportar los medios de la llamada entre los participantes",
      "Sustituir al servidor de grabación del VMS",
      "Intercambiar los mensajes de sesión (oferta/respuesta SDP y candidatos ICE) entre los pares, sin transportar los medios"
    ],
    "answer": 3,
    "exp": "La señalización negocia cómo se establece la sesión; una vez negociada, los medios viajan directamente (o por relay) con RTP, por separado de esa negociación."
  },
  {
    "id": "uc-192",
    "module": "uc",
    "topic": "Colaboración",
    "q": "¿Por qué suelen necesitarse servidores STUN/TURN en videollamadas entre redes con NAT?",
    "options": [
      "STUN ayuda a descubrir la dirección pública tras el NAT y TURN actúa como relay cuando el envío directo falla",
      "Para asignar VLANs de vídeo a los participantes",
      "Para entregar potencia PoE a los equipos de sala",
      "Para almacenar la grabación de la reunión en el NVR"
    ],
    "answer": 0,
    "exp": "Detrás de NAT la dirección visible no es la real y muchos cortafuegos bloquean medios: STUN resuelve el descubrimiento y TURN garantiza conectividad con reenvío."
  },
  {
    "id": "uc-193",
    "module": "uc",
    "topic": "Colaboración",
    "q": "En el diseño de la red para reuniones de vídeo interactivas, ¿por qué se prioriza la baja latencia y la estabilidad del enlace?",
    "options": [
      "Porque el tráfico de vídeo siempre debe viajar por fibra para funcionar",
      "Porque en la interacción en tiempo real un retardo alto provoca solapamientos de voz y ruptura de la conversación",
      "Porque los códecs H.26x no soportan compresión si hay retardo",
      "Porque el almacenamiento en RAID depende de la latencia de la sesión"
    ],
    "answer": 1,
    "exp": "A diferencia de la descarga de archivo, la conversación y el vídeo en directo son sensibles al retardo: con latencia alta y variable los participantes hablan encima y la sesión pierde naturalidad."
  },
  {
    "id": "uc-194",
    "module": "uc",
    "topic": "Colaboración",
    "q": "En una sala de reuniones con vídeo, los participantes remotos escuchan su propio eco. ¿Qué medida lo corrige de raíz?",
    "options": [
      "Aplicar cancelación de eco acústico (AEC) en el dispositivo de audio de la sala",
      "Subir el volumen del altavoz para enmascarar el eco",
      "Deshabilitar la VLAN de voz para eliminar el retorno",
      "Aumentar la resolución de la cámara para sincronizar el audio"
    ],
    "answer": 0,
    "exp": "El AEC modela el retorno del altavoz y resta la señal del micrófono, eliminando el eco en origen; subir el volumen solo lo encubre y empeora la situación."
  },
  {
    "id": "uc-195",
    "module": "uc",
    "topic": "Colas e IVR",
    "q": "En un sistema de comunicaciones unificadas, ¿qué función cumple el distribuidor automático de llamadas (ACD) en una cola de atención?",
    "options": [
      "Comprime la voz de la llamada con G.729",
      "Asigna direcciones IP a los teléfonos de los agentes",
      "Distribuye las llamadas entrantes entre los agentes disponibles según reglas y estado",
      "Graba el vídeo de las cámaras del área de atención"
    ],
    "answer": 2,
    "exp": "El ACD enruta cada llamada al recurso adecuado (por habilidad, carga o prioridad) y es el corazón de la atención al cliente en UC."
  },
  {
    "id": "uc-196",
    "module": "uc",
    "topic": "Colas e IVR",
    "q": "¿Cuál es el propósito principal de un IVR (respuesta de voz interactiva) al inicio de una cola de atención?",
    "options": [
      "Comprimir el audio de la llamada para reducir costes de red",
      "Grabar el vídeo de los clientes mientras esperan",
      "Sustituir al servidor SIP en la señalización de la llamada",
      "Automatizar la atención inicial con menús de voz o DTMF para clasificar y enrutar la llamada antes de llegar a un agente"
    ],
    "answer": 3,
    "exp": "El IVR automatiza los primeros pasos (identificación, motivo de contacto, auto-servicio), reduciendo tiempos de espera y mejorando el enrutado hacia el agente correcto."
  },
  {
    "id": "uc-197",
    "module": "uc",
    "topic": "Colas e IVR",
    "q": "En los indicadores de una cola de llamadas, ¿qué métrica refleja cuántos clientes colgaron antes de ser atendidos?",
    "options": [
      "El MOS de la llamada",
      "El bitrate del códec utilizado",
      "La tasa de abandono (porcentaje de abandonos)",
      "La clase de potencia del teléfono del agente"
    ],
    "answer": 2,
    "exp": "La tasa de abandono mide la insatisfacción por espera excesiva; suele analizarse junto al tiempo medio de espera y la duración de la atención."
  },
  {
    "id": "uc-198",
    "module": "uc",
    "topic": "Colas e IVR",
    "q": "¿Cuál es la diferencia conceptual entre una cola de llamadas y un grupo de timbre (ring group)?",
    "options": [
      "La cola gestiona espera, priorización, redistribución y métricas entre agentes; el grupo de timbre solo hace sonar varios teléfonos a la vez",
      "No hay ninguna diferencia, ambos aplican las mismas reglas de grabación en disco",
      "El grupo de timbre atiende con auto-servicio IVR y la cola no",
      "La cola funciona solo con cámaras IP y el grupo de timbre solo con voz"
    ],
    "answer": 0,
    "exp": "La cola añade lógica de servicio (esperas, saltos, prioridades, agentes) mientras que el grupo de timbre es una simple llamada simultánea a varios destinos."
  },
  {
    "id": "uc-199",
    "module": "uc",
    "topic": "Colas e IVR",
    "q": "Durante una llamada, el IVR pide el número de contrato y luego deriva a un agente mostrando esos datos en pantalla. ¿Qué tecnología hace posible ese contexto junto con la llamada?",
    "options": [
      "El códec H.265, que incluye los datos del cliente",
      "El PoE gestionado, que sincroniza el teléfono con la aplicación",
      "El VMS, que graba la conversación para el agente",
      "La integración CTI, que vincula los datos de la aplicación con la llamada en curso"
    ],
    "answer": 3,
    "exp": "La CTI (telefonía integrada con ordenador) transporta el contexto capturado y controla la llamada desde la aplicación, evitando que el cliente repita información."
  },
  {
    "id": "uc-200",
    "module": "uc",
    "topic": "Colas e IVR",
    "q": "¿Qué elemento evita que quien está en espera escuche un silencio total que le haga pensar que se cortó la llamada?",
    "options": [
      "El códec G.729, que genera tonos automáticamente",
      "La música o tonos de espera, generados localmente o por el servidor de comunicaciones",
      "El switch PoE, que mantiene el puerto activo",
      "La cámara PTZ de la sala, que capta el audio ambiente"
    ],
    "answer": 1,
    "exp": "La música en espera (o tonos) confirma al llamante que sigue en línea; debe configurarse en el servidor o terminal para que la llamada en espera no suene a línea muerta."
  }
];
