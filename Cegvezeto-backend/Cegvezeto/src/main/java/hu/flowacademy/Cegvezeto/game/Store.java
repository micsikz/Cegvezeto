package hu.flowacademy.Cegvezeto.game;

public class Store {

    private int storeWheel;
    private int storeChasis;
    private int storeEngin;
    private int storeCar;

    public Store(int storeWheel, int storeChasis, int storeEngin, int storeCar) {
        this.storeWheel = storeWheel;
        this.storeChasis = storeChasis;
        this.storeEngin = storeEngin;
        this.storeCar = storeCar;
    }

    public int getStoreCar() {
        return storeCar;
    }

    public void setStoreCar(int storeCar) {
        this.storeCar = storeCar;
    }

    public int getStoreWheel() {
        return storeWheel;
    }

    public void setStoreWheel(int storeWheel) {
        this.storeWheel = storeWheel;
    }

    public int getStoreChasis() {
        return storeChasis;
    }

    public void setStoreChasis(int storeChasis) {
        this.storeChasis = storeChasis;
    }

    public int getStoreEngin() {
        return storeEngin;
    }

    public void setStoreEngin(int storeEngin) {
        this.storeEngin = storeEngin;
    }
}
