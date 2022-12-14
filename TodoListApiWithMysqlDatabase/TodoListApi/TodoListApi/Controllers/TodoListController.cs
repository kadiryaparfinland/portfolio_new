using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using todolist.Data;

namespace TodoListApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class 
        TodoListController : ControllerBase
    {
        private readonly todolist.Data.todolistContext _context;

        public TodoListController(todolistContext context)
        {
            _context = context;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<todolist.Models.Todolist>>> GetList()
        {
            return await _context.Todolists.ToListAsync();
        }

       
    }
}
