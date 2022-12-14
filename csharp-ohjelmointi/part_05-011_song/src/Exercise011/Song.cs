namespace Exercise011
{
    public class Song
    {
        private string artist;
        private string name;
        private int durationInSeconds;

        public Song(string artist, string name, int durationInSeconds)
        {
            this.artist = artist;
            this.name = name;
            this.durationInSeconds = durationInSeconds;
        }

        public override bool Equals(object compared)
        {
            if (!(compared is Song))
            {
                return false;
            }
            if (this == compared) return true;
            if (compared == null) return false;
            Song song = (Song)compared;
            if (artist == song.artist && name == song.name && durationInSeconds == song.durationInSeconds)
            {
                return true;
            }
            else
            {
                return false;
            }

        }

        public override string ToString()
        {
            return this.artist + ": " + this.name + " (" + this.durationInSeconds + " s)";
        }


    }
}