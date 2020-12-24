import java.util.Scanner;

public class graph {
   public static void main(String[] args) 
   {
      multiStageGraph a = new multiStageGraph();
      a.matrix();
      a.show_matrix();
      a.show_level();
      a.set_dlevel();
      a.print_bcost();
      a.print_bd();
   }
}