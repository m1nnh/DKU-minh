package homework;

public abstract class AbstractVan extends AbstractVehicle
{
	
	public AbstractVan(Engine engine) {
		super(engine);
	}
	
	public AbstractVan(Engine engine, Vehicle.Colour colour)
	{
		super(engine, colour);
	}
}

class BoxVan extends AbstractVan
{
	public BoxVan(Engine engine)
	{
		super(engine);
	}
	
	public BoxVan(Engine engine, Vehicle.Colour colour)
	{
		super(engine, colour);
	}
	
	@Override
	public int getPrice() {
		return 9000;
	}
}

class Pickup extends AbstractVan
{
	public Pickup(Engine engine)
	{
		super(engine);
	}
	
	
	public Pickup(Engine engine, Vehicle.Colour colour)
	{
		super(engine, colour);
	}
	
	@Override
	public int getPrice() {
		return 10000;
	}
}