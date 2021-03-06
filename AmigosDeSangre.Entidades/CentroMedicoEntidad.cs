﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmigosDeSangre.Entidades
{
    public class CentroMedicoEntidad
    {
        public int CodigoCentro { get; set; }
        public string Descripcion { get; set; }
        public string Direccion { get; set; }   
        public bool Estado { get; set; }
        public virtual HorarioEntidad Horario { get; set; }
    }
}
