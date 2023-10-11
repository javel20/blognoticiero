INSERT INTO tipo_noticia(nombre_not) VALUE('Noticias locales');
INSERT INTO tipo_noticia(nombre_not) VALUE('Noticias nacionales');
INSERT INTO tipo_noticia(nombre_not) VALUE('Noticias internacionales');
INSERT INTO tipo_noticia(nombre_not) VALUE('Noticias de entretenimiento');
INSERT INTO tipo_noticia(nombre_not) VALUE('Noticias deportivas');
INSERT INTO tipo_noticia(nombre_not) VALUE('Noticias de tecnología');

INSERT INTO tipo_usuario(nombre_tipous,estado_tipous) VALUE('Admninstrador','Activo');
INSERT INTO tipo_usuario(nombre_tipous,estado_tipous) VALUE('Moderador','Activo');
INSERT INTO tipo_usuario(nombre_tipous,estado_tipous) VALUE('Invitado','Activo');
INSERT INTO tipo_usuario(nombre_tipous,estado_tipous) VALUE('Editor','Activo');
INSERT INTO tipo_usuario(nombre_tipous,estado_tipous) VALUE('Verificador','Activo');
INSERT INTO tipo_usuario(nombre_tipous,estado_tipous) VALUE('Soporte','Activo');

INSERT INTO usuario(id_tipo_usuario,nombre_usuario,correo,contraseña,fecha,estado_usuario) VALUE(4,'admin','admin@gmail.com','$2y$10$VZLlWp2ZlFmFGWZPdLAiY.IxFzKPicyD.KAA8KDUi21YW1RP1kgkq',2023-08-25,'Activo');

INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(6,1,'Clonación de perros resultan conejos','humanos y animales full sex','sdfd/dfs/egrth',2023-08-25,'Activo');
INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(6,1,'mostruocidad elmer y caillou','aparece una bestia incomparable','sdfd/dfs/egrth',2023/08/16,'Activo');
INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(6,2,'Las princesas','en la selva se da el desfile de las princesas con sorpresa','sdfd/dfs/egrth',2023-08-25,'Activo');
INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(6,3,'Última hora del conflicto en Israel y Gaza en vivo','noticias de Hamas y más',2023-08-25,'Activo');
INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(6,3,'Temblor hoy en México: noticias actividad sísmica',' 9 de octubre de 2023','sdfd/dfs/egrth',2023-08-25,'Activo');
INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(6,3,'China ha autorizado el suministro de carne de cerdo',' procedente de Rusia','sdfd/dfs/egrth',2023-08-25,'Activo');
INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(6,3,'Guerra Israel - Palestina, en directo','última hora de los muertos, noticias de la franja de Gaza y los ataques de Hamás','sdfd/dfs/egrth',2023-08-25,'Activo');
INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(6,3,'EEUU: Empleados de Mack Trucks','rechazan propuesta y se van a huelga','sdfd/dfs/egrth',2023-08-25,'Activo');
INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(6,3,'◉ RIVER HOY: la palabra de Demichelis sobre el Superclásico','la deuda pendiente que saldó y últimas noticias','sdfd/dfs/egrth',2023-08-25,'Activo');
INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(6,3,'La tormenta tropical Lidia ','avanza rumbo a México','sdfd/dfs/egrth',2023-08-25,'Activo');
INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(6,3,'Rata de Nueva York sale del capó de un auto que se dirigía a una boda','ouhopiehjf iwpe opujwpeouwpeofu opuiwpofuwpef','sdfd/dfs/egrth',2023-08-25,'Activo');
INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(6,3,'En esta aula clandestina desafían la prohibición de la educación femenina del Talibán','ouhopiehjf iwpe opujwpeouwpeofu opuiwpofuwpef','sdfd/dfs/egrth',2023-08-25,'Activo');
INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(6,3,'¿Qué es un eclipse anular de Sol y cómo protegerse la vista?','ouhopiehjf iwpe opujwpeouwpeofu opuiwpofuwpef','sdfd/dfs/egrth',2023-08-25,'Activo');
INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(6,3,'Mueren 2 rescatistas luego de trágico derrumbe en Cuba','ouhopiehjf iwpe opujwpeouwpeofu opuiwpofuwpef','sdfd/dfs/egrth',2023-08-25,'Activo');
INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(13,3,'Detective sugiere relación entre las muertes de Shakur y Biggie Smalls','ouhopiehjf iwpe opujwpeouwpeofu opuiwpofuwpef','sdfd/dfs/egrth',2023-08-25,'Activo');
INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(13,3,'Remueven a funcionarios en Ecuador tras muerte violenta de 7 reos','ouhopiehjf iwpe opujwpeouwpeofu opuiwpofuwpef','sdfd/dfs/egrth',2023-08-25,'Activo');
INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(13,3,'Equipo de CNN se resguarda de ataques cerca de frontera Gaza-Israel','ouhopiehjf iwpe opujwpeouwpeofu opuiwpofuwpef','sdfd/dfs/egrth',2023-08-25,'Activo');
INSERT INTO noticia(id_usuario,id_tipo_noticia,titulo,descripcion,imagen,fecha,estado_noticia) VALUE(14,3,'5 cosas: Israel declara la guerra a Hamas','ouhopiehjf iwpe opujwpeouwpeofu opuiwpofuwpef','sdfd/dfs/egrth',2023-08-25,'Activo');


SELECT * FROM noticia;
SELECT * FROM usuario
SELECT * FROM tipo_usuario
SELECT * FROM tipo_noticia

SELECT * 
FROM noticia
INNER JOIN tipo_noticia ON tipo_noticia.id_tipo_noticia=noticia.id_tipo_noticia

-- noticia por fecha
SELECT * FROM noticia
INNER JOIN usuario ON noticia.id_usuario = usuario.id_usuario
INNER JOIN tipo_noticia ON tipo_noticia.id_tipo_noticia = noticia.id_tipo_noticia 
WHERE estado_noticia='Activo' AND DATE_FORMAT(noticia.fecha,"%Y-%m-%d") = '2023-10-03'


-- noticias por usuario
SELECT * FROM usuario
INNER JOIN noticia ON noticia.id_usuario=usuario.id_usuario
WHERE estado_noticia='Activo' AND  usuario.id_usuario=6


SELECT imagen FROM noticia WHERE id = 6
