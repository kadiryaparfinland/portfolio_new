namespace Exercise010
{
    using System;
    public class Apartment
    {

        private int rooms;
        private int squares;
        private int pricePerSquare;

        public Apartment(int rooms, int squares, int pricePerSquare)
        {
            this.rooms = rooms;
            this.squares = squares;
            this.pricePerSquare = pricePerSquare;
        }

        public bool LargerThan(Apartment compared)
        {
            if (squares > compared.squares)
            {
                return true;
            }
            else
            {
                return false;
            }

        }

        private int Price()
        {

            return 0;
        }

        public int PriceDifference(Apartment compared)
        {
            // Math.Abs returns the absolute value
            int result = Math.Abs((squares * pricePerSquare) - (compared.pricePerSquare * compared.squares));

            return result;
        }

        public bool MoreExpensiveThan(Apartment compared)
        {
            if (pricePerSquare > compared.pricePerSquare)
            {
                return true;
            }
            return false;
        }
    }
}