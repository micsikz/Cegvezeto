package hu.flowacademy.Cegvezeto.game;

public class Advertisement {
    private final int ADVERTISEMENTPRICE = 12345;
    private int advertisementPrice;
    private int advertisementNumber;
    private final int ADVERTISEMENTBOOST = 5;
    private int advertisementBoost;


    public Advertisement(int advertisementNumber) {
        this.advertisementPrice = ADVERTISEMENTPRICE;
        this.advertisementNumber = advertisementNumber;
        this.advertisementBoost = ADVERTISEMENTBOOST;
    }

    public int getADVERTISEMENTBOOST() {
        return ADVERTISEMENTBOOST;
    }

    public int getAdvertisementBoost() {
        return advertisementBoost;
    }

    public int getAdvertisementPrice() {
        return advertisementPrice;
    }


    public int getAdvertisementNumber() {
        return advertisementNumber;
    }

    public void setAdvertisementNumber(int advertisementNumber) {
        this.advertisementNumber = advertisementNumber;
    }
}
