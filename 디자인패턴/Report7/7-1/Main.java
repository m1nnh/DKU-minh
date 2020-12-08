package homework8_1;

public class Main {
	public static void main(String []args) {
		SpeedMonitor monitor = new SpeedMonitor();
		Speedmeter speedo = new Speedmeter();
		speedo.addObserver(monitor);
		speedo.setCurrentSpeed(50);
		speedo.setCurrentSpeed(70);
		speedo.setCurrentSpeed(40);
		speedo.setCurrentSpeed(100);
		speedo.setCurrentSpeed(65);
	}
}
