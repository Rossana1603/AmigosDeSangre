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

        private readonly IRepositorioHorario _repositorioHorario;

        public CentroMedicoServicio(IRepositorioCentroMedico repositorioCentroMedico, IRepositorioHorario repositorioHorario)
        {
            _repositorioCentroMedico = repositorioCentroMedico;
            _repositorioHorario = repositorioHorario;
        }
        public IEnumerable<CentroMedicoEntidad> ObtenerCentros()
        {
            var centros = _repositorioCentroMedico.ObtenerCentros();
            if (centros.Any())
            {
                var config =
                    new MapperConfiguration(p => p.CreateMap<CentroMedico, CentroMedicoEntidad>());
                var centrosModel = Mapper.Map<IEnumerable<CentroMedico>, IEnumerable<CentroMedicoEntidad>>(centros);

                var horarios = _repositorioHorario.ObtenerHorarios();

                var configHorario =
                    new MapperConfiguration(p => p.CreateMap<Horario, HorarioEntidad>());
                var horariosModel = Mapper.Map<IEnumerable<Horario>, IEnumerable<HorarioEntidad>>(horarios);

                return centrosModel;
            }
            return null;
        }
    }
}
