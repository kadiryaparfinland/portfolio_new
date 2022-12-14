using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using todolist.Models;

namespace todolist.Data
{
    public partial class todolistContext : DbContext
    {
        public todolistContext()
        {
        }

        public todolistContext(DbContextOptions<todolistContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Todolist> Todolists { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Todolist>(entity =>
            {
                entity.HasKey(e => e.ItemId)
                    .HasName("PRIMARY");

                entity.ToTable("todolist");

                entity.Property(e => e.ItemName)
                    .HasMaxLength(500)
                    .UseCollation("utf8mb3_general_ci")
                    .HasCharSet("utf8mb3");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
