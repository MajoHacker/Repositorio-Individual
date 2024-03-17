USE RICARDO
SELECT * FROM materiales;
SELECT * FROM materiales WHERE clave=1000;
SELECT clave,rfc,fecha FROM entregan;
SELECT * FROM materiales,entregan WHERE materiales.clave = entregan.clave;
SELECT * FROM entregan E, proyectos P WHERE E.Numero <= P.Numero;
(SELECT * FROM entregan WHERE clave=1450) UNION (SELECT * FROM entregan WHERE clave=1300);
SELECT * FROM entregan WHERE clave = 1450 OR clave = 1300;
SELECT clave FROM entregan WHERE numero = 5001 AND clave IN (SELECT clave FROM entregan WHERE numero = 5018);
SELECT * FROM entregan WHERE clave != 1000;
SELECT * FROM entregan,materiales;
SELECT DISTINCT descripcion
FROM materiales AS m
JOIN entregan AS e
ON m.clave = e.clave
WHERE YEAR(e.fecha) = 2000;
SELECT P.Numero, P.Denominacion, E.Fecha, E.Cantidad
FROM Proyectos P
INNER JOIN Entregan E on P.Numero = E.Numero
ORDER BY P.Numero, E.Fecha desc;
SELECT *
FROM materiales
WHERE descripcion LIKE 'Si%'
SELECT *
FROM materiales
WHERE descripcion LIKE 'Si'
SELECT Clave,RFC,Numero,Fecha,Cantidad 
FROM Entregan 
WHERE Numero Between 5000 AND 5010;

SELECT RFC,Cantidad, Fecha,Numero
FROM Entregan
WHERE Numero Between 5000 and 5010 AND
Exists ( SELECT RFC
FROM Proveedores
WHERE RazonSocial LIKE 'La%' and Entregan.RFC = Proveedores.RFC )

SELECT RFC,Cantidad, Fecha,Numero
FROM Entregan
WHERE Numero Between 5000 and 5010
AND RFC IN ( SELECT RFC
FROM Proveedores
WHERE RazonSocial LIKE 'La%' and
Entregan.RFC = Proveedores.RFC );

SELECT RFC, Cantidad, Fecha, Numero
FROM Entregan
WHERE Cantidad > ANY (
    SELECT Cantidad
    FROM Entregan
    WHERE RFC NOT IN (
        SELECT RFC
        FROM Proveedores
        WHERE RazonSocial LIKE 'La%'
    )
);

ALTER TABLE materiales ADD PorcentajeImpuesto NUMERIC(6,2);
UPDATE materiales SET PorcentajeImpuesto = 2*clave/1000;

SELECT SUM(precio) +
SUM(porcentajeimpuesto) AS 'Total'
FROM materiales AS m
JOIN entregan AS e
ON m.clave = e.clave

CREATE VIEW Vista2 (clave,
descripcion) AS
SELECT m.clave, descripcion
FROM materiales AS m
JOIN entregan AS e
ON m.clave = e.clave
JOIN proveedores AS p
ON e.rfc = p.rfc
WHERE p.razonsocial = 'Acme tools';

CREATE VIEW vista1 (clave,
descripcion) AS
SELECT m.clave, descripcion
FROM materiales AS m
JOIN entregan AS e
ON m.clave = e.clave
JOIN proyectos AS p
ON e.numero = p.numero
WHERE p.denominacion = 'México sin
ti no estamos completos';
SELECT * FROM vista1;

CREATE VIEW vista3 (rfc,
razonsocial) AS
SELECT p.rfc, p.razonsocial
FROM proveedores AS p
JOIN entregan AS e
ON p.rfc = e.rfc
WHERE YEAR(e.fecha) = 2000
AND e.numero >= 300
GROUP BY e.rfc;
SELECT * FROM vista3;

CREATE VIEW Vista4 (descripcion,
Piezasentregadas) AS
SELECT m.descripcion,
SUM(e.numero)
FROM materiales AS m
JOIN entregan AS e
ON m.clave = e.clave
WHERE YEAR(e.fecha) = 2000
GROUP BY m.descripcion;
SELECT * FROM Vista4

CREATE VIEW Vista05 (clave,
numero) AS
SELECT clave, numero
FROM entregan
WHERE YEAR(fecha) = 2001;
CREATE VIEW Vista5 (clave) AS
SELECT clave
FROM Vista05
ORDER BY numero DESC
LIMIT 1;
SELECT * FROM Vista5;

CREATE VIEW Vista6 (clave,
descripcion) AS
SELECT clave, descripcion
FROM materiales
WHERE descripcion LIKE '%ub%';
SELECT * FROM Vista6;


CREATE VIEW Vista7 (Denominacion,
Total) AS
SELECT p.denominacion,
SUM(m.precio)
FROM proyectos AS p
JOIN entregan AS e
ON p.numero = e.numero
JOIN materiales AS m
ON e.clave = m.clave
GROUP BY p.denominacion;
SELECT * FROM Vista7;


CREATE VIEW Vista08
(Denominacion, RFC, RazonSocial)
AS
SELECT pro.denominacion,
pr.rfc, pr.razonsocial
FROM proveedores AS pr
JOIN entregan AS e
ON pr.rfc = e.rfc
JOIN proyectos AS pro
ON e.numero = pro.numero
WHERE pro.denominacion =
'Educando en Coahuila';
SELECT * FROM Vista08;
CREATE VIEW Vista8 (Denominacion,
RFC, RazonSocial) AS
SELECT pro.denominacion,
pr.rfc, pr.razonsocial
FROM proveedores AS pr
JOIN entregan AS e
ON pr.rfc = e.rfc
JOIN proyectos AS pro
ON e.numero = pro.numero
WHERE pro.denominacion =
'Televisa en acción'
AND pro.denominacion NOT IN
(SELECT Denominacion FROM
Vista08);
SELECT * FROM Vista8;


SELECT m.precio, m.descripcion
FROM proveedores AS pr
JOIN entregan AS e
ON pr.rfc = e.rfc
JOIN proyectos AS pro
ON e.numero = pro.numero
JOIN materiales AS m
ON e.clave = m.clave
WHERE pro.denominacion =
'Televisa en acción'
AND pr.rfc IN (SELECT rfc FROM
Vista08);


SELECT pro.denominacion,
       pr.rfc,
       pr.razonsocial
FROM proveedores AS pr
JOIN entregan AS e ON pr.rfc = e.rfc
JOIN proyectos AS pro ON e.numero = pro.numero
WHERE pro.denominacion = 'Televisa en acción'
AND pro.denominacion NOT IN (
    SELECT pro2.denominacion
    FROM proveedores AS pr2
    JOIN entregan AS e2 ON pr2.rfc = e2.rfc
    JOIN proyectos AS pro2 ON e2.numero = pro2.numero
    WHERE pro2.denominacion = 'Educando en Coahuila'
);

CREATE VIEW Vista1 (clave,
descripcion) AS
SELECT m.clave, descripcion
FROM materiales AS m
JOIN entregan AS e
ON m.clave = e.clave
JOIN proyectos AS p
ON e.numero = p.numero
WHERE p.denominacion = 'México sin
ti no estamos completos';
SELECT * FROM Vista1;

SELECT m.clave, m.descripcion
FROM materiales AS m
JOIN entregan AS e ON m.clave = e.clave
JOIN proyectos AS p ON e.numero = p.numero
WHERE p.denominacion = 'México sin ti no estamos completos';




