namespace AmigosDeSangre.Datos.Migrations
{
    using System;
    using System.Data.Entity.Migrations;

    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
             "dbo.Donante",
                 c => new
                 {
                     CodigoDonante = c.Int(nullable: false, identity: true),
                     Nombres = c.String(maxLength: 150),
                     Apellidos = c.String(maxLength: 150),
                     GrupoSanguineoCodigo = c.Int(nullable: false),
                     FechaNacimiento = c.String(maxLength: 20),
                     TipoDocumento = c.String(maxLength: 50),
                     NumeroDocumento = c.String(maxLength: 16),
                     EstadoCivil = c.String(maxLength: 1),
                     Genero = c.String(maxLength: 1),
                     Telefono = c.String(maxLength: 50),
                     Domicilio = c.String(maxLength: 200),
                     Email = c.String(maxLength: 100),
                     Estado = c.Int(nullable: false),
                 })
             .PrimaryKey(t => t.CodigoDonante)
             .ForeignKey("dbo.GrupoSanguineo", t => t.GrupoSanguineoCodigo, cascadeDelete: true)
             .Index(t => t.GrupoSanguineoCodigo);

            CreateTable(
                "dbo.GrupoSanguineo",
                c => new
                {
                    GrupoSanguineoCodigo = c.Int(nullable: false, identity: true),
                    Descripcion = c.String(maxLength: 50),
                })
                .PrimaryKey(t => t.GrupoSanguineoCodigo);

            CreateTable(
                "dbo.Producto",
                c => new
                {
                    CodigoProducto = c.Int(nullable: false, identity: true),
                    Descripcion = c.String(maxLength: 50),
                })
                .PrimaryKey(t => t.CodigoProducto);

            CreateTable(
                "dbo.Solicitud",
                c => new
                {
                    Codigo = c.Int(nullable: false, identity: true),
                    CodigoProducto = c.Int(nullable: false),
                    GrupoSanguineoCodigo = c.Int(nullable: false),
                    NombrePaciente = c.String(maxLength: 200),
                    EdadPaciente = c.Int(nullable: false),
                    UnidadesRequeridas = c.Int(nullable: false),
                    LugarDonacion = c.String(maxLength: 200),
                    NombreContacto = c.String(maxLength: 200),
                    TelefonoContacto = c.String(),
                    EmailContacto = c.String(maxLength: 150),
                    Fecha = c.String(maxLength: 20),
                    Estado = c.Boolean(nullable: false),
                })
                .PrimaryKey(t => t.Codigo)
                .ForeignKey("dbo.GrupoSanguineo", t => t.GrupoSanguineoCodigo, cascadeDelete: true)
                .ForeignKey("dbo.Producto", t => t.CodigoProducto, cascadeDelete: true)
                .Index(t => t.CodigoProducto)
                .Index(t => t.GrupoSanguineoCodigo);

        }

        public override void Down()
        {
            DropForeignKey("dbo.Solicitud", "CodigoProducto", "dbo.Producto");
            DropForeignKey("dbo.Solicitud", "GrupoSanguineoCodigo", "dbo.GrupoSanguineo");
            DropForeignKey("dbo.Donante", "GrupoSanguineoCodigo", "dbo.GrupoSanguineo");
            DropIndex("dbo.Solicitud", new[] { "GrupoSanguineoCodigo" });
            DropIndex("dbo.Solicitud", new[] { "CodigoProducto" });
            DropIndex("dbo.Donante", new[] { "GrupoSanguineoCodigo" });
            DropTable("dbo.Solicitud");
            DropTable("dbo.Producto");
            DropTable("dbo.GrupoSanguineo");
            DropTable("dbo.Donante");
        }
    }
}
