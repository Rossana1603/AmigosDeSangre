using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AmigosDeSangre.Datos.Modelos;
using System.Data.Entity;

namespace AmigosDeSangre.Datos.Repositorios
{
    public class RepositorioDonante : IRepositorioDonante
    {
        private readonly AmigosDeSangreContext _dbContext;


        public RepositorioDonante(AmigosDeSangreContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void EliminarDonante(int codigoDonante)
        {
            Donante donante = _dbContext.Donantes.Find(codigoDonante);
            _dbContext.Donantes.Remove(donante);
        }

        public void InsertarDonante(Donante donante)
        {
            _dbContext.Donantes.Add(donante);
        }

        public Donante ObtenerDonantePorCodigo(int codigoDonante)
        {
            return _dbContext.Donantes.Find(codigoDonante);
        }

        public IEnumerable<Donante> ObtenerDonantes()
        {
            return _dbContext.Donantes.ToList();
        }
        public void ActualizarDonante(Donante donante)
        {
            _dbContext.Entry(donante).State = EntityState.Modified;
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
