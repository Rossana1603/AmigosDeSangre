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
                    HorarioCodigo = c.Int(nullable: false),
                    Descripcion = c.String(maxLength: 50),
                    Direccion = c.String(maxLength: 50),
                    Estado = c.Boolean(nullable: false),

                })
                .PrimaryKey(t => t.CodigoCentro)
                .ForeignKey("dbo.Horario", t => t.HorarioCodigo, cascadeDelete: true)
                .Index(t => t.HorarioCodigo);

            CreateTable(
                "dbo.Horario",
                c => new
                {
                    CodigoHorario = c.Int(nullable: false, identity: true),
                    DetalleHorarioCodigo = c.Int(nullable: false),
                    Descripcion = c.String(maxLength: 50)

                })
                .PrimaryKey(t => t.CodigoHorario)
                .ForeignKey("dbo.DetalleHorario", t => t.DetalleHorarioCodigo, cascadeDelete: true)
                .Index(t => t.DetalleHorarioCodigo);

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
            DropTable("dbo.CentroMedico");
            DropTable("dbo.Horario");
            DropTable("dbo.DetalleHorario");
        }
    }
}
