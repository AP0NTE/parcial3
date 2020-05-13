using Microsoft.EntityFrameworkCore;
namespace ProyectoFinal.Models
{
    public class PersonaContext:DbContext
    {
        public PersonaContext(DbContextOptions<PersonaContext> options):
        base(options){

        }
        public DbSet<Persona> Persona{get; set;}
    }
}