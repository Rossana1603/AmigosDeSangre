using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmigosDeSangre.Entidades
{
    public class SolicitudEntidad
    {
        public int Codigo { get; set; }
        public int CodigoProducto { get; set; }
        public int CodigoGrupoSanguineo { get; set; }
        public string NombrePaciente { get; set; }
        public int EdadPaciente { get; set; }
        public int UnidadesRequeridas { get; set; }
        public string LugarDonacion { get; set; }
        public string NombreContacto { get; set; }
        public string TelefonoContacto { get; set; }
        public string EmailContacto { get; set; }
        public string Fecha { get; set; }
        public bool Estado { get; set; }

    }
}
