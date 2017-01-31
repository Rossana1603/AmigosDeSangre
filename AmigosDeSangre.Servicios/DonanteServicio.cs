using System;
using System.Transactions;
using System.Collections.Generic;
using AmigosDeSangre.Entidades;
using AmigosDeSangre.Datos.Repositorios;
using AmigosDeSangre.Datos;
using AmigosDeSangre.Datos.Modelos;
using AutoMapper;
using System.Linq;

namespace AmigosDeSangre.Servicios
{
    public class DonanteServicio : IDonanteServicio
    {
        private readonly IRepositorioDonante _repositorioDonante;

        public DonanteServicio(IRepositorioDonante repositorioDonante)
        {
            _repositorioDonante = repositorioDonante;
        }

        public int InsertarDonante(DonanteEntidad donanteEntidad)
        {
            using (TransactionScope scope = new TransactionScope())
            {
                var donante = new Donante
                {
                    Nombres = donanteEntidad.Nombres,
                    Apellidos = donanteEntidad.Apellidos,
                    GrupoSanguineoCodigo = donanteEntidad.GrupoSanguineoCodigo,
                    FechaNacimiento = donanteEntidad.FechaNacimiento,
                    TipoDocumento = donanteEntidad.TipoDocumento,
                    NumeroDocumento = donanteEntidad.NumeroDocumento,
                    EstadoCivil = donanteEntidad.EstadoCivil,
                    Genero = donanteEntidad.Genero,
                    Telefono = donanteEntidad.Telefono,
                    Domicilio = donanteEntidad.Domicilio,
                    Email = donanteEntidad.Email,
                    Estado = Datos.Modelos.Estado.Apto
                };

                _repositorioDonante.InsertarDonante(donante);
                _repositorioDonante.Save();
                scope.Complete();
                return donante.CodigoDonante;
            }
        }

        public IEnumerable<DonanteEntidad> ObtenerDonantes()
        {
            var donantes = _repositorioDonante.ObtenerDonantes();
            if (donantes.Any())
            {
                var config =
                    new MapperConfiguration(p => p.CreateMap<Donante, DonanteEntidad>());
                var donantesModel = Mapper.Map<IEnumerable<Donante>, IEnumerable<DonanteEntidad>>(donantes);
                return donantesModel;
            }
            return null;
        }
    }
}
