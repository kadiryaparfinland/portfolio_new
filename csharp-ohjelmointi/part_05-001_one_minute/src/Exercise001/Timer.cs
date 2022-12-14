public class Timer
  {
    public int value { get; set; }
    public int limit { get; set; }
    public int second { get; set; }

    public Timer()
    {
      this.value = 0;
      this.second = 0;
    }

    public void Advance()
    {
      this.value = this.value + 1;

      if (this.value >= 100)
      {
        this.value = 0;
        this.second = this.second + 1;
      }

      if (this.second >= 60)
      {
        this.second = 0;
      }
    }

    public override string ToString()
    {
      if (this.value < 10 && this.second < 60)
      {
        return "0" + this.second + ":" +  "0" + this.value;
      }

      return "" + this.second + ":" + this.value;
    }
  }