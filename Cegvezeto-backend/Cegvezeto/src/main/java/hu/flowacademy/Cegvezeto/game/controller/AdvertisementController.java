package hu.flowacademy.Cegvezeto.game.controller;

import hu.flowacademy.Cegvezeto.game.Logic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "advertisement")
public class AdvertisementController {

    @Autowired
    private Logic logic;

    @CrossOrigin(origins = "*", allowedHeaders="*")
    @PostMapping("/buy-advertisement")
    public Integer buyAdvertisement(@RequestBody int n) {
        return logic.buyAdvertisement(n);
    }

    @CrossOrigin(origins = "*", allowedHeaders="*")
    @PostMapping("/sell-advertisement")
    public Integer sellAddvertisement(@RequestBody int n) {
        return logic.sellAdvertisement(n);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/get-advertisement")
    public int javaAdvertisement() {
        return logic.javaAdvertisement();
    }


}
