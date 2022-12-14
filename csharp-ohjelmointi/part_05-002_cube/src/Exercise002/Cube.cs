public class Cube {
    public int edgeLenght { get; set; }
    public int volume { get; set; }

    public Cube(int edgeLenght) {
        this.edgeLenght = edgeLenght;
    }

    public int Volume(){

        volume = edgeLenght * edgeLenght * edgeLenght;
        
        return volume;
    }

    public override string ToString()
    {
      return $"The length of the edge is {this.edgeLenght} and the volume {this.edgeLenght * this.edgeLenght * this.edgeLenght}";
    }
}