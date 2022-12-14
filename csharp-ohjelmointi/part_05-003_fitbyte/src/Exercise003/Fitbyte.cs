public class Fitbyte
{
    private int restingHeartRate;
    private int age;

    public Fitbyte(int age, int restingHeartRate)
    {
        this.age = age;
        this.restingHeartRate = restingHeartRate;
    }

    public double TargetHeartRate(double percentageOfMaximum)
    {
        double maximumHeartRate = 206.3 - (0.711 * this.age);
        return ((maximumHeartRate - this.restingHeartRate) * percentageOfMaximum + restingHeartRate);
    }


    /* public override string ToString()
    {
        return this.name + ", BMI: " + this.BodyMassIndex()
              + ", maximum heart rate: " + this.MaximumHeartRate();
    } */
}