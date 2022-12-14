using System;
using System.Collections.Generic;

namespace todolist.Models
{
    public partial class Todolist
    {
        public int ItemId { get; set; }
        public string? ItemName { get; set; }
        public bool? IsItemComplete { get; set; }
    }
}
