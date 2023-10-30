import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


async function main() {
    
    const clienteConDireccion = await prisma.clientes.create({
        data: {
            nombre: 'Sebastian',
            apellido: 'Muñoz',
            celular: '+56911223344',
            rut: '11222333-1',
            correo: 'admin@admin.cl',
            Direcciones_de_Clientes: {
                create: {
                    Direcciones: {
                        create: {
                            calle: 'las araucarias',
                            numero_calle: 2030,
                            Comunas: {
                                connect: { id_comuna: 1 }, // Conectar a una comuna existente por su ID
                            },
                        },
                    },
                },
            },
        },
    });
    console.log("Insert Seed Prisma: ", { clienteConDireccion })
}

main()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })