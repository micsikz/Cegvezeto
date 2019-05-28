package hu.flowacademy.Cegvezeto.game.controller;

import hu.flowacademy.Cegvezeto.game.Logic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "ingredient")
public class IngredientController {

    @Autowired
    private Logic logic;

    @CrossOrigin(origins = "*", allowedHeaders="*")
    @PostMapping("/buy-wheele")
    public Integer wheel(@RequestBody int n) {
        return logic.buyWheel(n);
    }

    @CrossOrigin(origins = "*", allowedHeaders="*")
    @PostMapping("/buy-chasise")
    public Integer chasis(@RequestBody int n) {
        return logic.buyChasis(n);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/buy-engine")
    public Integer engin(@RequestBody int n) { return logic.buyEngin(n); }

    @CrossOrigin(origins = "*")
    @GetMapping("/buy-wheel")
    public int htmlWheel() {
        return logic.javaWheel();
    }

    @CrossOrigin(origins="*")
    @GetMapping("/buy-chasis")
    public int htmlChasis() {
        return logic.javaChasis();
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/buy-engin")
    public int javaEngin() {
        return logic.javaEngin();
    }


}
