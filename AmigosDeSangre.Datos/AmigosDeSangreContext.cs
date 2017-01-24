using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Entity;
using System.Threading.Tasks;
using System.Data.Entity.ModelConfiguration.Conventions;
using AmigosDeSangre.Datos.Modelos;

namespace AmigosDeSangre.Datos
{
    public class AmigosDeSangreContext: DbContext
    {
        public AmigosDeSangreContext() : base("AmigosDeSangre")
        {
        }
        public DbSet<Solicitud> Solicitudes { get; set; }
        public DbSet<Donante> Donantes { get; set; }

        public DbSet<Producto> Productos { get; set; }
        public DbSet<GrupoSanguineo> GrupoSanguineos { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
