package homework8_2;

import java.util.ArrayList;

public class Speedmeter implements Subject {
	int currentSpeed;
	private ArrayList<Observer> observers;
	
	public Speedmeter() {
		observers = new ArrayList<Observer>();
	}
	public void setCurrentSpeed(int speed) {
		this.currentSpeed = speed;
		notifyObservers();
	}
	public int getCurrentSpeed() {
		return this.currentSpeed;
	}
	
	public void registerObserver(Observer o) {
		observers.add(o);
	}
	public void removeObserver(Observer o) {
		int idx = observers.indexOf(o);
		observers.remove(idx);
	}
	public void notifyObservers() {
		for (Observer observer : observers)
			observer.update(currentSpeed);
	}
}
