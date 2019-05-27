package hu.flowacademy.Cegvezeto.game;

public class Workers {

    private final int WORKERWAGE = 50000;
    private int workerWage;
    private final int PRODUCTIONSPEED = 30;
    private int productionSpeed;
    private int workersNumber;
    private int productionQuantityNumber;

    public int getProductionQuantityNumber() {
        return workersNumber*productionSpeed;
    }

    public int getWorkersNumber() {
        return workersNumber;
    }

    public void setWorkersNumber(int workersNumber) {
        this.workersNumber = workersNumber;
    }

    public Workers(int workersNumber, int productionQuantityNumber) {
        this.workersNumber = workersNumber;
        this.workerWage = WORKERWAGE;
        this.productionSpeed = PRODUCTIONSPEED;
        this.productionQuantityNumber = productionQuantityNumber;
    }

    public int getWage() {
        return workerWage;
    }
}
