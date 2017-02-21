using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmigosDeSangre.Datos.Modelos
{
    public class Horario
    {
        [Key]
        public int CodigoHorario { get; set; }
        public string Descripcion { get; set; }

        public virtual DetalleHorario DetalleHorario { get; set; }
    }
}
