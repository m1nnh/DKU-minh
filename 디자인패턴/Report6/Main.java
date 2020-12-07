package homework5;

interface Engine
{
	public int getSize();
	public boolean isTurbo();
}

abstract class AbstractEngine implements Engine
{
	private int size; // engine size
	private boolean turbo; // tells if turbo charged
	
	public AbstractEngine(int size, boolean turbo)
	{
		this.size=size;
		this.turbo=turbo;
	}
	
	@Override
	public int getSize() // size getter
	{
		return size;
	}
	@Override
	public boolean isTurbo() // tells if turbo charged
	{
		if(turbo==true)
			return true;
		else
			return false;
	}
}

class StandardEngine extends AbstractEngine
{
	StandardEngine(int size)
	{
		super(size,false); // not turbocharged
	}
}

class TurboEngine extends AbstractEngine
{
	TurboEngine(int size)
	{
		super(size,true); // exist turbocharged
	}
}

interface GearboxStrategy
{
	public void ensureCorrectGear(Engine engine, int speed, Vehicle.Color color);
}

class StandardGearboxStrategy implements GearboxStrategy // standard
{
	@Override
	public void ensureCorrectGear(Engine engine, int speed, Vehicle.Color color) // check if correct gear is installed
	{
		
		System.out.println("Working out correct gear at" + speed + "mph for a STANDARD(Sport) gearbox " + "Color : " + color);
	}
}

class SportGearboxStrategy implements GearboxStrategy // sport
{
	@Override
	public void ensureCorrectGear(Engine engine, int speed, Vehicle.Color color)
	{
		System.out.println("Working out correct gear at" + speed + "mph for a STANDARD(Sport) gearbox " + "Color : " + color);
	}
}

interface Vehicle
{
	public enum Color
	{
		UNPAINTED,BLUE,BLACK,GREEN,RED,SILVER,WHITE,YELLOW
	};
	
	public Engine getEngine();
	public Vehicle.Color getColor();
	public void paint(Vehicle.Color color);
}

abstract class AbstractVehicle implements Vehicle
{
	private Engine engine;
	private Vehicle.Color color;
	
	public AbstractVehicle(Engine engine)
	{
		
	}
	public AbstractVehicle(Engine engine, Vehicle.Color color)
	{
		this.engine=engine;
		this.color=color;
	}
	@Override
	public Engine getEngine() // engine getter
	{
		return engine;
	}
	@Override
	public Vehicle.Color getColor() // color getter
	{
		return color.BLACK;
	}
	@Override
	public void paint(Vehicle.Color color) // paint a car
	{
		this.color=color;
	}
	
	
}

abstract class AbstractCar extends AbstractVehicle
{
	private GearboxStrategy gear = new StandardGearboxStrategy(); 
	
	public AbstractCar(Engine engine)
	{
		super(engine);
	}
	public AbstractCar(Engine engine,Vehicle.Color color)
	{
		super(engine,color);
	}
	public void setGearboxStrategy(GearboxStrategy gs) // setter for gearboxStrategy
	{
		gear=gs;
	}
	public void getGearBoxStrategy() // getter for gearboxStrategy
	{
		return;
	}
	public void setSpeed(int speed) // gear is installed
	{
		gear.ensureCorrectGear(getEngine(), speed,getColor());
	}
	
}

class Sport extends AbstractCar
{
	public Sport(Engine engine)
	{
		super(engine);
	}
	public Sport(Engine engine, Vehicle.Color color)
	{
		super(engine,color);
	}
}

public class Main {
	public static void main(String args[])
	{
		AbstractCar myCar = new Sport(new StandardEngine(2000));
		myCar.setSpeed(20);
		myCar.setSpeed(40);
		System.out.println("Switching on sports mode gearbox...");
		myCar.setGearboxStrategy(new SportGearboxStrategy());
		myCar.setSpeed(20);
		myCar.setSpeed(40);
	}
}
