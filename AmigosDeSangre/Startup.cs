using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using AutoMapper;

[assembly: OwinStartup(typeof(AmigosDeSangre.Startup))]

namespace AmigosDeSangre
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
