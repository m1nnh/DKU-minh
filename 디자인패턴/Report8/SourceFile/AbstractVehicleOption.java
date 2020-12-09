package homework;

public abstract class AbstractVehicleOption extends AbstractVehicle
{
	public AbstractVehicleOption(Engine engine, Vehicle.Colour colour)
	{
		super(engine, colour);
	}
}

class AirConditionedVehicle extends AbstractVehicleOption
{
	private Vehicle v;
	public AirConditionedVehicle(Vehicle v)
	{
		super(v.getEngine(), v.getColour());
		this.v = v;
	}
	
	@Override
	public int getPrice() 
	{
		return v.getPrice()+660;
	}
}

class AlloyWheeledVehicle extends AbstractVehicleOption
{
	private Vehicle v;
	public AlloyWheeledVehicle(Vehicle v)
	{
		super(v.getEngine(), v.getColour());
		this.v = v;
	}
	
	@Override
	public int getPrice() 
	{
		return v.getPrice()+250;
	}
}

class LeatherSeatedVehicle extends AbstractVehicleOption
{
	private Vehicle v;
	public LeatherSeatedVehicle(Vehicle v)
	{
		super(v.getEngine(), v.getColour());
		this.v = v;
	}
	
	@Override
	public int getPrice() 
	{
		return v.getPrice()+1200;
	}
}

class MetallicPaintedVehicle extends AbstractVehicleOption
{
	private Vehicle v;
	public MetallicPaintedVehicle(Vehicle v)
	{
		super(v.getEngine(), v.getColour());
		this.v = v;
	}
	
	@Override
	public int getPrice() 
	{
		return v.getPrice()+750;
	}
}

class SatNavVehicle extends AbstractVehicleOption
{
	private Vehicle v;
	public SatNavVehicle(Vehicle v)
	{
		super(v.getEngine(), v.getColour());
		this.v = v;
	}
	
	@Override
	public int getPrice() 
	{
		return v.getPrice()+1500;
	}
}
