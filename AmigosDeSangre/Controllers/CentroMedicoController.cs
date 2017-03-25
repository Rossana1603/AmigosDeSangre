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
    public class CentroMedicoController : ApiController
    {
        private readonly ICentroMedicoServicio _centroMedicoServicio;
        public CentroMedicoController(ICentroMedicoServicio centroMedicoServicio)
        {
            _centroMedicoServicio = centroMedicoServicio;
        }

        public HttpResponseMessage Get()
        {
            var centros = _centroMedicoServicio.ObtenerCentros();
            if (centros != null)
            {
                var centroMedicoEntities = centros as List<CentroMedicoEntidad> ?? centros.ToList();
                if (centroMedicoEntities.Any())
                    return Request.CreateResponse(HttpStatusCode.OK, centroMedicoEntities);
            }
            return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Centros Médicos not found");
        }

    }
}
