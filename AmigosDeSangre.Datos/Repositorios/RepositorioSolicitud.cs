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
        private readonly AmigosDeSangreContext _dbContext;


        public RepositorioSolicitud(AmigosDeSangreContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void ActualizarSolicitud(Donante solicitud)
        {
            _dbContext.Entry(solicitud).State = EntityState.Modified;
        }

        public void EliminarSolicitud(int codigoSolicitud)
        {
            Solicitud solicitud = _dbContext.Solicitudes.Find(codigoSolicitud);
            _dbContext.Solicitudes.Remove(solicitud);
        }

        public void InsertarSolicitud(Solicitud solicitud)
        {
            _dbContext.Solicitudes.Add(solicitud);
        }

        public IEnumerable<Solicitud> ObtenerSolicitudes()
        {
            return _dbContext.Solicitudes.ToList();
        }

        public Solicitud ObtenerSolicitudPorCodigo(int codigoSolicitud)
        {
            return _dbContext.Solicitudes.Find(codigoSolicitud);
        }

        public void Save()
        {
            _dbContext.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _dbContext.Dispose();
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
