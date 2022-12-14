public class Counter
{
    //public int value;

    public Counter(int startValue)
    {
        this.value = startValue;
    }

    public Counter()
    {
        this.value = 0;
    }

    public int value { get; set; }

    public void Increase()
    {
        value = value + 1;
    }

    public void Decrease()
    {
        value = value - 1;
    }

    public void Increase(int increaseBy)
    {
        if (!(increaseBy < 0))
        {
            value = value + increaseBy;
        }
    }

    public void Decrease(int decreaseBy)
    {
        if (!(decreaseBy < 0))
        {
            value = value - decreaseBy;
        }
    }
}