using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AmigosDeSangre.Datos.Modelos;
using System.Data.Entity;

namespace AmigosDeSangre.Datos.Repositorios
{
    public class RepositorioSolicitud : IRepositorioSolicitud
    {
        private AmigosDeSangreContext context;


        public RepositorioSolicitud(AmigosDeSangreContext context)
        {
            this.context = context;
        }

        public void ActualizarSolicitud(Donante solicitud)
        {
            context.Entry(solicitud).State = EntityState.Modified;
        }

        public void EliminarSolicitud(int codigoSolicitud)
        {
            Solicitud solicitud = context.Solicitudes.Find(codigoSolicitud);
            context.Solicitudes.Remove(solicitud);
        }

        public void InsertarSolicitud(Solicitud solicitud)
        {
            context.Solicitudes.Add(solicitud);
        }

        public IEnumerable<Solicitud> ObtenerSolicitudes()
        {
            return context.Solicitudes.ToList();
        }

        public Solicitud ObtenerSolicitudPorCodigo(int codigoSolicitud)
        {
            return context.Solicitudes.Find(codigoSolicitud);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
