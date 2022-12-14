namespace Exercise012
{
    public class Book
    {

        private string name;
        private int publicationYear;

        public Book(string name, int publicationYear)
        {
            this.name = name;
            this.publicationYear = publicationYear;
        }



        public override bool Equals(object compared)
        {

            if (!(compared is Book))
            {
                return false;
            }
            if (this == compared) return true;
            if (compared == null) return false;

            Book song = (Book)compared;
            if (name == song.name && publicationYear == song.publicationYear)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}