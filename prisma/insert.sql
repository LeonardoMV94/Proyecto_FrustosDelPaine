INSERT INTO 'Clientes' ('id','rut','nombre','apellido','correo','celular','direccion_id')
VALUES
(1,19110552-4,'sebastian','munoz','correo@gmail.com,',923456785,1),
(2,19110552-4,'alan','riquelmez','correo2@gmail.com,',098822785,1),
(3,19110552-4,'sebastian','munoz','correo3@gmail.com,',1333456785,1);

#----------------------------------------------------------------------------------------------------#
INSERT INTO 'Proveedores'('id','rut','giro','nombre','telefono','correo','pagina_web','Direcciones_id')
VALUES
(1,'998887-9','giro En Deuda','semillasLaru','666999888','semillas@gmail.com','Xsemillas.com',1),
(2,'777777-9','En deuda','HuevosLaru','666333888','Huevos@gmail.com','Xhuevos.com',2),
(3,'666667-9','Completado','CompletosLaru','44444888','Completos@gmail.com','XCompletos.com',3);

#--------------------------------------------------------------------------------------#
INSERT INTO 'Colaboradores'('id','nombre','apellido','correo','celular','direccion_id')
VALUES
(1,'seba','munoz','seba@gmail.com','993493492',1),
(2,'jereklein','Gomez','jereklein@gmail.com','888773333',1),
(3,'jordan','23Perez','jordan23@gmail.com','66666666',1);

#---------------------------------------------------------#
INSERT INTO 'Tipos_Usuarios' ('id','tipo_usuario')
VALUES
(1,'administrador'),
(2,'Colaborador');

INSERT INTO 'Estado_pago' ('id','estado')
VALUES
(1,'En Proceso'),
(2,'Pendiente'),
(3,'Deuda');

INSERT INTO 'Metodo_Pago'('id','metodo')
VALUES
(1,'Debito'),
(2,'Efectivo');

INSERT INTO 'Detalle_pago'('id','monto_pagado','fecha','Metodo_Pago_id')
VALUES
(1,10.000,'00/00/00',2),
(1,5.000,'00/00/00',1),



INSERT INTO 'Usuarios' ('id','pass_encrypt','ultimo_login','Tipos_Usuarios_id','Colaboradores_id')
VALUES 
(1,'','',1,1);

INSERT INTO 'Categorias'('id','categoria')
VALUES(1,'semillas'),
       (2,'Huevos'),
       (3,'Pasas'),
       (4,'paltas'),

INSERT INTO 'Productos'('id','descripcion','peso_gramos','precio_neto','stock','cod_barras','Categorias_id')
VALUES
(1,'pasas rubias',500,30,383932,3),


INSERT INTO 'Detalle_venta' ('Producto_id','Venta_id','cantidad','precio_neto','precio_total_neto')
VALUES
()
#-------------------------------------------------------------------------------------------------------------#

INSERT INTO 'Direcciones'('id','calle','numero_calle','numero_departamento','comunas_id') 
VALUES 
(1,'anibal pinto',3234,000,77),
(2,'av.argentina',4545,000,77),
(3,'alijo Vera',9898,null,77);




