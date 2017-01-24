using AmigosDeSangre.Datos.Modelos;
using AmigosDeSangre.Entidades;

namespace AmigosDeSangre
{
    internal class MapProfile : AutoMapper.Profile
    {
        protected override void Configure()
        {
            CreateMap<Producto, ProductoEntidad>();
            CreateMap<GrupoSanguineo, GrupoSanguineoEntidad>();
            CreateMap<Donante, DonanteEntidad>();
            CreateMap<Solicitud, SolicitudEntidad>();
        }
    }
}