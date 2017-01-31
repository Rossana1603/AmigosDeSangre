using AmigosDeSangre.Datos.Repositorios;
using AmigosDeSangre.Servicios;
using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AmigosDeSangre
{
    public class Bootstrapper
    {
        public static IUnityContainer Initialise()
        {
            var container = BuildUnityContainer();
            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
            return container;
        }
        private static IUnityContainer BuildUnityContainer()
        {
            var container = new UnityContainer();

            // register all your components with the container here  
            //This is the important line to edit  
            container.RegisterType<IDonanteServicio, DonanteServicio>();
            container.RegisterType<IProductoServicio, ProductoServicio>();
            container.RegisterType<ISolicitudServicio, SolicitudServicio>();
            container.RegisterType<IGrupoSanguineoServicio, GrupoSanguineoServicio>();

            container.RegisterType<IRepositorioDonante, RepositorioDonante>();
            container.RegisterType<IRepositorioProducto, RepositorioProducto>();
            container.RegisterType<IRepositorioSolicitud, RepositorioSolicitud>();
            container.RegisterType<IRepositorioGrupoSanguineo, RepositorioGrupoSanguineo>();

            RegisterTypes(container);
            return container;
        }
        public static void RegisterTypes(IUnityContainer container)
        {

        }
    }
}