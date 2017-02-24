using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmigosDeSangre.Datos.Modelos
{
    public class CentroMedico
    {
        [Key]
        public int CodigoCentro { get; set; }
        public string Descripcion { get; set; }
        public string Direccion{ get; set; }
        public bool Estado { get; set; }

        public virtual Horario Horario { get; set; }
    }
}
