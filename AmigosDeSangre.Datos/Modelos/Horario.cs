using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmigosDeSangre.Datos.Modelos
{
    public class Horario
    {
        public int CodigoHorario { get; set; }
        public string Descripcion { get; set; }

        public virtual DetalleHorario DetalleHorario { get; set; }
    }
}
