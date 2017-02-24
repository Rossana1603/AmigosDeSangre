namespace AmigosDeSangre.Datos.Migrations
{
    using System;
    using System.Data.Entity.Migrations;

    public partial class AddNewTables : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CentroMedico",
                c => new
                {
                    CodigoCentro = c.Int(nullable: false, identity: true),
                    Descripcion = c.String(maxLength: 50),
                    Direccion = c.String(maxLength: 50),
                    Estado = c.Boolean(nullable: false),
                    Horario_CodigoHorario = c.Int(),
                })
                .PrimaryKey(t => t.CodigoCentro)
                .ForeignKey("dbo.Horario", t => t.Horario_CodigoHorario)
                .Index(t => t.Horario_CodigoHorario);

            CreateTable(
                "dbo.Horario",
                c => new
                {
                    CodigoHorario = c.Int(nullable: false, identity: true),
                    Direccion = c.String(maxLength: 50),
                    DetalleHorario_CodigoDetalleHorario = c.Int(),
                })
                .PrimaryKey(t => t.CodigoHorario)
                .ForeignKey("dbo.DetalleHorario", t => t.DetalleHorario_CodigoDetalleHorario)
                .Index(t => t.DetalleHorario_CodigoDetalleHorario);

            CreateTable(
                "dbo.DetalleHorario",
                c => new
                {
                    CodigoDetalleHorario = c.Int(nullable: false, identity: true),
                    HoraInicio = c.String(maxLength: 20),
                    HoraFin = c.String(maxLength: 20)
                })
                .PrimaryKey(t => t.CodigoDetalleHorario);

        }

        public override void Down()
        {
            DropForeignKey("dbo.CentroMedico", "Horario_CodigoHorario", "dbo.Horario");
            DropForeignKey("dbo.Horario", "DetalleHorario_CodigoDetalleHorario", "dbo.DetalleHorario");
            DropIndex("dbo.Horario", new[] { "DetalleHorario_CodigoDetalleHorario" });
            DropIndex("dbo.CentroMedico", new[] { "Horario_CodigoHorario" });
            DropTable("dbo.DetalleHorario");
            DropTable("dbo.Horario");
            DropTable("dbo.CentroMedico");
        }
    }
}
