using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmigosDeSangre.Datos.Modelos
{
    public class GrupoSanguineo
    {
        [Key]
        public int GrupoSanguineoCodigo { get; set; }
        public string Descripcion { get; set; }
    }
}
