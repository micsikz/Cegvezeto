package hu.flowacademy.Cegvezeto.game.controller;

import hu.flowacademy.Cegvezeto.game.Logic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "sell")
public class SellController {

    @Autowired
    private Logic logic;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/sell")
    public int[] sell(@RequestBody int n) {
        return logic.sell(n);
    }
}
