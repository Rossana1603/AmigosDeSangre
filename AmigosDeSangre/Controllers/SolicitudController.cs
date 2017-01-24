using AmigosDeSangre.Entidades;
using AmigosDeSangre.Servicios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AmigosDeSangre.Controllers
{
    public class SolicitudController : ApiController
    {
        private readonly ISolicitudServicio _solicitudServicio;

        public SolicitudController()
        {
            _solicitudServicio = new SolicitudServicio();
        }

        public int Post([FromBody] SolicitudEntidad solicitudEntidad)
        {
            return _solicitudServicio.InsertarSolicitud(solicitudEntidad);
        }

        // GET api/solicitud
        public HttpResponseMessage Get()
        {
            var solicitudes = _solicitudServicio.ObtenerSolicitudes();
            if (solicitudes != null)
            {
                var solicitudEntities = solicitudes as List<SolicitudEntidad> ?? solicitudes.ToList();
                if (solicitudEntities.Any())
                    return Request.CreateResponse(HttpStatusCode.OK, solicitudEntities);
            }
            return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Solicitudes not found");
        }

    }
}
