using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProyectoFinal.Models;


namespace ProyectoFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonaController : ControllerBase
    {
        private readonly PersonaContext _context;
        public PersonaController(PersonaContext context)
        {
            _context = context;
            if (_context.Persona.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.Persona.Add(new Persona {Identificacion="",Nombre="",Apellido="",Sexo="",Edad="",
                Departamento="",Ciudad="",alimentario="",valor=0, estado=""});
                _context.SaveChanges();
            }
            
        }

        // GET: api/Task
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Persona>>> GetTaskItems()
        {
        return await _context.Persona.ToListAsync();
        }

        // GET: api/Task/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Persona>> GetTaskItem(int id)
        {
            var persona = await _context.Persona.FindAsync(id);
            if (persona == null)
            {
                return NotFound();
            }
            return persona;
        }

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Persona>> PostTaskItem(Persona item)
        {
            item.estado="ACTIVO";
            _context.Persona.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTaskItem), new { id = item.Identificacion }, item);
        }

        // PUT: api/Task/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(int id, Persona item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Todo/5

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaskItem(int id)
        {
            var Persona = await
            _context.Persona.FindAsync(id);
            if (Persona == null)
            {
                return NotFound();
            }
            _context.Persona.Remove(Persona);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        
    }
}