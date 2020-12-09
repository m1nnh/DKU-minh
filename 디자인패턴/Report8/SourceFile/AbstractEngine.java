package homework;

public abstract class AbstractEngine implements Engine
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
	public StandardEngine(int size)
	{
		super(size, false);
	}
}

class TurboEngine extends AbstractEngine
{
	public TurboEngine(int size)
	{
		super(size,true);
	}
}