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
        private AmigosDeSangreContext context;


        public RepositorioDonante(AmigosDeSangreContext context)
        {
            this.context = context;
        }

        public void EliminarDonante(int codigoDonante)
        {
            Donante donante = context.Donantes.Find(codigoDonante);
            context.Donantes.Remove(donante);
        }

        public void InsertarDonante(Donante donante)
        {
            context.Donantes.Add(donante);
        }

        public Donante ObtenerDonantePorCodigo(int codigoDonante)
        {
            return context.Donantes.Find(codigoDonante);
        }

        public IEnumerable<Donante> ObtenerDonantes()
        {
            return context.Donantes.ToList();
        }
        public void ActualizarDonante(Donante donante)
        {
            context.Entry(donante).State = EntityState.Modified;
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
