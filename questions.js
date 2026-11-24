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
  /* ---------------------------------------------------------
     MÓDULO 1 · CIBERSEGURIDAD
     --------------------------------------------------------- */
  {
    id: 'seg-01', module: 'seg', topic: 'Principios de seguridad',
    q: '¿Qué significa el principio de "menor privilegio"?',
    options: [
      'Otorgar a cada usuario, proceso o sistema solo los permisos estrictamente necesarios para su función',
      'Dar permisos de administrador a todos los usuarios para agilizar el trabajo',
      'Permitir el acceso una sola vez al día para reducir carga en el servidor',
      'Cifrar todas las cuentas aunque no necesiten acceso a datos'
    ],
    answer: 0,
    exp: 'El menor privilegio limita el alcance de cada cuenta y proceso al mínimo imprescindible; así, si una cuenta se compromete, el daño posible queda acotado.'
  },
  {
    id: 'seg-02', module: 'seg', topic: 'Modelo CIA',
    q: 'El modelo de seguridad CIA se refiere a:',
    options: [
      'Cifrado, Identificación y Auditoría',
      'Confidencialidad, Integridad y Disponibilidad',
      'Control de acceso, Inventariado y Aislamiento',
      'Continuidad, Identidad y Autenticación'
    ],
    answer: 1,
    exp: 'CIA son los tres pilares: confidencialidad (solo quien debe ve), integridad (la información no se altera de forma no autorizada) y disponibilidad (el servicio está cuando se necesita).'
  },
  {
    id: 'seg-03', module: 'seg', topic: 'Identidad',
    q: 'Una autenticación multifactor (MFA) es correcta cuando combina:',
    options: [
      'Dos preguntas secretas distintas',
      'Al menos dos factores de tipos diferentes: algo que sabes, tiene o es',
      'Dos contraseñas distintas del mismo usuario',
      'Usuario y un PIN que se cambia cada mes'
    ],
    answer: 1,
    exp: 'MFA exige factores de categorías distintas (conocimiento, posesión, inherencia). Repetir factores del mismo tipo (contraseña + PIN) no aporta verdadera resistencia al ataque.'
  },
  {
    id: 'seg-04', module: 'seg', topic: 'Perímetro',
    q: '¿Cuál es el propósito de una DMZ (zona desmilitarizada)?',
    options: [
      'Reemplazar el cortafuegos eliminando la necesidad de reglas',
      'Aislar físicamente el datacenter del resto de la empresa',
      'Ubicar servicios expuestos (web, correo, VPN) entre la red externa e interna para proteger la red interna',
      'Almacenar copias de seguridad fuera del sitio'
    ],
    answer: 2,
    exp: 'La DMZ es una red intermedia donde se publican servicios de cara al exterior; si ese segmento es comprometido, la red interna sigue protegida por reglas adicionales.'
  },
  {
    id: 'seg-05', module: 'seg', topic: 'Arquitectura de red',
    q: 'La segmentación de red ayuda principalmente a:',
    options: [
      'Eliminar la necesidad de parches y actualizaciones',
      'Limitar la movilidad lateral de un atacante si logra ingresar a un segmento',
      'Aumentar la velocidad de navegación de los usuarios',
      'Sustituir a la autenticación multifactor'
    ],
    answer: 1,
    exp: 'Al separar entornos (producción, desarrollo, oficinas, invitados) y controlar el tráfico entre ellos, se reduce el alcance de un incidente y se facilita el cumplimiento.'
  },
  {
    id: 'seg-06', module: 'seg', topic: 'Zero Trust',
    q: 'El modelo Zero Trust se basa en:',
    options: [
      'Confiar plenamente en todo lo que esté dentro de la red corporativa',
      'Verificar explícitamente cada solicitud, sin asumir confianza por ubicación de red',
      'Eliminar toda autenticación y usar solo segmentación',
      'Aislar cada usuario en una VLAN distinta sin controles adicionales'
    ],
    answer: 1,
    exp: 'Zero Trust parte de la premisa "nunca confíes, siempre verifica": autenticación continua, mínimo privilegio y microsegmentación, independientemente de dónde esté el usuario.'
  },
  {
    id: 'seg-07', module: 'seg', topic: 'Perímetro',
    q: '¿Qué aporta un cortafuegos de nueva generación (NGFW) frente a un cortafuegos clásico?',
    options: [
      'Solo filtra por dirección IP y puerto',
      'Inspección profunda de paquetes y control de aplicaciones (identificación de apps y usuarios)',
      'Sustituye al antivirus en endpoints',
      'Gestiona la impresión de documentos confidenciales'
    ],
    answer: 1,
    exp: 'El NGFW inspecciona el contenido, identifica aplicaciones y usuarios, e integra prevención de intrusiones, lo que permite políticas más allá de puertos y direcciones.'
  },
  {
    id: 'seg-08', module: 'seg', topic: 'Detección',
    q: '¿Para qué sirve una plataforma SIEM?',
    options: [
      'Centralizar y correlacionar eventos de seguridad de distintas fuentes para detectar alertas y apoyar la investigación',
      'Cifrar los discos de los servidores',
      'Dimensionar el ancho de banda de la red LAN',
      'Gestionar la impresión de documentos confidenciales'
    ],
    answer: 0,
    exp: 'Un SIEM recorre logs de firewalls, servidores, endpoints e identidad, los correlaciona con reglas y casos de uso, y permite alertar, investigar y reportar incidentes.'
  },
  {
    id: 'seg-09', module: 'seg', topic: 'Respuesta a incidentes',
    q: 'En la respuesta a incidentes, la secuencia más adecuada es:',
    options: [
      'Erradicar primero y contener después para no perder el rastro',
      'Preparación, detección y análisis, contención, erradicación, recuperación y lecciones aprendidas',
      'Recuperación inmediata sin analizar la causa',
      'Comunicación pública antes de contener el incidente'
    ],
    answer: 1,
    exp: 'Es el flujo recomendado por NIST: primero se contiene el daño, luego se erradica la causa, se recupera el servicio y se documentan las lecciones para mejorar.'
  },
  {
    id: 'seg-10', module: 'seg', topic: 'Criptografía',
    q: 'Cifrar con TLS/HTTPS los servicios web protege principalmente:',
    options: [
      'Los datos mientras viajan por la red (en tránsito)',
      'Los backups almacenados fuera del datacenter',
      'La disponibilidad del servidor ante caídas',
      'Las credenciales guardadas en el navegador'
    ],
    answer: 0,
    exp: 'TLS cifra la comunicación entre cliente y servidor, evitando snooping y manipulación en tránsito. Para datos en reposo se usa cifrado de almacenamiento, y para disponibilidad son los planes de redundancia.'
  },
  {
    id: 'seg-11', module: 'seg', topic: 'Identidad',
    q: '¿Por qué se agrega una "sal" (salt) al almacenar contraseñas?',
    options: [
      'Para hacer las contraseñas más largas visualmente',
      'Para que dos usuarios con la misma contraseña no tengan el mismo hash y dificultar ataques con tablas precalculadas',
      'Para acelerar el proceso de autenticación',
      'Para cifrar la contraseña con clave pública'
    ],
    answer: 1,
    exp: 'La sal es un valor único por usuario combinado antes de hashear; impide que contraseñas idénticas produzcan hashes idénticos y neutraliza los ataques de rainbow tables.'
  },

  /* ---------------------------------------------------------
     MÓDULO 2 · DATACENTER
     --------------------------------------------------------- */
  {
    id: 'dc-01', module: 'dc', topic: 'Infraestructura física',
    q: '¿Qué es la unidad "U" (rack unit) en un rack de datacenter?',
    options: [
      'Una unidad de ancho de banda de red',
      'Una unidad de altura equivalente a 1,75 pulgadas para dimensionar equipos',
      'Una unidad de consumo eléctrico en vatios',
      'Una unidad de almacenamiento en terabytes'
    ],
    answer: 1,
    exp: '1U = 1,75 pulgadas de altura; sirve para calcular cuántos equipos (servidores, switches) caben en un rack y planificar la capacidad del cuarto.'
  },
  {
    id: 'dc-02', module: 'dc', topic: 'Almacenamiento',
    q: 'En RAID 1, los datos se almacenan:',
    options: [
      'Distribuidos con paridad entre al menos tres discos',
      'En espejo: una copia idéntica en dos discos',
      'En un solo disco con compresión',
      'En cinta para archivar'
    ],
    answer: 1,
    exp: 'RAID 1 duplica los datos (espejo): buena tolerancia a fallos y lectura, pero aprovecha el 50% de la capacidad bruta.'
  },
  {
    id: 'dc-03', module: 'dc', topic: 'Almacenamiento',
    q: '¿Cuántos discos pueden fallar sin pérdida de datos en RAID 5 y en RAID 6?',
    options: [
      'RAID 5: 1 disco; RAID 6: 2 discos',
      'RAID 5: 2 discos; RAID 6: 1 disco',
      'Ambos toleran cualquier número de discos',
      'RAID 5 no tolera fallos; RAID 6 tolera 1'
    ],
    answer: 0,
    exp: 'RAID 5 usa paridad distribuida y tolera un disco; RAID 6 usa doble paridad y tolera dos discos simultáneos, útil en discos de gran capacidad donde la reconstrucción tarda.'
  },
  {
    id: 'dc-04', module: 'dc', topic: 'Almacenamiento',
    q: 'La principal diferencia entre SAN y NAS es:',
    options: [
      'SAN entrega almacenamiento en bloques sobre una red dedicada; NAS entrega archivos sobre TCP/IP',
      'SAN es solo para correos; NAS es solo para videos',
      'SAN no necesita discos; NAS no necesita red',
      'Ambas tecnologías son idénticas con nombres distintos'
    ],
    answer: 0,
    exp: 'La SAN (Fibre Channel o iSCSI) presenta volúmenes en bloques que el servidor ve como discos locales; el NAS comparte sistemas de archivos por red (NFS/SMB).'
  },
  {
    id: 'dc-05', module: 'dc', topic: 'Red SAN',
    q: '¿Qué función cumple el "zoning" en una red SAN de Fibre Channel?',
    options: [
      'Cifrar el tráfico de almacenamiento',
      'Definir qué nodos pueden comunicarse entre sí, aislando el acceso por zonas',
      'Asignar direcciones IP a los discos',
      'Comprimir los bloques de datos'
    ],
    answer: 1,
    exp: 'El zoning segmenta la fabric de FC en zonas lógicas; solo los iniciadores y destinos de la misma zona se ven, reduciendo el riesgo de accesos no autorizados y errores de configuración.'
  },
  {
    id: 'dc-06', module: 'dc', topic: 'Red SAN',
    q: 'iSCSI permite:',
    options: [
      'Transportar bloques de almacenamiento sobre una red TCP/IP estándar',
      'Compartir carpetas de archivos como SMB',
      'Grabar video en cámaras IP',
      'Virtualizar el sistema operativo de un switch'
    ],
    answer: 0,
    exp: 'iSCSI encapsula bloques SCSI sobre TCP/IP, lo que permite construir SAN sobre la red LAN existente sin Fibre Channel, con menor costo pero mayor sensibilidad a la latencia de la red.'
  },
  {
    id: 'dc-07', module: 'dc', topic: 'Virtualización',
    q: 'Un hipervisor de tipo 1 (bare metal) se ejecuta:',
    options: [
      'Sobre un sistema operativo convencional instalado en el servidor',
      'Directamente sobre el hardware del servidor, sin sistema operativo intermedio',
      'Solo en computadoras de escritorio',
      'Dentro de un contenedor Docker'
    ],
    answer: 1,
    exp: 'Los hipervisores tipo 1 (como VMware ESXi, Hyper-V o KVM en modo bare metal) corren directamente sobre el hardware, ofreciendo mejor rendimiento y aislamiento para producción.'
  },
  {
    id: 'dc-08', module: 'dc', topic: 'Virtualización',
    q: '¿Por qué un snapshot NO reemplaza un backup?',
    options: [
      'Porque el snapshot es más lento que el backup',
      'Porque el snapshot depende de la máquina virtual y del almacenamiento original; si ese storage se pierde o corrompe, se pierde también',
      'Porque el snapshot solo funciona en la nube pública',
      'Porque el snapshot cifra los datos'
    ],
    answer: 1,
    exp: 'El snapshot es un punto de referencia ligero atado a la infraestructura; no es una copia independiente. La estrategia de respaldo debe copiar los datos a otro sistema con retención definida.'
  },
  {
    id: 'dc-09', module: 'dc', topic: 'Redundancia',
    q: 'La notación "N+1" en redundancia significa:',
    options: [
      'Que hay N componentes y un componente extra para cubrir una falla',
      'Que todos los componentes son de marca distinta',
      'Que se duplica el ancho de banda de la red',
      'Que hay un solo componente sin respaldo'
    ],
    answer: 0,
    exp: 'N es la capacidad necesaria para soportar la carga; el "+1" es una unidad de respaldo, de modo que la falla de un componente no interrumpe el servicio (típico en UPS, fuentes y ventiladores).'
  },
  {
    id: 'dc-10', module: 'dc', topic: 'Servidores',
    q: 'Al dimensionar servidores para virtualización, es importante considerar que:',
    options: [
      'vCPU equivale siempre uno a uno con núcleos físicos sin sobreasignación posible',
      'La sobreasignación de vCPU puede generar contención de CPU si no se dimensiona bien',
      'Más memoria RAM nunca mejora el rendimiento',
      'El número de sockets no influye en el costo'
    ],
    answer: 1,
    exp: 'La sobreasignación es habitual y eficiente, pero si se excede la capacidad física real aparece contención (ready time). Se dimensiona considerando núcleos, memoria, I/O y crecimiento futuro.'
  },
  {
    id: 'dc-11', module: 'dc', topic: 'Almacenamiento',
    q: '¿Dónde conviene colocar las bases de datos transaccionales de baja latencia?',
    options: [
      'En tier de alto rendimiento (SSD/NVMe) por su baja latencia',
      'En discos HDD de alta capacidad',
      'En cinta LTO para archivar',
      'En el almacenamiento del navegador del usuario'
    ],
    answer: 0,
    exp: 'Las cargas transaccionales exigen baja latencia y alta tasa de IOPS, por lo que se dimensionan en SSD/NVMe; los HDD de alta capacidad se usan para datos fríos y capacidad, y la cinta para archivo a largo plazo.'
  },
  {
    id: 'dc-12', module: 'dc', topic: 'Red LAN',
    q: 'En una arquitectura spine-leaf de datacenter:',
    options: [
      'Solo hay un switch central por donde pasa todo el tráfico',
      'Cada leaf se conecta a todos los spine, dando caminos predecibles y escalado horizontal',
      'Los servidores se conectan directamente entre sí sin switches',
      'Los spine conectan solo impresoras y cámaras'
    ],
    answer: 1,
    exp: 'La topología spine-leaf (dos capas, malla completa entre capas) ofrece caminos de igual salto, balanceo ECMP y escalado horizontal, superando las limitaciones de una topología en árbol de tres capas.'
  },

  /* ---------------------------------------------------------
     MÓDULO 3 · NUBE HÍBRIDA
     --------------------------------------------------------- */
  {
    id: 'cloud-01', module: 'cloud', topic: 'Modelos de servicio',
    q: 'Si alquilas máquinas virtuales en la nube con sistema operativo gestionado por ti, estás usando:',
    options: [
      'SaaS',
      'PaaS',
      'IaaS',
      'On-premise'
    ],
    answer: 2,
    exp: 'IaaS entrega infraestructura (computo, red, storage) como servicio; tú gestionas el sistema operativo, aplicaciones y datos. En PaaS el proveedor gestiona el runtime; en SaaS también la aplicación.'
  },
  {
    id: 'cloud-02', module: 'cloud', topic: 'Modelos de servicio',
    q: 'Un correo corporativo en la nube o una suite de oficina en línea es un ejemplo de:',
    options: [
      'IaaS',
      'PaaS',
      'SaaS',
      'Backup como servicio'
    ],
    answer: 2,
    exp: 'SaaS entrega la aplicación completa lista para usar; el cliente se ocupa de los datos, la identidad de sus usuarios y la configuración del servicio.'
  },
  {
    id: 'cloud-03', module: 'cloud', topic: 'Responsabilidad compartida',
    q: 'En el modelo de responsabilidad compartida de la nube, bajo IaaS al cliente le corresponde gestionar:',
    options: [
      'El datacenter físico, las redes y el hipervisor',
      'El sistema operativo, las aplicaciones, los datos y la identidad de sus usuarios',
      'Nada: el proveedor gestiona absolutamente todo',
      'Solo la factura mensual'
    ],
    answer: 1,
    exp: 'En IaaS el proveedor cubre física, red y virtualización; el cliente es responsable del SO, parches, aplicaciones, datos y accesos. En SaaS esa responsabilidad se traslada casi por completo al proveedor.'
  },
  {
    id: 'cloud-04', module: 'cloud', topic: 'Arquitectura en nube',
    q: '¿Qué es una zona de disponibilidad (Availability Zone)?',
    options: [
      'Una región geográfica completa con varios datacenters',
      'Un dominio de fallo aislado dentro de una región, normalmente con energía y red independientes',
      'Una carpeta en el portal de facturación',
      'Un tipo de máquina virtual'
    ],
    answer: 1,
    exp: 'Las AZ son datacenters lógicamente independientes dentro de una región; distribuir recursos en varias AZ permite tolerar la caída de una sola sin afectar el servicio.'
  },
  {
    id: 'cloud-05', module: 'cloud', topic: 'Alta disponibilidad y DR',
    q: 'Desplegar la aplicación en varias zonas de disponibilidad de una región busca principalmente:',
    options: [
      'Reducir costos eliminando servidores',
      'Alta disponibilidad ante la caída de una AZ',
      'Cumplir con la normativa de protección de datos automáticamente',
      'Evitar por completo la necesidad de backups'
    ],
    answer: 1,
    exp: 'Multi-AZ da tolerancia a fallos dentro de la región (HA). La recuperación ante desastres a nivel de región (multi-región) es un objetivo de RPO/RTO distinto y más costoso.'
  },
  {
    id: 'cloud-06', module: 'cloud', topic: 'Economía de la nube',
    q: 'Migrar de compras de hardware (CapEx) a servicios consumidos por uso (OpEx) significa:',
    options: [
      'Que el costo total siempre será menor',
      'Que el gasto pasa a ser un gasto operativo variable ligado al consumo, sin inversión inicial de hardware',
      'Que ya no se necesitan planes de capacidad',
      'Que los datos dejan de estar bajo tu control'
    ],
    answer: 1,
    exp: 'La nube convierte la inversión inicial en un gasto variable según consumo. No garantiza menor costo: sin gobernanza y ajuste de tamaño (right-sizing) el gasto puede crecer descontrolado.'
  },
  {
    id: 'cloud-07', module: 'cloud', topic: 'Economía de la nube',
    q: 'El auto scaling permite:',
    options: [
      'Ajustar automáticamente la cantidad de recursos según la demanda',
      'Cambiar de proveedor de nube sin migrar datos',
      'Eliminar la necesidad de monitoreo',
      'Aumentar el precio fijo de la suscripción'
    ],
    answer: 0,
    exp: 'Las políticas de auto scaling agregan o retiran instancias según métricas (CPU, cola de mensajes), manteniendo el rendimiento y evitando pagar capacidad ociosa.'
  },
  {
    id: 'cloud-08', module: 'cloud', topic: 'Economía de la nube',
    q: 'Para workloads estables y predecibles a largo plazo, ¿qué opción suele reducir el costo?',
    options: [
      'Pagar siempre tarifa por uso sin compromiso',
      'Instancias reservadas o compromisos de uso de uno a tres años',
      'Dejar las máquinas encendidas sin monitoreo',
      'Usar la región más cara por confiabilidad'
    ],
    answer: 1,
    exp: 'Los compromisos de uso (reserved/committed use) ofrecen descuentos significativos a cambio de comprometerse a un uso sostenido; para cargas variables sigue conviniendo la tarifa estándar o las instancias interrumpibles.'
  },
  {
    id: 'cloud-09', module: 'cloud', topic: 'Almacenamiento en nube',
    q: '¿Para qué sirve la jerarquía de tipos de almacenamiento (hot/cool/archive)?',
    options: [
      'Para cifrar los datos automáticamente',
      'Para equilibrar costo y frecuencia de acceso: datos accedidos poco se archivan más barato',
      'Para aumentar la latencia de las consultas',
      'Para reemplazar la gestión de identidad'
    ],
    answer: 1,
    exp: 'Mover datos fríos a capas de menor costo (con mayor latencia de recuperación y, a veces, tiempo mínimo de permanencia) reduce el gasto sin perder la disponibilidad del dato.'
  },
  {
    id: 'cloud-10', module: 'cloud', topic: 'Migración',
    q: 'En la estrategia de migración conocida como las 6R, "rehost" significa:',
    options: [
      'Migrar "tal cual" las cargas a la nube sin cambios (lift and shift)',
      'Rediseñar la aplicación nativa para la nube',
      'Apagar la aplicación y no migrarla',
      'Reescribir todo el código en otro lenguaje'
    ],
    answer: 0,
    exp: 'Rehost es movimiento directo; replatform aplica ajustes puntuales (base de datos gestionada, runtime), refactor rediseña para aprovechar servicios nativos. Cada R tiene distinto esfuerzo y beneficio.'
  },
  {
    id: 'cloud-11', module: 'cloud', topic: 'Gobernanza y costos',
    q: 'Etiquetar (tag) los recursos en la nube sirve principalmente para:',
    options: [
      'Acelerar el arranque de las máquinas virtuales',
      'Identificar propiedad, proyecto y entorno para asignar costos y aplicar políticas',
      'Cifrar automáticamente los volúmenes',
      'Reemplazar los backups'
    ],
    answer: 1,
    exp: 'Las etiquetas permiten desglosar la factura por equipo o proyecto, aplicar reglas de gobernanza (apagado fuera de horario, regiones permitidas) y detectar recursos huérfanos.'
  },
  {
    id: 'cloud-12', module: 'cloud', topic: 'Conectividad híbrida',
    q: '¿Cuál es la ventaja de una conexión dedicada privada (circuito dedicado) entre el datacenter y la nube frente a una VPN por internet?',
    options: [
      'Elimina por completo la necesidad de cifrar la información',
      'Ofrece mayor ancho de banda, latencia más estable y tráfico predecible sin traversar internet público',
      'No requiere configuración de red alguna',
      'Es siempre más barato que una VPN'
    ],
    answer: 1,
    exp: 'El circuito dedicado (por ejemplo, ExpressRoute en Azure o Direct Connect en AWS) da conectividad privada y consistente; la VPN cifrada por internet sigue siendo válida como opción económica o de respaldo, y los datos igualmente deben cifrarse.'
  },

  /* ---------------------------------------------------------
     MÓDULO 4 · COMUNICACIONES UNIFICADAS Y CCTV IP
     --------------------------------------------------------- */
  {
    id: 'uc-01', module: 'uc', topic: 'Voz sobre IP',
    q: 'En telefonía sobre IP, SIP y RTP cumplen funciones distintas: SIP es...',
    options: [
      'El protocolo de señalización que establece, modifica y finaliza las sesiones',
      'El protocolo que transporta el audio una vez establecida la llamada',
      'El algoritmo de compresión de video',
      'El protocolo de enrutamiento de la red LAN'
    ],
    answer: 0,
    exp: 'SIP se encarga de la señalización (quién llama a quién, negociación), mientras que el audio viaja en RTP, normalmente sobre UDP, minimizando la latencia.'
  },
  {
    id: 'uc-02', module: 'uc', topic: 'Calidad de servicio',
    q: 'Para que la voz suene clara en una red con otros tráficos, se prioriza el tráfico de voz mediante:',
    options: [
      'Aumentar el volumen del altavoz',
      'Calidad de servicio (QoS) marcando paquetes con DSCP, p. ej. Expedited Forwarding para voz',
      'Desactivar el cifrado de la red',
      'Usar siempre WiFi en lugar de cable'
    ],
    answer: 1,
    exp: 'Con QoS se marca y programa el tráfico de voz para que los switches y routers lo encolen con prioridad, reduciendo jitter, latencia y pérdida de paquetes que degradan la conversación.'
  },
  {
    id: 'uc-03', module: 'uc', topic: 'Voz sobre IP',
    q: '¿Por qué las llamadas de voz usan codecs?',
    options: [
      'Para comprimir el audio y reducir el ancho de banda consumido por llamada',
      'Para asignar direcciones IP a los teléfonos',
      'Para cifrar la red LAN',
      'Para grabar el video de la reunión'
    ],
    answer: 0,
    exp: 'Codecs como G.711 (mayor calidad, más ancho de banda, del orden de 80-90 kbps por llamada con cabeceras) o G.729 (más eficiente) convierten el audio en paquetes y lo comprimen; la elección equilibra calidad, ancho de banda y latencia.'
  },
  {
    id: 'uc-04', module: 'uc', topic: 'CCTV IP',
    q: 'La tecnología PoE (Power over Ethernet) en cámaras IP permite:',
    options: [
      'Alimentar la cámara y llevar los datos por el mismo cable de red',
      'Aumentar la resolución del sensor automáticamente',
      'Sustituir al sistema de grabación',
      'Cifrar el video en el cable coaxial'
    ],
    answer: 0,
    exp: 'Los estándares IEEE 802.3af/at/bt entregan energía por el cable Ethernet, lo que simplifica instalación y permite respaldo de alimentación centralizado en el switch o inyector PoE.'
  },
  {
    id: 'uc-05', module: 'uc', topic: 'CCTV IP',
    q: 'Si se pasa de H.264 a H.265 en las cámaras, el efecto esperado es:',
    options: [
      'Consumir más ancho de banda para la misma calidad',
      'Obtener calidad similar con menor bitrate y menos almacenamiento',
      'Eliminar la necesidad de discos',
      'Aumentar la latencia de la red LAN'
    ],
    answer: 1,
    exp: 'H.265 (HEVC) comprime más eficientemente que H.264, reduciendo bitrate y espacio de grabación; conviene validar compatibilidad del VMS y del equipo de grabación.'
  },
  {
    id: 'uc-06', module: 'uc', topic: 'CCTV IP',
    q: '¿Qué es un VMS (Video Management System)?',
    options: [
      'El software que administra cámaras, grabación, reproducción y búsqueda de video',
      'Un tipo de switch para cámaras',
      'El lente de la cámara',
      'Un protocolo de compresión de video'
    ],
    answer: 0,
    exp: 'El VMS es la plataforma de gestión: descubre cámaras, programa grabaciones, permite visualización en vivo, búsqueda por evento y exportación de evidencia, con control de usuarios y retención.'
  },
  {
    id: 'uc-07', module: 'uc', topic: 'CCTV IP',
    q: 'Un NVR (Network Video Recorder) frente a un DVR se caracteriza porque:',
    options: [
      'El NVR trabaja con cámaras IP ya digitalizadas; el DVR incorpora la captura de cámaras analógicas',
      'El NVR solo graba en cinta',
      'El DVR no necesita discos',
      'Ambos son exactamente lo mismo'
    ],
    answer: 0,
    exp: 'En sistemas modernos IP el NVR recibe el stream de las cámaras por red; el DVR integra el codificador para cámaras analógicas. La tendencia es arquitecturas IP con grabación distribuida o en la nube.'
  },
  {
    id: 'uc-08', module: 'uc', topic: 'CCTV IP',
    q: 'Alrededor de la grabación de video, una buena práctica de resiliencia es:',
    options: [
      'Confiar en que un único grabador nunca fallará',
      'Usar discos en RAID, replicar la grabación y definir retención según la normativa',
      'Grabar sin respaldo para ahorrar discos',
      'Aumentar la resolución de todas las cámaras sin medir ancho de banda'
    ],
    answer: 1,
    exp: 'La redundancia de almacenamiento (RAID), la copia de evidencia a otro sitio y una retención definida por política garantizan que el video siga disponible cuando se necesite, sin saturar la red.'
  },
  {
    id: 'uc-09', module: 'uc', topic: 'Comunicaciones unificadas',
    q: 'Las comunicaciones unificadas (UC) integran principalmente:',
    options: [
      'Voz, video, mensajería, presencia y colaboración en una sola experiencia',
      'Solo correos impresos',
      'Solo cámaras de seguridad',
      'Solo redes inalámbricas'
    ],
    answer: 0,
    exp: 'UC combina telefonía, videollamadas, chat, presencia y compartir contenido, permitiendo pasar de un canal a otro durante la conversación y trabajando desde distintos dispositivos.'
  },
  {
    id: 'uc-10', module: 'uc', topic: 'CCTV IP',
    q: 'Al diseñar una red para cámaras IP, es importante:',
    options: [
      'Medir el ancho de banda y el storage según resolución, cantidad de cámaras, fps y días de retención',
      'Conectar todas las cámaras al switch de oficina sin planificación',
      'Usar siempre la resolución máxima sin calcular el impacto',
      'Evitar el uso de VLANs en la red de video'
    ],
    answer: 0,
    exp: 'El dimensionamiento parte del bitrate por cámara (resolución, compresión, fps), el número de cámaras, la retención requerida y el consumo PoE; de ahí se define switches, discos y política de red.'
  },

  /* ---------------------------------------------------------
     MÓDULO 5 · PROTECCIÓN DE DATOS Y BACKUP
     --------------------------------------------------------- */
  {
    id: 'data-01', module: 'data', topic: 'Estrategia de respaldo',
    q: 'La regla 3-2-1 de respaldos significa:',
    options: [
      '3 copias de los datos, en 2 medios distintos, 1 copia fuera del sitio (idealmente inmutable)',
      '3 servidores, 2 switches, 1 cortafuegos',
      '3 administradores, 2 backups diarios, 1 auditoría',
      '3 regiones de nube, 2 usuarios, 1 contraseña'
    ],
    answer: 0,
    exp: 'La regla garantiza recuperación ante falla de un medio, de un sitio o de un ataque; la copia inmutable o air-gapped protege frente a ransomware que cifra las copias accesibles.'
  },
  {
    id: 'data-02', module: 'data', topic: 'RPO y RTO',
    q: 'Si el requisito de negocio es perder como máximo 15 minutos de datos, estamos hablando de:',
    options: [
      'RTO',
      'RPO',
      'SLA de disponibilidad del proveedor de nube',
      'MTTR'
    ],
    answer: 1,
    exp: 'El RPO define cuánta pérdida de datos es aceptable (frecuencia de respaldo/replicación). El RTO define cuánto tiempo puede estar caído el servicio antes de restaurarse.'
  },
  {
    id: 'data-03', module: 'data', topic: 'RPO y RTO',
    q: 'El RTO (Recovery Time Objective) corresponde a:',
    options: [
      'La cantidad máxima de datos que se puede perder',
      'El tiempo máximo aceptable para restaurar el servicio después de una interrupción',
      'El número de copias de seguridad requeridas',
      'El tiempo de garantía del fabricante del servidor'
    ],
    answer: 1,
    exp: 'RTO mide la duración aceptable de la interrupción; de él se derivan decisiones como replicación en caliente (RTO bajo) frente a restauración desde cinta (RTO mayor).'
  },
  {
    id: 'data-04', module: 'data', topic: 'Tipos de respaldo',
    q: 'En un respaldo incremental, se copia:',
    options: [
      'Todos los datos en cada ejecución, sin importar cambios',
      'Solo los datos modificados desde el último respaldo (completo o incremental)',
      'Los archivos eliminados del sistema',
      'Únicamente las configuraciones del sistema'
    ],
    answer: 1,
    exp: 'El incremental es rápido y ligero, pero restaurar requiere la base más las incrementales posteriores. El diferencial copia todo lo cambiado desde el último completo, lo que simplifica la restauración a costa de crecer más.'
  },
  {
    id: 'data-05', module: 'data', topic: 'Ransomware',
    q: '¿Por qué las copias inmutables son clave contra el ransomware?',
    options: [
      'Porque cifran los datos con una clave secreta',
      'Porque no pueden ser modificadas ni eliminadas durante un periodo, ni siquiera con credenciales administrativas',
      'Porque se guardan solo en papel',
      'Porque eliminan los virus automáticamente'
    ],
    answer: 1,
    exp: 'La inmutabilidad (WORM o políticas de bloqueo de objetos) impide que un atacante con credenciales cifre o borre las copias, permitiendo restaurar desde una versión limpia.'
  },
  {
    id: 'data-06', module: 'data', topic: 'Replicación',
    q: 'La replicación síncrona se diferencia de la asincrónica en que:',
    options: [
      'La síncrona confirma la escritura solo tras replicar al sitio remoto (RPO cercano a cero, mayor latencia)',
      'La síncrona nunca replica los datos',
      'La asincróna exige que ambos sitios estén en la misma sala',
      'Ambas ofrecen idéntico RPO siempre'
    ],
    answer: 0,
    exp: 'La síncrona da cero pérdida de datos a costa de latencia entre sitios (distancias cortas); la asincrónica es más tolerante a distancia pero permite cierta pérdida según el intervalo de replicación.'
  },
  {
    id: 'data-07', module: 'data', topic: 'Validación',
    q: 'La práctica más importante para confiar en un plan de respaldo es:',
    options: [
      'Hacer copias todos los días sin probarlas',
      'Ejecutar pruebas periódicas de restauración y documentar los tiempos obtenidos',
      'Guardar todas las copias en el mismo servidor',
      'Depender del estado "completado" del software'
    ],
    answer: 1,
    exp: 'Un respaldo no probado no cuenta como respaldo: las pruebas de restauración verifican integridad, tiempos reales y cumplimiento del RPO/RTO, y revelan problemas antes del incidente.'
  },
  {
    id: 'data-08', module: 'data', topic: 'Retención',
    q: 'Definir la política de retención de copias busca:',
    options: [
      'Guardar todas las copias indefinidamente para máxima seguridad',
      'Conservar los datos el tiempo exigido por negocio y normativa, y eliminar lo que ya no se necesita',
      'Reducir el número de servidores',
      'Evitar el cifrado de las copias'
    ],
    answer: 1,
    exp: 'La retención equilibra requisitos legales y de negocio con el costo de almacenamiento y el riesgo de conservar datos obsoletos; en nube existen life-cycle policies que automatizan el ciclo.'
  },
  {
    id: 'data-09', module: 'data', topic: 'Backup multinube',
    q: 'En una estrategia de protección de datos multinube, es fundamental:',
    options: [
      'Usar la misma herramienta sin importar el proveedor',
      'Definir políticas por aplicación con RPO/RTO claros, copias inmutables y prueba de restauración en cada entorno',
      'Respaldar solo lo que está en la nube pública',
      'Evitar guardar copias fuera de la región'
    ],
    answer: 1,
    exp: 'Cada entorno (on-premise, Azure, AWS, GCP) tiene capacidades distintas; una política única y verificable con inmutabilidad y pruebas garantiza recuperación consistente y control de costos.'
  },

  /* ---------------------------------------------------------
     MÓDULO 6 · GESTIÓN DE PROYECTOS PMI
     --------------------------------------------------------- */
  {
    id: 'pm-01', module: 'pm', topic: 'Marco PMI',
    q: 'Los cinco grupos de procesos del PMBOK son:',
    options: [
      'Iniciar, Planificar, Ejecutar, Monitorear y Controlar, Cerrar',
      'Analizar, Diseñar, Construir, Probar, Entregar',
      'Ventas, Soporte, Finanzas, Recursos Humanos, Legal',
      'Alta, Baja, Media, Crítica, Cerrada'
    ],
    answer: 0,
    exp: 'Son los grupos que enmarcan el ciclo de vida: se inicia el proyecto, se planifica el trabajo, se ejecuta, se monitorea y controla frente a la línea base, y se cierran las fases o el proyecto.'
  },
  {
    id: 'pm-02', module: 'pm', topic: 'Restricciones',
    q: 'El triángulo de restricciones del proyecto relaciona:',
    options: [
      'Alcance, tiempo (cronograma) y costo, con calidad como eje central',
      'Riesgo, calidad y comunicación',
      'Proveedores, clientes y competencia',
      'Hardware, software y red'
    ],
    answer: 0,
    exp: 'Cambiar un vértice afecta a los demás: ampliar el alcance sin más tiempo o costo compromete la calidad; por eso los cambios se gestionan mediante el control integrado de cambios.'
  },
  {
    id: 'pm-03', module: 'pm', topic: 'Stakeholders',
    q: 'La matriz RACI sirve para:',
    options: [
      'Definir roles: quién Responde, quién es Aprobador/Acargo, quién Consulta y quién es Informado',
      'Medir el rendimiento de la red',
      'Calcular el costo de los servidores',
      'Priorizar vulnerabilidades'
    ],
    answer: 0,
    exp: 'RACI aclara responsabilidades por actividad, evita ambigüedades y conflictos entre áreas, y es una herramienta clave de comunicación con los interesados.'
  },
  {
    id: 'pm-04', module: 'pm', topic: 'Riesgos',
    q: 'En la evaluación cualitativa de riesgos se clasifica cada riesgo por:',
    options: [
      'Probabilidad e impacto, usando una matriz de prioridad',
      'Solo por el costo del riesgo',
      'El color de la sala del proyecto',
      'El número de participantes del proyecto'
    ],
    answer: 0,
    exp: 'La matriz probabilidad × impacto prioriza los riesgos; sobre los de mayor prioridad se definen respuestas (evitar, transferir, mitigar, aceptar) y responsables en el registro de riesgos.'
  },
  {
    id: 'pm-05', module: 'pm', topic: 'Alcance',
    q: 'La línea base de alcance sirve para:',
    options: [
      'Definir el trabajo confirmado contra el cual se miden los cambios y el desempeño',
      'Fijar el precio de venta al cliente',
      'Seleccionar la marca de los servidores',
      'Determinar la disponibilidad del datacenter'
    ],
    answer: 0,
    exp: 'La línea base (WBS + diccionario de alcance) es la referencia del control de cambios: cualquier ampliación debe pasar por el proceso formal, con impacto en tiempo y costo evaluado.'
  },
  {
    id: 'pm-06', module: 'pm', topic: 'Cronograma',
    q: 'La ruta crítica de un proyecto es:',
    options: [
      'La secuencia de actividades de mayor duración que determina la fecha final más temprana',
      'La lista de tareas menos importantes',
      'El camino de red más rápido del datacenter',
      'El orden alfabético de las actividades'
    ],
    answer: 0,
    exp: 'La ruta crítica no tiene holgura: retrasar una actividad de la ruta crítica retrasa todo el proyecto, por lo que es el foco del monitoreo del cronograma.'
  },
  {
    id: 'pm-07', module: 'pm', topic: 'Costos',
    q: 'La reserva de contingencia en el presupuesto se destina a:',
    options: [
      'Riesgos identificados con respuesta definida (eventos conocidos en el registro)',
      'Sobrecostos no previstos por mala gestión',
      'Bonificaciones al equipo',
      'Impuestos de la organización'
    ],
    answer: 0,
    exp: 'La contingencia cubre riesgos identificados (estimados con la técnica de reserva) y suele estar bajo control del equipo; los imprevistos por mala planificación no deben cubrirse con ella.'
  },
  {
    id: 'pm-08', module: 'pm', topic: 'Cierre',
    q: 'Al cerrar el proyecto es importante:',
    options: [
      'Documentar las lecciones aprendidas, confirmar el alcance entregado y archivar los registros',
      'Cancelar todas las comunicaciones con el cliente',
      'Cerrar contratos sin verificar entregables',
      'Omitir la retroalimentación del cliente'
    ],
    answer: 0,
    exp: 'El cierre valida los entregables con el cliente, libera recursos, cierra contratos y recoge lecciones aprendidas que alimentan la mejora continua de la organización.'
  },
  {
    id: 'pm-09', module: 'pm', topic: 'Comunicación',
    q: 'En un proyecto de infraestructura, la comunicación con stakeholders debe ser:',
    options: [
      'Definida en un plan con frecuencia, canal, responsable y destinatarios',
      'Solo escrita y una sola vez al inicio',
      'Espontánea, según el ánimo del gestor',
      'Únicamente verbal entre los técnicos'
    ],
    answer: 0,
    exp: 'La gestión de la comunicación planifica qué, cuándo, cómo y quién informa; así se evitan malentendidos de alcance y se mantiene alineadas a las partes interesadas.'
  },

  /* ---------------------------------------------------------
     MÓDULO 7 · PROPUESTAS TÉCNICAS Y ECONÓMICAS
     --------------------------------------------------------- */
  {
    id: 'bid-01', module: 'bid', topic: 'Estructura de propuesta',
    q: 'Una propuesta técnica bien estructurada debe incluir:',
    options: [
      'Solución propuesta, arquitectura, alcance, supuestos, exclusiones, plan de implementación y matriz de cumplimiento',
      'Solo el precio final',
      'La biografía del vendedor y nada más',
      'Capturas de pantalla del producto'
    ],
    answer: 0,
    exp: 'La propuesta técnica demuestra que se entendió el requerimiento y cómo se cumple; los supuestos y exclusiones delimitan la responsabilidad y evitan disputas posteriores.'
  },
  {
    id: 'bid-02', module: 'bid', topic: 'Alcance',
    q: 'Listar explícitamente las "exclusiones" en una propuesta busca:',
    options: [
      'Reducir el precio a costa del cliente',
      'Dejar claro qué NO está incluido, evitando expectativas erróneas y reclamos futuros',
      'Ocultar riesgos del proyecto',
      'Cumplir un requisito estético'
    ],
    answer: 1,
    exp: 'Las exclusiones (p. ej. migración de datos, obra civil, licencias de terceros) proteben a ambas partes y hacen que la comparación entre ofertas sea justa.'
  },
  {
    id: 'bid-03', module: 'bid', topic: 'Componente económico',
    q: 'La lista de materiales (BOM) en el componente económico debe detallar:',
    options: [
      'Equipos, licencias, cantidades, unidad de medida, precio unitario y total',
      'Solo el total a pagar',
      'El nombre comercial sin cantidades',
      'Los datos de contacto del cliente'
    ],
    answer: 0,
    exp: 'Una BOM trazable permite auditar el costo, aplicar descuentos por volumen, verificar el alcance técnico y reutilizarse en etapas de adquisición o soporte.'
  },
  {
    id: 'bid-04', module: 'bid', topic: 'TCO',
    q: 'El TCO (Costo Total de Propiedad) incluye:',
    options: [
      'Solo el precio de compra del hardware',
      'Compra, licencias, implementación, soporte, energía, operación, actualizaciones y fin de vida útil',
      'Únicamente el IVA del producto',
      'El precio de lista sin descuentos'
    ],
    answer: 1,
    exp: 'El TCO mide el costo durante todo el ciclo de vida; comparar solo el precio inicial suele llevar a decisiones equivocadas frente a alternativas con menor costo operativo.'
  },
  {
    id: 'bid-05', module: 'bid', topic: 'Servicios',
    q: 'El costo de servicios en una propuesta se calcula normalmente considerando:',
    options: [
      'Tipo de servicio, horas o días requeridos, tarifa por recurso e imprevistos o gestión de riesgos',
      'Solo el número de servidores',
      'El número de usuarios finales',
      'El color de la interfaz del producto'
    ],
    answer: 0,
    exp: 'Las bolsas de horas (implementación, configuración, gestión de proyecto, soporte) multiplican cantidad por tarifa; incluir partidas de imprevistos y gestión da realismo al costo.'
  },
  {
    id: 'bid-06', module: 'bid', topic: 'Evaluación',
    q: 'Una matriz de cumplimiento de requisitos permite:',
    options: [
      'Marcar punto por punto si la solución cumple cada requisito, con evidencia o referencia del documento',
      'Sustituir la revisión técnica del cliente',
      'Calcular automáticamente el descuento final',
      'Omitir los supuestos de la propuesta'
    ],
    answer: 0,
    exp: 'Facilita la evaluación objetiva del comité, muestra trazabilidad entre requerimiento y solución y reduce el riesgo de ofertas descalificadas por omisiones.'
  },
  {
    id: 'bid-07', module: 'bid', topic: 'Riesgos de propuesta',
    q: 'Incluir los supuestos en la propuesta es importante porque:',
    options: [
      'Permite condicionar la oferta a datos o condiciones verificables y asignar riesgos a quien los controla',
      'Sirve para alargar el documento',
      'Evita tener que describir la solución',
      'Reduce la necesidad de un SLA'
    ],
    answer: 0,
    exp: 'Supuestos como disponibilidad de enlaces, ventanas de mantenimiento o entrega de credenciales del cliente dejan claras las bases de precio y plazo; si el supuesto falla, el cambio se gestiona formalmente.'
  },
  {
    id: 'bid-08', module: 'bid', topic: 'SLA',
    q: 'Un SLA (Acuerdo de Nivel de Servicio) en una propuesta debe contener:',
    options: [
      'Métricas medibles (disponibilidad, tiempos de respuesta), frecuencia de reporte y consecuencias del incumplimiento',
      'Solo una promesa verbal de buen servicio',
      'El nombre del gerente comercial',
      'La marca de los equipos'
    ],
    answer: 0,
    exp: 'Un SLA útil es cuantificable y verificable (p. ej. disponibilidad mensual, tiempo de atención por prioridad), con reportes periódicos y mecanismos de escalamiento o créditos por incumplimiento.'
  },
  {
    id: 'bid-09', module: 'bid', topic: 'Precio',
    q: 'Al armar el componente económico, el precio final al cliente se obtiene a partir de:',
    options: [
      'Precio de lista, descuentos aplicables, impuestos, costos de servicios y el margen objetivo',
      'Solo el precio de lista del fabricante',
      'El presupuesto disponible del cliente sin costo propio',
      'Un número aleatorio de referencia'
    ],
    answer: 0,
    exp: 'La estructura típica parte del precio de lista, aplica descuentos comerciales, suma servicios e impuestos y define el margen, manteniendo coherencia con el TCO presentado.'
  }
];
