using AmigosDeSangre.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmigosDeSangre.Servicios
{
    public interface ISolicitudServicio
    {
        int InsertarSolicitud(SolicitudEntidad solicitudEntidad);
        IEnumerable<SolicitudEntidad> ObtenerSolicitudes();
    }
}
