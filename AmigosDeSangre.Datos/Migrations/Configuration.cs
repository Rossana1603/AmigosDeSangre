namespace AmigosDeSangre.Datos.Migrations
{
    using Modelos;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<AmigosDeSangre.Datos.AmigosDeSangreContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(AmigosDeSangre.Datos.AmigosDeSangreContext context)
        {
            context.Productos.AddOrUpdate(
                p => p.CodigoProducto,
                new Producto
                {
                    CodigoProducto = 1,
                    Descripcion = "Sangre Total"
                },
                new Producto
                {
                    CodigoProducto = 2,
                    Descripcion = "Plaquetas"
                },
                new Producto
                {
                    CodigoProducto = 3,
                    Descripcion = "Plasma"
                }
            );

            context.GrupoSanguineos.AddOrUpdate(
                p => p.GrupoSanguineoCodigo,
                new GrupoSanguineo
                {
                    GrupoSanguineoCodigo = 1,
                    Descripcion = "Ninguno"
                },
                new GrupoSanguineo
                {
                    GrupoSanguineoCodigo = 2,
                    Descripcion = "O+"
                },
                new GrupoSanguineo
                {
                    GrupoSanguineoCodigo = 3,
                    Descripcion = "O-"
                },
                new GrupoSanguineo
                {
                    GrupoSanguineoCodigo = 4,
                    Descripcion = "A+"
                },
                new GrupoSanguineo
                {
                    GrupoSanguineoCodigo = 5,
                    Descripcion = "A-"
                },
                new GrupoSanguineo
                {
                    GrupoSanguineoCodigo = 6,
                    Descripcion = "B+"
                },
                new GrupoSanguineo
                {
                    GrupoSanguineoCodigo = 7,
                    Descripcion = "B-"
                },
                new GrupoSanguineo
                {
                    GrupoSanguineoCodigo = 8,
                    Descripcion = "AB+"
                },
                new GrupoSanguineo
                {
                    GrupoSanguineoCodigo = 9,
                    Descripcion = "AB-"
                }
            );

            context.Donantes.AddOrUpdate(
                                  p => p.CodigoDonante,
                                  new Donante
                                  {
                                      Nombres = "Andrew",
                                      Apellidos = "Peters",
                                      GrupoSanguineoCodigo = 2,
                                      FechaNacimiento = "16-03-1989",
                                      TipoDocumento = "DNI",
                                      NumeroDocumento = "74384737",
                                      EstadoCivil = "C",
                                      Genero = "F",
                                      Telefono = "737373737",
                                      Domicilio = "av. los frutales",
                                      Email = "apeters@gmail.com",
                                      Estado = Estado.Apto
                                  },
                                  new Donante
                                  {
                                      Nombres = "Brice",
                                      Apellidos = "Lambson",
                                      GrupoSanguineoCodigo = 3,
                                      FechaNacimiento = "16-03-1989",
                                      TipoDocumento = "DNI",
                                      NumeroDocumento = "74384737",
                                      EstadoCivil = "C",
                                      Genero = "F",
                                      Telefono = "737373737",
                                      Domicilio = "av. los frutales",
                                      Email = "blambson@gmail.com",
                                      Estado = Estado.NoApto
                                  },
                                  new Donante
                                  {
                                      Nombres = "Rowan",
                                      Apellidos = "Miller",
                                      GrupoSanguineoCodigo = 4,
                                      FechaNacimiento = "16-03-1989",
                                      TipoDocumento = "DNI",
                                      NumeroDocumento = "74384737",
                                      EstadoCivil = "C",
                                      Genero = "F",
                                      Telefono = "737373737",
                                      Domicilio = "av. los frutales",
                                      Email = "rmiller@gmail.com",
                                      Estado = Estado.Apto
                                  }
                                );

            context.Solicitudes.AddOrUpdate(
                 p => p.Codigo,
                 new Solicitud
                 {
                     CodigoProducto = 2,
                     GrupoSanguineoCodigo = 1,
                     NombrePaciente = "Sam Peters",
                     EdadPaciente = 21,
                     UnidadesRequeridas = 5,
                     LugarDonacion = "Hospital Sanchez Carrion",
                     NombreContacto = "Zack Peters",
                     TelefonoContacto = "737373737",
                     EmailContacto = "apeters@gmail.com",
                     Fecha = "03-12-2016",
                     Estado = true
                 },
                 new Solicitud
                 {
                     CodigoProducto = 1,
                     GrupoSanguineoCodigo = 2,
                     NombrePaciente = "Sam Peters",
                     EdadPaciente = 21,
                     UnidadesRequeridas = 5,
                     LugarDonacion = "Hospital Sanchez Carrion",
                     NombreContacto = "Zack Peters",
                     TelefonoContacto = "737373737",
                     EmailContacto = "apeters@gmail.com",
                     Fecha = "03-12-2016",
                     Estado = true
                 },
                 new Solicitud
                 {
                     CodigoProducto = 3,
                     GrupoSanguineoCodigo = 1,
                     NombrePaciente = "Rogers Peters",
                     EdadPaciente = 35,
                     UnidadesRequeridas = 5,
                     LugarDonacion = "Hospital Rebagliatti",
                     NombreContacto = "Stefano Peters",
                     TelefonoContacto = "737373737",
                     EmailContacto = "speters@gmail.com",
                     Fecha = "03-12-2016",
                     Estado = true
                 }
               );
        }
    }
}
