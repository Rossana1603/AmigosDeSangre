using AmigosDeSangre.Datos;
using AmigosDeSangre.Datos.Modelos;
using AmigosDeSangre.Datos.Repositorios;
using AmigosDeSangre.Entidades;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

namespace AmigosDeSangre.Servicios
{
    public class SolicitudServicio : ISolicitudServicio
    {
        private readonly IRepositorioSolicitud _repositorioSolicitud;

        public SolicitudServicio(IRepositorioSolicitud repositorioSolicitud)
        {
            _repositorioSolicitud = repositorioSolicitud;
        }

        public int InsertarSolicitud(SolicitudEntidad solicitudEntidad)
        {
            using (TransactionScope scope = new TransactionScope())
            {
                var solicitud = new Solicitud
                {
                    CodigoProducto = solicitudEntidad.CodigoProducto,
                    GrupoSanguineoCodigo = solicitudEntidad.GrupoSanguineoCodigo,
                    NombrePaciente = solicitudEntidad.NombrePaciente,
                    EdadPaciente = solicitudEntidad.EdadPaciente,
                    UnidadesRequeridas = solicitudEntidad.UnidadesRequeridas,
                    NombreContacto = solicitudEntidad.NombreContacto,
                    LugarDonacion = solicitudEntidad.LugarDonacion,
                    TelefonoContacto = solicitudEntidad.TelefonoContacto,
                    EmailContacto = solicitudEntidad.EmailContacto,
                    Fecha = DateTime.Now.ToShortDateString(),
                    Estado = solicitudEntidad.Estado
                };

                _repositorioSolicitud.InsertarSolicitud(solicitud);
                _repositorioSolicitud.Save();
                scope.Complete();
                return solicitud.Codigo;
            }
        }

        public IEnumerable<SolicitudEntidad> ObtenerSolicitudes()
        {
            var solicitudes = _repositorioSolicitud.ObtenerSolicitudes();
            if (solicitudes.Any())
            {
                var config =
                    new MapperConfiguration(p => p.CreateMap<Solicitud, SolicitudEntidad>());
                var solicitudesModel = Mapper.Map<IEnumerable<Solicitud>, IEnumerable<SolicitudEntidad>>(solicitudes);
                return solicitudesModel;
            }
            return null;
        }


    }
}
