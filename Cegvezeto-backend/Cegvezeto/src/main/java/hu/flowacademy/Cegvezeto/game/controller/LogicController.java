package hu.flowacademy.Cegvezeto.game.controller;

import hu.flowacademy.Cegvezeto.game.Logic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "logic")
public class LogicController {

    @Autowired
    private Logic logic;

    @CrossOrigin(origins="*")
    @GetMapping("/logic")
    public int[] logic() {
        return logic.everyData();
    }

}
