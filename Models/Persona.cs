using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace ProyectoFinal.Models
{
    public class Persona
    {
        [JsonProperty("id")]
         public int Id { get; set; }
        [JsonProperty("Identificacion")]
        [Required] public string Identificacion{ get; set; }
        [JsonProperty("Nombre")]
        [Required] public string Nombre{ get; set; }
        [JsonProperty("Apellido")]
        [Required] public string Apellido{ get; set; }
        [JsonProperty("sexo")]
        [Required] public string Sexo{ get; set; }
        [JsonProperty("edad")]
        [Required] public string Edad{ get; set; }
        [JsonProperty("departamento")]
        [Required] public string Departamento{ get; set; }
        [JsonProperty("ciudad")]
        [Required] public string Ciudad{ get; set; }
        [JsonProperty("alimentario")]
        [Required] public string alimentario{ get; set; }
        [JsonProperty("valor")]
        [Required] public float valor{ get; set; }
        public string estado{get; set;}
   
    }
}