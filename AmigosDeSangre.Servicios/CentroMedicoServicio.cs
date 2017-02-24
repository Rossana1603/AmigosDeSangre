using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AmigosDeSangre.Entidades;
using AmigosDeSangre.Datos.Repositorios;
using AutoMapper;
using AmigosDeSangre.Datos.Modelos;

namespace AmigosDeSangre.Servicios
{
    public class CentroMedicoServicio : ICentroMedicoServicio
    {
        private readonly IRepositorioCentroMedico _repositorioCentroMedico;

        public CentroMedicoServicio(IRepositorioCentroMedico repositorioCentroMedico)
        {
            _repositorioCentroMedico = repositorioCentroMedico;
        }
        public IEnumerable<CentroMedicoEntidad> ObtenerCentros()
        {
            var centros = _repositorioCentroMedico.ObtenerCentros();
            if (centros.Any())
            {
                var config =
                    new MapperConfiguration(p => p.CreateMap<CentroMedico, CentroMedicoEntidad>());
                var centrosModel = Mapper.Map<IEnumerable<CentroMedico>, IEnumerable<CentroMedicoEntidad>>(centros);
                return centrosModel;
            }
            return null;
        }
    }
}
