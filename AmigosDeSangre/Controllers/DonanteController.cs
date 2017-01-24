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
    public class DonanteController : ApiController
    {
        private readonly IDonanteServicio _donanteServicio;

        public DonanteController()
        {
            _donanteServicio = new DonanteServicio();
        }

        public int Post([FromBody] DonanteEntidad donanteEntidad)
        {
            return _donanteServicio.InsertarDonante(donanteEntidad);
        }

        // GET api/donante
        public HttpResponseMessage Get()
        {
            var donantes = _donanteServicio.ObtenerDonantes();
            if (donantes != null)
            {
                var donanteEntities = donantes as List<DonanteEntidad> ?? donantes.ToList();
                if (donanteEntities.Any())
                    return Request.CreateResponse(HttpStatusCode.OK, donanteEntities);
            }
            return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Donantes not found");
        }
    }
}
