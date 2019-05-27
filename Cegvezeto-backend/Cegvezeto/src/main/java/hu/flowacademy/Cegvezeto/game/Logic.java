package hu.flowacademy.Cegvezeto.game;

import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class Logic {

    Company company = new Company(1000000, 0, LocalDate.now());
    Store store = new Store(666, 2, 6,0);
    Advertisement advertisement = new Advertisement( 4);
    Ingredient ingredient = new Ingredient();
    Workers workers = new Workers(2, 0);


    public void hiringWorkers(int n) {
        if(company.getCompanyMoney() >= (workers.getWage()*n)) {
            workers.setWorkersNumber(workers.getWorkersNumber() + n);
            int a = workers.getWage() * n;
            System.out.println("Felvettél " + n + "új munkást!" + " workers.getWage:" + workers.getWage() + " a:" + a +"workersnumber:" + workers.getWorkersNumber());
        } else {
            System.out.println("Nincs elég pénzed " + n + "munkás felvételéhez!");
        }
    }

    public void dismissWorkers(int n) {
        if(n <= workers.getWorkersNumber()) {
            workers.setWorkersNumber(workers.getWorkersNumber() - n);
            System.out.println("Elbocsátottál " + n + " munkást!");
        } else {
            System.out.println("Nincs " + n + " munkásod, így nem tudsz ennyit elbocsátani!");
        }
    }

    public int javaWorkers() {
        return workers.getWorkersNumber();
    }

    public void production(int n) {
        if(store.getStoreWheel() >= 4*n && store.getStoreChasis() >= n && store.getStoreEngin() >= n) {
            if(workers.getProductionQuantityNumber() >= n) {

                System.out.println("getStoreWheel:" + store.getStoreWheel() + " " +
                        "getStoreChasis:" + store.getStoreChasis() + " " +
                        "getStoreEngin:" + store.getStoreEngin() + " " +
                        "getStoreCar:" + store.getStoreCar() + " " +
                        "production:" + workers.getProductionQuantityNumber());
                store.setStoreWheel(store.getStoreWheel() - (n * 4));
                store.setStoreChasis(store.getStoreChasis() - n);
                store.setStoreEngin(store.getStoreEngin() - n);
                store.setStoreCar(store.getStoreCar() + n);
                System.out.println("getStoreWheel:" + store.getStoreWheel() + " " +
                        "getStoreChasis:" + store.getStoreChasis() + " " +
                        "getStoreEngin:" + store.getStoreEngin() + " " +
                        "getStoreCar:" + store.getStoreCar() + " " +
                        "production:" + workers.getProductionQuantityNumber());
                System.out.println(n + "db autó összeszerelésre került");
            } else {
                System.out.println("Nincs elég munkásod " + n + "db autó összeszerelésére! " + " workersnumber:" + workers.getWorkersNumber() + "productionQuantityNumber:" + workers.getProductionQuantityNumber());
                System.out.println("getStoreWheel:" + store.getStoreWheel() + " " +
                        "getStoreChasis:" + store.getStoreChasis() + " " +
                        "getStoreEngin:" + store.getStoreEngin() + " " +
                        "getStoreCar:" + store.getStoreCar() + " " +
                        "production:" + workers.getProductionQuantityNumber());
            }
        } else {
            System.out.println("Nincs elég nyersanyagod " + n + "db autó összeszerelésére");
            System.out.println("getStoreWheel:" + store.getStoreWheel() + " " +
                    "getStoreChasis:" + store.getStoreChasis() + " " +
                    "getStoreEngin:" + store.getStoreEngin() + " " +
                    "getStoreCar:" + store.getStoreCar() + " " +
                    "production:" + workers.getProductionQuantityNumber());
        }
    }


    public int buyWheel(int n) {
        if(company.getCompanyMoney() >= (ingredient.getWheel()*n)) {
            company.setCompanyMoney(company.getCompanyMoney() - (ingredient.getWheel()*n)); //A cég vagyonát csökkenti a kerék árával
            store.setStoreWheel(store.getStoreWheel() + n); // a raktárba bekerül eggyel több kerék
            System.out.println("buyWheel getCompanyMoney:" + company.getCompanyMoney() + " " + "storeWheel:" + store.getStoreWheel());
            return store.getStoreWheel();
        } else {
            System.out.println("Nincs elég pénzed " + n + "db kerék megvásárlásához");
        } return store.getStoreWheel();
    }

    public int javaWheel() {
        return store.getStoreWheel();
    }

    public void buyChasis(int n) {
        if(company.getCompanyMoney() >= (ingredient.getChasis())*n) {
            company.setCompanyMoney(company.getCompanyMoney() - (ingredient.getChasis()) * n);
            store.setStoreChasis(store.getStoreChasis() + n);
            System.out.println("buyChasis getCompanyMoney:" + company.getCompanyMoney() + " " + "storeChasis:" + store.getStoreChasis());
        } else {
            System.out.println("Nincs elég pénzed " + n +"db kasztni megvásárlásához");
        }
    }

    public int javaChasis() {
        return store.getStoreChasis();
    }

        public void buyEngin(int n) {
        if (company.getCompanyMoney() >= (ingredient.getEngin()) * n) {
            company.setCompanyMoney(company.getCompanyMoney() - (ingredient.getEngin()) * n);
            store.setStoreEngin(store.getStoreEngin() + n);
            System.out.println("buyEngin getCompanyMoney:" + company.getCompanyMoney() + " " + "storeEngin:" + store.getStoreEngin());
        } else {
            System.out.println("Nincs elég pénzed " + n +"db kasztni megvásárlásához");
        }
    }

    public int javaEngin() {
        return store.getStoreEngin();
    }

    public void buyAdvertisement(int n) {
        if (company.getCompanyMoney() >= (advertisement.getAdvertisementPrice()*n)) {

            advertisement.setAdvertisementNumber(advertisement.getAdvertisementNumber() + n);
            System.out.println("Vásároltál " + n + " rekmlámot!" + "getadvertisementNumber:" + advertisement.getAdvertisementNumber() + " price:" + advertisement.getAdvertisementPrice());
        } else {
            System.out.println("Nincs elég pénzed " + n + " reklám megvásárlásához!");
        }
    }

    public void sellAdvertisement(int n) {
        if (advertisement.getAdvertisementNumber() >= n) {
            advertisement.setAdvertisementNumber(advertisement.getAdvertisementNumber() * n);
            System.out.println("Lemondtál " + n + "db reklámot!");
        } else {
            System.out.println("Nincs " + n + "db reklámod, így nem is tudod lemondani!");
        }
    }

    public int javaAdvertisement() {
        return advertisement.getAdvertisementNumber();
    }

    public void sell(int quantity, int sellingPrice) {
        if(quantity <= store.getStoreCar()) {
            if (sellingPrice <= ((ingredient.getEngin() + ingredient.getChasis() + (ingredient.getWheel())*4)*2.5)) { // Az alapanyagok max. 250%-ért lehet eladni terméket
                company.setMonth(company.getMonth().plusMonths(1));
                System.out.println(company.getMonth());
                company.setCompanyMoney(company.getCompanyMoney() - (advertisement.getAdvertisementPrice()*advertisement.getAdvertisementNumber())); // Levonjuk a havi reklámköltséget
                company.setCompanyMoney(company.getCompanyMoney() - (workers.getWorkersNumber()*workers.getWage()));    // Levonjuk a havi rbérköltséget

                double random = (double)company.getSellingRandomNumber();
                double reklam = (double)advertisement.getAdvertisementBoost()*advertisement.getAdvertisementNumber();
                double randomPlusReklam = random + reklam;
                if(randomPlusReklam > 100) {
                    randomPlusReklam = 100;

                }

                double sellingquantity2 = quantity*(randomPlusReklam)/100;
                int realselling = (int)sellingquantity2;
                int monthIncom = realselling*sellingPrice;
                company.setCompanyMoney(company.getCompanyMoney()+(realselling*sellingPrice));
                System.out.println("random:" + company.getSellingRandomNumber() + " " + random +
                        " reklám:" + reklam + " sellingquantity2:" + sellingquantity2 +
                        " realselling:" + realselling +
                        " randomPlusReklám:" + randomPlusReklam);
                System.out.println("storeCar:" + store.getStoreCar());
                store.setStoreCar(store.getStoreCar()-realselling);
                System.out.println("storeCar: " + store.getStoreCar());
                System.out.println("Sikeresen eladtál " + realselling + "db autót! A havi bevételed:" + monthIncom);
            } else {
                double prise = (ingredient.getEngin() + ingredient.getChasis() + (ingredient.getWheel()*4))*2.5;
                System.out.println("Túl drágán akarod eladni az autót! Az autó maximum ára " + prise + "fabatka lehet");
            }
        } else {
            System.out.println("Nincs " + quantity + "db autód, amit eladhatnál!");
        }
    }
}
