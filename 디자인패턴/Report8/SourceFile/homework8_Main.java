package homework;

public class homework8_Main {

	public static void main(String[] args)
	{
		Vehicle myCar = new BoxVan(new StandardEngine(1300));
		myCar.paint(Vehicle.Colour.BLUE);
		System.out.println(myCar);
		
		myCar = new AirConditionedVehicle(myCar);
		System.out.println(myCar);
		
		myCar = new AlloyWheeledVehicle(myCar);
		System.out.println(myCar);
		
		myCar = new LeatherSeatedVehicle(myCar);
		System.out.println(myCar);
		
		myCar = new MetallicPaintedVehicle(myCar);
		System.out.println(myCar);
		
		myCar = new SatNavVehicle(myCar);
		System.out.println(myCar);
	}
	
}
