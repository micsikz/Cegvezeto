package hu.flowacademy.Cegvezeto.game;

import java.time.LocalDate;
import java.util.concurrent.ThreadLocalRandom;

public class Company {
    private int companyMoney;
    private int sellingRandomNumber;
    private LocalDate month;

    public Company(int companyMoney, int sellingRandomNumber, LocalDate month) {
        this.companyMoney = companyMoney;
        this.sellingRandomNumber = ThreadLocalRandom.current().nextInt(100);
        this.month = month;
    }

    public LocalDate getMonth() {
        return month;
    }

    public void setMonth(LocalDate month) {
        this.month = month;
    }



    public int getCompanyMoney() {
        return companyMoney;
    }

    public void setCompanyMoney(int money) {
        this.companyMoney = money;
    }


    public int getSellingRandomNumber() {
        return sellingRandomNumber;
    }
}
