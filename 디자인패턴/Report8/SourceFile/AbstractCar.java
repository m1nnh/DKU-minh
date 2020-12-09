package homework;

public abstract class AbstractCar extends AbstractVehicle
{
	
	public AbstractCar(Engine engine)
	{
		super(engine);
	}
	
	public AbstractCar(Engine engine, Vehicle.Colour colour)
	{
		super(engine, colour);
	}
	
}

class Saloon extends AbstractCar
{
	public Saloon(Engine engine) 
	{
		super(engine);
	}
	
	public Saloon(Engine engine, Vehicle.Colour colour)
	{
		super(engine, colour);
	}
	
	@Override
	public int getPrice() 
	{
		return 6000;
	}
}

class Coupe extends AbstractCar
{
	public Coupe(Engine engine, Vehicle.Colour colour)
	{
		super(engine, colour);
	}
	
	@Override
	public int getPrice() 
	{
		return 7000;
	}
}

class Sport extends AbstractCar
{
	public Sport(Engine engine, Vehicle.Colour colour)
	{
		super(engine, colour);
	}
	
	@Override
	public int getPrice() {
		return 8000;
	}
}