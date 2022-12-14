namespace Exercise007
{
    public class HealthStation
    {
        public int weighings { get; private set; }

        // Create a constructor here, if needed
        public void Feed(Person person)
        {
            person.weight = person.weight + 1;
        }

        public int Weigh(Person person)
        {
            // return the weight of the person passed as the parameter
            this.weighings = this.weighings + 1;

            return person.weight;
        }


    }
}