import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {

    const regiones = [
        {
            "id_region": 1,
            "nombre": "Arica y Parinacota",
            "ordinal": "XV"
        },
        {
            "id_region": 2,
            "nombre": "Tarapacá",
            "ordinal": "I"
        },
        {
            "id_region": 3,
            "nombre": "Antofagasta",
            "ordinal": "II"
        },
        {
            "id_region": 4,
            "nombre": "Atacama",
            "ordinal": "III"
        },
        {
            "id_region": 5,
            "nombre": "Coquimbo",
            "ordinal": "IV"
        },
        {
            "id_region": 6,
            "nombre": "Valparaiso",
            "ordinal": "V"
        },
        {
            "id_region": 7,
            "nombre": "Metropolitana de Santiago",
            "ordinal": "RM"
        },
        {
            "id_region": 8,
            "nombre": "Libertador General Bernardo OHiggins",
            "ordinal": "VI"
        },
        {
            "id_region": 9,
            "nombre": "Maule",
            "ordinal": "VII"
        },
        {
            "id_region": 10,
            "nombre": "Biobío",
            "ordinal": "VIII"
        },
        {
            "id_region": 11,
            "nombre": "La Araucanía",
            "ordinal": "IX"
        },
        {
            "id_region": 12,
            "nombre": "Los Ríos",
            "ordinal": "XIV"
        },
        {
            "id_region": 13,
            "nombre": "Los Lagos",
            "ordinal": "X"
        },
        {
            "id_region": 14,
            "nombre": "Aisén del General Carlos Ibáñez del Campo",
            "ordinal": "XI"
        },
        {
            "id_region": 15,
            "nombre": "Magallanes y de la Antártica Chilena",
            "ordinal": "XII"
        }
    ]

    const provincias = [
        {
            "id_provincia": 1,
            "nombre": "Arica",
            "region_id": 1
        },
        {
            "id_provincia": 2,
            "nombre": "Parinacota",
            "region_id": 1
        },
        {
            "id_provincia": 3,
            "nombre": "Iquique",
            "region_id": 2
        },
        {
            "id_provincia": 4,
            "nombre": "El Tamarugal",
            "region_id": 2
        },
        {
            "id_provincia": 5,
            "nombre": "Antofagasta",
            "region_id": 3
        },
        {
            "id_provincia": 6,
            "nombre": "El Loa",
            "region_id": 3
        },
        {
            "id_provincia": 7,
            "nombre": "Tocopilla",
            "region_id": 3
        },
        {
            "id_provincia": 8,
            "nombre": "Chañaral",
            "region_id": 4
        },
        {
            "id_provincia": 9,
            "nombre": "Copiapó",
            "region_id": 4
        },
        {
            "id_provincia": 10,
            "nombre": "Huasco",
            "region_id": 4
        },
        {
            "id_provincia": 11,
            "nombre": "Choapa",
            "region_id": 5
        },
        {
            "id_provincia": 12,
            "nombre": "Elqui",
            "region_id": 5
        },
        {
            "id_provincia": 13,
            "nombre": "Limarí",
            "region_id": 5
        },
        {
            "id_provincia": 14,
            "nombre": "Isla de Pascua",
            "region_id": 6
        },
        {
            "id_provincia": 15,
            "nombre": "Los Andes",
            "region_id": 6
        },
        {
            "id_provincia": 16,
            "nombre": "Petorca",
            "region_id": 6
        },
        {
            "id_provincia": 17,
            "nombre": "Quillota",
            "region_id": 6
        },
        {
            "id_provincia": 18,
            "nombre": "San Antonio",
            "region_id": 6
        },
        {
            "id_provincia": 19,
            "nombre": "San Felipe de Aconcagua",
            "region_id": 6
        },
        {
            "id_provincia": 20,
            "nombre": "Valparaiso",
            "region_id": 6
        },
        {
            "id_provincia": 21,
            "nombre": "Chacabuco",
            "region_id": 7
        },
        {
            "id_provincia": 22,
            "nombre": "Cordillera",
            "region_id": 7
        },
        {
            "id_provincia": 23,
            "nombre": "Maipo",
            "region_id": 7
        },
        {
            "id_provincia": 24,
            "nombre": "Melipilla",
            "region_id": 7
        },
        {
            "id_provincia": 25,
            "nombre": "Santiago",
            "region_id": 7
        },
        {
            "id_provincia": 26,
            "nombre": "Talagante",
            "region_id": 7
        },
        {
            "id_provincia": 27,
            "nombre": "Cachapoal",
            "region_id": 8
        },
        {
            "id_provincia": 28,
            "nombre": "Cardenal Caro",
            "region_id": 8
        },
        {
            "id_provincia": 29,
            "nombre": "Colchagua",
            "region_id": 8
        },
        {
            "id_provincia": 30,
            "nombre": "Cauquenes",
            "region_id": 9
        },
        {
            "id_provincia": 31,
            "nombre": "Curicó",
            "region_id": 9
        },
        {
            "id_provincia": 32,
            "nombre": "Linares",
            "region_id": 9
        },
        {
            "id_provincia": 33,
            "nombre": "Talca",
            "region_id": 9
        },
        {
            "id_provincia": 34,
            "nombre": "Arauco",
            "region_id": 10
        },
        {
            "id_provincia": 35,
            "nombre": "Bio Bío",
            "region_id": 10
        },
        {
            "id_provincia": 36,
            "nombre": "Concepción",
            "region_id": 10
        },
        {
            "id_provincia": 37,
            "nombre": "Ñuble",
            "region_id": 10
        },
        {
            "id_provincia": 38,
            "nombre": "Cautín",
            "region_id": 11
        },
        {
            "id_provincia": 39,
            "nombre": "Malleco",
            "region_id": 11
        },
        {
            "id_provincia": 40,
            "nombre": "Valdivia",
            "region_id": 12
        },
        {
            "id_provincia": 41,
            "nombre": "Ranco",
            "region_id": 12
        },
        {
            "id_provincia": 42,
            "nombre": "Chiloé",
            "region_id": 13
        },
        {
            "id_provincia": 43,
            "nombre": "Llanquihue",
            "region_id": 13
        },
        {
            "id_provincia": 44,
            "nombre": "Osorno",
            "region_id": 13
        },
        {
            "id_provincia": 45,
            "nombre": "Palena",
            "region_id": 13
        },
        {
            "id_provincia": 46,
            "nombre": "Aisén",
            "region_id": 14
        },
        {
            "id_provincia": 47,
            "nombre": "Capitán Prat",
            "region_id": 14
        },
        {
            "id_provincia": 48,
            "nombre": "Coihaique",
            "region_id": 14
        },
        {
            "id_provincia": 49,
            "nombre": "General Carrera",
            "region_id": 14
        },
        {
            "id_provincia": 50,
            "nombre": "Antártica Chilena",
            "region_id": 15
        },
        {
            "id_provincia": 51,
            "nombre": "Magallanes",
            "region_id": 15
        },
        {
            "id_provincia": 52,
            "nombre": "Tierra del Fuego",
            "region_id": 15
        },
        {
            "id_provincia": 53,
            "nombre": "Última Esperanza",
            "region_id": 15
        }
    ]

    const comunas = [
        {
            "id_comuna": 1,
            "comuna": "Arica",
            "provincia_id": 1
        },
        {
            "id_comuna": 2,
            "comuna": "Camarones",
            "provincia_id": 1
        },
        {
            "id_comuna": 3,
            "comuna": "General Lagos",
            "provincia_id": 2
        },
        {
            "id_comuna": 4,
            "comuna": "Putre",
            "provincia_id": 2
        },
        {
            "id_comuna": 5,
            "comuna": "Alto Hospicio",
            "provincia_id": 3
        },
        {
            "id_comuna": 6,
            "comuna": "Iquique",
            "provincia_id": 3
        },
        {
            "id_comuna": 7,
            "comuna": "Camiña",
            "provincia_id": 4
        },
        {
            "id_comuna": 8,
            "comuna": "Colchane",
            "provincia_id": 4
        },
        {
            "id_comuna": 9,
            "comuna": "Huara",
            "provincia_id": 4
        },
        {
            "id_comuna": 10,
            "comuna": "Pica",
            "provincia_id": 4
        },
        {
            "id_comuna": 11,
            "comuna": "Pozo Almonte",
            "provincia_id": 4
        },
        {
            "id_comuna": 12,
            "comuna": "Antofagasta",
            "provincia_id": 5
        },
        {
            "id_comuna": 13,
            "comuna": "Mejillones",
            "provincia_id": 5
        },
        {
            "id_comuna": 14,
            "comuna": "Sierra Gorda",
            "provincia_id": 5
        },
        {
            "id_comuna": 15,
            "comuna": "Taltal",
            "provincia_id": 5
        },
        {
            "id_comuna": 16,
            "comuna": "Calama",
            "provincia_id": 6
        },
        {
            "id_comuna": 17,
            "comuna": "Ollague",
            "provincia_id": 6
        },
        {
            "id_comuna": 18,
            "comuna": "San Pedro de Atacama",
            "provincia_id": 6
        },
        {
            "id_comuna": 19,
            "comuna": "María Elena",
            "provincia_id": 7
        },
        {
            "id_comuna": 20,
            "comuna": "Tocopilla",
            "provincia_id": 7
        },
        {
            "id_comuna": 21,
            "comuna": "Chañaral",
            "provincia_id": 8
        },
        {
            "id_comuna": 22,
            "comuna": "Diego de Almagro",
            "provincia_id": 8
        },
        {
            "id_comuna": 23,
            "comuna": "Caldera",
            "provincia_id": 9
        },
        {
            "id_comuna": 24,
            "comuna": "Copiapó",
            "provincia_id": 9
        },
        {
            "id_comuna": 25,
            "comuna": "Tierra Amarilla",
            "provincia_id": 9
        },
        {
            "id_comuna": 26,
            "comuna": "Alto del Carmen",
            "provincia_id": 10
        },
        {
            "id_comuna": 27,
            "comuna": "Freirina",
            "provincia_id": 10
        },
        {
            "id_comuna": 28,
            "comuna": "Huasco",
            "provincia_id": 10
        },
        {
            "id_comuna": 29,
            "comuna": "Vallenar",
            "provincia_id": 10
        },
        {
            "id_comuna": 30,
            "comuna": "Canela",
            "provincia_id": 11
        },
        {
            "id_comuna": 31,
            "comuna": "Illapel",
            "provincia_id": 11
        },
        {
            "id_comuna": 32,
            "comuna": "Los Vilos",
            "provincia_id": 11
        },
        {
            "id_comuna": 33,
            "comuna": "Salamanca",
            "provincia_id": 11
        },
        {
            "id_comuna": 34,
            "comuna": "Andacollo",
            "provincia_id": 12
        },
        {
            "id_comuna": 35,
            "comuna": "Coquimbo",
            "provincia_id": 12
        },
        {
            "id_comuna": 36,
            "comuna": "La Higuera",
            "provincia_id": 12
        },
        {
            "id_comuna": 37,
            "comuna": "La Serena",
            "provincia_id": 12
        },
        {
            "id_comuna": 38,
            "comuna": "Paihuaco",
            "provincia_id": 12
        },
        {
            "id_comuna": 39,
            "comuna": "Vicuña",
            "provincia_id": 12
        },
        {
            "id_comuna": 40,
            "comuna": "Combarbalá",
            "provincia_id": 13
        },
        {
            "id_comuna": 41,
            "comuna": "Monte Patria",
            "provincia_id": 13
        },
        {
            "id_comuna": 42,
            "comuna": "Ovalle",
            "provincia_id": 13
        },
        {
            "id_comuna": 43,
            "comuna": "Punitaqui",
            "provincia_id": 13
        },
        {
            "id_comuna": 44,
            "comuna": "Río Hurtado",
            "provincia_id": 13
        },
        {
            "id_comuna": 45,
            "comuna": "Isla de Pascua",
            "provincia_id": 14
        },
        {
            "id_comuna": 46,
            "comuna": "Calle Larga",
            "provincia_id": 15
        },
        {
            "id_comuna": 47,
            "comuna": "Los Andes",
            "provincia_id": 15
        },
        {
            "id_comuna": 48,
            "comuna": "Rinconada",
            "provincia_id": 15
        },
        {
            "id_comuna": 49,
            "comuna": "San Esteban",
            "provincia_id": 15
        },
        {
            "id_comuna": 50,
            "comuna": "La Ligua",
            "provincia_id": 16
        },
        {
            "id_comuna": 51,
            "comuna": "Papudo",
            "provincia_id": 16
        },
        {
            "id_comuna": 52,
            "comuna": "Petorca",
            "provincia_id": 16
        },
        {
            "id_comuna": 53,
            "comuna": "Zapallar",
            "provincia_id": 16
        },
        {
            "id_comuna": 54,
            "comuna": "Hijuelas",
            "provincia_id": 17
        },
        {
            "id_comuna": 55,
            "comuna": "La Calera",
            "provincia_id": 17
        },
        {
            "id_comuna": 56,
            "comuna": "La Cruz",
            "provincia_id": 17
        },
        {
            "id_comuna": 57,
            "comuna": "Limache",
            "provincia_id": 17
        },
        {
            "id_comuna": 58,
            "comuna": "Nogales",
            "provincia_id": 17
        },
        {
            "id_comuna": 59,
            "comuna": "Olmué",
            "provincia_id": 17
        },
        {
            "id_comuna": 60,
            "comuna": "Quillota",
            "provincia_id": 17
        },
        {
            "id_comuna": 61,
            "comuna": "Algarrobo",
            "provincia_id": 18
        },
        {
            "id_comuna": 62,
            "comuna": "Cartagena",
            "provincia_id": 18
        },
        {
            "id_comuna": 63,
            "comuna": "El Quisco",
            "provincia_id": 18
        },
        {
            "id_comuna": 64,
            "comuna": "El Tabo",
            "provincia_id": 18
        },
        {
            "id_comuna": 65,
            "comuna": "San Antonio",
            "provincia_id": 18
        },
        {
            "id_comuna": 66,
            "comuna": "Santo Domingo",
            "provincia_id": 18
        },
        {
            "id_comuna": 67,
            "comuna": "Catemu",
            "provincia_id": 19
        },
        {
            "id_comuna": 68,
            "comuna": "Llaillay",
            "provincia_id": 19
        },
        {
            "id_comuna": 69,
            "comuna": "Panquehue",
            "provincia_id": 19
        },
        {
            "id_comuna": 70,
            "comuna": "Putaendo",
            "provincia_id": 19
        },
        {
            "id_comuna": 71,
            "comuna": "San Felipe",
            "provincia_id": 19
        },
        {
            "id_comuna": 72,
            "comuna": "Santa María",
            "provincia_id": 19
        },
        {
            "id_comuna": 73,
            "comuna": "Casablanca",
            "provincia_id": 20
        },
        {
            "id_comuna": 74,
            "comuna": "Concón",
            "provincia_id": 20
        },
        {
            "id_comuna": 75,
            "comuna": "Juan Fernández",
            "provincia_id": 20
        },
        {
            "id_comuna": 76,
            "comuna": "Puchuncaví",
            "provincia_id": 20
        },
        {
            "id_comuna": 77,
            "comuna": "Quilpué",
            "provincia_id": 20
        },
        {
            "id_comuna": 78,
            "comuna": "Quintero",
            "provincia_id": 20
        },
        {
            "id_comuna": 79,
            "comuna": "Valparaíso",
            "provincia_id": 20
        },
        {
            "id_comuna": 80,
            "comuna": "Villa Alemana",
            "provincia_id": 20
        },
        {
            "id_comuna": 81,
            "comuna": "Viña del Mar",
            "provincia_id": 20
        },
        {
            "id_comuna": 82,
            "comuna": "Colina",
            "provincia_id": 21
        },
        {
            "id_comuna": 83,
            "comuna": "Lampa",
            "provincia_id": 21
        },
        {
            "id_comuna": 84,
            "comuna": "Tiltil",
            "provincia_id": 21
        },
        {
            "id_comuna": 85,
            "comuna": "Pirque",
            "provincia_id": 22
        },
        {
            "id_comuna": 86,
            "comuna": "Puente Alto",
            "provincia_id": 22
        },
        {
            "id_comuna": 87,
            "comuna": "San José de Maipo",
            "provincia_id": 22
        },
        {
            "id_comuna": 88,
            "comuna": "Buin",
            "provincia_id": 23
        },
        {
            "id_comuna": 89,
            "comuna": "Calera de Tango",
            "provincia_id": 23
        },
        {
            "id_comuna": 90,
            "comuna": "Paine",
            "provincia_id": 23
        },
        {
            "id_comuna": 91,
            "comuna": "San Bernardo",
            "provincia_id": 23
        },
        {
            "id_comuna": 92,
            "comuna": "Alhué",
            "provincia_id": 24
        },
        {
            "id_comuna": 93,
            "comuna": "Curacaví",
            "provincia_id": 24
        },
        {
            "id_comuna": 94,
            "comuna": "María Pinto",
            "provincia_id": 24
        },
        {
            "id_comuna": 95,
            "comuna": "Melipilla",
            "provincia_id": 24
        },
        {
            "id_comuna": 96,
            "comuna": "San Pedro",
            "provincia_id": 24
        },
        {
            "id_comuna": 97,
            "comuna": "Cerrillos",
            "provincia_id": 25
        },
        {
            "id_comuna": 98,
            "comuna": "Cerro Navia",
            "provincia_id": 25
        },
        {
            "id_comuna": 99,
            "comuna": "Conchalí",
            "provincia_id": 25
        },
        {
            "id_comuna": 100,
            "comuna": "El Bosque",
            "provincia_id": 25
        },
        {
            "id_comuna": 101,
            "comuna": "Estación Central",
            "provincia_id": 25
        },
        {
            "id_comuna": 102,
            "comuna": "Huechuraba",
            "provincia_id": 25
        },
        {
            "id_comuna": 103,
            "comuna": "Independencia",
            "provincia_id": 25
        },
        {
            "id_comuna": 104,
            "comuna": "La Cisterna",
            "provincia_id": 25
        },
        {
            "id_comuna": 105,
            "comuna": "La Granja",
            "provincia_id": 25
        },
        {
            "id_comuna": 106,
            "comuna": "La Florida",
            "provincia_id": 25
        },
        {
            "id_comuna": 107,
            "comuna": "La Pintana",
            "provincia_id": 25
        },
        {
            "id_comuna": 108,
            "comuna": "La Reina",
            "provincia_id": 25
        },
        {
            "id_comuna": 109,
            "comuna": "Las Condes",
            "provincia_id": 25
        },
        {
            "id_comuna": 110,
            "comuna": "Lo Barnechea",
            "provincia_id": 25
        },
        {
            "id_comuna": 111,
            "comuna": "Lo Espejo",
            "provincia_id": 25
        },
        {
            "id_comuna": 112,
            "comuna": "Lo Prado",
            "provincia_id": 25
        },
        {
            "id_comuna": 113,
            "comuna": "Macul",
            "provincia_id": 25
        },
        {
            "id_comuna": 114,
            "comuna": "Maipú",
            "provincia_id": 25
        },
        {
            "id_comuna": 115,
            "comuna": "Ñuñoa",
            "provincia_id": 25
        },
        {
            "id_comuna": 116,
            "comuna": "Pedro Aguirre Cerda",
            "provincia_id": 25
        },
        {
            "id_comuna": 117,
            "comuna": "Peñalolén",
            "provincia_id": 25
        },
        {
            "id_comuna": 118,
            "comuna": "Providencia",
            "provincia_id": 25
        },
        {
            "id_comuna": 119,
            "comuna": "Pudahuel",
            "provincia_id": 25
        },
        {
            "id_comuna": 120,
            "comuna": "Quilicura",
            "provincia_id": 25
        },
        {
            "id_comuna": 121,
            "comuna": "Quinta Normal",
            "provincia_id": 25
        },
        {
            "id_comuna": 122,
            "comuna": "Recoleta",
            "provincia_id": 25
        },
        {
            "id_comuna": 123,
            "comuna": "Renca",
            "provincia_id": 25
        },
        {
            "id_comuna": 124,
            "comuna": "San Miguel",
            "provincia_id": 25
        },
        {
            "id_comuna": 125,
            "comuna": "San Joaquín",
            "provincia_id": 25
        },
        {
            "id_comuna": 126,
            "comuna": "San Ramón",
            "provincia_id": 25
        },
        {
            "id_comuna": 127,
            "comuna": "Santiago",
            "provincia_id": 25
        },
        {
            "id_comuna": 128,
            "comuna": "Vitacura",
            "provincia_id": 25
        },
        {
            "id_comuna": 129,
            "comuna": "El Monte",
            "provincia_id": 26
        },
        {
            "id_comuna": 130,
            "comuna": "Isla de Maipo",
            "provincia_id": 26
        },
        {
            "id_comuna": 131,
            "comuna": "Padre Hurtado",
            "provincia_id": 26
        },
        {
            "id_comuna": 132,
            "comuna": "Peñaflor",
            "provincia_id": 26
        },
        {
            "id_comuna": 133,
            "comuna": "Talagante",
            "provincia_id": 26
        },
        {
            "id_comuna": 134,
            "comuna": "Codegua",
            "provincia_id": 27
        },
        {
            "id_comuna": 135,
            "comuna": "Coínco",
            "provincia_id": 27
        },
        {
            "id_comuna": 136,
            "comuna": "Coltauco",
            "provincia_id": 27
        },
        {
            "id_comuna": 137,
            "comuna": "Doñihue",
            "provincia_id": 27
        },
        {
            "id_comuna": 138,
            "comuna": "Graneros",
            "provincia_id": 27
        },
        {
            "id_comuna": 139,
            "comuna": "Las Cabras",
            "provincia_id": 27
        },
        {
            "id_comuna": 140,
            "comuna": "Machalí",
            "provincia_id": 27
        },
        {
            "id_comuna": 141,
            "comuna": "Malloa",
            "provincia_id": 27
        },
        {
            "id_comuna": 142,
            "comuna": "Mostazal",
            "provincia_id": 27
        },
        {
            "id_comuna": 143,
            "comuna": "Olivar",
            "provincia_id": 27
        },
        {
            "id_comuna": 144,
            "comuna": "Peumo",
            "provincia_id": 27
        },
        {
            "id_comuna": 145,
            "comuna": "Pichidegua",
            "provincia_id": 27
        },
        {
            "id_comuna": 146,
            "comuna": "Quinta de Tilcoco",
            "provincia_id": 27
        },
        {
            "id_comuna": 147,
            "comuna": "Rancagua",
            "provincia_id": 27
        },
        {
            "id_comuna": 148,
            "comuna": "Rengo",
            "provincia_id": 27
        },
        {
            "id_comuna": 149,
            "comuna": "Requínoa",
            "provincia_id": 27
        },
        {
            "id_comuna": 150,
            "comuna": "San Vicente de Tagua Tagua",
            "provincia_id": 27
        },
        {
            "id_comuna": 151,
            "comuna": "La Estrella",
            "provincia_id": 28
        },
        {
            "id_comuna": 152,
            "comuna": "Litueche",
            "provincia_id": 28
        },
        {
            "id_comuna": 153,
            "comuna": "Marchihue",
            "provincia_id": 28
        },
        {
            "id_comuna": 154,
            "comuna": "Navidad",
            "provincia_id": 28
        },
        {
            "id_comuna": 155,
            "comuna": "Peredones",
            "provincia_id": 28
        },
        {
            "id_comuna": 156,
            "comuna": "Pichilemu",
            "provincia_id": 28
        },
        {
            "id_comuna": 157,
            "comuna": "Chépica",
            "provincia_id": 29
        },
        {
            "id_comuna": 158,
            "comuna": "Chimbarongo",
            "provincia_id": 29
        },
        {
            "id_comuna": 159,
            "comuna": "Lolol",
            "provincia_id": 29
        },
        {
            "id_comuna": 160,
            "comuna": "Nancagua",
            "provincia_id": 29
        },
        {
            "id_comuna": 161,
            "comuna": "Palmilla",
            "provincia_id": 29
        },
        {
            "id_comuna": 162,
            "comuna": "Peralillo",
            "provincia_id": 29
        },
        {
            "id_comuna": 163,
            "comuna": "Placilla",
            "provincia_id": 29
        },
        {
            "id_comuna": 164,
            "comuna": "Pumanque",
            "provincia_id": 29
        },
        {
            "id_comuna": 165,
            "comuna": "San Fernando",
            "provincia_id": 29
        },
        {
            "id_comuna": 166,
            "comuna": "Santa Cruz",
            "provincia_id": 29
        },
        {
            "id_comuna": 167,
            "comuna": "Cauquenes",
            "provincia_id": 30
        },
        {
            "id_comuna": 168,
            "comuna": "Chanco",
            "provincia_id": 30
        },
        {
            "id_comuna": 169,
            "comuna": "Pelluhue",
            "provincia_id": 30
        },
        {
            "id_comuna": 170,
            "comuna": "Curicó",
            "provincia_id": 31
        },
        {
            "id_comuna": 171,
            "comuna": "Hualañé",
            "provincia_id": 31
        },
        {
            "id_comuna": 172,
            "comuna": "Licantén",
            "provincia_id": 31
        },
        {
            "id_comuna": 173,
            "comuna": "Molina",
            "provincia_id": 31
        },
        {
            "id_comuna": 174,
            "comuna": "Rauco",
            "provincia_id": 31
        },
        {
            "id_comuna": 175,
            "comuna": "Romeral",
            "provincia_id": 31
        },
        {
            "id_comuna": 176,
            "comuna": "Sagrada Familia",
            "provincia_id": 31
        },
        {
            "id_comuna": 177,
            "comuna": "Teno",
            "provincia_id": 31
        },
        {
            "id_comuna": 178,
            "comuna": "Vichuquén",
            "provincia_id": 31
        },
        {
            "id_comuna": 179,
            "comuna": "Colbún",
            "provincia_id": 32
        },
        {
            "id_comuna": 180,
            "comuna": "Linares",
            "provincia_id": 32
        },
        {
            "id_comuna": 181,
            "comuna": "Longaví",
            "provincia_id": 32
        },
        {
            "id_comuna": 182,
            "comuna": "Parral",
            "provincia_id": 32
        },
        {
            "id_comuna": 183,
            "comuna": "Retiro",
            "provincia_id": 32
        },
        {
            "id_comuna": 184,
            "comuna": "San Javier",
            "provincia_id": 32
        },
        {
            "id_comuna": 185,
            "comuna": "Villa Alegre",
            "provincia_id": 32
        },
        {
            "id_comuna": 186,
            "comuna": "Yerbas Buenas",
            "provincia_id": 32
        },
        {
            "id_comuna": 187,
            "comuna": "Constitución",
            "provincia_id": 33
        },
        {
            "id_comuna": 188,
            "comuna": "Curepto",
            "provincia_id": 33
        },
        {
            "id_comuna": 189,
            "comuna": "Empedrado",
            "provincia_id": 33
        },
        {
            "id_comuna": 190,
            "comuna": "Maule",
            "provincia_id": 33
        },
        {
            "id_comuna": 191,
            "comuna": "Pelarco",
            "provincia_id": 33
        },
        {
            "id_comuna": 192,
            "comuna": "Pencahue",
            "provincia_id": 33
        },
        {
            "id_comuna": 193,
            "comuna": "Río Claro",
            "provincia_id": 33
        },
        {
            "id_comuna": 194,
            "comuna": "San Clemente",
            "provincia_id": 33
        },
        {
            "id_comuna": 195,
            "comuna": "San Rafael",
            "provincia_id": 33
        },
        {
            "id_comuna": 196,
            "comuna": "Talca",
            "provincia_id": 33
        },
        {
            "id_comuna": 197,
            "comuna": "Arauco",
            "provincia_id": 34
        },
        {
            "id_comuna": 198,
            "comuna": "Cañete",
            "provincia_id": 34
        },
        {
            "id_comuna": 199,
            "comuna": "Contulmo",
            "provincia_id": 34
        },
        {
            "id_comuna": 200,
            "comuna": "Curanilahue",
            "provincia_id": 34
        },
        {
            "id_comuna": 201,
            "comuna": "Lebu",
            "provincia_id": 34
        },
        {
            "id_comuna": 202,
            "comuna": "Los Álamos",
            "provincia_id": 34
        },
        {
            "id_comuna": 203,
            "comuna": "Tirúa",
            "provincia_id": 34
        },
        {
            "id_comuna": 204,
            "comuna": "Alto Biobío",
            "provincia_id": 35
        },
        {
            "id_comuna": 205,
            "comuna": "Antuco",
            "provincia_id": 35
        },
        {
            "id_comuna": 206,
            "comuna": "Cabrero",
            "provincia_id": 35
        },
        {
            "id_comuna": 207,
            "comuna": "Laja",
            "provincia_id": 35
        },
        {
            "id_comuna": 208,
            "comuna": "Los Ángeles",
            "provincia_id": 35
        },
        {
            "id_comuna": 209,
            "comuna": "Mulchén",
            "provincia_id": 35
        },
        {
            "id_comuna": 210,
            "comuna": "Nacimiento",
            "provincia_id": 35
        },
        {
            "id_comuna": 211,
            "comuna": "Negrete",
            "provincia_id": 35
        },
        {
            "id_comuna": 212,
            "comuna": "Quilaco",
            "provincia_id": 35
        },
        {
            "id_comuna": 213,
            "comuna": "Quilleco",
            "provincia_id": 35
        },
        {
            "id_comuna": 214,
            "comuna": "San Rosendo",
            "provincia_id": 35
        },
        {
            "id_comuna": 215,
            "comuna": "Santa Bárbara",
            "provincia_id": 35
        },
        {
            "id_comuna": 216,
            "comuna": "Tucapel",
            "provincia_id": 35
        },
        {
            "id_comuna": 217,
            "comuna": "Yumbel",
            "provincia_id": 35
        },
        {
            "id_comuna": 218,
            "comuna": "Chiguayante",
            "provincia_id": 36
        },
        {
            "id_comuna": 219,
            "comuna": "Concepción",
            "provincia_id": 36
        },
        {
            "id_comuna": 220,
            "comuna": "Coronel",
            "provincia_id": 36
        },
        {
            "id_comuna": 221,
            "comuna": "Florida",
            "provincia_id": 36
        },
        {
            "id_comuna": 222,
            "comuna": "Hualpén",
            "provincia_id": 36
        },
        {
            "id_comuna": 223,
            "comuna": "Hualqui",
            "provincia_id": 36
        },
        {
            "id_comuna": 224,
            "comuna": "Lota",
            "provincia_id": 36
        },
        {
            "id_comuna": 225,
            "comuna": "Penco",
            "provincia_id": 36
        },
        {
            "id_comuna": 226,
            "comuna": "San Pedro de La Paz",
            "provincia_id": 36
        },
        {
            "id_comuna": 227,
            "comuna": "Santa Juana",
            "provincia_id": 36
        },
        {
            "id_comuna": 228,
            "comuna": "Talcahuano",
            "provincia_id": 36
        },
        {
            "id_comuna": 229,
            "comuna": "Tomé",
            "provincia_id": 36
        },
        {
            "id_comuna": 230,
            "comuna": "Bulnes",
            "provincia_id": 37
        },
        {
            "id_comuna": 231,
            "comuna": "Chillán",
            "provincia_id": 37
        },
        {
            "id_comuna": 232,
            "comuna": "Chillán Viejo",
            "provincia_id": 37
        },
        {
            "id_comuna": 233,
            "comuna": "Cobquecura",
            "provincia_id": 37
        },
        {
            "id_comuna": 234,
            "comuna": "Coelemu",
            "provincia_id": 37
        },
        {
            "id_comuna": 235,
            "comuna": "Coihueco",
            "provincia_id": 37
        },
        {
            "id_comuna": 236,
            "comuna": "El Carmen",
            "provincia_id": 37
        },
        {
            "id_comuna": 237,
            "comuna": "Ninhue",
            "provincia_id": 37
        },
        {
            "id_comuna": 238,
            "comuna": "Ñiquen",
            "provincia_id": 37
        },
        {
            "id_comuna": 239,
            "comuna": "Pemuco",
            "provincia_id": 37
        },
        {
            "id_comuna": 240,
            "comuna": "Pinto",
            "provincia_id": 37
        },
        {
            "id_comuna": 241,
            "comuna": "Portezuelo",
            "provincia_id": 37
        },
        {
            "id_comuna": 242,
            "comuna": "Quillón",
            "provincia_id": 37
        },
        {
            "id_comuna": 243,
            "comuna": "Quirihue",
            "provincia_id": 37
        },
        {
            "id_comuna": 244,
            "comuna": "Ránquil",
            "provincia_id": 37
        },
        {
            "id_comuna": 245,
            "comuna": "San Carlos",
            "provincia_id": 37
        },
        {
            "id_comuna": 246,
            "comuna": "San Fabián",
            "provincia_id": 37
        },
        {
            "id_comuna": 247,
            "comuna": "San Ignacio",
            "provincia_id": 37
        },
        {
            "id_comuna": 248,
            "comuna": "San Nicolás",
            "provincia_id": 37
        },
        {
            "id_comuna": 249,
            "comuna": "Treguaco",
            "provincia_id": 37
        },
        {
            "id_comuna": 250,
            "comuna": "Yungay",
            "provincia_id": 37
        },
        {
            "id_comuna": 251,
            "comuna": "Carahue",
            "provincia_id": 38
        },
        {
            "id_comuna": 252,
            "comuna": "Cholchol",
            "provincia_id": 38
        },
        {
            "id_comuna": 253,
            "comuna": "Cunco",
            "provincia_id": 38
        },
        {
            "id_comuna": 254,
            "comuna": "Curarrehue",
            "provincia_id": 38
        },
        {
            "id_comuna": 255,
            "comuna": "Freire",
            "provincia_id": 38
        },
        {
            "id_comuna": 256,
            "comuna": "Galvarino",
            "provincia_id": 38
        },
        {
            "id_comuna": 257,
            "comuna": "Gorbea",
            "provincia_id": 38
        },
        {
            "id_comuna": 258,
            "comuna": "Lautaro",
            "provincia_id": 38
        },
        {
            "id_comuna": 259,
            "comuna": "Loncoche",
            "provincia_id": 38
        },
        {
            "id_comuna": 260,
            "comuna": "Melipeuco",
            "provincia_id": 38
        },
        {
            "id_comuna": 261,
            "comuna": "Nueva Imperial",
            "provincia_id": 38
        },
        {
            "id_comuna": 262,
            "comuna": "Padre Las Casas",
            "provincia_id": 38
        },
        {
            "id_comuna": 263,
            "comuna": "Perquenco",
            "provincia_id": 38
        },
        {
            "id_comuna": 264,
            "comuna": "Pitrufquén",
            "provincia_id": 38
        },
        {
            "id_comuna": 265,
            "comuna": "Pucón",
            "provincia_id": 38
        },
        {
            "id_comuna": 266,
            "comuna": "Saavedra",
            "provincia_id": 38
        },
        {
            "id_comuna": 267,
            "comuna": "Temuco",
            "provincia_id": 38
        },
        {
            "id_comuna": 268,
            "comuna": "Teodoro Schmidt",
            "provincia_id": 38
        },
        {
            "id_comuna": 269,
            "comuna": "Toltén",
            "provincia_id": 38
        },
        {
            "id_comuna": 270,
            "comuna": "Vilcún",
            "provincia_id": 38
        },
        {
            "id_comuna": 271,
            "comuna": "Villarrica",
            "provincia_id": 38
        },
        {
            "id_comuna": 272,
            "comuna": "Angol",
            "provincia_id": 39
        },
        {
            "id_comuna": 273,
            "comuna": "Collipulli",
            "provincia_id": 39
        },
        {
            "id_comuna": 274,
            "comuna": "Curacautín",
            "provincia_id": 39
        },
        {
            "id_comuna": 275,
            "comuna": "Ercilla",
            "provincia_id": 39
        },
        {
            "id_comuna": 276,
            "comuna": "Lonquimay",
            "provincia_id": 39
        },
        {
            "id_comuna": 277,
            "comuna": "Los Sauces",
            "provincia_id": 39
        },
        {
            "id_comuna": 278,
            "comuna": "Lumaco",
            "provincia_id": 39
        },
        {
            "id_comuna": 279,
            "comuna": "Purén",
            "provincia_id": 39
        },
        {
            "id_comuna": 280,
            "comuna": "Renaico",
            "provincia_id": 39
        },
        {
            "id_comuna": 281,
            "comuna": "Traiguén",
            "provincia_id": 39
        },
        {
            "id_comuna": 282,
            "comuna": "Victoria",
            "provincia_id": 39
        },
        {
            "id_comuna": 283,
            "comuna": "Corral",
            "provincia_id": 40
        },
        {
            "id_comuna": 284,
            "comuna": "Lanco",
            "provincia_id": 40
        },
        {
            "id_comuna": 285,
            "comuna": "Los Lagos",
            "provincia_id": 40
        },
        {
            "id_comuna": 286,
            "comuna": "Máfil",
            "provincia_id": 40
        },
        {
            "id_comuna": 287,
            "comuna": "Mariquina",
            "provincia_id": 40
        },
        {
            "id_comuna": 288,
            "comuna": "Paillaco",
            "provincia_id": 40
        },
        {
            "id_comuna": 289,
            "comuna": "Panguipulli",
            "provincia_id": 40
        },
        {
            "id_comuna": 290,
            "comuna": "Valdivia",
            "provincia_id": 40
        },
        {
            "id_comuna": 291,
            "comuna": "Futrono",
            "provincia_id": 41
        },
        {
            "id_comuna": 292,
            "comuna": "La Unión",
            "provincia_id": 41
        },
        {
            "id_comuna": 293,
            "comuna": "Lago Ranco",
            "provincia_id": 41
        },
        {
            "id_comuna": 294,
            "comuna": "Río Bueno",
            "provincia_id": 41
        },
        {
            "id_comuna": 295,
            "comuna": "Ancud",
            "provincia_id": 42
        },
        {
            "id_comuna": 296,
            "comuna": "Castro",
            "provincia_id": 42
        },
        {
            "id_comuna": 297,
            "comuna": "Chonchi",
            "provincia_id": 42
        },
        {
            "id_comuna": 298,
            "comuna": "Curaco de Vélez",
            "provincia_id": 42
        },
        {
            "id_comuna": 299,
            "comuna": "Dalcahue",
            "provincia_id": 42
        },
        {
            "id_comuna": 300,
            "comuna": "Puqueldón",
            "provincia_id": 42
        },
        {
            "id_comuna": 301,
            "comuna": "Queilén",
            "provincia_id": 42
        },
        {
            "id_comuna": 302,
            "comuna": "Quemchi",
            "provincia_id": 42
        },
        {
            "id_comuna": 303,
            "comuna": "Quellón",
            "provincia_id": 42
        },
        {
            "id_comuna": 304,
            "comuna": "Quinchao",
            "provincia_id": 42
        },
        {
            "id_comuna": 305,
            "comuna": "Calbuco",
            "provincia_id": 43
        },
        {
            "id_comuna": 306,
            "comuna": "Cochamó",
            "provincia_id": 43
        },
        {
            "id_comuna": 307,
            "comuna": "Fresia",
            "provincia_id": 43
        },
        {
            "id_comuna": 308,
            "comuna": "Frutillar",
            "provincia_id": 43
        },
        {
            "id_comuna": 309,
            "comuna": "Llanquihue",
            "provincia_id": 43
        },
        {
            "id_comuna": 310,
            "comuna": "Los Muermos",
            "provincia_id": 43
        },
        {
            "id_comuna": 311,
            "comuna": "Maullín",
            "provincia_id": 43
        },
        {
            "id_comuna": 312,
            "comuna": "Puerto Montt",
            "provincia_id": 43
        },
        {
            "id_comuna": 313,
            "comuna": "Puerto Varas",
            "provincia_id": 43
        },
        {
            "id_comuna": 314,
            "comuna": "Osorno",
            "provincia_id": 44
        },
        {
            "id_comuna": 315,
            "comuna": "Puero Octay",
            "provincia_id": 44
        },
        {
            "id_comuna": 316,
            "comuna": "Purranque",
            "provincia_id": 44
        },
        {
            "id_comuna": 317,
            "comuna": "Puyehue",
            "provincia_id": 44
        },
        {
            "id_comuna": 318,
            "comuna": "Río Negro",
            "provincia_id": 44
        },
        {
            "id_comuna": 319,
            "comuna": "San Juan de la Costa",
            "provincia_id": 44
        },
        {
            "id_comuna": 320,
            "comuna": "San Pablo",
            "provincia_id": 44
        },
        {
            "id_comuna": 321,
            "comuna": "Chaitén",
            "provincia_id": 45
        },
        {
            "id_comuna": 322,
            "comuna": "Futaleufú",
            "provincia_id": 45
        },
        {
            "id_comuna": 323,
            "comuna": "Hualaihué",
            "provincia_id": 45
        },
        {
            "id_comuna": 324,
            "comuna": "Palena",
            "provincia_id": 45
        },
        {
            "id_comuna": 325,
            "comuna": "Aisén",
            "provincia_id": 46
        },
        {
            "id_comuna": 326,
            "comuna": "Cisnes",
            "provincia_id": 46
        },
        {
            "id_comuna": 327,
            "comuna": "Guaitecas",
            "provincia_id": 46
        },
        {
            "id_comuna": 328,
            "comuna": "Cochrane",
            "provincia_id": 47
        },
        {
            "id_comuna": 329,
            "comuna": "Ohiggins",
            "provincia_id": 47
        },
        {
            "id_comuna": 330,
            "comuna": "Tortel",
            "provincia_id": 47
        },
        {
            "id_comuna": 331,
            "comuna": "Coihaique",
            "provincia_id": 48
        },
        {
            "id_comuna": 332,
            "comuna": "Lago Verde",
            "provincia_id": 48
        },
        {
            "id_comuna": 333,
            "comuna": "Chile Chico",
            "provincia_id": 49
        },
        {
            "id_comuna": 334,
            "comuna": "Río Ibáñez",
            "provincia_id": 49
        },
        {
            "id_comuna": 335,
            "comuna": "Antártica",
            "provincia_id": 50
        },
        {
            "id_comuna": 336,
            "comuna": "Cabo de Hornos",
            "provincia_id": 50
        },
        {
            "id_comuna": 337,
            "comuna": "Laguna Blanca",
            "provincia_id": 51
        },
        {
            "id_comuna": 338,
            "comuna": "Punta Arenas",
            "provincia_id": 51
        },
        {
            "id_comuna": 339,
            "comuna": "Río Verde",
            "provincia_id": 51
        },
        {
            "id_comuna": 340,
            "comuna": "San Gregorio",
            "provincia_id": 51
        },
        {
            "id_comuna": 341,
            "comuna": "Porvenir",
            "provincia_id": 52
        },
        {
            "id_comuna": 342,
            "comuna": "Primavera",
            "provincia_id": 52
        },
        {
            "id_comuna": 343,
            "comuna": "Timaukel",
            "provincia_id": 52
        },
        {
            "id_comuna": 344,
            "comuna": "Natales",
            "provincia_id": 53
        },
        {
            "id_comuna": 345,
            "comuna": "Torres del Paine",
            "provincia_id": 53
        }
    ]

    // const [regionesResult, provinciasResult, comunasResult] = await prisma.$transaction([
    //     prisma.regiones.createMany({ data: regiones }),
    //     prisma.provincias.createMany({ data: provincias }),
    //     prisma.comunas.createMany({ data: comunas })
    // ])

    // const clienteConDireccion = await prisma.clientes.createMany({
    //     data: [
    //         {
    //             rut: "777777777",
    //             nombre: "numerosiete",
    //             apellido: "numerosiete",
    //             correo: "numero@siete.co",
    //             celular: "(+56) 9 77777777",
    //             direccion_id: null
    //         },
    //         {
    //             rut: "444444444",
    //             nombre: "sebin",
    //             apellido: "sebibi",
    //             correo: "kajshjkas@djksd.cl",
    //             celular: "(+56) 9 33344444",
    //             direccion_id: null
    //         }]
    // });

    // const cliente = await prisma.clientes.create({
    //     data:
    //     {
    //         nombre: 'Sebastian',
    //         apellido: 'Muñoz',
    //         celular: '+56911223344',
    //         rut: '11222333-1',
    //         correo: 'admin@admin.cl',
    //         Direcciones_de_Clientes: {
    //             create: {
    //                 Direcciones: {
    //                     create: {
    //                         calle: 'las araucarias',
    //                         numero_calle: 2030,
    //                         Comunas: {
    //                             connect: { id_comuna: 1 }, // Conectar a una comuna existente por su ID
    //                         },
    //                     },
    //                 },
    //             },
    //         },
    //     }
    // })

    // const metodosPago = await prisma.metodo_Pago.createMany({
    //     data: [
    //         {
    //             id: 1,
    //             metodo: 'efectivo'
    //         },
    //         {
    //             id: 2,
    //             metodo: 'debito'
    //         },
    //         {
    //             id: 3,
    //             metodo: 'credito'
    //         },
    //     ]
    // })

    // const colaboradores = await prisma.colaboradores.createMany({
    //     data: [
    //         {
    //             "id": 1,
    //             "nombres": "seba",
    //             "apellidos": "munoz",
    //             "direccion_id": 1,
    //             "correo": "seba@gmail.com",
    //             "celular": "993493492"
    //         },
    //         {
    //             "id": 2,
    //             "nombres": "jereklein",
    //             "apellidos": "Gomez",
    //             "direccion_id": 1,
    //             "correo": "jereklein@gmail.com",
    //             "celular": "888773333"
    //         }
    //     ]
    // })

    // const tipoUsuario = await prisma.tipos_Usuarios.createMany({
    //     data: [
    //         {
    //             tipo_usuario: 'admin'
    //         },
    //         {
    //             tipo_usuario: 'colaborador'
    //         }
    //     ]
    // })
    // const usuario = await prisma.usuarios.create({
    //     data: {
    //         Tipos_Usuarios_id: 1,
    //         Colaboradores_id: 1,
    //         pass_encrypt: "$2a$12$nI6Owi4LHNYDC3h/KY5JseVOkY4eZE/4Hqez0DFWhVFHkzRyy/UGq"
    //     }

    // })

    // const categorias = await prisma.categorias.createMany({
    //     data: [
    //         { categoria: 'harina'},
    //         { categoria: 'legumbres' },
    //         { categoria: 'mermeladas' },
    //         { categoria: 'manjares'},
    //         { categoria: 'conservas'},
    //         { categoria: 'frutos'},
    //         { categoria: 'huevos'},
    //     ]
    // })

    // const productos = await prisma.productos.createMany({
    //     data: [
    //         {
    //             Categorias_id: 1,
    //             descripcion: 'harina tostada',
    //             peso_gramos: 500,
    //             precio_neto: 1500,
    //             stock: 10,                
    //         },
    //         {
    //             Categorias_id: 1,
    //             descripcion: 'harina tostada',
    //             peso_gramos: 1000,
    //             precio_neto: 2100,
    //             stock: 7,                
    //         },
    //         {
    //             Categorias_id: 1,
    //             descripcion: 'harina garbanzo',
    //             peso_gramos: 500,
    //             precio_neto: 1500,
    //             stock: 10, 
    //         },
    //         {
    //             Categorias_id: 2,
    //             descripcion: 'porotos burro',
    //             peso_gramos: 1000,
    //             precio_neto: 2900,
    //             stock: 12
    //         }
    //     ]
    // })

    const estadosPago = await  prisma.estado_Pago.createMany({
        data: [
            {
                estado: 'pagado'
            },
            {
                estado: 'No pagado'
            }
        ]
    })
    console.log(estadosPago)

    // console.log("Insert Seed Prisma: ", { clienteConDireccion })
    // console.log("Insert Seed Prisma: ", cliente)
    // console.log("Insert Seed Prisma: ", metodosPago)
    // console.log("Insert Seed Prisma: ", tipoUsuario)
    // console.log("Insert Seed Prisma: ", colaboradores)
    // console.log("Insert Seed Prisma: usuario ", usuario)
    // console.log("Insert Seed Prisma: categorias ", categorias)
    // console.log("Insert Seed Prisma: productos ", productos)
    // console.log("Insert regiones", regionesResult)
    // console.log("Insert provincias", provinciasResult)
    // console.log("Insert comunas", comunasResult)
}

main()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })