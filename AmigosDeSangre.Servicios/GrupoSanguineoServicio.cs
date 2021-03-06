﻿using AmigosDeSangre.Datos;
using AmigosDeSangre.Datos.Modelos;
using AmigosDeSangre.Datos.Repositorios;
using AmigosDeSangre.Entidades;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmigosDeSangre.Servicios
{
    public class GrupoSanguineoServicio : IGrupoSanguineoServicio
    {
        private readonly IRepositorioGrupoSanguineo _repositorioGrupoSanguineo;

        public GrupoSanguineoServicio(IRepositorioGrupoSanguineo repositorioGrupoSanguineo)
        {
            _repositorioGrupoSanguineo = repositorioGrupoSanguineo;
        }
        public IEnumerable<GrupoSanguineoEntidad> ObtenerGrupos()
        {
            var grupos = _repositorioGrupoSanguineo.ObtenerGrupos();
            if (grupos.Any())
            {
                var config =
                    new MapperConfiguration(p => p.CreateMap<GrupoSanguineo, GrupoSanguineoEntidad>());
                var gruposModel = Mapper.Map<IEnumerable<GrupoSanguineo>, IEnumerable<GrupoSanguineoEntidad>>(grupos);
                return gruposModel;
            }
            return null;
        }
    }
}
