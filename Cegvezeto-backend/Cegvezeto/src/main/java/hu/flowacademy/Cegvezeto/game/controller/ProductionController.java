package hu.flowacademy.Cegvezeto.game.controller;

import hu.flowacademy.Cegvezeto.game.Logic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "production")
public class ProductionController {

    @Autowired
    private Logic logic;

    @CrossOrigin(origins = "*", allowedHeaders="*")
    @PostMapping("/production")
    public int[] production(@RequestBody int n) {
        return logic.production(n);
    }
}
