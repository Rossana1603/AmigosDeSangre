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
    public class GrupoSanguineoController : ApiController
    {
        private readonly IGrupoSanguineoServicio _grupoSanguineoServicio;

        public GrupoSanguineoController(IGrupoSanguineoServicio grupoSanguineoServicio)
        {
            _grupoSanguineoServicio = grupoSanguineoServicio;
        }

        // GET api/grupos
        public HttpResponseMessage Get()
        {
            var grupos = _grupoSanguineoServicio.ObtenerGrupos();
            if (grupos != null)
            {
                var groupsEntities = grupos as List<GrupoSanguineoEntidad> ?? grupos.ToList();
                if (groupsEntities.Any())
                    return Request.CreateResponse(HttpStatusCode.OK, groupsEntities);
            }
            return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Groups not found");
        }
    }
}
