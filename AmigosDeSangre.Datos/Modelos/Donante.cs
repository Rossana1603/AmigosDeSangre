using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmigosDeSangre.Datos.Modelos
{
    public enum Estado
    {
        Apto, NoApto
    }

    public class Donante
    {
        [Key]
        public int CodigoDonante { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public int GrupoSanguineoCodigo  { get; set; }
        public string FechaNacimiento { get; set; }
        public string  TipoDocumento{ get; set; }
        public string NumeroDocumento { get; set; }
        public string EstadoCivil{ get; set; }
        public string Genero { get; set; }
        public string Telefono { get; set; }
        public string Domicilio { get; set; }
        public string Email { get; set; }
        public Estado Estado { get; set; }

        public virtual GrupoSanguineo GrupoSanguineo { get; set; }

    }
}
