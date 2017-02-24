using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmigosDeSangre.Datos.Modelos
{
    public class DetalleHorario
    {
        [Key]
        public int CodigoDetalleHorario { get; set; }
        public string HoraInicio { get; set; }
        public string HoraFin { get; set; }
    }
}
